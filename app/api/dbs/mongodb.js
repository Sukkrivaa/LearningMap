const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

mongoose.connect("mongodb://localhost/LearningMapDev", {useNewUrlParser: true});

mongoose.connection.once("open", () => {
  console.log("Connection Successful");
}).on("error", (e) => {
  console.log("connection error: ", e)
})

db = mongoose.connection;

const MongoPromise = {
  saveSubtopicToMongo: (subtopic,order,unixUpdated) => {
    return new Promise(function(resolve, reject) {
      const Subtopics = db.collection("Subtopics");
      Subtopics.insert({subtopic,order,unixUpdated}).then(resolve()).catch((e) => {
        reject(e);
      })
    });
  }
}


module.exports = {
  saveSubtopicToMongo: (req,res) => {
    console.log(req.body)
    const subtopic = req.body.subtopic;
    const order = req.body.order;
    const unixUpdated = req.body.unixUpdated;

    MongoPromise.saveSubtopicToMongo(subtopic,order,unixUpdated).then(() => res.write("Success")).catch((err) => console.log(err));
  }
}
