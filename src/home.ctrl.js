const connectDB = require('../config/db');

const getRes = (req, res) => {
  connectDB();
  res.send("Hello User!");
};

module.exports = { getRes };