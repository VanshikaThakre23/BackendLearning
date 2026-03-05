const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            default: false,
            required: true
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        subtodos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "subTodo"
            }
        ]


    },
    { timestamps: true });

export const Todo = mongoose.model("Todo", todoSchema);