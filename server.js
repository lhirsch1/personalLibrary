const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const bookRoutes = require('./controllers/booksController.js');
const noteRoutes = require('./controllers/notesController.js');
const htmlRoutes = require('./controllers/htmlController');

app.use(bookRoutes);
app.use(noteRoutes);
app.use(htmlRoutes);


app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
});