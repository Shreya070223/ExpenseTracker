const mongoose=require("mongoose");

const db=async()=>{
    try{
        mongoose.set('strictQuery',false)
        await mongoose.connect("mongodb://127.0.0.1:27017/expenseTracker").then((e)=>console.log('mongodb connected'))
        
    }catch (error){
      console.log("db connection error");
    }
}

module.exports={db};