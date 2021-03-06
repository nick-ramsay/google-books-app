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
router
  .route("/delete/:id")
  .delete(booksController.deleteBook)

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .delete(booksController.removeSavedBook);

module.exports = router;
