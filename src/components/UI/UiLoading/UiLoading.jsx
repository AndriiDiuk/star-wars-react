import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import loaderPink from './img/pink.svg';
import loaderWhite from './img/white.svg';
import loaderDark from './img/dark.svg';
import styles from './UiLoading.module.css';


const UiLoading = ({ theme }) => {
	const [loaderIcon, setLoaderIcon] = useState(null);
	useEffect(() => {
		switch (theme) {
			case 'dark': setLoaderIcon(loaderDark); break;
			case 'white': setLoaderIcon(loaderWhite); break;
			case 'pink': setLoaderIcon(loaderPink); break;
			default: setLoaderIcon(loaderPink); break;
		}
	}, [])

	return (
		<div className={styles.wrapper}>
			<img
				className={styles.img}
				src={loaderIcon}
				alt="Loader"
			/>
		</div>
	)
}

UiLoading.propTypes = {
	theme: PropTypes.string
}

export default UiLoading;
