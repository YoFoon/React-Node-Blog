webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _row = __webpack_require__(236);
	
	var _row2 = _interopRequireDefault(_row);
	
	var _col = __webpack_require__(241);
	
	var _col2 = _interopRequireDefault(_col);
	
	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(33);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	    }
	
	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	
	            var arrLi = [];
	            var arrName = ["Home", "Blog", "Work", "Life", "Book"];
	            var arrHref = ['/view', '/view/blog', '/view/blog', '/view/blog', '/view/blog'];
	            for (var i = 0, arrLen = arrName.length; i < arrLen; i++) {
	                arrLi.push(_react2.default.createElement(_col2.default, { xs: { span: 12 }, sm: { span: 12 }, md: { span: 4 }, className: 'nav-li', key: arrName[i] }, _react2.default.createElement('a', { href: arrHref[i] }, arrName[i])));
	            }
	
	            return _react2.default.createElement(_row2.default, { className: 'fullPage' }, _react2.default.createElement(_col2.default, { xs: { span: 22, offset: 1 }, sm: { span: 22, offset: 1 }, md: { span: 8, offset: 8 }, className: 'proFile' }, _react2.default.createElement('a', { href: '/view/login', className: 'photo' }, _react2.default.createElement('img', { src: '/dist/images/blog-head.jpg' })), _react2.default.createElement('h3', null, 'YoFoon'), _react2.default.createElement('hr', { className: 'divide-line short-line' }), _react2.default.createElement('p', null, '努力向上吧，少年。'), _react2.default.createElement('hr', { className: 'divide-line short-line' }), _react2.default.createElement(_row2.default, { type: 'flex', justify: 'center', align: 'middle', className: 'navigation mt1' }, arrLi), _react2.default.createElement(_row2.default, { type: 'flex', justify: 'center', align: 'middle', className: 'my-links mt1' }, _react2.default.createElement(_col2.default, { md: { span: 4 }, key: 'github', className: 'link-li' }, _react2.default.createElement('a', { className: 'github-icon' })), _react2.default.createElement(_col2.default, { md: { span: 4 }, key: 'weibo', className: 'link-li' }, _react2.default.createElement('a', { className: 'weibo-icon' })))));
	        }
	    }]);
	
	    return App;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ }
]);
//# sourceMappingURL=index.js.map