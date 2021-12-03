const authResolver      = require('./authResolver');
const rentResolver      = require('./rentResolver');
const inventoryResolver = require('./inventoryResolver');

const lodash            = require('lodash');
const resolvers         = lodash.merge(authResolver, rentResolver, inventoryResolver);
module.exports          = resolvers;