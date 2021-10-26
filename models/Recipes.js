const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
    recipeID: {
        type: Number,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    creationDate:{
        type: Date,
        default : Date.now
    },
    instruction:{
        type: String,
    },
    ingredients:{
        name:{
            type: String,
            default : "Unspecified"
        },
        supplierLink:{
            type: String,
            default : "Unspecified"
        },
        subsititution:{
            type: String,
            default : "none"
        },
    },
    mediaLink:{
        type:String,
    },
    createdBy:{
        type:Number
    },
    comments:{
        content:{
            type: String
        },
        userID:{
            type: Number        },
        rating:{
            type: Number,
            default:0
        },
    }
});

module.exports = mongoose.model('recipes', recipeSchema);