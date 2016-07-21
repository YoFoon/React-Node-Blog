'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoskin = require('mongoskin');

var _mongoskin2 = _interopRequireDefault(_mongoskin);

var _settings = require('./settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = function () {

    var host = _settings2.default.host,
        port = _settings2.default.port,
        dbName = _settings2.default.dbname,
        str = "mongodb://:@" + host + ":" + port + "/" + dbname;

    var option = {
        native_parser: true
    };

    return _mongoskin2.default.db(str, option);
}();

exports.default = Router;