const API_BASE_URL = 'http://localhost:5000/api';

const apiService = {
  // --- AUTH SERVICES ---
  register: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  login: async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    return response.json();
  },

  // --- ARTISAN SERVICES ---
  getArtisans: async (filters = {}) => {
    const query = new URLSearchParams(filters).toString();
    const response = await fetch(`${API_BASE_URL}/artisans?${query}`);
    return response.json();
  },

  getArtisanById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/artisans/${id}`);
    return response.json();
  },

  getFeaturedArtisans: async () => {
    const response = await fetch(`${API_BASE_URL}/artisans/featured`);
    return response.json();
  },

  // --- SERVICE SERVICES ---
  getServices: async () => {
    const response = await fetch(`${API_BASE_URL}/services`);
    return response.json();
  },

  getCategories: async () => {
    const response = await fetch(`${API_BASE_URL}/categories`);
    return response.json();
  },

  // --- BOOKING SERVICES ---
  createBooking: async (bookingData) => {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    });
    return response.json();
  },

  getUserBookings: async (userId) => {
    const response = await fetch(`${API_BASE_URL}/bookings/user/${userId}`);
    return response.json();
  },

  // --- ADMIN SERVICES ---
  getPlatformStats: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/stats`);
    return response.json();
  },
};

export default apiService;
