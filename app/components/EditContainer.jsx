var React = require("react");
var Component = React.Component;
import {connect} from "react-redux";


import SubtopicList from "./subtopics/SubtopicList.jsx";
import QuillEditor from "./Editor/QuillEditor.jsx";

class EditContainer extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.renderEditorwithActiveContent = this.renderEditorwithActiveContent.bind(this);
  }

  //Render the editor only if the active state is not ""

  renderEditorwithActiveContent(){
    var bool = this.props.active !== "";
    if(bool){
      return (
        <div>
          <a href="/auth/google"> Google Sign in</a>
          <br />
          <a href="/auth/logout">Google Sign Out</a>
          <SubtopicList />
          <QuillEditor />
        </div>

    )

    }else{
      return (
        <div>
          <a href="/auth/google"> Google Sign in</a>
          <br />
          <a href="/auth/logout">Google Sign Out</a>
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
