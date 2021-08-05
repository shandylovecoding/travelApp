
exports.up = function(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id').primary();
    table.integer('user_id').unsigned();
    table.foreign('user_id').refereces('users.id');
    table.integer('country_id').unsigned();
    table.foreign('country_id').references('countries.id');
    table.string('content');
    table.string('time_of_creation');
    table.timestamps(false,true) ;
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
