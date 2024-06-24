const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/react-login-app")
.then(()=>console.log('MongoDB Connected'))
.then(()=>console.log('Failed'))

const newSchema=mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=mongoose.model('collections',newSchema)

module.exports=collection