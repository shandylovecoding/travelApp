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

  // async addAttractions(trip_name, attraction_id) {
  //   console.log("trip_nametrip_nametrip_name",trip_name);
  //   let query = this.knex.select("trip_id").from("trip_plan").where("tripName", trip_name);
  //   var newTripAttract;
  //   query.then((results) => {
  //     console.log(results);
  //     newTripAttract = {
  //       trip_plan_id: results[0].id,
  //       attraction_id: attraction_id
  //     }
  //     console.log(newTripAttract);
  //   })

  //   var newTripAttractID = await this.knex.insert(newTripAttract).into("trip_plan_attraction").returning('id');
  //   newTripAttract.id = newTripAttractID;
  // }


  async addAttractions(trip_id, attraction_id) {
   
    const newAttr = {
      attraction_id: attraction_id,
      trip_plan_id: trip_id,
    }
    console.log(newAttr);

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