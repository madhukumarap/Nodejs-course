const path = require('path') //the path module help to work with specific file with path
let txt = path.extname('E:\reactProject\Personal_React_project\Nodejs course\child_process\path.txt')//metod extract the particular file path
console.log(txt)
let base = path.basename('E:\\reactProject\\Personal_React_project\\Nodejs course\\child_process\\path.txt')
console.log(base)

// path of current file is
console.log(__filename)
console.log(__dirname)