const express = require('express');
const router = express.Router();
const multer = require('multer');

// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// POST route to handle form submission
router.post('/', upload.fields([{ name: 'profilePicture' }, { name: 'background' }]), (req, res) => {
  const { about, walletAddress, socialMediaLinks } = req.body;
  const { profilePicture, background } = req.files;

  // Handle the form data (e.g., save to database, process images, etc.)

  res.json({ success: true });
});

module.exports = router;
