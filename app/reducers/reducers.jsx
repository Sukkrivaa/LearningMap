var moment = require("moment");

export var updateSubtopicReducer = (state = [], action) =>{
	switch (action.type){
		case "ADD_SUBTOPIC":
			//Add the subtopic to the current list of subtopic using es7 destructuring
			return [...state, {subtopic: action.subtopic, order: action.order, unixUpdated: action.timeCreated}];
		case "NORMALIZE_ORDER_SUBTOPIC":
			// var repeatedOrder = false;
			// //Sorting the state according to order
			// var suptopicsArray = state.sort((a,b) => {
			// 	let orderVal = a.order-b.order
			// 	var timeVal = 0;
			// 	if(orderVal === 0){
			// 		repeatedOrder = true;
			// 		timeVal = b.unixCreated - a.unixCreated;
			// 	}
			// 	return orderVal === 0 ? timeVal : orderVal;
			// })
			var newState = state.slice();
			for(var i = 0; i <newState.length; i++){
				newState[i].order = (i+1)
			}
			return newState;
		case "CHANGE_ORDER_SUBTOPIC":
			// We were mutating here - need to prevent that by making a copy
			var newState = [...state];
			var index = newState.findIndex(subtopic => subtopic.subtopic === action.subtopic);
			console.log("index: " + index)
			console.log(newState[index])
			newState[index]["order"] = parseInt(action.newOrder);
			newState[index]["unixUpdated"] = moment().unix();
			return newState;
		default:
			return state;
	}
}
