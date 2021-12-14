const { gql } = require('apollo-server');
const inventoryTypeDefs = gql `

type Inventory {
    id              : String!
    reference_suit  : String!
    color           : String!
    price_rent      : String!
    is_available    : Boolean!
    link_img        : String
}

input inventoryInput{
    reference_suit  : String!
    color           : String!
    price_rent      : String!
    is_available    : Boolean!
    link_img        : String
}

input inventoryUpdate{
    id              : Int!
    reference_suit  : String!
    color           : String!
    price_rent      : Int!
    is_available    : Boolean!
    link_img        : String!
}


type Query {
    inventoryById(id: Int!): Inventory!
    inventoryByAvailable(is_available: Boolean!): [Inventory]
    inventoryByColor(color: String!): [Inventory]
    inventoryByPrice(price: Int!): [Inventory]
}
type Mutation {
    createInventory(inventory  :inventoryInput!)  : Inventory
    updateInventory(inventory  :inventoryUpdate!) : Inventory
    deleteInventory(id         :Int!)          : String!
}
`;
module.exports = inventoryTypeDefs;