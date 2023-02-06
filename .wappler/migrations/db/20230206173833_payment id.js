
exports.up = function(knex) {
  return knex.schema
    .table('tenants', async function (table) {
      table.string('stripe_payment_id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('tenants', async function (table) {
      table.dropColumn('stripe_payment_id');
    })
};
