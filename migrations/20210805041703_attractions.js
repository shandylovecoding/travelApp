
exports.up = function(knex) {
  return knex.schema.createTable('attractions', (table) => {
    table.increments('id').primary();
    table.integer('district_id').unsigned();
    table.foreign('district_id').references('districts.id')
    table.string('name').unique();
    table.string('introduction');
    table.timestamps(false,true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('attractions');
};
