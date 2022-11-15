const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression')
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db');
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(compression());

const goal = require("./src/goal");
const home = require("./src/home");

app.use("/", home);
app.use("/goal", goal);

// 성능 체크
// npm i -g loadtest
// loadtest http://localhost:9000/api/testcluster -n 1000 -c 100
app.get('/api/testcluster', function (req, res) {
  console.time('noclusterApi');
  const base = 8;
  let result = 0;
  for (let i = Math.pow(base, 7); i >= 0; i--) {
    result += i + Math.pow(i, 10);
  };
  console.timeEnd('noclusterApi');
  console.log(`RESULT IS ${result} - ON PROCESS ${process.pid}`);
  res.send(`Result number is ${result}`);
});

const cluster = require('cluster');
const totalCPUs = require('os').cpus().length;

if (cluster.isMaster || cluster.isPrimary) {
  console.log(`Master ${process.pid} is running`);
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`${worker.process.pid}가 종료됐습니다.`);
    cluster.fork();
  });
} else {
  const PORT = process.env.PORT || 9000;

  console.log(`Worker ${process.pid} started`);
  app.listen(PORT, () => {
    console.log(`Server on : http://localhost:${PORT}`);
  });
}