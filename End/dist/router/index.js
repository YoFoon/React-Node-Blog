"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require("../blog/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {

    app.all("*", function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,POST");
        res.header("Access-Control-Allow-Headers", "x-requested-with,content-type");
        next();
    });

    app.get("/blog/list/:page", _index2.default.getBlogList);
};