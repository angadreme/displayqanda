import * as mongoose from 'mongoose';
import CommentModel from './comments';
import {Comments} from './comments';

interface Answer extends mongoose.Document{
  aDate;
  questionId;
  aContent;
  userId;
  usefulCount;
  bestAnswer;
  aComments: Comments[];
}

let answerSchema = new mongoose.Schema({
  aDate: {
    type: Date,
    required: true
  },
  questionId: {
    type: String,
    required: true
  },
  aContent: {
    type: String,
    required: true
  },
  userId: {
    type: String
  },
  aComments: [CommentModel],
  usefulCount: Number,
  bestAnswer: Boolean
});

export default mongoose.model<Answer>('Answer', answerSchema);
