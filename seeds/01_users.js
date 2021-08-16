
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('districts').del()
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
          district_id: 1,
          attraction_name: 'Western Market',
          attraction_introduction: ' Inside this Edwardian-style building, see fabric stores, bakeries and dessert shops, cafés and souvenir shops',
          attraction_photo:'/westernmarket.jpeg'
        },
        {
          id: 4,
          district_id: 1,
          attraction_name: 'Mid-levels Escalator',
          attraction_introduction: 'Walk to the base of the Central Escalators (also called the Mid-Levels Escalators), the world’s longest outdoor escalator system, covering a distance of nearly 2,600 feet.',
          attraction_photo:'/midlevelEscalator.jpeg'
        },
        {
          id: 5,
          district_id: 2,
          attraction_name: 'K11 Musea',
          attraction_introduction: 'With a name inspired by the Muses in Greek mythology.',
          attraction_photo:'/dingding.jpeg'
        },
        {
          id: 6,
          district_id: 3,
          attraction_name: 'IFC Mall',
          attraction_introduction: 'The International Finance Centre, abbreviated as IFC is a skyscraper and an integrated commercial development on the waterfront of Hong Kong Central District.',
          attraction_photo:'/dingding.jpeg'
        }
      ]);
    })

};
