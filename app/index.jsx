var React = require("react");
var ReactDOM = require("react-dom");
var {Route, BrowserRouter, Link, hashHistory} = require("react-router-dom");
var {Provider} = require("react-redux");
import MainContainer from "./components/MainContainer.jsx";
var actions = require("./actions/actions.jsx");
var store = require("./store/configureStore.jsx").configure();

store.subscribe(() => {
	var state = store.getState();
	console.log(state); //Keep this in for debugging purposes
});

import 'style-loader!css-loader!./../node_modules/react-quill/dist/quill.snow.css'; //Do this for stylesheets that you don't create

// import "./styles/base.scss"; //This worked for your own files //Don't really need to bother with this now

const Home = () => (
  <div>
    <h2><Link to="/usr">Home</Link></h2> {/*We want express routes*/}
  </div>
);

//The link like usr is not a server route!! - it is an internal react route


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Route exact path="/" component={Home}/> {/*change this to an express route*/}
				<Route path="/usr" component={MainContainer}/>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById("app")
)
