const mongoose = require("mongoose");
const connection = {};
const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    if (connection.isConnected) {
      console.log(`MongoDB Already Connected`);
      return;
    }
    connection.isConnected = db.connections[0].readyState;
    console.log(`MongoDB Connected: ${db.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = connectDB;