/**
 * @param { import("knex").Knex } knex
 * @returns { import("knex").Knex.SchemaBuilder }
 */
exports.up = function(knex) {
    return knex.schema.createTable("users", table => {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("family").notNullable();
        table.string("username").notNullable();
        table.string("password").notNullable();
        table.integer("phone", 11).notNullable();
        table.integer("national-code", 10).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { import("knex").Knex.SchemaBuilder }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("checks");
};
