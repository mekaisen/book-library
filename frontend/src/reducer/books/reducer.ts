import * as actionTypes from './actionTypes.ts';

const intialState: any[] = [];

interface IAction {
	type: string;
	payload: Record<string, any>;
}

export const reducer = (state = intialState, action: IAction) => {
	switch (action.type) {
		case actionTypes.ADD_BOOK:
			return [...state, action.payload];

		default:
			return state;
	}
};
