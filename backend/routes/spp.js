const express = require('express');
const Seed = require('../models/seedSchema');
const sppRouter = express.Router();



//Seed processing plant

//Details creation
sppRouter.post('/create', (req,res)=>{

  const newSeed = new Seed(
        {
          "LotNumber" : req.body.LotNumber,
          "owner" : req.body.owner,
          "crop"  : req.body.crop,
          "variety" : req.body.variety,
          "SourceTagNo" : req.body.sourceTagNo,
          "SourceClass" : req.body.SourceClass ,
          "DestinationClass" : req.body.DestinationClass ,
          "SourceQuantity" : req.body.SourceQuantity ,
          "SourceDateOfIssue" : req.body.SourceDateOfIssue ,
          "growerName" : "farmer01" ,
          "spaName" : "spa01" ,
          "dateOfIssue" : req.body.dateOfIssue ,
          "sourceStorehouse" : req.body.sourceStorehouse ,
          "destiStorehouse": req.body.destiStorehouse ,
          "sgName": "grower01" ,
          "sgId": req.body.sgId ,
          "FinYear": req.body.FinYear ,
          "Season": req.body.Season ,
          "landRecordsKhatano": req.body.landRecordsKhatano ,
          "landRecordsPlotno": req.body.landRecordsPlotno ,
          "landRecordsArea": req.body.landRecordsArea ,
          "cropRegCode": req.body.cropRegCode ,
          "SppName": req.body.SppName ,
          "SppID": req.body.SppID
          // "TotalQuantityProcessed": req.body.TotalQuantityProcessed ,
          // "processingDate": req.body.processingDate ,
          // "verificationDate": req.body.verificationDate ,
          // "SampleSecretCode": req.body.SampleSecretCode ,
          // "SamplePassed": req.body.SamplePassed ,
          // "SampleTestDate": req.body.SampleTestDate ,
          // "CerticateDate": req.body.CerticateDate ,
          // "CertificateNo": req.body.CertificateNo ,
          // "TagSeris": req.body.TagSeris ,
          // "TagIssuedRangeFrom": req.body.TagIssuedRangeFrom ,
          // "TagIssuedRangeTo": req.body.TagIssuedRangeTo ,
          // "NoOfTagsIssued": req.body.NoOfTagsIssued ,
          // "CertificateValidityInMonth": req.body.CertificateValidityInMonth

        }
        );
        newSeed.save()
            .then((data)=> {
              res.status(201).json({ msg : 'Seed details added successfully' } );
            })
            .catch((err)=> {
              console.log(err);
              res.status(422).json({ msg : err });
            })

});

sppRouter.post('/view', (req,res)=>{
  Seed.find({})
  .then((data)=>{
    res.send(data);
  })
  .catch((err)=>{
    res.send(err);
  })
});
module.exports = sppRouter;
