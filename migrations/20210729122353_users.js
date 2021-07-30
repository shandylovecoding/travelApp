exports.up = function(knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments('id').primary();
        table.string("email").unique();
        table.string("username")
        table.string("password");
        table.timestamps(false,true) 
})
}

exports.down = function(knex) {
    return knex.schema.dropTable("users");
};
