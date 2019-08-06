const mongoose = require('mongoose');

const dbUrl = process.env.dbUrl || 'mongodb://localhost/receipt';

const connectDb = async () => {
  try {
    await mongoose.connect(dbUrl, { useNewUrlParser: true });
    console.log('database running.....');
  } catch (err) {
    console.log(err.message, "cann't connect to database");
    process.exit(1);
  }
};

module.exports = connectDb;
