const mdb = require("mongoose");

const donateSchema = mdb.Schema({
  name:String,
  reason: String,
  account_no: String,
  amount: String,
  image: String,
  discription: String
});

const Donate_schema = mdb.model("donateDetails", donateSchema);
module.exports = Donate_schema;
