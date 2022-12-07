let db = {
    mobiles: [
        { id: "m101", model: "OnePlus13" },
        { id: "m102", model: "Oppo" }
    ],
    officeChairs: [
        { id: "oc101", material: "Cushion" },
        { id: "oc102", material: "Pushback" }
    ],
    books: [
        { id: "b101", title: "ABC", price: 12.34, inStock: true, ratings: { oneStar: 10, twoStar: 5, threeStar: 18, fourStar: 100 } },
        { id: "b102", title: "DEF", price: 112.34, inStock: true, ratings: { oneStar: 210, twoStar: 335, threeStar: 128, fourStar: 1200 }  },
        { id: "b103", title: "GHI", price: 42.134, inStock: false, ratings: { oneStar: 110, twoStar: 15, threeStar: 1, fourStar: 10 }  },
        { id: "b104", title: "JKL", price: 10.34, inStock: true, ratings: { oneStar: 1870, twoStar: 598, threeStar: 1118, fourStar: 1100 }  },
        { id: "b105", title: "MNO", price: 101.34, inStock: false, ratings: { oneStar: 110, twoStar: 15, threeStar: 0, fourStar: 0 }  }
    ],
    ebooks: [
        { id: "eb101", title: "E-ABC", price: 12.34, ratings: { oneStar: 10, twoStar: 5, threeStar: 18, fourStar: 100 }, kindleUnlimited: true },
        { id: "eb102", title: "E-DEF", price: 112.34, ratings: { oneStar: 210, twoStar: 335, threeStar: 128, fourStar: 1200 }, kindleUnlimited: true  },
        { id: "eb103", title: "E-GHI", price: 42.134, ratings: { oneStar: 110, twoStar: 15, threeStar: 1, fourStar: 10 }, kindleUnlimited: false  },
        { id: "eb104", title: "E-JKL", price: 10.34, ratings: { oneStar: 1870, twoStar: 598, threeStar: 1118, fourStar: 1100 }, kindleUnlimited: true  },
        { id: "eb105", title: "E-MNO", price: 101.34, ratings: { oneStar: 110, twoStar: 15, threeStar: 0, fourStar: 0 }, kindleUnlimited: true  }
    ]
};

let resolvers = {
    MostViewed: {
        __resolveType: (obj) => {
            if(obj.inStock !== undefined) {
                return "Book";
            } else if(obj.material !== undefined) {
                return "OfficeChair";
            } else if(obj.model !== undefined) {
                return "Mobile";
            }
            return null;
        }
    },
    Item: {
        __resolveType: (obj) => {
            if(obj.inStock !== undefined) {
                return "Book";
            } else if(obj.kindleUnlimited !== undefined) {
                return "EBook";
            }
            return null;
        }
    },
    Query: {
        books: () => db.books,
        booksWith4StarRatings: () => {
            return db.books.filter(book => book.ratings.fourStar > 0)
        },
        ebooks: () => db.ebooks,
        allItems: () => db.books.concat(db.ebooks),
        mostViewed: () => {
            let items = [db.books[1], db.officeChairs[1], db.mobiles[1]]
            return items;
        }
    }
};

module.exports = resolvers;