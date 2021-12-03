const inventoryResolver = {
    Query: {
        inventoryById: async(_, {id},{dataSources})=>{
             return await dataSources.authAPI.inventoryById(id);

        }
    },
    Mutation: {
        createInventory: async(_, {inventory},{dataSources})=>{
            return await dataSources.authAPI.createInventory(inventory);

        },

        updateInventory: async(_, {inventory},{dataSources})=>{
            return await dataSources.authAPI.updateInventory(inventory);

        },
        
        deleteInventory: async(_, {id},{dataSources})=>{
            return await dataSources.authAPI.deleteInventory(id);
        }
    }
};

module.exports = inventoryResolver;