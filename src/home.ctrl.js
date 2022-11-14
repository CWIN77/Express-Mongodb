const connectDB = require('../config/db');
const { cpus } = require("os");
const numCPUs = cpus().length;

const getRes = (req, res) => {
  connectDB();
  res.status(200).json(numCPUs);
};

module.exports = { getRes };