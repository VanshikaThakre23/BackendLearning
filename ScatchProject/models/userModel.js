const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/scatch");

const userSchema = mongoose.Schema({
    fullname : {
        type :String,
        minLength : 3 , 
        trim:true,
    } ,

    email : String,

    password : String ,

    contact : Number ,

    profileImg: String,

    cart :[ {
        type:mongoose.Schema.Types.ObjectId,
      ref: "product"
    }],
    orders:{
        type:Array,
        default:[],
    },

});

module.exports = mongoose.model("user",userSchema);