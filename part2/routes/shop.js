const express = require('express');
const path = require('path');
const router = express.Router();
const baseDir = require('../utils/path');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(baseDir, 'views', 'shop.html'));
});

module.exports = router;