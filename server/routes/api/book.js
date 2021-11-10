const router = require('express').Router();
const bookController = require('../../controllers/bookController');

router.route('/')
.get(bookController.findAll)
.post(bookController.findOrCreate);

router.route('/:id')
.get(bookController.findById)
.put(bookController.update)
.delete(bookController.delete);

router.route('/search')
.get(bookController.search);

module.exports = router;
