let schema = `

    type Mobile {
        id: ID!,
        model: String
    }

    type OfficeChair {
        id: ID!,
        material: String
    }

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

    union MostViewed = Mobile | OfficeChair | Book

    type Query {
        books: [Book],
        booksWith4StarRatings: [Book],
        ebooks: [EBook],
        allItems: [Item],
        mostViewed: [MostViewed]
    }
`;

module.exports = schema;