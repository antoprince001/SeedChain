const express = require('express');
const farmerRouter = express.Router();
const request = require('request');
const Seed = require('../models/seedSchema');

// farmerRouter.get('/blockchain',async (req,res)=>{
//
// request({
//   url : ' https://39E4CBC73AA5428CB4CEBC030B46BB8F.blockchain.ocp.oraclecloud.com:443/restproxy1/bcsgw/rest/v1/transaction/getTxID?channel=default',
//   headers: {
//     'Authorization': 'Basic YW50b3ByaW5jZTAwMUBnbWFpbC5jb206Y291cG9uVGFyZ2V0XzAx'
//   },
//   rejectUnauthorized : false
// }, function(err,res) {
//   if(err)
//   {
//     console.log(err);
//   }
//   else {
//     console.log(JSON.parse(res.body));
//   }
// });
//
// });
//


farmerRouter.post('/queryByLot', (req,res)=>{

  console.log('as');
  res.send(req.body.LotNumber);
  Seed.find({ LotNumber : req.body.LotNumber})
  .then((data)=>{
    res.send(data);
  })
  .catch((err)=>{
    res.send(err);
  })

});


farmerRouter.get('/queryByTag',async (req,res)=>{
  Seed.find({ TagSeris : req.body.TagSeris})
  .then((data)=>{
    res.json({ data : data});
  })
  .catch((err)=>{
    res.json({ msg : 'Error finding details'} );
  })

});

farmerRouter.get('/queryBySeason',async (req,res)=>{

  Seed.find({ Season : req.body.Season })
  .then((data)=>{
    res.json({ data : data});
  })
  .catch((err)=>{
    res.json({ msg : err});
  })
});

farmerRouter.get('/queryByYear',async (req,res)=>{

  Seed.find({ FinYear : req.body.FinYear})
  .then((data)=>{
    res.json({ data : data });
  })
  .catch((err)=>{
    res.json({ msg : err });
  })
});


farmerRouter.post('/query',async (req,res)=>{

  if(req.body.LotNumber !== undefined)
  {
    Seed.find({ LotNumber : req.body.LotNumber})
  .then((data)=>{
    res.json({ data : data});
  })
  .catch((err)=>{
    res.json({ msg : 'Error finding details'} );
  })
}
 else if(req.body.SourceTagNo !== undefined)
   {
     Seed.find({ SourceTagNo : req.body.SourceTagNo})
     .then((data)=>{
       res.json({ data : data});
     })
     .catch((err)=>{
       res.json({ msg : 'Error finding details'} );
})}
 else {
   res.json({ msg : 'Field missing '} );
 }

});

farmerRouter.post('/checkCertificate',async (req,res)=>{
  if(req.body.LotNumber !== undefined)
  {
    Seed.find({ LotNumber : req.body.LotNumber})
  .then((data)=>{
    console.log(data[0].certificateNo);
    if(data[0].CertificateNo == "" ||data[0].CertificateNo === undefined )
    {
      res.render('rejected.ejs');
    }
    else {
      res.render('hindiverified.ejs');
    }
  })
  .catch((err)=>{
    res.json({ msg : 'Error finding details'} );
  })
  }
  else if(req.body.SourceTagNo !== undefined)
   {
     Seed.find({ SourceTagNo : req.body.SourceTagNo})
     .then((data)=>{
       if(data[0].certificateNo == "" || data[0].certificateNo === undefined)
       {
         res.render('rejected.html');
       }
       else {
         res.render('hindiverified.html');
       }
     })
     .catch((err)=>{
       res.json({ msg : 'Error finding details'} );
  })
}
  else {
   res.json({ msg : 'Field missing '} );
  }

});

module.exports = farmerRouter;
