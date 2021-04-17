import React from 'react';
import SaveButton from './Buttons/SaveButton'

const BookCard = (props) => {
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
                <SaveButton/>
			</div>
		</div>
	);
};

export default BookCard;
