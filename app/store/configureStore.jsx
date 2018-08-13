var redux = require("redux");

var {addNumberReducer} = require("./../reducers/reducers.jsx");

export var configure = (initialState = 0) => {
	var reducer = addNumberReducer;
	var store = redux.createStore(reducer, initialState, redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f=>f
	));

	return store;
}

