const db = require("./Connection.js");
const Subtopic = require("./models/subtopicSchema");
const MongoPromise = {
  getInitialSubtopics: () => {
    return new Promise((resolve,reject) => {
      Subtopic.find({}).then((result) => {
        resolve(result);
      })

    })
  },
  updateMongoOnSubtopics: (updatedSubtopics) => {
    var updatedSubtopicsMongo = [...updatedSubtopics];
    var count = 0;

    return new Promise((resolve, reject) => {
      for (var i = 0; i < updatedSubtopicsMongo.length; i++) {
        (function(j){
          Subtopic.findOneAndUpdate({subtopic: updatedSubtopicsMongo[j].subtopic}, {order: updatedSubtopicsMongo[j].order}, {upsert: true}).then(() => {
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
  }
}

module.exports = MongoPromise;
