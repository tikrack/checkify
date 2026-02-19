/**
 * @param { import("knex").Knex } knex
 * @returns { import("knex").Knex.SchemaBuilder }
 */
exports.up = function(knex) {
  return knex.schema.createTable("checks", table => {
    table.increments("id").primary();
    table.string("seyyad").notNullable();
    table.string("series").notNullable();
    table.string("serial").notNullable();
    table.float("amount").notNullable();
    table.date("date").notNullable();
    table.string("description").notNullable();
    table.string("status").notNullable().defaultTo("pending");
    table.integer("receiver_id").unsigned();

    table.foreign("receiver_id").references("id").inTable("users").onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { import("knex").Knex.SchemaBuilder }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("checks");
};
