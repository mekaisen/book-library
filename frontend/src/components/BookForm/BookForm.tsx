import { useState } from 'react';
import './BookForm.css';

const BookForm = () => {
	const [bookName, setBookName] = useState<string>('');
	const [author, setAuthor] = useState<string>('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(author, bookName);
		setBookName('');
		setAuthor('');
	};

	return (
		<div className='book-form app-block'>
			<h2>Form Set</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='book'>Title: </label>
					<input
						type='text'
						id='book'
						value={bookName}
						onChange={e => {
							setBookName(e.target.value);
						}}
					/>
				</div>
				<div>
					<label htmlFor='author'>author: </label>
					<input
						type='text'
						id='author'
						value={author}
						onChange={e => {
							setAuthor(e.target.value);
						}}
					/>
				</div>
				<button type='submit'>submit</button>
			</form>
		</div>
	);
};
export { BookForm };
