const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Chatschema= new Schema({
  from:{
    type:String,
    required:true,
  },
  to:{
    type:String,
    required:true
  },
  msg:{
    type:String,
    minlength:1,
  },
  created_at:{
    type:Date,
    required:true,
  }  
});

const Chat=mongoose.model("Chat",Chatschema);

module.exports = Chat;
