const mongoose = require('mongoose')

// Schema definition
const Location_Schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    city: {
        type: String,
        required: true
    }, 
    country: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    interest_counter: {
        type: Number,
        required: true
    }
}, {collection: 'location'})

// Schema Compilation
module.exports = mongoose.model('location', Location_Schema)