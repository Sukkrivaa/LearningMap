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
    var activeBool = this.props.activeSubtopic !== "";
    //Add a case where editing is active then return quill editor else return non-editable container
    var editingBool = this.props.editing
    if(activeBool && editingBool){
      return (
        <div>
          <SubtopicList />
          <QuillEditor />
        </div>

    )

  } else if (activeBool && !editingBool){
    return (
      <div>
        <SubtopicList />
        <h1>Sample text</h1>
      </div>
    )
  } else{
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
