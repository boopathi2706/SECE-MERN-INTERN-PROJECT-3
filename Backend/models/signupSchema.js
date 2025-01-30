const mdb = require("mongoose");

const signupSchema = mdb.Schema({
  username:String,
  email: String,
  password: String,
});

const Signup_schema = mdb.model("donateSignup", signupSchema);
module.exports = Signup_schema;


