
// Task 1: Sort the given dogs by their name. Output their names 
//  by ascending alphabetical order of their name.

// Execute:  node sort-by.js name

// Example: node sort-by.js name
//  It will outputs:
//    Bailey
//    Buddy
//    Charlie
//    ...

// Task 2: Sort the given dogs by their age. Output their names 
//  by an ascending order of their age.

// Execute: node sort-by.js age

// Example: node sort-by.js age
//  It will outputs:
//    Daisy
//    Bailey
//    Buddy
//    ...


const dogs = [
  {
    "name": "Buddy",
    "age": 3
  },
  {
    "name": "Max",
    "age": 7
  },
  {
    "name": "Bailey",
    "age": 2
  },
  {
    "name": "Charlie",
    "age": 5
  },
  {
    "name": "Lucy",
    "age": 4
  },
  {
    "name": "Daisy",
    "age": 1
  }
]
  

function main(sortBy) {
    console.log('sortBy:', sortBy)

}

main(process.argv[2])

