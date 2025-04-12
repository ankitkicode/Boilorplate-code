import api from './Apis';
import { API_ENDPOINTS } from './apiEndpoints';

export const loginUser = async (data) => api.post(API_ENDPOINTS.AUTH_LOGIN, data).then(res => res.data);
export const registerUser = async (data) => api.post(API_ENDPOINTS.AUTH_REGISTER, data).then(res => res.data);
export const fetchProducts = async () => api.get(API_ENDPOINTS.PRODUCTS).then(res => res.data);
export const fetchUserProfile = async () => api.get(API_ENDPOINTS.USER_PROFILE).then(res => res.data);
export const fetchCart = async () => api.get(API_ENDPOINTS.CART).then(res => res.data);
export const checkout = async (data) => api.post(API_ENDPOINTS.CHECKOUT, data).then(res => res.data);


