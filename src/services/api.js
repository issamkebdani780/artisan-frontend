const BASE_URL = '/api';

// Secure token management
const TokenManager = {
  // Store token with timestamp for expiration checking
  setToken: (token, user) => {
    if (token) {
      localStorage.setItem('token', token);
      localStorage.setItem('tokenTime', Date.now().toString());
      localStorage.setItem('user', JSON.stringify(user));
    }
  },

  getToken: () => {
    const token = localStorage.getItem('token');
    const tokenTime = localStorage.getItem('tokenTime');
    
    // Check if token is older than 24 hours (86400000 ms)
    if (token && tokenTime) {
      const age = Date.now() - parseInt(tokenTime);
      if (age > 86400000) {
        TokenManager.clearToken();
        return null;
      }
    }
    return token;
  },

  getUser: () => {
    try {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    } catch (e) {
      console.error('Failed to parse user from storage:', e);
      return null;
    }
  },

  clearToken: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenTime');
    localStorage.removeItem('user');
    // Force reload to main page
    if (window.location.pathname.includes('dashboard')) {
      window.location.href = '/';
    }
  },

  isTokenValid: () => {
    const token = TokenManager.getToken();
    return !!token;
  }
};

const getAuthHeaders = (isFormData = false) => {
  const token = TokenManager.getToken();
  if (!token) {
    TokenManager.clearToken();
  }
  return {
    ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
  };
};

// Helper function to handle API responses with proper error checking
const handleResponse = async (res) => {
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({ error: 'API Error' }));
    
    // Handle 401 (Unauthorized)
    if (res.status === 401) {
      if (errorData.error === 'User not found' || errorData.error === 'Invalid credentials' || res.url.includes('/auth/login')) {
        throw new Error(errorData.error);
      } else {
        // Token expired / Unauthorized for protected routes
        TokenManager.clearToken();
        throw new Error('Session expired. Please log in again.');
      }
    }
    
    throw new Error(errorData.error || `HTTP ${res.status}: ${res.statusText}`);
  }
  return res.json();
};

