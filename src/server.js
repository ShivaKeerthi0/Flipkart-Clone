const express = require('express');
const env = require('dotenv');
const app=express();
const bodyParser= require('body-parser')
const mongoose = require('mongoose')

const authRouter = require('./routes/auth/auth.js')






env.config();


app.use(bodyParser.json());
                                  
app.use('/auth',authRouter)


app.listen(process.env.PORT,() => {
    console.log('Server running on '+process.env.PORT)
})
