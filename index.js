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

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server on : http://localhost:${PORT}`);
});