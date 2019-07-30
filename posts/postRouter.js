const express = require('express');
const postsDB = require('./postDb.js');

const router = express.Router();

router.get('/', (req, res) => {
 postsDB.get().then(posts => {
  res.status(200).json(posts);
 });
});

router.get('/:id', validatePostId, (req, res) => {
 res.status(200).json(req.post);
});

router.get('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

// custom middleware

function validatePostId(req, res, next) {
 postsDB
  .getById(req.params.id)
  .then(post => {
   console.log(post); // { id: 9, text: 'Well, that rules you out.', user_id: 3 }
   if (post) {
    req.post = post;
    next();
   } else {
    res.status(404).json({ message: 'Id not found' });
   }
  })
  .catch(err => {
   res.status(500).json(err);
  });
}

};

module.exports = router;