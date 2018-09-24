var moment = require("moment");
var subtopicSort = require("./../api/logic/subtopicsSort");

export var updateSubtopicReducer = (state = [], action) => {
	switch (action.type){
		case "ADD_SUBTOPIC":
			var arrayOfSubtopics = [...state, {subtopic: action.subtopic, order: parseInt(action.order), unixUpdated: action.timeCreated, content: JSON.stringify({ops: [{ insert: 'Placeholder Text', attributes: { color: '#abc' } }]})}]; //Have to use JSON.stringify because putting quotes does not make it JSON
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
		case "SET_INITIAL_STATE":
			action.stateArray.sort((a,b) => {
				return a.order - b.order;
			})
			return action.stateArray;
		case "CHANGE_SUBTOPIC_CONTENT":
			var arrayOfSubtopics = [...state];
			arrayOfSubtopics.forEach((obj) => {
				if(obj.subtopic == action.activeSubtopic){
					obj.content = JSON.stringify(action.content);
				}
			})
			return arrayOfSubtopics;
		case "DELETE_SUBTOPIC":
			var newState=[...state];
			var filteredArray = newState.filter((obj)=>{
				return obj.subtopic !== action.subtopic
			});
			return filteredArray;
		default:
			return state;
	}
}

export var updateActiveReducer = (state = "", action) => {
	switch (action.type) {
		case "CHANGE_ACTIVE":
			return action.activeSubtopic;
		default:
			return state;
	}
}
