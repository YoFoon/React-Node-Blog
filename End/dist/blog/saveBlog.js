"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _blog = require("./../mongo/blog");

var _blog2 = _interopRequireDefault(_blog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res) {

    var SaveBlog = new _blog2.default();

    var date = new Date();

    //存储各种时间格式，方便以后扩展
    var time = {
        date: date,
        year: date.getFullYear(),
        month: date.getFullYear() + "-" + (date.getMonth() + 1),
        day: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
        minute: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
    };

    var name = req.body.name || 'YoFoon';
    console.log(req.body.tag);

    SaveBlog.addBlog({

        name: name,
        tags: req.body.tag,
        post: req.body.post,
        time: time,
        key: req.body.key || req.body.title,
        title: req.body.title

    }, function (err) {

        var data = {};
        data.status = 0;

        if (err) {
            data.err = err;
            return res.send(data);
        }

        data.status = 1;
        return res.send(data);
    });
};