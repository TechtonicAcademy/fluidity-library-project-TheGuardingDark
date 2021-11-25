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
      // order: ['id', 'DESC'],
    })
      .then((image) => {
        res.send(image.data);
      })
      .catch((err) => res.status(500).json(err));
  },
  updateImg: (req, res) => {
    // Book.findByPk(req.params.id);
    // console.log('imgcontroller', req.file);
    Image.findOne({
      include: [Book],
      where: { BookId: req.params.id },
      // defaults: {
      //   type: req.file.mimetype,
      //   name: req.file.originalname,
      //   data: fs.readFileSync(
      //     __basedir + '/assets/uploads/' + req.file.filename
      //   ),
      //   BookId: req.params.id,
      // },
    })
      .then((image) => {
        if (image) {
          Image.update(
            {
              type: req.file.mimetype,
              name: req.file.originalname,
              data: fs.readFileSync(
                __basedir + '/assets/uploads/' + req.file.filename
              ),
              // BookId: req.params.id,
            },
            { where: { BookId: req.params.id } }
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
          // console.log('imgUpdate', image);
          // Image.update(
          //   {
          //     type: req.file.mimetype,
          //     name: req.file.originalname,
          //     data: fs.readFileSync(
          //       __basedir + '/assets/uploads/' + req.file.filename
          //     ),
          //     BookId: req.params.id,
          //   },
          //   {
          //     include: [Book],
          //     where: {
          //       BookId: req.params.id,
          //     },
          //   }
          // );
        } else {
          Image.create(
            {
              type: req.file.mimetype,
              name: req.file.originalname,
              data: fs.readFileSync(
                __basedir + '/assets/uploads/' + req.file.filename
              ),
              BookId: req.params.id,
            }
            // { where: { src: req.params.id } }
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
        }
})
.then(() => res.end())
.catch((err) => res.status(422).json(err));
