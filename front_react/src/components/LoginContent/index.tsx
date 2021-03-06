import React, { useEffect, useState } from 'react';
import store from '../../redux/store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../redux/actions/authActions';
import SocialLink from '../SocialLink';
import auth from '../../utils/auth';
import './styles.scss';
import {
	Box,
	InputAdornment,
	IconButton,
	FormControl,
	InputLabel,
	Input,
	Checkbox,
	FormControlLabel,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
export interface LoginContentPageProps {}

const LoginContent: React.FunctionComponent<LoginContentPageProps> = (
	props
) => {
	const navigate = useNavigate();
	const dispatch = useDispatch<any>();
	const [identifier, setIdentifier] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState(false);
	const [passwordIsVisible, setPasswordIsVisible] = useState(false);
	const [emailIsValid, setEmailIsValid] = useState(false);
	const providers = ['facebook', 'github', 'google', 'twitter'];

	const login = async () => {
		if (emailIsValid) {
			try {
				await dispatch(signIn({ identifier, password }));
				console.log(store.getState().authReducer);
				navigate('/');
			} catch (error) {
				setErrorMessage(true);
			}
		}
	};
	const showPassword = () => {
		setPasswordIsVisible(!passwordIsVisible);
	};
	const checkEmail = () => {
		auth.validEmail(identifier)
			? setEmailIsValid(true)
			: setEmailIsValid(false);
	};

	useEffect(() => {
		if (errorMessage) {
			setTimeout(() => {
				setErrorMessage(false);
			}, 2000);
		}
		checkEmail();
	}, [errorMessage]);

	useEffect(() => {
		checkEmail();
	}, [identifier]);

	return (
		<>
			<hr className="divider" />
			<Box
				className="LoginContent"
				component="form"
				sx={{
					'& .MuiTextField-root': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete="off"
			>
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
					<FormControl variant="standard">
						<InputLabel error={!emailIsValid} htmlFor="email">
							Utilisateur
						</InputLabel>
						<Input
							error={!emailIsValid}
							id="email_input_id"
							type="email"
							name="email"
							value={identifier}
							autoComplete="off"
							onChange={(e) => {
								setIdentifier(e.target.value);
							}}
						/>
					</FormControl>
					<FormControl variant="standard">
						<InputLabel htmlFor="standard-adornment-password">
							Password
						</InputLabel>
						<Input
							id="password_input_id"
							type={passwordIsVisible ? 'text' : 'password'}
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={showPassword}
									>
										{passwordIsVisible ? (
											<VisibilityOff />
										) : (
											<Visibility />
										)}
									</IconButton>
								</InputAdornment>
							}
						/>
					</FormControl>

					<div>
						<FormControlLabel
							control={<Checkbox />}
							label="Remember me"
						/>
					</div>
					<button
						disabled={!emailIsValid}
						className="btn primary"
						onClick={(e) => {
							e.preventDefault();
							login();
						}}
					>
						Sign in
					</button>
					<hr className="endDivider" />
					<a href="/register">Forgot Password or register</a>
				</div>
			</Box>
		</>
	);
};

export default LoginContent;
