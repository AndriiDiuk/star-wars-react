import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Header from '../../components/Header/Header';
import routesConfig from '../../routes/routesConfig';

import styles from './App.module.css';

const App = () => {

	return (
		<>
			<BrowserRouter>
				<div className={styles.wrapper}>
					<Header />
					{routesConfig.map((route, index) => (
						<Routes key={index}>
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								element={<route.component />} />
						</Routes>
					))}
				</div>
			</BrowserRouter>
		</>
	)
}

export default App
