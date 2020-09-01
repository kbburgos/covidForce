const router = require('express').Router();

const reportController = require('../controllers/reportController');

router.get('/', reportController.list);
router.post('/add', reportController.save);
router.get('/update/:id', reportController.edit);
router.post('/update/:id', reportController.update);
router.get('/delete/:id', reportController.delete);

module.exports = router;

