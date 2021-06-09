import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { robots } from '../robots.js'; // now we have used API so we don't need this anymore
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js'
import ErrorBoundary from '../components/ErrorBoundary.js';
import { setSearchField, requestRobots } from '../actions.js';
import './App.css';


const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		// searchRobots is coming from reducers which
		// in turn is coming from createStore in index.js
    	robots: state.requestRobots.robots,
    	isPending: state.requestRobots.isPending
	}
}

const mapDispatchToProps = dispatch => {
	// this is a prop which _ will recieve
	return {
		onSearchChange:	(event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {
	componentDidMount() {
        this.props.onRequestRobots();
    }
	
    
	render() {

		// console.log('render');

		const { robots, searchField, onSearchChange } = this.props;

		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});

		// ternary operator: this is to show if the APi takes time to return data

		return !robots.length ? 
			<h1>Loading</h1>
			:
			(
				<div className='tc'>
					<h1 className='f1'>Robofriends</h1>
					<SearchBox searchChange={onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			)
		;
	}
};

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
// now it's subscribed to state and will listen to any changes in it

/*
**
** PROPS
**
** STATE: the description of an object
** an object which describes our application
** here it's robots and whatever we have put in searchbox
**
** 
** The STATE's get passed down as PROPS from the parent to child
*/
// App component is smart component as it has states and it is not a
// pure function like CardList(which is sometimes also known as Dumb Component)

// see the order of evaluation of constructor, redner and componentDidMount












// USING REACT HOOKS

// import React, { useState, useEffect } from 'react';


// function App () {

// 	// state, function which changes its state
// 	const [robots, setRobots] = useState([]);
// 	const [searchfield, setSearchfield] = useState('');
// 	const [count, setCount] = useState(0);
// 	// Array Destructuring
	
	
// 	const onSearchChange = (event) => {
// 		setSearchfield(event.target.value);
// 	};


// 	useEffect(() => {
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 		.then(response => response.json())
// 		.then(users => {
// 			setRobots(users);
// 		});
// 	}, []);
// 	// does the same thing as componentDidMount
// 	// it runs every time App is rendered
// 	// if you want it to run only when some state changes
// 	// you mention it an array and pass them in the second parameter
// 	// Since we don't want it run ever again, we pass an empty array to it

// 	// regarding multiple useEffect
// 	// https://medium.com/technofunnel/https-medium-com-mayank-gupta-6-88-react-useeffect-hooks-in-action-2da971cfe83f 
// 	useEffect(() => {
// 		console.log(count);
// 	}, [count]);

// 	const filteredRobots = robots.filter(robot => {
// 		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
// 	});

// 	return !robots.length ? 
// 		<h1>Loading</h1>
// 		:
// 		(
// 			<div className='tc'>
// 				<h1 className='f1'>Robofriends</h1>
// 				<button class="grow dib f3-ns no-underline bg-light-green black-90 pa2" onClick={() => setCount(count+1)}>{`${count}`}</button>
// 				<SearchBox searchChange={onSearchChange}/>
// 				<Scroll>
// 					<ErrorBoundary>
// 						<CardList robots={filteredRobots}/>
// 					</ErrorBoundary>
// 				</Scroll>
// 			</div>
// 		)
// 	;
// };

// export default App;



