const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
    subject: { type: String, required: [true, 'please provide a subject to the exercise'] },
    task: String,
    content: {type: String, required: [true, 'please provide an exercise']},
    topic: { type: Array, required: [true, 'A topic is required for easier search']},
    answer: { type: String, required: [true, 'An answer is required so we could help our students to check themselves']},
    multipleChoiceAnswer: Array,
    sketch: String,
    level: {type: Number, required: [true, 'Please provide a level on GCSE scale from 1 to 9']},
    Rating: Number,
})

module.exports = mongoose.model('Exercise', exerciseSchema)