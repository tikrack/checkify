const path = require("path");
const { app } = require("electron");
const knexConfig = require("./knex");

const runtimeDbPath = path.join(app.getPath("userData"), "checks.db");

const knex = require("knex")({
    ...knexConfig.development,
    connection: { filename: runtimeDbPath }
});

module.exports = knex;
