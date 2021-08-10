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
      console.log("rows", rows);

      return rows.map((row) => ({
        id: row.id,
        name: row.tripName,
        description: row.tripInfo,

      }));
    });
  }

  addTrip(user_id, tripName, tripInfo) {
    var newTrip = {
      user_id: user_id,
      tripName: tripName,
      tripInfo: tripInfo
    }
    return this.knex.insert(newTrip).into("trip_plan");
  }

  addAttractions(trip_id, attraction_id) {
      let query = this.knex.select("attraction_id").from("trip_plan").where("id", trip_id);
      return query.then((results) => {
        if (!results[0].attraction_id) {
          this.knex("trip_plan").where("id", trip_id).update({
            attraction_id: [attraction_id]
          })
        } else {
          this.knex("trip_plan").where("id", trip_id).update({
            attraction_id: results[0].attraction_id.push(attraction_id)
          })
        }
      })
    }
  }
      module.exports = tripsHomeService;