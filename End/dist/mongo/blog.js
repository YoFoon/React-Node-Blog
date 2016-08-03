'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _connect = require('./connect');

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import mongoose from 'mongoose';

// mongoose.connect('mongodb://localhost/blog');

var BlogSchema = new _connect2.default.Schema({
    title: String,
    name: String,
    tags: String,
    read: Number,
    post: String,
    time: Object,
    key: String
});

//为BlogSchema模型追加addBlog方法
BlogSchema.methods.addBlog = function (params, callback) {
    this.title = params.title;
    this.name = params.name;
    this.tags = params.tags;
    this.read = 0;
    this.post = params.post;
    this.time = params.time;
    this.key = params.key;

    this.save(callback);
};

// posts 是数据库的一个集合
var Blog = _connect2.default.model('posts', BlogSchema);

exports.default = Blog;