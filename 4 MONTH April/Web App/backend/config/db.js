const mongoose = require("mongoose")


const connectDB = () => {
    try {

        mongoose.connect("mongodb://localhost:27017/item-database")
            .then(() => console.log("Mongo DB Connected"))
            .catch((error) => console.log(error))



    } catch (error) {

        console.log(error)

    }
}

module.exports = { connectDB }