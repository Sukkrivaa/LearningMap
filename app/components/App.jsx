var React = require("react");
import {connect} from "react-redux";
import {addNumber, updateText} from "./../actions/actions.jsx";

class App extends React.Component {
	constructor(){
		super();
		this.onClick = this.onClick.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onClick(e){
		e.preventDefault();
		this.props.dispatch(addNumber());
		console.log(this.refs.textInput.value);
	}

	onChange(e){
		e.preventDefault();
		this.props.dispatch(updateText(this.refs.textInput.value));
		console.log(this.props)
	}

	onAddSubTopic(e){
		e.preventDefault();
		this.props.dispatch(addSubtopic("test"));
	}

	render(){
		return (
			<div>
				<h1 onClick={this.onClick}>Click me!</h1>
				<input onChange={this.onChange} type="text" ref="textInput"/>
				<h1>{this.props.text}</h1>
			</div>
			)
	}
}

export default connect((state) => {return state})(App);

