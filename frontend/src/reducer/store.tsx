import { configureStore } from '@reduxjs/toolkit';

import { Provider } from 'react-redux';
const store = configureStore({
	reducer: {},
});

export const BookProvider = ({ children }: { children: React.ReactNode }) => (
	<Provider store={store}>{children}</Provider>
);
