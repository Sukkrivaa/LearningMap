var React = require("react");
var Component = React.Component;
import {connect} from "react-redux";


import SubtopicList from "./subtopics/SubtopicList.jsx";
import QuillEditor from "./Editor/QuillEditor.jsx";

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.renderEditorwithActiveContent = this.renderEditorwithActiveContent.bind(this);
  }

  //Render the editor only if the active state is not ""

  renderEditorwithActiveContent(){
    var bool = this.props.active !== "";
    if(bool){
      return (
        <div>
          <SubtopicList />
          <QuillEditor />
        </div>

    )

    }else{
      return (<div><SubtopicList /></div>)
    }
  }

  render(){

    return (
      <div>
        {this.renderEditorwithActiveContent()}
      </div>
    )
  }
}

export default connect((state) => state)(MainContainer)
