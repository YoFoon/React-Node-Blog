'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _blog = require('./../mongo/blog');

var _blog2 = _interopRequireDefault(_blog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res) {

    var data = {};

    data.status = 0;

    //查找博客
    _blog2.default.find({ 'key': req.params.key }).exec(function (err, item) {

        if (err) {
            return res.send(data);
        }

        //更新阅读量+1
        _blog2.default.update({ 'key': req.params.key }, { '$inc': { 'read': 1 } }, function (err) {

            if (err) {
                return res.send(data);
            }

            data.status = 1;
            data.item = item;
            return res.send(data);
        });
    });
};