import React, { useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInProvider } from '../redux/actions/authActions';

const ConnectPage = (props: any) => {
	const { provider } = useParams();
	const { search } = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch<any>();

	const login = async () => {
		try {
			await dispatch(signInProvider({ provider, search }));
			navigate('/');
		} catch (error) {
			console.log(error, 'error');
			navigate('/login');
		}
	};
	useEffect(() => {
		login();
	}, []);
	return <></>;
};

export default ConnectPage;
