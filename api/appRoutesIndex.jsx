const MongoMethods = require("./dbs/MongoDBRoutes.js");
const mongoRoutesString = require("./../config/magicStrings").Routes.apiRoutesString.mongoRoutesString;

const Index = (app) => {
  app.get(mongoRoutesString.getInitialSubtopics, MongoMethods.getInitialSubtopics);
  app.post(mongoRoutesString.updateMongoOnSubtopics, MongoMethods.updateMongoOnSubtopics);
  app.post(mongoRoutesString.deleteMongoSubtopic, MongoMethods.deleteMongoSubtopic);
  app.post(mongoRoutesString.pushChangesMongo, MongoMethods.pushChangesMongo);
};

module.exports = Index;
