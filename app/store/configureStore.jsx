var redux = require("redux");
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

var {updateSubtopicReducer, updateActiveSubtopicReducer, updateMasterContent, updateActiveSubjectReducer} = require("./../reducers/reducers.jsx");

export var configure = (initialState = {subtopics:[], activeSubtopic: "", activeSubject: ""}) => {
	var reducer = redux.combineReducers({
		subtopics: updateSubtopicReducer,
		activeSubtopic: updateActiveSubtopicReducer,
		activeSubject: updateActiveSubjectReducer
	});

	var store = redux.createStore(reducer, initialState, composeWithDevTools(redux.applyMiddleware(thunk)), redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
}
