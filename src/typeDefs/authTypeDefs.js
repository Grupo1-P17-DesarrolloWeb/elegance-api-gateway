const { gql }      = require('apollo-server');
const authTypeDefs = gql `

type Tokens {
    refresh : String!
    access  : String!
}

type Access {
    access  : String!
}

input CredentialsInput {
    username: String!
    password: String!
}

input Refresh {
    refresh:String!
}

input SignUpInput {
    username: String!
    password: String!
    name    : String!
    email   : String!
}

type UserDetail {
    id      : Int
    name    : String!
}

input userUpdate {
    id      : Int!
    username: String!
    name    : String!
    password: String!
    email   : String!
    }

type Mutation {
    signUpUser  (userInput      : SignUpInput)      : Tokens!
    login       (credentials    : CredentialsInput!): Tokens!
    refreshToken(token          : Refresh!)         : Access!
    updateUser  (user           : userUpdate!)      : UserDetail!
    deleteUser  (userId         : Int!)             : String!
}

type Query {
    userDetailById(userId: Int!): UserDetail!
}
`;
module.exports = authTypeDefs;