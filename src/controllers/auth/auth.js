
const User= require('../../models/user.js')

function signup(req,res){


    User.findOne({
        email: req.body.email
    }).exec(function(err,data){
        if(err) {
            return res.status(400).json({"message":"Something went wrong!"})
            
        }
        if (data)
            return res.status(200).json({"message":"User already exists!"})
        
    })
    

    const {firstName,lastName,email,password} = req.body;
    const username= firstName+lastName;

    const newUser=new User({

        firstName,
        lastName,
        email,
        password,
        username
    })
    newUser.save(function(err,data){
        if(err) 
        {
            console.log(err.message)
            return res.status(400).json({"message":"Something went wrong!"})
        }
        if(data){
            
            return res.status(200).json({"message":"User registration successfull"})
           
        
        }
    })


}

function signin(req,res){

    User.findOne(
        {
            email:req.body.email
        }
    ).exec((err,data)=>{
        if(err)
        return res.status(500).json({"message":"Something went wrong!"})
        if(data)
        {
            User.findOne({password:req.body.password}).exec((err,data)=>{

                if(err)
                return res.status(500).json({"message":"Something went wrong!"})

                if(data){
                    return res.status(200).json({"message":"User signed in successfully!"})
                }
                else{
                    return res.status(400).json({"message":"Password Incorrect"})
                }

            })
        }
        else
        {
            return res.status(400).json({"message":"No User exits with this email.Please Signup!"})
        }
    })






}

module.exports ={signup,signin};









