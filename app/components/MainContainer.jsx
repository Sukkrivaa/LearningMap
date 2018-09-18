var React = require("react");
var Component = React.Component;

import SubtopicList from "./subtopics/SubtopicList.jsx";
//import QuillEditor from "./Editor/QuillEditor.jsx";

export default class MainContainer extends Component {
  render(){
    return (
      <div>
        <SubtopicList />
        {/* <QuillEditor /> */}
      </div>
    )
  }
}
