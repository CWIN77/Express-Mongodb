// const { cpus } = require("os");
// const numCPUs = cpus().length;
const totalCPUs = require('os').cpus().length;

const getRes = (req, res) => {
  res.status(200).json(totalCPUs);
  console.log(totalCPUs);
};

module.exports = { getRes };