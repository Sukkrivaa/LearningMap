const mongoose = require("mongoose")
const Schema = mongoose.Schema;



const proposedChangesSchema = new Schema({
    proposedNewDelta: String,
    explanation: String,
    subtopic: String
})

const ProposedChange = mongoose.model("proposedChanges", proposedChangesSchema);

module.exports = ProposedChange;
