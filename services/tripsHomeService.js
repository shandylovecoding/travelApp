class tripsHomeService {
  constructor(knex) {
    this.knex = knex
  }
  list(username) {
    let query = this.knex
      .select("trip_plan.id", "trip_plan.tripName", "trip_plan.tripInfo")
      .from("trip_plan")
      .innerJoin("users","users.id","trip_plan.user_id")
      .where("users.username",username)
console.log("queryqueryquery",query);
    return query.then((rows) => {
      return rows.map((row) => ({
        id: row.id,
        name: row.tripName,
        description: row.tripInfo,

      }));

    });
    
  }

  async addTrip(user_id, tripName, tripInfo) {
    var newTrip = {
      user_id: user_id,
      tripName: tripName,
      tripInfo: tripInfo
    }
    var newTripID = await this.knex.insert(newTrip).into("trip_plan").returning('id');
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

  async addAttractions(trip_name, attraction_id) {
    let query = await this.knex
      .select("trip_plan.id")
      .from("trip_plan")
      .innerJoin("trip_plan_attraction", "trip_plan.id", "trip_plan_attraction.trip_plan_id")
      .where("tripName", trip_name);
    const newAttr = {
      attraction_id: attraction_id,
      trip_plan_id: query[0].id,
    }
    console.log(newAttr);

    let newAttrId = await this.knex.insert(newAttr).into("trip_plan_attraction").returning("id");
    newAttr.id = newAttrId[0]

  }
  removeTrip(trip_plan_id) {
    return this.knex("trip_plan_attraction").where("trip_plan_id", trip_plan_id).del().then(() => {
      return this.knex("trip_plan").where("id", trip_plan_id).del();
    })
  }
  removeAttraction(trip_plan_id, attraction_id) {
    return this.knex("trip_plan_attraction").where("trip_plan_id", trip_plan_id).andwhere("attraction_id", attraction_id).update({
      attraction_id: null
    })

  }
}
  module.exports = tripsHomeService;

