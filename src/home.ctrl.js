// const { cpus } = require("os");
// const numCPUs = cpus().length;
const cluster = require("cluster");

const getRes = (req, res) => {
  res.status(200).json(cluster);
  console.log(cluster);
};

module.exports = { getRes };