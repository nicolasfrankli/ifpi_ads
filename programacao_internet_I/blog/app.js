"use strict";
exports.__esModule = true;
var express_1 = require("express");
var posts_1 = require("./posts");
var cors_1 = require("cors");
var app = (0, express_1["default"])();
var port = 3000;
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.get('/posts', function (req, res) {
    res.json(posts_1.posts);
});
app.get('/posts/:id', function (req, res) {
    var postId = parseInt(req.params.id);
    var post = posts_1.posts.find(function (p) { return p.id == postId; });
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
});
app.post('/posts', function (req, res) {
    var _a = req.body, title = _a.title, text = _a.text, date = _a.date, likes = _a.likes;
    var newPost = { id: posts_1.posts.length + 1, title: title, text: text, date: date, likes: likes };
    posts_1.posts.push(newPost);
    res.status(201).json(newPost);
});
app.put('/posts/:id', function (req, res) {
    var postId = parseInt(req.params.id);
    var _a = req.body, title = _a.title, text = _a.text, date = _a.date, likes = _a.likes;
    var postIndex = posts_1.posts.findIndex(function (p) { return p.id == postId; });
    if (postIndex == -1) {
        return res.status(404).json({ error: 'Post not found' });
    }
    var updatedPost = { id: postId, title: title, text: text, date: date, likes: likes };
    posts_1.posts[postIndex] = updatedPost;
    res.json(updatedPost);
});
app["delete"]('/posts/:id', function (req, res) {
    var postId = parseInt(req.params.id);
    var postIndex = posts_1.posts.findIndex(function (p) { return p.id == postId; });
    if (postIndex == -1) {
        return res.status(404).json({ error: 'Post not found' });
    }
    var deletedPost = posts_1.posts.splice(postIndex, 1)[0];
    res.json(deletedPost);
});
app.listen(port, function () {
    console.log("Server listening on port ".concat(port));
});
