const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userID: {type: String},
    userPseudo: {type: String},
    teams: {type: [String]}
});

const Vote = mongoose.model('vote', userSchema);
module.exports = Vote;
