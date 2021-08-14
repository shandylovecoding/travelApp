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
            console.log("allDistricts >> ", allDistricts)
            data.username = req.user.username;
            return data.district_list = allDistricts;
        }).then(() => {
            console.log("journals data >>", data)
            res.render("journals", data)
        })
    }

    post(req, res) {
        console.log("REQ BODY >> ", req.body)
        if (req.files) {
            console.log('has photo')
            
            return this.journalsService.add(req.user.id, req.body.post, req.files.photo.data, req.body.district_list).then(() => {
                return res.redirect("/journals");
            })
        } else {
            console.log('no photo')
            return this.journalsService.add(req.user.id, req.body.post, req.body.district_list).then(() => {
                    return res.redirect("/journals");
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