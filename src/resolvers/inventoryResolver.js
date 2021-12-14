const inventoryResolver = {
    Query: {
        inventoryById: async(_, {id},{dataSources})=>{
             return await dataSources.authAPI.inventoryById(id);

        },
        inventoryByAvailable: async(_, {is_available},{dataSources})=>{
            return await dataSources.authAPI.inventoryByAvailable(is_available);

        },
        inventoryByColor: async(_, {color},{dataSources})=>{
            return await dataSources.authAPI.inventoryByColor(color);
        },
        inventoryByPrice: async(_, {price},{dataSources})=>{
            return await dataSources.authAPI.inventoryByPrice(price);
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