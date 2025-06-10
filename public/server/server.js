const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

let posts = [];

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.post('/api/posts', (req, res) => {
  const { username, content } = req.body;
  const post = { username, content };
  posts.unshift(post);
  res.status(201).json(post);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
