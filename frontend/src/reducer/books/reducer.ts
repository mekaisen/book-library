import * as actionTypes from './actionTypes.ts';

const intialState: any = [];

const bookReducer = (state = intialState, action: any) => {
	switch (action.type) {
		case actionTypes.ADD_BOOK:
			return [...state, action.payload];

		default:
			return state;
	}
};

export default bookReducer;
