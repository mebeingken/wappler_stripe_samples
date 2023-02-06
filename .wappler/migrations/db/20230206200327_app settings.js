
exports.up = function(knex) {
  return knex.schema
    .createTable('app_settings', async function (table) {
      table.increments('app_setting_id');
      table.string('app_key');
      table.string('app_value');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('app_settings')
};
