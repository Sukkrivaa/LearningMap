export var addNumberReducer = (state = 0, action) => {
	switch(action.type){
		case "ADD_NUMBER":
			return (action.number + 1);
		default:
			return state
	}
}

export var toggleNumberReducer = (state = "even", action) => {
	switch(action.type){
		case "REVERSE_POLARITY":
			return (action.polarity);
		default:
			return state;
	}
}

