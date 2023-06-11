import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { setLocalStorage } from '../utils/localStorage';
import rootReducer from './reducers'

const store = createStore(
	rootReducer,
	composeWithDevTools()
);

store.subscribe(() => {
	setLocalStorage('store', store.getState().favoriteReducer)
})

export default store; 