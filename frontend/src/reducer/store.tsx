import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import bookReducer from './books/reducer';
const store = configureStore({
	reducer: {
		books: bookReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const BookProvider = ({ children }: { children: React.ReactNode }) => (
	<Provider store={store}>{children}</Provider>
);
