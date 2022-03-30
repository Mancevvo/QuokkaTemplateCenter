const express = require("express");
const router = express.Router();

const manualController = require("../controllers/manual");

router.get("/tags-collections", manualController.tagsCollection);
router.get("/components", manualController.components);

module.exports = router;
