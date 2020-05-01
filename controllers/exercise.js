const Exercise = require('../models/Exercise')

function indexRoute(req, res, next) {
    Exercise.find(req.query)
        .then(exercises => res.json(exercises))
        .catch(next)
}

function createRoute(req, res, next) {
    const exercise = new Exercise(req.body)
    exercise.save()
        .then(exercise => res.status(201).json(exercise))
        .catch(next)
}

function showRoute(req, res, next) {
    Exercise.findById(req.params.id)
        .then(exercise => {
            if(!exercise) return res.sendStatus(404)
            return res.json(exercise)
        })
        .catch(next)
}

function updateRoute(req, res, next) {
    Exercise.findById(req.params.id) // get the dish from the database: MONGOOSE
      .then(exercise => {
        if(!exercise) return res.sendStatus(404) // return a 404: EXPRESS
        return exercise.set(req.body) // update the exercise with the request data
      })
      .then(exercise => exercise.save()) // save the exercise: MONGOOSE
      .then(exercise => res.json(exercise)) // send the updated dish: EXPRESS
      .catch(next)
  }

function deleteRoute(req, res, next) {
    Exercise.findById(req.params.id)
        .then(exercise => {
            if(!exercise) return res.sendStatus(404)
            return exercise.remove()
                .then(() => res.sendStatus(204))
        })
        .catch(next)
}

module.exports = {
    index: indexRoute,
    create: createRoute,
    show: showRoute,
    delete: deleteRoute,
    update: updateRoute

}