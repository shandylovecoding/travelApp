
exports.up = function(knex) {
  return knex.schema.createTable("trip_planning", (table) => {
      table.increments('id').primary();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id');
      table.timestamps(false,true);
      
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable("trip_planning");
};
