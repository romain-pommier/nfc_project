import axios from 'axios';

export function authSignIn({ identifier, password }: any): Promise<any> {
	return axios
		.post('/auth/local', { identifier, password })
		.then((response) => {
			return response;
		});
}
export function authSignInProvider({ provider, search }: any): Promise<any> {
	const requestURL = `/auth/${provider}/callback${search}`;
	return axios.get(requestURL).then((response) => {
		return response;
	});
}
export function authSignUp({
	identifier,
	password,
	username,
}: any): Promise<any> {
	const requestURL = `/auth/local/register`;
	return axios
		.post(requestURL, {
			identifier,
			password,
			username,
		})
		.then((response) => {
			return response;
		});
}
