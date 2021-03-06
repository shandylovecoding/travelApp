const express = require("express");
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/login')
  }
class JournalsRouter {
    constructor(journalsService) {
        this.journalsService = journalsService;
    }

    router() {
        let router = express.Router();
        router.get("/", isLoggedIn, this.get.bind(this));
        router.post("/", isLoggedIn, this.post.bind(this));
        router.delete("/:id",isLoggedIn, this.delete.bind(this));
        return router;
    }

    get(req, res) {
        console.log("get journals")
        var data = {};
        return this.journalsService.list(req.user.username).then((results) => {
            return data.list = results;
        }).then(() =>{
            return this.journalsService.listAllDistricts()
        }).then((allDistricts) => {
            data.username = req.user.username;
            return data.district_list = allDistricts;
        }).then(() => {
            res.render("journals", data)
        })
    }

    post(req, res) {
        if (req.files) {
            console.log('has photo')
            
            return this.journalsService.add(req.user.id, req.body.district_list, req.body.post, req.files.photo.data, ).then(() => {
                return res.redirect("/journals");
            })
        } else {
            console.log('no photo')
            return this.journalsService.add(req.user.id,req.body.district_list,  req.body.post).then(() => {
                    return res.redirect("/journals");
                })
            }
        }

        delete(req, res) {
            console.log('delete')
            return this.journalsService.remove(req.params.id).then(() => {
                return res.send('deleted');
            })
        }
    }

    module.exports = JournalsRouter;