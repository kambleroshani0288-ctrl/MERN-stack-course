// User List table in Database


const mongoose = require("mongoose")

//-------------------------------------
//Schema - Model (databases structure)
//Define structure of item document in MongoDB


const UserSchema = new mongoose.Schema({  // //Schema - Model - Data base table structure  
    // Item Name
    name: String,

    // User Email
    email: String,

    // User Password
    password: String
})



// create collection /table called "Users"
const User = mongoose.model("Users", UserSchema)

module.exports = User