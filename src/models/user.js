const mongoose =require('mongoose');

mongoose.connect(
    'mongodb+srv://root:password1234@cluster0.vj9uj.mongodb.net/ecommerce?retryWrites=true&w=majority'
).then(()=>{
    console.log('Database Connected successfully!')

})

const userSchema= new mongoose.Schema({
        firstName:{
            type: String,
            required: true,

        },
        lastName:{
            type: String,
            required: true,
        },
        email:{
            type:String,
            required: true,
            unique:true
        },
        password:{
            type:String,
            required: true,
        },
        username:{
            type:String,
            required: true,
            
        }
})


module.exports = mongoose.model('user',userSchema);


