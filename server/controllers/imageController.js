const fs = require('fs');
const { Image } = require('../models');

module.exports = {
  uploadFile: (req, res) => {
    try {
      console.log(req.file);

      if (req.file == undefined) {
        return res.send('No Image Selected');
      }
      Image.create({
        type: req.file.mimetype,
        name: req.file.originalname,
        data: fs.readFileSync(
          __basedir + '../assets/uploads/' + req.file.filename
        ),
      }).then((image) => {
        fs.writeFileSync(__basedir + '../assets/tmp/' + image.name, image.data);

        return res.send('File has been uploaded.');
      });
    } catch (err) {
      console.log(err);
      return res.send(`Error when uploading file: ${err}`);
    }
  },
};
