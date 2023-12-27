const epress = require('express');
const morgan = require('morgan');


const myMiddleware = require('./middleware/middle')
const app = epress();

//custom middleware
app.use(myMiddleware)
app.use(morgan())
//the below method are used to use the middlewares
app.use(epress.json())
let courses = [
    {id:1,name:'javascript'},
    {id:2,name:'python'},
    {id:3,name:'java'},
    {id:4,name:'node'},
    {id:5,name:'react js'},
]
//get method are used acces some data from particluar source it take 2 argument and 2 obj
app.get('/',(req,res)=>{  // 1st method is route(/) to request the data from db and this is default route
    res.send('hello madhu this is node js course')    
}) 
app.get('/about', (req, res)=>{
    res.send('hello madhu this about page')
})
app.get('/home', (req, res)=>{
    res.send('hello madhu this home page')
})
// app.listen(4000,()=> console.log('this port number 4000'))
app.get('/courses',(req,res)=>{
    res.send(courses)
})
app.post('/courses', (req,res)=>{
    const course = {
        id: courses.length +1,
        name: req.body.name //sending name to api body
    } // we send this body to json
    courses.push(course)
    res.send(course)
})
//put method-> the method where use to update the exiting data
app.put('/courses/:name',(req,res)=>{
    let course = courses.find(course=> course.name === req.params.name);
    if(!course){
        res.status(404).send('the course your lokking doesnt exit')
    }
    // to change the data alredy present
    course.name = req.body.name
    res.send(course)
})
//delete method are used ot delete the exit data
//below byusing string method
// app.delete('/courses/:name',(req,res)=>{
//     let update = courses.filter(course=>course.name !== req.params.name)
//     if(!course){
//         res.status(404).send('the course your lokking doesnt exit')
//     }
//     courses = update
//     res.send(courses)
// })
//delete method by using interger method
app.delete('/courses/:id',(req,res)=>{
    let course = courses.findIndex(course => course.id == req.params.id);
    //    let course = courses.find(course => course.id == req.params.id);
    // let index = courses.indexOf(course)
    if(!course){
        res.status(404).send('the course your lokking doesnt exit')
    }
    courses.splice(course,1)
    res.send(courses)
})

//route parameters
app.get('/courses/:name', (req,res)=>{
    // console.log(req.params)
    // res.send(req.params.id) we use dummy data
    let course = courses.find(course=> course.name === req.params.name);
    if(!course){
        res.status(404).send('the course your lokking doesnt exit')
    }
    res.send(course)
})


//environmetal variable port this used to working with dynamic port
const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`port is runing in ${port}`)
})

