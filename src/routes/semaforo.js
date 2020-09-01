const router = require('express').Router();

const semaforoController = require('../controllers/semaforoController');

router.get('/', semaforoController.list);
router.post('/add', semaforoController.save);
router.get('/update/:id', semaforoController.edit);
router.post('/update/:id', semaforoController.update);
router.get('/delete/:id', semaforoController.delete);

module.exports = router;

