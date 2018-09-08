const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = {
    googleId: String,
    name: String,
    email: String,
    profilePhoto: String
};



mongoose.model( 'Users', userSchema );
