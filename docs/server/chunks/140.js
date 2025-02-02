exports.id = 140;
exports.ids = [140];
exports.modules = {

/***/ 1140:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
'use client';
'use strict';

__webpack_unused_export__ = ({ value: true });

var React = __webpack_require__(8038);
var utils = __webpack_require__(7666);
var componentbase = __webpack_require__(7095);
var api = __webpack_require__(284);

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

var classes = {
  root: function root(_ref) {
    var props = _ref.props;
    return utils.classNames('p-card p-component', props.className);
  },
  header: 'p-card-header',
  title: 'p-card-title',
  subTitle: 'p-card-subtitle',
  content: 'p-card-content',
  footer: 'p-card-footer',
  body: 'p-card-body'
};
var styles = "\n@layer primereact {\n    .p-card-header img {\n        width: 100%;\n    }\n}\n";
var CardBase = componentbase.ComponentBase.extend({
  defaultProps: {
    __TYPE: 'Card',
    id: null,
    header: null,
    footer: null,
    title: null,
    subTitle: null,
    style: null,
    className: null,
    children: undefined
  },
  css: {
    classes: classes,
    styles: styles
  }
});

var Card = /*#__PURE__*/React__namespace.forwardRef(function (inProps, ref) {
  var context = React__namespace.useContext(api.PrimeReactContext);
  var props = CardBase.getProps(inProps, context);
  var elementRef = React__namespace.useRef(ref);
  var _CardBase$setMetaData = CardBase.setMetaData({
      props: props
    }),
    ptm = _CardBase$setMetaData.ptm,
    cx = _CardBase$setMetaData.cx,
    isUnstyled = _CardBase$setMetaData.isUnstyled;
  componentbase.useHandleStyle(CardBase.css.styles, isUnstyled, {
    name: 'card'
  });
  var createHeader = function createHeader() {
    var headerProps = utils.mergeProps({
      className: cx('header')
    }, ptm('header'));
    if (props.header) {
      return /*#__PURE__*/React__namespace.createElement("div", headerProps, utils.ObjectUtils.getJSXElement(props.header, props));
    }
    return null;
  };
  var createBody = function createBody() {
    var titleProps = utils.mergeProps({
      className: cx('title')
    }, ptm('title'));
    var title = props.title && /*#__PURE__*/React__namespace.createElement("div", titleProps, utils.ObjectUtils.getJSXElement(props.title, props));
    var subTitleProps = utils.mergeProps({
      className: cx('subTitle')
    }, ptm('subTitle'));
    var subTitle = props.subTitle && /*#__PURE__*/React__namespace.createElement("div", subTitleProps, utils.ObjectUtils.getJSXElement(props.subTitle, props));
    var contentProps = utils.mergeProps({
      className: cx('content')
    }, ptm('content'));
    var children = props.children && /*#__PURE__*/React__namespace.createElement("div", contentProps, props.children);
    var footerProps = utils.mergeProps({
      className: cx('footer')
    }, ptm('footer'));
    var footer = props.footer && /*#__PURE__*/React__namespace.createElement("div", footerProps, utils.ObjectUtils.getJSXElement(props.footer, props));
    var bodyProps = utils.mergeProps({
      className: cx('body')
    }, ptm('body'));
    return /*#__PURE__*/React__namespace.createElement("div", bodyProps, title, subTitle, children, footer);
  };
  React__namespace.useEffect(function () {
    utils.ObjectUtils.combinedRefs(elementRef, ref);
  }, [elementRef, ref]);
  var rootProps = utils.mergeProps({
    id: props.id,
    ref: elementRef,
    style: props.style,
    className: cx('root')
  }, CardBase.getOtherProps(props), ptm('root'));
  var header = createHeader();
  var body = createBody();
  return /*#__PURE__*/React__namespace.createElement("div", rootProps, header, body);
});
Card.displayName = 'Card';

exports.Z = Card;


/***/ })

};
;