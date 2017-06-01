import * as express from 'express';
import Question from '../models/questions';

let router = express.Router();

router.get('/', (req, res) => {
  Question.find().then((questions) => res.json(questions));
});

router.get('/:id', (req, res) => {
  Question.findById(req.params.id)
  .then((foundquestion) => res.json(foundquestion));
});

router.get('/lessons/:id/questions', (req, res) => {
  Question.find({lessonID: req.params.id})
  .then((matches) => res.json(matches))
  .catch((err) => console.log(err));
});

export default router;
