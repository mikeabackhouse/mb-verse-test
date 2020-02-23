const router = require('express').Router();
let Question = require('../models/question.model')

router.route('/').get((req, res) => {
    Question.find()
        .then(questions => res.json(questions))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const question = req.body.question;

    const newQuestion = new Question({question});

    newQuestion.save()
        .then(() => res.json('Question added'))
        .catch(err => res.status(400).json('Error: ' + err));
}) 

module.exports = router;