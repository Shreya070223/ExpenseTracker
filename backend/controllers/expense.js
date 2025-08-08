const Expense=require("../models/expenseModels");

const addExpense=async(req,res)=>{
    const {title,amount,category,description,date}=req.body;

    const expense=Expense({title,amount,category,description,date});

    try {
        if(!title || !description || !category || !date){
            return res.status(400).json({message:"All field are required"});
        }
        if(amount<=0){
            return res.status(400).json({message:"place the correct amount"});
        }

        await expense.save();
        return res.status(200).json({message:"expense added"});
        
    } catch (error) {
       return  res.status(500).json({message:"Server Error"});
    }

    console.log(expense);
}

const getExpense=async(req,res)=>{
    try {

        const expense=await Expense.find().sort({createdAt:-1})
        return res.status(200).json(expense);
        
    } catch (error) {
        return  res.status(500).json({message:"Server Error"});
    }

}

const deleteExpense=async(req,res)=>{
   const {id}=req.params;
   Expense.findByIdAndDelete(id)
   .then((income)=>{
    return res.status(200).json({message:"Expense deleted"});
   })
   .catch((error)=>{
    res.status(500).json({message:"Server Error"})
   })
} 

module.exports={addExpense,getExpense,deleteExpense};