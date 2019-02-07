import axios from 'axios';

const API_URL = "https://api.github.com";

const getUsers = () => axios.get(`${API_URL}/users`)

export { getUsers };