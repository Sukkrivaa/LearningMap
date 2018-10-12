var React = require("react");
var Component = React.Component;
import {connect} from "react-redux";
const authRoutesString = require("./../../config/magicStrings").Routes.authRoutesString
import SubtopicList from "./subtopics/SubtopicList.jsx";
import QuillEditor from "./Editor/QuillEditor.jsx";

class EditContainer extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.renderEditorwithActiveContent = this.renderEditorwithActiveContent.bind(this);
  }



  renderEditorwithActiveContent(){
    //Render the editor only if the active state is not ""
    var bool = this.props.active !== "";
    if(bool){
      return (
        <div>
          <a href={authRoutesString.googleStrategyRoutesString.googleAuthInitial}> Google Sign in</a>
          <br /> {/*Put this in the navigation bar*/}
          <a href={authRoutesString.generalRoutesString.logout}>Google Sign Out</a>
          <SubtopicList />
          <QuillEditor />
        </div>

    )

    }else{
      return (
        <div>
          <a href={authRoutesString.googleStrategyRoutesString.googleAuthInitial}> Google Sign in</a>
          <br />
          <a href={authRoutesString.generalRoutesString.logout}>Google Sign Out</a>
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
