module.exports ={

  contractAddress : "0x9b1E4132a784e5854B4df1929D0F80531f6Ed227",
  myAddress : '0x9aa49368F973F32a1d8E9C8D9F58fd203C625BEe',
  privateKey : ' a1dd85b68f449a7acbed0f91d9cc586b7b943a9d057ddf6f5327f13204f69e64',
  contractABI :[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "CertificateNo",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "CerticateDate",
				"type": "string"
			}
		],
		"name": "seedCertification",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "_lotNumber",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_owner",
				"type": "string"
			}
		],
		"name": "seedCreation",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "SampleSecretCode",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "string",
				"name": "SamplePassed",
				"type": "string"
			}
		],
		"name": "seedTesting",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_lotNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_sampleSecretCode",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_certificateNo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_certificateDate",
				"type": "string"
			}
		],
		"name": "certify",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_lotNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_owner",
				"type": "string"
			}
		],
		"name": "createSeed",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_lotNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_samplePassed",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_sampleSecretCode",
				"type": "string"
			}
		],
		"name": "testify",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_lotNumber",
				"type": "string"
			}
		],
		"name": "queryCertify",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_lotNumber",
				"type": "string"
			}
		],
		"name": "queryOwner",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_lotNumber",
				"type": "string"
			}
		],
		"name": "queryTest",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "seeds",
		"outputs": [
			{
				"internalType": "string",
				"name": "LotNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "owner",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "SampleSecretCode",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "SamplePassed",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "CertificateNo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "CerticateDate",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
],


}
