const express = require('express');
const { GenerateNewShortUrl } = require('../controllers/url');
const router = express.Router();

router.post('/',GenerateNewShortUrl);

module.exports = router;