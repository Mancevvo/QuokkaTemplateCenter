const express = require("express");
const router = express.Router();

const componentsController = require("../controllers/components");

router.get("/devo-feature", componentsController.devo_Feature);

module.exports = router;
