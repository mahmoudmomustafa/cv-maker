(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoginComp.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoginComp.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./resources/js/store.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "login",
  props: {},
  data: function data() {
    return {
      email: "",
      password: "",
      errors: ""
    };
  },
  methods: {
    reg: function reg() {
      this.$parent.login = !this.$parent.login;
    },
    close: function close() {
      this.errors = "";
    },
    login: function login() {
      var _this = this;

      axios.post("/login", this.$data).then(function (response) {
        _store__WEBPACK_IMPORTED_MODULE_0__["default"].commit("loginUser", response.data);
        localStorage.setItem("token", response.data.access_token);

        _this.$store.dispatch("GET_USER");

        _this.$router.push({
          name: "dashboard"
        });
      })["catch"](function (error) {
        _this.errors = error.response.data.error;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegComp.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RegComp.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "register",
  data: function data() {
    return {
      name: "",
      email: "",
      password: "",
      error: "",
      errors: []
    };
  },
  methods: {
    log: function log() {
      this.$parent.login = !this.$parent.login;
    },
    close: function close() {
      this.errors = [];
      this.error = "";
    },
    register: function register() {
      var _this = this;

      axios.post("/register", this.$data).then(function (response) {
        _this.$store.commit("loginUser", response.data);

        localStorage.setItem("token", response.data.access_token);

        _this.$store.dispatch("GET_USER");

        _this.$router.push('/dashboard');
      })["catch"](function (error) {
        console.log(error);
        _this.errors = error.response.data.errors;
        _this.error = error.response.data.message;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Auth.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_LoginComp_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/LoginComp.vue */ "./resources/js/components/LoginComp.vue");
/* harmony import */ var _components_RegComp_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/RegComp.vue */ "./resources/js/components/RegComp.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LoginComp: _components_LoginComp_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    RegComp: _components_RegComp_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      login: true
    };
  },
  methods: {
    reg: function reg() {
      this.log = !this.log;
    },
    log: function log() {
      this.log = !this.log;
    }
  },
  created: function created() {
    this.$store.commit("logoutUser");
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoginComp.vue?vue&type=style&index=0&id=5aafd786&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoginComp.vue?vue&type=style&index=0&id=5aafd786&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toasts[data-v-5aafd786] {\n  top: 5%;\n  right: 0;\n}\n.toast[data-v-5aafd786] {\n  top: 5%;\n  right: 0px;\n  opacity: 1;\n  min-width: 240px;\n  max-width: 300px;\n  background: #ff5555;\n  box-shadow: 0 0 5px #ff5555;\n  color: white;\n  z-index: 1;\n  font-family: sans-serif;\n  -webkit-animation: fade-in-right-data-v-5aafd786 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n          animation: fade-in-right-data-v-5aafd786 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n@-webkit-keyframes fade-in-right-data-v-5aafd786 {\n0% {\n    -webkit-transform: translateX(50px);\n    transform: translateX(50px);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    opacity: 1;\n}\n}\n@keyframes fade-in-right-data-v-5aafd786 {\n0% {\n    -webkit-transform: translateX(50px);\n    transform: translateX(50px);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    opacity: 1;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegComp.vue?vue&type=style&index=0&id=0dec01a8&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RegComp.vue?vue&type=style&index=0&id=0dec01a8&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toasts[data-v-0dec01a8] {\n  top: 5%;\n  right: 0;\n}\n.toast[data-v-0dec01a8] {\n  top: 5%;\n  right: 0px;\n  opacity: 1;\n  min-width: 240px;\n  max-width: 300px;\n  background: #ff5555;\n  box-shadow: 0 0 5px #ff5555;\n  color: white;\n  z-index: 1;\n  font-family: sans-serif;\n  -webkit-animation: fade-in-right-data-v-0dec01a8 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n          animation: fade-in-right-data-v-0dec01a8 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n}\n@-webkit-keyframes fade-in-right-data-v-0dec01a8 {\n0% {\n    -webkit-transform: translateX(50px);\n    transform: translateX(50px);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    opacity: 1;\n}\n}\n@keyframes fade-in-right-data-v-0dec01a8 {\n0% {\n    -webkit-transform: translateX(50px);\n    transform: translateX(50px);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n    opacity: 1;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Auth.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form {\n  background-image: url(\"/imgs/log.jpg\") !important;\n}\n.log-img .heading {\n  width: 100%;\n  height: 100%;\n  background: #735c8770;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.navbar-brand {\n  font-family: \"Pacifico\", cursive;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoginComp.vue?vue&type=style&index=0&id=5aafd786&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoginComp.vue?vue&type=style&index=0&id=5aafd786&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./LoginComp.vue?vue&type=style&index=0&id=5aafd786&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoginComp.vue?vue&type=style&index=0&id=5aafd786&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegComp.vue?vue&type=style&index=0&id=0dec01a8&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RegComp.vue?vue&type=style&index=0&id=0dec01a8&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./RegComp.vue?vue&type=style&index=0&id=0dec01a8&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegComp.vue?vue&type=style&index=0&id=0dec01a8&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Auth.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Auth.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoginComp.vue?vue&type=template&id=5aafd786&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoginComp.vue?vue&type=template&id=5aafd786&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "log p-3" }, [
      _c("nav", { staticClass: "pb-2" }, [
        _c(
          "div",
          {
            staticClass: "float-right wow slideInDown text-white text-xs",
            attrs: { "data-wow-duration": "3s", "data-wow-delay": "0s" }
          },
          [
            _vm._v("\n        Not member ?\n        "),
            _c(
              "span",
              {
                staticClass: "text-sm text-gray-200",
                attrs: {
                  "data-toggle": "tooltip",
                  "data-placement": "bottom",
                  title: "Register"
                },
                on: { click: _vm.reg }
              },
              [_vm._v("Create an account")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "body wow fadeIn",
          attrs: { "data-wow-duration": "2s", "data-wow-delay": "0s" }
        },
        [
          _c(
            "form",
            {
              attrs: { method: "POST" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.login($event)
                }
              }
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c("div", { staticClass: "md:w-4/5 w-full m-auto" }, [
                  _c(
                    "label",
                    {
                      staticClass: "text-white text-sm font-bold",
                      attrs: { for: "email" }
                    },
                    [
                      _vm._v(
                        "\n              Email\n              Address\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.email,
                        expression: "email"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "email",
                      placeholder: "Email address",
                      required: "",
                      autocomplete: "none"
                    },
                    domProps: { value: _vm.email },
                    on: {
                      keydown: function($event) {
                        return _vm.close()
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.email = $event.target.value
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("div", { staticClass: "md:w-4/5 w-full m-auto" }, [
                  _c(
                    "label",
                    {
                      staticClass: "text-white text-sm font-bold",
                      attrs: { for: "password" }
                    },
                    [_vm._v("Password")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.password,
                        expression: "password"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "password",
                      placeholder: "Password",
                      autocomplete: "none"
                    },
                    domProps: { value: _vm.password },
                    on: {
                      keydown: function($event) {
                        return _vm.close()
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.password = $event.target.value
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _vm.errors
                ? _c(
                    "div",
                    {
                      staticClass: "relative text-red-500 text-center mb-3",
                      attrs: { role: "alert" }
                    },
                    [
                      _c("strong", {
                        domProps: { textContent: _vm._s(_vm.errors) }
                      })
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm._m(1)
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header p-2 pb-4" }, [
      _c(
        "h3",
        {
          staticClass: "wow fadeInLeft",
          attrs: { "data-wow-duration": "1s", "data-wow-delay": "1s" }
        },
        [_vm._v("Sign In...")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group mb-0" }, [
      _c("div", { staticClass: "col-md-8 m-auto text-center" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-primary w-100 heartbeat",
            attrs: { type: "submit" }
          },
          [
            _vm._v("\n              Login\n              "),
            _c("i", { staticClass: "fas fa-sign-in-alt" })
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegComp.vue?vue&type=template&id=0dec01a8&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RegComp.vue?vue&type=template&id=0dec01a8&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "log p-3" }, [
      _c("nav", { staticClass: "pb-2" }, [
        _c(
          "div",
          {
            staticClass: "float-right wow slideInDown text-gray-200 text-xs",
            attrs: { "data-wow-duration": "3s", "data-wow-delay": "0s" }
          },
          [
            _vm._v("\n        already a member ?\n        "),
            _c(
              "span",
              {
                staticClass: "text-sm text-gray-200",
                attrs: {
                  "data-toggle": "tooltip",
                  "data-placement": "bottom",
                  title: "Login"
                },
                on: { click: _vm.log }
              },
              [_vm._v("Have an account")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "body wow fadeIn",
          attrs: { "data-wow-duration": "2s", "data-wow-delay": "0s" }
        },
        [
          _c(
            "form",
            {
              attrs: { method: "POST" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.register($event)
                }
              }
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c("div", { staticClass: "md:w-4/5 w-full m-auto" }, [
                  _c(
                    "label",
                    {
                      staticClass: "text-white text-sm font-bold",
                      attrs: { for: "name" }
                    },
                    [_vm._v("Full Name")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.name,
                        expression: "name"
                      }
                    ],
                    staticClass: "form-control",
                    class: [
                      _vm.errors.name ? "border-1 border-red-600" : "border-0"
                    ],
                    attrs: {
                      type: "text",
                      placeholder: "Full Name",
                      required: "",
                      autocomplete: "none"
                    },
                    domProps: { value: _vm.name },
                    on: {
                      keydown: function($event) {
                        return _vm.close()
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.name = $event.target.value
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("div", { staticClass: "md:w-4/5 w-full m-auto" }, [
                  _c(
                    "label",
                    {
                      staticClass: "text-white text-sm font-bold",
                      attrs: { for: "email" }
                    },
                    [
                      _vm._v(
                        "\n              Email\n              Address\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.email,
                        expression: "email"
                      }
                    ],
                    staticClass: "form-control",
                    class: [
                      _vm.errors.email ? "border-1 border-red-600" : "border-0"
                    ],
                    attrs: {
                      type: "email",
                      placeholder: "Email address",
                      required: "",
                      autocomplete: "none"
                    },
                    domProps: { value: _vm.email },
                    on: {
                      keydown: function($event) {
                        return _vm.close()
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.email = $event.target.value
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("div", { staticClass: "md:w-4/5 w-full m-auto" }, [
                  _c(
                    "label",
                    {
                      staticClass: "text-white text-sm font-bold",
                      attrs: { for: "password" }
                    },
                    [_vm._v("Password")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.password,
                        expression: "password"
                      }
                    ],
                    staticClass: "form-control",
                    class: [
                      _vm.errors.password
                        ? "border-1 border-red-600"
                        : "border-0"
                    ],
                    attrs: {
                      type: "password",
                      placeholder: "Password",
                      autocomplete: "none"
                    },
                    domProps: { value: _vm.password },
                    on: {
                      keydown: function($event) {
                        return _vm.close()
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.password = $event.target.value
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _vm.error
                ? _c(
                    "div",
                    {
                      staticClass: "relative text-red-500 text-center mb-3",
                      attrs: { role: "alert" }
                    },
                    [
                      _c("strong", {
                        domProps: { textContent: _vm._s(_vm.error) }
                      })
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm._m(1)
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header p-2 pb-4" }, [
      _c(
        "h3",
        {
          staticClass: "wow fadeInLeft",
          attrs: { "data-wow-duration": "1s", "data-wow-delay": "1s" }
        },
        [_vm._v("Sign Up...")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group mb-0" }, [
      _c("div", { staticClass: "col-md-8 m-auto text-center" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-primary w-100 heartbeat",
            attrs: { type: "submit" }
          },
          [
            _vm._v("\n              Sign Up\n              "),
            _c("i", { staticClass: "fas fa-sign-in-alt" })
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth.vue?vue&type=template&id=4072a947&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Auth.vue?vue&type=template&id=4072a947& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-md" }, [
    _c("div", { staticClass: "contain" }, [
      _c(
        "div",
        { staticClass: "w-full m-5 bg:white flex justify-content-center" },
        [
          _c(
            "div",
            { staticClass: "w-full md:w-2/4 form p-3" },
            [
              _vm.login ? _c("LoginComp") : _c("RegComp"),
              _vm._v(" "),
              _vm._m(0)
            ],
            1
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "social p-1" }, [
      _c(
        "div",
        { staticClass: "or position-relative d-flex justify-content-center" },
        [_c("span", { staticClass: "font-weight-bold" }, [_vm._v("Or")])]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "d-flex flex-row justify-content-center my-2 wow fadeInUp",
          attrs: { "data-wow-duration": "2s", "data-wow-delay": "0s" }
        },
        [
          _c("div", { staticClass: "link" }, [
            _c(
              "a",
              {
                staticClass: "btn",
                attrs: {
                  href: "#",
                  "data-toggle": "tooltip",
                  "data-placement": "bottom",
                  title: "Google"
                }
              },
              [
                _c("i", { staticClass: "fab fa-google" }),
                _vm._v(" "),
                _c("span", { staticClass: "d-none" }, [
                  _vm._v("Sign With Google")
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "link" }, [
            _c(
              "a",
              {
                staticClass: "btn px-2",
                attrs: {
                  href: "#",
                  "data-toggle": "tooltip",
                  "data-placement": "bottom",
                  title: "Facebook"
                }
              },
              [
                _c("i", { staticClass: "fab fa-facebook-f" }),
                _vm._v(" "),
                _c("span", { staticClass: "d-none" }, [
                  _vm._v("Sign With Facebook")
                ])
              ]
            )
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/LoginComp.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/LoginComp.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginComp_vue_vue_type_template_id_5aafd786_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginComp.vue?vue&type=template&id=5aafd786&scoped=true& */ "./resources/js/components/LoginComp.vue?vue&type=template&id=5aafd786&scoped=true&");
/* harmony import */ var _LoginComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginComp.vue?vue&type=script&lang=js& */ "./resources/js/components/LoginComp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LoginComp_vue_vue_type_style_index_0_id_5aafd786_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginComp.vue?vue&type=style&index=0&id=5aafd786&scoped=true&lang=scss& */ "./resources/js/components/LoginComp.vue?vue&type=style&index=0&id=5aafd786&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LoginComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoginComp_vue_vue_type_template_id_5aafd786_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoginComp_vue_vue_type_template_id_5aafd786_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5aafd786",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/LoginComp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/LoginComp.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/LoginComp.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LoginComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoginComp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/LoginComp.vue?vue&type=style&index=0&id=5aafd786&scoped=true&lang=scss&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/LoginComp.vue?vue&type=style&index=0&id=5aafd786&scoped=true&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComp_vue_vue_type_style_index_0_id_5aafd786_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./LoginComp.vue?vue&type=style&index=0&id=5aafd786&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoginComp.vue?vue&type=style&index=0&id=5aafd786&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComp_vue_vue_type_style_index_0_id_5aafd786_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComp_vue_vue_type_style_index_0_id_5aafd786_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComp_vue_vue_type_style_index_0_id_5aafd786_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComp_vue_vue_type_style_index_0_id_5aafd786_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComp_vue_vue_type_style_index_0_id_5aafd786_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/LoginComp.vue?vue&type=template&id=5aafd786&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/LoginComp.vue?vue&type=template&id=5aafd786&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComp_vue_vue_type_template_id_5aafd786_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./LoginComp.vue?vue&type=template&id=5aafd786&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoginComp.vue?vue&type=template&id=5aafd786&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComp_vue_vue_type_template_id_5aafd786_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComp_vue_vue_type_template_id_5aafd786_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/RegComp.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/RegComp.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegComp_vue_vue_type_template_id_0dec01a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegComp.vue?vue&type=template&id=0dec01a8&scoped=true& */ "./resources/js/components/RegComp.vue?vue&type=template&id=0dec01a8&scoped=true&");
/* harmony import */ var _RegComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegComp.vue?vue&type=script&lang=js& */ "./resources/js/components/RegComp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegComp_vue_vue_type_style_index_0_id_0dec01a8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegComp.vue?vue&type=style&index=0&id=0dec01a8&scoped=true&lang=scss& */ "./resources/js/components/RegComp.vue?vue&type=style&index=0&id=0dec01a8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegComp_vue_vue_type_template_id_0dec01a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegComp_vue_vue_type_template_id_0dec01a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0dec01a8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/RegComp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/RegComp.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/RegComp.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RegComp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegComp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RegComp.vue?vue&type=style&index=0&id=0dec01a8&scoped=true&lang=scss&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/RegComp.vue?vue&type=style&index=0&id=0dec01a8&scoped=true&lang=scss& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegComp_vue_vue_type_style_index_0_id_0dec01a8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./RegComp.vue?vue&type=style&index=0&id=0dec01a8&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegComp.vue?vue&type=style&index=0&id=0dec01a8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegComp_vue_vue_type_style_index_0_id_0dec01a8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegComp_vue_vue_type_style_index_0_id_0dec01a8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegComp_vue_vue_type_style_index_0_id_0dec01a8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegComp_vue_vue_type_style_index_0_id_0dec01a8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegComp_vue_vue_type_style_index_0_id_0dec01a8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/RegComp.vue?vue&type=template&id=0dec01a8&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/RegComp.vue?vue&type=template&id=0dec01a8&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegComp_vue_vue_type_template_id_0dec01a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RegComp.vue?vue&type=template&id=0dec01a8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegComp.vue?vue&type=template&id=0dec01a8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegComp_vue_vue_type_template_id_0dec01a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegComp_vue_vue_type_template_id_0dec01a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Auth.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Auth.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Auth_vue_vue_type_template_id_4072a947___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Auth.vue?vue&type=template&id=4072a947& */ "./resources/js/views/Auth.vue?vue&type=template&id=4072a947&");
/* harmony import */ var _Auth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth.vue?vue&type=script&lang=js& */ "./resources/js/views/Auth.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Auth_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Auth.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/Auth.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Auth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Auth_vue_vue_type_template_id_4072a947___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Auth_vue_vue_type_template_id_4072a947___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Auth.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Auth.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Auth.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Auth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Auth.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Auth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Auth.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Auth.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Auth_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Auth.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Auth_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Auth_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Auth_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Auth_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Auth_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Auth.vue?vue&type=template&id=4072a947&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Auth.vue?vue&type=template&id=4072a947& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Auth_vue_vue_type_template_id_4072a947___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Auth.vue?vue&type=template&id=4072a947& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth.vue?vue&type=template&id=4072a947&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Auth_vue_vue_type_template_id_4072a947___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Auth_vue_vue_type_template_id_4072a947___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);