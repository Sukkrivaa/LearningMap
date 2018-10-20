var React = require("react");
var Component = React.Component;
import {connect} from "react-redux";
const authRoutesString = require("./../../../config/magicStrings").Routes.authRoutesString
var {Link} = require("react-router-dom");

class NavigationBar extends Component {
  constructor(props){
    super(props);
    // props have the page we are at and the logged in Status
    // this.loggedInBool = props.loggedInBool.length !== 0;
    this.cookieData = props.cookieData;
  }

  renderBasedOnPageAndLoggedInStatus(){
    var loggedInBool = this.cookieData instanceof Object
    var editingBool = this.props.editing;
    console.log(editingBool);
    if(loggedInBool){
      if(editingBool){
        return (
          <div>
            <a href={authRoutesString.generalRoutesString.logout}>Sign out</a>
            <Link to="/profile"><p>Profile</p></Link>
            <Link to="/NoEdit"><p>Stop Editing</p></Link>
          </div>)
      }else{
        return (
          <div>
            <a href={authRoutesString.generalRoutesString.logout}>Sign out</a>
            <Link to="/profile"><p>Profile</p></Link>
            <Link to="/edit"><p>Edit</p></Link>
          </div>)
      }
      //return logout
      //return profile
      //return edit based on subject page - which we get directly from the store
    }else{
      return (
        <a href={authRoutesString.googleStrategyRoutesString.googleAuthInitial}> Sign in to edit and vote</a>
      )
      //return login to edit and vote
      //based on subject page with we get from store outside the if-statement
    }
  }

  render(){
    return (
      <div>
        {this.renderBasedOnPageAndLoggedInStatus()}
      </div>)
  }

}

export default connect((state) => state)(NavigationBar);
