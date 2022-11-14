// vercel에 deploy 하기 위해서는 파일 이름을 index.js로 해야함
const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const cron = require('node-cron');
const dotenv = require('dotenv');
const fetch = require('node-fetch');
dotenv.config();
const connectDB = require('./config/db');
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:8080',
    'http://localhost:9000',
    'https://express-mongodb-eta.vercel.app'
  ]
}));
app.use(compression());

const goal = require("./src/goal");
const home = require("./src/home");

app.use("/", home);
app.use("/goal", goal);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server on ${PORT} port`);
  // cron.schedule('* * * * *', async () => {
  //   const response = await fetch("https://express-mongodb-eta.vercel.app/");
  //   const data = await response.json();
  //   console.log(data);
  // });
});