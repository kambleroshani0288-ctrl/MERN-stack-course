console.log("We are using javascript")

// variables
const name = "HOC"             //fix value we can not chenge
var surname = "Tech"           //globale we can chenge anywhere in file
let middleName = "Solutions"  //we can use in block scope

// functions

// normal function

function getMyName() {
    console.log("function 1")
}

getMyName()

// Arrow function

const getYourName = () => {
    console.log("function 2")
}

getYourName()


// Parameter 
const getmyFullName = (data = "No Name") => {
    console.log("My Full Name", data)
}

const myName = "Roshani Kamble"
getmyFullName(myName)

const test = "Ankita Sonwale"
getmyFullName(test)

getmyFullName()

// Array - index   0         1         2         3
const items = ["Test 1", "Test 2", "Test 3", "Test 4"]
console.log(items, "Full Item Print")
console.log(items[0], "- Print only index 0 - ( First value )")
console.log(items[2])

//Object - key value pair 
const studentDetails = {
    //  Key - value
    name: "Roshani Kamble",
    city: "Karad"
}
console.log(studentDetails, "= studentDetails full object")
console.log(studentDetails.name, " => stuDentDetails name only")