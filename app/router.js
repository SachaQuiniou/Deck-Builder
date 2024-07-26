const express = require("express");
const router = express.Router();

const mainController = require("./controllers/mainController");
const searchController = require("./controllers/searchController");

router.get("/", mainController.homePage);
router.get("/card/:id", mainController.cardPage);
router.get("/search", searchController.searchPage);
router.get("/search/:element", searchController.searchByElement);

router.get("/deck", mainController.deckPage);
router.get("/addcard/:id", mainController.addCard);

module.exports = router;
