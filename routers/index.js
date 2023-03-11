const express = require('express');
const router = express.Router();
const movieRouter = require("./movie.js")
const userRouter = require("./user.js")

router.use(movieRouter);
router.use(userRouter);


module.exports = router;