/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // await knex('users').del()
  const admin = await knex('users').where({username: "admin"}).select("*");

  if (admin.length === 0) {
    await knex('users').insert([
      {
        id: 1,
        name: "علی",
        family: "گیاهی",
        username: "admin",
        password: "admin@1234",
        phone: "09130001122",
        "national-code": "1234567890"
      },
    ]);
  }
};
