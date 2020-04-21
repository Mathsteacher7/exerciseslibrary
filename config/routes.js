const router = require('express').Router()
// const subjectController = require('../controllers/subject')


// Defining the get request for homepage
router.get('/', (req, res) => {
    res.json({message: 'Hi Everybody'})
})

// router.route('/subjects')
//     .get(subjectController.index)
//     .post(subjectController.create)

// router.route('/subjects/:id')
//     .get(subjectController.show)
//     .delete(subjectController.delete)





module.exports = router
