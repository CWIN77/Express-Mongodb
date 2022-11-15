const express = require('express');
const router = express();
const { getRes } = require("./home.ctrl");

router.get("/", getRes);

module.exports = router;