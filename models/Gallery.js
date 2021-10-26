const mongoose = require('mongoose');
const GallerySchema = mongoose.Schema({
    postID: {
        type: Number,
        required:true
    },
    userID:{
        type: Number
        },
    creationDate:{
        type: Date,
        default : Date.now
    },
    content:{
        type: String,
    },
    media:{
        type: String,
    },
    comments:{
        "content":{
            type: String,
        },
        "userID":{
            type: Number,
        },
        "likeReceived":{
            type: Boolean,
            default: false
        },
        creationDate:{
            type: Date,
            default : Date.now
        },
    }
});

module.exports = mongoose.model('gallery', GallerySchema);