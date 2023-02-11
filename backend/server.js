const dotenv=require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
dotenv.config({path : './config.env'})
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// console.log(process.env.MONGO_URL)
mongoose.connect("mongodb+srv://dbUser:dbUserPassword@cluster0.5f4pmwb.mongodb.net/uems?retryWrites=true&w=majority").catch((err) => {
    console.log(err)
})

const postSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type:Number,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }    
})
const LoginUsers = mongoose.model("LoginUsers", postSchema);

const scheduleSchema=new mongoose.Schema({
    name:String,
    type:String,
    permission:String,
    description:String,
    date:String,time:String,
    venue:String,
    eattendes:String,
    item1:Number,
    item2:Number,
    item3:Number,
    createdAt: {
        type: Date,
        default: Date.now
    }

})
const Schedule=mongoose.model("Schedule",scheduleSchema);
const postData=async(req,res)=>{
    try {
        const {name,type,description,date,time,venue,eattendes,item1,item2,item3,permission}=req.body;
     let newEvent=new Schedule({name,type,description,date,time,venue,eattendes,item1,item2,item3,permission})
     await newEvent.save();
    //  console.log(newEvent.permission)
     return res.status(200).send("user Registered");
     
    } catch (err) {
        console.log(err);
        return res.status(500).send("server error");
    }
} 
const schedule=(req,res)=>{
    Schedule.find({},(err,collections)=>{
        if(err){
            console.log(err);
        }else{
            // collections.forEach(element => {
            //     console.log(element)
            // });
            // console.log(collections)
            res.json(collections)
        }
    })
}
const approval=(req,res)=>{
    Schedule.findById(req.body.id,(err,doc)=>{
        if (err) return res.status(500).send({ message: 'Error updating data' });
        doc.permission=req.body.permission;
        doc.save((err,updatedoc)=>{
            if (err) return res.status(500).send({ message: 'Error updating data' });
            return res.send({ message: 'Data updated successfully' });
        })
    })
    // console.log(req.body.id)

}

app.post('/api/schedule',postData)
app.post('/api/login',async (req, res) => {
    try {
        console.log(req.body)
        const { username, password } = req.body;
        let exist = await LoginUsers.findOne({username});
        if(!exist){
            return res.status(200).json({message:"username not found"});
        }
        if(exist.password!=req.body.password){
            return res.status(200).json({message:"wrong password"});
        }
         res.json({
            status:200,
            message:"user found",
            found:true,
            role:exist.role
        })
    }
    catch (err) {
        console.log(err);
        return res.status(500).send("server error");
    }
})
app.get('/api/schedule',schedule)
app.put('/api/approval',approval)

app.listen(3001, () => {
    console.log("server runnung at http://localhost:3001/")
})