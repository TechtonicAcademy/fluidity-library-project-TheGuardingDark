const router = require('express').Router();
const bookController = require('../../controllers/bookController');
const imageController = require('../../controllers/imageController');
const upload = require('../../middleware/upload');

router.route('/search').get(bookController.search);

router
  .route('/upload/:id')
  .post(upload.single('bookImg'), imageController.uploadFile)
  .get(imageController.getFile);
// .put(upload.single('bookImg'), imageController.updateFile);
// router.route('/upload/:filename', (req, res) => {
//   res.sendFile(`${__basedir}/assets/uploads/${req.params.filename}`);
// });
router
  .route('/:id')
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.delete);

router.route('/').get(bookController.findAll).post(bookController.findOrCreate);

module.exports = router;
