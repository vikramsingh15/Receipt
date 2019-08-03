const express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  mongoDb = require('./config/db.js');

//database
mongoDb();

//defining routes

app.use('/api/auth', require('./router/api/auth'));
app.use('/api/profile', require('./router/api/profile'));
app.use('/api/posts', require('./router/api/posts'));

PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
