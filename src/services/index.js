import axios from 'axios';

const API_URL = "https://api.github.com";

const getUsers = () => axios.get(`${API_URL}/users`);

const getRepos = (user) => axios.get(`${API_URL}/users/${user}/repos`);


export { getUsers, getRepos };