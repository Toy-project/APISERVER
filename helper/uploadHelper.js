const multer = require('multer');
const mkdirp = require('mkdirp');

exports.uploadImage = (req, res, opt) => {
  const option = {
    filesize: opt.fileSize || 2 * 1024 * 1024,
    filename: opt.filename || 'profile',
    path: opt.path || 'images/upload',
    field: opt.field || null,
  };

  const storages = multer.diskStorage({
    destination(req, file, cb) {
      // Create Folder
      mkdirp(option.path, 0777, (err) => {
        if(err) {
          cb(new Error('Create Directory Failed'));
        } else {
          // upload images path
          cb(null, option.path);
        }
      });
    },
    filename(req, file, cb) {
      cb(null, `${option.filename}.${file.mimetype.split('/')[1]}`);
    },
  });

  const filefilter = (req, file, cb) => {
    const ext = file.mimetype.split('/')[1].toLowerCase();
    if(ext === 'png' || ext === 'jpeg' || ext === 'jpg' || ext === 'gif') {
      cb(null, true);
    } else {
      cb(new Error('Not Images'));
    }
  };

  const upload = multer({ 
    limits: { 
      fileSize: option.filesize, 
    },
    storage: storages,
    fileFilter: filefilter,
  });

  return upload;
};
