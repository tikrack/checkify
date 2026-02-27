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

const get = async (data) => {
  try {
    const check = await knex("checks")
      .where({ seyyad: data?.seyyad })
      .select("*");

    if (check.length !== 0 && check[0]["receiver-id"] === data.userId) {
      return {
        success: true,
        data: check[0],
      };
    } else {
      return {
        success: false,
        data: null,
      };
    }
  } catch (err) {
    throw err;
  }
};

const accept = async (seyyad) => {
  try {
    const check = await knex("checks")
      .where({ seyyad })
      .select("*");

    if (check.length === 0) {
      return {
        success: false,
        message: "چک یافت نشد"
      };
    }

    if (check[0].status !== "pending") {
      return {
        success: false,
        message: "این چک قبلاً پردازش شده است"
      };
    }

    await knex("checks")
      .where({ seyyad })
      .update({
        status: "accepted",
      });

    return {
      success: true,
      message: "چک با موفقیت تایید شد"
    };

  } catch (err) {
    throw err;
  }
};

const reject = async (seyyad) => {
  try {
    const check = await knex("checks")
      .where({ seyyad })
      .select("*");

    if (check.length === 0) {
      return {
        success: false,
        message: "چک یافت نشد"
      };
    }

    if (check[0].status !== "pending") {
      return {
        success: false,
        message: "این چک قبلاً پردازش شده است"
      };
    }

    await knex("checks")
      .where({ seyyad })
      .update({
        status: "rejected",
      });

    return {
      success: true,
      message: "چک با موفقیت رد شد"
    };

  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAll,
  issue,
  get,
  accept,
  reject,
};
