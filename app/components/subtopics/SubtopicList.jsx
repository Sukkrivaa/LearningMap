var React = require("react");
import {connect} from "react-redux";
import {addSubtopic, normalizeOrderSubtopic, changeOrderSubtopic} from "./../../actions/actions.jsx";
import { getInitialSubtopics, updateMongoOnSubtopics} from "./../../actions/mongoActions.jsx";
import Subtopic from "./Subtopic.jsx";
var moment = require("moment");
var Component = React.Component;
//add the map stateToProps and mapDispatchtoProps

class SubtopicList extends Component{
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
		return function(){
			var newOrder = prompt("What is the new order of this topic");
	    this.props.dispatch(changeOrderSubtopic(text, newOrder)) //Not asynchronous
		}
	}

	componentDidUpdate(){
		this.props.dispatch(updateMongoOnSubtopics(this.props.subtopics));

	}

	componentWillMount(){
		this.props.dispatch(getInitialSubtopics());
	}

	renderSubtopics(){
		var subtopics = this.props.subtopics
		return subtopics.map((subtopic, index) => {
			return (
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

export default connect((state) => {return {subtopics:state.subtopics}})(SubtopicList);
