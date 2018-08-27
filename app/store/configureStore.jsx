var redux = require("redux");

var {addNumberReducer, updateTextReducer, updateSubtopicReducer} = require("./../reducers/reducers.jsx");

export var configure = (initialState = {number:0,text:""}) => {
	var reducer = redux.combineReducers({
		number: addNumberReducer,
		text: updateTextReducer,
		subtopics: updateSubtopicReducer
	});

	var store = redux.createStore(reducer, initialState, redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
}