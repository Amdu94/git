// Task: Create a function that shows an ordered list from the items.

// Execute: node pets.js

//  Example output:
//  1. Cat
//  2. Dog
//  ...


const pets = ['Cat', 'Dog', 'Hamster', 'Guinea Pig', 'Salmon']

function main() {
    pets.forEach((pet, index) => {
        console.log( `${index+1}. ${pet}`)
    })
}

main()

