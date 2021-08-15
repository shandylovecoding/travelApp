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
        let router = express.Router();


        router.get("/", isLoggedIn, this.get.bind(this));
        router.get("/attraction/:trip_plan_id",isLoggedIn, this.getAttraction.bind(this));
        router.post("/", isLoggedIn, this.postTrip.bind(this));
        router.post("/attraction", this.postAttraction.bind(this));
        router.delete("/:id", this.deleteTrip.bind(this));
        router.delete("/attraction/:trip_plan_id/:attraction_id", this.deleteAttraction.bind(this));
        return router;
    }

    get(req, res) {
        return this.tripshomeService.list(req.user.id)
            .then((content) => {
                res.render('tripsHome', { content: content, username: req.user.username });
            })
            .catch((err) => res.status(500).json(err));
    };

    postTrip(req, res) {
        console.log("post trip")
        this.tripshomeService.addTrip(req.user.id, req.body.tripname, req.body.tripinfo).then(() => {
            return res.redirect("/tripsHome")
        })
    }

    getAttraction(req, res) {
        console.log("get attraction")
        let data ={}
        return this.tripshomeService.listAttractions(req.params.trip_plan_id)
        .then((attraction) => {
            return data.attraction = attraction
        })
        .then(()=>{
            return  this.tripshomeService.listtrip(req.params.trip_plan_id)
        })
        .then((trip)=> {
            return data.trip = trip
        })
        .then(()=>{
            res.render('individualTrip',{
                data: data,
                username: req.user.username});
        })
        
    }

    postTrip(req, res) {
        this.tripshomeService.addTrip(req.user.id, req.body.tripname, req.body.tripinfo).then(() => {
            return res.redirect("/tripsHome")
        })
    }
    
    postAttraction(req, res) {
        console.log("post attraction")
        this.tripshomeService.checkAttraction(req.body.tripid, req.body.attid).then((result) => {
            if (result) {
                console.log("attraction del");
                this.tripshomeService.removeAttraction(req.body.tripid, req.body.attid).then(() => {
                    return res.redirect("back")
                })
            } else {
                console.log("attraction add");
                this.tripshomeService.addAttractions(req.body.tripid, req.body.attid).then(() => {
                    return res.redirect("back")
                })

            }
        })
    }
    deleteTrip(req, res) {
        return this.tripshomeService.removeTrip(req.params.id).then(() => {
            return res.send('deleted');
        })
    }

    deleteAttraction(req, res) {
        return this.tripshomeService.removeAttraction(req.params.trip_plan_id, req.params.attraction_id).then(() => {
            return res.send('deleted');
        })

    }
}


module.exports = tripsHomeRouter;

