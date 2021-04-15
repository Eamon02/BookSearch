import React from 'react';

function Search(props) {
	return (
		<div className='row'>
			<form className='input-group mb-3' onSubmit={props.searchBook}>
				<input
					type='text'
					className='form-control'
					placeholder=''
					aria-label='Search'
					aria-describedby='button-addon2'
					onChange={props.handleSearch}
				/>
				<button
					className='btn btn-outline-secondary'
					type='button'
					id='button-addon2'
				>
					Search
				</button>
			</form>
		</div>
	);
}

export default Search;
