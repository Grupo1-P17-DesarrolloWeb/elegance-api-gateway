const userResolver = {
    Query: {
        userDetailById: async(_, {userId}, { dataSources, userIdToken }) => {
            if(userId == userIdToken)
                return await dataSources.authAPI.getUser(userId);
            else
                return null;
        }
    },
    Mutation: {
        signUpUser: async (_, {userInput}, { dataSources }) => {

            const authInput = {
                username : userInput.username,
                password : userInput.password,
                name     : userInput.name,
                email    : userInput.email 
            }
            return await dataSources.authAPI.createUser(authInput);
 
        },


        login: async(_, { credentials }, { dataSources }) => {
            return await dataSources.authAPI.authRequest(credentials);
        },

        refreshToken: async(_, { token }, { dataSources }) => {
            return await dataSources.authAPI.refreshToken(token);
        },

        updateUser:async(_, { user }, { dataSources, userIdToken }) => {
            if(user.id == userIdToken)
                return await dataSources.authAPI.updateUser(user);
            else
                return null;
        },
        deleteUser:async(_, { userId }, { dataSources, userIdToken }) => {
            if(userId == userIdToken) 
                return await dataSources.authAPI.deleteUser(userId);
            else
                return null;
        }
    }
};

module.exports = userResolver;