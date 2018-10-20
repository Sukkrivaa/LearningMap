var moment = require("moment");
var subtopicSort = require("./../../api/logic/subtopicsSort");
const actionStrings = require("./../../config/magicStrings.js").actionStrings;

export var updateSubtopicReducer = (state = [], action) => {
	switch (action.type){
		case actionStrings.SubtopicListActions.ADD_SUBTOPIC:
			var arrayOfSubtopics = [...state, {subtopic: action.subtopic, order: parseInt(action.order), unixUpdated: action.timeCreated, content: JSON.stringify({ops: [{ insert: 'Placeholder Text', attributes: { color: '#abc' } }]})}]; //Have to use JSON.stringify because putting quotes does not make it JSON
			return subtopicSort(arrayOfSubtopics);
		case actionStrings.SubtopicListActions.CHANGE_ORDER_SUBTOPIC:
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
		case actionStrings.SubtopicListActions.SET_INITIAL_STATE:
			action.stateArray.sort((a,b) => {
				return a.order - b.order;
			})
			return action.stateArray;
		case actionStrings.SubtopicListActions.CHANGE_SUBTOPIC_CONTENT:
			var arrayOfSubtopics = [...state];
			arrayOfSubtopics.forEach((obj) => {
				if(obj.subtopic == action.activeSubtopic){
					obj.content = JSON.stringify(action.content);
				}
			})
			return arrayOfSubtopics;
		case actionStrings.SubtopicListActions.DELETE_SUBTOPIC:
			var newState=[...state];
			var filteredArray = newState.filter((obj)=>{
				return obj.subtopic !== action.subtopic
			});
			return filteredArray;
		default:
			return state;
	}
}

export var updateActiveSubtopicReducer = (state = "", action) => {
	switch (action.type) {
		case actionStrings.activeStateActions.CHANGE_ACTIVE_SUBTOPIC:
			return action.activeSubtopic;
		default:
			return state;
	}
}

export var updateActiveSubjectReducer = (state = "Physics", action) => {
	switch (action.type) {
		case actionStrings.activeSubjectActions.CHANGE_ACTIVE_SUBJECT:
			return action.activeSubject
		default:
			return state
	}
}


export var toggleEditingReducer = (state = "false", action) => {
	switch (action.type){
		case actionStrings.activeSubjectActions.CHANGE_ACTIVE_SUBJECT:
			return !state;
		default:
			return state;
	}
}
