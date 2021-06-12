const mongoose = require('mongoose')

const filmeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    genre: {
        type: String,
        required: true
    },   

    languages: {
        type: String, 
        required: true
        
    },

    releaseYear:{
        type: Number,
        required: true
    },

    created_at: {
        type: Date,
        required: true,
        default: new Date
    }

})

module.exports = mongoose.model('filme', filmeSchema)