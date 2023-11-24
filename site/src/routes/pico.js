var express = require("express");
var router = express.Router();

var picoController = require("../controllers/picoController");

router.post("/cadastrar", function (req, res) {
    picoController.cadastrar(req, res);
})
router.post("/pegaPico", function (req, res) {
    picoController.pegaPico(req, res);
})
module.exports = router;
