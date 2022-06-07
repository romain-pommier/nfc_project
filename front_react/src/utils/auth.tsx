const TOKEN_KEY = 'jwtToken';
const USER_INFO = 'userInfo';

const auth = {
	getToken: () => {
		const currentUser = JSON.parse(
			localStorage.getItem('currentUser') || '{}'
		);
		return currentUser.token;
	},
	validEmail: (identifier: any) => {
		const validEmailRegex =
			/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

		return identifier.match(validEmailRegex) || identifier === ''
			? true
			: false;
	},
};
export default auth;
