const express = require('express');

class tripsHomeRouter {
    constructor(tripshomeService){
        this.tripshomeService = tripshomeService;
    }
    
    router() {
        console.log(10);
        let router = express.Router();
    
        router.get("/", this.get.bind(this));
    
        return router;
      }

        get(req,res) {
        console.log(2);
            return this.tripshomeService.list()
                .then((content)=> {
                    console.log(4);
                    res.render('tripsHome',{content:content});
                    console.log("content",content);
                    console.log(5);
                })
                .catch((err)=> res.status(500).json(err));
        };
    }

    module.exports = tripsHomeRouter;