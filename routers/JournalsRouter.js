const express = require("express");

class JournalsRouter {
    constructor(journalsService) {
        this.journalsService = journalsService;
    }

    router() {
        let router = express.Router();
        router.get("/", isLoggedIn, this.get.bind(this));
        router.post("/", this.post.bind(this));
        router.delete("/:id", this.delete.bind(this));
        return router;
    }

    get(req, res) {
        console.log("get for user>>", req.auth.user)
        return this.journalsService.list(req.auth.user).then((results) => {
            return res.render('journals', {
                list: results
            });
        });
    }
    post(req, res) {
        console.log('post for user>>', req.auth.user)
        if (req.files) {
            console.log('has photo')
            return this.journalsService.add(req.auth.user, req.body.post, req.files.photo.data).then(() => {
                return res.redirect("/api/journals");
            })
        } else {
            console.log('no photo')
            return this.journalsService.add(req.body.post).then(() => {
                    return res.redirect("/api/journals");
                })
            }
        }

        delete(req, res) {
            console.log('delete')
            return this.journalsService.remove(req.params.id).then(() => {
                console.log('senfing back delete')
                return res.send('deleted');
            })
        }
    }

    module.exports = JournalsRouter;