const apiService = {

  // ─── AUTH ──────────────────────────────────────────────────────────────────
  register: async (userData) => {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return handleResponse(res);
  },

  // Register with file uploads (for artisans)
  registerWithFiles: async (formData) => {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        // Don't set Content-Type, let the browser set it with the boundary
      },
      body: formData,
    });
    return handleResponse(res);
  },

  login: async (credentials) => {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    const data = await handleResponse(res);
    if (data.token) {
      TokenManager.setToken(data.token, data.user);
    }
    return data;
  },

  logout: () => {
    TokenManager.clearToken();
  },

  getWilayas: async () => {
    const res = await fetch(`${BASE_URL}/wilayas`);
    return handleResponse(res);
  },

  getCommunes: async (wilayaId) => {
    const res = await fetch(`${BASE_URL}/communes?wilaya_id=${wilayaId}`);
    return handleResponse(res);
  },

  isAuthenticated: () => {
    return TokenManager.isTokenValid();
  },

  getCurrentUser: () => {
    return TokenManager.getUser();
  },

  // ─── ARTISANS ──────────────────────────────────────────────────────────────
  getArtisans: async (filters = {}) => {
    const query = new URLSearchParams(filters).toString();
    const res = await fetch(`${BASE_URL}/artisans?${query}`);
    return handleResponse(res);
  },

  getArtisanById: async (id) => {
    const res = await fetch(`${BASE_URL}/artisans/${id}`);
    return handleResponse(res);
  },

  getFeaturedArtisans: async () => {
    const res = await fetch(`${BASE_URL}/artisans/featured`);
    return handleResponse(res);
  },
  
  getStats: async () => {
    const res = await fetch(`${BASE_URL}/public/stats`);
    return handleResponse(res);
  },

  getArtisanDashboardStats: async (id) => {
    const res = await fetch(`${BASE_URL}/artisans/${id}/dashboard-stats`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(res);
  },

  // Get artisan documents
  getArtisanDocuments: async (id) => {
    const res = await fetch(`${BASE_URL}/artisans/${id}/documents`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(res);
  },

  // Upload additional documents
  uploadArtisanDocuments: async (id, formData) => {
    const res = await fetch(`${BASE_URL}/artisans/${id}/documents`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TokenManager.getToken()}`,
      },
      body: formData,
    });
    return handleResponse(res);
  },

  // Update artisan profile picture
  updateArtisanProfilePicture: async (id, formData) => {
    const res = await fetch(`${BASE_URL}/artisans/${id}/profile-picture`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TokenManager.getToken()}`,
      },
      body: formData,
    });
    return handleResponse(res);
  },

  // ─── SERVICES ──────────────────────────────────────────────────────────────
  getServices: async () => {
    const res = await fetch(`${BASE_URL}/services`);
    return handleResponse(res);
  },

  getServiceById: async (id) => {
    const res = await fetch(`${BASE_URL}/services/${id}`);
    return handleResponse(res);
  },

  getArtisanServices: async (id) => {
    const res = await fetch(`${BASE_URL}/services/artisan/${id}`);
    return handleResponse(res);
  },

  getCategories: async () => {
    const res = await fetch(`${BASE_URL}/categories`);
    return handleResponse(res);
  },

  createService: async (serviceData) => {
    const isFormData = serviceData instanceof FormData;
    const res = await fetch(`${BASE_URL}/services`, {
      method: 'POST',
      headers: getAuthHeaders(isFormData),
      body: isFormData ? serviceData : JSON.stringify(serviceData),
    });
    return handleResponse(res);
  },

  updateService: async (serviceId, serviceData) => {
    const isFormData = serviceData instanceof FormData;
    const res = await fetch(`${BASE_URL}/services/${serviceId}`, {
      method: 'PUT',
      headers: getAuthHeaders(isFormData),
      body: isFormData ? serviceData : JSON.stringify(serviceData),
    });
    return handleResponse(res);
  },

  deleteService: async (serviceId) => {
    const res = await fetch(`${BASE_URL}/services/${serviceId}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    return handleResponse(res);
  },

  // ─── BOOKINGS ──────────────────────────────────────────────────────────────
  createBooking: async (bookingData) => {
    const res = await fetch(`${BASE_URL}/bookings`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(bookingData),
    });
    return handleResponse(res);
  },

  getUserBookings: async (userId) => {
    const res = await fetch(`${BASE_URL}/bookings/user/${userId}`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(res);
  },

  getArtisanBookings: async (artisanId) => {
    const res = await fetch(`${BASE_URL}/bookings/artisan/${artisanId}`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(res);
  },

  updateBookingStatus: async (bookingId, status) => {
    const res = await fetch(`${BASE_URL}/bookings/${bookingId}/status`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify({ status }),
    });
    return handleResponse(res);
  },

  // ─── DEVIS ─────────────────────────────────────────────────────────────────
  createDevis: async (devisData) => {
    const res = await fetch(`${BASE_URL}/devis`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(devisData),
    });
    return handleResponse(res);
  },

  getUserDevis: async (userId) => {
    const res = await fetch(`${BASE_URL}/devis/user/${userId}`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(res);
  },

  getArtisanDevis: async (artisanId) => {
    const res = await fetch(`${BASE_URL}/devis/artisan/${artisanId}`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(res);
  },

  getPendingDevis: async (specialty) => {
    const res = await fetch(`${BASE_URL}/devis/pending/${encodeURIComponent(specialty)}`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(res);
  },

  acceptDevis: async (devisId) => {
    const res = await fetch(`${BASE_URL}/devis/${devisId}/accept`, {
      method: 'PUT',
      headers: getAuthHeaders(),
    });
    return handleResponse(res);
  },

  updateDevisStatus: async (devisId, status) => {
    const res = await fetch(`${BASE_URL}/devis/${devisId}/status`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify({ status }),
    });
    return handleResponse(res);
  },

  deleteDevis: async (devisId) => {
    const res = await fetch(`${BASE_URL}/devis/${devisId}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    return handleResponse(res);
  },

  // ─── REVIEWS ───────────────────────────────────────────────────────────────
  submitReview: async (reviewData) => {
    const res = await fetch(`${BASE_URL}/reviews`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(reviewData),
    });
    return handleResponse(res);
  },

  getArtisanReviews: async (artisanId) => {
    const res = await fetch(`${BASE_URL}/reviews/artisan/${artisanId}`);
    return handleResponse(res);
  },

  getServiceReviews: async (serviceId) => {
    const res = await fetch(`${BASE_URL}/reviews/service/${serviceId}`);
    return handleResponse(res);
  },

  // ─── PROFILE ───────────────────────────────────────────────────────────────
  updateProfile: async (id, data) => {
    const res = await fetch(`${BASE_URL}/users/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(data),
    });
    return handleResponse(res);
  },

  getUserById: async (id) => {
    const res = await fetch(`${BASE_URL}/users/${id}`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(res);
  },

  deleteAccount: async (id) => {
    const res = await fetch(`${BASE_URL}/users/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    return handleResponse(res);
  },

  changePassword: async (userId, currentPassword, newPassword) => {
    const res = await fetch(`${BASE_URL}/users/${userId}/change-password`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify({ currentPassword, newPassword }),
    });
    return handleResponse(res);
  },

  // ─── ADMIN ─────────────────────────────────────────────────────────────────
  getPlatformStats: async () => {
    const res = await fetch(`${BASE_URL}/admin/stats`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(res);
  },

  getUnverifiedArtisans: async () => {
    const res = await fetch(`${BASE_URL}/admin/artisans/unverified`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(res);
  },

  verifyArtisan: async (id) => {
    const res = await fetch(`${BASE_URL}/admin/artisans/${id}/verify`, {
      method: 'PUT',
      headers: getAuthHeaders(),
    });
    return handleResponse(res);
  },
};

export default apiService;
