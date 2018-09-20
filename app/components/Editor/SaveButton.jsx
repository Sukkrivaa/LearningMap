var React = require("react");
import {connect} from "react-redux";
var Component = React.Component;

class SaveButton extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.onClickFunction = props.onClickfunction.bind(this);
  }

  render(){
    return (
      <button onClick={this.onClickFunction}>Save</button>
    )
  }

}


export default connect(state => state)(SaveButton);
