
exports.up = function(knex) {
  return knex.schema
    .createTable('stripe', function (table) {
      table.increments('id');
      table.string('result');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('stripe')
};
