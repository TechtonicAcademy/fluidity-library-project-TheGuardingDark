const router = require('express').Router();
const bookController = require('../../controllers/bookController');
const imageController = require('../../controllers/imageController');
const upload = require('../../middleware/upload');

router.route('/search').get(bookController.search);

router.route('/upload').post(upload.single('file'), imageController.uploadFile);

router
  .route('/:id')
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.delete);

router.route('/').get(bookController.findAll).post(bookController.findOrCreate);

module.exports = router;
