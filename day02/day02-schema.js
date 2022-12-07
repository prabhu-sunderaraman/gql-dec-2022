let schema = `

    type Ratings {
        oneStar: Int,
        twoStar: Int,
        threeStar: Int,
        fourStar: Int
    }

    type Book {
        id: ID!,
        title: String,
        price: Float,
        inStock: Boolean,
        ratings: Ratings
    }

    type Query {
        books: [Book],
        booksWith4StarRatings: [Book]
    }
`;

module.exports = schema;