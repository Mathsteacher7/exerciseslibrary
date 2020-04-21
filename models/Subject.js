const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'please provide a name to the Subject'] }
})

module.exports = mongoose.model('Subject', subjectSchema)
