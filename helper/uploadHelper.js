const multer = require('multer');
const Q = require('q');

const folderHelper = require('./folderHelper');

exports.uploadSingle = (req, res, opt) => {
  const deferred = Q.defer();
  
  const option = {
    filesize: opt.fileSize || 2 * 1024 * 1024,
    filename: opt.filename || 'profile',
    path: opt.path || 'upload',
    field: opt.field || null,
  };

  const storages = multer.diskStorage({
    destination(req, file, cb) {
      // Create Folder
      folderHelper.createF('images', option.path);
      // upload images path
      cb(null, `images/${option.path}`);
    },
    filename(req, file, cb) {
      cb(null, `${option.filename}.${file.mimetype.split('/')[1]}`);
    }
  });

  const upload = multer({ 
    limits: { 
      fileSize: option.filesize, 
    }, 
    storage: storages 
  }).single(option.field);

  upload(req, res, (err) => {
    if (err) {
      deferred.reject();
    } else {
      deferred.resolve(req.file);
    }
  });

  return deferred.promise;
};
