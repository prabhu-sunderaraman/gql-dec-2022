let schema = `
    type Book {
        id: ID!,
        title: String,
        price: Float,
        inStock: Boolean,
        unitsSold: Int
    }

    type Query {
        allBooks: [Book]
    }
`;

module.exports = schema;