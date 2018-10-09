import axios from "axios";
import {setInitialState, changeSubtopicContent} from "./actions.jsx";
const mongoRoutesString = require("./../../config/magicStrings").Routes.apiRoutesString.mongoRoutesString;

export function getInitialSubtopics(){
  return (dispatch, getState) => {
    axios.get(mongoRoutesString.getInitialSubtopics).then((res) => {
      dispatch(setInitialState(res.data));
    }).catch((e) => {console.log("Error when getting initial subtopics : ", e)});
  }
}

export function updateMongoOnSubtopics(updatedSubtopics){
  return (dispatch, getState) => {
    axios.post(mongoRoutesString.updateMongoOnSubtopics, {updatedSubtopics}).then(() => {
      console.log("updateMongoOnSubtopics api ran without problems")
    }).catch((e) => {
      console.log("Error Found on updateMongoOnSubtopics: ", e);
    })
  }
}

export function deleteMongoSubtopic(subtopic){
  return (dispatch, getState) => {
    axios.post(mongoRoutesString.deleteMongoSubtopic, {subtopic}).then(()=>{
      console.log("deleteMongoSubtopic ran without problems");
    }).catch((e) => {
      console.log("Error found on deleteMongoSubtopic: ", e)
    })
  }
}

export function pushChangesMongo(recentChange, explanation, activeSubtopic){
  return (dispatch, getState) => {
    var recentChangeString = JSON.stringify(recentChange);
    var activeSubtopic = getState().active
    dispatch(changeSubtopicContent(recentChange, activeSubtopic));
    axios.post(mongoRoutesString.pushChangesMongo, {recentChangeString, explanation, activeSubtopic}).then(() => {
      console.log("pushChangesMongo ran without problems");
    }).catch((e) => {
      console.log("Error found on pushChangesMongo: ", e)
    })
  }
}
