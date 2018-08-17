import {createStore} from 'redux';

//3.building the store
//--------------------
//1. making a state
//2. making a reducer
//3. Create the store
const initialState = {
	count: 0
}

const reducer = (state = initialState, action) => {
	console.log('reducer', action);
	//7. making a reducer with switch cases
	switch(action.type){
		case 'INCREMENT':
			return Object.assign({}, state, { count: state.count + 1})
		case 'DECREMENT':
			return Object.assign({}, state, { count: state.count - 1})
		default:
			return state;
	}
}

const store = createStore(reducer);
export default store;