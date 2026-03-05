//Backend Project

//Node js
//Express Js
//DB - MongoDb


//ApI List

//1. ApI Create Item - get Data values from front end ( Item details) and store into DB

//2.ApI Update Item - get Item Details from front end Which Item details we need to update 

//3. ApI Delete Item - get Item Details from front end an delete this record from database

//4. ApI Get All Records - get All records from DB and show to UI Front end





// //Arrow function

// const getdata = () => {

// }

// //Normal function

// function getdata() {

// }



console.log("Hello Node js Project Started")


const express = require("express")  //Node js framework
const app = express()  //app - variable - store express function 
const mongoose = require("mongoose") // Liabrary - connect mongodb Database

app.use(express.json())  //convert all data into json format

// DB Connection

mongoose.connect("mongodb://localhost:27017/item-database").then(() => console.log("Mongo DB Connected")).catch((error) => console.log(error))

// //Schema - Model - Data base table structure
// //values store database - structure


const itemsSchema = new mongoose.Schema({
    name: String,
    description: String,
    sellingprice: Number
})


const Items = new mongoose.model("Items", itemsSchema) // Table Name / Collection Name - Items

// //API 1 - Create Item     
app.post( "" )


// //API 2 - update/Edit Item     
app.put( "" )



// //API 1 - Deleat Item       
app.delete( "" )



// //API 1 - Get All Item   
app.get( "" )




//Helth ApI

app.get("/helth", (req, res) => {
    res.status(200).json({ message: "Server is Runing" })
})


//server Started

const PORT = 9090

app.listen(PORT, () => {
    console.log("Server Started")
})