const router = require("express").Router();
const path = require("path");
const bookRoutes = reuqire("./books");

router.use("/books", bookRoutes);

module.exports = router;