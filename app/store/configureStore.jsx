var redux = require("redux");

var {addNumberReducer, updateTextReducer} = require("./../reducers/reducers.jsx");

export var configure = (initialState = {number:0,text:""}) => {
	var reducer = redux.combineReducers({
		number: addNumberReducer,
		text: updateTextReducer
	});

	var store = redux.createStore(reducer, initialState, redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
}