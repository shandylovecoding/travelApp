const express = require("express");

class ProfileRouter {
    constructor(profileService) {
        this.profileService = profileService;
    }

    router() {
        let router = express.Router();

        router.get("/", this.get.bind(this));
        router.get("/profile", this.get.bind(this));

        return router;
    }

    get(req,res) {{
        return this.profileService.list()
            .then((content) => {
                res.render("profile", {content:content});
            })
            .catch((err) => {
                res.status(500).json(err);
            })
    }};
}

module.exports = ProfileRouter;