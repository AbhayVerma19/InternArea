const express = require("express");
const router = express.Router();
const ApplicationRoute = require("./ApplicationRoute.js");
const intern = require("./internshipRoute");
const job = require("./jobRoute");
const admin = require("./admin");

router.get("/", (req, res) => {
  res.send("the is backend");
});
router.use("/application", ApplicationRoute);
router.use("/internship", intern);
router.use("/job", job);
router.use("/admin", admin);

module.exports = router;
