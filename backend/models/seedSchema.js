
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const seedSchema = new mongoose.Schema({

            LotNumber : {
                type: String,
                required : true,
                unique : true,
                trim : true,
            },

            owner :{
                type: String,
                required: true
            },

            crop: {
                type: String,
                required: true
            },

            variety : {
                type : String
            },

            SourceTagNo : {
              type : String
            },

            SourceClass : {
              type : String
            },

            DestinationClass : {
              type: String
            },

            SourceQuantity : {
              type: String
            },

            SourceDateOfIssue : {
              type: String
            },

            growerName : {
              type: String
            },

            spaName: {
              type: String
            },

            dateOfIssue: {
              type: String
            },

            sourceStorehouse : {
              type: String
            },

            destiStorehouse : {
              type: String
            },

            sgName : {
              type: String
            },

            sgId : {
              type: String
            },

            FinYear : {
              type: String
            },

            Season : {
              type: String
            },

            landRecordsKhatano : {
              type: String
            },

            landRecordsPlotno : {
              type : String
            },

            landRecordsArea : {
              type: String
            },

            cropRegCode : {
              type: String
            },

            SppName : {
              type: String
            },

            SppID : {
              type: String
            },


            TotalQuantityProcessed : {
              type: String
            },

            processingDate : {
              type: String
            },

            verificationDate: {
              type: String
            },

            SampleSecretCode : {
              type: String
            },

            SamplePassed : {
              type: String
            },

            SampleTestDate : {
              type: String
            },

            CertificateNo : {
              type: String
            },

            CerticateDate : {
              type: String
            },

            TagSeris : {
              type: String
            },

            TagIssuedRangeFrom : {
              type : String
            },

            TagIssuedRangeTo : {
              type: String
            },

            NoOfTagsIssued : {
              type: String
            },

            CertificateValidityInMonth : {
              type: String
            }

    },
    {
        collection: 'seedDetails',
        unique: 'true'
    });

module.exports = mongoose.model('Seed',seedSchema);
