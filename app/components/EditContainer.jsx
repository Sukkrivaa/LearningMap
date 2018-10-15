var React = require("react");
var Component = React.Component;
import {connect} from "react-redux";
const authRoutesString = require("./../../config/magicStrings").Routes.authRoutesString
import SubtopicList from "./subtopics/SubtopicList.jsx";
import QuillEditor from "./Editor/QuillEditor.jsx";

class EditContainer extends Component {
  constructor(props){
    super(props);
    // console.log(props);
    this.renderEditorwithActiveContent = this.renderEditorwithActiveContent.bind(this);
  }



  renderEditorwithActiveContent(){
    //Render the editor only if the active state is not ""
    var bool = this.props.activeSubtopic !== "";
    if(bool){
      return (
        <div>
          <SubtopicList />
          <QuillEditor />
        </div>

    )

    }else{
      return (
        <div>
          <SubtopicList />
        </div>
      )
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

export default connect((state) => state)(EditContainer)
