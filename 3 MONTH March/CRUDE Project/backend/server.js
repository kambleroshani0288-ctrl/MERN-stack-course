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
const mongoose = require("mongoose") // Library - connect mongodb Database
const cors = require("cors") // Library - solve cors error

app.use(express.json())  //convert all data into json format
app.use(cors())

// DB Connection

mongoose.connect("mongodb://localhost:27017/item-database").then(() => console.log("Mongo DB Connected")).catch((error) => console.log(error))

// //Schema - Model - Data base table structure
// //values store database - structure


const itemsSchema = new mongoose.Schema({
    name: String,
    description: String,
    sellingprice: Number,
    purchasePrice: Number,
    quantity: Number,
    unit: String
})


const Items = new mongoose.model("Items", itemsSchema) // Table Name / Collection Name - Items

//API 1 - Create Item     
app.post("/api/create-item", async (req, res) => {

    try {

        const { name, description, sellingprice, purchasePrice, quantity, unit } = req.body


        const saveItem = new Items(
            {
                name,
                description,
                sellingprice,
                purchasePrice,
                quantity,
                unit
            }
        )

        await saveItem.save()

        res.status(201).json({ message: "Item Created ", data: saveItem })


    } catch (error) {
        console.log(error)
    }
})


//API 2 - update/Edit Item     
app.put("/api/update-item", (req, res) => {

    try {


    } catch (error) {
        console.log(error)
    }
})


//API 3 - Deleat Item       
app.delete("/api/delete-item", (req, res) => {

    try {


    } catch (error) {
        console.log(error)
    }
})


//API 4 - Get All Item   
app.get("/api/get-all-item", async (req, res) => {

    try {

        const items = await Items.find()

        res.status(200).json({ message: " Get All Item List ", data: items })


    } catch (error) {
        console.log(error)
    }
})





//Helth ApI

app.get("/health", (req, res) => {
    res.status(200).json({ message: "Server is Running" })
})

//server Started

const PORT = 9090

app.listen(PORT, () => {
    console.log("Server Started")
})