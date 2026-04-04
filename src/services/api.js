const BASE_URL = 'http://bericolo.linguaflo.me/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
  };
};

const apiService = {

  // ─── AUTH ──────────────────────────────────────────────────────────────────
  register: async (userData) => {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return res.json();
  },

  login: async (credentials) => {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }
    return data;
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  // ─── ARTISANS ──────────────────────────────────────────────────────────────
  getArtisans: async (filters = {}) => {
    const query = new URLSearchParams(filters).toString();
    const res = await fetch(`${BASE_URL}/artisans?${query}`);
    return res.json();
  },

  getArtisanById: async (id) => {
    const res = await fetch(`${BASE_URL}/artisans/${id}`);
    return res.json();
  },

  getFeaturedArtisans: async () => {
    const res = await fetch(`${BASE_URL}/artisans/featured`);
    return res.json();
  },

  // ─── SERVICES ──────────────────────────────────────────────────────────────
  getServices: async () => {
    const res = await fetch(`${BASE_URL}/services`);
    return res.json();
  },

  getServiceById: async (id) => {
    const res = await fetch(`${BASE_URL}/services/${id}`);
    return res.json();
  },

  getArtisanServices: async (id) => {
    const res = await fetch(`${BASE_URL}/services/artisan/${id}`);
    return res.json();
  },

  getCategories: async () => {
    const res = await fetch(`${BASE_URL}/categories`);
    return res.json();
  },

  // ─── BOOKINGS ──────────────────────────────────────────────────────────────
  createBooking: async (bookingData) => {
    const res = await fetch(`${BASE_URL}/bookings`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(bookingData),
    });
    return res.json();
  },

  getUserBookings: async (userId) => {
    const res = await fetch(`${BASE_URL}/bookings/user/${userId}`, {
      headers: getAuthHeaders(),
    });
    return res.json();
  },

  getArtisanBookings: async (artisanId) => {
    const res = await fetch(`${BASE_URL}/bookings/artisan/${artisanId}`, {
      headers: getAuthHeaders(),
    });
    return res.json();
  },

  updateBookingStatus: async (bookingId, status) => {
    const res = await fetch(`${BASE_URL}/bookings/${bookingId}/status`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify({ status }),
    });
    return res.json();
  },

  // ─── DEVIS ─────────────────────────────────────────────────────────────────
  createDevis: async (devisData) => {
    const res = await fetch(`${BASE_URL}/devis`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(devisData),
    });
    return res.json();
  },

  getUserDevis: async (userId) => {
    const res = await fetch(`${BASE_URL}/devis/user/${userId}`, {
      headers: getAuthHeaders(),
    });
    return res.json();
  },

  getPendingDevis: async (specialty) => {
    const res = await fetch(`${BASE_URL}/devis/pending/${encodeURIComponent(specialty)}`, {
      headers: getAuthHeaders(),
    });
    return res.json();
  },

  acceptDevis: async (devisId) => {
    const res = await fetch(`${BASE_URL}/devis/${devisId}/accept`, {
      method: 'PUT',
      headers: getAuthHeaders(),
    });
    return res.json();
  },

  updateDevisStatus: async (devisId, status) => {
    const res = await fetch(`${BASE_URL}/devis/${devisId}/status`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify({ status }),
    });
    return res.json();
  },

  // ─── REVIEWS ───────────────────────────────────────────────────────────────
  submitReview: async (reviewData) => {
    const res = await fetch(`${BASE_URL}/reviews`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(reviewData),
    });
    return res.json();
  },

  getServiceReviews: async (serviceId) => {
    const res = await fetch(`${BASE_URL}/reviews/service/${serviceId}`);
    return res.json();
  },

  // ─── PROFILE ───────────────────────────────────────────────────────────────
  updateProfile: async (userId, profileData) => {
    const res = await fetch(`${BASE_URL}/users/${userId}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(profileData),
    });
    return res.json();
  },

  // ─── ADMIN ─────────────────────────────────────────────────────────────────
  getPlatformStats: async () => {
    const res = await fetch(`${BASE_URL}/admin/stats`, {
      headers: getAuthHeaders(),
    });
    return res.json();
  },

  getUnverifiedArtisans: async () => {
    const res = await fetch(`${BASE_URL}/admin/artisans/unverified`, {
      headers: getAuthHeaders(),
    });
    return res.json();
  },

  verifyArtisan: async (id) => {
    const res = await fetch(`${BASE_URL}/admin/artisans/${id}/verify`, {
      method: 'PUT',
      headers: getAuthHeaders(),
    });
    return res.json();
  },
};

export default apiService;
