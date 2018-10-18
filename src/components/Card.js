import React from 'react';

// Card component is where we want to store the attributes (img, name, email) in a single card
const Card = ({name, email, id}) => {
	return (
		<div className='tc bg-light-blue dib br3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;