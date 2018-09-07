var moment = require("moment");
var subtopicSort = require("./../api/logic/subtopicsSort");

export var updateSubtopicReducer = (state = [], action) =>{
	switch (action.type){
		case "ADD_SUBTOPIC":
			var arrayOfSubtopics = [...state, {subtopic: action.subtopic, order: parseInt(action.order), unixUpdated: action.timeCreated}];
			return subtopicSort(arrayOfSubtopics);
		case "CHANGE_ORDER_SUBTOPIC":
			var newState = [...state];
			var index = newState.findIndex(subtopic => subtopic.subtopic === action.subtopic);
			var oldOrder = newState[index]["order"];
			if(oldOrder < action.newOrder){
				newState[index]["order"] = parseInt(action.newOrder) + 1;
			}else{
				newState[index]["order"] = parseInt(action.newOrder);
			}
			newState[index]["unixUpdated"] = moment().unix();
			return subtopicSort(newState);
		default:
			return state;
	}
}
