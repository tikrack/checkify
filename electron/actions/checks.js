const knex = require("../db/db.js");

const getAll = () => {
  return knex("checks").select("*");
};

const issue = async (data) => {
  try {
    const receiver = knex("users").where({"national-code": data?.["national-code"]}).first();

    return await knex("checks").insert({
      "receiver_id": receiver?.id,
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
