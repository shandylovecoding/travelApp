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

    get(req,res) {{
        let userid = req.params.id;
        console.log(userid);
        return this.profileService
        .list(userid)
        .then((data) => {
            res.render(data);
            })
        .catch((err) => {
            res.status(500).json(err);
        })
    }};
}

module.exports = ProfileRouter;