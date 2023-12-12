// fs -> file system that help to performm the diffrent opertion like creation deletion and modification of file
const fs = require('fs');
//read write deelete upadte etc etc...
//reading the file
// //readfileSync work synchrons and below all method are wirk synchornslly
let read = fs.readFileSync('madhu.txt') 
console.log(read + '-> the data of madhu.txt')

// write file sync we can write the data and tis method create file if it's not there   
fs.writeFileSync('madhu.txt','helo madhu bhoomi is waiting for you') //it 2 para one is file name and another one data what write inside the file
console.log(read + '-> the data of madhu.txt') 
// append file to update the data in particular file
fs.appendFileSync('madhu.txt','bhoomi you know madhu loves you more and more till last breath')
console.log(read + '-> the data of madhu.txt')

// deleting the file  unlinksync method where use to delethe particular file just me pass the file name
fs.unlinkSync('path.txt')