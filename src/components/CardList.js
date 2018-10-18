import React from 'react';
import Card from './Card'

// CardList component is the collection of all cards(10) and their attributes from the Card.js file
const CardList = ({ robots }) => {
	// we use map as the loop to run through the robots array
	return (
		<div>
			{robots.map((user, i) => {
				return (
					<Card
						key={i} // we need to use key becuase if we dont and a robot card gets deleted, React wont know which card was deleted and React will change the entire DOM instead of just changing the individual card
						id={robots[i].id}
						name={robots[i].name}
						email={robots[i].email}
					/>
				);
			})
			}
		</div>
	);
}

export default CardList;