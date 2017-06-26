'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bricks = require('bricks.js');

var _bricks2 = _interopRequireDefault(_bricks);

var _reactInfiniteScroller = require('react-infinite-scroller');

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MasonryInfiniteScroller = (_temp = _class = function (_Component) {
  _inherits(MasonryInfiniteScroller, _Component);

  function MasonryInfiniteScroller() {
    _classCallCheck(this, MasonryInfiniteScroller);

    return _possibleConstructorReturn(this, (MasonryInfiniteScroller.__proto__ || Object.getPrototypeOf(MasonryInfiniteScroller)).apply(this, arguments));
  }

  _createClass(MasonryInfiniteScroller, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          packed = _props.packed,
          sizes = _props.sizes,
          children = _props.children,
          position = _props.position;


      var instance = (0, _bricks2.default)({
        container: this.masonryContainer,
        packed: packed,
        sizes: sizes,
        position: position
      });

      instance.resize(true);

      if (children.length > 0) {
        instance.pack();
      }

      this.setState({ instance: instance });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var children = this.props.children;


      if (prevProps.children.length === 0 && children.length === 0) {
        return;
      }

      var instance = this.state.instance;


      if (prevProps.children.length === 0 && children.length > 0) {
        return instance.pack();
      }

      if (prevProps.children.length !== children.length) {
        if (this.props.pack) {
          return instance.pack();
        } else {
          return instance.update();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.state && this.state.instance.resize(false);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          className = _props2.className,
          style = _props2.style,
          children = _props2.children,
          pageStart = _props2.pageStart,
          loadMore = _props2.loadMore,
          hasMore = _props2.hasMore,
          loader = _props2.loader,
          threshold = _props2.threshold,
          useWindow = _props2.useWindow;

      return _react2.default.createElement(
        _reactInfiniteScroller2.default,
        {
          pageStart: pageStart,
          loadMore: loadMore,
          hasMore: hasMore,
          loader: loader,
          threshold: threshold,
          useWindow: useWindow
        },
        _react2.default.createElement(
          'div',
          {
            ref: function ref(component) {
              return _this2.masonryContainer = component;
            },
            className: className,
            style: style
          },
          children
        )
      );
    }
  }]);

  return MasonryInfiniteScroller;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.arrayOf(_propTypes2.default.element).isRequired,
  className: _propTypes2.default.string,
  hasMore: _propTypes2.default.bool,
  loader: _propTypes2.default.element,
  loadMore: _propTypes2.default.func,
  pack: _propTypes2.default.bool,
  packed: _propTypes2.default.string,
  pageStart: _propTypes2.default.number,
  position: _propTypes2.default.bool,
  sizes: _propTypes2.default.array,
  style: _propTypes2.default.object,
  threshold: _propTypes2.default.number,
  useWindow: _propTypes2.default.bool
}, _class.defaultProps = {
  className: '',
  pack: false,
  packed: 'data-packed',
  position: true,
  sizes: [{ columns: 1, gutter: 20 }, { mq: '768px', columns: 2, gutter: 20 }, { mq: '1024px', columns: 3, gutter: 20 }],
  style: {}
}, _temp);
exports.default = MasonryInfiniteScroller;