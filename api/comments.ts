import * as express from 'express';
import Comments from '../models/comments';

let router = express.Router();

router.get('/', (req, res) => {
  Comments.find().then((comments) => res.json(comments));
});

router.get('/:id', (req, res) => {
  Comments.findById(req.params.id)
  .then((foundComment) => res.json(foundComment))
  .catch((err) => res.json(err));
});

router.get('/answers/:id/comments', (req, res) => {
  Comments.find({answerId: req.params.id})
  .then((matches) => res.json(matches))
  .catch((err) => console.log(err));
});

export default router;

// router.get('/', (req, res) => {
//   Comment.find().then((foundComment) =>
//   res.json(foundComment));
// });
