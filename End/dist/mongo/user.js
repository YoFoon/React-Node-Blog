"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _connect = require("./connect");

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = new _connect2.default.Schema({
    name: String,
    password: String,
    email: String
});

//为UserScheme模型追加addUser方法
UserSchema.methods.addUser = function (params, callback) {
    this.name = params.username;
    this.password = params.password;
    this.email = params.email || "yofoon@qq.com";

    this.save(callback);
};

// users 是数据库的一个集合
var User = _connect2.default.model('users', UserSchema);

exports.default = User;