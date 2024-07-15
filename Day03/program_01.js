// Activity 1
// Task 1
const n = 7;
console.log((n == 7 ? "Thala" : n > 0 ? "+ive" : n < 0 ? "-ive" : "Zero"));
// Task 2
const age = 18
console.log((age >= 18 ? "Eligible To Vote" : "Under Age"))

// Activity 2
// Task 3
let a = 5, b = 3, c = 7, max
if (a > b && a > c) {
    max = a
}
else if (b > a && b > c) {
    max = b
}
else {
    max = c
}
console.log(max)

// Activity 3
// Task 4
const dayNumber = 8
switch (dayNumber) {
    case 1:
        dayName = "Monday"
        break;

    case 2:
        dayName = "Tuesday"
        break;

    case 3:
        dayName = "Wednesday"
        break;

    case 4:
        dayName = "Thursday"
        break;

    case 5:
        dayName = "Friday"
        break;

    case 6:
        dayName = "Saturday"
        break;

    case 7:
        dayName = "Sunday"
        break;

    default:
        dayName = "Invalid! Day Number, Try between 1-7"
        break;
}
console.log(dayName)
// Task 5
const marks = 77
switch (true) {
    case (marks >= 90 && marks <= 100):
        grade = 'A'
        break;

    case (marks >= 80 && marks < 90):
        grade = 'B'
        break;

    case (marks >= 70 && marks < 80):
        grade = 'C'
        break;

    case (marks >= 60 && marks < 70):
        grade = 'D'
        break;

    case (marks >= 0 && marks < 60):
        grade = 'F'
        break;

    default:
        grade = "Invalid Marks! Try between 0-100"
        break;
}
console.log(grade)

// Activity 4
// Task 6
const num = 7
console.log((num % 2 == 0 ? "even" : "odd"))

// Activity 5
// Task Thala
const year = 2011
console.log((year % 100 == 0 ? (year % 400 == 0 ? "Leap Year" : "Not Leap Year") : (year % 4 == 0 ? "Leap Year" : "Not Leap Year")))