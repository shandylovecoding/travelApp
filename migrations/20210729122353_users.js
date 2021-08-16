exports.up = function(knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments().primary();
        table.string("email").unique();
        table.string("username");
        table.string("password");
        table.timestamps(false,true); 
})

    .createTable('districts', (table) => {
        table.increments('id').primary();
        table.string('district_name').unique();
        table.string('district_introduction',500).notNullable();
        table.binary('district_photo', 250).notNullable();
        table.timestamps(false,true); 
    })

     .createTable('attractions', (table) => {
        table.increments().primary();
        table.integer('district_id').unsigned();
        table.foreign('district_id').references('districts.id')
        table.string('attraction_name').unique();
        table.string('attraction_introduction');
        table.binary('attraction_photo', 250).notNullable();
        table.timestamps(false,true);
      })

      .createTable("trip_plan", (table) => {
        table.increments().primary();
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id');
        table.integer('attraction_id');
        table.foreign('attraction_id').references('attractions.id');
        table.string('tripName');
        table.string('tripInfo');
        table.timestamps(false,true);
    })
    .createTable("trip_plan_attraction", (table) => {
        table.increments().primary();
        table.integer('trip_plan_id');
        table.foreign('trip_plan_id').references('trip_plan.id');
        table.integer('attraction_id');
        table.foreign('attraction_id').references('attractions.id');
        table.timestamps(false,true);
    })
    .createTable('journals', (table) => {
        table.increments().primary();
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id');
        table.integer('district_id').unsigned();
        table.foreign('district_id').references('districts.id');
        table.string('content');
        table.binary('photos');
        table.timestamps(false,true) ;
      })
}

exports.down = function(knex) {
    return knex.schema.dropTable("journals")
    .dropTable("trip_plan_attraction")
    .dropTable("trip_plan")
    .dropTable("attractions")
    .dropTable("districts")
    .dropTable("users")
};