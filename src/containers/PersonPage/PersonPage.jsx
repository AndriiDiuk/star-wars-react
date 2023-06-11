import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import React, { useEffect, useState, Suspense, lazy } from 'react';

import { API_PERSON } from '../../constans/api';
import { getPeopleImg } from '../../services/getPeopleData';
import { getApiResource } from '../../utils/network';
import { witherErrorApi } from '../../hoc-helpers/withErrorApi.jsx';
import PersonPhoto from '../../components/PersonPage/PersonPhoto';
import PersonInfo from '../../components/PersonPage/PersonInfo/';
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack/PersonLinkBack';
import UiLoading from '../../components/UI/UiLoading/UiLoading';
import { useSelector } from 'react-redux';

import styles from './PersonPage.module.css';

const PersonFilms = lazy(() => import('../../components/PersonPage/PersonFilms/PersonFilms'));

const PersonPage = ({ setErrorApi }) => {
	const id = useParams().id
	const [personId, setPersonId] = useState(null);
	const [personInfo, setPersonInfo] = useState(null);
	const [personName, setPersonName] = useState(null);
	const [personPhoto, setPersonPhoto] = useState(null);
	const [personFilms, setPersonFilms] = useState(null);
	const [personFavorite, setPersonFavorite] = useState(false);

	const storeData = useSelector(state => state.favoriteReducer);

	useEffect(() => {
		(async () => {
			const res = await getApiResource(`${API_PERSON}/${id}/`);
			storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false)

			setPersonId(id);

			if (res) {
				setPersonInfo([
					{ title: 'Height', data: res.height },
					{ title: 'Mass', data: res.mass },
					{ title: 'Hair Color', data: res.hair_color },
					{ title: 'Skin Color', data: res.skin_color },
					{ title: 'Eye Color', data: res.eye_color },
					{ title: 'Birth Year', data: res.birth_year },
					{ title: 'Gender', data: res.gender }
				]);
				setPersonName(res.name);
				setPersonPhoto(getPeopleImg(id));

				res.films.length && setPersonFilms(res.films);
				setErrorApi(false);
			} else {
				setErrorApi(true)
			}
		})();
	}, []);

	return (
		<>
			<PersonLinkBack />
			<div className={styles.wrapper}>
				<span className={styles.person__name}>{personName}</span>
				<div className={styles.container}>
					<PersonPhoto
						personId={personId}
						personPhoto={personPhoto}
						personName={personName}
						personFavorite={personFavorite}
						setPersonFavorite={setPersonFavorite}
					/>
					{personInfo && <PersonInfo personInfo={personInfo} />}
					{personFilms && (
						<Suspense fallback={<UiLoading />}>
							<PersonFilms personFilms={personFilms} />
						</Suspense>
					)}
				</div>
			</div>
		</>

	)
};

PersonPage.propTypes = {
	setErrorApi: PropTypes.func
};

export default witherErrorApi(PersonPage);
