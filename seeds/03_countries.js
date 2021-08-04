
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('countries').del()
    .then(function () {
      // Inserts seed entries
      return knex('countries').insert([
        {id: 1, name: 'China', miscInfo: ''},
        {id: 2, name: 'Japan', miscInfo: ''},
        {id: 3, name: 'Amsterdam', miscInfo: ''}
      ]);
    });
};
