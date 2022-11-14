const connectDB = require('../config/db');

const getRes = (req, res) => {
  connectDB();
  res.status(200).json("Called!");
};

module.exports = { getRes };