const knex = require("../db/db.js");

const getAll = () => {
  return knex("users").select("*");
};

const get = () => {};

const getByNationalId = (national) => {
  return knex("users")
    .where({ "national-code": national })
    .select(["name", "family"]).first();
};

const create = async (data) => {
  try {
    return await knex("users").insert(data);
  } catch (err) {
    throw err;
  }
};

const update = () => {};

const remove = async (id) => {
  try {
    return await knex("users").where({ id }).del();
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAll,
  get,
  getByNationalId,
  create,
  update,
  remove,
};
