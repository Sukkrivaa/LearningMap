var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var {Provider} = require("react-redux");
import App from "./components/App.jsx";

var actions = require("./actions/actions.jsx");
var store = require("./store/configureStore.jsx").configure();

store.subscribe(() => {
	var state = store.getState();
	console.log(state);
	//Update MongoDB here
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
)
