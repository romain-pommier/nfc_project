import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import auth from '../../utils/auth';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
	const routeComponent = () =>
		auth.getToken() ? <Outlet /> : <Navigate to="/login" />;

	return routeComponent();
};

export default PrivateRoute;
