const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const profileRoutes = express.Router();

let profileModel = require('./profile.model.js');

app.use(cors());
app.use(bodyParser.json());



mongoose.connect("mongodb://localhost:27017/");
const connection = mongoose.connection;

connection.once('open',function() {
    console.log("Connection to MongoDB is successfully connected!!");
})


profileRoutes.route('/').get(function(req,res){
    profileModel.find(function(err,profile){
        if(err) {
            console.log(err)
        }else {6
            res.json(profile);
        }
    });
});

profileRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    profileModel.findById(id, function(err, profile) {
        res.json(profile);
    });
});

profileRoutes.route('/create').post(function(req,res){
    let newprofile = new profileModel(req.body);    
   newprofile.save().then(() => {
       res.status(200).json({'profile':'profile created successfully'});
   }).catch(()=>{
       res.status(400).send('create new profile failed');
   });
});

profileRoutes.route('/update/:id').post(function(req, res) {
    profileModel.findById(req.params.id, function(err, profile) {
        if (!profile)
            res.status(404).send("Profile not found");
        else
            profile.name = req.body.name;
            profile.age = req.body.age;
            profile.gender = req.body.gender;
            

            profile.save().then(profile => {
                res.json('Profile updated!');
            })
            .catch(err => {
                res.status(400).send("Update failed");
            }); 
    });
});


app.use('/createprofile',profileRoutes);

app.listen(4000,function() {    
    console.log("Server is running at http:/localhost:4000");
})

