const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const dotenv = require('dotenv');
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
    'https://express-mongodb-eta.vercel.app'
  ]
}));
app.use(compression());

const goal = require("./src/goal");
// const home = require("./src/home");

// app.use("/goal", goal);
app.use("/goal", goal);

const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
  console.log(`Server on ${PORT} port`);
});