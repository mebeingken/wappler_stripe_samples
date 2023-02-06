
exports.up = function(knex) {
  return knex.schema
    .createTable('products', async function (table) {
      table.increments('product_id');
      table.string('stripe_id');
      table.boolean('stripe_active');
      table.string('stripe_name');
      table.string('stripe_description');
      table.string('offer_on_web');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('products')
};
