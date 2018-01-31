const multer = require('multer');

const folderHelper = require('./folderHelper');

exports.memberProfile = multer({
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
  storage: multer.diskStorage({
    destination(req, file, cb) {
      // Create Folder
      folderHelper.createF('images', `member/${req.params.mem_id}`);
      // upload images path
      cb(null, `images/member/${req.params.mem_id}`);
    },
    filename(req, file, cb) {
      cb(null, `profile.${file.mimetype.split('/')[1]}`);
    },
  }),
}).single('mem_profile_photo');

exports.clubProfile = multer({
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
  storage: multer.diskStorage({
    destination(req, file, cb) {
      // Create Folder
      folderHelper.createF('images', `club/${req.params.club_id}`);
      // upload images path
      cb(null, `images/club/${req.params.club_id}`);
    },
    filename(req, file, cb) {
      cb(null, `profile.${file.mimetype.split('/')[1]}`);
    },
  }),
}).single('club_profile_photo');

exports.careerPhoto = multer({
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
  storage: multer.diskStorage({
    destination(req, file, cb) {
      // Create Folder
      folderHelper.createF('images', `career/${req.params.career_id}`);
      // upload images path
      cb(null, `images/career/${req.params.career_id}`);
    },
    filename(req, file, cb) {
      cb(null, `thumb.${file.mimetype.split('/')[1]}`);
    },
  }),
}).single('career_photo');
