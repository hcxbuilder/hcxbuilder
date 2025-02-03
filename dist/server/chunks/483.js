exports.id = 483;
exports.ids = [483];
exports.modules = {

/***/ 590:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

'use client';
'use strict';

Object.defineProperty(exports, "__esModule", ({ value: true }));

var React = __webpack_require__(8038);
var iconbase = __webpack_require__(6817);

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

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

var ChevronLeftIcon = /*#__PURE__*/React__namespace.memo( /*#__PURE__*/React__namespace.forwardRef(function (inProps, ref) {
  var pti = iconbase.IconBase.getPTI(inProps);
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    ref: ref,
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, pti), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",
    fill: "currentColor"
  }));
}));
ChevronLeftIcon.displayName = 'ChevronLeftIcon';

exports.ChevronLeftIcon = ChevronLeftIcon;


/***/ }),

/***/ 1326:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
'use client';
'use strict';

__webpack_unused_export__ = ({ value: true });

var React = __webpack_require__(8038);
var PrimeReact = __webpack_require__(284);
var componentbase = __webpack_require__(7095);
var hooks = __webpack_require__(5215);
var chevrondown = __webpack_require__(1399);
var times = __webpack_require__(776);
var timescircle = __webpack_require__(6903);
var overlayservice = __webpack_require__(9268);
var tooltip = __webpack_require__(4935);
var utils = __webpack_require__(7666);
var csstransition = __webpack_require__(1267);
var portal = __webpack_require__(931);
var virtualscroller = __webpack_require__(7978);
var check = __webpack_require__(5767);
var search = __webpack_require__(5583);
var inputtext = __webpack_require__(1785);
var ripple = __webpack_require__(6412);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

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
var PrimeReact__default = /*#__PURE__*/_interopDefaultLegacy(PrimeReact);

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
}

var classes$1 = {
  root: function root(_ref) {
    var props = _ref.props,
      focusedState = _ref.focusedState,
      overlayVisibleState = _ref.overlayVisibleState;
    return utils.classNames('p-multiselect p-component p-inputwrapper', {
      'p-multiselect-chip': props.display === 'chip',
      'p-disabled': props.disabled,
      'p-multiselect-clearable': props.showClear && !props.disabled,
      'p-focus': focusedState,
      'p-inputwrapper-filled': utils.ObjectUtils.isNotEmpty(props.value),
      'p-inputwrapper-focus': focusedState || overlayVisibleState
    });
  },
  label: function label(_ref2) {
    var props = _ref2.props,
      empty = _ref2.empty;
    return utils.classNames('p-multiselect-label', {
      'p-placeholder': empty && props.placeholder,
      'p-multiselect-label-empty': empty && !props.placeholder && !props.selectedItemTemplate,
      'p-multiselect-items-label': !empty && props.display !== 'chip' && props.value.length > props.maxSelectedLabels
    });
  },
  panel: function panel(_ref3) {
    var props = _ref3.panelProps,
      context = _ref3.context,
      allowOptionSelect = _ref3.allowOptionSelect;
    return utils.classNames('p-multiselect-panel p-component', {
      'p-multiselect-inline': props.inline,
      'p-multiselect-flex': props.flex,
      'p-multiselect-limited': !allowOptionSelect,
      'p-input-filled': context && context.inputStyle === 'filled' || PrimeReact__default["default"].inputStyle === 'filled',
      'p-ripple-disabled': context && context.ripple === false || PrimeReact__default["default"].ripple === false
    });
  },
  list: function list(_ref4) {
    var virtualScrollerOptions = _ref4.virtualScrollerOptions;
    return virtualScrollerOptions ? 'p-multiselect-items p-component' : 'p-multiselect-items p-component';
  },
  labelContainer: 'p-multiselect-label-container',
  triggerIcon: 'p-multiselect-trigger-icon p-c',
  trigger: 'p-multiselect-trigger',
  clearIcon: 'p-multiselect-clear-icon',
  tokenLabel: 'p-multiselect-token-label',
  token: 'p-multiselect-token',
  removeTokenIcon: 'p-multiselect-token-icon',
  wrapper: 'p-multiselect-items-wrapper',
  emptyMessage: 'p-multiselect-empty-message',
  itemGroup: 'p-multiselect-item-group',
  closeButton: 'p-multiselect-close p-link',
  header: 'p-multiselect-header',
  closeIcon: 'p-multiselect-close-icon',
  headerCheckboxContainer: 'p-multiselect-select-all',
  headerCheckboxIcon: 'p-multiselect-select-all p-checkbox-icon p-c',
  headerSelectAllLabel: 'p-multiselect-select-all-label',
  filterContainer: 'p-multiselect-filter-container',
  filterIcon: 'p-multiselect-filter-icon',
  item: function item(_ref5) {
    var props = _ref5.itemProps;
    return utils.classNames('p-multiselect-item', {
      'p-highlight': props.selected,
      'p-disabled': props.disabled
    });
  },
  checkboxContainer: 'p-checkbox p-component',
  checkboxIcon: 'p-checkbox-icon p-c',
  checkbox: function checkbox(_ref6) {
    var props = _ref6.itemProps;
    return utils.classNames('p-checkbox-box', {
      'p-highlight': props.selected
    });
  },
  transition: 'p-connected-overlay'
};
var styles$1 = "\n@layer primereact {\n    .p-multiselect {\n        display: inline-flex;\n        user-select: none;\n        cursor: pointer;\n    }\n    \n    .p-multiselect-trigger {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        cursor: pointer;\n    }\n    \n    .p-multiselect-label-container {\n        overflow: hidden;\n        flex: 1 1 auto;\n        cursor: pointer;\n    }\n    \n    .p-multiselect-label  {\n        display: block;\n        white-space: nowrap;\n        cursor: pointer;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n    \n    .p-multiselect-label-empty {\n        overflow: hidden;\n        visibility: hidden;\n    }\n    \n    .p-multiselect-token {\n        cursor: default;\n        display: inline-flex;\n        align-items: center;\n        flex: 0 0 auto;\n    }\n    \n    .p-multiselect-token-icon {\n        cursor: pointer;\n    }\n    \n    .p-multiselect .p-multiselect-panel {\n        min-width: 100%;\n    }\n    \n    .p-multiselect-inline.p-multiselect-panel {\n        border: none;\n        position: initial;\n        background: none;\n        box-shadow: none;\n    }\n    \n    .p-multiselect-inline.p-multiselect-panel .p-multiselect-items {\n        padding: 0;\n    }\n    \n    .p-multiselect-flex.p-multiselect-panel .p-multiselect-items {\n        display: flex;\n        flex-wrap: wrap;\n    }\n    \n    .p-multiselect-items-wrapper {\n        overflow: auto;\n    }\n    \n    .p-multiselect-items {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n    }\n    \n    .p-multiselect-item {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        font-weight: normal;\n        white-space: nowrap;\n        position: relative;\n        overflow: hidden;\n    }\n    \n    .p-multiselect-header {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n    }\n    \n    .p-multiselect-select-all-label {\n        margin-left: 0.5rem;\n    }\n    \n    .p-multiselect-filter-container {\n        position: relative;\n        flex: 1 1 auto;\n    }\n    \n    .p-multiselect-filter-icon {\n        position: absolute;\n        top: 50%;\n        margin-top: -.5rem;\n    }\n    \n    .p-multiselect-filter-container .p-inputtext {\n        width: 100%;\n    }\n    \n    .p-multiselect-close {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        overflow: hidden;\n        position: relative;\n        margin-left: auto;\n    }\n    \n    .p-multiselect-clear-icon {\n        position: absolute;\n        top: 50%;\n        margin-top: -.5rem;\n    }\n    \n    .p-fluid .p-multiselect {\n        display: flex;\n    }\n}\n";
var inlineStyles = {
  root: function root(_ref7) {
    var props = _ref7.props;
    return props.showClear && !props.disabled && {
      position: 'relative'
    };
  },
  itemGroup: function itemGroup(_ref8) {
    var scrollerOptions = _ref8.scrollerOptions;
    return {
      height: scrollerOptions.props ? scrollerOptions.props.itemSize : undefined
    };
  }
};
var MultiSelectBase = componentbase.ComponentBase.extend({
  defaultProps: {
    __TYPE: 'MultiSelect',
    appendTo: null,
    ariaLabelledBy: null,
    checkboxIcon: null,
    className: null,
    clearIcon: null,
    closeIcon: null,
    dataKey: null,
    disabled: false,
    display: 'comma',
    dropdownIcon: null,
    emptyMessage: null,
    emptyFilterMessage: null,
    filter: false,
    filterBy: null,
    filterInputAutoFocus: true,
    filterLocale: undefined,
    filterMatchMode: 'contains',
    filterPlaceholder: null,
    filterTemplate: null,
    fixedPlaceholder: false,
    flex: false,
    id: null,
    inline: false,
    inputId: null,
    inputRef: null,
    itemCheckboxIcon: null,
    itemClassName: null,
    itemTemplate: null,
    maxSelectedLabels: null,
    name: null,
    onBlur: null,
    onChange: null,
    onClick: null,
    onFilter: null,
    onFocus: null,
    onHide: null,
    onRemove: null,
    onSelectAll: null,
    onShow: null,
    optionDisabled: null,
    optionGroupChildren: null,
    optionGroupLabel: null,
    optionGroupTemplate: null,
    optionLabel: null,
    optionValue: null,
    options: null,
    overlayVisible: false,
    panelClassName: null,
    panelFooterTemplate: null,
    panelHeaderTemplate: null,
    panelStyle: null,
    placeholder: null,
    removeIcon: null,
    resetFilterOnHide: false,
    scrollHeight: '200px',
    selectAll: false,
    selectedItemTemplate: null,
    selectedItemsLabel: '{0} items selected',
    selectionLimit: null,
    showClear: false,
    showSelectAll: true,
    style: null,
    tabIndex: 0,
    tooltip: null,
    tooltipOptions: null,
    transitionOptions: null,
    useOptionAsValue: false,
    value: null,
    virtualScrollerOptions: null,
    children: undefined
  },
  css: {
    classes: classes$1,
    styles: styles$1,
    inlineStyles: inlineStyles
  }
});

