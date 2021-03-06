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
        let router = express.Router();
    
        router.get("/", this.get.bind(this));
        // router.get("/gettriplist", this.gettriplist.bind(this));
        router.get("/search", this.getsearch.bind(this));

    
        return router;
      }

        get(req,res) {
            let data ={}
            var title = req.query.title;
            return this.searchService.listdistrict(title)
                .then((content)=> {
                    return data.content = content
                })
                .then(()=>{
                    return this.searchService.listattraction(title)
                })
                .then((attlist)=> {
                    return data.attlist = attlist
                })
                .then(()=>{
                    return this.searchService.listtrip(req.user.username)
                })
                .then((triplist)=> {
                    return data.triplist = triplist
                })
                .then(()=>{
                    return this.searchService.listjournal(title)
                })
                .then((tripjour)=> {
                    return data.tripjour = tripjour
                })
                .then(()=>{
                    return this.searchService.checkAttraction(req.user.id)
                })
                .then((attraction_id)=> {
                    return data.attraction = attraction_id
                })
                .then(()=>{
                    res.render('search',{
                        data: data,
                        username: req.user.username});
                })
                
        };

        getsearch(req,res) {
            var title = req.query.title;
            console.log(title);
            return this.searchService.listdistrict(title)
                .then((content)=> {
                    console.log("content",content);
                    res.json(content);
                })
                .catch((err)=> res.status(500).json(err));
        };
    }

    module.exports = SearchRouter;