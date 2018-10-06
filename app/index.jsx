var React = require("react");
var ReactDOM = require("react-dom");
var {Route, BrowserRouter, Link, hashHistory} = require("react-router-dom");
var {Provider} = require("react-redux");
import EditContainer from "./components/EditContainer.jsx";
var actions = require("./actions/actions.jsx");
var store = require("./store/configureStore.jsx").configure();
var axios = require("axios");
store.subscribe(() => {
	var state = store.getState();
	console.log(state); //Keep this in for debugging purposes
});

import 'style-loader!css-loader!./../node_modules/react-quill/dist/quill.snow.css'; //Do this for stylesheets that you don't create

// import "./styles/base.scss"; //This worked for your own files //Don't really need to bother with this now


axios.get("/getCookieValue").then((res) => {
	ReactDOM.render(
		<Provider store={store}>
			<BrowserRouter>
				<div>
					<Route exact path="/" render={(props) => <EditContainer {...props} cookieData={res.data}/>}/> 
				</div>
			</BrowserRouter>
		</Provider>,
		document.getElementById("app")
	)
})