var classes = {
  icon: 'p-checkbox-icon p-c',
  input: function input(_ref) {
    var props = _ref.props,
      checked = _ref.checked,
      focusedState = _ref.focusedState;
    return utils.classNames('p-checkbox-box', {
      'p-highlight': checked,
      'p-disabled': props.disabled,
      'p-focus': focusedState
    });
  },
  root: function root(_ref2) {
    var props = _ref2.props,
      checked = _ref2.checked,
      focusedState = _ref2.focusedState;
    return utils.classNames('p-checkbox p-component', {
      'p-checkbox-checked': checked,
      'p-checkbox-disabled': props.disabled,
      'p-checkbox-focused': focusedState
    });
  }
};
var styles = "\n.p-checkbox {\n    display: inline-flex;\n    cursor: pointer;\n    user-select: none;\n    vertical-align: bottom;\n    position: relative;\n}\n\n.p-checkbox.p-checkbox-disabled {\n    cursor: auto;\n}\n\n.p-checkbox-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}        \n";
var CheckboxBase = componentbase.ComponentBase.extend({
  defaultProps: {
    __TYPE: 'Checkbox',
    autoFocus: false,
    checked: false,
    className: null,
    disabled: false,
    falseValue: false,
    icon: null,
    id: null,
    inputId: null,
    inputRef: null,
    name: null,
    onChange: null,
    onClick: null,
    onContextMenu: null,
    onMouseDown: null,
    readOnly: false,
    required: false,
    style: null,
    tabIndex: null,
    tooltip: null,
    tooltipOptions: null,
    trueValue: true,
    value: null,
    children: undefined
  },
  css: {
    classes: classes,
    styles: styles
  }
});

