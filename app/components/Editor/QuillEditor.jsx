var React = require("react");
import {connect} from "react-redux";
var Component = React.Component;
import ReactQuill from 'react-quill';
import SaveButton from "./SaveButton.jsx"

class QuillEditor extends Component {
  //need to set it such that the state changes when the actiev part changes

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }
s
  handleChange(value,delta,source,editor) {
    // this.setState({ text: editor.getContents() }) //need to do it this way becuase the delta only returns changes //need this later

    //Change the master content this way
  }

  renderQuillInitial(){
    var deltaValue = this.props.subtopics.filter(obj => {
      return obj.subtopic == this.props.active
    })[0].contents;
    return (
      <ReactQuill
        modules={QuillEditor.modules}
        formats={QuillEditor.formats}
        value={deltaValue} //defaultValue doesnt allow changes!!
       />
    )
  }

  render(){
    return (
      <div>
        {this.renderQuillInitial()}
        {this.props.active}
         <SaveButton />
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
