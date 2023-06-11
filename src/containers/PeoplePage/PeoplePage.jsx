import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { witherErrorApi } from '../../hoc-helpers/withErrorApi.jsx';
import PeopleList from '../../components/PeoplePage/PeopleList';
import PeopleNavigation from '../../components/PeoplePage/PeopleNavigation'
import { getApiResource } from '../../utils/network.js';
import { getPeopleId, getPeopleImg, getPeoplePageId } from '../../services/getPeopleData.js';
import { API_PEOPLE } from '../../constans/api';
import { iseQueryParams } from '../../hooks/iseQueryParams.js'

import styles from './PeoplePage.module.css';

const PeoplePage = ({ setErrorApi }) => {
	const [people, setPeople] = useState(null);
	const [prevPage, setPrevPage] = useState(null);
	const [nextPage, setNextPage] = useState(null);
	const [counterPage, setCounterPage] = useState(1);

	const query = iseQueryParams();
	const queryPage = query.get('page');

	const getResource = async (url) => {
		const res = await getApiResource(url);

		if (res) {
			const peopleList = res.results.map(({ name, url }) => {
				const id = getPeopleId(url);
				const img = getPeopleImg(id);
				return { id, img, name }
			});
			setPeople(peopleList);
			setPrevPage(res.previous)
			setNextPage(res.next)
			setCounterPage(getPeoplePageId(url))
			setErrorApi(false);
		} else {
			setErrorApi(true)
		}


	}

	useEffect(() => {
		getResource(API_PEOPLE + queryPage)
	}, [])

	return (
		<>
			<PeopleNavigation
				getResource={getResource}
				prevPage={prevPage}
				nextPage={nextPage}
				counterPage={counterPage}
			/>
			{people && <PeopleList people={people} />}
		</>
	)
}

PeoplePage.propTypes = {
	people: PropTypes.func
}

export default witherErrorApi(PeoplePage);
