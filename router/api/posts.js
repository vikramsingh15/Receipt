const express = require('express'),
  router = express.Router();

router.get('/', (req, res) => res.send('posts'));

module.exports = router;
