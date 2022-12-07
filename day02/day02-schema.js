let schema = `

    type Ratings {
        oneStar: Int,
        twoStar: Int,
        threeStar: Int,
        fourStar: Int
    }

    type EBook {
        id: ID!,
        title: String,
        price: Float,
        ratings: Ratings,
        kindleUnlimited: Boolean
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
        booksWith4StarRatings: [Book],
        ebooks: [EBook]
    }
`;

module.exports = schema;