import mongoose, { Schema, model , models } from 'mongoose';

const QuestionSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    question: {
        type: String,
        required: [true, "Question manquante."],
    },
    tag: {
        type: String,
        required: [true, "Tag manquant."],
    }
});

const Question = models.Question || model('Question', QuestionSchema)

export default Question;