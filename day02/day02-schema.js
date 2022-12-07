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

    input AddRatingsInput {
        oneStar: Int = 0,
        twoStar: Int = 0,
        threeStar: Int = 0,
        fourStar: Int = 0,
    }
    input AddBookInput {
        title: String!,
        price: Float!,
        inStock: Boolean! = true,
        ratings: AddRatingsInput
    }

    type Query {
        books: [Book],
        booksWith4StarRatings: [Book],
        ebooks: [EBook],
        allItems: [Item],
        mostViewed: [MostViewed]
    }

    type Mutation {
        addMobile(model: String): Mobile,
        updateBookPrice(bookId: ID, price: Float): Book,
        removeOfficeChair(officeChairId: ID): OfficeChair,
        addBook(addBookInput: AddBookInput): Book
    }
`;

module.exports = schema;