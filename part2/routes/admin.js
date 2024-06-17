const express = require('express');
const path = require('path');
const router = express.Router();
const baseDir = require('../utils/path');

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(baseDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;