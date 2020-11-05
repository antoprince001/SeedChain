const express = require('express');
const scaRouter = express.Router();
const Seed = require('../models/seedSchema');
const bcrypt = require('bcryptjs');

// Seed processing plant

//Certifies data
scaRouter.post('/certify', async (req,res)=>{

  console.log(req.body)
  if(req.body.LotNumber === undefined)
  {
      res.status(422).json({ msg : "LotNumber missing in request" });
  }
  else {

  const secretCode = await bcrypt.hash(req.body.LotNumber,5);
  Seed.findOneAndUpdate({ LotNumber : req.body.LotNumber },
    {
      "TotalQuantityProcessed": req.body.TotalQuantityProcessed ,
      "processingDate": req.body.processingDate ,
      "verificationDate": req.body.verificationDate ,
      "SampleSecretCode": secretCode ,
      "CerticateDate": req.body.CerticateDate ,
      "CertificateNo": req.body.CertificateNo ,
      "TagSeris": req.body.TagSeris ,
      "TagIssuedRangeFrom": req.body.TagIssuedRangeFrom ,
      "TagIssuedRangeTo": req.body.TagIssuedRangeTo ,
      "NoOfTagsIssued": req.body.NoOfTagsIssued ,
      "CertificateValidityInMonth": req.body.CertificateValidityInMonth

    }).then((data)=> {
      res.status(201).json({ msg : 'Secret Code generated : ' + secretCode + ' and certified successfully' } );
    })
    .catch((err)=> {
      console.log(err);
      res.status(422).json({ msg : err });
    })

}
});


scaRouter.get('/view', (req,res)=>{
  Seed.find({})
  .then((data)=>{
    res.json({ data : data});
  })
  .catch((err)=>{
    res.json({ msg : "Error collecting data for certification agency"});
  })
});

scaRouter.post('/dash', (req,res)=>{
  Seed.find({})
  .then((data)=>{
    res.send(data);
  })
  .catch((err)=>{
    res.send(err);
  })
});


module.exports = scaRouter;
