var moment = require("moment");

export var updateSubtopicReducer = (state = [], action) =>{
	switch (action.type){
		case "ADD_SUBTOPIC":
			//Add the subtopic to the current list of subtopic using es7 destructuring
			var arrayOfSubtopics = [...state, {subtopic: action.subtopic, order: parseInt(action.order), unixUpdated: action.timeCreated}];
			arrayOfSubtopics.sort((a,b) => {
				var orderVal = a.order - b.order;
				var timeVal = 0;
				if(orderVal === 0){
					timeVal = b.unixUpdated - a.unixUpdated //negative means that a was created before b and thus should be put before
				}
				return orderVal === 0 ? timeVal : orderVal;
			})

			for(var i = 0; i <arrayOfSubtopics.length; i++){
				arrayOfSubtopics[i].order = (i+1)
			}
			return arrayOfSubtopics;
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
			// var newState = state.slice();
			// for(var i = 0; i <newState.length; i++){
			// 	newState[i].order = (i+1)
			// }
			// return newState;
		case "CHANGE_ORDER_SUBTOPIC":
			// We were mutating here - need to prevent that by making a copy
			var newState = [...state];
			var index = newState.findIndex(subtopic => subtopic.subtopic === action.subtopic);
			// console.log("index: " + index)
			// console.log(newState[index])
			var oldOrder = newState[index]["order"];
			if(oldOrder < action.newOrder){
				newState[index]["order"] = parseInt(action.newOrder) + 1;
			}else{
				newState[index]["order"] = parseInt(action.newOrder);
			}
			newState[index]["unixUpdated"] = moment().unix();
			// console.log("Currently" + newState[index].order)
			//timeVal should be opposite if sorting up and normal when sorting down
			console.log("Before Sorting ", newState);
			newState.sort((a,b) => {
				var orderVal = a.order - b.order;
				var timeVal = 0;
				if(orderVal === 0){
					timeVal = b.unixUpdated - a.unixUpdated;
				}
				return orderVal === 0 ? timeVal : orderVal;
			})
			console.log("After Sorting ", newState);
			for(var i = 0; i <newState.length; i++){
				newState[i].order = (i+1)
			}
			return newState;
		default:
			return state;
	}
}
