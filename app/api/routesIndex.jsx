const MongoMethods = require("./dbs/mongodb.js");

const Index = (app) => {
  //Check if the routing is correct
  app.post("/api/saveSubtopicToMongo", MongoMethods.saveSubtopicToMongo);
  app.post("/api/getInitialSubtopics", MongoMethods.getInitialSubtopics);
  app.post("/api/changeOrderSubtopic", MongoMethods.changeOrderSubtopic);
}

module.exports = Index;
