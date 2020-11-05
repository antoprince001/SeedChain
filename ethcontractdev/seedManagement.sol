// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract SeedManagement {


    struct Seed{
        string LotNumber;
        string owner;
        string SampleSecretCode;
        string SamplePassed;
        string CertificateNo;
        string CerticateDate;

        bool exists;
    }

    mapping(string => Seed) public seeds;

    event seedCreation(string indexed _lotNumber, string  _owner );
    event seedCertification(string indexed CertificateNo, string  CerticateDate);
    event seedTesting(string indexed SampleSecretCode, string indexed SamplePassed);



    //Addition of new product to blockchain
    function createSeed(string memory _lotNumber, string memory _owner) public
    {

      require(seeds[_lotNumber].exists == false, "Seed was already registered");

      Seed memory new_seed = Seed( _lotNumber ,_owner,"0" ,"0" ,"0" ,"0" ,true);
      seeds[_lotNumber ] = new_seed;

      emit seedCreation(_lotNumber,_owner);
    }

    //Called when product is imported, exported or purchased
    function certify(string memory _lotNumber , string memory _sampleSecretCode, string memory _certificateNo, string memory _certificateDate) public
    {
        require(seeds[_lotNumber].exists == true, "Seed was not created");

          seeds[_lotNumber].SampleSecretCode = _sampleSecretCode;
          seeds[_lotNumber].CertificateNo = _certificateNo;
          seeds[_lotNumber].CerticateDate = _certificateDate;


        emit seedCertification(_certificateNo, _certificateDate );

    }

    function testify(string memory _lotNumber , string memory _samplePassed , string memory _sampleSecretCode) public  returns(bool)
    {
    require(seeds[_lotNumber].exists == true, "Seed was not created");
          seeds[_lotNumber].SamplePassed = _samplePassed;

        if(keccak256(bytes(seeds[_lotNumber].SampleSecretCode)) == keccak256(bytes(_sampleSecretCode)))
        {
            return true;
        }
        else
        {
        return false;
        }

    }


    //Called to check the existence of product
    function queryOwner(string memory _lotNumber) public view returns(string memory)
    {
        require(seeds[_lotNumber].exists == true, "Seed was not created");

        return (seeds[_lotNumber].owner);

    }

     //Called to check the existence of product
    function queryTest(string memory _lotNumber) public view returns(bool)
    {
        require(seeds[_lotNumber].exists == true, "Seed was not created");

        if(keccak256(bytes(seeds[_lotNumber].SamplePassed)) == keccak256(bytes("Yes")))
        {
            return true;
        }
        else
        {
        return false;
        }
    }

    function queryCertify(string memory _lotNumber) public view returns(string memory,string memory)
    {
        require(seeds[_lotNumber].exists == true, "Seed was not created");

        return (seeds[_lotNumber].CertificateNo,seeds[_lotNumber].CerticateDate);
    }
}
