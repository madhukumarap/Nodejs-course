const mongoos = require('mongoose');

mongoos.connect('mongodb://127.0.0.1/testdatabase')
.then(()=> console.log('database is connected'))
.catch((err)=> console.log('could not connect '+ err))

//schema
const courseSchema = new mongoos.Schema(
    {
        name: {type:String, required:true},
        creator: {type:String, required:true},
        publishedData: {type:Date, default:Date.now},
        isPublished:{type:Boolean, required:true},
        rating:{type:Number, required: function(){return this.isPublished}}
    }
)

// the course is specfied on based in  courseSchema
const courses = mongoos.model('Course',courseSchema)
// below is dataset blueprint of model of courses
// below is example data set how was schema is created now it saved in mongose host
async function createCourse(){
    const Course1 = new courses({
        name : 'python',
        creator :'madhu',
        isPublished: true,
        rating:3.8
    })
    const result = await Course1.save()
    console.log(result)
}
createCourse()

//query querying the documents
//eq => equal, gt => graterthen, lt => lessthan, gte => grater than or equal
// lt => lesthan, lte=> lesserthan equal, not and in

//logical operatore => OR or AND 
async function getCourse(){
    //find method returns all document from database
    const course =  await courses.find({rating:{$gte:4}}).select({name:1,publishedData:1}).or([{creator:'madhu '},{rating:4}]) //we can pass specific word to finc
    console.log(course)             // {$in:]3, 4.2}
}

// createCourse()
getCourse()
//update of documents
async function updateCourse(id){
    let course = await courses.findById(id)
    if(!course) return
    course.name ='manu'
    course.creator = 'java'
    const update = await course.save()
    console.log(update)
}
updateCourse('657f309e8186cb2a3098e0d1')

//delete the documenet
async function deleteCourse(id){
    let course = await courses.findByIdAndDelete(id)
    console.log(course)
}
deleteCourse('657f308e04238306caf8ddbf')
