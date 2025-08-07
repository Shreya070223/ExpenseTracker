//npm install dotenv

const cors=require("cors");
const express=require("express");
const app=express();
const {readdirSync}=require('fs');

require("dotenv").config();
const PORT=process.env.PORT;

//routers
const transecRoute=require("./routes/transactions");
// readdirSync('./routes').map((route)=>app.use('/api/v1',require('./routes/' + route)))

const {db}=require("./db/db");

//mongodb connected
db();

//middalware
app.use(express.json());
app.use(cors());

app.use("/",transecRoute);


app.listen(PORT,()=>console.log(`server is listning on port ${PORT}`));



