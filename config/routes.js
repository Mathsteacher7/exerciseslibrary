const router = require("express").Router();
const subjectController = require("../controllers/subject");
const exerciseContorller = require("../controllers/exercise");

// Defining the get request for homepage
router.get("/", (req, res) => {
  res.json({ message: "Hi Everybody" });
});

router
  .route("/subjects")
  .get(subjectController.index)
  .post(subjectController.create);

router
  .route("/subjects/:id")
  .get(subjectController.show)
  .delete(subjectController.delete);

router
  .route("/exercises")
  .get(exerciseContorller.index)
  .post(exerciseContorller.create);

router
  .route("/exercises/:id")
  .get(exerciseContorller.show)
  .put(exerciseContorller.update)
  .delete(exerciseContorller.delete);

module.exports = router;
