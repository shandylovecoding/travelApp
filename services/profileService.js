class profileService {
    constructor(knex) {
        this.knex = knex;
    }

    list(){
        let query = this.knex
            .select("")
            .from("journals")
            
            return query.then((rows) => {
                return rows.map((row) => {
                })
            })
    }

}

module.exports = profileService;