function ownKeys$4(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$4(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$4(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Checkbox = /*#__PURE__*/React__namespace.memo( /*#__PURE__*/React__namespace.forwardRef(function (inProps, ref) {
  var context = React__namespace.useContext(PrimeReact.PrimeReactContext);
  var props = CheckboxBase.getProps(inProps, context);
  var _React$useState = React__namespace.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    focusedState = _React$useState2[0],
    setFocusedState = _React$useState2[1];
  var _CheckboxBase$setMeta = CheckboxBase.setMetaData({
      props: props,
      state: {
        focused: focusedState
      },
      context: {
        checked: props.checked === props.trueValue,
        disabled: props.disabled
      }
    }),
    ptm = _CheckboxBase$setMeta.ptm,
    cx = _CheckboxBase$setMeta.cx,
    isUnstyled = _CheckboxBase$setMeta.isUnstyled;
  componentbase.useHandleStyle(CheckboxBase.css.styles, isUnstyled, {
    name: 'checkbox',
    styled: true
  });
  var elementRef = React__namespace.useRef(null);
  var inputRef = React__namespace.useRef(props.inputRef);
  var _onClick = function onClick(event) {
    if (props.disabled || props.readOnly) {
      return;
    }
    if (props.onChange || props.onClick) {
      var _checked = isChecked();
      var checkboxClicked = event.target instanceof HTMLDivElement || event.target instanceof HTMLSpanElement || event.target instanceof Object;
      var isInputToggled = event.target === inputRef.current;
      var isCheckboxToggled = checkboxClicked && event.target.checked !== _checked;
      if (isInputToggled || isCheckboxToggled) {
        var value = _checked ? props.falseValue : props.trueValue;
        var eventData = {
          originalEvent: event,
          value: props.value,
          checked: value,
          stopPropagation: function stopPropagation() {
            event.stopPropagation();
          },
          preventDefault: function preventDefault() {
            event.preventDefault();
          },
          target: {
            type: 'checkbox',
            name: props.name,
            id: props.id,
            value: props.value,
            checked: value
          }
        };
        props.onClick && props.onClick(eventData);

        // do not continue if the user defined click wants to prevent
        if (event.defaultPrevented) {
          return;
        }
        props.onChange && props.onChange(eventData);
      }
      utils.DomHandler.focus(inputRef.current);
      event.preventDefault();
    }
  };
  var _onFocus = function onFocus() {
    setFocusedState(true);
  };
  var _onBlur = function onBlur() {
    setFocusedState(false);
  };
  var _onKeyDown = function onKeyDown(event) {
    if (event.code === 'Space' || event.key === ' ') {
      // event.key is for Android support
      _onClick(event);
    }
  };
  var isChecked = function isChecked() {
    return props.checked === props.trueValue;
  };
  React__namespace.useImperativeHandle(ref, function () {
    return {
      props: props,
      focus: function focus() {
        return utils.DomHandler.focus(inputRef.current);
      },
      getElement: function getElement() {
        return elementRef.current;
      },
      getInput: function getInput() {
        return inputRef.current;
      }
    };
  });
  React__namespace.useEffect(function () {
    utils.ObjectUtils.combinedRefs(inputRef, props.inputRef);
  }, [inputRef, props.inputRef]);
  hooks.useUpdateEffect(function () {
    inputRef.current.checked = isChecked();
  }, [props.checked, props.trueValue]);
  hooks.useMountEffect(function () {
    if (props.autoFocus) {
      utils.DomHandler.focus(inputRef.current, props.autoFocus);
    }
  });
  var checked = isChecked();
  var hasTooltip = utils.ObjectUtils.isNotEmpty(props.tooltip);
  var otherProps = CheckboxBase.getOtherProps(props);
  var ariaProps = utils.ObjectUtils.reduceKeys(otherProps, utils.DomHandler.ARIA_PROPS);
  var iconProps = utils.mergeProps({
    className: cx('icon')
  }, ptm('icon'));
  var icon = checked ? props.icon || /*#__PURE__*/React__namespace.createElement(check.CheckIcon, iconProps) : null;
  var checkboxIcon = utils.IconUtils.getJSXIcon(icon, _objectSpread$4({}, iconProps), {
    props: props,
    checked: checked
  });
  var rootProps = utils.mergeProps({
    id: props.id,
    className: utils.classNames(props.className, cx('root', {
      checked: checked,
      focusedState: focusedState
    })),
    style: props.style,
    onClick: function onClick(e) {
      return _onClick(e);
    },
    onContextMenu: props.onContextMenu,
    onMouseDown: props.onMouseDown
  }, otherProps, ptm('root'));
  var hiddenInputWrapperProps = utils.mergeProps({
    className: 'p-hidden-accessible'
  }, ptm('hiddenInputWrapper'));
  var hiddenInputProps = utils.mergeProps(_objectSpread$4({
    id: props.inputId,
    type: 'checkbox',
    name: props.name,
    tabIndex: props.tabIndex,
    defaultChecked: checked,
    onFocus: function onFocus(e) {
      return _onFocus();
    },
    onBlur: function onBlur(e) {
      return _onBlur();
    },
    onKeyDown: function onKeyDown(e) {
      return _onKeyDown(e);
    },
    disabled: props.disabled,
    readOnly: props.readOnly,
    required: props.required
  }, ariaProps), ptm('hiddenInput'));
  var inputProps = utils.mergeProps({
    className: cx('input', {
      checked: checked,
      focusedState: focusedState
    }),
    'data-p-highlight': checked,
    'data-p-disabled': props.disabled,
    'data-p-focus': focusedState
  }, ptm('input'));
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("div", _extends({
    ref: elementRef
  }, rootProps), /*#__PURE__*/React__namespace.createElement("div", hiddenInputWrapperProps, /*#__PURE__*/React__namespace.createElement("input", _extends({
    ref: inputRef
  }, hiddenInputProps))), /*#__PURE__*/React__namespace.createElement("div", inputProps, checkboxIcon)), hasTooltip && /*#__PURE__*/React__namespace.createElement(tooltip.Tooltip, _extends({
    target: elementRef,
    content: props.tooltip
  }, props.tooltipOptions, {
    pt: ptm('tooltip')
  })));
}));
Checkbox.displayName = 'Checkbox';

function ownKeys$3(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$3(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$3(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var MultiSelectHeader = /*#__PURE__*/React__namespace.memo(function (props) {
  var ptm = props.ptm,
    cx = props.cx,
    isUnstyled = props.isUnstyled;
  var filterOptions = {
    filter: function filter(e) {
      return onFilter(e);
    },
    reset: function reset() {
      return props.resetFilter();
    }
  };
  var getPTOptions = function getPTOptions(key, options) {
    return ptm(key, _objectSpread$3({
      hostName: props.hostName
    }, options));
  };
  var onFilter = function onFilter(event) {
    if (props.onFilter) {
      props.onFilter({
        originalEvent: event,
        query: event.target.value
      });
    }
  };
  var onSelectAll = function onSelectAll(event) {
    if (props.onSelectAll) {
      props.onSelectAll({
        originalEvent: event,
        checked: props.selectAll
      });
    }
    event.preventDefault();
    event.stopPropagation();
  };
  var createFilterElement = function createFilterElement() {
    var filterIconProps = utils.mergeProps({
      className: cx('filterIcon')
    }, getPTOptions('filterIcon'));
    var icon = props.filterIcon || /*#__PURE__*/React__namespace.createElement(search.SearchIcon, filterIconProps);
    var filterIcon = utils.IconUtils.getJSXIcon(icon, _objectSpread$3({}, filterIconProps), {
      props: props
    });
    if (props.filter) {
      var filterContainerProps = utils.mergeProps({
        className: cx('filterContainer')
      }, getPTOptions('filterContainer'));
      var content = /*#__PURE__*/React__namespace.createElement("div", filterContainerProps, /*#__PURE__*/React__namespace.createElement(inputtext.InputText, {
        ref: props.filterRef,
        type: "text",
        role: "textbox",
        value: props.filterValue,
        onChange: onFilter,
        className: "p-multiselect-filter",
        placeholder: props.filterPlaceholder,
        pt: ptm('filterInput'),
        __parentMetadata: {
          parent: props.metaData
        }
      }), filterIcon);
      if (props.filterTemplate) {
        var defaultContentOptions = {
          className: filterContainerProps.className,
          element: content,
          filterOptions: filterOptions,
          onFilter: onFilter,
          filterIconClassName: props.filterIconClassName,
          props: props
        };
        content = utils.ObjectUtils.getJSXElement(props.filterTemplate, defaultContentOptions);
      }
      return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, content);
    }
    return null;
  };
  var filterElement = createFilterElement();
  var selectAllId = props.id ? props.id + '_selectall' : utils.UniqueComponentId();
  var headerSelectAllLabelProps = utils.mergeProps({
    htmlFor: selectAllId,
    className: cx('headerSelectAllLabel')
  }, getPTOptions('headerSelectAllLabel'));
  var headerCheckboxIconProps = utils.mergeProps({
    className: cx('headerCheckboxIcon')
  }, getPTOptions('headerCheckboxIcon'));
  var checkedIcon = props.itemCheckboxIcon || /*#__PURE__*/React__namespace.createElement(check.CheckIcon, headerCheckboxIconProps);
  var itemCheckboxIcon = utils.IconUtils.getJSXIcon(checkedIcon, _objectSpread$3({}, headerCheckboxIconProps), {
    selected: props.selected
  });
  var checkboxElement = props.showSelectAll && /*#__PURE__*/React__namespace.createElement("div", {
    className: "p-multiselect-select-all"
  }, /*#__PURE__*/React__namespace.createElement(Checkbox, {
    id: selectAllId,
    checked: props.selectAll,
    onChange: onSelectAll,
    role: "checkbox",
    "aria-checked": props.selectAll,
    icon: itemCheckboxIcon,
    pt: ptm('headercheckbox'),
    unstyled: isUnstyled()
  }), !props.filter && /*#__PURE__*/React__namespace.createElement("label", headerSelectAllLabelProps, props.selectAllLabel));
  var iconProps = utils.mergeProps({
    className: cx('closeIcon'),
    'aria-hidden': true
  }, getPTOptions('closeIcon'));
  var icon = props.closeIcon || /*#__PURE__*/React__namespace.createElement(times.TimesIcon, iconProps);
  var closeIcon = utils.IconUtils.getJSXIcon(icon, _objectSpread$3({}, iconProps), {
    props: props
  });
  var headerProps = utils.mergeProps({
    className: cx('header')
  }, getPTOptions('header'));
  var closeButtonProps = utils.mergeProps({
    type: 'button',
    className: cx('closeButton'),
    'aria-label': PrimeReact.localeOption('close'),
    onClick: props.onClose
  }, getPTOptions('closeButton'));
  var closeElement = /*#__PURE__*/React__namespace.createElement("button", closeButtonProps, closeIcon, /*#__PURE__*/React__namespace.createElement(ripple.Ripple, null));
  var element = /*#__PURE__*/React__namespace.createElement("div", headerProps, checkboxElement, filterElement, closeElement);
  if (props.template) {
    var defaultOptions = {
      className: 'p-multiselect-header',
      checkboxElement: checkboxElement,
      checked: props.selectAll,
      onChange: onSelectAll,
      filterElement: filterElement,
      closeElement: closeElement,
      closeElementClassName: 'p-multiselect-close p-link',
      closeIconClassName: 'p-multiselect-close-icon',
      onCloseClick: props.onClose,
      element: element,
      itemCheckboxIcon: itemCheckboxIcon,
      props: props
    };
    return utils.ObjectUtils.getJSXElement(props.template, defaultOptions);
  }
  return element;
});
MultiSelectHeader.displayName = 'MultiSelectHeader';

function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var MultiSelectItem = /*#__PURE__*/React__namespace.memo(function (props) {
  var ptm = props.ptm,
    cx = props.cx;
  var getPTOptions = function getPTOptions(key) {
    return ptm(key, {
      hostName: props.hostName,
      context: {
        selected: props.selected
      }
    });
  };
  var onClick = function onClick(event) {
    if (props.onClick) {
      props.onClick({
        originalEvent: event,
        option: props.option
      });
    }
    event.preventDefault();
    event.stopPropagation();
  };
  var onKeyDown = function onKeyDown(event) {
    if (props.onKeyDown) {
      props.onKeyDown({
        originalEvent: event,
        option: props.option
      });
    }
  };
  var checkboxIconProps = utils.mergeProps({
    className: cx('checkboxIcon')
  }, getPTOptions('checkboxIcon'));
  var icon = props.checkboxIcon || /*#__PURE__*/React__namespace.createElement(check.CheckIcon, checkboxIconProps);
  var checkboxIcon = props.selected ? utils.IconUtils.getJSXIcon(icon, _objectSpread$2({}, checkboxIconProps), {
    selected: props.selected
  }) : null;
  var content = props.template ? utils.ObjectUtils.getJSXElement(props.template, props.option) : props.label;
  var tabIndex = props.disabled ? null : props.tabIndex || 0;
  var checkboxContainerProps = utils.mergeProps({
    className: cx('checkboxContainer')
  }, getPTOptions('checkboxContainer'));
  var checkboxProps = utils.mergeProps({
    className: cx('checkbox', {
      itemProps: props
    }),
    'data-p-highlight': props.selected
  }, getPTOptions('checkbox'));
  var itemProps = utils.mergeProps({
    className: utils.classNames(props.className, props.option.className, cx('item', {
      itemProps: props
    })),
    style: props.style,
    onClick: onClick,
    tabIndex: tabIndex,
    onKeyDown: onKeyDown,
    role: 'option',
    'aria-selected': props.selected,
    'data-p-highlight': props.selected,
    'data-p-disabled': props.disabled
  }, getPTOptions('item'));
  return /*#__PURE__*/React__namespace.createElement("li", itemProps, /*#__PURE__*/React__namespace.createElement("div", checkboxContainerProps, /*#__PURE__*/React__namespace.createElement("div", checkboxProps, checkboxIcon)), /*#__PURE__*/React__namespace.createElement("span", null, content), /*#__PURE__*/React__namespace.createElement(ripple.Ripple, null));
});
MultiSelectItem.displayName = 'MultiSelectItem';

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var MultiSelectPanel = /*#__PURE__*/React__namespace.memo( /*#__PURE__*/React__namespace.forwardRef(function (props, ref) {
  var virtualScrollerRef = React__namespace.useRef(null);
  var filterInputRef = React__namespace.useRef(null);
  var context = React__namespace.useContext(PrimeReact.PrimeReactContext);
  var ptm = props.ptm,
    cx = props.cx,
    sx = props.sx,
    isUnstyled = props.isUnstyled;
  var getPTOptions = function getPTOptions(key, options) {
    return ptm(key, _objectSpread$1({
      hostName: props.hostName
    }, options));
  };
  var onEnter = function onEnter() {
    props.onEnter(function () {
      if (virtualScrollerRef.current) {
        var selectedIndex = props.getSelectedOptionIndex();
        if (selectedIndex !== -1) {
          setTimeout(function () {
            return virtualScrollerRef.current.scrollToIndex(selectedIndex);
          }, 0);
        }
      }
    });
  };
  var onEntered = function onEntered() {
    props.onEntered(function () {
      if (props.filter && props.filterInputAutoFocus && filterInputRef.current) {
        utils.DomHandler.focus(filterInputRef.current, false);
      }
    });
  };
  var onFilterInputChange = function onFilterInputChange(event) {
    if (virtualScrollerRef.current) {
      virtualScrollerRef.current.scrollToIndex(0);
    }
    props.onFilterInputChange && props.onFilterInputChange(event);
  };
  var isEmptyFilter = function isEmptyFilter() {
    return !(props.visibleOptions && props.visibleOptions.length) && props.hasFilter;
  };
  var createHeader = function createHeader() {
    return /*#__PURE__*/React__namespace.createElement(MultiSelectHeader, {
      hostName: props.hostName,
      id: props.id,
      filter: props.filter,
      filterRef: filterInputRef,
      filterValue: props.filterValue,
      filterTemplate: props.filterTemplate,
      onFilter: onFilterInputChange,
      filterPlaceholder: props.filterPlaceholder,
      onClose: props.onCloseClick,
      showSelectAll: props.showSelectAll,
      selectAll: props.isAllSelected(),
      selectAllLabel: props.selectAllLabel,
      onSelectAll: props.onSelectAll,
      template: props.panelHeaderTemplate,
      resetFilter: props.resetFilter,
      closeIcon: props.closeIcon,
      filterIcon: props.filterIcon,
      itemCheckboxIcon: props.itemCheckboxIcon,
      ptm: ptm,
      cx: cx,
      isUnstyled: isUnstyled,
      metaData: props.metaData
    });
  };
  var createFooter = function createFooter() {
    if (props.panelFooterTemplate) {
      var content = utils.ObjectUtils.getJSXElement(props.panelFooterTemplate, props, props.onOverlayHide);
      return /*#__PURE__*/React__namespace.createElement("div", {
        className: "p-multiselect-footer"
      }, content);
    }
    return null;
  };
  var createGroupChildren = function createGroupChildren(optionGroup, style) {
    var groupChildren = props.getOptionGroupChildren(optionGroup);
    return groupChildren.map(function (option, j) {
      var optionLabel = props.getOptionLabel(option);
      var optionKey = j + '_' + props.getOptionRenderKey(option);
      var disabled = props.isOptionDisabled(option);
      var tabIndex = disabled ? null : props.tabIndex || 0;
      var selected = props.isSelected(option);
      return /*#__PURE__*/React__namespace.createElement(MultiSelectItem, {
        hostName: props.hostName,
        key: optionKey,
        label: optionLabel,
        option: option,
        style: style,
        template: props.itemTemplate,
        selected: selected,
        onClick: props.onOptionSelect,
        onKeyDown: props.onOptionKeyDown,
        tabIndex: tabIndex,
        disabled: disabled,
        className: props.itemClassName,
        checkboxIcon: props.checkboxIcon,
        ptm: ptm,
        cx: cx
      });
    });
  };
  var createEmptyFilter = function createEmptyFilter() {
    var emptyFilterMessage = utils.ObjectUtils.getJSXElement(props.emptyFilterMessage, props) || PrimeReact.localeOption('emptyFilterMessage');
    var emptyMessageProps = utils.mergeProps({
      className: cx('emptyMessage')
    }, getPTOptions('emptyMessage'));
    return /*#__PURE__*/React__namespace.createElement("li", emptyMessageProps, emptyFilterMessage);
  };
  var createEmptyContent = function createEmptyContent() {
    var emptyMessage = utils.ObjectUtils.getJSXElement(props.emptyMessage, props) || PrimeReact.localeOption('emptyMessage');
    var emptyMessageProps = utils.mergeProps({
      className: cx('emptyMessage')
    }, getPTOptions('emptyMessage'));
    return /*#__PURE__*/React__namespace.createElement("li", emptyMessageProps, emptyMessage);
  };
  var createItem = function createItem(option, index) {
    var scrollerOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var style = {
      height: scrollerOptions.props ? scrollerOptions.props.itemSize : undefined
    };
    if (props.optionGroupLabel) {
      var groupContent = props.optionGroupTemplate ? utils.ObjectUtils.getJSXElement(props.optionGroupTemplate, option, index) : props.getOptionGroupLabel(option);
      var groupChildrenContent = createGroupChildren(option, style);
      var key = index + '_' + props.getOptionGroupRenderKey(option);
      var itemGroupProps = utils.mergeProps({
        className: cx('itemGroup'),
        style: sx('itemGroup', {
          scrollerOptions: scrollerOptions
        })
      }, getPTOptions('itemGroup'));
      return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, {
        key: key
      }, /*#__PURE__*/React__namespace.createElement("li", itemGroupProps, groupContent), groupChildrenContent);
    } else {
      var optionLabel = props.getOptionLabel(option);
      var optionKey = index + '_' + props.getOptionRenderKey(option);
      var disabled = props.isOptionDisabled(option);
      var tabIndex = disabled ? null : props.tabIndex || 0;
      var selected = props.isSelected(option);
      return /*#__PURE__*/React__namespace.createElement(MultiSelectItem, {
        hostName: props.hostName,
        key: optionKey,
        label: optionLabel,
        option: option,
        style: style,
        template: props.itemTemplate,
        selected: selected,
        onClick: props.onOptionSelect,
        onKeyDown: props.onOptionKeyDown,
        tabIndex: tabIndex,
        disabled: disabled,
        className: props.itemClassName,
        checkboxIcon: props.checkboxIcon,
        ptm: ptm,
        cx: cx
      });
    }
  };
  var createItems = function createItems() {
    if (utils.ObjectUtils.isNotEmpty(props.visibleOptions)) {
      return props.visibleOptions.map(createItem);
    } else {
      return props.hasFilter ? createEmptyFilter() : createEmptyContent();
    }
  };
  var createContent = function createContent() {
    if (props.virtualScrollerOptions) {
      var virtualScrollerProps = _objectSpread$1(_objectSpread$1({}, props.virtualScrollerOptions), {
        style: _objectSpread$1(_objectSpread$1({}, props.virtualScrollerOptions.style), {
          height: props.scrollHeight
        }),
        className: utils.classNames('p-multiselect-items-wrapper', props.virtualScrollerOptions.className),
        items: props.visibleOptions,
        autoSize: true,
        onLazyLoad: function onLazyLoad(event) {
          return props.virtualScrollerOptions.onLazyLoad(_objectSpread$1(_objectSpread$1({}, event), {
            filter: props.filterValue
          }));
        },
        itemTemplate: function itemTemplate(item, options) {
          return item && createItem(item, options.index, options);
        },
        contentTemplate: function contentTemplate(options) {
          var content = isEmptyFilter() ? createEmptyFilter() : options.children;
          var listProps = utils.mergeProps({
            ref: options.contentRef,
            style: options.style,
            className: utils.classNames(options.className, cx('list', {
              virtualScrollerProps: props.virtualScrollerOptions
            })),
            role: 'listbox',
            'aria-multiselectable': true
          }, getPTOptions('list'));
          return /*#__PURE__*/React__namespace.createElement("ul", listProps, content);
        }
      });
      return /*#__PURE__*/React__namespace.createElement(virtualscroller.VirtualScroller, _extends({
        ref: virtualScrollerRef
      }, virtualScrollerProps, {
        pt: ptm('virtualScroller'),
        __parentMetadata: {
          parent: props.metaData
        }
      }));
    } else {
      var items = createItems();
      var wrapperProps = utils.mergeProps({
        className: cx('wrapper'),
        style: {
          maxHeight: props.scrollHeight
        }
      }, getPTOptions('wrapper'));
      var listProps = utils.mergeProps({
        className: cx('list'),
        role: 'listbox',
        'aria-multiselectable': true
      }, getPTOptions('list'));
      return /*#__PURE__*/React__namespace.createElement("div", wrapperProps, /*#__PURE__*/React__namespace.createElement("ul", listProps, items));
    }
  };
  var createElement = function createElement() {
    var allowOptionSelect = props.allowOptionSelect();
    var header = createHeader();
    var content = createContent();
    var footer = createFooter();
    var panelProps = utils.mergeProps({
      className: utils.classNames(props.panelClassName, cx('panel', {
        panelProps: props,
        context: context,
        allowOptionSelect: allowOptionSelect
      })),
      style: props.panelStyle,
      onClick: props.onClick
    }, getPTOptions('panel'));
    if (props.inline) {
      return /*#__PURE__*/React__namespace.createElement("div", _extends({
        ref: ref
      }, panelProps), content, footer);
    }
    var transitionProps = utils.mergeProps({
      classNames: cx('transition'),
      "in": props["in"],
      timeout: {
        enter: 120,
        exit: 100
      },
      options: props.transitionOptions,
      unmountOnExit: true,
      onEnter: onEnter,
      onEntered: onEntered,
      onExit: props.onExit,
      onExited: props.onExited
    }, getPTOptions('transition'));
    return /*#__PURE__*/React__namespace.createElement(csstransition.CSSTransition, _extends({
      nodeRef: ref
    }, transitionProps), /*#__PURE__*/React__namespace.createElement("div", _extends({
      ref: ref
    }, panelProps), header, content, footer));
  };
  var element = createElement();
  if (props.inline) return element;
  return /*#__PURE__*/React__namespace.createElement(portal.Portal, {
    element: element,
    appendTo: props.appendTo
  });
}));
MultiSelectPanel.displayName = 'MultiSelectPanel';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var MultiSelect = /*#__PURE__*/React__namespace.memo( /*#__PURE__*/React__namespace.forwardRef(function (inProps, ref) {
  var context = React__namespace.useContext(PrimeReact.PrimeReactContext);
  var props = MultiSelectBase.getProps(inProps, context);
  var _React$useState = React__namespace.useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    filterState = _React$useState2[0],
    setFilterState = _React$useState2[1];
  var _React$useState3 = React__namespace.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    focusedState = _React$useState4[0],
    setFocusedState = _React$useState4[1];
  var _React$useState5 = React__namespace.useState(props.inline),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    overlayVisibleState = _React$useState6[0],
    setOverlayVisibleState = _React$useState6[1];
  var elementRef = React__namespace.useRef(null);
  var inputRef = React__namespace.useRef(props.inputRef);
  var labelRef = React__namespace.useRef(null);
  var overlayRef = React__namespace.useRef(null);
  var hasFilter = filterState && filterState.trim().length > 0;
  var empty = utils.ObjectUtils.isEmpty(props.value);
  var equalityKey = props.optionValue ? null : props.dataKey;
  var metaData = {
    props: props,
    state: {
      filterState: filterState,
      focused: focusedState,
      overlayVisible: overlayVisibleState
    }
  };
  var _MultiSelectBase$setM = MultiSelectBase.setMetaData(metaData),
    ptm = _MultiSelectBase$setM.ptm,
    cx = _MultiSelectBase$setM.cx,
    sx = _MultiSelectBase$setM.sx,
    isUnstyled = _MultiSelectBase$setM.isUnstyled;
  componentbase.useHandleStyle(MultiSelectBase.css.styles, isUnstyled, {
    name: 'multiselect'
  });
  var _useOverlayListener = hooks.useOverlayListener({
      target: elementRef,
      overlay: overlayRef,
      listener: function listener(event, _ref) {
        var type = _ref.type,
          valid = _ref.valid;
        if (valid) {
          if (type === 'outside') {
            !isClearClicked(event) && !isSelectAllClicked(event) && hide();
          } else {
            hide();
          }
        }
      },
      when: overlayVisibleState
    }),
    _useOverlayListener2 = _slicedToArray(_useOverlayListener, 2),
    bindOverlayListener = _useOverlayListener2[0],
    unbindOverlayListener = _useOverlayListener2[1];
  var onPanelClick = function onPanelClick(event) {
    overlayservice.OverlayService.emit('overlay-click', {
      originalEvent: event,
      target: elementRef.current
    });
  };
  var allowOptionSelect = function allowOptionSelect() {
    return !props.selectionLimit || !props.value || props.value && props.value.length < props.selectionLimit;
  };
  var onOptionSelect = function onOptionSelect(event) {
    var originalEvent = event.originalEvent,
      option = event.option;
    if (props.disabled || isOptionDisabled(option)) {
      return;
    }
    var optionValue = getOptionValue(option);
    var isUsed = isOptionValueUsed(option);
    var selected = isSelected(option);
    var allowSelect = allowOptionSelect();
    if (selected) {
      updateModel(originalEvent, props.value.filter(function (val) {
        return !utils.ObjectUtils.equals(isUsed ? val : getOptionValue(val), optionValue, equalityKey);
      }), option);
    } else if (allowSelect) {
      updateModel(originalEvent, [].concat(_toConsumableArray(props.value || []), [optionValue]), option);
    }
  };
  var onOptionKeyDown = function onOptionKeyDown(event) {
    var originalEvent = event.originalEvent;
    var listItem = originalEvent.currentTarget;
    switch (originalEvent.which) {
      //down
      case 40:
        var nextItem = findNextItem(listItem);
        nextItem && nextItem.focus();
        originalEvent.preventDefault();
        break;

      //up
      case 38:
        var prevItem = findPrevItem(listItem);
        prevItem && prevItem.focus();
        originalEvent.preventDefault();
        break;

      //enter and space
      case 13:
      case 32:
        onOptionSelect(event);
        originalEvent.preventDefault();
        break;

      //escape
      case 27:
        hide();
        utils.DomHandler.focus(inputRef.current);
        break;
    }
  };
  var findNextItem = function findNextItem(item) {
    var nextItem = item.nextElementSibling;
    return nextItem ? utils.DomHandler.getAttribute(nextItem, 'data-p-disabled') === true || utils.DomHandler.getAttribute(nextItem, 'data-pc-section') === 'itemgroup' ? findNextItem(nextItem) : nextItem : null;
  };
  var findPrevItem = function findPrevItem(item) {
    var prevItem = item.previousElementSibling;
    return prevItem ? utils.DomHandler.getAttribute(prevItem, 'data-p-disabled') === true || utils.DomHandler.getAttribute(prevItem, 'data-pc-section') === 'itemgroup' ? findPrevItem(prevItem) : prevItem : null;
  };
  var onClick = function onClick(event) {
    if (!props.inline && !props.disabled && !isPanelClicked(event) && utils.DomHandler.getAttribute(event.target, 'data-pc-section') !== 'removetokenicon' && !isClearClicked(event)) {
      overlayVisibleState ? hide() : show();
      utils.DomHandler.focus(inputRef.current);
      event.preventDefault();
    }
  };
  var onKeyDown = function onKeyDown(event) {
    switch (event.which) {
      //down
      case 40:
        if (props.inline) break;
        if (!overlayVisibleState && event.altKey) {
          show();
          event.preventDefault();
        }
        break;

      //space
      case 32:
        if (props.inline) break;
        overlayVisibleState ? hide() : show();
        event.preventDefault();
        break;

      //escape
      case 27:
        if (props.inline) break;
        hide();
        break;

      //tab
      case 9:
        if (overlayVisibleState) {
          var firstFocusableElement = utils.DomHandler.getFirstFocusableElement(overlayRef.current);
          if (firstFocusableElement) {
            firstFocusableElement.focus();
            event.preventDefault();
          }
        }
        break;
    }
  };
  var onSelectAll = function onSelectAll(event) {
    if (props.onSelectAll) {
      props.onSelectAll(event);
    } else {
      var value = null;
      if (event.checked) {
        value = [];
        if (visibleOptions) {
          var selectedOptions = visibleOptions.filter(function (option) {
            return isOptionDisabled(option) && isSelected(option);
          });
          value = selectedOptions.map(function (option) {
            return getOptionValue(option);
          });
        }
      } else if (visibleOptions) {
        var options = visibleOptions.filter(function (option) {
          return !isOptionDisabled(option) || isSelected(option);
        });
        if (props.optionGroupLabel) {
          value = [];
          options.forEach(function (optionGroup) {
            return value = [].concat(_toConsumableArray(value), _toConsumableArray(getOptionGroupChildren(optionGroup).filter(function (option) {
              return !isOptionDisabled(option);
            }).map(function (option) {
              return getOptionValue(option);
            })));
          });
        } else {
          value = options.map(function (option) {
            return getOptionValue(option);
          });
        }
      }
      updateModel(event.originalEvent, value, value);
    }
  };
  var updateModel = function updateModel(event, value, selectedOption) {
    if (props.onChange) {
      props.onChange({
        originalEvent: event,
        value: value,
        selectedOption: selectedOption,
        stopPropagation: function stopPropagation() {
          event.stopPropagation();
        },
        preventDefault: function preventDefault() {
          event.preventDefault();
        },
        target: {
          name: props.name,
          id: props.id,
          value: value
        }
      });
    }
  };
  var onFilterInputChange = function onFilterInputChange(event) {
    var filter = event.query;
    setFilterState(filter);
    if (props.onFilter) {
      props.onFilter({
        originalEvent: event,
        filter: filter
      });
    }
  };
  var resetFilter = function resetFilter() {
    setFilterState('');
    props.onFilter && props.onFilter({
      filter: ''
    });
  };
  var scrollInView = function scrollInView() {
    var highlightItem = utils.DomHandler.findSingle(overlayRef.current, 'li.p-highlight');
    if (highlightItem && highlightItem.scrollIntoView) {
      highlightItem.scrollIntoView({
        block: 'nearest',
        inline: 'nearest'
      });
    }
  };
  var show = function show() {
    setOverlayVisibleState(true);
  };
  var hide = function hide() {
    setOverlayVisibleState(false);
  };
  var onOverlayEnter = function onOverlayEnter(callback) {
    utils.ZIndexUtils.set('overlay', overlayRef.current, context && context.autoZIndex || PrimeReact__default["default"].autoZIndex, context && context.zIndex['overlay'] || PrimeReact__default["default"].zIndex['overlay']);
    utils.DomHandler.addStyles(overlayRef.current, {
      position: 'absolute',
      top: '0',
      left: '0'
    });
    alignOverlay();
    scrollInView();
    callback && callback();
  };
  var onOverlayEntered = function onOverlayEntered(callback) {
    callback && callback();
    bindOverlayListener();
    props.onShow && props.onShow();
  };
  var onOverlayExit = function onOverlayExit() {
    unbindOverlayListener();
  };
  var onOverlayExited = function onOverlayExited() {
    if (props.filter && props.resetFilterOnHide) {
      resetFilter();
    }
    utils.ZIndexUtils.clear(overlayRef.current);
    props.onHide && props.onHide();
  };
  var alignOverlay = function alignOverlay() {
    utils.DomHandler.alignOverlay(overlayRef.current, labelRef.current.parentElement, props.appendTo || context && context.appendTo || PrimeReact__default["default"].appendTo);
  };
  var isClearClicked = function isClearClicked(event) {
    return utils.DomHandler.getAttribute(event.target, 'data-pc-section') === 'clearicon';
  };
  var isSelectAllClicked = function isSelectAllClicked(event) {
    return utils.DomHandler.getAttribute(event.target, 'data-pc-section') === 'headercheckboxcontainer';
  };
  var isPanelClicked = function isPanelClicked(event) {
    return overlayRef.current && overlayRef.current.contains(event.target);
  };
  var onCloseClick = function onCloseClick(event) {
    hide();
    utils.DomHandler.focus(inputRef.current);
    event.preventDefault();
    event.stopPropagation();
  };
  var getSelectedOptionIndex = function getSelectedOptionIndex() {
    if (props.value != null && props.options) {
      if (props.optionGroupLabel) {
        var groupIndex = 0;
        var optionIndex = props.options.findIndex(function (optionGroup, i) {
          return (groupIndex = i) && findOptionIndexInList(props.value, getOptionGroupChildren(optionGroup)) !== -1;
        });
        return optionIndex !== -1 ? {
          group: groupIndex,
          option: optionIndex
        } : -1;
      } else {
        return findOptionIndexInList(props.value, props.options);
      }
    }
    return -1;
  };
  var findOptionIndexInList = function findOptionIndexInList(value, list) {
    return list.findIndex(function (item) {
      return value.some(function (val) {
        return utils.ObjectUtils.equals(val, getOptionValue(item), equalityKey);
      });
    });
  };
  var isSelected = function isSelected(option) {
    if (props.value) {
      var optionValue = getOptionValue(option);
      var isUsed = isOptionValueUsed(option);
      return props.value.some(function (val) {
        return utils.ObjectUtils.equals(isUsed ? val : getOptionValue(val), optionValue, equalityKey);
      });
    }
    return false;
  };
  var getLabelByValue = function getLabelByValue(val) {
    var option;
    if (props.options) {
      if (props.optionGroupLabel) {
        var _iterator = _createForOfIteratorHelper(props.options),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var optionGroup = _step.value;
            option = findOptionByValue(val, getOptionGroupChildren(optionGroup));
            if (option) {
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        option = findOptionByValue(val, props.options);
        if (utils.ObjectUtils.isEmpty(option)) {
          option = findOptionByValue(val, props.value);
        }
      }
    }
    return option ? getOptionLabel(option) : null;
  };
  var findOptionByValue = function findOptionByValue(val, list) {
    return list.find(function (option) {
      return utils.ObjectUtils.equals(getOptionValue(option), val, equalityKey);
    });
  };
  var onFocus = function onFocus(event) {
    setFocusedState(true);
    props.onFocus && props.onFocus(event);
  };
  var onBlur = function onBlur(event) {
    setFocusedState(false);
    props.onBlur && props.onBlur(event);
  };
  var isAllSelected = function isAllSelected() {
    if (props.onSelectAll) {
      return props.selectAll;
    } else {
      if (utils.ObjectUtils.isEmpty(visibleOptions)) {
        return false;
      }
      var options = visibleOptions.filter(function (option) {
        return !isOptionDisabled(option);
      });
      if (props.optionGroupLabel) {
        var areAllSelected = true;
        var _iterator2 = _createForOfIteratorHelper(options),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var optionGroup = _step2.value;
            var visibleOptionsGroupChildren = getOptionGroupChildren(optionGroup).filter(function (option) {
              return !isOptionDisabled(option);
            });
            if (visibleOptionsGroupChildren.some(function (option) {
              return !isSelected(option);
            }) === true) {
              areAllSelected = false;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return areAllSelected;
      } else {
        return !options.some(function (option) {
          return !isSelected(option);
        });
      }
    }
  };
  var getOptionLabel = function getOptionLabel(option) {
    return props.optionLabel ? utils.ObjectUtils.resolveFieldData(option, props.optionLabel) : option && option['label'] !== undefined ? option['label'] : option;
  };
  var getOptionValue = function getOptionValue(option) {
    if (props.useOptionAsValue) {
      return option;
    }
    if (props.optionValue) {
      var data = utils.ObjectUtils.resolveFieldData(option, props.optionValue);
      return data !== null ? data : option;
    }
    return option && option['value'] !== undefined ? option['value'] : option;
  };
  var getOptionRenderKey = function getOptionRenderKey(option) {
    return props.dataKey ? utils.ObjectUtils.resolveFieldData(option, props.dataKey) : getOptionLabel(option);
  };
  var getOptionGroupRenderKey = function getOptionGroupRenderKey(optionGroup) {
    return utils.ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel);
  };
  var getOptionGroupLabel = function getOptionGroupLabel(optionGroup) {
    return utils.ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel);
  };
  var getOptionGroupChildren = function getOptionGroupChildren(optionGroup) {
    return utils.ObjectUtils.resolveFieldData(optionGroup, props.optionGroupChildren);
  };
  var isOptionDisabled = function isOptionDisabled(option) {
    if (props.optionDisabled) {
      return utils.ObjectUtils.isFunction(props.optionDisabled) ? props.optionDisabled(option) : utils.ObjectUtils.resolveFieldData(option, props.optionDisabled);
    }
    return option && option['disabled'] !== undefined ? option['disabled'] : false;
  };
  var isOptionValueUsed = function isOptionValueUsed(option) {
    return !props.useOptionAsValue && props.optionValue || option && option['value'] !== undefined;
  };
  var removeChip = function removeChip(event, item) {
    var value = props.value.filter(function (val) {
      return !utils.ObjectUtils.equals(val, item, equalityKey);
    });
    if (props.onRemove) {
      props.onRemove({
        originalEvent: event,
        value: value
      });
    }
    updateModel(event, value, item);
  };
  var getSelectedItemsLabel = function getSelectedItemsLabel() {
    var pattern = /{(.*?)}/;
    if (pattern.test(props.selectedItemsLabel)) {
      return props.selectedItemsLabel.replace(props.selectedItemsLabel.match(pattern)[0], props.value.length + '');
    }
    return props.selectedItemsLabel;
  };
  var getLabel = function getLabel() {
    var label;
    if (!empty && !props.fixedPlaceholder) {
      if (utils.ObjectUtils.isNotEmpty(props.maxSelectedLabels) && props.value.length > props.maxSelectedLabels) {
        return getSelectedItemsLabel();
      } else {
        if (utils.ObjectUtils.isArray(props.value)) {
          return props.value.reduce(function (acc, value, index) {
            return acc + (index !== 0 ? ', ' : '') + getLabelByValue(value);
          }, '');
        } else {
          return '';
        }
      }
    }
    return label;
  };
  var getLabelContent = function getLabelContent() {
    if (props.selectedItemTemplate) {
      if (!empty) {
        if (utils.ObjectUtils.isNotEmpty(props.maxSelectedLabels) && props.value.length > props.maxSelectedLabels) {
          return getSelectedItemsLabel();
        } else {
          return props.value.map(function (val, index) {
            var item = utils.ObjectUtils.getJSXElement(props.selectedItemTemplate, val);
            return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, {
              key: index
            }, item);
          });
        }
      } else {
        return utils.ObjectUtils.getJSXElement(props.selectedItemTemplate);
      }
    } else {
      if (props.display === 'chip' && !empty) {
        var value = props.value.slice(0, props.maxSelectedLabels || props.value.length);
        return value.map(function (val, i) {
          var label = getLabelByValue(val);
          var iconProps = utils.mergeProps({
            key: i,
            className: cx('removeTokenIcon'),
            onClick: function onClick(e) {
              return removeChip(e, val);
            }
          }, ptm('removeTokenIcon'));
          var icon = !props.disabled && (props.removeIcon ? utils.IconUtils.getJSXIcon(props.removeIcon, _objectSpread({}, iconProps), {
            props: props
          }) : /*#__PURE__*/React__namespace.createElement(timescircle.TimesCircleIcon, iconProps));
          var tokenProps = utils.mergeProps({
            className: cx('token')
          }, ptm('token'));
          var tokenLabelProps = utils.mergeProps({
            key: label + i,
            className: cx('tokenLabel')
          }, ptm('tokenLabel'));
          return /*#__PURE__*/React__namespace.createElement("div", _extends({}, tokenProps, {
            key: label
          }), /*#__PURE__*/React__namespace.createElement("span", tokenLabelProps, label), icon);
        });
      }
      return getLabel();
    }
  };
  var getVisibleOptions = function getVisibleOptions() {
    if (hasFilter) {
      var filterValue = filterState.trim().toLocaleLowerCase(props.filterLocale);
      var searchFields = props.filterBy ? props.filterBy.split(',') : [props.optionLabel || 'label'];
      if (props.optionGroupLabel) {
        var filteredGroups = [];
        var _iterator3 = _createForOfIteratorHelper(props.options),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var optgroup = _step3.value;
            var filteredSubOptions = PrimeReact.FilterService.filter(getOptionGroupChildren(optgroup), searchFields, filterValue, props.filterMatchMode, props.filterLocale);
            if (filteredSubOptions && filteredSubOptions.length) {
              filteredGroups.push(_objectSpread(_objectSpread({}, optgroup), _defineProperty({}, props.optionGroupChildren, filteredSubOptions)));
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        return filteredGroups;
      } else {
        return PrimeReact.FilterService.filter(props.options, searchFields, filterValue, props.filterMatchMode, props.filterLocale);
      }
    } else {
      return props.options;
    }
  };
  React__namespace.useImperativeHandle(ref, function () {
    return {
      props: props,
      show: show,
      hide: hide,
      focus: function focus() {
        return utils.DomHandler.focus(inputRef.current);
      },
      getElement: function getElement() {
        return elementRef.current;
      },
      getOverlay: function getOverlay() {
        return overlayRef.current;
      },
      getInput: function getInput() {
        return inputRef.current;
      }
    };
  });
  hooks.useMountEffect(function () {
    alignOverlay();
  });
  React__namespace.useEffect(function () {
    utils.ObjectUtils.combinedRefs(inputRef, props.inputRef);
  }, [inputRef, props.inputRef]);
  React__namespace.useEffect(function () {
    setTimeout(function () {
      props.overlayVisible ? show() : hide();
    }, 100);
  }, [props.overlayVisible]);
  hooks.useUpdateEffect(function () {
    if (overlayVisibleState && filterState && hasFilter) {
      alignOverlay();
    }
  }, [overlayVisibleState, filterState, hasFilter]);
  hooks.useUnmountEffect(function () {
    utils.ZIndexUtils.clear(overlayRef.current);
  });
  var createClearIcon = function createClearIcon() {
    var clearIconProps = utils.mergeProps({
      className: cx('clearIcon'),
      onClick: function onClick(e) {
        return updateModel(e, [], []);
      }
    }, ptm('clearIcon'));
    var icon = props.clearIcon || /*#__PURE__*/React__namespace.createElement(times.TimesIcon, clearIconProps);
    var clearIcon = utils.IconUtils.getJSXIcon(icon, _objectSpread({}, clearIconProps), {
      props: props
    });
    if (!empty && props.showClear && !props.disabled) {
      return clearIcon;
    }
    return null;
  };
  var createLabel = function createLabel() {
    var content = getLabelContent();
    var labelContainerProps = utils.mergeProps({
      ref: labelRef,
      className: cx('labelContainer')
    }, ptm('labelContainer'));
    var labelProps = utils.mergeProps({
      className: cx('label', {
        empty: empty
      })
    }, ptm('label'));
    return /*#__PURE__*/React__namespace.createElement("div", labelContainerProps, /*#__PURE__*/React__namespace.createElement("div", labelProps, content || props.placeholder || 'empty'));
  };
  var visibleOptions = getVisibleOptions();
  var hasTooltip = utils.ObjectUtils.isNotEmpty(props.tooltip);
  var otherProps = MultiSelectBase.getOtherProps(props);
  var ariaProps = utils.ObjectUtils.reduceKeys(otherProps, utils.DomHandler.ARIA_PROPS);
  var triggerIconProps = utils.mergeProps({
    className: cx('triggerIcon')
  }, ptm('triggerIcon'));
  var triggerProps = utils.mergeProps({
    className: cx('trigger')
  }, ptm('trigger'));
  var dropdownIcon = /*#__PURE__*/React__namespace.createElement("div", triggerProps, props.dropdownIcon ? utils.IconUtils.getJSXIcon(props.dropdownIcon, _objectSpread({}, triggerIconProps), {
    props: props
  }) : /*#__PURE__*/React__namespace.createElement(chevrondown.ChevronDownIcon, triggerIconProps));
  var label = !props.inline && createLabel();
  var clearIcon = !props.inline && createClearIcon();
  var rootProps = utils.mergeProps(_objectSpread(_objectSpread({
    ref: elementRef,
    id: props.id,
    style: _objectSpread(_objectSpread({}, props.style), sx('root')),
    className: utils.classNames(props.className, cx('root', {
      focusedState: focusedState,
      overlayVisibleState: overlayVisibleState
    }))
  }, otherProps), {}, {
    onClick: onClick
  }), MultiSelectBase.getOtherProps(props), ptm('root'));
  var hiddenInputWrapperProps = utils.mergeProps({
    className: 'p-hidden-accessible'
  }, ptm('hiddenInputWrapper'));
  var inputProps = utils.mergeProps(_objectSpread({
    ref: inputRef,
    id: props.inputId,
    name: props.name,
    type: 'text',
    onFocus: onFocus,
    onBlur: onBlur,
    onKeyDown: onKeyDown,
    role: 'listbox',
    'aria-expanded': overlayVisibleState,
    disabled: props.disabled,
    tabIndex: props.tabIndex
  }, ariaProps), ptm('input'));
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("div", rootProps, /*#__PURE__*/React__namespace.createElement("div", hiddenInputWrapperProps, /*#__PURE__*/React__namespace.createElement("input", _extends({}, inputProps, {
    readOnly: true
  }))), !props.inline && /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, label, clearIcon, dropdownIcon), /*#__PURE__*/React__namespace.createElement(MultiSelectPanel, _extends({
    hostName: "MultiSelect",
    ref: overlayRef,
    visibleOptions: visibleOptions
  }, props, {
    onClick: onPanelClick,
    onOverlayHide: hide,
    filterValue: filterState,
    hasFilter: hasFilter,
    onFilterInputChange: onFilterInputChange,
    resetFilter: resetFilter,
    onCloseClick: onCloseClick,
    onSelectAll: onSelectAll,
    getOptionLabel: getOptionLabel,
    getOptionRenderKey: getOptionRenderKey,
    isOptionDisabled: isOptionDisabled,
    getOptionGroupChildren: getOptionGroupChildren,
    getOptionGroupLabel: getOptionGroupLabel,
    getOptionGroupRenderKey: getOptionGroupRenderKey,
    isSelected: isSelected,
    getSelectedOptionIndex: getSelectedOptionIndex,
    isAllSelected: isAllSelected,
    onOptionSelect: onOptionSelect,
    allowOptionSelect: allowOptionSelect,
    onOptionKeyDown: onOptionKeyDown,
    "in": overlayVisibleState,
    onEnter: onOverlayEnter,
    onEntered: onOverlayEntered,
    onExit: onOverlayExit,
    onExited: onOverlayExited,
    ptm: ptm,
    cx: cx,
    sx: sx,
    isUnstyled: isUnstyled,
    metaData: metaData
  }))), hasTooltip && /*#__PURE__*/React__namespace.createElement(tooltip.Tooltip, _extends({
    target: elementRef,
    content: props.tooltip
  }, props.tooltipOptions, {
    pt: ptm('tooltip')
  })));
}));
MultiSelect.displayName = 'MultiSelect';

exports.N = MultiSelect;


/***/ }),

