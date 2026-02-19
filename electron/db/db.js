const path = require("path");
const { app } = require("electron");
const knexConfig = require("./knex");

const runtimeDbPath = path.join(app.getPath("userData"), "checkify.db");

const knex = require("knex")({
    ...knexConfig.development,
    connection: { filename: runtimeDbPath }
});

module.exports = knex;
