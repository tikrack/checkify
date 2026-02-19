/**
 * @param { import("knex").Knex } knex
 * @returns { import("knex").Knex.SchemaBuilder }
 */
exports.up = function(knex) {
  return knex.schema.createTable("checks", table => {
    table.increments("id").primary();
    table.string("name").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { import("knex").Knex.SchemaBuilder }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("checks");
};
