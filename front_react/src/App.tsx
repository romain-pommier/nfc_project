import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutComponent from './components/Layout';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
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
					{/* <Route path="/" element={<HomePage />} /> */}
					<Route path="/" element={<LoginPage />} />
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
