const express = require("express")
const mongoose = require("mongoose")
// const bodyParser = require("body-parser")

const app = express()
const PORT = 3000;

const MONGODB_URL = "mongodb://localhost:27017/downtownstimulus";

mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
 db.on('error', console.error.bind(console, 'MongoDB connection error:'));

 // creating schema for organization
const organisationSchema = new mongoose.Schema({
    orgName: {
     type: String
      },
    orgId: {
     type: String
      } 
});

// creating model for organization
const Organization = mongoose.model('Organization', organisationSchema);

 // Creating one user.
 var newOrg = new Organization ({
    orgName: "ethify",
    orgId: "Org1"
  });

  // Saving it to the database.
newOrg.save(function (err) {if (err) console.log ('Error on org save!')}); 

app.listen(PORT, () => {
  console.log(`app is listening to PORT ${PORT}`)
})