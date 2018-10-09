var React = require("react");
import {connect} from "react-redux";
var Component = React.Component;

class SaveButton extends Component {
  constructor(props){
    super(props);
    this.handleClickFunction = props.handleClickFunction.bind(this);
  }

  render(){
    return (
      <button onClick={this.handleClickFunction}>Save</button>
    )
  }

}


export default connect(state => state)(SaveButton);
