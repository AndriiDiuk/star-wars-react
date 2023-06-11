import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
	list__container, list__item,
	person__photo, person__text
} from './PeopleList.module.css';


const PeopleList = ({ people }) => {

	return (
		<>
			<ul className={list__container}>
				{people.map(({ name, id, img }) =>
					<li key={id} className={list__item}>
						<Link to={`/people/${id}`}>
							<a href="#">
								<img className={person__photo} src={img} alt={name} />
								<p className={person__text}>{name}</p>
							</a>
						</Link>
					</li>
				)}
			</ul >
		</>
	)
}

PeopleList.propTypes = {
	people: PropTypes.array
}

export default PeopleList;

