var React = require("react");
import {connect} from "react-redux";
var Component = React.Component;

class SaveButton extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <button>Save</button>
    )
  }

}


export default connect(state => state)(SaveButton);
