class profileService {
    constructor(knex) {
        this.knex = knex;
    }

    list(userid){
        let query = this.knex
            .select("*")
            .from("journals")
            .where("user_id", userid)
            
            return query.then((rows) => {
                return rows.map((row) => (({
                    id: row.id,
                }
                ))
                )});
}
}
module.exports = profileService;