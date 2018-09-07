var React = require("react");
import {connect} from "react-redux";
import {addSubtopic, normalizeOrderSubtopic, changeOrderSubtopic} from "./../actions/actions.jsx";
import Subtopic from "./Subtopic.jsx";
var moment = require("moment");
var Component = React.Component;

class App extends Component{
	constructor(){
		super();
		this.onAddSubTopic = this.onAddSubTopic.bind(this);
		this.renderSubtopics = this.renderSubtopics.bind(this);
		this.onChangeOrder = this.onChangeOrder.bind(this);
	}

	onAddSubTopic(e){
		e.preventDefault();
		var subtopic = prompt("What is the Subtopic?");
		var order = prompt("What is the order?");
		var timeCreated = moment().unix();
		this.props.dispatch(addSubtopic(subtopic, order, timeCreated));
	}

	//Function to be passed down
	onChangeOrder(text){
		// The reason this does not automatically update is because we are changing an object in the state - something react has difficulty with - doesn't recognise the state change
		return function(){
			var newOrder = prompt("What is the new order of this topic");
	    //action to change the order of the subtopics - use id once you connect to mongoDB
	    this.props.dispatch(changeOrderSubtopic(text, newOrder))
		}
	}

	renderSubtopics(){
		var subtopics = this.props.subtopics
		//Return the JSX
		return subtopics.map((subtopic, index) => {
			return (
				//If keys repeat, we will screw up the code - in the future, use an id which might come in useful for mongoDB - can use the mongoDB id for this document as a key - for now just use random numbers.
				<Subtopic text={subtopic.subtopic} key={Math.random()} onChangeOrder={this.onChangeOrder(subtopic.subtopic)}/>
			)
		})
	}

	render(){
		return (
			<div>
				<button onClick={this.onAddSubTopic}>Click me to add a subtopic</button>
				<div>
					{this.renderSubtopics()}
				</div>
			</div>
			)
	}
}

export default connect((state) => {return state})(App);
