const mongoose=require("mongoose")
//require('dotenv').config()
// DATABASE=process.env.DATABASEURL
const url=`mongodb+srv://abhver192002:Abhayverma19@cluster0.ael5vfz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
module.exports.connect=()=>{
    mongoose.connect(url,console.log("Database is connected"))
}