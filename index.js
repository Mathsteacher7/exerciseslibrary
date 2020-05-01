const express = require('express')
const mongoose = require('mongoose')
// mongoose.plugin(require('mongoose-unique-validator'), {
//   message: 'Please choose another {PATH}'
// })
const router = require('./config/routes')
const { port, dbURI } = require('./config/environment')
// const errorHandler = require('./lib/errorHandler')


const app = express()

mongoose.connect(dbURI, { useNewUrlParser: true })

app.use(express.json())

//look for static files in the 'dist' folder
//static files are like files in index.html, images, fonts, styles, etc.
app.use(express.static(`${__dirname}/dist`))

app.use('/api', router)

// app.use(errorHandler)
app.listen(port, () => console.log('I am the exerices library database'))

module.exports = app