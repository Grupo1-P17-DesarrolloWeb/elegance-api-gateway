const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class rentsAPI extends RESTDataSource {
    constructor() {
    super();
    this.baseURL = serverConfig.rentAPIurl;
}

    async createRent(rent) {
        rent = new Object(JSON.parse(JSON.stringify(rent)));
        return await this.post('/rents', rent);
    }

    async deleteRent(username) {
        return await this.delete(`/rents/delete/${username}`);
        }

    async rentByUsername(username) {
        return await this.get(`/rents/${username}`);
    }

    async updateRent(rent){
        rent = new Object(JSON.parse(JSON.stringify(rent)));
        return await this.put('/rents/update', rent);
}

}

module.exports = rentsAPI;