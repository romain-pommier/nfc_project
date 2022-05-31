import * as types from '../../constants';
import { authSignIn } from '../../services/authServices';

export function signIn(credentials: any) {
	return async (dispatch: any) => {
		return authSignIn(credentials)
			.then(async (response) => {
				if (response.status === 200) {
					dispatch({
						type: types.AUTH_SIGN_IN_SUCCESS,
						user: { jwt: response.data.jwt, ...response.data.user },
					});
				}
			})
			.catch((error) => {
				console.log(error, '*********');
				dispatch({ type: types.AUTH_SIGN_IN_FAILURE });
				throw error;
			});
	};
}

// return;
// return async (dispatch: any) => {
// 	dispatch({ type: types.AUTH_SIGN_IN_REQUEST });
// 	return authSignIn(credentials)
// 		.then(async (response) => {
// 			console.log(response, '*******');
// 			return response.challengeName === 'NEW_PASSWORD_REQUIRED'
// 				? {
// 						status: response.challengeName,
// 						user: response,
// 				  }
// 				: dispatch({
// 						type: types.AUTH_SIGN_IN_SUCCESS,
// 						email: response.attributes.email,
// 						identifier: response.attributes['custom:firstname'],
// 						company: response.attributes['custom:company'],
// 						lastName: response.attributes['custom:lastname'],
// 						phonenumber:
// 							response.attributes['custom:phonenumber'],
// 						rules: response.signInUserSession.idToken.payload[
// 							'cognito:groups'
// 						],
// 						sub: response.attributes.sub,
// 						pool: response.pool,
// 						session: response.signInUserSession,
// 				  });
// 		})
// 		.catch((error) => {
// 			console.log(error, '*********');
// 			dispatch({ type: types.AUTH_SIGN_IN_FAILURE });
// 			throw error;
// 		});
// };
