//npm install dotenv

const cors=require("cors");
const express=require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT;

//middalware
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    return res.send("hello it started");
})


app.listen(PORT,()=>console.log(`server is listning on port ${PORT}`));



