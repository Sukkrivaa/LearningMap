var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var {Provider} = require("react-redux");
import MainContainer from "./components/MainContainer.jsx";
// import QuillEditor from "./components/Editor/QuillEditor.jssx";
var actions = require("./actions/actions.jsx");
var store = require("./store/configureStore.jsx").configure();

store.subscribe(() => {
	var state = store.getState();
	console.log(state); //Keep this in for debugging purposes
});

import 'style-loader!css-loader!./../node_modules/react-quill/dist/quill.snow.css'; //Do this for stylesheets that you don't create

// import "./styles/base.scss"; //This worked for your own files //Don't really need to bother with this now

ReactDOM.render(
	<Provider store={store}>
		<MainContainer />
	</Provider>,
	document.getElementById("app")
)
