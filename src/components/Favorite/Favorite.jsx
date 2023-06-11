import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

import iconFavorite from './img/favorite.svg';
import styles from './Favorite.module.css';


const Favorite = () => {
	const [count, setCount] = useState();
	const storeData = useSelector(state => state.favoriteReducer);

	useEffect(() => {
		const length = Object.keys(storeData).length;
		length.toString().length > 2
			? setCount('...')
			: setCount(length)
	})

	return (
		<div className={styles.container}>
			<Link to="/favorites">
				<span className={styles.counter}>{count}</span>
				<img
					className={styles.icon}
					src={iconFavorite}
					alt="Favorites"
				/>
			</Link>
		</div>
	)
}

export default Favorite;
