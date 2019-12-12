const router = require("express").Router();
const booksController = require("../../controllers/savedBooksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.saveBook);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(booksController.removeSavedBook);

module.exports = router;
