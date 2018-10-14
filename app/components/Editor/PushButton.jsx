var React = require("react");
import {connect} from "react-redux";
var Component = React.Component;

class PushButton extends Component {
  constructor(props){
    super(props);
    this.handleClickFunction = props.handleClickFunction.bind(this);
  }

  render(){
    return (
      <button onClick={this.handleClickFunction}>Save and Push</button>
    );
  }

}


export default connect(state => state)(PushButton);
