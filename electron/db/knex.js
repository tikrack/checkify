const path = require("path");
const { app } = require("electron");

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    migrations: {
      directory: path.join(__dirname, "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "seeds"),
    },
  },
};
