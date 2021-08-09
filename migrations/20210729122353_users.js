exports.up = function(knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments().primary();
        table.string("email").unique();
        table.string("username");
        table.string("password");
        table.timestamps(false,true); 
})

    .createTable('districts', (table) => {
        table.increments().primary();
        table.string('name').unique();
        table.timestamps(false,true); 
    })

     .createTable('attractions', (table) => {
        table.increments().primary();
        table.integer('district_id').unsigned();
        table.foreign('district_id').references('districts.id')
        table.string('name').unique();
        table.string('introduction');
        table.timestamps(false,true);
      })
      .createTable("tripPlan", (table) => {
        table.increments().primary();
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id');
        table.integer('attraction_id');
        table.foreign('attraction_id').references('attractions.id');
        table.string('tripName');
        table.timestamps(false,true);
    })
    .createTable('journals', (table) => {
        table.increments().primary();
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id');
        table.integer('district_id').unsigned();
        table.foreign('district_id').references('districts.id');
        table.string('content');
        table.string('time_of_creation');
        table.timestamps(false,true) ;
      })
}

exports.down = function(knex) {
    return knex.schema.dropTable("journals")
    .dropTable("tripPlan")
    .dropTable("attractions")
    .dropTable("districts")
    .dropTable("users")
};
