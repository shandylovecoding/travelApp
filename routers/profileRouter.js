const express = require("express");

class ProfileRouter {
    constructor(profileService) {
        this.profileService = profileService;
    }

    router() {
        let router = express.Router();

        router.get("/", this.get.bind(this));
        router.get("/:id", this.get.bind(this));

        return router;
    }

    get(req,res) {
        let user = req.params.id;
        console.log(user);

   //     if(typeof user != "undefined"){
            return this.profileService
                .list("jack1")
                .then((post) => {
                    res.render("profile", {data:post});
                 })
                .catch((err) => {
                    res.status(500).json(err);
                 });
   //     } else {
            res.status(500);
            res.render("error", {
                message: "Invalid ID. Please go back and login or contact site administrators"
            })
        } 

    };
//}

module.exports = ProfileRouter;