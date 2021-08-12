const express = require('express');
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/login')
  }
class tripsHomeRouter {
    constructor(tripshomeService) {
        this.tripshomeService = tripshomeService;
    }

    router() {
        console.log(10);
        let router = express.Router();


        router.get("/",isLoggedIn, this.get.bind(this));
        router.get("/attraction/:trip_plan_id", this.getAttraction.bind(this));
        router.post("/", isLoggedIn, this.postTrip.bind(this));
        router.post("/attraction", this.postAttraction.bind(this));
        router.delete("/:id", this.deleteTrip.bind(this));
        router.delete("/attraction/:trip_plan_id/:attraction_id", this.deleteAttraction.bind(this));

        return router;
      }

    get(req,res) {
        console.log("req.userreq.userreq.user",req.user);
            return this.tripshomeService.list(req.user.username)
                .then((content)=> {
                    res.render('tripsHome',{content:content});
                    console.log("content",content);
                })
                .catch((err)=> res.status(500).json(err));
        };

    postTrip(req, res){
            console.log("post trip")
            this.tripshomeService.addTrip(req.user.id,req.body.tripname,req.body.tripinfo).then(() => {
                return res.redirect("/tripsHome")
            })
        }


    getAttraction(req, res){
        console.log("get attraction")
        return this.tripshomeService.listAttractions(req.params.trip_plan_id).then((attractions) => {
            console.log("attractions info >>", attractions)
            res.render("individualTrip", {
                attractions: attractions
            });
            
        })
        .catch((err) => res.status(500).json(err));
        
    }

    postTrip(req, res) {
        console.log("post trip")
        this.tripshomeService.addTrip(2, req.body.tripname, req.body.tripinfo).then(() => {
            return res.redirect("/tripsHome")
        })
    }


    postAttraction(req, res) {
        console.log("post attraction")
        this.tripshomeService.addAttractions(req.body.tripname, 2).then(() => {
            return res.redirect("/search")
        })

    }
    deleteTrip(req, res) {
        console.log("delete trip")
        return this.tripshomeService.removeTrip(req.params.id).then(() => {
            return res.send('deleted');
        })
    }

    deleteAttraction(req, res) {
        console.log("delete attraction")
        console.log("params >> ", req.params.trip_plan_id, req.params.attraction_id)
        return this.tripshomeService.removeAttraction(req.params.trip_plan_id, req.params.attraction_id).then(() => {
            return res.send('deleted');
        })

    }
}


module.exports = tripsHomeRouter;

