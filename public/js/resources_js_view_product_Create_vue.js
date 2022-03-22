"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_view_product_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/product/Create.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/product/Create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      product: {},
      show: true
    };
  },
  methods: {
    addProduct: function addProduct() {
      var _this = this;

      this.axios.post('http://localhost:8000/api/products', this.product).then(function (response) {
        return _this.$router.push({
          name: 'home'
        });
      })["catch"](function (err) {
        return console.log(err);
      })["finally"](function () {
        return _this.loading = false;
      });
    },
    onReset: function onReset(event) {
      var _this2 = this;

      event.preventDefault();
      this.product = '';
      this.show = false;
      this.$nextTick(function () {
        _this2.show = true;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/view/product/Create.vue":
/*!**********************************************!*\
  !*** ./resources/js/view/product/Create.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_b041ea50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=b041ea50& */ "./resources/js/view/product/Create.vue?vue&type=template&id=b041ea50&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/view/product/Create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_b041ea50___WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_b041ea50___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/product/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/view/product/Create.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/view/product/Create.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/product/Create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/product/Create.vue?vue&type=template&id=b041ea50&":
/*!*****************************************************************************!*\
  !*** ./resources/js/view/product/Create.vue?vue&type=template&id=b041ea50& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_b041ea50___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_b041ea50___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_b041ea50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=b041ea50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/product/Create.vue?vue&type=template&id=b041ea50&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/product/Create.vue?vue&type=template&id=b041ea50&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/product/Create.vue?vue&type=template&id=b041ea50& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-row",
    { staticClass: "m-auto d-flex justify-content-center mt-5" },
    [
      _c(
        "b-col",
        { attrs: { md: "6" } },
        [
          _vm.show
            ? _c(
                "b-form",
                { on: { submit: _vm.addProduct, reset: _vm.onReset } },
                [
                  _c(
                    "b-form-group",
                    { attrs: { label: "Name:", "label-for": "name" } },
                    [
                      _c("b-form-input", {
                        attrs: {
                          type: "text",
                          id: "name",
                          placeholder: "Product name",
                          required: "",
                        },
                        model: {
                          value: _vm.product.name,
                          callback: function ($$v) {
                            _vm.$set(_vm.product, "name", $$v)
                          },
                          expression: "product.name",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    { attrs: { label: "Quantity:", "label-for": "quantity" } },
                    [
                      _c("b-form-input", {
                        attrs: { type: "number", step: "1", value: "1" },
                        model: {
                          value: _vm.product.quantity,
                          callback: function ($$v) {
                            _vm.$set(_vm.product, "quantity", $$v)
                          },
                          expression: "product.quantity",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    { attrs: { label: "Amount:", "label-for": "amount" } },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "amount",
                          placeholder: "Enter amount for one product item",
                          required: "",
                        },
                        model: {
                          value: _vm.product.amount,
                          callback: function ($$v) {
                            _vm.$set(_vm.product, "amount", $$v)
                          },
                          expression: "product.amount",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label: "Description:",
                        "label-for": "description",
                      },
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "description",
                          placeholder: "Describe your product",
                          required: "",
                        },
                        model: {
                          value: _vm.product.description,
                          callback: function ($$v) {
                            _vm.$set(_vm.product, "description", $$v)
                          },
                          expression: "product.description",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    { attrs: { type: "submit", variant: "primary" } },
                    [_vm._v("Submit")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    { attrs: { type: "reset", variant: "danger" } },
                    [_vm._v("Reset")]
                  ),
                ],
                1
              )
            : _vm._e(),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);