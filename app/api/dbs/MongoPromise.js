const db = require("./Connection.js"); //might need this in the future
const Subtopic = require("./models/subtopicSchema");
const ProposedChange = require("./models/proposedChangesSchema");

const MongoPromise = {
  getInitialSubtopics: () => {
    return new Promise((resolve,reject) => {

      Subtopic.find({}).then((result) => {
        resolve(result);
      }).catch(() => {
        console.log("error here when trying to find initial subtopics");
        reject();
      })
    })
  },
  updateMongoOnSubtopics: (updatedSubtopics) => {
    var updatedSubtopicsMongo = [...updatedSubtopics];
    var count = 0;

    return new Promise((resolve, reject) => {
      for (var i = 0; i < updatedSubtopicsMongo.length; i++) {
        (function(j){
          Subtopic.findOneAndUpdate({subtopic: updatedSubtopicsMongo[j].subtopic}, {order: updatedSubtopicsMongo[j].order, unixUpdated:updatedSubtopicsMongo[j].unixUpdated, content: updatedSubtopicsMongo[j].content}, {upsert: true}).then(() => {
            console.log("updatedMongo");
          });
          count++
        }(i)) //Always use iifes when creating execution contexts in loops
      }
      if(count === updatedSubtopicsMongo.length){
        resolve()
      }else{
        reject("something went wrong");
      }
    })
  },
  deleteMongoSubtopic: (subtopicToBeDeleted) => {
    return new Promise((resolve, reject) => {
      Subtopic.remove({"subtopic": subtopicToBeDeleted}).then((res) => {
        resolve(res);
      }).catch(() => {
        console.log("Something went wrong here")
        reject();
      })

    })
  },
  pushChangesMongo: (recentChangeString, explanation, activeSubtopic) => {
    return new Promise((resolve, reject) => {

      var change = new ProposedChange({
        proposedNewDelta: recentChangeString,
        subtopic: activeSubtopic,
        explanation
      })

      change.save().then((res) => {
        resolve(res);
      }).catch((e) => {
        console.log("something went wrong on pushChangesMongo: ", e)
      })
    })
  }
}

module.exports = MongoPromise;
