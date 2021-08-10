class JournalsService {
    constructor(knex) {
        this.knex = knex;
    }

    async add(post, photo) {
        console.log("logging photo data >>", photo)
        if (photo) {
            var newpost = {
                user_id: 1,
                content: post,
                photos: photo
            };

        } else {
            var newpost = {
                user_id: 1,
                content: post
            };
        };
        await this.knex.insert(newpost).into("journals");
        var newpostID = this.knex.insert(newpost).into("journals").returning("id");
        newpost.id = newpostID;
    }

    list(username) {
        var query = this.knex.select("journals.id", "journals.content", "journals.photos")
            .from("journals")
            .innerJoin("users", "journals.user_id", "users.id")
            .where("users.username", username)
            .orderBy("journals.id", "asc");

        return query.then((rows) => {
            console.log(rows)
            return rows.map((row) => {
                if (row.photos) {
                    var base = Buffer.from(row.photos);
                    var photo = base.toString('base64');
                }
                return {
                    id: row.id,
                    content: row.content,
                    photos: photo
                }
            })

        })

    }

    remove(id) {
        return this.knex("journals").where("id", id).del();
    }




}

module.exports = JournalsService;