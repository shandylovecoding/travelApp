
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {post_id: 1, user_id: 1, country_id: 1, content: 'rowValue1'},
        {post_id: 1, user_id: 2, country_id: 1, content: 'rowValue1'},
        {post_id: 1, user_id: 3, country_id: 1, content: 'rowValue1'},
        
      ]);
    });
};
