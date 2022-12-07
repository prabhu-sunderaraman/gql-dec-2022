let db = {
    books: [
        { id: "b101", title: "ABC", price: 12.34, inStock: true },
        { id: "b102", title: "DEF", price: 112.34, inStock: true },
        { id: "b103", title: "GHI", price: 42.134, inStock: false },
        { id: "b104", title: "JKL", price: 10.34, inStock: true },
        { id: "b105", title: "MNO", price: 101.34, inStock: false }
    ]
};

let resolvers = {
    Query: {
        books: () => db.books
    }
};

module.exports = resolvers;