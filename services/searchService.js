
class searchService {
    constructor(knex) {
      this.knex = knex
    }
  
    // List note is a function which is very important for the application, it retrieves the notes for a specific user. The user is accessed via req.auth.user within our router.
    list(title){
      console.log(3333);
      let query = this.knex
      .select("districts.id","districts.district_name","districts.district_introduction","districts.district_photo",
      "attractions.id as attraction_id","attractions.attraction_name","attractions.attraction_introduction","attractions.attraction_photo"
      ,"journals.content","users.username"
      )
      .from("districts")
      .innerJoin("attractions","districts.id","attractions.district_id")
      .innerJoin("journals","districts.id","journals.district_id")
      .innerJoin("users","users.id","journals.user_id")
      .innerJoin("trip_plan","users.id","trip_plan.user_id")
      .where("districts.district_name",'like', `%${title}%`)
      return  query.then((rows)=>{
       return rows.map((row)=>({
          id:row.id,
          name:row.district_name,
          introduction:row.district_introduction,
          photo:row.district_photo,
          att_id:row.attraction_id,
          att_name:row.attraction_name,
          att_intro:row.attraction_introduction,
          att_photo:row.attraction_photo,
          jour_content:row.content,
          trip_name:row.tripName

          
        })
        );
        });
    
    }

    listtrip(username){
      console.log(6);
      let query = this.knex
      .select("trip_plan.tripName","trip_plan.id","users.username")
      .from("users")
      .innerJoin("trip_plan_attraction","trip_plan.id","trip_plan_attraction.trip_plan_id")
      .innerJoin("trip_plan","users.id","trip_plan.user_id")
      .where("users.username", username)
     return query.then((rows)=>{
        return rows.map((row)=>({
        user_name:row.username,
        trip_name:row.tripName
        }))
      })
    }

}

module.exports = searchService;