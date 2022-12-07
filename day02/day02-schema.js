let schema = `
    type Book {
        id: ID!,
        title: String,
        price: Float,
        inStock: Boolean
    }

    type Query {
        books: [Book]
    }
`;

module.exports = schema;