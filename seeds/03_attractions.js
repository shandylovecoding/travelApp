
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('attractions').del()
    .then(function () {
      // Inserts seed entries
      return knex('attractions').insert([
        {
          id: 1,
          dictrict_id: 1,
          name: 'Hong Kong Science Museum',
          introduction: 'The Hong Kong Science Museum is a science museum in Tsim Sha Tsui East, Kowloon, Hong Kong, located next to the Hong Kong Museum of History.'
        },
        {
          id: 2,
          dictrict_id: 2,
          name: 'K11 Musea',
          introduction: 'With a name inspired by the Muses in Greek mythology, K11 MUSEA aspires to enrich your daily life through the power of creativity, culture and innovation. Located in the heart of the Victoria Dockside art and cultural district, this world-class experiential landmark brings in immersive experiences in retail, art, culture, entertainment and gastronomy, all under one roof.'
        },
        {
          id: 3,
          dictrict_id: 3,
          name: 'IFC Mall',
          introduction: 'The International Finance Centre, abbreviated as IFC is a skyscraper and an integrated commercial development on the waterfront of Hong Kong Central District.'
        }
      ]);
    });
};
