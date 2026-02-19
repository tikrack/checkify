const knexConfig = require("./knex");
const knex = require("knex")(knexConfig.development);

module.exports = knex;
