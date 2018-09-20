var moment = require("moment");
var subtopicSort = require("./../api/logic/subtopicsSort");

export var updateSubtopicReducer = (state = [], action) => {
	switch (action.type){
		case "ADD_SUBTOPIC":
			var arrayOfSubtopics = [...state, {subtopic: action.subtopic, order: parseInt(action.order), unixUpdated: action.timeCreated, content: {
				ops: [
					{ insert: 'White', attributes: { color: '#abc' } }
				]
			}}];
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

export var updateMasterContent = (state = "", action) => {
	switch (action.type) {
		case "SET_MASTER_CONTENT":
			return action.content
		default:
			return state;
	}
}
