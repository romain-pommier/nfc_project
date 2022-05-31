import axios from 'axios';

export default function initAxios() {
	axios.defaults.baseURL = 'http://localhost:1337/api';
}
