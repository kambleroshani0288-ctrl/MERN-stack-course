
const mongoose = require("mongoose")

//-------------------------------------
//Schema - Model (databases structure)


const itemsSchema = new mongoose.Schema({  // //Schema - Model - Data base table structure  
    name: String,
    description: String,
    purchasePrice: Number,
    sellingPrice: Number,
    quantity: Number,
    unit: String
})




module.exports = mongoose.model("Items", itemsSchema)

// create collection /table called "Users"
const Items = mongoose.model("Items", ItemsSchema)

module.exports = Items