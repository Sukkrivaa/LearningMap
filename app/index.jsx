var React = require("react");
var ReactDOM = require("react-dom");
var {Route, BrowserRouter, Link, hashHistory, Switch} = require("react-router-dom");
var {Provider} = require("react-redux");
import EditContainer from "./components/EditContainer.jsx";
var actions = require("./actions/actions.jsx");
var store = require("./store/configureStore.jsx").configure();
var axios = require("axios");
var getCookieValue = require("./../config/magicStrings").Routes.authRoutesString.generalRoutesString.getCookieValue
import NavigationBar from "./components/NavigationBar/index.jsx";
import HomePageComponent from "./components/HomePageComponent.jsx"

store.subscribe(() => {
	var state = store.getState();
	console.log(state); //Keep this in for debugging purposes
});

import 'style-loader!css-loader!./../node_modules/react-quill/dist/quill.snow.css'; //Do this for stylesheets that you don't create

// import "./styles/base.scss"; //This worked for your own files //Don't really need to bother with this now
function renderRoutesJSXOfSubjects(){
	//Render the JSX from the database and add a prop where we get the linkRoute
	return <Route exact path="/physics" component = {() => <h1>Physics</h1>} />
}

axios.get(getCookieValue).then((res) => {
	ReactDOM.render(
		<Provider store={store}>
			<div>

				<BrowserRouter>
					<div>
						<NavigationBar cookieData={res.data}/>
						<Switch>
							<Route exact path="/test" component={HomePageComponent} />
							<Route exact path="/" render={(props) => <EditContainer {...props} cookieData={res.data}/>}/>
							{renderRoutesJSXOfSubjects()};
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		</Provider>,
		document.getElementById("app")
	)
})
