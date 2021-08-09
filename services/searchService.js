
class searchService {
    constructor(knex) {
      this.knex = knex
    }
  
    // List note is a function which is very important for the application, it retrieves the notes for a specific user. The user is accessed via req.auth.user within our router.
    list(title){
      console.log(3);
      let query = this.knex
      .select("districts.id","districts.district_name","districts.district_introduction","districts.district_photo","attractions.attraction_name","attractions.attraction_introduction","attractions.attraction_photo")
      .from("districts")
      .innerJoin("attractions","districts.id","attractions.district_id")
      .where("districts.district_name",'like', `%${title}%`)
      return query.then((rows)=>{
        console.log("rows",rows);
       return rows.map((row)=>({
          id:row.id,
          name:row.district_name,
          introduction:row.district_introduction,
          photo:row.district_photo,
          att_name:row.attraction_name,
          att_intro:row.attraction_introduction,
          att_photo:row.attraction_photo
        }
        ));
       
        });
    }
}

module.exports = searchService;