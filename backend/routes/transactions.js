const router=require("express").Router();
const {addIncome,getIncome,deletetIncome}=require("../controllers/transactions");

router.get('/',(req,res)=>{
    return res.send("hello world");
})

router.post('/add-income',addIncome)
.get("/get-income",getIncome)
.delete("/delete-income/:id",deletetIncome);

module.exports=router;