var React = require("react");
import {connect} from "react-redux";
import {addNumber} from "./../actions/actions.jsx";

class App extends React.Component {
	constructor(){
		super();
		this.onClick = this.onClick.bind(this);
	}

	onClick(e){
		e.preventDefault();
		this.props.dispatch(addNumber());
	}

	render(){
		return (
			<div>
				<h1 onClick={this.onClick}>Click me!</h1>
			</div>
			)
	}
}

export default connect()(App);

