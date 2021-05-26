import React, {Component} from 'react';

class ErrorBoundary extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	/*try-catch block in Javascript ..... if anything errors out, it will run this life-cycle hook*/
	componentDidCatch(error, info) {
		this.setState({hasError: true});
	}

	render() {
		if(this.state.hasError) {
			return <h1>Oooops. That is not good.</h1>;
		}
		return this.props.children;
	}
}


export default ErrorBoundary;


