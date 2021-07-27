const express = require('express');
const questionRouter = express.Router()
const Question = require('../models/Question')
questionRouter.use(express.json())

// GET - input the question ID, output the metadata
questionRouter.get('/questions/:id', async (req, res) => {
    const foundQuestion = await Question.findOne({ _id: req.params.id })

    if (foundQuestion) {
        res.status(200).send(foundQuestion)
    } else {
        res.status(400).send('Question not found')
    }

});

//  INSERT - input the text and the list of answers (for trivia, also the correct answer), output the created question ID
questionRouter.post('/questions', async (req, res) => {
    try {
        const question = new Question({
            questionType: req.body.questionType,
            question: req.body.question,
            answers: req.body.answers
        })
        await question.save()
        return res.status(201).json(question._id)
    } catch (error) {
        return res.status(500).json({ "error": error })
    }
})

// VOTE - input the question ID and the voted answer, output the number of votes per answer
questionRouter.put('/questions/:id', async (req, res) => {
    const filter = { _id: req.params.id }
    const increment = { $inc: { 'answers.$[itm].votes': 1 } }
    const options = {
        arrayFilters: [{ "itm.answer": req.body.answer }],
        new: true
    }
    const foundAnswer = await Question.findOneAndUpdate(filter, increment,options)
    if (foundAnswer.answers) {
        let answers = foundAnswer.answers
        let subset = []
        for (let itm of answers) {
            subset.push({'answer':itm.answer, 'votes': itm.votes})
        }
        return res.status(200).send(subset)
    } else {
        return res.status(500).json({ "error": error })
    }
})


module.exports = questionRouter