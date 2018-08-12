var react = require("react");
var reactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var {Provider} = require("react-redux");

var Sidebar = require("./components/Sidebar.jsx");
var actions = require("./actions/actions.jsx");
var store = require("./store/configureStore").configure();

store.subscribe(() => {
	var state = store.getState();
	console.log(state);
});



ReactDOM.render(
	<Provider store={store}>
		<Sidebar />
	</Provider>,
	document.getElementByID("app")
);