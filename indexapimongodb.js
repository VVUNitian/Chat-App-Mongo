const express= require("express");
const app=express();
const port=3030;
const path=require("path");
const Chat=require("./schemacreated.js");
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));

app.use(express.urlencoded({extended: true}));

const mongoose = require('mongoose');

async function Main(){
await mongoose.connect('mongodb://127.0.0.1:27017/youthsample');
}
Main()
.then(() => console.log('Connected!'))
.catch(()=> console.log("Connection failed"));

// let chat1=new Chat({
//     from:"JUlii",
//     to:"Malinga",
//     msg:" I am a big fan of yours...",
//     created_at: new Date(),
// });

// chat1.save().then((res) => console.log(res));

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

app.get("/chats",async (req,res)=>{
    let query= await Chat.find({});
    res.render("showchats.ejs",{query});
});

app.get("/chats/new",(req,res) =>{
    res.render("createchats.ejs");
});

app.post("/chats",(req,res)=>{
    let chat2=new Chat({
        from:req.body.from,
        to:req.body.to,
        msg:req.body.msg,
        created_at:new Date(),
    });
    chat2.save().then((res)=>console.log(res)).catch((err)=>{console.log(err)});
    res.redirect("/chats");
});

app.get("/chats/:id/edit", async (req,res) =>{
    let query=await Chat.findById(req.params.id);
    res.render("edittext.ejs",{query});
});

app.put("/chats/:id",async (req,res) =>{
    let query=await Chat.findByIdAndUpdate(req.params.id,{msg:req.body.newtext},{new:true});
    console.log(query);
    res.redirect("/chats");
});

app.delete("/chats/:id",async(req,res) =>{
    let query=await Chat.findByIdAndDelete(req.params.id);
    console.log(query);
    res.redirect("/chats");
})
