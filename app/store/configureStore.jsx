var redux = require("redux");
import thunk from "redux-thunk";

var {updateSubtopicReducer} = require("./../reducers/reducers.jsx");

export var configure = (initialState = {subtopics:[]}) => {
	//To be implemented once we have more than one reducer
	var reducer = redux.combineReducers({
		subtopics: updateSubtopicReducer
	});

	var store = redux.createStore(reducer, initialState,redux.applyMiddleware(thunk), redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
}
