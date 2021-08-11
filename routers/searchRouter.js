const express = require('express');

class SearchRouter {
    constructor(searchService){
        this.searchService = searchService;
    }
    
    router() {
        console.log(1);
        let router = express.Router();
    
        router.get("/", this.get.bind(this));
        router.get("/search", this.getsearch.bind(this));

    
        return router;
      }

        get(req,res) {
            console.log(2);
            var title = req.query.title;
            console.log(title);
            return this.searchService.list(title)
                .then((content)=> {
                    console.log(4);
                    return res.render('search',{content:content});
                    
                    console.log(5);
                })
                .catch((err)=> res.status(500).json(err));
        };
        getsearch(req,res) {
            console.log(2);
            var title = req.query.title;
            console.log(title);
            return this.searchService.list(title)
                .then((content)=> {
                    console.log(4);
                    res.json(content);
                    console.log(5);
                })
                .catch((err)=> res.status(500).json(err));
        };
    }

    module.exports = SearchRouter;