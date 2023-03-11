const express = require('express');
const router = express.Router();
const movieController = require("../controllers/moviesController.js")

router.get("/movies", movieController.findmovie);
router.get("/movies/:id", movieController.findById);
router.post("/movies", movieController.createMovie);
router.put("/movies/:id", movieController.updateMovie);
router.delete("/movies/:id", movieController.deleteMovie);

module.exports = router;