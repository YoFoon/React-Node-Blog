'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _blog = require('./../mongo/blog');

var _blog2 = _interopRequireDefault(_blog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    //获取文章(每页显示10篇文章)
    getBlogList: function getBlogList(req, res) {

        var data = {};
        data.states = 0;

        _blog2.default.find({}).limit(10).sort({ time: -1 }).exec(function (err, items) {

            if (err) {
                return res.send(data);
            }
            data.states = 0;
            data.items = items;
            res.send(data);
        });
    }
};