from nodeOneInterface import createSeed,certification,testing,queryTest,queryOwner,queryCertify
from nodeTwoInterface import createSeedT,certificationT,testingT,queryTestT,queryOwnerT,queryCertifyT

print('Add query by Node 1')
print(createSeed("APR-19-1121","OSSC"))

print('Retrieval by Node 2')
print(queryOwnerT("APR-19-1121"))

print('Certification by Node 2')
print(certificationT("APR-19-1121","secretcode","C123","01/11/2020:11:41"));

print('Testing by Node 1')
print(testing("APR-19-1121","Yes","secretcode"));

print('Certificate status by Node 1')
print(queryCertify("APR-19-1121"));

print('Testing status retrieved by Node 1')
print(queryTestT("APR-19-1121"))
