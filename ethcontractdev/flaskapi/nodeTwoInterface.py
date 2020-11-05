# Interface to smart contract on 14-8-2020

#0xBEBE954e6C9E35E7Aa6765Caa7A54b33576F344c

from web3 import Web3
import json

contractAddress = "0x9b1E4132a784e5854B4df1929D0F80531f6Ed227"
private_key = 'a1dd85b68f449a7acbed0f91d9cc586b7b943a9d057ddf6f5327f13204f69e64'

#infura_url = "https://kovan.infura.io/v3/16497e91567d468facb98a99c27db479"
infura_url = "wss://kovan.infura.io/ws/v3/b4793d58e3224630a79f2bc43288cbdd"
web3 = Web3(Web3.WebsocketProvider(infura_url))

abi=json.loads('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"CertificateNo","type":"string"},{"indexed":false,"internalType":"string","name":"CerticateDate","type":"string"}],"name":"seedCertification","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"_lotNumber","type":"string"},{"indexed":false,"internalType":"string","name":"_owner","type":"string"}],"name":"seedCreation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"SampleSecretCode","type":"string"},{"indexed":true,"internalType":"string","name":"SamplePassed","type":"string"}],"name":"seedTesting","type":"event"},{"inputs":[{"internalType":"string","name":"_lotNumber","type":"string"},{"internalType":"string","name":"_sampleSecretCode","type":"string"},{"internalType":"string","name":"_certificateNo","type":"string"},{"internalType":"string","name":"_certificateDate","type":"string"}],"name":"certify","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_lotNumber","type":"string"},{"internalType":"string","name":"_owner","type":"string"}],"name":"createSeed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_lotNumber","type":"string"},{"internalType":"string","name":"_samplePassed","type":"string"},{"internalType":"string","name":"_sampleSecretCode","type":"string"}],"name":"testify","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_lotNumber","type":"string"}],"name":"queryCertify","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_lotNumber","type":"string"}],"name":"queryOwner","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_lotNumber","type":"string"}],"name":"queryTest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"seeds","outputs":[{"internalType":"string","name":"LotNumber","type":"string"},{"internalType":"string","name":"owner","type":"string"},{"internalType":"string","name":"SampleSecretCode","type":"string"},{"internalType":"string","name":"SamplePassed","type":"string"},{"internalType":"string","name":"CertificateNo","type":"string"},{"internalType":"string","name":"CerticateDate","type":"string"},{"internalType":"bool","name":"exists","type":"bool"}],"stateMutability":"view","type":"function"}]')

#web3 = Web3(Web3.HTTPProvider(infura_url))
web3.eth.defaultAccount = "0x9aa49368F973F32a1d8E9C8D9F58fd203C625BEe"



contract = web3.eth.contract(
     address = contractAddress,
     abi = abi,
 )


abi=json.loads('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"CertificateNo","type":"string"},{"indexed":false,"internalType":"string","name":"CerticateDate","type":"string"}],"name":"seedCertification","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"_lotNumber","type":"string"},{"indexed":false,"internalType":"string","name":"_owner","type":"string"}],"name":"seedCreation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"SampleSecretCode","type":"string"},{"indexed":true,"internalType":"string","name":"SamplePassed","type":"string"}],"name":"seedTesting","type":"event"},{"inputs":[{"internalType":"string","name":"_lotNumber","type":"string"},{"internalType":"string","name":"_sampleSecretCode","type":"string"},{"internalType":"string","name":"_certificateNo","type":"string"},{"internalType":"string","name":"_certificateDate","type":"string"}],"name":"certify","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_lotNumber","type":"string"},{"internalType":"string","name":"_owner","type":"string"}],"name":"createSeed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_lotNumber","type":"string"},{"internalType":"string","name":"_samplePassed","type":"string"},{"internalType":"string","name":"_sampleSecretCode","type":"string"}],"name":"testify","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_lotNumber","type":"string"}],"name":"queryCertify","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_lotNumber","type":"string"}],"name":"queryOwner","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_lotNumber","type":"string"}],"name":"queryTest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"seeds","outputs":[{"internalType":"string","name":"LotNumber","type":"string"},{"internalType":"string","name":"owner","type":"string"},{"internalType":"string","name":"SampleSecretCode","type":"string"},{"internalType":"string","name":"SamplePassed","type":"string"},{"internalType":"string","name":"CertificateNo","type":"string"},{"internalType":"string","name":"CerticateDate","type":"string"},{"internalType":"bool","name":"exists","type":"bool"}],"stateMutability":"view","type":"function"}]')

