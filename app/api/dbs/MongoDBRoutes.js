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
    console.log("this is the updatedSubtopics on the server", updatedSubtopics);
    MongoPromise.updateMongoOnSubtopics(updatedSubtopics).then(() => {res.send("Successful Change on MongoDB")}).catch((e) => {console.log("Error when upserting Subtopics after the api call: ",e)});
  }
}
