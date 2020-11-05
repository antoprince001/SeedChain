const express = require('express');
const Seed = require('../models/seedSchema');
const spaRouter = express.Router();


spaRouter.post('/createBlock', (req,res)=>{

  const Seed = new Seed(
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
          "growerName" : req.body.growerName ,
          "spaName" : req.body.spaName ,
          "dateOfIssue" : req.body.dateOfIssue ,
          "sourceStorehouse" : req.body.sourceStorehouse ,
          "destiStorehouse": req.body.destiStorehouse ,
          "sgName": req.body.sgName ,
          "sgId": req.body.sgId ,
          "FinYear": req.body.FinYear ,
          "Season": req.body.Season ,
          "landRecordsKhatano": req.body.landRecordsKhatano ,
          "landRecordsPlotno": req.body.landRecordsPlotno ,
          "landRecordsArea": req.body.landRecordsArea ,
          "cropRegCode": req.body.cropRegCode ,
          "SppName": req.body.SppName ,
          "SppID": req.body.SppID

        }
        );
        Seed.save()
            .then((data)=> {

              res.status(201).json({ msg : 'Seed details added successfully' } );

            })
            .catch((err)=> {
              console.log(err);
              res.status(422).json({ msg : err });
            })

});



module.exports = spaRouter;
