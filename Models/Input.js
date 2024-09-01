const mongoose = require( "mongoose" );

const userSchema = mongoose.Schema( {
    Input: {
        type: String,
        required: true,
    }
} )

const input = mongoose.model( "Input", userSchema );

module.exports = input;