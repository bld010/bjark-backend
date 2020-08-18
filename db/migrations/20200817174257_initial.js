
exports.up = function(knex) {
  return knex.schema
    .createTable('owners', function(table) {
      table.increments('id').primary();
      table.string('name');

      table.timestamps(true,true);
    })
    .createTable('dogs', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('breed');
      table.integer('owner_id').unsigned();
      table.foreign('owner_id')
        .references('owners.id');
      
      table.timestamps(true,true);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('dogs')
    .dropTable('owners')
};