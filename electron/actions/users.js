const knex = require("../db/db.js")

const getAll = () => {
    return knex("users").select("*");
}

const get = () => {}

const create = async (data) => {
    try {
        return await knex("users").insert(data);
    } catch (err) {
        throw err;
    }
};

const update = () => {}

const remove = async (id) => {
  try {
    return await knex("users").where({id}).del();
  } catch (err) {
    throw err;
  }
}

module.exports = {
    getAll,
    get,
    create,
    update,
    remove,
}