var React = require("react");
import {connect} from "react-redux";
var Component = React.Component;

class PushButton extends Component {
  constructor(props){
    super(props);
    this.onClickFunction = props.onClickFunction.bind(this);
  }

  render(){
    return (
      <button onClick={this.onClickFunction}>Push</button>
    )
  }

}


export default connect(state => state)(PushButton);
