/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("checks", table => {
        table.increments("id").primary();
        table.string("series").notNullable();
        table.string("serial").notNullable();
        table.date("date").notNullable();
        table.float("amount").notNullable();
        table.string("status").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function(knex) {
    return knex.schema.dropTable("checks");
};
