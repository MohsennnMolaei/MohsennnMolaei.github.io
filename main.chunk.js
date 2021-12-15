(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .size {\n    position: fixed;\n    top: 0;\n    left: 0;\n  }", ""]);

// exports


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_mohsen_GitHub_TFJS_object_detection_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_mohsen_GitHub_TFJS_object_detection_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_mohsen_GitHub_TFJS_object_detection_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_mohsen_GitHub_TFJS_object_detection_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_mohsen_GitHub_TFJS_object_detection_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_mohsen_GitHub_TFJS_object_detection_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_mohsen_GitHub_TFJS_object_detection_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _home_mohsen_GitHub_TFJS_object_detection_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_mohsen_GitHub_TFJS_object_detection_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");
/* harmony import */ var _tensorflow_tfjs_converter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tensorflow/tfjs-converter */ "./node_modules/@tensorflow/tfjs-converter/dist/tf-converter.esm.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "/home/mohsen/GitHub/TFJS-object-detection/src/index.js";





_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_9__["setBackend"]('webgl');
var threshold = 0.75;

function load_model() {
  return _load_model.apply(this, arguments);
}

function _load_model() {
  _load_model = Object(_home_mohsen_GitHub_TFJS_object_detection_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_home_mohsen_GitHub_TFJS_object_detection_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var model;
    return _home_mohsen_GitHub_TFJS_object_detection_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_tensorflow_tfjs_converter__WEBPACK_IMPORTED_MODULE_10__["loadGraphModel"])("https://raw.githubusercontent.com/hugozanini/TFJS-object-detection/master/models/kangaroo-detector/model.json");

          case 2:
            model = _context.sent;
            return _context.abrupt("return", model);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _load_model.apply(this, arguments);
}

var classesDir = {
  1: {
    name: 'Kangaroo',
    id: 1
  },
  2: {
    name: 'Other',
    id: 2
  }
};

var App = /*#__PURE__*/function (_React$Component) {
  Object(_home_mohsen_GitHub_TFJS_object_detection_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _React$Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(_home_mohsen_GitHub_TFJS_object_detection_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_home_mohsen_GitHub_TFJS_object_detection_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_home_mohsen_GitHub_TFJS_object_detection_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.videoRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.canvasRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();

    _this.detectFrame = function (video, model) {
      _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_9__["engine"]().startScope();
      model.executeAsync(_this.process_input(video)).then(function (predictions) {
        _this.renderPredictions(predictions, video);

        requestAnimationFrame(function () {
          _this.detectFrame(video, model);
        });
        _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_9__["engine"]().endScope();
      });
    };

    _this.renderPredictions = function (predictions) {
      var ctx = _this.canvasRef.current.getContext("2d");

      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Font options.

      var font = "16px sans-serif";
      ctx.font = font;
      ctx.textBaseline = "top"; //Getting predictions

      var boxes = predictions[4].arraySync();
      var scores = predictions[5].arraySync();
      var classes = predictions[6].dataSync();

      var detections = _this.buildDetectedObjects(scores, threshold, boxes, classes, classesDir);

      detections.forEach(function (item) {
        var x = item['bbox'][0];
        var y = item['bbox'][1];
        var width = item['bbox'][2];
        var height = item['bbox'][3]; // Draw the bounding box.

        ctx.strokeStyle = "#00FFFF";
        ctx.lineWidth = 4;
        ctx.strokeRect(x, y, width, height); // Draw the label background.

        ctx.fillStyle = "#00FFFF";
        var textWidth = ctx.measureText(item["label"] + " " + (100 * item["score"]).toFixed(2) + "%").width;
        var textHeight = parseInt(font, 10); // base 10

        ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
      });
      detections.forEach(function (item) {
        var x = item['bbox'][0];
        var y = item['bbox'][1]; // Draw the text last to ensure it's on top.

        ctx.fillStyle = "#000000";
        ctx.fillText(item["label"] + " " + (100 * item["score"]).toFixed(2) + "%", x, y);
      });
    };

    return _this;
  }

  Object(_home_mohsen_GitHub_TFJS_object_detection_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        var webCamPromise = navigator.mediaDevices.getUserMedia({
          audio: false,
          video: {
            facingMode: "user"
          }
        }).then(function (stream) {
          window.stream = stream;
          _this2.videoRef.current.srcObject = stream;
          return new Promise(function (resolve, reject) {
            _this2.videoRef.current.onloadedmetadata = function () {
              resolve();
            };
          });
        });
        var modelPromise = load_model();
        Promise.all([modelPromise, webCamPromise]).then(function (values) {
          _this2.detectFrame(_this2.videoRef.current, values[0]);
        }).catch(function (error) {
          console.error(error);
        });
      }
    }
  }, {
    key: "process_input",
    value: function process_input(video_frame) {
      var tfimg = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_9__["browser"].fromPixels(video_frame).toInt();
      var expandedimg = tfimg.transpose([0, 1, 2]).expandDims();
      return expandedimg;
    }
  }, {
    key: "buildDetectedObjects",
    value: function buildDetectedObjects(scores, threshold, boxes, classes, classesDir) {
      var detectionObjects = [];
      var video_frame = document.getElementById('frame');
      scores[0].forEach(function (score, i) {
        if (score > threshold) {
          var bbox = [];
          var minY = boxes[0][i][0] * video_frame.offsetHeight;
          var minX = boxes[0][i][1] * video_frame.offsetWidth;
          var maxY = boxes[0][i][2] * video_frame.offsetHeight;
          var maxX = boxes[0][i][3] * video_frame.offsetWidth;
          bbox[0] = minX;
          bbox[1] = minY;
          bbox[2] = maxX - minX;
          bbox[3] = maxY - minY;
          detectionObjects.push({
            class: classes[i],
            label: classesDir[classes[i]].name,
            score: score.toFixed(4),
            bbox: bbox
          });
        }
      });
      return detectionObjects;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 9
        }
      }, "Real-Time Object Detection: Kangaroo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 9
        }
      }, "MobileNetV2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("video", {
        style: {
          height: '600px',
          width: "500px"
        },
        className: "size",
        autoPlay: true,
        playsInline: true,
        muted: true,
        ref: this.videoRef,
        width: "600",
        height: "500",
        id: "frame",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 9
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("canvas", {
        className: "size",
        ref: this.canvasRef,
        width: "600",
        height: "500",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 9
        }
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var rootElement = document.getElementById("root");
react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(App, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 180,
    columnNumber: 17
  }
}), rootElement);

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--7-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--7-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--7-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/mohsen/GitHub/TFJS-object-detection/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/mohsen/GitHub/TFJS-object-detection/src/index.js */"./src/index.js");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** string_decoder (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map