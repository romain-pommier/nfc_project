import React, { useEffect, useState } from 'react';
import store from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../redux/actions/authActions';
import SocialLink from '../components/SocialLink';

export interface IHomePageProps {}

const LoginPage: React.FunctionComponent<IHomePageProps> = (props) => {
	const navigate = useNavigate();
	const dispatch = useDispatch<any>();
	const [identifier, setIdentifier] = useState('romain-p31@hotmail.fr');
	const [password, setPassword] = useState('123456');
	const [errorMessage, setErrorMessage] = useState(false);
	const providers = ['facebook', 'github', 'google', 'twitter'];

	const login = async () => {
		try {
			await dispatch(signIn({ identifier, password }));

			console.log(store.getState().authReducer);
			navigate('/about');
		} catch (error) {
			setErrorMessage(true);
		}
	};

	useEffect(() => {
		if (errorMessage) {
			setTimeout(() => {
				setErrorMessage(false);
			}, 2000);
		}
	}, [errorMessage]);

	return (
		<div className="App-header">
			{errorMessage ? (
				<div>Identifiant ou mots de passe inconnu</div>
			) : (
				<></>
			)}

			<h1>Login</h1>
			<div className="LoginForm">
				<label htmlFor="username">Utilisateur</label>
				<input
					type="text"
					placeholder="Nom d'utilisateur"
					name="username"
					value={identifier}
					onChange={(e) => {
						setIdentifier(e.target.value);
					}}
				/>
				<label htmlFor="password">Mot de passe</label>
				<input
					type="password"
					placeholder="************"
					name="password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<div>
					{providers.map((provider) => (
						<SocialLink provider={provider} key={provider} />
					))}
					{/* Some other code */}
				</div>
				<button onClick={login}>Sign in</button>
			</div>
		</div>
	);
};

export default LoginPage;
