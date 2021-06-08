// import React, {Component} from 'react';
import React, { useState, useEffect } from 'react';
// import { robots } from '../robots.js'; // now we have used API so we don't need this anymore
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js'
import ErrorBoundary from '../components/ErrorBoundary.js';
import './App.css'


/* USING REACT HOOKS */


function App () {

	// state, function which changes its state
	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState('');
	const [count, setCount] = useState(0);
	// Array Destructuring
	
	
	const onSearchChange = (event) => {
		setSearchfield(event.target.value);
	};


	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {
			setRobots(users);
		});
	}, []);
	// does the same thing as componentDidMount
	// it runs every time App is rendered
	// if you want it to run only when some state changes
	// you mention it an array and pass them in the second parameter
	// Since we don't want it run ever again, we pass an empty array to it

	// regarding multiple useEffect
	// https://medium.com/technofunnel/https-medium-com-mayank-gupta-6-88-react-useeffect-hooks-in-action-2da971cfe83f 
	useEffect(() => {
		console.log(count);
	}, [count]);

	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	});

	return !robots.length ? 
		<h1>Loading</h1>
		:
		(
			<div className='tc'>
				<h1 className='f1'>Robofriends</h1>
				<button class="grow dib f3-ns no-underline bg-light-green black-90 pa2" onClick={() => setCount(count+1)}>{`${count}`}</button>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots}/>
					</ErrorBoundary>
				</Scroll>
			</div>
		)
	;
};

export default App;








// class App extends Component {
// 	constructor() {
// 		super();
// 		// super calls the constructor of Component
// 		this.state = {
// 			robots: [], // empty array
// 			searchfield: ''
// 		}
// 		/*VDOM is just an objects that collects these states and 
// 		react uses these states to render and pass them down as props
// 		to components so that the components which are just functions 
// 		can render*/
// 		// console.log('constructor');
// 	};
// 	// the state lives in the parent component which just passes states

// 	/*
// 	this function has a problem
// 	here this refers to the input in searchfield as the event happened there

// 	onSearchChange(event) {
// 		// console.log(event.target.value);
// 		const filteredRobots = this.state.robots.filter(robot => {
// 			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
// 		});
// 		console.log(filteredRobots);
// 	};

// 	So we modify it by doing following trick:
// 	anythime you make a method on component, we use arrow function syntax
// 	now, this will refer to the place where this method was created

// 	this happens only when we create a function that is not defined in react
// 	*/

// 	onSearchChange = (event) => {
// 		// to update state, always use setState
// 		this.setState({searchfield: event.target.value});
// 	};

// 	componentDidMount() {

// 		// fetch comes with all browsers and is a part of the window object
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 			.then(response => {
// 				return response.json();
// 			})
// 			.then(users => {
// 				this.setState({robots: users});
// 			});
// 			/*fetch()
// 			.then(response=> response.json())
// 			.then(users=> this.setState({robots: users}))
// 			*/

// 		// this.setState({robots: robots}); // one of the use cases of componentDidMount
// 		// console.log('componentDidMount');
// 	}

// 	render() {

// 		// console.log('render');

// 		const {robots, searchfield} = this.state;

// 		const filteredRobots = robots.filter(robot => {
// 			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
// 		});

// 		// ternary operator: this is to show if the APi takes time to return data

// 		return !robots.length ? 
// 			<h1>Loading</h1>
// 			:
// 			(
// 				<div className='tc'>
// 					<h1 className='f1'>Robofriends</h1>
// 					<SearchBox searchChange={this.onSearchChange}/>
// 					<Scroll>
// 						<ErrorBoundary>
// 							<CardList robots={filteredRobots}/>
// 						</ErrorBoundary>
// 					</Scroll>
// 				</div>
// 			)
// 		;
// 	}
// };

// export default App;

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