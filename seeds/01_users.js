
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
        {id: 1, district_name: 'Central' ,district_introduction:'When people think of Hong Kong, most imagine movies with famous skyscrapers dominating the skyline. The area widely known as Central is the major financial hub and entertainment district'
        ,district_photo:'/central.jpeg'},
        {id: 2, district_name: 'Tsim Sha Tsui',district_introduction:'When people think of Hong Kong, most imagine movies with famous skyscrapers dominating the skyline. The area widely known as Central is the major financial hub and entertainment district'
        ,district_photo:'/central.jpeg'},
        {id: 3, district_name: 'Causeway Bay',district_introduction:'When people think of Hong Kong, most imagine movies with famous skyscrapers dominating the skyline. The area widely known as Central is the major financial hub and entertainment district'
        ,district_photo:'/central.jpeg'}
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
          attraction_name: 'PMQ',
          attraction_introduction: 'This historical building was recently transformed into a creative hub for local design talent.',
          attraction_photo:'/PMQ.jpeg'
        },
        {
          id: 2,
          district_id: 1,
          attraction_name: 'DingDing',
          attraction_introduction: 'Hong Kong Tramways witnessed the development of Hong Kong, and the tram remains an efficient and the most economical mode of public transport in Hong Kong',
          attraction_photo:'/dingding.jpeg'
        },
        {
          id: 3,
          district_id: 2,
          attraction_name: 'K11 Musea',
          attraction_introduction: 'With a name inspired by the Muses in Greek mythology.',
          attraction_photo:'/dingding.jpeg'
        },
        {
          id: 4,
          district_id: 3,
          attraction_name: 'IFC Mall',
          attraction_introduction: 'The International Finance Centre, abbreviated as IFC is a skyscraper and an integrated commercial development on the waterfront of Hong Kong Central District.',
          attraction_photo:'/dingding.jpeg'
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
