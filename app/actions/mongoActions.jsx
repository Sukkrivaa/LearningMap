import axios from "axios";
import {setInitialState} from "./actions.jsx";

export function saveSubtopicToMongo(subtopic, order, unixUpdated){
  //This asynchronous action is possible because of redux-thunk
  return (dispatch, getState) => {
    //I suspect that there is something wrong with the way you are sending data
    //Error here - the axios post comes back with error 500 - check your fundamentals for axios and express - this is the data sent to express - make sure it is able to handle it
    axios.post("/api/saveSubtopicToMongo", /*The request object is given here*/{unixUpdated, subtopic, order}).then((response) => {

    }).catch((e) => {console.log("Error Found: ", e)});
  }
}

export function getInitialSubtopics(){
  return (dispatch, getState) => {
    axios.post("/api/getInitialSubtopics").then((res) => {
      dispatch(setInitialState(res.data));
    }).catch((e) => {console.log("Error when getting initial subtopics : ", e)});
  }
}

export function changeOrderSubtopicMongoDB(subtopicsState){
  return (dispatch, getState) => {
    console.log("This is running");
    axios.post("/api/changeOrderSubtopic", {subtopicsState}).then(() => {console.log("api ran without problems")}).catch((e) => console.log("Error Found: ", e));
  }
}
