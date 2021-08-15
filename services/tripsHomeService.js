class tripsHomeService {
  constructor(knex) {
    this.knex = knex
  }
  list(user_id) {
    console.log("user_id",user_id);
    let query = this.knex
      .select("trip_plan.id", "trip_plan.tripName", "trip_plan.tripInfo")
      .from("trip_plan")
      .innerJoin("users","users.id","trip_plan.user_id")
      .where("users.id",user_id)

    return query.then((rows) => {
      console.log("owsowsowsowsows",rows);
      return rows.map((row) => ({
        id: row.id,
        name: row.tripName,
        description: row.tripInfo,
      }));

    });
    
  }
  listtrip(username) {
    console.log(6);
    let query = this.knex
      .select("trip_plan.tripName","trip_plan.tripInfo", "trip_plan.id", "users.username")
      .from("trip_plan")
      .innerJoin("users", "users.id", "trip_plan.user_id")
      .where("users.username", username)
    return query.then((rows) => {
      console.log(rows);
      return rows.map((row) => ({
        trip_id: row.id,
        trip_name: row.tripName,
        trip_info: row.tripInfo,
        user_name: row.username,
      }))
    })
  }

  listAttractions(trip_plan_id) {
    let query = this.knex.select("attractions.attraction_name", "attractions.attraction_introduction", "attractions.attraction_photo", "trip_plan_attraction.attraction_id", "trip_plan_attraction.trip_plan_id")
      .from("attractions")
      .innerJoin("trip_plan_attraction", "attractions.id", "trip_plan_attraction.attraction_id")
      .innerJoin("trip_plan", "trip_plan_attraction.trip_plan_id", "trip_plan.id")
      .where("trip_plan.id", trip_plan_id)
  
    return query.then((rows) => {
      console.log("rows >> ", rows)
      return rows.map((row) => (
        {
          attraction_name: row.attraction_name,
          attraction_introduction: row.attraction_introduction,
          attraction_photo: row.attraction_photo,
          ids: [row.trip_plan_id, row.attraction_id]
          
        }
      ))
    })
  }

  async addTrip(user_id, tripName, tripInfo) {
    var newTrip = {
      user_id: user_id,
      tripName: tripName,
      tripInfo: tripInfo
    }
    var newTripID = await this.knex.insert(newTrip).into("trip_plan").returning('id');
    console.log(newTripID);
    newTrip.id = newTripID;

  }

  checkAttraction(trip_id, att_id) {
    console.log("Now checking attraction..")
    let query = this.knex
      .select("trip_plan_attraction.attraction_id")
      .from("trip_plan_attraction")
      .where("trip_plan_attraction.trip_plan_id",trip_id)
      .where("trip_plan_attraction.attraction_id", att_id)
      return query.then((rows) => {
        console.log("checkAttractionrow",rows);
      if(rows.length < 1 ){
        return false
      }else if (rows.map((row)=>{
        console.log("row.attraction_id",row.attraction_id);
        row.attraction_id == att_id
      })){
        return true
      }
      })
}
  async addAttractions(trip_id, attraction_id) {
   
    const newAttr = {
      attraction_id: attraction_id,
      trip_plan_id: trip_id,
    }

    let newAttrId = await this.knex.insert(newAttr).into("trip_plan_attraction").returning("id");
    console.log(newAttrId);
    newAttr.id = newAttrId[0]

  }
  removeTrip(trip_plan_id) {
    return this.knex("trip_plan_attraction").where("trip_plan_id", trip_plan_id).del().then(() => {
      return this.knex("trip_plan").where("id", trip_plan_id).del();
    })
  }
  removeAttraction(trip_plan_id, attraction_id) {
    return this.knex("trip_plan_attraction").where({
      trip_plan_id: trip_plan_id,
      attraction_id: attraction_id
    }).del();

  }
}
module.exports = tripsHomeService;