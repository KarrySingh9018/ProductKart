'use strict';
const mongodbURI = process.env.MONGO_URI || 'mongodb://localhost/manager_online_products';
module.exports = {
    mongodbURI
};