const express=require('express');
const app=express();
const authRoute=require('./routes/authRout.js')
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
mongoose.connect(process.env.DB_URL
,{ useNewUrlParser: true,useUnifiedTopology: true  },()=>{
 console.log('DB connected')
})
// this is instead of installing body parser we can use app.use(express.json()) we say we take anything that comes in json format

app.use(express.json())
//Routes
app.use('/',authRoute)
app.use('/api/user',authRoute);// whenever user go to the '/api/user' url,it will look in the authRoute
                               //which is 2nd param and executes the route inside it

app.listen(3000,()=>{
    console.log('server is running')
})