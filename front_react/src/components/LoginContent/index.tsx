import React, { useEffect, useState } from 'react';
import store from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../../redux/actions/authActions';
import SocialLink from '../SocialLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';
export interface LoginContentPageProps {}

const LoginContent: React.FunctionComponent<LoginContentPageProps> = (
	props
) => {
	const navigate = useNavigate();
	const dispatch = useDispatch<any>();
	const [identifier, setIdentifier] = useState('romain-p31@hotmail.fr');
	const [password, setPassword] = useState('123456');
	const [errorMessage, setErrorMessage] = useState(false);
	const [passwordIsVisible, setPasswordIsVisible] = useState(false);
	const providers = ['facebook', 'github', 'google', 'twitter'];
	const iconProps = {
		icon: 'fa-regular fa-eye',
	};

	const login = async () => {
		try {
			await dispatch(signIn({ identifier, password }));

			console.log(store.getState().authReducer);
			navigate('/about');
		} catch (error) {
			setErrorMessage(true);
		}
	};
	const showPassword = () => {
		setPasswordIsVisible(!passwordIsVisible);
	};

	useEffect(() => {
		if (errorMessage) {
			setTimeout(() => {
				setErrorMessage(false);
			}, 2000);
		}
	}, [errorMessage]);

	return (
		<>
			<hr className="divider" />
			<div className="LoginContent">
				{errorMessage ? (
					<div>Identifiant ou mots de passe inconnu</div>
				) : (
					<></>
				)}

				{providers.map((provider) => (
					<SocialLink provider={provider} key={provider} />
				))}

				<span className="spanDivider">or</span>

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
					<div>
						<input
							className="inputPassword"
							type={passwordIsVisible ? 'text' : 'password'}
							placeholder="************"
							name="password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>

						{passwordIsVisible ? (
							<FontAwesomeIcon
								className="visibilityIcon"
								onClick={showPassword}
								icon={faEyeSlash}
							/>
						) : (
							<FontAwesomeIcon
								className="visibilityIcon"
								onClick={showPassword}
								icon={faEye}
							/>
						)}
					</div>

					<div>
						<input
							type="checkbox"
							name="remember"
							style={{ marginRight: '5px' }}
						/>
						<label htmlFor="remember">Remember me</label>
					</div>

					<button className="btn primary" onClick={login}>
						Sign in
					</button>
					<hr className="endDivider" />
					<a href="#">Forgot Password or register</a>
				</div>
			</div>
		</>
	);
};

export default LoginContent;
