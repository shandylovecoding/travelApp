class tripsHomeService {
    constructor(knex) {
      this.knex = knex
    }
    list(){
        console.log(3);
        let query = this.knex
        .select("trip_plan.id","trip_plan.tripName","trip_plan.tripInfo")
        .from("trip_plan")
        console.log(query)
        return query.then((rows)=>{
          console.log("rows",rows);
          
         return rows.map((row)=>({
            id:row.id,
            name:row.tripName,
            description:row.tripInfo,
            
          }
          ));
          });
      }
  }
  
  module.exports = tripsHomeService;