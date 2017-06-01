import * as mongoose from 'mongoose';

export interface Comments extends mongoose.Document {
  cDate;
  answerId;
  aContent;
  userId;
  likeCount;
}

let commentsSchema = new mongoose.Schema ({
  cDate: {
    type: Date,
    required: true
  },
  answerId: {
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
  likeCount: Number

});

export default mongoose.model<Comments>('Comments', commentsSchema);
