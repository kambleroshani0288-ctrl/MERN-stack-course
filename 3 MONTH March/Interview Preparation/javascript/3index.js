//Spread Operator

//We can use for arrays and objects => [] , {}
// expands element (array/object) - We can add new elements to the array or object

const array1 = [1,2,3];
const array2 = [4,5,6];

//[1, 2, 3, 4, 5, 6]

const finalArray = [...array1 , ...array2]
console.log(finalArray)



//Rest Operator
//(...)

function sum (...numbers) {
    console.log(numbers);  // [1, 2, 3]
    return numbers.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 43, 58, 65));  // 6


//Closures
//Nested functions

function mainFunction (){
    let name = "HOC 1"

    function nestedfunction (){
        let age = "21"
        console.log(name) //HOC 1
        console.log(age)  //undefined
    }

    return nestedfunction();

}

console.log(mainFunction()) //HOC 1


// Immediately Invoked Function Expression (IIFE)
;(function () {
    console.log ("Immediately Invoked Function Expessions (IIFE")
})();

//Self- Invoking Function
;(function (){
    console.log("I am a self-invoking function")
})();


// Higher-Order Component (HOC)


// Higher-Order Function
  // Takes another function as argument OR returns a function.
  // Used for reusable and cleaner code.
  const myfunctions = (name) => {
    const a= 5 
    console.log(a)
    return "Hello" + name

    var b = 5
    console.log(b)
  }

  const processedFunction = (fun) => {
    console.log("processing function..." , fun("HOC"))
  }
  console.log(processedFunction(myfunctions))  // processing function... undefind



// Destructuring - Object , Array
  // Extract values easily from array/objects.
  // Makes code shorter and cleaner. 

// Object Destructuring

const data = {
    name : "ABC",
    email : "abc@gmail.com",
    age : 21
}

console.log(data, "==> Full Object")

const{ name, email, age } = data

console.log(name)  //ABC
console.log(email) // abc@email.com

// Array Destructuring
           //     0          1         2         3         4
const array = [ "Test 1", "Test 2", "Test 3", "Test 4", "Test 5", ]

const [a , b , c] = array

console.log(a) //Test 1
console.log(b) //Test 2
console.log(c) //Test 3