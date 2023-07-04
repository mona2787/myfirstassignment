 mongoose = require("mongoose");

var userSchema =  new mongoose.Schema({

  email: {

    type: String,

    required: 'This field is required'

  },

  password: {

    type: String,

    required: 'This field is required'

  },



});
module.exports = mongoose.model("User", userSchema);
 

