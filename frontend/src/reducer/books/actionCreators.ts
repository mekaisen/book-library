import * as action from './actionTypes.ts';

interface NewBook {
	title: string;
	author: string;
}

interface IBook {
	type: typeof action.ADD_BOOK;
	payload: NewBook;
}

export const addBook = (newBook: NewBook): IBook => {
	return {
		type: action.ADD_BOOK,
		payload: newBook,
	};
};
