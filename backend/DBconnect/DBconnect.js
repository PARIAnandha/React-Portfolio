const mongoose = require('mongoose');

const MongooseConnect = () => {
  console.log('MongoDB URL:', process.env.MONGODB_URL);
  mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Connected to MongoDB successfully");
    })
    .catch((err) => {
      console.error(`Failed to connect to MongoDB: ${err.message}`);
    });
};

module.exports = MongooseConnect;
