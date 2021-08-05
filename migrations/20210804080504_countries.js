
exports.up = function(knex) {
    return knex.schema.createTable('countries', (table) => {
        table.increments('id').primary();
        table.string('name').unique();
        table.timestamps(false,true); 

    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('countries');
};
