
exports.up = function(knex) {
  return knex.schema
    .createTable('products', function (table) {
      table.increments('id');
      table.decimal('amount');
      table.string('stock_id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('products')
};
