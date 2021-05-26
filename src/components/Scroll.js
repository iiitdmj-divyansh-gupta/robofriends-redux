import React from 'react';

// props
// state
// children -> every props object has chilren 

const Scroll = (props) => {
	console.log(props);
	return (
		// double curly braces: javascript expression and within that we are returning an object
		<div style={{overflowY: 'scroll', border: '2px solid black', height:'700px'}}> 
			{props.children};
		</div>
	)
};

export default Scroll;