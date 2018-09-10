const mongoose = require("mongoose");
const Subtopic = require("./models/subtopicSchema");
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
    return new Promise((resolve, reject) => {
      // const Subtopics = db.collection("Subtopics");
      // Subtopics.insert({subtopic,order,unixUpdated}).then(resolve()).catch((e) => {
      //   reject(e);
      // })
      const newSubtopic = new Subtopic({
        subtopic,order,unixUpdated
      })

     newSubtopic.save().then(() => {

     })
     resolve();
    });
  },
  getInitialSubtopics: () => {
    return new Promise((resolve,reject) => {
      Subtopic.find({}).then((result) => {
        resolve(result);
      })

    })
  },
  changeOrderSubtopic: (subtopicsState) => {
    var promise = Promise.resolve();
    return new Promise((resolve, reject) => {
      Subtopic.findOneAndUpdate({subtopic: subtopicsState[0].subtopic}, {order: subtopicsState[0].order}).then(() => console.log("Hello"));
      resolve();
    });
  }
}

module.exports = {
  saveSubtopicToMongo: (req,res) => {
    const subtopic = req.body.subtopic;
    const order = req.body.order;
    const unixUpdated = req.body.unixUpdated;

    MongoPromise.saveSubtopicToMongo(subtopic,order,unixUpdated).then(() => res.send("Success")).catch((err) => {console.log(err)});
  },
  getInitialSubtopics: (req,res) => {
    MongoPromise.getInitialSubtopics().then((currentSubtopics) => {
      res.send(currentSubtopics);
    }).catch((e) => {
      console.log(e);
    });
  },
  changeOrderSubtopic: (req,res) => {
    const {subtopicsState} = req.body;
    MongoPromise.changeOrderSubtopic(subtopicsState).then(() => res.send("Sucessful Change")).catch((e)=>{console.log(e)});
  }
}
