var router = require("express").Router();


router.get("/", (req, res) => {
	return res.render("./index.pug");

});
router.get("/singleB-ske", (req, res) => {
    return res.render("singleB-ske");
});
router.get("/singleB-gol", (req, res) => {
    return res.render("singleB-gol");
});
router.get("/singleB-gob", (req, res) => {
    return res.render("singleB-gob");
});

module.exports = router;
