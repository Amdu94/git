// Task: Create a program that calls a cat based on a language.

// If the language: Hungarian, it should print 'cicc-cicc'
// If the language: Chinese, it should print 'miao-miao'
// If the language: Tunisian, it should print 'besh-besh'
// If the language: Japanese, it should print 'neko chan oide'
// Call it in any other language 'kitty-kitty'.

// Execute: node.js calling-a-cat.js Hungarian

function main(language) {
  console.log('language:', language)
  if(language === 'Hungarian') {
    console.log("cicc-cicc")
  }else if(language === Chinese) {
    console.log("miao-miao")
  }
  // The language variable will be the language from the command line. 

}

main(process.argv[2])

