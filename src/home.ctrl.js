// const { cpus } = require("os");
// const numCPUs = cpus().length;
const cluster = require("cluster");

const getRes = (req, res) => {
  res.status(200).json(cluster.isPrimary || cluster.isMaster);
  console.log(cluster.isPrimary || cluster.isMaster);
};

module.exports = { getRes };