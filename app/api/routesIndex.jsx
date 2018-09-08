const MongoMethods = require("./dbs/mongodb.js");

const Index = (app) => {
  //Check if the routing is correct
  app.post("/api/saveSubtopicToMongo", MongoMethods.saveSubtopicToMongo);
}

module.exports = Index;
