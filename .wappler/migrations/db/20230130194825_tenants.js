
exports.up = function(knex) {
  return knex.schema
    .createTable('tenants', async function (table) {
      table.increments('tenant_id');
      table.string('stripe_customer_id');
      table.string('stripe_subscription_id');
      table.string('stripe_subscription_status');
      table.string('tenant_name');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('tenants')
};
