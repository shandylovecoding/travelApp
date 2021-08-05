
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tripPlan').del()
    .then(function () {
      // Inserts seed entries
      return knex('tripPlan').insert([
        {id: 1, user_id: 1, attraction_id: 1, trip_name: 'hk'},
        {id: 2, user_id: 2, attraction_id: 2, trip_name: 'hkdream'},
        {id: 3, user_id: 3, attraction_id: 3, trip_name: 'hkfun'}
      ]);
    });
};
