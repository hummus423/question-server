const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    questionType: String,
    question: String,
    answers: [
        {
            answer: {
                type: String,
                required: true
            },
            isCorrect: {
                type: Boolean,
                required: false,
                default: false
            }, 
            votes: {
                type: Number,
                default: 0
            }
        }
    ]
})
module.exports = mongoose.model('Questions', QuestionSchema)

