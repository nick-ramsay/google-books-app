const db = require("../models");

module.exports = {
    getSavedBooks: function(req,res) {
        db.saved.findAll({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    saveBook: function(req,res) {
        db.saveBook
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};