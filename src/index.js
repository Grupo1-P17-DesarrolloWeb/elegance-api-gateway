const { ApolloServer} = require('apollo-server');

const typeDefs       = require('./typeDefs');
const resolvers      = require('./resolvers');
const authentication = require('./utils/authentication');
const AuthAPI        = require('./dataSources/authAPI');
const RentsAPI       = require('./dataSources/rentsAPI');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        authAPI   : new AuthAPI(),
        rentsAPI  : new RentsAPI(),
    }),
    introspection: true,
    playground   : true
});

server.listen( process.env.PORT || 4000 ).then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
    }
); 