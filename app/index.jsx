var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var {Provider} = require("react-redux");
import SubtopicList from "./components/SubtopicList.jsx";

var actions = require("./actions/actions.jsx");
var store = require("./store/configureStore.jsx").configure();

store.subscribe(() => {
	var state = store.getState();
	console.log(state); //Keep this in for debugging purposes
});

ReactDOM.render(
	<Provider store={store}>
		<SubtopicList />
	</Provider>,
	document.getElementById("app")
)
