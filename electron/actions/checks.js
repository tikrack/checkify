const knex = require("../db/db.js")

const getAll = () => {
    return knex("checks").select("*");
}

module.exports = {
    getAll,
}