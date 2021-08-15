class JournalsService {
    constructor(knex) {
        this.knex = knex;
    }

    async add(user_id,  district_id, post, photo) {

        if (photo) {
            var newpost = {
                user_id: user_id,
                district_id: district_id,
                content: post,
                photos: photo
            };

        } else {
            var newpost = {
                user_id: user_id,
                district_id: district_id,
                content: post
            };
        };
        var newpostID = await this.knex.insert(newpost).into("journals").returning("id");
        console.log(newpostID);
        newpost.id = newpostID;
    }
    
    listAllDistricts() {
        let query = this.knex
          .select("districts.id", "districts.district_name")
          .from("districts")
          
        return query.then((rows) => {
          return rows.map((row) => ({
            id: row.id,
            name: row.district_name,
          })
          );
        });
    
      }

    list(username) {
        var query = this.knex.select("journals.id", "journals.content", "journals.photos", "districts.district_name")
            .from("journals")
            .innerJoin("users", "journals.user_id", "users.id")
            .innerJoin("districts", "districts.id", "journals.district_id")
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
                    district_name: row.district_name,
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