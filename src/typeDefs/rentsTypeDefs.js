const { gql } = require('apollo-server');
const rentTypeDefs = gql `

type Rent {
    username           : String!
    idtraje            : String!
    totaladeudado      : Int!
    address            : String!
}
type RentDetail {
    username : String! 
    idtraje : String!
    totaladeudado : Int!
    address : String!
}
input rentInput{
    username           : String!
    idtraje            : String!
    totaladeudado      : Int!
    address            : String!
}

input rentUpdate{
    username           : String!
    address            : String!
}

type Query {
    rentByUsername(username: String!): Rent!
}
type Mutation {
    createRent(rent    :rentInput!)       : RentDetail!
    updateRent(rent    :rentUpdate!)      : Rent!
    deleteRent(username: String!)         : String!
}
`;
module.exports = rentTypeDefs;