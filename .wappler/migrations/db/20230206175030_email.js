
exports.up = function(knex) {
  return knex.schema
    .table('tenants', async function (table) {
      table.string('owner_email');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('tenants', async function (table) {
      table.dropColumn('owner_email');
    })
};
