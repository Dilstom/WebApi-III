const express = require('express');
const postsDB = require('./postDb.js');

const router = express.Router();

router.get('/', (req, res) => {
 postsDB.get().then(posts => {
  res.status(200).json(posts);
 });
});

});

router.get('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

// custom middleware

function validatePostId(req, res, next) {

};

module.exports = router;