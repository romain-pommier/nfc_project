import * as types from '../../constants';
import {
	authSignIn,
	authSignInProvider,
	authSignUp,
} from '../../services/authServices';

export function signUp(credentials: any) {
	return async (dispatch: any) => {
		return authSignUp(credentials)
			.then(async (response) => {
				console.log(response);
				//
			})
			.catch((error) => {
				console.log(error);
				dispatch({ type: types.AUTH_SIGN_UP_FAILURE });
				throw error;
			});
	};
}
export function signIn(credentials: any) {
	return async (dispatch: any) => {
		return authSignIn(credentials)
			.then(async (response) => {
				if (response.status === 200) {
					dispatch({
						type: types.AUTH_SIGN_IN_SUCCESS,
						user: {
							token: response.data.jwt,
							...response.data.user,
						},
					});
				}
			})
			.catch((error) => {
				console.log(error);
				dispatch({ type: types.AUTH_SIGN_IN_FAILURE });
				throw error;
			});
	};
}

export function signInProvider(credentials: any) {
	return async (dispatch: any) => {
		return authSignInProvider(credentials)
			.then((response) => {
				if (response.status === 200) {
					dispatch({
						type: types.AUTH_SIGN_IN_SUCCESS,
						user: {
							token: response.data.jwt,
							...response.data.user,
						},
					});
				}
			})
			.catch((error) => {
				console.log(error);
				dispatch({ type: types.AUTH_SIGN_IN_FAILURE });
				throw error;
			});
	};
}
