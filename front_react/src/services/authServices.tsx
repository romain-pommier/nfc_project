import axios from 'axios';

export function authSignIn({ identifier, password }: any): Promise<any> {
	return axios
		.post('/auth/local', { identifier, password })
		.then((response) => {
			return response;
		});
}
