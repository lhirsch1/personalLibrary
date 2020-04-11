const orm = require('../config/orm.js');

class Note {
    getBookNotes( whereVal){
        return orm.innerJoin(['note.note'], 'books', 'notes', 'books.id', 'notes.bookId', true, 'books.title', whereVal)
    }

    addBookNote(values){
        return orm.create('notes',['note','bookId'],values)
    }
    deleteBookNote(id){
        return orm.delete()
    }
}

module.exports = new Note();