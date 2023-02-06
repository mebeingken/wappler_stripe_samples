
exports.up = function(knex) {
  return knex.schema
    .table('products', async function (table) {
      table.dropColumn('offer_on_web');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('products', async function (table) {
      table.string('offer_on_web', 255);
    })
};
