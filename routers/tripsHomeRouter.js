const express = require('express');

class tripsHomeRouter {
    constructor(tripshomeService){
        this.tripshomeService = tripshomeService;
    }
    
    router() {
        console.log(10);
        let router = express.Router();
    
        router.get("/", this.get.bind(this));
        router.post("/", this.postTrip.bind(this));
        // router.post("/attraction", this.postAttraction.bind(this))
    
        return router;
      }

        get(req,res) {
        console.log("get")
            return this.tripshomeService.list()
                .then((content)=> {
                    res.render('tripsHome',{content:content});
                    console.log("content",content);
                    
                })
                .catch((err)=> res.status(500).json(err));
        };
        postTrip(req, res){
            console.log("post trip")
            console.log("req.body",req.body);
            console.log("req.body.tripname",req.body.tripname);
            this.addTrip(1,req.body.tripname,req.body.tripinfo).then(() => {
                return res.redirect("/")
            })
        }
    }

    module.exports = tripsHomeRouter;