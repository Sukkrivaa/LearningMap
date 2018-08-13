export var addNumberReducer = (state = 0, action) => {
	switch(action.type) {
		case "ADD_NUMBER":
			return (state+1);
		default: 
			return state;
	}
}