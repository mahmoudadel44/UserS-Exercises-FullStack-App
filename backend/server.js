const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
require('dotenv').config()

const app=express()
const port =process.env.PORT||3000
app.use(cors())
app.use(express.json({ extended: false }));
// app.use(express.urlencoded());
//connected to db
mongoose.connect('mongodb://localhost/full_stack',{ useNewUrlParser: true,useUnifiedTopology:true },(err)=>{
if(err){
  console.log(err)
}
else{
  console.log('connected to db')
}
})
const exercisesRoute=require('./routes/exercises')
const usersRoute=require('./routes/users')

app.use('/exercises',exercisesRoute)
app.use('/users',usersRoute)


app.listen(port,(req,res)=>{
console.log(`server is running on port ${port}`)
})