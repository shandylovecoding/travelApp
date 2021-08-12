class profileService {
    constructor(knex) {
        this.knex = knex;
    }

    list(user){
        let userid = this.knex
            .from("users")
            .select("id")
            .where("users.username", "jack1");
        let query = this.knex
            .from("journals")
            .select("journals.content", "journals.created_at")
            .innerJoin("users", "users.id", "journals.user_id")
            .where("journals.user_id", userid)
            .orderBy("journals.created_at", "desc");
            return query.then((rows) => {
                return rows.map((row) => ({
                    username: user,
                    id: row.id,
                    content:row.content,
                }
                ));
                });
}
}
module.exports = profileService;