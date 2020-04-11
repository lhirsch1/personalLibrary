const orm = require('../config/orm.js');

class Book {
    getAllBooks(){
        return orm.innerJoin(['firstName', 'lastName','title', 'coverPhoto'], 'books', 'authors', 'authorId', 'authors.id', 'false', '', '')
    }

    getOneBook(whereVal){
        return orm.innerJoin(['firstName', 'lastName','title', 'coverPhoto'],  'books', 'authors', 'authorId', 'authors.id', 'true', 'books.title', 'whereVal' )
    }

    addBook(values){
        return orm.create('books',['title','coverPhoto','authorId'],values)
    }
}

module.exports = new Book();