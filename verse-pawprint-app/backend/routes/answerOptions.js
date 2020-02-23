const router = require('express').Router();
let AnswerOption = require('../models/answerOption.model')

router.route('/').get((req, res) => {
    AnswerOption.find()
        .then(answerOption => res.json(answerOption))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const answerOption = req.body.answerOption;

    const newAnswerOption = new AnswerOption({answerOption});

    newAnswerOption.save()
        .then(() => res.json('Answer Option added'))
        .catch(err => res.status(400).json('Error: ' + err));
}) 

module.exports = router;