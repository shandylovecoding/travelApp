
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          email: 'jack@gmail.com',
          username: 'jack1',
          password: 'jackpassword'
        },
        {
          id: 2,
          email: 'josh@gmail.com',
          username: 'josh1',
          password: 'joshpassword'
        },
        {
          id: 3,
          email: 'john@gmail.com',
          username: 'john1',
          password: 'johnpassword'
        },
        
      ]);
    });
};
