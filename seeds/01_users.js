
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
        }
        
      ]);
    })
    .then(()=>{
      return knex('districts').del();
    })
    .then(function () {
      // Inserts seed entries
      return knex('districts').insert([
        {id: 1, name: 'Central'},
        {id: 2, name: 'Tsim Sha Tsui'},
        {id: 3, name: 'Causeway Bay'}
      ]);
    })
    .then(()=>{
      return knex('attractions').del();
    })
    .then(function () {
      // Inserts seed entries
      return knex('attractions').insert([
        {
          id: 1,
          district_id: 1,
          name: 'Hong Kong Science Museum',
          introduction: 'The Hong Kong Science Museum is a science museum in Tsim Sha Tsui East, Kowloon, Hong Kong, located next to the Hong Kong Museum of History.'
        },
        {
          id: 2,
          district_id: 2,
          name: 'K11 Musea',
          introduction: 'With a name inspired by the Muses in Greek mythology.'
        },
        {
          id: 3,
          district_id: 3,
          name: 'IFC Mall',
          introduction: 'The International Finance Centre, abbreviated as IFC is a skyscraper and an integrated commercial development on the waterfront of Hong Kong Central District.'
        }
      ]);
    })
    .then(()=>{
      return knex('tripPlan').del();
    })
    .then(function () {
      // Inserts seed entries
      return knex('tripPlan').insert([
        {id: 1, user_id: 1, attraction_id: 1, tripName: 'hk'},
        {id: 2, user_id: 2, attraction_id: 2, tripName: 'hkdream'},
        {id: 3, user_id: 3, attraction_id: 3, tripName: 'hkfun'}
      ]);
    })
    .then(()=>{
      return knex('journals').del();
    })
    .then(function () {
      // Inserts seed entries
      return knex('journals').insert([
        {id: 1, user_id: 1, district_id: 1, content: 'Quite a crap trip', time_of_creation: '05_08_21'},
        {id: 2, user_id: 2, district_id: 2, content: 'OK LA', time_of_creation: '05_08_21'},
        {id: 3, user_id: 3, district_id: 3, content: 'Sometimes good, Sometimes Bad La', time_of_creation: '05_08_21'}   
      ]);
    }); 
};
