const MongoMethods = require("./dbs/MongoDBRoutes.js");

const Index = (app) => {
  app.get("/api/getInitialSubtopics", MongoMethods.getInitialSubtopics);
  app.post("/api/updateMongoOnSubtopics", MongoMethods.updateMongoOnSubtopics);
  app.post("/api/deleteMongoSubtopic", MongoMethods.deleteMongoSubtopic);
  app.post("/api/pushChangesMongo", MongoMethods.pushChangesMongo);
}

module.exports = Index;
