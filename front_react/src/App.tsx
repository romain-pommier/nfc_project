import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutComponent from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import AboutPage from './pages/About';
import ConnectPage from './pages/ConnectPage';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import TestPage from './pages/Test';
import store from './redux/store';
import initAxios from './utils/initAxios';
export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
	initAxios();

	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					{/* <PrivateRoute path="/" element={<HomePage />} exact /> */}
					<Route path="/" element={<PrivateRoute />}>
						<Route path="/" element={<HomePage />} />
					</Route>
					{/* <Route path="/" element={<HomePage />} /> */}

					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="connect" element={<ConnectPage />}>
						<Route path=":provider" element={<ConnectPage />} />
					</Route>
					<Route path="about">
						<Route index element={<AboutPage />} />
						<Route path=":number" element={<AboutPage />} />
					</Route>
					<Route path="test" element={<TestPage />} />
					<Route path="layout" element={<LayoutComponent />}>
						<Route index element={<AboutPage />} />
						<Route path=":number" element={<AboutPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
};

export default Application;
