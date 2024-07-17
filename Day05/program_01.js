// Activity 1
// Task 1
console.log("Function Declaration")
function isEven(i){
    let str =  (i%2==0 ? "Even" : "Odd")
    console.log(str)
}
isEven(6)
// Task 2
function sq(i){
    return (i*i)
}
console.log("Square : ",sq(7))

// Activity 2
// Task 3
console.log("Function Expression")
function maxTwo(i,j) {
    let max = (i>j ? i : j)
    console.log("Max : ",max)
}
maxTwo(7,5)
// Task 4
let i="Hello", j ="World"
let addStr = function (i , j){
    return (i+j)
}
console.log("Concatenate : ",addStr(i,j))

// Activity 3
// Task 5
console.log("Arrow Function")
const add = (i,j) =>{ return i+j }
console.log("Sum : ",add(3,4))
// Task 6
i="$", j="KR$NA"
const charCheck = (i,j) => { return (j.includes(i))}
console.log(charCheck(i,j))

// Activity 4
// Task 7
console.log("Default Parameters & Values")
const prod = (a,b=7) => {console.log("Product : ",a*b)}
prod(1)
// Task 8
const greet = (n,age=7) => {console.log(`Hello ${n}\nYou are ${age} years old`)}
greet("Aviral")

// Activity 5
// Task 9
console.log("Higher-Order Function")
function sayHello(){
    console.log("Hello")
}

function repeatFunc(n, fn){
    for(let i=0; i<n; i++){
        fn()
    }
}
repeatFunc(3, sayHello)
// Task 10
function highOrder(fun1, fun2, val){
    return fun2(fun1(val))
}

function addTwo(i,j=7){
    return i+j
}

function pro(i,j=7){
    return i*j
}
console.log(highOrder(addTwo, pro, 7))