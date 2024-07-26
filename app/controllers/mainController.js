const dataMapper = require("../dataMapper.js");
const { search } = require("../router.js");

const mainController = {
  homePage: async (req, res) => {
    try {
      const cards = await dataMapper.getAllCards();
      res.render("cardList", {
        cards,
        title: "Liste des cartes",
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send(`An error occured with the database :\n${error.message}`);
    }
  },
  cardPage: async (req, res) => {
    try {
      const id = req.params.id;
      const card = await dataMapper.getCard(id);
      res.render("card", { card });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send(`An error occured with the database :\n${error.message}`);
    }
  },

  deckPage: (req, res) => {
    res.render("deck", { cards: req.session.deck, title: "Votre deck" });
  },

  addCard: async (req, res) => {
    try {
      const id = req.params.id;

      const newDeck = req.session.deck.find((deck) => deck.id === Number(id));

      if (newDeck) {
        res.redirect("/deck");
      } else {
        if (req.session.deck.length < 5) {
          const card = await dataMapper.getCard(id);
          req.session.deck.push(card);
          res.redirect("/deck");
        }
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send(`An error occured with the database :\n${error.message}`);
    }
  },
};

module.exports = mainController;
