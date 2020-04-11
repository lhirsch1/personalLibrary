const orm = require('../config/orm.js');
const express = require('express');
const router = express.Router();


router.get('/api/book/notes/:name', (req, res) => {
    const bookName = req.params.name;
    orm.innerJoin(bookName)
        .then(results => res.json(results))
        .catch(error => res.status(500).json(error))
})

router.post('/api/book/note', (req, res) => {
    const { note, bookId } = req.body;

    db.addBookNote([note, bookId])
        .then(() => res.status(200).json(true))
        .catch(error => res.status(500).json(error))
})



router.delete('/api/note/:id', (req, res) => {
    db.deleteNote(req.params.id)
        .then(() => res.status(200).json(true))
        .catch(error => res.status(500).json(error))
})

module.exports = router;
