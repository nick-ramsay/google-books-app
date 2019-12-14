const db = require("../models");

module.exports = {
    getSavedBooks: function(req,res) {
        res.json({status: 'ok'})
        // db.savedBooks.findAll({})
        //     .then(dbModel => res.json(dbModel))
        //     .catch(err => res.status(422).json(err));
    },
    
    saveBook: function(req,res) {
        db.SavedBooks
        .create(req.body)
        //.create({})
        .then(dbModel => res.json(dbModel))
        .then(console.log(req.body))
        .catch(err => res.status(422).json(err));
    }
};