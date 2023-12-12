const dir = require('fs')

// file system with directory   
//mkdirsync the method are used to create directory
// dir.mkdirSync(' mydir')

// the method used check the mydir is contin some file or not  and the method require file dir path so we cn store in one var
let folderDir = 'E:\\reactProject\\Personal_React_project\\Nodejs course\\ mydir';
// let folder = dir.readdirSync(folderDir); // we store in some variable it provide output in aray method
// console.log('folder contetnt', folder)


// the method are used to check the dir exit or not it return boolean value
// let checkDir = dir.existsSync(folderDir);
// console.log(checkDir)

//the method are used to delete the dir 

dir.rmdirSync(' mydir')

console.log('filr as been deleted')