const mongoose = require('mongoose');

async function Main(){
await mongoose.connect('mongodb://127.0.0.1:27017/youthsample');
}
Main()
.then(() => console.log('Connected!'))
.catch(()=> console.log("Connection failed"));

const Chat=require("./schemacreated.js");

let allchats=[
    { from:"BIbhu",
    to:"Guiker",
    msg:"hii vroo,myself developer from nit...",
    created_at:new Date(),
  },
  { from:"hyuik",
   to:"yrutish",
    msg:"your majesty...hi..",
    created_at:new Date(),
  },
  { from:"hritki",
   to:"yruti",
    msg:"your friends...hiii..",
    created_at:new Date(),
  },
  { from:"hike",
   to:"yrut",
    msg:"your pet...hiii..",
    created_at:new Date(),
  },
  { from:"hyuikens",
   to:"ytish",
    msg:"your discount...is 20%..",
    created_at:new Date(),
  },
];

Chat.insertMany(allchats).then((res)=>{
    console.log(res);
});
