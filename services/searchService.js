
class searchService {
  constructor(knex) {
    this.knex = knex
  }

  // List note is a function which is very important for the application, it retrieves the notes for a specific user. The user is accessed via req.auth.user within our router.
  listdistrict(title) {
    let query = this.knex
      .select("districts.id", "districts.district_name", "districts.district_introduction", "districts.district_photo")
      .from("districts")
      .where("districts.district_name", 'like', `%${title}%`)
    return query.then((rows) => {
      return rows.map((row) => ({
        id: row.id,
        name: row.district_name,
        introduction: row.district_introduction,
        photo: row.district_photo,
      })
      );
    });

  }
  listattraction(title) {
    let query = this.knex
      .select("attractions.id as attraction_id", "attractions.attraction_name", "attractions.attraction_introduction", "attractions.attraction_photo")
      .from("districts")
      .innerJoin("attractions", "districts.id", "attractions.district_id")
      .where("districts.district_name",'like', `%${title}%`)

    return query.then((rows) => {
      return rows.map((row) => ({
        att_id: row.attraction_id,
        att_name: row.attraction_name,
        att_intro: row.attraction_introduction,
        att_photo: row.attraction_photo,
      }))
    })
  }



  listtrip(username) {
    let query = this.knex
      .select("trip_plan.tripName", "trip_plan.id", "users.username")
      .from("trip_plan")
      .innerJoin("users", "users.id", "trip_plan.user_id")
      .where("users.username", username)
    return query.then((rows) => {
      return rows.map((row) => ({
        trip_id: row.id,
        trip_name: row.tripName,
        user_name: row.username,
      }))
    })
  }

  listjournal(title) {
    let query = this.knex
      .select("journals.content", "users.username","journals.photos")
      .from("journals")
      .innerJoin("districts", "districts.id", "journals.district_id")
      .innerJoin("users", "users.id", "journals.user_id")
      .where("districts.district_name",'like', `%${title}%`)

    return query.then((rows) => {
      return rows.map((row) => {
        if (row.photos) {
          var base = Buffer.from(row.photos);
          var photo = base.toString('base64');
      }return{
        jour_content: row.content,
        user_name: row.username,
        jour_photo: photo,
      }
      })
    })
    
  }

  checkAttraction(userId) {
    console.log("Now checking attraction..")
    let query = this.knex
      .select("trip_plan_attraction.attraction_id")
      .from("trip_plan_attraction")
      .innerJoin("trip_plan", "trip_plan_attraction.trip_plan_id", "trip_plan.id")
      .where("trip_plan.user_id",userId)
      return query.then((rows) => {
        return rows.map((row) => 
          row.attraction_id,
        )
      })
}

}

module.exports = searchService;