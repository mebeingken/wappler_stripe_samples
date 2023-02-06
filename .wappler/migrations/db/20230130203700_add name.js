
exports.up = function(knex) {
  return knex.schema
    .table('tenants', async function (table) {
      table.string('owner_first_name');
      table.string('owner_last_name');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('tenants', async function (table) {
      table.dropColumn('owner_first_name');
      table.dropColumn('owner_last_name');
    })
};
