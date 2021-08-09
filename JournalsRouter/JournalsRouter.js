const express = require("express");

class JournalsRouter {
    constructor(journalsService){
        this.journalsService = journalsService;
    }

    router() {
        let router = express.Router();
        router.get("/", this.get.bind(this));
        router.post("/", this.post.bind(this));
        router.post("/photo", this.postPhoto.bind(this));
        // router.put("/:id", this.put.bind(this));
        router.delete("/:id", this.delete.bind(this));
        return router;
      }
    
    get(req, res){
        console.log("get")
        return this.journalsService.list("jack1").then((results) => {
            return res.render('journals', {list: results});
        });
    }
    post(req, res){
        console.log('post')
        return this.journalsService.add(req.body.test).then(() => {
            return res.redirect("/api/journals");           
        });
    }

    postPhoto(req,res){

    }

    delete(req, res){
        console.log('delete')
        return this.journalsService.remove(req.params.id).then(() => {
            console.log(1)
            return res.send('deleted');           
        } )
    }
}

module.exports = JournalsRouter;