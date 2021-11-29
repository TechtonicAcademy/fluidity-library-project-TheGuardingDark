const multer = require('multer');

const imageVerification = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('Please upload valid image file.', false);
  }
};

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + '/assets/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-library-${file.originalname}`);
  },
});

let uploadFile = multer({
  storage: storage,
  fileFilter: imageVerification,
  limits: { fileSize: 8000000 },
});
module.exports = uploadFile;
