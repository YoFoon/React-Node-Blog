"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getList = require("../blog/getList");

var _getList2 = _interopRequireDefault(_getList);

var _saveBlog = require("../blog/saveBlog");

var _saveBlog2 = _interopRequireDefault(_saveBlog);

var _detail = require("../blog/detail");

var _detail2 = _interopRequireDefault(_detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {

    app.all("*", function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,POST");
        res.header("Access-Control-Allow-Headers", "x-requested-with,content-type");
        next();
    });

    //获取文章列表
    app.get("/blog/list/:page", _getList2.default);

    //发表文章
    app.post("/blog/post", _saveBlog2.default);

    //获取文章详情
    app.get("/blog/detail/:key", _detail2.default);
};