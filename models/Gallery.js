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
    commentsContent:{
        type: String,
    },
    commentsuserID:{
        type: Number,
    },
    commentsLikerecived:{
        type: String,
    },
    
    commentsCreationdate:{
        type: Date,
        default : Date.now
    },
});

module.exports = mongoose.model('gallery', GallerySchema);