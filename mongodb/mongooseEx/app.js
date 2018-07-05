var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./book.model');

var db = 'mongodb://localhost/example';
var port = 8080;
mongoose.connect(db);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended:true
}))

app.get("/books", function (req, res) {  //get all book
  console.log('getting all books');
  Book.find({})
    .exec(function(err, books){
      if (err) {
        res.send ('error');
      } else {
        console.log(books);
        res.json(books);
      }
    });
})

app.get('/books/:id', function(req, res){  //find one by id
  console.log('get one book');
  Book.findOne({
    _id: req.params.id
  })
  .exec(function(err, book) {
    if(err) {
      res.send('error');
    } else {
      res.json(book);
      console.log(book);
    }

  });
});

app.post("/book", function(req, res){  // create new book
  var newBook = new Book();

  newBook.title = req.body.title;
  newBook.author = req.body.author;
  newBook.category = req.body.category;

  newBook.save(function(err, book){
    if (err){
      res.send('error saving');
    } else {
      console.log(book);
      res.send(book);
    }
  })
})

app.post('/book2', function(req, res){ //create new book in another way
  Book.create(req.body, function(err, book){
    if (err){
      res.send("error saving");
    } else {
      console.log(book);
      res.send(book);
    }
  });
});

app.put('/book/:id', function(req, res){ //find by id and update
  Book.findOneAndUpdate({
    _id: req.params.id
  },
  {$set:{title: req.body.title}},
  {upsert: true},
  function(err,newBook){
    if (err) {
      console.log('error occured');
    } else {
      console.log(newBook);
      res.status(204);
     }
  })
});

app.delete('/book/:id',function(req, res){  // find by id and remove
  Book.findOneAndRemove({
    _id: req.params.id
  },function(err, book){
    if (err) {
      res.send('error deleting');
    } else {
      console.log(book);
      res.status(204);
    }
  })
})

app.get('/find/:author', function(req, res){ //find by author
  console.log('get one book');
  Book.find({
    author: req.params.author
  }).limit(1)
  .exec(function(err, book) {
    if(err) {
      res.send('error');
    } else {
      res.json(book);
      console.log(book);
    }
  });
});

app.listen(port, function(){
  console.log('App listening on port '+port);
});
