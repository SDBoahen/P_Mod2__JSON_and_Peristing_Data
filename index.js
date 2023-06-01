// console.log(":)")



const { createRandomProduct } = require("./products.js")

const { writeJSONFile, readJSONFile } = require("./helpers.js")


//// run: function to run our entire Command Line App

function run(){

    console.log("Welcome to Our Products App!✨\n\n\n\n")

    // console.log( "Us Creating a Random Product (from the require): ", createRandomProduct() )


    let productsData = readJSONFile( "./data" , "products.json" )
    // if: file is empty -> Give us an empty array; Save it to our productsData variable
    // else: give us the existing array (collection); Save it to our productsData variable

    productsData.push( createRandomProduct() )


    writeJSONFile( "./data" , "products.json", productsData )


}

run()


//////// process object + process.argv