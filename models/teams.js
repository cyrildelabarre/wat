const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  img: {type: String},
  name: {type: String}
});

const Teams = mongoose.model('teams', userSchema);
module.exports = Teams;
