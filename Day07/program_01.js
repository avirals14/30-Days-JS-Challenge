// Activity 1
// Task 1
console.log("Activity 1 : ")
let book = {
    Title : "Vikram",
    Author : "Lokesh Kanagraj",
    Year : 2022,
}
console.log("Object Book : ",book)
// Task 2
console.log(`Title : ${book.Title}\nAuthor : ${book.Author}`)

// Activity 2
// Task 3
console.log("\nActivity 2 : ")
book.funcbook = function(){
    return `${this.Title} By ${this.Author}`
}
console.log("Book Details : ",book.funcbook())
// Task 4
book.updateYear = function(year){
    return this.Year = year
}
book.updateYear(2024)
console.log("Year Updated : ", book.Year)

// Activity 3
// Task 5
console.log("\nActivity 3 : ")
let library = {
    name : "Silent Knowledge",
    books:[
        {
            title:"Ratan Tata A Complete Biography",
            author:"A.K. Gandhi ",
            year:2021
        },
        {
            title:"Who Killed Shastri?: The Tashkent Files",
            author:"Vivek Agnihotri",
            year:2020
        }
    ]
}
console.log("Object Library : ",library)
// Task 6
console.log(`Library Name :- ${library.name}`)
for (const it of library.books) {
    console.log("Book Title :- ",it.title)
}

// Activity 4
// Task 7
console.log("\nActivity 4 : ")
book.fnbook = function(){
    return `Title : ${this.Title} in ${this.Year}`
}
console.log(book.fnbook())

// Activity 5
// Task 8
console.log("\nActivity 5 : ")
for (const i in book) {
    console.log(`Property : ${i}\tValue : ${book[i]}`)
}
// Task 9
console.log("\nKeys : ",Object.keys(book))
console.log("\nValues : ",Object.values(book))