var redux = require("redux");
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

var {updateSubtopicReducer, updateActiveReducer, updateMasterContent} = require("./../reducers/reducers.jsx");

export var configure = (initialState = {subtopics:[]}) => {
	var reducer = redux.combineReducers({
		subtopics: updateSubtopicReducer,
		active: updateActiveReducer
	});

	var store = redux.createStore(reducer, initialState, composeWithDevTools(redux.applyMiddleware(thunk)), redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
}
