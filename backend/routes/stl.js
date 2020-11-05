const express = require('express');
const Seed = require('../models/seedSchema');
const stlRouter = express.Router();


//Certifies data .
stlRouter.post('/testify', async (req,res)=>{

  Seed.findOneAndUpdate({ "SampleSecretCode" : req.body.SampleSecretCode },
    {
      SamplePassed : req.body.SamplePassed,
      SampleTestDate : req.body.SampleTestDate
    }).then((data)=> {
      res.status(201).json({ msg : 'Seed test record added successfully' } );
    })
    .catch((err)=> {
      console.log(err);
      res.status(422).json({ msg : err });
    })


});


stlRouter.get('/view', (req,res)=>{
  Seed.find({})
  .then((data)=>{
    res.json({ data : data});
  })
  .catch((err)=>{
    res.json({ msg : 'Error collecting details for test lab'});
  })
});
module.exports = stlRouter;
