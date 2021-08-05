
exports.up = function(knex) {
  return knex.schema.createTable("tripPlan", (table) => {
      table.increments('id').primary();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id');
      table.integer('attraction_id');
      table.foreign('attraction_id').references('attractions.id');
      table.string('tripName');
      table.timestamps(false,true);
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable("tripPlan");
};
