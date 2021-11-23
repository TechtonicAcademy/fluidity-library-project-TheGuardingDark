const fs = require('fs');
const { Image, Book } = require('../models');

module.exports = {
  uploadFile: (req, res) => {
    if (req.file == undefined) {
      return res.send('No valid File');
    }

    Image.create(
      {
        type: req.file.mimetype,
        name: req.file.originalname,
        data: fs.readFileSync(
          __basedir + '/assets/uploads/' + req.file.filename
        ),
        BookId: req.params.id,
        // imgId: req.params.id,
      },
      { where: { src: req.params.id } }
    )
      .then((image) => {
        try {
          fs.writeFileSync(__basedir + '/assets/tmp/' + image.name, image.data);
        } catch (err) {
          console.log(err);
        }
        return res.send('File has been uploaded.');
      })
      .catch((err) => {
        console.log(err);
        res.status(422).json(err);
      });
  },
  getFile: (req, res) => {
    Image.findOne({
      include: [Book],
      where: { BookId: req.params.id },
      // order: ['DESC'],
    })
      .then((image) => {
        res.send(image);
      })
      .catch((err) => res.status(500).json(err));
  },
};
