// Activity 1
// Task 1
console.log("Activity 1 : ")
const a = [1,2,3,4,5]
console.log(a)
// Task 2
console.log(`First : ${a[0]}\tSecond : ${a[4]}`)

// Activity 2
// Task 3
console.log("\nAcitivity 2 : ")
a.push(6)
console.log("Push : ",a)
// Task 4
a.pop()
console.log("Pop : ",a)
// Task 5
a.shift()
console.log("Shift : ",a)
// Task 6
a.unshift(1)
console.log("Unshift : ",a)

// Activity 3
// Task 7
const b = a.map((x) => 2*x)
console.log("\nActivity 3 : \nMap : ",b)
// Task 8
const c = a.filter((x) => x%2==0)
console.log("Filter : ",c);
// Task 9
const d = a.reduce((a,b,i) => a+b)
console.log("Reduce (Sum): ",d)

// Activity 4
// Task 10
console.log("Activity 4 : \nFor : ")
for(let i=0; i<a.length; i++){
    console.log(a[i]);
}
// Task 11
console.log("ForEach : ")
a.forEach(i => {
    console.log(i)
});

// Activity 5
// Task 12
console.log("Activity 5 : ")
const twoD = [[1,2], [3,4], [5,6]]
console.log("2-D Array : ",twoD)
// Task 13
console.log("twoD[0][1] : ",twoD[0][1])