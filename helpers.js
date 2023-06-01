//// Here will will write our File System Reading and Writing Functionality


const fs = require("node:fs")


// console.log("Node's File System: " , fs)
// console.log("The Keys for the Node FS: ", Object.keys(fs))

// console.log("The Function readFileSync: ", Object.keys(fs.readFileSync))
// console.log("The Function writeFileSync: ", Object.keys(fs.writeFileSync))


//// readFileSync( "pathToTheFile", "howToReadTheFile")
// const path = "./data"
// const fileName = "products.json"

// const collection = fs.readFileSync( `${path}/${fileName}` , "utf-8" )

//     // condition ? trueAction : falseAction  ~ Similar to if/else
//     // if (condition){ trueAction } else { falseAction }
//     const resultOfTernary = collection ? JSON.parse(collection) : [];

//     console.log( "Data from JSON File We Are Reading: " , resultOfTernary )




function readJSONFile(path, fileName){

    const collection = fs.readFileSync( `${path}/${fileName}` , "utf-8" )

    // is it an empty JSON File or NOT
    return collection ? JSON.parse(collection) : [];

}




//// writeFileSync( "path" , data, { encoding: "utf-8" } )


function writeJSONFile(path, fileName, data){

    data = JSON.stringify(data)

    fs.writeFileSync( `${path}/${fileName} `, data , { encoding: "utf-8" } )

}


module.exports = {
    readJSONFile,
    writeJSONFile
}


