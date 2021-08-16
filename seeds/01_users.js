exports.seed = function (knex) {
  // Deletes ALL existing entries
 
      return knex('districts').del()
    .then(function () {
      // Inserts seed entries
      return knex('districts').insert([
        {id: 1, district_name: 'Central' ,district_introduction:'When people think of Hong Kong, most imagine movies with famous skyscrapers dominating the skyline. The area widely known as Central is the major financial hub and entertainment district'
        ,district_photo:'/central.jpeg'},
        {id: 2, district_name: 'Tsim Sha Tsui',district_introduction:'Tsim Sha Tsui is one of the major tourist and shopping areas of Hong Kong. With a high concentration of hotels, retail shops and commercial offices'
        ,district_photo:'/tsimshatsui.jpeg'},
        {id: 3, district_name: 'Causeway Bay',district_introduction:'When people think of Hong Kong, most imagine movies with famous skyscrapers dominating the skyline. The area widely known as Central is the major financial hub and entertainment district'
        ,district_photo:'/causewaybay.jpeg'}
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
          attraction_photo:'/k11musea.jpeg'
        },
        {
          id: 6,
          district_id: 2,
          attraction_name: 'Victoria Harbour',
          attraction_introduction: 'The harbour is a major tourist attraction of Hong Kong. Lying in the middle of the territory`s dense urban region, the harbour is the site of annual fireworks displays and its promenades are used as gathering places for tourists and residents.',
          attraction_photo:'/harbour.jpeg'
        },
        {
          id: 7,
          district_id: 2,
          attraction_name: 'Star Ferry',
          attraction_introduction: 'Head over to Kowloon on the must do Star Ferry ride seeing the beautiful Victoria Harbour.',
          attraction_photo:'/starferry.jpeg'
        },
        {
          id: 8,
          district_id: 2,
          attraction_name: 'Avenue of the Stars',
          attraction_introduction: 'Avenue of Stars has a well AR App for me to interact with the Hong Kong famous actor and actress such as Bruce Lee',
          attraction_photo:'/avenueofstars.jpeg'
        },
        {
          id: 9,
          district_id: 3,
          attraction_name: 'IFC Mall',
          attraction_introduction: 'The International Finance Centre, abbreviated as IFC is a skyscraper and an integrated commercial development on the waterfront of Hong Kong Central District.',
          attraction_photo:'/dingding.jpeg'
        }
      ]);
    })
   
    
    
<<<<<<< HEAD
};
=======
};
>>>>>>> 02a37d3385ae8502967b0ef1d908d95c542947a3