/***/ 1184:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
'use client';
'use strict';

__webpack_unused_export__ = ({ value: true });

var React = __webpack_require__(8038);
var api = __webpack_require__(284);
var componentbase = __webpack_require__(7095);
var hooks = __webpack_require__(5215);
var chevronleft = __webpack_require__(590);
var chevronright = __webpack_require__(5665);
var times = __webpack_require__(776);
var ripple = __webpack_require__(6412);
var utils = __webpack_require__(7666);

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

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var classes = {
  navcontent: 'p-tabview-nav-content',
  nav: 'p-tabview-nav',
  inkbar: 'p-tabview-ink-bar',
  panelcontainer: function panelcontainer(_ref) {
    var props = _ref.props;
    return utils.classNames('p-tabview-panels', props.panelContainerClassName);
  },
  prevbutton: 'p-tabview-nav-prev p-tabview-nav-btn p-link',
  nextbutton: 'p-tabview-nav-next p-tabview-nav-btn p-link',
  root: function root(_ref2) {
    var props = _ref2.props;
    return utils.classNames('p-tabview p-component', {
      'p-tabview-scrollable': props.scrollable
    }, props.className);
  },
  navcontainer: 'p-tabview-nav-container',
  tab: {
    header: function header(_ref3) {
      var selected = _ref3.selected,
        disabled = _ref3.disabled,
        headerClassName = _ref3.headerClassName,
        _className = _ref3._className;
      return utils.classNames('p-unselectable-text', {
        'p-tabview-selected p-highlight': selected,
        'p-disabled': disabled
      }, headerClassName, _className);
    },
    headertitle: 'p-tabview-title',
    headeraction: 'p-tabview-nav-link',
    content: function content(_ref4) {
      var props = _ref4.props,
        selected = _ref4.selected,
        getTabProp = _ref4.getTabProp,
        tab = _ref4.tab,
        isSelected = _ref4.isSelected,
        shouldUseTab = _ref4.shouldUseTab,
        index = _ref4.index;
      return shouldUseTab(tab, index) && (!props.renderActiveOnly || isSelected(index)) ? utils.classNames(getTabProp(tab, 'contentClassName'), getTabProp(tab, 'className'), 'p-tabview-panel', {
        'p-hidden': !selected
      }) : undefined;
    }
  }
};
var styles = "\n@layer primereact {\n    .p-tabview-nav-container {\n        position: relative;\n    }\n    \n    .p-tabview-scrollable .p-tabview-nav-container {\n        overflow: hidden;\n    }\n    \n    .p-tabview-nav-content {\n        overflow-x: auto;\n        overflow-y: hidden;\n        scroll-behavior: smooth;\n        scrollbar-width: none;\n        overscroll-behavior: contain auto;\n        position: relative;\n    }\n    \n    .p-tabview-nav {\n        display: flex;\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n        flex: 1 1 auto;\n    }\n    \n    .p-tabview-nav-link {\n        cursor: pointer;\n        user-select: none;\n        display: flex;\n        align-items: center;\n        position: relative;\n        text-decoration: none;\n        overflow: hidden;\n    }\n    \n    .p-tabview-ink-bar {\n        display: none;\n        z-index: 1;\n    }\n    \n    .p-tabview-nav-link:focus {\n        z-index: 1;\n    }\n    \n    .p-tabview-close {\n        z-index: 1;\n    }\n    \n    .p-tabview-title {\n        line-height: 1;\n        white-space: nowrap;\n    }\n    \n    .p-tabview-nav-btn {\n        position: absolute;\n        top: 0;\n        z-index: 2;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    \n    .p-tabview-nav-prev {\n        left: 0;\n    }\n    \n    .p-tabview-nav-next {\n        right: 0;\n    }\n    \n    .p-tabview-nav-content::-webkit-scrollbar {\n        display: none;\n    }\n}\n";
var inlineStyles = {
  tab: {
    header: function header(_ref5) {
      var headerStyle = _ref5.headerStyle,
        _style = _ref5._style;
      return _objectSpread$1(_objectSpread$1({}, headerStyle || {}), _style || {});
    },
    content: function content(_ref6) {
      var props = _ref6.props,
        getTabProp = _ref6.getTabProp,
        tab = _ref6.tab,
        isSelected = _ref6.isSelected,
        shouldUseTab = _ref6.shouldUseTab,
        index = _ref6.index;
      return shouldUseTab(tab, index) && (!props.renderActiveOnly || isSelected(index)) ? _objectSpread$1(_objectSpread$1({}, getTabProp(tab, 'contentStyle') || {}), getTabProp(tab, 'style') || {}) : undefined;
    }
  }
};
var TabViewBase = componentbase.ComponentBase.extend({
  defaultProps: {
    __TYPE: 'TabView',
    id: null,
    activeIndex: 0,
    className: null,
    onBeforeTabChange: null,
    onBeforeTabClose: null,
    onTabChange: null,
    onTabClose: null,
    panelContainerClassName: null,
    panelContainerStyle: null,
    renderActiveOnly: true,
    scrollable: false,
    style: null,
    children: undefined
  },
  css: {
    classes: classes,
    styles: styles,
    inlineStyles: inlineStyles
  }
});
var TabPanelBase = componentbase.ComponentBase.extend({
  defaultProps: {
    __TYPE: 'TabPanel',
    className: null,
    closable: false,
    contentClassName: null,
    contentStyle: null,
    disabled: false,
    header: null,
    headerClassName: null,
    headerStyle: null,
    headerTemplate: null,
    leftIcon: null,
    rightIcon: null,
    prevButton: null,
    nextButton: null,
    closeIcon: null,
    style: null,
    children: undefined
  },
  getCProp: function getCProp(tab, name) {
    return utils.ObjectUtils.getComponentProp(tab, name, TabPanelBase.defaultProps);
  },
  getCProps: function getCProps(tab) {
    return utils.ObjectUtils.getComponentProps(tab, TabPanelBase.defaultProps);
  },
  getCOtherProps: function getCOtherProps(tab) {
    return utils.ObjectUtils.getComponentDiffProps(tab, TabPanelBase.defaultProps);
  }
});

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TabPanel = function TabPanel() {};
var TabView = /*#__PURE__*/React__namespace.forwardRef(function (inProps, ref) {
  var context = React__namespace.useContext(api.PrimeReactContext);
  var props = TabViewBase.getProps(inProps, context);
  var _React$useState = React__namespace.useState(props.id),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    idState = _React$useState2[0],
    setIdState = _React$useState2[1];
  var _React$useState3 = React__namespace.useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    backwardIsDisabledState = _React$useState4[0],
    setBackwardIsDisabledState = _React$useState4[1];
  var _React$useState5 = React__namespace.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    forwardIsDisabledState = _React$useState6[0],
    setForwardIsDisabledState = _React$useState6[1];
  var _React$useState7 = React__namespace.useState([]),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    hiddenTabsState = _React$useState8[0],
    setHiddenTabsState = _React$useState8[1];
  var _React$useState9 = React__namespace.useState(props.activeIndex),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    activeIndexState = _React$useState10[0],
    setActiveIndexState = _React$useState10[1];
  var elementRef = React__namespace.useRef(null);
  var contentRef = React__namespace.useRef(null);
  var navRef = React__namespace.useRef(null);
  var inkbarRef = React__namespace.useRef(null);
  var prevBtnRef = React__namespace.useRef(null);
  var nextBtnRef = React__namespace.useRef(null);
  var tabsRef = React__namespace.useRef({});
  var activeIndex = props.onTabChange ? props.activeIndex : activeIndexState;
  var metaData = {
    props: props,
    state: {
      id: idState,
      isPrevButtonDisabled: backwardIsDisabledState,
      isNextButtonDisabled: forwardIsDisabledState,
      hiddenTabsState: hiddenTabsState,
      activeIndex: activeIndexState
    }
  };
  var _TabViewBase$setMetaD = TabViewBase.setMetaData(_objectSpread({}, metaData)),
    ptm = _TabViewBase$setMetaD.ptm,
    ptmo = _TabViewBase$setMetaD.ptmo,
    cx = _TabViewBase$setMetaD.cx,
    sx = _TabViewBase$setMetaD.sx,
    isUnstyled = _TabViewBase$setMetaD.isUnstyled;
  componentbase.useHandleStyle(TabViewBase.css.styles, isUnstyled, {
    name: 'tabview'
  });
  var getTabPT = function getTabPT(tab, key) {
    return ptmo(getTabProp(tab, 'pt'), key, {
      props: tab.props,
      parent: metaData
    });
  };
  var isSelected = function isSelected(index) {
    return index === activeIndex;
  };
  var getTabProp = function getTabProp(tab, name) {
    return TabPanelBase.getCProp(tab, name);
  };
  var shouldUseTab = function shouldUseTab(tab) {
    return tab && utils.ObjectUtils.isValidChild(tab, 'TabPanel') && hiddenTabsState.every(function (_i) {
      return _i !== tab.key;
    });
  };
  var findVisibleActiveTab = function findVisibleActiveTab(i) {
    var tabsInfo = React__namespace.Children.map(props.children, function (tab, index) {
      if (shouldUseTab(tab)) {
        return {
          tab: tab,
          index: index
        };
      }
    });
    return tabsInfo.find(function (_ref) {
      var tab = _ref.tab,
        index = _ref.index;
      return !getTabProp(tab, 'disabled') && index >= i;
    }) || tabsInfo.reverse().find(function (_ref2) {
      var tab = _ref2.tab,
        index = _ref2.index;
      return !getTabProp(tab, 'disabled') && i > index;
    });
  };
  var onTabHeaderClose = function onTabHeaderClose(event, index) {
    event.preventDefault();
    var onBeforeTabClose = props.onBeforeTabClose,
      onTabClose = props.onTabClose,
      children = props.children;
    var key = children[index].key;

    // give caller a chance to stop the selection
    if (onBeforeTabClose && onBeforeTabClose({
      originalEvent: event,
      index: index
    }) === false) {
      return;
    }
    setHiddenTabsState([].concat(_toConsumableArray(hiddenTabsState), [key]));
    if (onTabClose) {
      onTabClose({
        originalEvent: event,
        index: index
      });
    }
  };
  var onTabHeaderClick = function onTabHeaderClick(event, tab, index) {
    if (event) {
      event.preventDefault();
    }
    if (!getTabProp(tab, 'disabled')) {
      // give caller a chance to stop the selection
      if (props.onBeforeTabChange && props.onBeforeTabChange({
        originalEvent: event,
        index: index
      }) === false) {
        return;
      }
      if (props.onTabChange) props.onTabChange({
        originalEvent: event,
        index: index
      });else setActiveIndexState(index);
    }
    updateScrollBar(index);
  };
  var _onKeyDown = function onKeyDown(event, tab, index) {
    if (event.key === 'Enter') {
      onTabHeaderClick(event, tab, index);
    }
  };
  var updateInkBar = function updateInkBar() {
    var tabHeader = tabsRef.current["tab_".concat(activeIndex)];
    inkbarRef.current.style.width = utils.DomHandler.getWidth(tabHeader) + 'px';
    inkbarRef.current.style.left = utils.DomHandler.getOffset(tabHeader).left - utils.DomHandler.getOffset(navRef.current).left + 'px';
  };
  var updateScrollBar = function updateScrollBar(index) {
    var tabHeader = tabsRef.current["tab_".concat(index)];
    if (tabHeader && tabHeader.scrollIntoView) {
      tabHeader.scrollIntoView({
        block: 'nearest'
      });
    }
  };
  var updateButtonState = function updateButtonState() {
    var _contentRef$current = contentRef.current,
      scrollLeft = _contentRef$current.scrollLeft,
      scrollWidth = _contentRef$current.scrollWidth;
    var width = utils.DomHandler.getWidth(contentRef.current);
    setBackwardIsDisabledState(scrollLeft === 0);
    setForwardIsDisabledState(scrollLeft === scrollWidth - width);
  };
  var onScroll = function onScroll(event) {
    props.scrollable && updateButtonState();
    event.preventDefault();
  };
  var getVisibleButtonWidths = function getVisibleButtonWidths() {
    return [prevBtnRef.current, nextBtnRef.current].reduce(function (acc, el) {
      return el ? acc + utils.DomHandler.getWidth(el) : acc;
    }, 0);
  };
  var navBackward = function navBackward() {
    var width = utils.DomHandler.getWidth(contentRef.current) - getVisibleButtonWidths();
    var pos = contentRef.current.scrollLeft - width;
    contentRef.current.scrollLeft = pos <= 0 ? 0 : pos;
  };
  var navForward = function navForward() {
    var width = utils.DomHandler.getWidth(contentRef.current) - getVisibleButtonWidths();
    var pos = contentRef.current.scrollLeft + width;
    var lastPos = contentRef.current.scrollWidth - width;
    contentRef.current.scrollLeft = pos >= lastPos ? lastPos : pos;
  };
  var reset = function reset() {
    setBackwardIsDisabledState(true);
    setForwardIsDisabledState(false);
    setHiddenTabsState([]);
    if (props.onTabChange) props.onTabChange({
      index: activeIndex
    });else setActiveIndexState(props.activeIndex);
  };
  React__namespace.useEffect(function () {
    updateInkBar();
  });
  hooks.useMountEffect(function () {
    if (!idState) {
      setIdState(utils.UniqueComponentId());
    }
  });
  hooks.useUpdateEffect(function () {
    if (utils.ObjectUtils.isNotEmpty(hiddenTabsState)) {
      var tabInfo = findVisibleActiveTab(hiddenTabsState[hiddenTabsState.length - 1]);
      tabInfo && onTabHeaderClick(null, tabInfo.tab, tabInfo.index);
    }
  }, [hiddenTabsState]);
  hooks.useUpdateEffect(function () {
    if (props.activeIndex !== activeIndexState) {
      updateScrollBar(props.activeIndex);
    }
  }, [props.activeIndex]);
  React__namespace.useImperativeHandle(ref, function () {
    return {
      props: props,
      reset: reset,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var createTabHeader = function createTabHeader(tab, index) {
    var selected = isSelected(index);
    var _TabPanelBase$getCPro = TabPanelBase.getCProps(tab),
      headerStyle = _TabPanelBase$getCPro.headerStyle,
      headerClassName = _TabPanelBase$getCPro.headerClassName,
      _style = _TabPanelBase$getCPro.style,
      _className = _TabPanelBase$getCPro.className,
      disabled = _TabPanelBase$getCPro.disabled,
      leftIcon = _TabPanelBase$getCPro.leftIcon,
      rightIcon = _TabPanelBase$getCPro.rightIcon,
      header = _TabPanelBase$getCPro.header,
      headerTemplate = _TabPanelBase$getCPro.headerTemplate,
      closable = _TabPanelBase$getCPro.closable,
      closeIcon = _TabPanelBase$getCPro.closeIcon;
    var headerId = idState + '_header_' + index;
    var ariaControls = idState + '_content_' + index;
    var tabIndex = disabled ? null : 0;
    var leftIconElement = leftIcon && utils.IconUtils.getJSXIcon(leftIcon, undefined, {
      props: props
    });
    var headerTitleProps = utils.mergeProps({
      className: cx('tab.headertitle')
    }, getTabPT(tab, 'headertitle'));
    var titleElement = /*#__PURE__*/React__namespace.createElement("span", headerTitleProps, header);
    var rightIconElement = rightIcon && utils.IconUtils.getJSXIcon(rightIcon, undefined, {
      props: props
    });
    var iconClassName = 'p-tabview-close';
    var icon = closeIcon || /*#__PURE__*/React__namespace.createElement(times.TimesIcon, {
      className: iconClassName,
      onClick: function onClick(e) {
        return onTabHeaderClose(e, index);
      }
    });
    var closableIconElement = closable ? utils.IconUtils.getJSXIcon(icon, {
      className: iconClassName,
      onClick: function onClick(e) {
        return onTabHeaderClose(e, index);
      }
    }, {
      props: props
    }) : null;
    var headerActionProps = utils.mergeProps({
      id: headerId,
      role: 'tab',
      className: cx('tab.headeraction'),
      tabIndex: tabIndex,
      'aria-controls': ariaControls,
      'aria-selected': selected,
      onClick: function onClick(e) {
        return onTabHeaderClick(e, tab, index);
      },
      onKeyDown: function onKeyDown(e) {
        return _onKeyDown(e, tab, index);
      }
    }, getTabPT(tab, 'headeraction'));
    var content =
    /*#__PURE__*/
    // eslint-disable /
    React__namespace.createElement("a", headerActionProps, leftIconElement, titleElement, rightIconElement, closableIconElement, /*#__PURE__*/React__namespace.createElement(ripple.Ripple, null))
    // eslint-enable /
    ;

    if (headerTemplate) {
      var defaultContentOptions = {
        className: 'p-tabview-nav-link',
        titleClassName: 'p-tabview-title',
        onClick: function onClick(e) {
          return onTabHeaderClick(e, tab, index);
        },
        onKeyDown: function onKeyDown(e) {
          return _onKeyDown(e, tab, index);
        },
        leftIconElement: leftIconElement,
        titleElement: titleElement,
        rightIconElement: rightIconElement,
        element: content,
        props: props,
        index: index,
        selected: selected,
        ariaControls: ariaControls
      };
      content = utils.ObjectUtils.getJSXElement(headerTemplate, defaultContentOptions);
    }
    var headerProps = utils.mergeProps({
      ref: function ref(el) {
        return tabsRef.current["tab_".concat(index)] = el;
      },
      className: cx('tab.header', {
        selected: selected,
        disabled: disabled,
        headerClassName: headerClassName,
        _className: _className
      }),
      style: sx('tab.header', {
        headerStyle: headerStyle,
        _style: _style
      }),
      role: 'presentation'
    }, getTabPT(tab, 'root'), getTabPT(tab, 'header'));
    return /*#__PURE__*/React__namespace.createElement("li", headerProps, content);
  };
  var createTabHeaders = function createTabHeaders() {
    return React__namespace.Children.map(props.children, function (tab, index) {
      if (shouldUseTab(tab)) {
        return createTabHeader(tab, index);
      }
    });
  };
  var createNavigator = function createNavigator() {
    var headers = createTabHeaders();
    var navContentProps = utils.mergeProps({
      id: idState,
      ref: contentRef,
      className: cx('navcontent'),
      style: props.style,
      onScroll: onScroll
    }, ptm('navcontent'));
    var navProps = utils.mergeProps({
      ref: navRef,
      className: cx('nav'),
      role: 'tablist'
    }, ptm('nav'));
    var inkbarProps = utils.mergeProps({
      ref: inkbarRef,
      className: cx('inkbar')
    }, ptm('inkbar'));
    return /*#__PURE__*/React__namespace.createElement("div", navContentProps, /*#__PURE__*/React__namespace.createElement("ul", navProps, headers, /*#__PURE__*/React__namespace.createElement("li", inkbarProps)));
  };
  var createContent = function createContent() {
    var panelContainerProps = utils.mergeProps({
      className: cx('panelcontainer'),
      style: props.panelContainerStyle
    }, ptm('panelcontainer'));
    var contents = React__namespace.Children.map(props.children, function (tab, index) {
      if (shouldUseTab(tab) && (!props.renderActiveOnly || isSelected(index))) {
        var selected = isSelected(index);
        var contentId = idState + '_content_' + index;
        var ariaLabelledBy = idState + '_header_' + index;
        var contentProps = utils.mergeProps({
          id: contentId,
          className: cx('tab.content', {
            props: props,
            selected: selected,
            getTabProp: getTabProp,
            tab: tab,
            isSelected: isSelected,
            shouldUseTab: shouldUseTab,
            index: index
          }),
          style: sx('tab.content', {
            props: props,
            getTabProp: getTabProp,
            tab: tab,
            isSelected: isSelected,
            shouldUseTab: shouldUseTab,
            index: index
          }),
          role: 'tabpanel',
          'aria-labelledby': ariaLabelledBy,
          'aria-hidden': !selected
        }, TabPanelBase.getCOtherProps(tab), getTabPT(tab, 'root'), getTabPT(tab, 'content'));
        return /*#__PURE__*/React__namespace.createElement("div", contentProps, !props.renderActiveOnly ? getTabProp(tab, 'children') : selected && getTabProp(tab, 'children'));
      }
    });
    return /*#__PURE__*/React__namespace.createElement("div", panelContainerProps, contents);
  };
  var createPrevButton = function createPrevButton() {
    var prevIconProps = utils.mergeProps(ptm('previcon'));
    var icon = props.prevButton || /*#__PURE__*/React__namespace.createElement(chevronleft.ChevronLeftIcon, prevIconProps);
    var leftIcon = utils.IconUtils.getJSXIcon(icon, _objectSpread({}, prevIconProps), {
      props: props
    });
    var prevButtonProps = utils.mergeProps({
      ref: prevBtnRef,
      type: 'button',
      className: cx('prevbutton'),
      'aria-label': api.ariaLabel('previousPageLabel'),
      onClick: function onClick(e) {
        return navBackward();
      }
    }, ptm('prevbutton'));
    if (props.scrollable && !backwardIsDisabledState) {
      return /*#__PURE__*/React__namespace.createElement("button", prevButtonProps, leftIcon, /*#__PURE__*/React__namespace.createElement(ripple.Ripple, null));
    }
    return null;
  };
  var createNextButton = function createNextButton() {
    var nextIconProps = utils.mergeProps({
      'aria-hidden': 'true'
    }, ptm('nexticon'));
    var icon = props.nextButton || /*#__PURE__*/React__namespace.createElement(chevronright.ChevronRightIcon, nextIconProps);
    var rightIcon = utils.IconUtils.getJSXIcon(icon, _objectSpread({}, nextIconProps), {
      props: props
    });
    var nextButtonProps = utils.mergeProps({
      ref: nextBtnRef,
      type: 'button',
      className: cx('nextbutton'),
      'aria-label': api.ariaLabel('nextPageLabel'),
      onClick: function onClick(e) {
        return navForward();
      }
    }, ptm('nextbutton'));
    if (props.scrollable && !forwardIsDisabledState) {
      return /*#__PURE__*/React__namespace.createElement("button", nextButtonProps, rightIcon, /*#__PURE__*/React__namespace.createElement(ripple.Ripple, null));
    }
  };
  var rootProps = utils.mergeProps({
    id: idState,
    ref: elementRef,
    style: props.style,
    className: cx('root')
  }, TabViewBase.getOtherProps(props), ptm('root'));
  var navContainerProps = utils.mergeProps({
    className: cx('navcontainer')
  }, ptm('navcontainer'));
  var navigator = createNavigator();
  var content = createContent();
  var prevButton = createPrevButton();
  var nextButton = createNextButton();
  return /*#__PURE__*/React__namespace.createElement("div", rootProps, /*#__PURE__*/React__namespace.createElement("div", navContainerProps, prevButton, navigator, nextButton), content);
});
TabPanel.displayName = 'TabPanel';
TabView.displayName = 'TabView';

exports.x4 = TabPanel;
exports.xf = TabView;


/***/ })

};
;