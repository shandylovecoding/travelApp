
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('journal').del()
    .then(function () {
      // Inserts seed entries
      return knex('journal').insert([
        {id: 1, user_id: 1, district_id: 1, content: 'Quite a crap trip', create_at: '05_08_21'},
        {id: 2, user_id: 2, district_id: 2, content: 'OK LA', create_at: '05_08_21'},
        {id: 3, user_id: 3, district_id: 3, content: 'Sometimes good, Sometimes Bad La', create_at: '05_08_21'}
        
      ]);
    });
};
