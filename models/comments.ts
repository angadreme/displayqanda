import * as mongoose from 'mongoose';

export interface Comments extends mongoose.Document {
  cDate: SVGAnimatedString;
  answerId: string;
  cContent: string;
  userId: string;
  likeCount: number;
}

let commentSchema = new mongoose.Schema ({
  cDate: {
    type: Date,
    required: true
  },
  answerId: {
    type: String,
    required: true
  },
  cContent: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  likeCount: Number

});

export default mongoose.model<Comments>('Comments', commentSchema);
