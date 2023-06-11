import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setPersonToFavorite, removePersonFromFavorite } from '../../../store/actions';
import styles from './PersonPhoto.module.css';
import iconFavoriteAdd from './img/favorite-add.svg';
import iconFavoriteDelete from './img/favorite-delete.svg';

const PersonPhoto = ({
	personPhoto,
	personName,
	personId,
	personFavorite,
	setPersonFavorite
}) => {

	const dispath = useDispatch();

	const dispatchFavoritePeople = () => {
		if (personFavorite) {
			dispath(removePersonFromFavorite(personId));
			setPersonFavorite(false)
		} else {
			dispath(setPersonToFavorite({
				[personId]: {
					name: personName,
					img: personPhoto
				}
			}));
			setPersonFavorite(true)
		}
	}

	return (
		<>
			<div className={styles.container}>
				<img className={styles.photo} src={personPhoto} alt={personName} />
				<img
					className={styles.favorite}
					src={personFavorite ? iconFavoriteAdd : iconFavoriteDelete}
					alt="Add to favorite"
					onClick={dispatchFavoritePeople}
				/>
			</div>
		</>
	)
}

PersonPhoto.propTypes = {
	personFavorite: PropTypes.bool,
	setPersonFavorite: PropTypes.func,
	personId: PropTypes.string,
	personName: PropTypes.string,
	personPhoto: PropTypes.string
}

export default PersonPhoto;
