/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("checks", table => {
        table.increments("id").primary();
        table.string("series").notNullable(); // سری
        table.string("serial").notNullable(); // سریال
        table.float("amount").notNullable(); // مبلغ
        table.date("date").notNullable(); //تاریخ
        table.string("description").notNullable(); // توضیحات
        table.string("status").notNullable(); // وضعیت
        table.integer("receiver_id").unsigned(); // گیرنده

        table.foreign("receiver_id").references("id").inTable("users").onDelete("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function(knex) {
    return knex.schema.dropTable("checks");
};
