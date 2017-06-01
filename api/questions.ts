import * as express from 'express';
import Question from '../models/questions';

let router = express.Router();

router.get('/', (req, res) => {
  Question.find().then((questions) => res.json(questions));
});

router.get('/lesson/:id/questions', (req, res) => {
  Question.find({lessonID: req.params.id})
  .then((matches) => res.json(matches))
  .catch((err) => res.json(err));
});

router.get('/:id', (req, res) => {
  Question.findById(req.params.id)
  .then((foundquestion) => res.json(foundquestion));
});

export default router;
