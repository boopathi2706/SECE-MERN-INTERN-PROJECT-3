const mdb = require("mongoose");

const donateSchema = mdb.Schema({
  name:String,
  reason: String,
  account_no: String,
  amount:string,
  image:string,
  discription:string
});

const Donate_schema = mdb.model("donateDetails", donateSchema);
module.exports = Donate_schema;
