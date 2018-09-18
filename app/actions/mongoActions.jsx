import axios from "axios";
import {setInitialState} from "./actions.jsx";

export function getInitialSubtopics(){
  return (dispatch, getState) => {
    axios.get("/api/getInitialSubtopics").then((res) => {
      dispatch(setInitialState(res.data));
    }).catch((e) => {console.log("Error when getting initial subtopics : ", e)});
  }
}

export function updateMongoOnSubtopics(updatedSubtopics){
  return (dispatch, getState) => {
    axios.post("/api/updateMongoOnSubtopics", {updatedSubtopics}).then(() => {
      console.log("updateMongoOnSubtopics api ran without problems")
    }).catch((e) => {
      console.log("Error Found on updateMongoOnSubtopics: ", e);
    })
  }
}
