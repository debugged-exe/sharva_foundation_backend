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
   count: Number,
   reacticon:String
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
  img:String,
},{
  collection:'awarness'
});

var awarecarousel=new Schema({
  backimg:String
},{
  collection:'awarenesscarousel'
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

var covid=new Schema({
  tagline:String,
  bgimg:String,
  description:String,
  imgright:String,
  events:Array
},{
  collection:'covid19'
});

var projectgreen=new Schema({
  tagline:String,
  bgimg:String,
  description:String,
  imgright:String,
  events:Array
},{
  collection:'projectgreen'
});

var blooddonation=new Schema({
  tagline:String,
  bgimg:String,
  description:String,
  imgright:String,
  events:Array
},{
  collection:'blooddonation'
});

var ongoingprojects=new Schema({
  heading:String,
  para:String,
  imgUrl:String

},{
  collection:'ongoingprojects'
});

var bgcarousel=new Schema({
bgimg:String
},{
  collection:'backgroundcarousel'
});

var recentevent=new Schema({
  heading:String,
  date:String,
  recentimg:String
},{
  collection:'recentevents'
});

var contact=new Schema({
  name:String,
  email:String,
  message:String,
  date: String,
  time:String
},{
  collection:'contactus'
});

var join=new Schema({
  name:String,
  email:String,
  dob:Date,
  gender:String,
  phone:String,
  address:String,
  city:String,
  state:String,
  bloodgroup:String,
  currentcity:String,
  category:Array,
  whyjoin:String,
  date: String,
  time:String
},{
  collection:'joinus'
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
var Covid=mongoose.model('Covid',covid);
var BgCarousel=mongoose.model('BgCarousel',bgcarousel);
var Contact=mongoose.model('Contact',contact);
var Joinus=mongoose.model('Joinus',join);
var Awarecarousel=mongoose.model('Awarecarousel',awarecarousel);
var RecentEvents=mongoose.model('RecentEvents',recentevent);
var OnGoingProjects=mongoose.model('OnGoingProjects',ongoingprojects);
var ProjectGreen=mongoose.model('ProjectGreen',projectgreen);
var BloodDonation=mongoose.model('BloodDonation',blooddonation);

app.get("/",(req,res)=>{
  Counter.find(
    (err,doc)=>{
      if(err){
        res.json(err);
      }
      else{
        res.json(doc);

      }
    }
  )
})


app.get("/acarousel",(req,res)=>{
  Awarecarousel.find(
    (err,doc)=>{
      if(err){
        res.json(err);
      }
      else{
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
        res.json(doc);

      }
    }
  )
})
app.get("/covid19",(req,res)=>{
  Covid.find(
    (err,doc)=>{
      if(err){
        res.json(err);
      }
      else{
        res.json(doc);

      }
    }
  )
})

app.get("/projectgreen",(req,res)=>{
  ProjectGreen.find(
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

app.get("/blooddonation",(req,res)=>{
  BloodDonation.find(
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

app.get("/ongoingprojects",(req,res)=>{
  OnGoingProjects.find(
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

app.get("/bgcarousel",(req,res)=>{
  BgCarousel.find(
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

app.get("/recentevents",(req,res)=>{
  RecentEvents.find(
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


app.post('/contact',(req,res)=>{
  new Contact({
    name:req.body.name,
    email:req.body.email,
    message:req.body.message,
    date: new Date(Date.now()).toLocaleString().split(',')[0],
    time:new Date().toLocaleTimeString()
  })
  .save((err,doc)=>{
    if(err){
      console.log(err);
      res.json(err)
    }
    else{
      console.log("contact working");
      res.json("Success");
    }
  })
})


app.post('/join',(req,res)=>{
  new Joinus({
    name:req.body.name,
    email:req.body.email,
    dob:req.body.dob,
    gender:req.body.gender,
    phone:req.body.phone,
    address:req.body.address,
    city:req.body.city,
    state:req.body.state,
    bloodgroup:req.body.bloodgroup,
    currentcity:req.body.currentcity,
    category:req.body.category,
    whyjoin:req.body.whyjoin,
    date: new Date(Date.now()).toLocaleString().split(',')[0],
    time:new Date().toLocaleTimeString()
  })
  .save((err,doc)=>{
    if(err){
      console.log(err);
      res.json(err)
    }
    else{
      console.log("joinus working");
      res.json("Success");
    }
  })
})
