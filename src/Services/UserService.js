import axios from 'axios';

const API_URL = 'http://localhost:8082/api/users';
const apiClient = axios.create({
  baseURL: API_URL,
});

export default {
  createUser(user) {
    return apiClient.post('', user);
  },
  getAllUsers() {
    return apiClient.get('');
  },
  getUserById(id) {
    return apiClient.get(`/${id}`);
  },
  updateUser(id, user) {
    return apiClient.put(`/${id}`, user);
  },
  deleteUser(id) {
    return apiClient.delete(`/${id}`);
  }
};