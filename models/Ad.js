const mongoose = require('mongoose');
const { Schema } = mongoose;

const AdSchema = new Schema({
    _id: String,
    email: String,
    product: String,
    name: String,
    featured: Boolean,
    profilePic: String,
    uniqueId: String,
    phone: String,
    detail: String,
    price: Number,
    location: String,
    catagory: String,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    
});

module.exports = mongoose.model( 'Ad', AdSchema );

