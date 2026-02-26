const knex = require("../db/db.js");

const loginWithCredential = async (data) => {
  const user = await knex("users").where({
    username: data.username,
    password: data.password,
  }).select("*");

  if (user?.length === 0 || !user) {
    return {
      success: false,
      data: null
    }
  }

  return {
    success: true,
    data: user
  }
};

module.exports = {
  loginWithCredential,
};
