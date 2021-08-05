
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trip_planning').del()
    .then(function () {
      // Inserts seed entries
      return knex('trip_planning').insert([
        {id: 1, user_id: 1, collections: 'rowValue1'},
        {id: 2, user_id: 2, collections: 'rowValue2'},
        {id: 3, user_id: 3, collections: 'rowValue3'}
      ]);
    });
};