export var addNumberReducer = (state = 0, action) => {
	switch(action.type) {
		case "ADD_NUMBER":
			return (state+1);
		default: 
			return state;
	}
}

export var updateTextReducer = (state= "", action) => {
	switch (action.type){
		case "UPDATE_TEXT":
			return action.text;
		default:
			return "";
	}
}