"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Product_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/NotFound.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/NotFound.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'NotFound'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NotFound_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFound.vue */ "./resources/js/views/NotFound.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ProductPage',
  components: {
    NotFound: _NotFound_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      tableData: null,
      showImageModal: false,
      slide: 0,
      notFound: false,
      count: 1,
      mainImage: '',
      images: [],
      title: '',
      description: '',
      price: 0,
      discountAmount: 0,
      originalPrice: 0
    };
  },
  computed: {
    cartItemsCount: function cartItemsCount() {
      return this.cartItems.length;
    }
  },
  methods: {
    showMainImage: function showMainImage() {
      this.showImageModal = true;
    },
    increment: function increment() {
      this.count += 1;
    },
    decrement: function decrement() {
      if (this.count > 1) {
        this.count -= 1;
      }
    },
    changeMainImage: function changeMainImage(image) {
      this.mainImage = image;
    },
    fetchData: function fetchData() {
      var _this = this;
      var url = "/client/products/".concat(this.$route.params.slug);
      axios__WEBPACK_IMPORTED_MODULE_1___default().get(url).then(function (response) {
        if (response.status === 200) {
          _this.tableData = response.data.data;
          _this.title = _this.tableData.name;
          _this.description = _this.tableData.description;
          _this.price = _this.tableData.price.discounted;
          _this.originalPrice = _this.tableData.price.full;
          _this.discountAmount = _this.tableData.discount.amount;
          _this.mainImage = _this.tableData.images[0];
          _this.images = _this.tableData.images;
        }
      })["catch"](function (error) {
        if (error.response && error.response.status === 404) {
          _this.notFound = true;
        }
      });
    }
  },
  created: function created() {
    this.fetchData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/NotFound.vue?vue&type=template&id=5dcdfd0e&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/NotFound.vue?vue&type=template&id=5dcdfd0e&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-5dcdfd0e"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "not-found"
};
var _hoisted_2 = {
  "class": "not-found-content"
};
var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "error-text"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "404"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Page Not Found")], -1 /* HOISTED */);
});
var _hoisted_4 = {
  "class": "error-details"
};
var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.", -1 /* HOISTED */);
});
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Go to Homepage");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/",
    "class": "home-link"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_6];
    }),
    _: 1 /* STABLE */
  })])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-7b8d5cc0"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  key: 1,
  "class": "product-page"
};
var _hoisted_3 = {
  "class": "container my-0 my-md-4"
};
var _hoisted_4 = {
  "class": "row align-items-center justify-content-between"
};
var _hoisted_5 = {
  "class": "col-12 col-md-5 p-0 p-md-2"
};
var _hoisted_6 = {
  "class": "d-flex flex-column"
};
var _hoisted_7 = {
  "class": "col-12 px-md-2 d-none d-md-block"
};
var _hoisted_8 = {
  "class": "d-block d-md-none col-12 px-0"
};
var _hoisted_9 = {
  "class": "col-12 d-none d-md-block my-4"
};
var _hoisted_10 = {
  "class": "row"
};
var _hoisted_11 = ["onClick"];
var _hoisted_12 = {
  "class": "col-12 col-md-6 text-left my-3"
};
var _hoisted_13 = {
  "class": "container"
};
var _hoisted_14 = {
  "class": "mt-2 mb-4"
};
var _hoisted_15 = {
  "class": "product-title"
};
var _hoisted_16 = {
  "class": "my-3"
};
var _hoisted_17 = {
  "class": "text-muted"
};
var _hoisted_18 = {
  "class": "row"
};
var _hoisted_19 = {
  "class": "col-8 col-md-12 d-flex flex-row align-items-center"
};
var _hoisted_20 = {
  "class": "product-price"
};
var _hoisted_21 = {
  "class": "discount"
};
var _hoisted_22 = {
  "class": "col-4 col-md-12 my-1"
};
var _hoisted_23 = {
  "class": "original-price"
};
var _hoisted_24 = {
  "class": "my-3 row"
};
var _hoisted_25 = {
  "class": "col-12 col-md-4 text-center px-md-0 mt-3"
};
var _hoisted_26 = {
  "class": "bg-quantity d-flex flex-row justify-content-between"
};
var _hoisted_27 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-minus"
  }, null, -1 /* HOISTED */);
});
var _hoisted_28 = [_hoisted_27];
var _hoisted_29 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-plus"
  }, null, -1 /* HOISTED */);
});
var _hoisted_30 = [_hoisted_29];
var _hoisted_31 = {
  "class": "col-12 col-md-8 mt-3"
};
var _hoisted_32 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "mx-3"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-shopping-cart text-white"
  })], -1 /* HOISTED */);
});
var _hoisted_33 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Add to cart", -1 /* HOISTED */);
});
var _hoisted_34 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-times",
    style: {
      "color": "#fff"
    }
  }, null, -1 /* HOISTED */);
});
var _hoisted_35 = {
  "class": "container"
};
var _hoisted_36 = {
  "class": "d-flex flex-column"
};
var _hoisted_37 = {
  "class": "col-12 px-0 px-md-2"
};
var _hoisted_38 = {
  "class": "col-12 my-3"
};
var _hoisted_39 = {
  "class": "row"
};
var _hoisted_40 = {
  "class": "thumbnail"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_NotFound = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NotFound");
  var _component_b_img = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-img");
  var _component_b_carousel_slide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-carousel-slide");
  var _component_b_carousel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-carousel");
  var _component_b_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-button");
  var _component_b_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("b-modal");
  return $data.notFound ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NotFound)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Main image display "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "image-container",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.showMainImage();
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_img, {
    src: $data.mainImage,
    alt: "",
    "class": "image"
  }, null, 8 /* PROPS */, ["src"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Image carousel for mobile "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_carousel, {
    modelValue: $data.slide,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.slide = $event;
    }),
    controls: "",
    interval: 0
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.images, function (image, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_carousel_slide, {
          key: index,
          "img-src": image,
          "class": "d-block img-fluid"
        }, null, 8 /* PROPS */, ["img-src"]);
      }), 128 /* KEYED_FRAGMENT */))];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.images, function (image, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "col-3",
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "thumbnail",
      onClick: function onClick($event) {
        return $options.changeMainImage(image);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_img, {
      src: image,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["image", {
        'active': $data.mainImage === image
      }])
    }, null, 8 /* PROPS */, ["src", "class"])], 8 /* PROPS */, _hoisted_11)]);
  }), 128 /* KEYED_FRAGMENT */))])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.title), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.description), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_20, "$" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(parseFloat($data.price).toFixed(2)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.discountAmount) + "%", 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_23, "$" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.originalPrice.toFixed(2)), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "plus-minus",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.decrement && $options.decrement.apply($options, arguments);
    })
  }, _hoisted_28), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.count), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "plus-minus",
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.increment && $options.increment.apply($options, arguments);
    })
  }, _hoisted_30)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_button, {
    "class": "bg-add-cart border-0",
    disabled: $data.count === 0,
    style: {
      "width": "100%"
    },
    onClick: _ctx.submit
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_32, _hoisted_33];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["disabled", "onClick"])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Image modal "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_modal, {
    modelValue: $data.showImageModal,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.showImageModal = $event;
    }),
    variant: "transparent",
    size: "md",
    backdrop: "",
    shadow: "",
    "hide-footer": ""
  }, {
    "modal-header-close": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_34];
    }),
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_carousel, {
        modelValue: $data.slide,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $data.slide = $event;
        }),
        controls: "",
        interval: 0
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.images, function (image, index) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_b_carousel_slide, {
              key: index,
              "img-src": image,
              "class": "d-block img-fluid"
            }, null, 8 /* PROPS */, ["img-src"]);
          }), 128 /* KEYED_FRAGMENT */))];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["modelValue"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.images, function (image, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          "class": "col-3",
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_b_img, {
          src: image,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["image", {
            'active': index === $data.slide
          }])
        }, null, 8 /* PROPS */, ["src", "class"])])]);
      }), 128 /* KEYED_FRAGMENT */))])])])])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue"])])]));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/NotFound.vue?vue&type=style&index=0&id=5dcdfd0e&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/NotFound.vue?vue&type=style&index=0&id=5dcdfd0e&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.not-found[data-v-5dcdfd0e] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n  text-align: center;\r\n  background-color: hsl(223, 64%, 98%);\r\n  color: hsl(220, 13%, 13%);\r\n  font-family: 'Arial', sans-serif;\n}\n.not-found-content[data-v-5dcdfd0e] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 2rem;\r\n  background: white;\r\n  border-radius: 10px;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n  animation: fadeIn-5dcdfd0e 1s ease-in-out;\n}\n@keyframes fadeIn-5dcdfd0e {\nfrom {\r\n    opacity: 0;\r\n    transform: scale(0.9);\n}\nto {\r\n    opacity: 1;\r\n    transform: scale(1);\n}\n}\n.error-text h1[data-v-5dcdfd0e] {\r\n  font-size: 6rem;\r\n  margin: 0;\r\n  color: hsl(26, 100%, 55%);\r\n  animation: bounce-5dcdfd0e 2s infinite;\n}\n@keyframes bounce-5dcdfd0e {\n0%, 20%, 50%, 80%, 100% {\r\n    transform: translateY(0);\n}\n40% {\r\n    transform: translateY(-30px);\n}\n60% {\r\n    transform: translateY(-15px);\n}\n}\n.error-text p[data-v-5dcdfd0e] {\r\n  font-size: 1.5rem;\r\n  margin: 0.5rem 0;\r\n  color: hsl(220, 13%, 13%);\n}\n.error-details p[data-v-5dcdfd0e] {\r\n  font-size: 1.2rem;\r\n  margin: 1rem 0;\r\n  color: hsl(220, 13%, 13%);\n}\n.home-link[data-v-5dcdfd0e] {\r\n  display: inline-block;\r\n  margin-top: 1.5rem;\r\n  padding: 0.75rem 1.5rem;\r\n  background-color: hsl(26, 100%, 55%);\r\n  color: white;\r\n  text-decoration: none;\r\n  border-radius: 5px;\r\n  transition: background-color 0.3s, transform 0.3s;\r\n  font-weight: bold;\n}\n.home-link[data-v-5dcdfd0e]:hover {\r\n  background-color: hsl(26, 100%, 45%);\r\n  transform: scale(1.05);\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.product-page[data-v-7b8d5cc0] {\r\n  font-family: Arial, sans-serif;\n}\n.product-title[data-v-7b8d5cc0] {\r\n  font-size: 40px;\r\n  font-weight: 900;\r\n  color: black;\r\n  line-height: 2.8rem;\n}\n.product-price[data-v-7b8d5cc0] {\r\n  font-size: 16px;\r\n  font-weight: 900;\n}\n.discount[data-v-7b8d5cc0] {\r\n  background-color: hsl(25, 100%, 94%);\r\n  font-weight: 900;\r\n  font-size: 14px;\r\n  color: hsl(26, 100%, 55%);\r\n  padding: 2px 8px;\r\n  margin-left: 8px;\n}\n.original-price[data-v-7b8d5cc0] {\r\n  font-weight: 700;\r\n  color: rgb(183, 183, 183);\r\n  text-decoration: line-through;\n}\n.bg-quantity[data-v-7b8d5cc0] {\r\n  background-color: #f1f1f1;\r\n  border-radius: 10px;\r\n  font-size: 16px;\r\n  padding: 14px;\n}\n.bg-add-cart[data-v-7b8d5cc0] {\r\n  background-color: hsl(26, 100%, 55%);\r\n  color: white;\r\n  border-radius: 10px;\r\n  font-size: 15px;\r\n  padding: 14px;\r\n  transition: 0.3s;\r\n  cursor: pointer;\n}\n.bg-add-cart[data-v-7b8d5cc0]:hover {\r\n  background-color: hsl(24, 91%, 86%);\n}\n.plus-minus[data-v-7b8d5cc0] {\r\n  color: hsl(26, 100%, 55%);\r\n  cursor: pointer;\n}\n.thumbnail img[data-v-7b8d5cc0] {\r\n  cursor: pointer;\r\n  opacity: 1;\r\n  transition: 0.3s;\n}\n.thumbnail:hover img[data-v-7b8d5cc0] {\r\n  opacity: 0.3;\n}\n.active[data-v-7b8d5cc0] {\r\n  opacity: 0.4;\r\n  border: 3px solid hsl(26, 100%, 55%);\n}\n.image-container[data-v-7b8d5cc0] {\r\n  cursor: pointer;\r\n  border-radius: 10px;\r\n  overflow: hidden;\r\n  transition: transform 0.3s ease;\n}\n.image-container[data-v-7b8d5cc0]:hover {\r\n  transform: scale(1.1);\n}\n.image[data-v-7b8d5cc0] {\r\n  width: 100%;\r\n  height: auto;\r\n  display: block;\r\n  border-radius: 10px;\n}\n@media screen and (max-width: 768px) {\n.image-container[data-v-7b8d5cc0] {\r\n    margin-bottom: 1rem;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/NotFound.vue?vue&type=style&index=0&id=5dcdfd0e&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/NotFound.vue?vue&type=style&index=0&id=5dcdfd0e&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NotFound_vue_vue_type_style_index_0_id_5dcdfd0e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NotFound.vue?vue&type=style&index=0&id=5dcdfd0e&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/NotFound.vue?vue&type=style&index=0&id=5dcdfd0e&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NotFound_vue_vue_type_style_index_0_id_5dcdfd0e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NotFound_vue_vue_type_style_index_0_id_5dcdfd0e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_style_index_0_id_7b8d5cc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_style_index_0_id_7b8d5cc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_style_index_0_id_7b8d5cc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/views/NotFound.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/NotFound.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NotFound_vue_vue_type_template_id_5dcdfd0e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFound.vue?vue&type=template&id=5dcdfd0e&scoped=true */ "./resources/js/views/NotFound.vue?vue&type=template&id=5dcdfd0e&scoped=true");
