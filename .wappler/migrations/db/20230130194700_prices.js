
exports.up = function(knex) {
  return knex.schema
    .createTable('prices', async function (table) {
      table.increments('price_id');
      table.string('stripe_id');
      table.string('stripe_active');
      table.string('stripe_currency');
      table.string('stripe_product_id');
      table.integer('product_id').unsigned();
      table.foreign('product_id').references('product_id').inTable('products').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('stripe_interval');
      table.integer('stripe_interval_count');
      table.string('stripe_type');
      table.integer('stripe_unit_amount');
      table.integer('unit_amount');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('prices')
};
