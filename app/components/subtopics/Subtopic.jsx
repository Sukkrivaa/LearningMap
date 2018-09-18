var React = require("react");
import {connect} from "react-redux";
var Component = React.Component;
import {changeOrderSubtopic} from "./../../actions/actions.jsx"

export class Subtopic extends Component {
  constructor(props){
    super();
    this.text = props.text;
    this.onChangeOrder = props.onChangeOrder.bind(this);
    this.handleClick = props.handleSubtopicClick.bind(this);
  }


  render(){
    return (
      <div>
        <h3 onClick={this.handleClick}>{this.text}</h3>
        <button onClick={this.onChangeOrder}>Click here to change order of this subtopic</button>
      </div>
    )
  }
}

export default connect((state) => {return state})(Subtopic)
