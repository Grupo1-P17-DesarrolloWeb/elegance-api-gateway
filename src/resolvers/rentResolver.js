
const rentResolver = {
    Query: {
        rentByUsername: async(_, {username}, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            if(username == usernameToken)
                return await dataSources.rentsAPI.rentByUsername(username);
            else
                return null;
        }
    },

    Mutation: {
        createRent: async(_, {rent},{dataSources, userIdToken})=>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            if(rent.username == usernameToken)
                return await dataSources.rentsAPI.createRent(rent);
            else
                return null;
        },

        updateRent: async(_, {rent},{dataSources, userIdToken})=>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            if(rent.username == usernameToken)
                return await dataSources.rentsAPI.updateRent(rent);
            else
                return null;
        },
        
        deleteRent: async(_, {username},{dataSources, userIdToken})=>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username;
            if(username == usernameToken)
                return await dataSources.rentsAPI.deleteRent(username);
            else
                return null;
        }
    }
};

module.exports = rentResolver;