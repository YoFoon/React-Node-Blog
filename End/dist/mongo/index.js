'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect('mongodb://localhost/blog');

var BlogSchema = new _mongoose2.default.Schema({
    title: String,
    name: String,
    tags: String,
    read: Number,
    post: String,
    time: Object
});

var Blog = _mongoose2.default.model('posts', BlogSchema);

exports.default = Blog;