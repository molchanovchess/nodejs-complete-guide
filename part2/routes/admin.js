const express = require("express");
const path = require("path");
const router = express.Router();
const baseDir = require("../utils/path");

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(baseDir, 'views', 'add-product.html'));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true
  });
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  products.push({
    title: req.body.title,
  });
  res.redirect("/");
});

module.exports.routes = router;
module.exports.products = products;
