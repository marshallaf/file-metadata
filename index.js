const express = require('express');
const fileupload = require('express-fileupload');

const app = express();

app.set('port', (process.env.PORT || 8080));

app.use(fileupload());

app.use(express.static(__dirname));

app.post('/upload', (req, res) => {
  if (!req.files || !req.files.fileUpload) {
    return res.send({ error: 'no files uploaded' });
  }

  metadata = {};
  metadata.name = req.files.fileUpload.name;
  metadata.mimetype = req.files.fileUpload.mimetype;
  metadata.filesize = req.files.fileUpload.data.length;
  
  res.send(metadata);
});

app.listen(app.get('port'), () => console.log('listening on port', app.get('port')));