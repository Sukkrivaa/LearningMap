var React = require("react");
import {connect} from "react-redux";
var Component = React.Component;
import ReactQuill from 'react-quill';


export default class QuillEditor extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <ReactQuill
          modules={QuillEditor.modules}
          formats={QuillEditor.formats}
         />
      </div>
    )
  }

}

//To be edited tomorrow

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
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
QuillEditor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]
