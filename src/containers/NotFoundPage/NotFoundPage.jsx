import { useLocation } from 'react-router-dom';

import img from './img/404.png'
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
	let location = useLocation();

	return (
		<>
			<img className={styles.imgError} src={img} alt='Error 404' />
			<p className={styles.textError}>No match for <u>{location.pathname}</u></p>
		</>
	)
}

export default NotFoundPage;
