const fs = require('fs');
const { Image, Book } = require('../models');

module.exports = {
  uploadFile: (req, res) => {
    if (req.file == undefined) {
      return res.send('No valid File');
    }
    console.log(req.file);
    Image.findOrCreate({
      // include: [Book],
      where: {
        BookId: req.params.id,
      },
      defaults: {
        type: req.file.mimetype,
        name: req.file.originalname,
        data: fs.readFileSync(
          __basedir + '/assets/uploads/' + req.file.filename
        ),
        BookId: req.params.id,
      },
    })
      .then((image) => {
        const file = image[0].dataValues;
        try {
          fs.writeFileSync(__basedir + '/assets/tmp/' + file.name, file.data);
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
};
