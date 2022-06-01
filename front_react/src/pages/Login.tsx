import React, { useEffect, useState } from 'react';
import store from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../redux/actions/authActions';
import SocialLink from '../components/SocialLink';
import LoginContent from '../components/LoginContent';

export interface IHomePageProps {}

const LoginPage: React.FunctionComponent<IHomePageProps> = (props) => {
	return (
		<div className="App-header">
			<LoginContent />
		</div>
	);
};

export default LoginPage;