#web3 = Web3(Web3.HTTPProvider(infura_url))
web3.eth.defaultAccount = "0x9aa49368F973F32a1d8E9C8D9F58fd203C625BEe"



contract = web3.eth.contract(
     address = contractAddress,
     abi = abi,
 )


# Following are the functions to interact with Kovan testnet blockchain


# Following are the functions to interact with Kovan testnet blockchain



# Note : Source should be integer or else it will throw error
def createSeedT(lotNumber,owner):
    """Adds the seed to the blockchain"""
    try:
        transaction = contract.functions.createSeed(lotNumber,owner).buildTransaction()
        transaction.update({ 'gas' : 2000000 })
        transaction.update({ 'nonce' : web3.eth.getTransactionCount('0x9aa49368F973F32a1d8E9C8D9F58fd203C625BEe') })
        signed_tx = web3.eth.account.signTransaction(transaction, private_key)
        txn_hash = web3.eth.sendRawTransaction(signed_tx.rawTransaction)
        receipt = web3.eth.waitForTransactionReceipt(txn_hash)
        return receipt
    except :
         return 'Seed could not be added'


def certificationT(lotNumber,SampleSecretCode,CertificateNo, certificateDate):
    """Adds the seed to the blockchain"""
    try:
        transaction = contract.functions.certify(lotNumber,SampleSecretCode,CertificateNo,certificateDate).buildTransaction()
        transaction.update({ 'gas' : 2000000 })
        transaction.update({ 'nonce' : web3.eth.getTransactionCount('0x9aa49368F973F32a1d8E9C8D9F58fd203C625BEe') })
        signed_tx = web3.eth.account.signTransaction(transaction, private_key)
        txn_hash = web3.eth.sendRawTransaction(signed_tx.rawTransaction)
        receipt = web3.eth.waitForTransactionReceipt(txn_hash)
        return receipt
    except :
         return 'Seed could not be certified'


def testingT(lotNumber,SamplePassed,SampleSecretCode):
    """Adds the seed to the blockchain"""
    try:
            transaction = contract.functions.testify(lotNumber,SamplePassed,SampleSecretCode).buildTransaction()
            transaction.update({ 'gas' : 2000000 })
            transaction.update({ 'nonce' : web3.eth.getTransactionCount('0x9aa49368F973F32a1d8E9C8D9F58fd203C625BEe') })
            signed_tx = web3.eth.account.signTransaction(transaction, private_key)
            txn_hash = web3.eth.sendRawTransaction(signed_tx.rawTransaction)
            receipt = web3.eth.waitForTransactionReceipt(txn_hash)
            return 'Seed test recorded successfully'
    except :
         return 'Seed test could not be added'


def queryTestT(lotNumber):
    """Retrieves the test details from the blockchain"""
    try:
        product = contract.functions.queryTest(lotNumber).call()
        if product is True :
            return 'Test passed by seed'+lotNumber
        else :
            return 'Test not passed by seed'+lotNumber
    except :
        return 'Error finding the data'

def queryOwnerT(lotNumber):
    """Retrieves the test details from the blockchain"""
    try:
        owner = contract.functions.queryOwner(lotNumber).call()
        return owner
    except :
        return 'Error finding the data'

def queryCertifyT(lotNumber):
    """Retrieves the test details from the blockchain"""
    try:
        seed = contract.functions.queryCertify(lotNumber).call()
        data = {
            "certifcateNo" : seed[0],
            "certificateDate"           : seed[1],
        }
        return data
    except :
        return 'Error finding the data'
# def productLifeCycle(productId):
#     """Returns all product movement recorded in blockchains"""
#     block_filter = web3.eth.filter('latest')
#
#     return block_filter.get_all_entries()
