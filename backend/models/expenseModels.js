const mongoose=require("mongoose");

const ExpenseSchema=new mongoose.Schema({
 title:{
    type:String,
    required:true,
    trim:true,
    maxLength:50
 },
 amount:{
    type:Number,
    required:true,
    trim:true,
    maxLength:20
 },
 type:{
    type:String,
    default:"income"
 },
 date:{
    type:Date,
    required:true,
    trim:true
 },
 category:{
    type:String,
    required:true,
    trim:true,
 },
 description:{
    type:String,
    required:true,
    trim:true,
    maxLength:60
 },

},{timestamps:true})

const Expense=mongoose.model('expense',ExpenseSchema);

module.exports=Expense;