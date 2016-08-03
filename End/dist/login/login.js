'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _user = require('./../mongo/user');

var _user2 = _interopRequireDefault(_user);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res) {

    var username = req.body.username;

    var md5 = _crypto2.default.createHash('md5');

    var password = md5.update(req.body.password).digest('hex');

    var data = {};
    data.states = 0;

    _user2.default.find({ name: username }).exec(function (err, item) {

        if (err || item.length == 0) {
            return res.send(data);
        }

        if (item[0].password != password) {
            data.message = "密码不正确";
            return res.send(data);
        }

        data.states = 1;

        var md5 = _crypto2.default.createHash('md5');
        data.name = md5.update(username).digest('hex');

        res.send(data);
    });
};