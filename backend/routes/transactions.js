const router=require("express").Router();

router.get('/',(req,res)=>{
    return res.send("hello world");
})

// router.post('/add-income',addIncome);

module.exports=router;