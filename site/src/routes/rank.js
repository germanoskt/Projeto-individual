var express = require("express");
var router = express.Router();

var rankingController = require("../controllers/rankingController");

router.post("/cadastrar", function (req, res) {
    rankingController.cadastrar(req, res);
})
router.post("/ranking", function (req, res) {
    rankingController.ranking(req, res);
})
module.exports = router;