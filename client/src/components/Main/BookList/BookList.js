import React from 'react';
import BookCard from './BookCard/BookCard';

export default function BookList(props) {
	return (
		<>
			<div className='list'>
				{props.books.map((book, i) => {
					return (
						<BookCard
							key={i}
							title={book.volumeInfo.title}
							authors={book.volumeInfo.authors}
							description={book.volumeInfo.description}
							image={book?.volumeInfo?.imageLinks?.thumbnail}
							link={book.accessInfo.webReaderLink}
						/>
					);
				})}
			</div>
		</>
	);
}
