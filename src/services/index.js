import axios from 'axios';

const API_URL = "https://api.github.com";

const getUsers = () => axios.get(`${API_URL}/users`);

const getRepos = () => axios.get(`${API_URL}/orgs/octokit/repos`);


export { getUsers, getRepos };