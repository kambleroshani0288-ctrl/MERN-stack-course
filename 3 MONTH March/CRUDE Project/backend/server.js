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






const express = require("express")  //Node js framework
const app = express()  //app - variable - store express function     

const cors = require("cors") //liberary - solve cors error

const { connectDB } = require("./config/db") //Inform function from another file

const { addItem, editItem, deleteItem, getAllItems } = require("./controllers/itemsControllers")

app.use(express.json())  //convert all data into json formate
app.use(cors())

// DB Connection


connectDB()





//API 1 - Create Item    

app.post("/api/create-item", addItem)




//API 2 - update/Edit Item     
app.put("/api/update-item", editItem)


//API 3 - Delete Item       

app.delete("/api/delete-item/:id", deleteItem)


//API 4 - Get All Item   
app.get("/api/get-all-item", getAllItems)





//Helth ApI

app.get("/health", (req, res) => {
    res.status(200).json({ message: "Server is Running" })
})

//server Started


const PORT = 9090

app.listen(PORT, () => {
    console.log("Server Started")
})