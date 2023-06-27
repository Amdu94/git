// Task: Show the cat names that contains the given keyword. (It can be case sensitive).

// Execute: node search-by-name.js Cir

// Example: node searcg-by-name.js irm
//  it will outputs:
//    Cirmi
//    Cirmos



const catNames = ['Cirmi', 'Cirmos', 'Vakarcs', 'Butyok', 'Bubu']

function main(keyword) {
    catNames.forEach((cat) => {
        const string = keyword.toLowerCase();
       if (cat.toLowerCase().includes(string)){
           console.log(cat)
       } 
    })
}

main(process.argv[2])

