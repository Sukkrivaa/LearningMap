import axios from "axios";



export function saveSubtopicToMongo(subtopic, order, unixUpdated){
  //This asynchronous action is possible because of redux-thunk
  return (dispatch, getState) => {
    //I suspect that there is something wrong with the way you are sending data
    //Error here - the axios post comes back with error 500 - check your fundamentals for axios and express - this is the data sent to express - make sure it is able to handle it
    axios.post("/api/saveSubtopicToMongo", /*The request object is given here*/{unixUpdated, subtopic, order}).then((response) => {
      console.log("posted via axios 'saveSubtopicToMongo' ");
      console.log(response);
    }).catch((e) => {console.log("Error Found: ", e)});
  }
}
