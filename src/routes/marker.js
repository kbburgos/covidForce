const router = require("express").Router();

const markersController = require("../controllers/markersController");

router.get("/", markersController.list);
router.post("/add", markersController.save);
router.get("/update/:id", markersController.edit);
router.post("/update/:id", markersController.update);
router.get("/delete/:id", markersController.delete);

module.exports = router;
