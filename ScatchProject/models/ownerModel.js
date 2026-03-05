const mongoose = require ('mongoose');

const ownerSchema = ({
 fullname : {
        type :String,
        minLength : 3 , 
        trim:true,
    } ,

    email : String,

    password : String ,

    contact : Number ,

   
    profileImg: String,

    product:{
        type:Array,
        default:[],
    },

});

module.exports = mongoose.model("owner",ownerSchema);