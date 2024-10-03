const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'Public/Uplods'); 
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});

// const fileFilter = (req, file, cb) => {
//   const allowedTypes = /jpeg|jpg|png|gif/; 
//   const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = allowedTypes.test(file.mimetype.split('/')[1]);

//   if (extname && mimetype) {
//     cb(null, true); 
//   } else {
//     cb(new Error('Only images are allowed (jpeg, jpg, png, gif).'), false); 
//   }
// };

const upload = multer({
  storage: storage,
  // fileFilter: fileFilter,
  limits: { fileSize: 1024 * 1024 } 
});

module.exports = upload;
