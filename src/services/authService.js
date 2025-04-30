// src/services/authService.js
import api from './api';

export const login = (credentials) => api.post("/auth/login", credentials);
export const logout = () => api.post("/auth/logout");
export const getCurrentUser = () => api.get("/users/profile");