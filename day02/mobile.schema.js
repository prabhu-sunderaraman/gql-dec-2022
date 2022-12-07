let schema = `
    type Mobile {
        id: ID!,
        model: String
    }

    type Query {
        mobiles: [Mobile]
    }

`;
module.exports = schema;