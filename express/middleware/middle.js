function myMiddleware(res,req, next){
    console.log('i am custom middlewares')
    next()
}
module.exports = myMiddleware