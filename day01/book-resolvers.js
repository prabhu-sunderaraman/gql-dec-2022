let db = {
    books: [
        { id:"b101", title: "Programming Scala", price: 123.34, inStock: true, unitsSold: 10000 },
        { id:"b102", title: "RoR", price: 223.34, inStock: true, unitsSold: 568000 },
        { id:"b103", title: "Programming Groovy", price: 13.34, inStock: false, unitsSold: 7600 },
        { id:"b104", title: "Practical ExtJS4", price: 12.14, inStock: false, unitsSold: 40000 },
        { id:"b105", title: "NodeJS in action", price: 78.34, inStock: true, unitsSold: 60800 }
    ]
};

let resolvers = {
    Query: {
        allBooks: () => db.books
    }
};

module.exports = resolvers;