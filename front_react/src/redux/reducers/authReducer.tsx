import * as types from '../../constants';
export default function reducer(state = {}, actions: any) {
	switch (actions.type) {
		case types.AUTH_SIGN_IN_REQUEST:
			console.log('request...');
			break;
		case types.AUTH_SIGN_IN_SUCCESS:
			let currentUser = actions.user;
			localStorage.setItem('currentUser', JSON.stringify(currentUser));
			return currentUser;
		case types.AUTH_SIGN_IN_FAILURE:
			console.log('failure');
			break;
		default:
			return state;
	}
}
