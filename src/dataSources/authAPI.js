const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class AuthAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.inventoryAPIurl;
}

async createUser(user) {
    user = new Object(JSON.parse(JSON.stringify(user)));
    return await this.post(`/user/`, user);
}
async getUser(userId) {
    return await this.get(`/user/${userId}/`);
}
async updateUser(user) {
    user = new Object(JSON.parse(JSON.stringify(user)));
    let userId = user.id
    return await this.put(`/user/update/${userId}/`,user);
}
async deleteUser(userId) {
    return await this.delete(`/user/remove/${userId}/`);
}

async authRequest(credentials) {
    credentials = new Object(credentials);
    return await this.post(`/login/`, credentials);
}   
async refreshToken(token) {
    token = new Object( token );
    return await this.post('/refresh/', token);
}


async createInventory(inventory) {
    inventory = new Object(JSON.parse(JSON.stringify(inventory)));
    return await this.post('/inventory/', inventory);
}

async deleteInventory(id)  {
    return await this.delete(`/inventory/remove/${id}`);
    }
    
async inventoryById(id) {
    return await this.get(`/inventory/${id}`);
}

async inventoryByAvailable(is_available) {
    return await this.get(`/inventory/byAvailable/${is_available}`);
}

async inventoryByColor(color) {
    return await this.get(`/inventory/byColor/${color}`);
}

async inventoryByPrice(price) {
    return await this.get(`/inventory/byPrice/${price}`);
}

async updateInventory(inventory) {
    inventory = new Object(JSON.parse(JSON.stringify(inventory)));
    return await this.put(`/inventory/update/${inventory.id}`, inventory);
}
}

module.exports = AuthAPI;