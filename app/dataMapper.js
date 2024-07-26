const database = require("./database");
const { search } = require("./router");

const dataMapper = {
  getAllCards: async () => {
    const query = "SELECT * FROM card";
    const result = await database.query(query);
    return result.rows;
  },
  getCard: async (id) => {
    const query = { text: "SELECT * FROM card WHERE id = $1;", values: [id] };
    const result = await database.query(query);
    return result.rows[0];
  },
  searchCard: async (element) => {
    const query = {
      text: "SELECT * FROM card WHERE element = $1",
      values: [element],
    };
    const result = await database.query(query);
    return result.rows;
  },
};

module.exports = dataMapper;
