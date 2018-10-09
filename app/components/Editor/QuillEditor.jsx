var React = require("react");
import {connect} from "react-redux";
var Component = React.Component;
import ReactQuill from 'react-quill';
import SaveButton from "./SaveButton.jsx";
import PushButton from "./PushButton.jsx";
import {changeSubtopicContent} from "./../../actions/actions.jsx";
import {pushChangesMongo} from "./../../actions/mongoActions.jsx";

class QuillEditor extends Component {
  //need to set it such that the state changes when the actiev part changes

  constructor(props){
    super(props);
    this.arrayOfChanges = [];
    this.handleChange = this.handleChange.bind(this);
    this.handleQuillChange = this.handleQuillChange.bind(this);
    this.handlePush = this.handlePush.bind(this);
  }

  handleChange(arrayOfChanges) {
    return function(){
      var recentChange = arrayOfChanges[arrayOfChanges.length - 1]
      this.props.dispatch(changeSubtopicContent(recentChange, this.props.active));
    }
  }

  handlePush(arrayOfChanges) {
    return function(){
      var explanation = prompt("Brief Description of the change")
      var recentChange = arrayOfChanges[arrayOfChanges.length - 1]
      this.props.dispatch(pushChangesMongo(recentChange, explanation, this.props.active));
    }
  }

  handleQuillChange(content, delta, source, editor){
     this.arrayOfChanges.push(editor.getContents());
  }

  renderQuillInitial(){
    var deltaValue = this.props.subtopics.filter(obj => {
      return obj.subtopic == this.props.active
    })[0].content
    return (
      <ReactQuill
        modules={QuillEditor.modules}
        formats={QuillEditor.formats}
        value={JSON.parse(deltaValue)} //defaultValue doesnt allow changes!!
        onChange={this.handleQuillChange}
       />
    )
  }

  render(){
    return (
      <div>
        <h2>{this.props.active}</h2>
        {this.renderQuillInitial()}
         <SaveButton handleClickFunction={this.handleChange(this.arrayOfChanges)}/>
         <PushButton handleClickFunction={this.handlePush(this.arrayOfChanges)}/>
      </div>
    )
  }

}

QuillEditor.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'},
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}

QuillEditor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

export default connect(state => {return {active: state.active, subtopics: state.subtopics}})(QuillEditor);
