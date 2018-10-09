var React = require("react");
import {connect} from "react-redux";
import {addSubtopic, normalizeOrderSubtopic, changeOrderSubtopic, changeActive, deleteSubtopic} from "./../../actions/actions.jsx";
import { getInitialSubtopics, updateMongoOnSubtopics, deleteMongoSubtopic} from "./../../actions/mongoActions.jsx";
import Subtopic from "./Subtopic.jsx";
var moment = require("moment");
var Component = React.Component;
//add the map stateToProps and mapDispatchtoProps

class SubtopicList extends Component{
	constructor(){
		super();
		this.handleAddSubTopic = this.handleAddSubTopic.bind(this);
		this.renderSubtopics = this.renderSubtopics.bind(this);
		this.handleChangeOrder = this.handleChangeOrder.bind(this);
	}

	handleAddSubTopic(e){
		e.preventDefault();
		var subtopic = prompt("What is the Subtopic?");
		var order = prompt("What is the order?");
		var timeCreated = moment().unix();
		this.props.dispatch(addSubtopic(subtopic, order, timeCreated));
	}

	//Function to be passed down
	handleChangeOrder(subtopic){
		return function(){
			var newOrder = prompt("What is the new order of this topic");
	    this.props.dispatch(changeOrderSubtopic(subtopic, newOrder)) //Not asynchronous
		}
	}

	handleDeleteSubtopic(subtopic){
		return function(){
			if(confirm("Are you sure you want to delete this subtopic? All contents will not be recoverable.")){
				this.props.dispatch(deleteSubtopic(subtopic));
				this.props.dispatch(changeActive(""));
				this.props.dispatch(deleteMongoSubtopic(subtopic));
			}
		}
	}

	handleSubtopicClick(text){
		//action to change the active state
		return function(){
			this.props.dispatch(changeActive(text));
		}
	}

	componentDidUpdate(){
		//Runs everytime the DOM is updated - even if nothing here is updated - Which is why when quill's content is updated this runs - everytime the this.props.subtopics is added;
		//However, this does not work if something is deleted because when comparing states to the mongodb, mongoose does not update if the array element is not there in the first place. That is why need a separate async action to delete stuff from the database.
		this.props.dispatch(updateMongoOnSubtopics(this.props.subtopics));
	}

	componentWillMount(){
		this.props.dispatch(getInitialSubtopics());
	}

	renderSubtopics(){
		var subtopics = this.props.subtopics
		return subtopics.map((subtopic, index) => {
			return (
				<Subtopic text={subtopic.subtopic} key={Math.random()} handleChangeOrder={this.handleChangeOrder(subtopic.subtopic)} handleSubtopicClick={this.handleSubtopicClick(subtopic.subtopic)}
				handleDeleteSubtopic={this.handleDeleteSubtopic(subtopic.subtopic)}/>
			)
		})
	}

	render(){
		return (
			<div>
				<button onClick={this.handleAddSubTopic}>Click me to add a subtopic</button>
				<div>
					{this.renderSubtopics()}
				</div>
			</div>
			)
	}
}

export default connect((state) => {return {subtopics:state.subtopics}})(SubtopicList);
