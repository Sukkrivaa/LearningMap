const MongoPromise = require('./MongoPromise.js');

module.exports = {
  getInitialSubtopics: (req,res) => {
    MongoPromise.getInitialSubtopics().then((currentSubtopics) => {
      console.log("Successfully got Subtopics from MongoDB")
      res.send(currentSubtopics);
    }).catch((e) => {
      console.log("Error when getting initial Subtopics after the api call: ", e);
    });
  },
  updateMongoOnSubtopics: (req,res) => {
    const {updatedSubtopics} = req.body;
    MongoPromise.updateMongoOnSubtopics(updatedSubtopics).then(() => {res.send("Successful Change on MongoDB")}).catch((e) => {console.log("Error when upserting Subtopics after the api call: ",e)});
  },
  deleteMongoSubtopic: (req, res) => {
    const {subtopic} = req.body;
    MongoPromise.deleteMongoSubtopic(subtopic).then(() => {
      console.log("this ran on MongoDBRoutes");
      res.send("Successful deletion on MongoDB")
    }).catch((e) => {console.log("Error when deleting on MongoDB: ", e)});
  }
}
