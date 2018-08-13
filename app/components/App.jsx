var React = require("react");
var actions = require("./../actions/actions.jsx");

export default class App extends React.Component{
	onClick(e){
		e.preventDefault();
		var dispatch = this.props.bind(this);
		dispatch(actions.addNumber)
	}

	render(){
		return (
			<div>
				<h1 onClick={this.onClick}>Click me!</h1>
			</div>
			)
	}
}