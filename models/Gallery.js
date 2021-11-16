const mongoose = require('mongoose');
const GallerySchema = mongoose.Schema({
    postID: {
        type: Number,
        required:true
    },
    likerecived:{
        type: Number,
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
        type: Number,
    },
    
    commentsCreationdate:{
        type: Date,
        default : Date.now
    },
});

module.exports = mongoose.model('gallery', GallerySchema);