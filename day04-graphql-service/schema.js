let schema = `
    type Book {
        id: ID!,
        title: String,
        price: Float,
        inStock: Boolean,
        unitsSold: Int
    }

    type Query {
        allBooks: [Book],
        book(id: ID): Book,
        books(available: Boolean): [Book]
    }

    type Mutation {
        addBook(title: String, price: Float, inStock: Boolean): Book
    }
`;

module.exports = schema;