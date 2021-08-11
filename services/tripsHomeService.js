class tripsHomeService {
  constructor(knex) {
    this.knex = knex
  }
  list() {
    let query = this.knex
      .select("trip_plan.id", "trip_plan.tripName", "trip_plan.tripInfo")
      .from("trip_plan")
    console.log(query)
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
    console.log(newTrip.id);
  }

async addAttractions(trip_name, attraction_id) {
    let query = await this.knex
    .select("trip_plan.id")
    .from("trip_plan")
    .innerJoin("trip_plan_attraction","trip_plan.id","trip_plan_attraction.trip_plan_id")
    .where("tripName", trip_name);
    const newAttr = {
      attraction_id: attraction_id,
      trip_plan_id:query[0].id,
    }
    console.log(newAttr);
   
      let newAttrId = await this.knex.insert(newAttr).into("trip_plan_attraction").returning("id");
      newAttr.id = newAttrId[0]
    
  }
}
      module.exports = tripsHomeService;