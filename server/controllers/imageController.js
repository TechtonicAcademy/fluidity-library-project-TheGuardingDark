const fs = require('fs');
const { Image, Book } = require('../models');

module.exports = {
  uploadFile: async (req, res) => {
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
      },
      // { where: { src: req.params.id } }
      { include: [Book] }
    )
      .then((image) => {
        console.log('this is the new img', image);
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
      where: { BookId: req.params.id },
    })
      .then((image) => {
        if (!image) {
          res.end();
        }
        res.send(image.data);
      })
      .catch((err) => res.status(500).json(err));
  },

  updateImg: (req, res) => {
    if (req.file == undefined) {
      return res.send('No valid File');
    }
    console.log('Update File: ', req.file);
    // Image.findOne({
    //   // include: [Book],
    //   where: { BookId: req.params.id },
    // })
    //   .then((image) => {
    //     if (image) {
    Image.update(
      {
        type: req.file.mimetype,
        name: req.file.originalname,
        data: fs.readFileSync(
          __basedir + '/assets/uploads/' + req.file.filename
        ),
        BookId: req.params.id,
      },
      { where: { BookId: req.params.id } }
    )
      .then(() => {
        Image.findOne({
          // include: [Book],
          where: { BookId: req.params.id },
        }).then((image) => {
          console.log('This is the updated img', image);

          try {
            fs.writeFileSync(
              __basedir + '/assets/tmp/' + image.name,
              image.data
            );
          } catch (err) {
            console.log('Try Error', err);
          }
          return res.end();
        });
      })
      .then(() => res.end())
      //   }
      // })
      .catch((err) => res.status(422).json(err));
  },
};
