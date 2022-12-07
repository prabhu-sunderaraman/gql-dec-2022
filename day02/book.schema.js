let schema = `

    scalar Void

    type Book {
        id: ID!,
        title: String,
        price: Float,
        inStock: Boolean
    }

    type Query {
        books: [Book]
    }

    type Mutation {
        removeBook(title: String!): Void
    }


`;
module.exports = schema;