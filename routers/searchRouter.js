const express = require('express');
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/login')
  }

class SearchRouter {
    constructor(searchService){
        this.searchService = searchService;
    }
    
    router() {
        console.log(1);
        let router = express.Router();
    
        router.get("/",isLoggedIn, this.get.bind(this));
        router.get("/gettriplist", this.gettriplist.bind(this));
        router.get("/search", this.getsearch.bind(this));

    
        return router;
      }

        get(req,res) {
            console.log("req.user.username",req.user.username);
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

        gettriplist(req,res) {
            console.log(5);
            var username = req.user.username
            console.log(title);
            return this.searchService.listtrip(username)
                .then((data)=> {
                    console.log(5);
                    return res.render('search',{data:data});  
                })
                .catch((err)=> res.status(500).json(err));
        };

        getsearch(req,res) {
            console.log(2222);
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