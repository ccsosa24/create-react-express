const router = require("express").Router();
const path = require("path");
const bookRoutes = require("./books");

router.use("/books", bookRoutes);

module.exports = router;