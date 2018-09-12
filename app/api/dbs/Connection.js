const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

mongoose.connect("mongodb://localhost/LearningMapDev", {useNewUrlParser: true});

mongoose.connection.once("open", () => {
  console.log("Connection Successful");
}).on("error", (e) => {
  console.log("connection error: ", e)
})

module.exports = mongoose.connection;
