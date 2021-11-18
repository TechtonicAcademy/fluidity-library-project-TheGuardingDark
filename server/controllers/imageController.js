const fs = require('fs');
const { Image, Book } = require('../models');

module.exports = {
  uploadFile: (req, res) => {
    // console.log(req.file);
    if (req.file == undefined) {
      return res.send('No valid File');
    }
    console.log(req.params.id);
    // const id = req.params.id;
    Image.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      data: fs.readFileSync(__basedir + '/assets/uploads/' + req.file.filename),
      imgId: req.params.id,
    })
      .then((image) => {
        const file = image.dataValues;
        // console.log(file.name);
        fs.writeFileSync(__basedir + '/assets/tmp/' + file.name, file.data);
        return res.send('File has been uploaded.');
      })
      .catch((err) => res.status(420).json(err));
  },
};
