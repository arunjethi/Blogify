const mongoose = require("mongoose");

async function connectToMongodb(url) {
  return mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Mongo err", err));
}

module.exports = {
  connectToMongodb,
};
