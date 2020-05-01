const Subject = require('../models/Subject')

function indexRoute(req, res, next) {
    Subject.find(req.query)
        .then(subjects => res.json(subjects))
        .catch(next)
}

function createRoute(req, res, next) {
    const subject = new Subject(req.body)
    subject.save()
        .then(subject => res.status(201).json(subject))
        .catch(next)
}

function showRoute(req, res, next) {
    Subject.findById(req.params.id)
        .then(subject => {
            if(!subject) return res.sendStatus(404)
            return res.json(subject)
        })
        .catch(next)
}

function deleteRoute(req, res, next) {
    Subject.findById(req.params.id)
        .then(subject => {
            if(!subject) return res.sendStatus(404)
            return subject.remove()
                .then(() => res.sendStatus(204))
        })
        .catch(next)
}

module.exports = {
    index: indexRoute,
    create: createRoute,
    show: showRoute,
    delete: deleteRoute
}