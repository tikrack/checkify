const knex = require("../db/db.js")

const getAll = () => {
    return knex("checks").select("*");
}

const get = () => {}
const create = () => {}
const update = () => {}
const remove = () => {}

module.exports = {
    getAll,
    get,
    create,
    update,
    remove,
}