const Income=require("../models/incomeModels");

const addIncome=async(req,res)=>{
    const {title,amount,category,description,date}=req.body;

    const income=Income({title,amount,category,description,date});

    try {
        if(!title || !description || !category || !date){
            return res.status(400).json({message:"All field are required"});
        }
        if(amount<=0){
            return res.status(400).json({message:"place the correct amount"});
        }

        await income.save();
        return res.status(200).json({message:"income added"});
        
    } catch (error) {
       return  res.status(500).json({message:"Server Error"});
    }

    console.log(income);
}

const getIncome=async(req,res)=>{
    try {

        const income=await Income.find().sort({createdAt:-1})
        return res.status(200).json(income);
        
    } catch (error) {
        return  res.status(500).json({message:"Server Error"});
    }

}

const deleteIncome=async(req,res)=>{
   const {id}=req.params;
   Income.findByIdAndDelete(id)
   .then((income)=>{
    return res.status(200).json({message:"Income deleted"});
   })
   .catch((error)=>{
    res.status(500).json({message:"Server Error"})
   })
} 

module.exports={addIncome,getIncome,deleteIncome};