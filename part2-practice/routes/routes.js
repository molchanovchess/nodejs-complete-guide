const express = require('express');
const path = require('path');
const baseDir = require('../utils/path');

const router = express.Router();

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(baseDir, 'views', 'users.html'));
});

router.get('/', (req, res, next) => {
    res.sendFile(path.join(baseDir, 'views', 'index.html'));
});

module.exports = router