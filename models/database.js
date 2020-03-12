const promise = require('bluebird');

//init options

let initOptions = {
    promiseLib: promise
};

let config = {
    host: 'localhost',
    port: 5432,
    database: '[insert database name]',
    user: 'postgres'
};

let pgp = require('pg-promise')(initOptions);

let db = pgp(config);

module.exports = db;