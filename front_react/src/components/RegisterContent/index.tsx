import React, { useEffect, useState } from 'react';
import store from '../../redux/store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../redux/actions/authActions';
import SocialLink from '../SocialLink';
import './styles.scss';
import auth from '../../utils/auth';
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

const RegisterContent = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch<any>();
	const [username, setUsername] = useState('');
	const [identifier, setIdentifier] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirmed, setPasswordConfirmed] = useState('');
	const [errorMessage, setErrorMessage] = useState(false);
	const [passwordIsVisible, setPasswordIsVisible] = useState(false);
	const [passwordIsIdentical, setPasswordIsIdentical] = useState(false);
	const [passwordConfirmedIsVisible, setPasswordConfirmedIsVisible] =
		useState(false);
	const [emailIsValid, setEmailIsValid] = useState(false);

	const register = async () => {
		// test register call API  <3
		return;
		if (emailIsValid) {
			try {
				await dispatch(signUp({ identifier, password, username }));
				console.log(store.getState().authReducer);
				navigate('/');
			} catch (error) {
				setErrorMessage(true);
			}
		}
	};

	const checkEmail = () => {
		auth.validEmail(identifier)
			? setEmailIsValid(true)
			: setEmailIsValid(false);
	};
	useEffect(() => {
		checkEmail();
	}, [identifier]);
	useEffect(() => {
		setPasswordIsIdentical(password === passwordConfirmed);
	}, [password, passwordConfirmed]);

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

				<div className="LoginForm">
					<FormControl variant="standard">
						<InputLabel htmlFor="username">Name</InputLabel>
						<Input
							id="username_input_id"
							type="text"
							name="username"
							value={username}
							onChange={(e) => {
								setUsername(e.target.value);
							}}
						/>
					</FormControl>
					<FormControl variant="standard">
						<InputLabel error={!emailIsValid} htmlFor="email">
							Email
						</InputLabel>
						<Input
							error={!emailIsValid}
							id="email_input_id"
							type="email"
							name="email"
							value={identifier}
							onChange={(e) => {
								setIdentifier(e.target.value);
								checkEmail();
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
							error={!passwordIsIdentical}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={() => {
											setPasswordIsVisible(
												!passwordIsVisible
											);
										}}
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
					<FormControl variant="standard">
						<InputLabel htmlFor="standard-adornment-password">
							Confirm Password
						</InputLabel>
						<Input
							id="password_input_id"
							error={!passwordIsIdentical}
							type={
								passwordConfirmedIsVisible ? 'text' : 'password'
							}
							value={passwordConfirmed}
							onChange={(e) => {
								setPasswordConfirmed(e.target.value);
							}}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={() => {
											setPasswordConfirmedIsVisible(
												!passwordConfirmedIsVisible
											);
										}}
									>
										{passwordConfirmedIsVisible ? (
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
						className="btn primary"
						onClick={(e) => {
							e.preventDefault();
							register();
						}}
					>
						Sign in
					</button>
					<hr className="endDivider" />
					<a href="/login">I already have an account</a>
				</div>
			</Box>
		</>
	);
};
export default RegisterContent;
