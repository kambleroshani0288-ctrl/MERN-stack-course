// Javascript
// React js 
// Node Js

//Synchronous and Asynchronous
//callbacks
//Promises
//async/await

// 1 .setTimeout

console.log(1)
console.log(11)

setTimeout(() => {
    console.log(2)
}, 1000)

console.log(3)

//1. Call Backs

const getData = (callBackFunction) => {
    console.log("Hello Get Data")
    callBackFunction()
}

const callBackFunction = () => {
    console.log("Call Back Function called")
}

getData(() => console.log("1212321"))

//2. Promises - Asynchronous
// resolve / pending / reject 

const myPromise = new Promise(
    (resolve,  reject) => {
        const error = false
        
        if (error == true) {
          resolve("Promise Resolved")  
        } else {
            reject("Promise Rejected")
        }
    }
)

myPromise.then((res) => console.log(res)).catch((error) => console.log(error))

//3. async/await - Asynchronous

const myfunction = async () => {
    //API integration
    // DB Call - add delete update get from DB - await
}