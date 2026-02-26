const knex = require("../db/db.js");

const getAll = () => {
  return knex("checks")
    .leftJoin("users", "checks.receiver-id", "users.id")
    .select(
      "checks.*",
      "users.name as receiver-name",
      "users.family as receiver-family",
      "users.national-code as receiver-national-code",
    );
};

const issue = async (data) => {
  try {
    const receiver = await knex("users")
      .where({ "national-code": data?.["national-code"] })
      .select("*")
      .first();

    return await knex("checks").insert({
      "receiver-id": receiver?.id,
      seyyad: data.seyyad,
      series: data.series,
      serial: data.serial,
      amount: data.amount,
      date: data.date,
      description: data.description,
      status: "pending",
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAll,
  issue,
};
