import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterContent from '../components/RegisterContent';

export interface RegisterPageProps {}

const RegisterPage: React.FunctionComponent<RegisterPageProps> = (props) => {
	return (
		<div className="App-header">
			<RegisterContent />
		</div>
	);
};

export default RegisterPage;
