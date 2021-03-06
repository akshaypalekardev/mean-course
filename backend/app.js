const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');
//CyWufMvbNe9A9VQh
//5e6e8e4b730df21fce56d8a5
const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Akshay:CyWufMvbNe9A9VQh@mean-course-cluster-e7fsj.mongodb.net/mean-course-node-angular-collection?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database');
  }).catch(() => {
    console.log('Connection Failed');
  });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

//Create new posts in database
app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    content: req.body.content
  });
  post.save().then(createdPost =>{
    res.status(201).json({
      message: "Post added successfully",
      postId: createdPost._id
    });
  });
});

//Get posts from database
app.get('/api/posts', (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: 'Post fetched successfully',
      posts: documents
    })
  });
});

app.put('/api/posts/:id', (req, res, next) => {
  const post = new Post({
    content: content
  });
  Post.updateOne({_id: req.params.id},post).then(result => {
    console.log(result);
    res.status(200).json({
      message: "Post Updated!"
    });
  })
})


// Deleting a post from the database
app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Post deleted!" });
  });
});

module.exports = app;
