const child_process = require('child_process')

// child_process.execSync('calc')
// child_process.execSync('start chrome https://nodejs.org/dist/latest-v20.x/docs/api/child_process.html')
console.log('output of the file '+ child_process.execSync(' node ../test.js'))