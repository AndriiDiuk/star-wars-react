import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from "../constans/actionsTypes";
import { getLocalStorage } from "../../utils/localStorage";
import { omit } from "lodash";

const initialStore = getLocalStorage('store');

const favoriteReducer = (state = initialStore, action) => {
	switch (action.type) {
		case ADD_PERSON_TO_FAVORITE:
			return {
				...state,
				...action.payload
			}
		case REMOVE_PERSON_FROM_FAVORITE:
			return omit(state, [action.payload])
		default:
			return state;
	}
};

export default favoriteReducer;
