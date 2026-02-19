const path = require("path");
const { app } = require("electron");

module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            filename: path.join(app.getPath("userData"), "checks.db")
        },
        useNullAsDefault: true,
        migrations: {
            directory: path.join(__dirname, "migrations")
        }
    }
};
