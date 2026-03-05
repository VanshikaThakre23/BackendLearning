const mongoose = require("mongoose");

const subTodoSchema = new mongoose.Schema(
    {
        content:{
            type:String,
            required:true,
        },
        completed:{
            type:Boolean,
            default:false,
            required:true
        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }
    },
    {timestamps:true}
)

export const subTodo = mongoose.model("subTodo",subTodoSchema)