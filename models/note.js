const orm = require('../config/orm.js');

class Note {
    getBookNotes( whereVal){
        return orm.innerJoin(['firstName', 'lastName','title', 'coverPhoto'],  'books', 'notes', 'books.id', 'bookId', 'true', 'books.title', whereVal )
    }

    addBookNotes(values){
        return orm.create('notes',['note','bookId'],values);
    }
    deleteBookNote(id){
        return orm.delete('notes','id',id)
    }
}

module.exports = new Note();