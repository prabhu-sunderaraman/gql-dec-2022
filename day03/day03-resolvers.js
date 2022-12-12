let resolvers = {
    Query: {
        hello: (src, {name}, context) => {
            return context.dataSources.helloApi.greet(name);
        }
    }
};

module.exports = resolvers;