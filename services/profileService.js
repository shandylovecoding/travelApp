class profileService {
    constructor(knex) {
        this.knex = knex;
    }

    list(user){
        let query = this.knex
            .select("journals.user_id", "journals.content")
            .from("journals")
            .innerJoin("users", "users.id", "journals.user_id")
            .where("users.username", user)
            .orderBy("journals.created_at", "desc");
            return query.then((rows) => {
                return rows.map((row) => ({
                    id: row.id,
                    content:row.content,
                }
                ));
                });
}
}
module.exports = profileService;