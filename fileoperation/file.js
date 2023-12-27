const fs = require('fs');
console.log('first line')
//synchornixation file read method
// const data = fs.readFileSync('fs.txt');
// console.log('data of scond line ->'+data)


//async read of file
fs.readFile('fs.txt',cb1)
function cb1(err, data){
    if(err){
        console.log('we cant read file' )
    }
    console.log('data is ->'+data )
}

fs.readFile('fs.txt',cb2)
function cb2(err, data){
    if(err){
        console.log('we cant read file' )
    }
    console.log('data is ->'+data )
}
console.log('third line data')