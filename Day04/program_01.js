// Activity 1
// Task 1
console.log("for")
for (let i = 1; i < 11; i++) {
    console.log(i)
}
// Task 2
for(let i = 1; i<11; i++){
    console.log("5 x ",i, " = ",5*i)
}

// Activity 2
// Task 3
console.log("while")
let sum = 0, i=1
while (i<11) {
    sum+=i
    i++
}
console.log("Sum : ",sum)
// Task 4
let j = 10
while (j>0) {
    console.log(j)
    j--
}

// Activity 3
// Task 5
i = 1
console.log("do-while")
do {
    console.log(i)
    i++
} while (i<6);
// Task 6
n = 5
i = n
let fact = 1
do {
    fact*=i
    i--
} while (i>0);
console.log("!",n," = ",fact)

// Activity 4
// Task 7
n = 5
for (let i = 1; i <= n; i++) {
    console.log("* ".repeat(i))
}

// Activity 5
// Task 8
console.log("continue")
for (let i = 1; i <= 10; i++) {
    if(i==5){
        continue
    }
    console.log(i)
}
// Task 9
console.log("break")
for (let i = 1; i <= 10; i++) {
    if(i==7){
        break
    }
    console.log(i)
}