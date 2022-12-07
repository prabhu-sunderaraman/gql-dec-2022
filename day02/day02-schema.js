let schema = `

    type Ratings {
        oneStar: Int,
        twoStar: Int,
        threeStar: Int,
        fourStar: Int
    }

    interface Item {
        id: ID!,
        title: String,
        price: Float,
        ratings: Ratings
    }

    type EBook implements Item {
        id: ID!,
        title: String,
        price: Float,
        ratings: Ratings,
        kindleUnlimited: Boolean
    }

    type Book implements Item {
        id: ID!,
        title: String,
        price: Float,
        inStock: Boolean,
        ratings: Ratings
    }

    type Query {
        books: [Book],
        booksWith4StarRatings: [Book],
        ebooks: [EBook],
        allItems: [Item]
    }
`;

module.exports = schema;