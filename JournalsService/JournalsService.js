class JournalsService {
    constructor(knex) {
        this.knex = knex;
    }

    async add(post) {
        const newpost = {
            user_id: 1,
            content: post
        };
        await this.knex.insert(newpost).into("journals");
        var newpostID = this.knex.insert(newpost).into("journals").returning("id");
        newpost.id = newpostID;
    }

    list(username) {
        var query = this.knex.select("journals.id", "journals.content")
        .from("journals")
        .innerJoin("users", "journals.user_id", "users.id")
        .where("users.username", username)
        .orderBy("journals.id", "asc");

        return query.then((rows) => {
            console.log(rows)
            return rows

        })

    }

    remove(id){
        return this.knex("journals").where("id", id).del();
    }




}

module.exports = JournalsService;