var redux = require("redux");

var {addNumberReducer, toggleNumberReducer} = require("./../reducers/reducers.jsx");

export var configure = (initialState = {}) => {
	var reducer = redux.combineReducers({
		number: addNumberReducer,
		polarity: toggleNumberReducer
	});

	var store = redux.createStore(reducer, initialState, redux.compose(
		window.devtoolExtension ? window.devtoolExtension() : f => f
	));
}

