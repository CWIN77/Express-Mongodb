const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression')
const dotenv = require('dotenv');
dotenv.config();

// const connectDB = require('./config/db');
// connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(compression());

// const goal = require("./src/goal");
const home = require("./src/home");

app.use("/", home);
// app.use("/goal", goal);

// 성능 체크
// npm i -g loadtest
// loadtest http://localhost:9000/api/testcluster -n 1000 -c 100
app.get('/api/testcluster', (req, res) => {
  console.time('noclusterApi');
  const base = 8;
  let result = 0;
  for (let i = Math.pow(base, 7) * 60; i >= 0; i--) {
    result += i + Math.pow(i, 10);
  };
  console.timeEnd('noclusterApi');
  console.log(`RESULT IS ${result} - ON PROCESS ${process.pid}`);
  res.send(`Result number is ${result}`);
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server on : http://localhost:${PORT}`);
});