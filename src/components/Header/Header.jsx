import { NavLink } from 'react-router-dom';

import Favorite from '../Favorite/Favorite';

import styles from './Header.module.css';

const Header = () => {

	return (
		<div className={styles.container}>
			<ul className={styles.list__container}>
				<li><NavLink to="/" exact='true' >Home</NavLink></li>
				<li><NavLink to="/people/?page=1">People</NavLink></li>
				<li><NavLink to="/not-found" exact='true'>Not Found</NavLink></li>
				{/* <li><NavLink to="/fail" exact>Fail</NavLink></li>
				<li><NavLink to="/search" exact>Search</NavLink></li>
				<li><NavLink to="/error" exact>Error</NavLink></li> */}
			</ul>
			<Favorite />
		</div>
	)
};

export default Header;
