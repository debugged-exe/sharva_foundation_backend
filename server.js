const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

const app = express();

// listen for requests
app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000")
});

const DB='mongodb+srv://sharvadatabase:sharva@cluster0.mli9i.mongodb.net/sharvafrontend?retryWrites=true&w=majority'
mongoose.connect(DB,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology:true,
  useFindAndModify:false
}).then(()=>{
  console.log('connection done Sharva');
}).catch((err)=>console.log('no connection',err));


var Schema = mongoose.Schema;
var counter= new Schema({
   name: String,
   count: Number
},{
  collection: 'counter'
});

var awareness =new Schema({
  heading:String,
  date:String,
  time:String,
  platform:String,
  speaker:String,
  desp:String,
  img:String
},{
  collection:'awarness'
});
var ourgoals=new Schema({
  img:String,
  heading:String,
  supporters:String
},{
  collection:'ourgoals'
});
var events=new Schema({
  tagline:String,
  bgimg:String,
  description:String,
  imgright:String,
  events:Array
},{
  collection:'hungerfreeindia'
});
var strive=new Schema({
  tagline:String,
  bgimg:String,
  description:String,
  imgright:String,
  events:Array
},{
  collection:'strivewithpride'
});
var ruya=new Schema({
  tagline:String,
  bgimg:String,
  description:String,
  imgright:String,
  events:Array
},{
  collection:'projectruya'
});
var bird=new Schema({
  tagline:String,
  bgimg:String,
  description:String,
  imgright:String,
  events:Array
},{
  collection:'asfreeasbird'
});
var wings=new Schema({
  tagline:String,
  bgimg:String,
  description:String,
  imgright:String,
  events:Array
},{
  collection:'giveherwings'
});

app.use(express.static('public'));
app.use(cors());
app.use(express.json());


var Counter = mongoose.model('Counter',counter);
var Aware=mongoose.model('Aware',awareness);
var Goals=mongoose.model('Goals',ourgoals);
var Events=mongoose.model('Events',events);
var Strive=mongoose.model('Strive',strive);
var Ruya=mongoose.model('Ruya',ruya);
var Bird=mongoose.model('Bird',bird);
var Wings=mongoose.model('Wings',wings);
app.get("/",(req,res)=>{
  Counter.find(
    (err,doc)=>{
      if(err){
        res.json(err);
      }
      else{
        console.log(doc);
        res.json(doc);

      }
    }
  )
})
app.get("/awareness",(req,res)=>{
  Aware.find(
    (err,doc)=>{
      if(err){
        res.json(err);
      }
      else{
        console.log(doc);
        res.json(doc);

      }
    }
  )
})
app.get("/goals",(req,res)=>{
  Goals.find(
    (err,doc)=>{
      if(err){
        res.json(err);
      }
      else{
        console.log(doc);
        res.json(doc);

      }
    }
  )
})
app.get("/events",(req,res)=>{
  Events.find(
    (err,doc)=>{
      if(err){
        res.json(err);
      }
      else{
        console.log(doc);
        res.json(doc);

      }
    }
  )
})
app.get("/strive",(req,res)=>{
  Strive.find(
    (err,doc)=>{
      if(err){
        res.json(err);
      }
      else{
        console.log(doc);
        res.json(doc);

      }
    }
  )
})
app.get("/ruya",(req,res)=>{
  Ruya.find(
    (err,doc)=>{
      if(err){
        res.json(err);
      }
      else{
        console.log(doc);
        res.json(doc);

      }
    }
  )
})
app.get("/bird",(req,res)=>{
  Bird.find(
    (err,doc)=>{
      if(err){
        res.json(err);
      }
      else{
        console.log(doc);
        res.json(doc);

      }
    }
  )
})
app.get("/wings",(req,res)=>{
  Wings.find(
    (err,doc)=>{
      if(err){
        res.json(err);
      }
      else{
        console.log(doc);
        res.json(doc);

      }
    }
  )
})
