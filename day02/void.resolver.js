const {GraphQLScalarType} = require("graphql")

const VoidResolver = {
    'Void': new GraphQLScalarType({
        name: "Void",
        parseLiteral() {
            return null
        },
        parseValue() {
            return null
        },
        serialize() {
            return null
        }
    })
};
module.exports = VoidResolver;