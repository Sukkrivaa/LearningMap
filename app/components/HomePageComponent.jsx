var React = require("react");
var Component = React.Component;
import {connect} from "react-redux";
var {Link} = require("react-router-dom")

class HomePageComponent extends Component {
  constructor(props){
    super(props);
    this.linkRoute = props.linkRoute
  }


  getMongoSubtopics(){
    //Get the list of subjects from mongo and compile JSX from them with the proper Link
  }

  render(){
    return (
      <div>
        {/*For now just have physics*/}
        <Link to="/physics"><h1>Physics</h1></Link>
      </div>
    )


  }


}

export default connect((state) => state)(HomePageComponent)