/* harmony import */ var _NotFound_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotFound.vue?vue&type=script&lang=js */ "./resources/js/views/NotFound.vue?vue&type=script&lang=js");
/* harmony import */ var _NotFound_vue_vue_type_style_index_0_id_5dcdfd0e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotFound.vue?vue&type=style&index=0&id=5dcdfd0e&scoped=true&lang=css */ "./resources/js/views/NotFound.vue?vue&type=style&index=0&id=5dcdfd0e&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_NotFound_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NotFound_vue_vue_type_template_id_5dcdfd0e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-5dcdfd0e"],['__file',"resources/js/views/NotFound.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/Product.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Product.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Product_vue_vue_type_template_id_7b8d5cc0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=7b8d5cc0&scoped=true */ "./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&scoped=true");
/* harmony import */ var _Product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js */ "./resources/js/views/Product.vue?vue&type=script&lang=js");
/* harmony import */ var _Product_vue_vue_type_style_index_0_id_7b8d5cc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css */ "./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Product_vue_vue_type_template_id_7b8d5cc0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-7b8d5cc0"],['__file',"resources/js/views/Product.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/NotFound.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./resources/js/views/NotFound.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NotFound_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NotFound_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NotFound.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/NotFound.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Product.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/views/Product.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Product.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/NotFound.vue?vue&type=template&id=5dcdfd0e&scoped=true":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/NotFound.vue?vue&type=template&id=5dcdfd0e&scoped=true ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NotFound_vue_vue_type_template_id_5dcdfd0e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NotFound_vue_vue_type_template_id_5dcdfd0e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NotFound.vue?vue&type=template&id=5dcdfd0e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/NotFound.vue?vue&type=template&id=5dcdfd0e&scoped=true");


/***/ }),

/***/ "./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&scoped=true":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&scoped=true ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_template_id_7b8d5cc0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_template_id_7b8d5cc0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Product.vue?vue&type=template&id=7b8d5cc0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&scoped=true");


/***/ }),

/***/ "./resources/js/views/NotFound.vue?vue&type=style&index=0&id=5dcdfd0e&scoped=true&lang=css":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/NotFound.vue?vue&type=style&index=0&id=5dcdfd0e&scoped=true&lang=css ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NotFound_vue_vue_type_style_index_0_id_5dcdfd0e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NotFound.vue?vue&type=style&index=0&id=5dcdfd0e&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/NotFound.vue?vue&type=style&index=0&id=5dcdfd0e&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_style_index_0_id_7b8d5cc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css");


/***/ })

}]);