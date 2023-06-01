// npm install @faker-js/faker@7 --save-dev


const { faker } = require("@faker-js/faker")

// console.log( faker )  //  if you want to see the faker module/"object"

// const { name } = { name: "Sam" }



const randomFakeProduct = {
    _id: faker.datatype.uuid(),
    name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`
}
// console.log("randomFakeProduct: ", randomFakeProduct)


const productFromTheLessonReadme = {

    _id: faker.datatype.uuid(),
    name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
    description: faker.commerce.productDescription(),
    brand: faker.company.name(),
    price: faker.commerce.price(10, 200, 2, "$"),
    currency: "USD",

    inStock: faker.datatype.boolean(),

    attributes: {
      material: faker.commerce.productMaterial(),
      color: faker.vehicle.color(),
    },

};
// console.log("productFromTheLessonReadme: ", productFromTheLessonReadme)



//// Writing a Function to Generate/CREATE a new Random Product
function createRandomProduct(){

    const newProduct = {
        _id: faker.datatype.uuid(),
        name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
        description: faker.commerce.productDescription(),
        brand: faker.company.name(),
        price: faker.commerce.price(10, 200, 2, "$"),
        currency: "USD",
        inStock: faker.datatype.boolean(),
        attributes: {
          material: faker.commerce.productMaterial(),
          color: faker.vehicle.color(),
        },
        // starsRating: productStars
    };

    // do somethig with  `newProduct`

    return  newProduct

}

// console.log( "Us Creating a Random Product: ", createRandomProduct() )



module.exports = { createRandomProduct }

