const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const answerOptionSchema = new Schema({
    answerOption: {
        type: String,
        required:true,
        trim: true
    },
}, {
    timestamps: true,
});

const AnswerOption = mongoose.model('AnswerOption', answerOptionSchema);

module.exports = AnswerOption;