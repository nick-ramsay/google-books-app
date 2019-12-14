const router = require("express").Router();
const booksController = require("../../controllers/savedBooksController");

// Matches with "/api/books"
router
  .route("/")
  .get(booksController.getSavedBooks)
  .post(booksController.saveBook);
router
  .route("/saved")
  .get(booksController.getSavedBooks)

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .delete(booksController.removeSavedBook);

module.exports = router;
