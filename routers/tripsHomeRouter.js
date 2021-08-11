const express = require('express');

class tripsHomeRouter {
    constructor(tripshomeService) {
        this.tripshomeService = tripshomeService;
    }

    router() {
        console.log(10);
        let router = express.Router();

        router.get("/", this.get.bind(this));
        router.post("/", this.postTrip.bind(this));
        router.post("/attraction", this.postAttraction.bind(this));
        router.delete("/:id", this.deleteTrip.bind(this));
        router.delete("/attraction/:trip_plan_id/:attraction_id", this.deleteAttraction.bind(this));
        return router;
    }

    get(req, res) {
        console.log("get")
        return this.tripshomeService.list()
            .then((content) => {
                res.render('tripsHome', {
                    content: content
                });
                console.log("content", content);
            })
            .catch((err) => res.status(500).json(err));
    };

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
        return this.journalsService.removeTrip(req.params.id).then(() => {
            return res.send('deleted');
        })
    }

    deleteAttraction(req, res) {
        console.log("delete attraction")
        return this.journalsService.removeAttraction(req.params.trip_plan_id, req.params.attraction_id).then(() => {
            return res.send('deleted');
        })

    }
}


module.exports = tripsHomeRouter;