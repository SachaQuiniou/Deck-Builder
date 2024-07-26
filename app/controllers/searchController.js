const dataMapper = require("../dataMapper");

const searchController = {
  searchPage: (req, res) => {
    res.render("search");
  },
  searchByElement: async (req, res) => {
    try {
      const element = req.query.element;
      const searchResult = await dataMapper.searchCard(element);
      res.render("foundCard", {
        searchResult,
        title: "Résultat de votre recherche",
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send(`An error occured with the database :\n${error.message}`);
    }
  },
};

module.exports = searchController;
