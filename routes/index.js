var router = require("express").Router();


router.get("/", (req, res) => {
	return res.render("./index.pug");
});
router.get("/single-mode", (req, res) => {
    return res.render("single-mode");
});
module.exports = router;
