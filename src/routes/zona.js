const router = require('express').Router();

const zonaController = require('../controllers/zonaController');

router.get('/', zonaController.list);
router.post('/add', zonaController.save);
router.get('/update/:id', zonaController.edit);
router.post('/update/:id', zonaController.update);
router.get('/delete/:id', zonaController.delete);

module.exports = router;

