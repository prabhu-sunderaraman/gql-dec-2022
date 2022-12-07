let db = {
    mobiles: [
        { id: "m101", model: "OnePlus13" },
        { id: "m102", model: "Oppo" }
    ]
};

let resolvers = {
    Query: {
        mobiles: () => db.mobiles
    }
};

module.exports = resolvers;