var redux = require("redux");

var {updateSubtopicReducer} = require("./../reducers/reducers.jsx");

export var configure = (initialState = {subtopics:[]}) => {
	//To be implemented once we have more than one reducer
	var reducer = redux.combineReducers({
		subtopics: updateSubtopicReducer
	});

	var store = redux.createStore(reducer, initialState, redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
}
