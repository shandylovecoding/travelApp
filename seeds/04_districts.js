
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('districts').del()
    .then(function () {
      // Inserts seed entries
      return knex('districts').insert([
        {id: 1, name: 'Central'},
        {id: 2, name: 'Tsim Sha Tsui'},
        {id: 3, name: 'Causeway Bay'}
        
        
      ]);
    });
};
