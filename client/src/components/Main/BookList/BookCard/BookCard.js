import React from 'react';
import axios from 'axios';

const BookCard = (props) => {
	const saveBook = async () => {
		const book = {
			title: props.title,
			author: props.authors,
			description: props.description,
			image: props.image,
			link: props.link,
		};
		const res = await axios.post('/api/books', book);
		console.log(res)
	};
	return (
		<div className='card'>
			<img src={props.image} className='card-img-top' alt='...' />
			<div className='card-body'>
				<h2 className='card-title'>{props.title}</h2>
				<h3>{props.authors}</h3>
				<p className='card-text'>{props.description}</p>
				<a href={props.link} className='btn btn-primary'>
					View
				</a>
				<button onClick={saveBook}>Save</button>
			</div>
		</div>
	);
};

export default BookCard;
