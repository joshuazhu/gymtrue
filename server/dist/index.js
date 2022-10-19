const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = requir ("@apollo/server/standalone");
const typeDefs = `#graphql
    type Book {
        title: String
        author: String
    }

    type Query {
        books: [Book]
    }
`;
const books = [
    {
        title: "The Awakening",
        author: "Kate",
    },
    {
        title: "City of Glass",
        author: "Paul",
    },
];
const resolvers = {
    Query: {
        books: () => books,
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
