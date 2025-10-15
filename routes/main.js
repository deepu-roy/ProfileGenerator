const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Configure upload to handle multiple files
const uploadFields = upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'logo1', maxCount: 1 },
  { name: 'logo2', maxCount: 1 }
]);

router.get('/', (req, res) => {
  res.render('form');
});

router.post('/preview', uploadFields, (req, res) => {
  console.log('Preview - Raw body:', JSON.stringify(req.body, null, 2));

  // Helper function to ensure array
  const ensureArray = (value) => {
    if (!value) return [];
    return Array.isArray(value) ? value.filter(Boolean) : [value].filter(Boolean);
  };

  const data = {
    name: req.body.name,
    title: req.body.title,
    company: req.body.company,
    summary: req.body.summary,
    photo: req.files && req.files.photo ? '/uploads/' + req.files.photo[0].filename : '',
    logo1: req.files && req.files.logo1 ? '/uploads/' + req.files.logo1[0].filename : '',
    logo2: req.files && req.files.logo2 ? '/uploads/' + req.files.logo2[0].filename : '',
    chips: ensureArray(req.body['chips[]'] || req.body.chips),
    projectNames: ensureArray(req.body['projectNames[]'] || req.body.projectNames),
    projectHighlights: ensureArray(req.body['projectHighlights[]'] || req.body.projectHighlights),
    achievementTitles: ensureArray(req.body['achievementTitles[]'] || req.body.achievementTitles),
    achievementDetails: ensureArray(req.body['achievementDetails[]'] || req.body.achievementDetails),
    feedbackCustomers: ensureArray(req.body['feedbackCustomers[]'] || req.body.feedbackCustomers),
    feedbackPositions: ensureArray(req.body['feedbackPositions[]'] || req.body.feedbackPositions),
    feedbackComments: ensureArray(req.body['feedbackComments[]'] || req.body.feedbackComments),
    skills: ensureArray(req.body['skills[]'] || req.body.skills),
    certNames: ensureArray(req.body['certNames[]'] || req.body.certNames),
    certIssuers: ensureArray(req.body['certIssuers[]'] || req.body.certIssuers),
  };

  console.log('Preview - Processed data:', JSON.stringify(data, null, 2));
  res.render('preview', { data });
});

module.exports = router;

