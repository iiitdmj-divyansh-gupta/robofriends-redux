import React from 'react';
import Card from './Card';

// const CardList = ({robots}) => {
// 	const cardArray = robots.map((user, i) => {
// 		return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
// 	});
// 	// key prop should have somehing that doesn't change. For example index could get changed
// 	// if arrray items gets moved. So a better key in this case would be something unique like id
// 	return (
// 		<div>
//     		{/*<Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
//     		<Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
//     		<Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>*/}
//     		{cardArray} 
//   		</div>
// 	);
// }

// export default CardList;


const CardList = ({robots}) => {

	/*
	if(true) {
		throw new Error('NOOOOOO!');
	}
	*/
	
	
	// key prop should have somehing that doesn't change. For example index could get changed
	// if arrray items gets moved. So a better key in this case would be something unique like id
	return (
		<div>
		{
			robots.map((user, i) => {
				return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
			})
		}
		</div>
	);
};

export default CardList;
