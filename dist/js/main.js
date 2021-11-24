(self["webpackChunk"] = self["webpackChunk"] || []).push([[179],{

/***/ 1616:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9407);


alpinejs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].start */ .Z.start();

/***/ }),

/***/ 2247:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5610);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7460);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1013);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8010);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5623);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1514);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9407);








alpinejs__WEBPACK_IMPORTED_MODULE_6__/* ["default"].data */ .Z.data('articleNav', function () {
  return {
    hash: location.hash,
    update: function update() {
      var sections = Array.from(document.querySelectorAll('[id]'));
      var ids = Array.from(this.$root.querySelectorAll('.article-nav__item')).map(function (item) {
        return item.hash;
      });
      sections = sections.filter(function (item) {
        return ids.includes("#".concat(item.id));
      });
      var border = 0;
      var currentSection;

      for (var i = 0; i < sections.length; i++) {
        var rect = sections[i].getBoundingClientRect();

        if (Math.floor(rect.top) <= border) {
          currentSection = sections[i];
        }
      }

      if (currentSection) {
        history.replaceState(null, null, "#".concat(currentSection.id));
        this.hash = location.hash;
      }
    }
  };
});

/***/ }),

/***/ 9479:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _swiper_cards_swiper_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3153);
/* harmony import */ var _pagination_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7917);







/***/ }),

/***/ 9346:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/alpinejs/dist/module.esm.js
var module_esm = __webpack_require__(9407);
;// CONCATENATED MODULE: ./components/ymaps/ymaps.js


module_esm/* default.data */.Z.data('ymaps', function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$center = _ref.center,
      center = _ref$center === void 0 ? [55.751574, 37.573856] : _ref$center,
      hintContent = _ref.hintContent;

  return {
    init: function init() {
      if (!document.getElementById('ymaps-api')) {
        var script = document.createElement('script');
        script.id = 'ymaps-api';
        script.src = 'https://api-maps.yandex.ru/2.1/?apikey=fa044ff0-6600-4936-8d46-1e837d7862df&lang=ru_RU';
        script.async = false;

        script.onload = function () {
          return window.dispatchEvent(new Event('ymaps-api-loaded'));
        };

        document.head.append(script);
      }

      this.initMap();
    },
    initMap: function initMap() {
      var _this = this;

      window.addEventListener('ymaps-api-loaded', function () {
        /* eslint-disable */
        ymaps.ready(function () {
          var myMap = new ymaps.Map(_this.$root, {
            center: center,
            zoom: 9
          }, {
            searchControlProvider: 'yandex#search'
          });
          var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: hintContent // balloonContent: 'Это красивая метка',

          }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'data:image/png;base64,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',
            // Размеры метки.
            iconImageSize: [35, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-17.5, -50]
          });
          myMap.geoObjects.add(myPlacemark);
          myMap.behaviors.disable('scrollZoom');
        });
        /* eslint-enable */
      });
    }
  };
});
;// CONCATENATED MODULE: ./components/contacts/contacts.js




/***/ }),

/***/ 9950:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _swiper_cards_swiper_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3153);



/***/ }),

/***/ 7032:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _swiper_fraction_swiper_fraction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9146);




/***/ }),

/***/ 1701:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _cards_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9479);
/* harmony import */ var _pagination_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7917);





/***/ }),

/***/ 7997:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _swiper_free_swiper_free__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6484);



/***/ }),

/***/ 6890:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _swiper_fraction_swiper_fraction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9146);



/***/ }),

/***/ 7525:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1597);
/* harmony import */ var _pagination_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7917);





/***/ }),

/***/ 601:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9407);
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(722);





alpinejs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].data */ .Z.data('header', function () {
  return {
    isSticky: false,
    mobMenuIsOpen: false,
    init: function init() {
      var _this = this;

      this.updateStick();
      this.$watch('mobMenuIsOpen', function (val) {
        if (val) {
          (0,body_scroll_lock__WEBPACK_IMPORTED_MODULE_1__/* .disableBodyScroll */ .Qp)(_this.$el, {
            reserveScrollBarGap: true
          });
        } else {
          (0,body_scroll_lock__WEBPACK_IMPORTED_MODULE_1__/* .enableBodyScroll */ .tG)(_this.$el);
        }
      });
    },
    updateStick: function updateStick() {
      if (this.$store.isDesktop) {
        this.isSticky = scrollY > 90 / 140 * this.$el.offsetHeight;
      } else {
        this.isSticky = false;
      }
    },
    updateMobMenu: function updateMobMenu() {
      if (this.$store.isDesktop) {
        this.mobMenuIsOpen = false;
      }
    },
    toggleMobMenu: function toggleMobMenu() {
      this.mobMenuIsOpen = !this.mobMenuIsOpen;
    }
  };
});

/***/ }),

/***/ 8067:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9407);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8305);
/* harmony import */ var _score_animated_score_animated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7012);





alpinejs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].data */ .Z.data('infographic', function () {
  return {
    swiper: undefined,
    init: function init() {
      this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP(this.$refs.container, {
        slidesPerView: 'auto'
      });
    }
  };
});

/***/ }),

/***/ 7917:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7791);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7135);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3238);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1418);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(266);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9407);







alpinejs__WEBPACK_IMPORTED_MODULE_4__/* ["default"].data */ .Z.data('pagination', function (url, containerEl) {
  return {
    error: null,
    isLoading: false,
    url: url,
    containerEl: containerEl,
    load: function load() {
      var _this = this;

      return (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response, html;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _this.isLoading = true;
                _context.next = 4;
                return fetch(_this.url);

              case 4:
                response = _context.sent;

                if (!response.ok) {
                  _context.next = 13;
                  break;
                }

                _context.next = 8;
                return response.text();

              case 8:
                html = _context.sent.trim();
                _this.error = null;

                _this.containerEl.insertAdjacentHTML('beforeend', html);

                _context.next = 14;
                break;

              case 13:
                _this.error = "HTTP Error: ".concat(response.status);

              case 14:
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](0);
                _this.error = _context.t0;

              case 19:
                _context.prev = 19;
                _this.isLoading = false;
                return _context.finish(19);

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 16, 19, 22]]);
      }))();
    }
  };
});

/***/ }),

/***/ 4318:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _swiper_fraction_swiper_fraction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9146);




/***/ }),

/***/ 7012:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5849);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9407);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9667);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4271);




gsap__WEBPACK_IMPORTED_MODULE_2__/* .gsap.registerPlugin */ .p8.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__/* .ScrollTrigger */ .i);
alpinejs__WEBPACK_IMPORTED_MODULE_1__/* ["default"].data */ .Z.data('scoreAnimated', function () {
  return {
    init: function init() {
      this.$refs.number.innerHTML = (+this.$refs.number.textContent).toLocaleString('ru');
      var tl = gsap__WEBPACK_IMPORTED_MODULE_2__/* .gsap.timeline */ .p8.timeline({
        scrollTrigger: {
          trigger: this.$el,
          start: 'top bottom-=120',
          end: 'bottom top+=120',
          toggleActions: 'play pause play pause' // onEnter, onLeave, onEnterBack, and onLeaveBack

        }
      });
      tl.from(this.$refs.numberAnimated, {
        autoAlpha: 0,
        duration: 0.2
      }).from(this.$refs.numberAnimated, {
        textContent: 0,
        duration: 1.4,
        onUpdate: function onUpdate() {
          this.targets().forEach(function (target) {
            target.innerHTML = Math.ceil(target.textContent).toLocaleString('ru');
          });
        }
      }, '-=0.2').from(this.$refs.plus, {
        autoAlpha: 0,
        duration: 0.2
      });
    }
  };
});

/***/ }),

/***/ 2889:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _infographic_infographic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8067);




/***/ }),

/***/ 505:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(2410);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(3352);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(5610);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(7460);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(5901);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(2189);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(1047);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(5769);
// EXTERNAL MODULE: ../node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(4078);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(7791);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(7135);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(3238);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(1418);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(3938);
// EXTERNAL MODULE: ../node_modules/alpinejs/dist/module.esm.js
var module_esm = __webpack_require__(9407);
;// CONCATENATED MODULE: ./components/form-feedback/form-feedback.js















function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



module_esm/* default.data */.Z.data('formFeedback', function () {
  return {
    isValid: null,
    isSubmit: false,
    success: null,
    error: null,
    successTimer: null,
    validate: function validate(obj) {
      var target = obj.target || obj;
      var valid = target.validity.valid;
      target.classList.toggle('is-invalid', !valid);
      return valid;
    },
    formValidate: function formValidate() {
      this.isValid = true;

      var _iterator = _createForOfIteratorHelper(this.$root.querySelectorAll('input, textarea')),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;

          if (!this.validate(item)) {
            this.isValid = false;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    submit: function submit(evt) {
      var _this = this;

      return (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var response;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                evt.preventDefault();

                _this.formValidate();

                if (!_this.isValid) {
                  _context.next = 25;
                  break;
                }

                _context.prev = 3;
                _this.isSubmit = true;
                _context.next = 7;
                return fetch(_this.$root.action, {
                  method: 'POST',
                  body: new FormData(_this.$root)
                });

              case 7:
                response = _context.sent;

                if (!response.ok) {
                  _context.next = 15;
                  break;
                }

                clearTimeout(_this.successTimer);
                _this.success = 'Success submit!';
                _this.successTimer = setTimeout(function () {
                  _this.success = null;
                }, 3000);
                _this.error = null;
                _context.next = 16;
                break;

              case 15:
                throw new Error("HTTP Error: ".concat(response.status, " (").concat(response.statusText, ")"));

              case 16:
                _context.next = 22;
                break;

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](3);
                _this.success = null;
                _this.error = _context.t0;

              case 22:
                _context.prev = 22;
                _this.isSubmit = false;
                return _context.finish(22);

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 18, 22, 25]]);
      }))();
    }
  };
});
;// CONCATENATED MODULE: ./components/section-feedback/section-feedback.js



/***/ }),

/***/ 6836:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/rellax/rellax.js
var rellax = __webpack_require__(1478);
var rellax_default = /*#__PURE__*/__webpack_require__.n(rellax);
// EXTERNAL MODULE: ./components/score-animated/score-animated.js
var score_animated = __webpack_require__(7012);
;// CONCATENATED MODULE: ./components/score/score.js


// EXTERNAL MODULE: ./components/events/events.js
var events = __webpack_require__(1701);
// EXTERNAL MODULE: ./components/cards/cards.js
var cards = __webpack_require__(9479);
;// CONCATENATED MODULE: ./components/section/section.js





var sectionRellaxEls = document.querySelectorAll('.section__rellax');

if (sectionRellaxEls.length) {
  window.addEventListener('load', function () {
    return new (rellax_default())('.section__rellax', {
      center: true
    });
  });
}

/***/ }),

/***/ 3153:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9407);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8305);



alpinejs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].data */ .Z.data('swiperCards', function () {
  var inst;
  return {
    swiper: undefined,
    swiperIsInit: false,
    init: function init() {
      inst = this;
    },
    destroy: function destroy() {
      inst.destroySwiper();
    },
    initSwiper: function initSwiper() {
      var _this = this;

      if (!this.swiperIsInit) {
        this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP(this.$refs.swiper, {
          slidesPerView: 'auto',
          on: {
            init: function init() {
              _this.swiperIsInit = true;
            },
            destroy: function destroy() {
              _this.swiperIsInit = false;
            }
          }
        });
      }
    },
    destroySwiper: function destroySwiper() {
      if (this.swiperIsInit) {
        this.swiper.destroy();
      }
    },
    effect: function effect() {
      var _this2 = this;

      if (this.$store.isDesktop) {
        this.destroySwiper();
      } else {
        this.$nextTick(function () {
          return _this2.initSwiper();
        });
      }
    }
  };
});

/***/ }),

/***/ 9146:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9407);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8305);




alpinejs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].data */ .Z.data('swiperFraction', function () {
  var inst;
  return {
    swiper: undefined,
    swiperIsInit: false,
    init: function init() {
      var _this = this;

      inst = this;
      this.$nextTick(function () {
        return _this.initSwiper();
      });
    },
    destroy: function destroy() {
      inst.destroySwiper();
    },
    initSwiper: function initSwiper() {
      var _this2 = this;

      if (!this.swiperIsInit) {
        this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP(this.$refs.swiper, {
          modules: [swiper__WEBPACK_IMPORTED_MODULE_1__/* .Navigation */ .W_, swiper__WEBPACK_IMPORTED_MODULE_1__/* .Pagination */ .tl],
          slidesPerView: 'auto',
          on: {
            init: function init() {
              _this2.swiperIsInit = true;
            },
            destroy: function destroy() {
              _this2.swiperIsInit = false;
            }
          },
          navigation: {
            prevEl: this.$refs.prevEl,
            nextEl: this.$refs.nextEl
          },
          pagination: {
            el: this.$refs.pagination,
            type: 'fraction',
            modifierClass: 'swiper-fraction__pagination--',
            currentClass: 'swiper-fraction__pagination-current',
            totalClass: 'swiper-fraction__pagination-total'
          }
        });
      }
    },
    destroySwiper: function destroySwiper() {
      if (this.swiperIsInit) {
        this.swiper.destroy();
      }
    }
  };
});

/***/ }),

/***/ 6484:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9407);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8305);



alpinejs__WEBPACK_IMPORTED_MODULE_0__/* ["default"].data */ .Z.data('swiperFree', function () {
  var onlyMobile = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var inst;
  return {
    onlyMobile: onlyMobile,
    swiper: undefined,
    swiperIsInit: false,
    init: function init() {
      inst = this;
    },
    destroy: function destroy() {
      inst.destroySwiper();
    },
    initSwiper: function initSwiper() {
      var _this = this;

      if (!this.swiperIsInit) {
        this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP(this.$refs.swiper, {
          modules: [swiper__WEBPACK_IMPORTED_MODULE_1__/* .FreeMode */ .Rv],
          slidesPerView: 'auto',
          freeMode: {
            enabled: true,
            momentum: false,
            momentumBounce: false
          },
          on: {
            init: function init() {
              _this.swiperIsInit = true;
            },
            destroy: function destroy() {
              _this.swiperIsInit = false;
            }
          }
        });
        setTimeout(function () {
          if (_this.swiperIsInit) {
            _this.swiper.update();
          }
        }, 1000);
      }
    },
    destroySwiper: function destroySwiper() {
      if (this.swiperIsInit) {
        this.swiper.destroy();
      }
    },
    effect: function effect() {
      var _this2 = this;

      if (this.onlyMobile && this.$store.isDesktop) {
        this.destroySwiper();
      } else {
        this.$nextTick(function () {
          return _this2.initSwiper();
        });
      }
    }
  };
});

/***/ }),

/***/ 7390:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js
var ninelines_ua_parser = __webpack_require__(4379);
// EXTERNAL MODULE: ../node_modules/focus-visible/dist/focus-visible.js
var focus_visible = __webpack_require__(483);
// EXTERNAL MODULE: ./js/vh-fix.js
var vh_fix = __webpack_require__(4436);
// EXTERNAL MODULE: ../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__(7329);
;// CONCATENATED MODULE: ./js/scrollbar-width.js


var setScrollbarWidth = function setScrollbarWidth() {
  return document.documentElement.style.setProperty('--scrollbar-width', "".concat(innerWidth - document.body.clientWidth, "px"));
};

setScrollbarWidth();
var resizeObserver = new ResizeObserver_es/* default */.Z(setScrollbarWidth);
resizeObserver.observe(document.body);
// EXTERNAL MODULE: ../node_modules/aos/dist/aos.js
var aos = __webpack_require__(5566);
var aos_default = /*#__PURE__*/__webpack_require__.n(aos);
// EXTERNAL MODULE: ../node_modules/alpinejs/dist/module.esm.js
var module_esm = __webpack_require__(9407);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(3214);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(2951);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(1976);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(7591);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 2 modules
var possibleConstructorReturn = __webpack_require__(82);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7597);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js + 3 modules
var wrapNativeSuper = __webpack_require__(4138);
// EXTERNAL MODULE: ../node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(5849);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(3938);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(5769);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(3238);
// EXTERNAL MODULE: ../node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(4078);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(2077);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(911);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(2482);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(3352);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(8410);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(5623);
;// CONCATENATED MODULE: ./components/icon-svg/icon-svg.js








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }















var requireIcon = __webpack_require__(5630);

var icons = {};
var icon_svg_resizeObserver = new ResizeObserver_es/* default */.Z(function (entries) {
  entries.forEach(function (entry) {
    var contentBoxSize = entry.contentBoxSize && entry.contentBoxSize[0] || entry.contentBoxSize;
    var iconWidth = contentBoxSize && contentBoxSize.inlineSize || entry.contentRect.width;
    var iconHeight = contentBoxSize && contentBoxSize.blockSize || entry.contentRect.height;
    var viewBox = "0 0 ".concat(iconWidth / (iconHeight || 1) * entry.target.svgViewBoxHeight, " ").concat(entry.target.svgViewBoxHeight);
    entry.target.svgEl.setAttribute('viewBox', viewBox);
  });
});
requireIcon.keys().forEach(function (iconPath) {
  var iconName = iconPath.split('/').pop().replace(/\.\w+$/, '');
  icons[iconName] = requireIcon(iconPath).default || requireIcon(iconPath);
});

var IconSvg = /*#__PURE__*/function (_HTMLElement) {
  (0,inherits/* default */.Z)(IconSvg, _HTMLElement);

  var _super = _createSuper(IconSvg);

  function IconSvg() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, IconSvg);

    _this = _super.call(this);

    _this.attachShadow({
      mode: 'open'
    });

    return _this;
  }

  (0,createClass/* default */.Z)(IconSvg, [{
    key: "name",
    get: function get() {
      return this.getAttribute('name');
    }
  }, {
    key: "update",
    value: function update() {
      this.shadowRoot.innerHTML = icons[this.name];
      this.svgEl = this.shadowRoot.querySelector('svg');
      Object.assign(this.svgEl.style, {
        display: 'block',
        width: '100%',
        height: '100%'
      });
      icon_svg_resizeObserver.unobserve(this);

      if (['arrow-left', 'arrow-right'].includes(this.name)) {
        this.svgViewBoxHeight = +this.svgEl.getAttribute('viewBox').split(/\s+/).pop();
        icon_svg_resizeObserver.observe(this);
      }
    }
  }, {
    key: "disconnected",
    value: function disconnected() {
      icon_svg_resizeObserver.unobserve(this);
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name) {
      if (name === 'name') {
        this.update();
      }
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['name'];
    }
  }]);

  return IconSvg;
}( /*#__PURE__*/(0,wrapNativeSuper/* default */.Z)(HTMLElement));

customElements.define('icon-svg', IconSvg);
/* harmony default export */ var icon_svg = ((/* unused pure expression or super */ null && (IconSvg)));

;// CONCATENATED MODULE: ./components/line-clamp/line-clamp.js

module_esm/* default.data */.Z.data('lineClamp', function () {
  return {
    hasClamp: false,
    isClamped: true,
    init: function init() {
      this.update();
    },
    update: function update() {
      var _this = this;

      this.isClamped = true;
      this.$nextTick(function () {
        _this.hasClamp = _this.$refs.content.scrollHeight > _this.$refs.content.clientHeight;
      });
    }
  };
});
// EXTERNAL MODULE: ../node_modules/goodshare.js/goodshare.min.js
var goodshare_min = __webpack_require__(1010);
;// CONCATENATED MODULE: ./components/share/share.js


// EXTERNAL MODULE: ../node_modules/imask/esm/index.js + 24 modules
var esm = __webpack_require__(278);
;// CONCATENATED MODULE: ./components/form-field/form-field.js



module_esm/* default.data */.Z.data('formField', function () {
  return {
    mask: undefined,
    init: function init() {
      if (this.$root.type === 'tel') {
        // this.$root.placeholder = '+7 (000) 000-00-00';
        // eslint-disable-next-line
        this.$root.pattern = '\\+7 \\([0-9]{3}\\) [0-9]{3}-[0-9]{2}-[0-9]{2}';
        this.mask = new esm/* default */.ZP(this.$root, {
          mask: '+{7} (000) 000-00-00' // lazy: false, // make placeholder always visible
          // placeholderChar: '0', // defaults to '_'

        });
      }
    }
  };
});
;// CONCATENATED MODULE: ./js/base.js




































window.Alpine = module_esm/* default */.Z;
module_esm/* default.store */.Z.store('isDesktop', innerWidth >= 1025);
window.addEventListener('resize', function () {
  module_esm/* default.store */.Z.store('isDesktop', innerWidth >= 1025);
});
aos_default().init();

/***/ }),

/***/ 4436:
/***/ (function() {

var setVH = function setVH() {
  return document.documentElement.style.setProperty('--vh', "".concat(innerHeight / 100, "px"));
};

setVH();
window.addEventListener('resize', setVH);

/***/ }),

/***/ 78:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _js_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7390);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(601);
/* harmony import */ var _components_gallery_slider_gallery_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6890);
/* harmony import */ var _components_cards_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9479);
/* harmony import */ var _components_section_feedback_section_feedback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(505);
/* harmony import */ var _components_section_about_section_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2889);










/***/ }),

/***/ 5164:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./js/base.js + 5 modules
var base = __webpack_require__(7390);
// EXTERNAL MODULE: ./components/header/header.js
var header = __webpack_require__(601);
// EXTERNAL MODULE: ../node_modules/alpinejs/dist/module.esm.js
var module_esm = __webpack_require__(9407);
// EXTERNAL MODULE: ../node_modules/masonry-layout/masonry.js
var masonry = __webpack_require__(9028);
var masonry_default = /*#__PURE__*/__webpack_require__.n(masonry);
;// CONCATENATED MODULE: ./components/activities/activities.js



module_esm/* default.data */.Z.data('activities', function () {
  return {
    masonry: undefined,
    init: function init() {
      var _this = this;

      this.masonry = new (masonry_default())(this.$refs.grid, {
        gutter: '.gutter-sizer',
        itemSelector: '.activities__item'
      });
      setTimeout(function () {
        return _this.masonry.layout();
      }, 100);
    }
  };
});
// EXTERNAL MODULE: ./components/section/section.js + 1 modules
var section = __webpack_require__(6836);
;// CONCATENATED MODULE: ./pages/activities/activities.js









/***/ }),

/***/ 8735:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _js_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7390);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(601);
/* harmony import */ var _components_contacts_contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9346);
/* harmony import */ var _components_section_feedback_section_feedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(505);
/* harmony import */ var _components_section_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6836);









/***/ }),

/***/ 3529:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _js_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7390);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(601);
/* harmony import */ var _components_article_nav_article_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2247);
/* harmony import */ var _components_infographic_infographic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8067);
/* harmony import */ var _components_gallery_slider_gallery_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6890);
/* harmony import */ var _components_docs_docs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9950);
/* harmony import */ var _components_gallery_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7525);
/* harmony import */ var _components_reviews_reviews__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4318);
/* harmony import */ var _components_contacts_contacts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9346);

















/***/ }),

/***/ 7040:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _js_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7390);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(601);
/* harmony import */ var _components_filters_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7997);
/* harmony import */ var _components_cards_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9479);
/* harmony import */ var _components_section_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6836);











/***/ }),

/***/ 296:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./js/base.js + 5 modules
var base = __webpack_require__(7390);
// EXTERNAL MODULE: ./components/header/header.js
var header = __webpack_require__(601);
// EXTERNAL MODULE: ./components/article-nav/article-nav.js
var article_nav = __webpack_require__(2247);
// EXTERNAL MODULE: ./components/gallery-slider/gallery-slider.js
var gallery_slider = __webpack_require__(6890);
// EXTERNAL MODULE: ./components/docs/docs.js
var docs = __webpack_require__(9950);
// EXTERNAL MODULE: ./components/gallery/gallery.js
var gallery = __webpack_require__(7525);
// EXTERNAL MODULE: ./components/cards/cards.js
var cards = __webpack_require__(9479);
// EXTERNAL MODULE: ./components/contacts/contacts.js + 1 modules
var contacts = __webpack_require__(9346);
// EXTERNAL MODULE: ./components/events/events.js
var events = __webpack_require__(1701);
// EXTERNAL MODULE: ./components/events-slider/events-slider.js
var events_slider = __webpack_require__(7032);
;// CONCATENATED MODULE: ./components/related/related.js




// EXTERNAL MODULE: ../node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(5849);
// EXTERNAL MODULE: ../node_modules/alpinejs/dist/module.esm.js
var module_esm = __webpack_require__(9407);
// EXTERNAL MODULE: ./components/swiper-free/swiper-free.js
var swiper_free = __webpack_require__(6484);
;// CONCATENATED MODULE: ./components/tabs/tabs.js




module_esm/* default.data */.Z.data('tabs', function () {
  return {
    tab: 1,
    init: function init() {
      this.$root.querySelectorAll('.tabs__item').forEach(function (item, index) {
        item.setAttribute('x-bind:class', "{'is-active': tab === ".concat(index + 1, "}"));
        item.setAttribute('x-on:click', "tab = ".concat(index + 1));
      });
      this.$root.querySelectorAll('.tabs__frame').forEach(function (item, index) {
        item.setAttribute('x-bind:class', "{'is-active': tab === ".concat(index + 1, "}"));
        item.setAttribute('x-show', "tab === ".concat(index + 1));
        item.setAttribute('x-transition.opacity', '');
      });
    }
  };
});
;// CONCATENATED MODULE: ./pages/direction/direction.js




















/***/ }),

/***/ 9312:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _js_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7390);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(601);
/* harmony import */ var _components_article_nav_article_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2247);
/* harmony import */ var _components_gallery_slider_gallery_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6890);
/* harmony import */ var _components_cards_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9479);
/* harmony import */ var _components_section_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6836);












/***/ }),

/***/ 4443:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _js_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7390);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(601);
/* harmony import */ var _components_article_nav_article_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2247);
/* harmony import */ var _components_infographic_infographic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8067);
/* harmony import */ var _components_gallery_slider_gallery_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6890);
/* harmony import */ var _components_docs_docs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9950);
/* harmony import */ var _components_gallery_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7525);
/* harmony import */ var _components_reviews_reviews__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4318);
/* harmony import */ var _components_cards_cards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9479);
/* harmony import */ var _components_contacts_contacts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9346);




















/***/ }),

/***/ 2595:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _js_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7390);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(601);
/* harmony import */ var _components_filters_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7997);
/* harmony import */ var _components_events_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1701);
/* harmony import */ var _components_section_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6836);









/***/ }),

/***/ 4103:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _js_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7390);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(601);
/* harmony import */ var _components_article_nav_article_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2247);
/* harmony import */ var _components_gallery_slider_gallery_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6890);
/* harmony import */ var _components_docs_docs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9950);
/* harmony import */ var _components_cards_cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9479);
/* harmony import */ var _components_gallery_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7525);
/* harmony import */ var _components_reviews_reviews__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4318);















/***/ }),

/***/ 1340:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _js_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7390);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(601);
/* harmony import */ var _components_filters_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7997);
/* harmony import */ var _components_cards_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9479);
/* harmony import */ var _components_section_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6836);











/***/ }),

/***/ 9453:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./js/base.js + 5 modules
var base = __webpack_require__(7390);
// EXTERNAL MODULE: ./components/header/header.js
var header = __webpack_require__(601);
// EXTERNAL MODULE: ../node_modules/alpinejs/dist/module.esm.js
var module_esm = __webpack_require__(9407);
// EXTERNAL MODULE: ../node_modules/swiper/swiper.esm.js + 94 modules
var swiper_esm = __webpack_require__(8305);
;// CONCATENATED MODULE: ./components/slider/slider.js




swiper_esm/* default.use */.ZP.use([swiper_esm/* EffectFade */.xW, swiper_esm/* Navigation */.W_, swiper_esm/* Autoplay */.pt]);
module_esm/* default.data */.Z.data('slider', function () {
  return {
    init: function init() {
      this.swiper = new swiper_esm/* default */.ZP(this.$refs.swiper, {
        effect: 'fade',
        fadeEffect: {
          crossFade: false
        },
        navigation: {
          prevEl: this.$refs.buttonPrev,
          nextEl: this.$refs.buttonNext
        },
        autoplay: true,
        loop: true
      });
    }
  };
});
// EXTERNAL MODULE: ./components/section-about/section-about.js
var section_about = __webpack_require__(2889);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(7791);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(3238);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(1418);
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(3938);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(7135);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ../node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__(7329);
;// CONCATENATED MODULE: ./components/marquee/marquee.js








var itemHoverEl;
var itemHoverRect;
var tooltipCoords = {
  prevX: 0,
  prevY: 0,
  x: 0,
  y: 0
};
var tooltipTimerId;
var tooltipEl;
var tooltipRect;
var tooltipFrameId;
module_esm/* default.data */.Z.data('marquee', function () {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var inst;
  return {
    marqueeIsInit: false,
    listCount: 1,
    pos: 0,
    maxPos: 0,
    listEl: null,
    resizeObserver: undefined,
    frameId: undefined,
    init: function init() {
      inst = this;
    },
    destroy: function destroy() {
      inst.destroyMarquee();
    },
    initMarquee: function initMarquee() {
      var _this = this;

      return (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.marqueeIsInit) {
                  _context.next = 8;
                  break;
                }

                _this.listEl = _this.$root.querySelector('.marquee__list');
                _this.resizeObserver = new ResizeObserver_es/* default */.Z(function () {
                  return _this.updateMarquee();
                });

                _this.resizeObserver.observe(_this.listEl);

                _context.next = 6;
                return _this.updateLayout();

              case 6:
                _this.play();

                _this.marqueeIsInit = true;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    updateMarquee: function updateMarquee() {
      var _this2 = this;

      return (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2() {
        return regenerator_default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this2.marqueeIsInit) {
                  _context2.next = 3;
                  break;
                }

                _context2.next = 3;
                return _this2.updateLayout();

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    destroyMarquee: function destroyMarquee() {
      var resetData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.marqueeIsInit) {
        this.resizeObserver.disconnect();

        if (resetData) {
          this.listCount = 1;
        }

        this.reset();
        this.marqueeIsInit = false;
      }
    },
    updateLayout: function updateLayout() {
      var _this3 = this;

      return new Promise(function (resolve) {
        _this3.maxPos = _this3.listEl.offsetWidth;
        _this3.listCount = Math.ceil(_this3.$refs.container.offsetWidth / _this3.maxPos) + 1;

        _this3.$nextTick(function () {
          _this3.updatePos();

          resolve();
        });
      });
    },
    updatePos: function updatePos() {
      if (this.pos >= this.maxPos) {
        this.pos = 0;
      }

      this.$refs.container.style.transform = "translateX(".concat(speed > 0 ? -this.pos : -this.maxPos + this.pos, "px)");
    },
    play: function play() {
      var _this4 = this;

      cancelAnimationFrame(this.frameId);
      this.pos += Math.abs(speed);
      this.updatePos();
      this.frameId = requestAnimationFrame(function () {
        return _this4.play();
      });
    },
    pause: function pause() {
      cancelAnimationFrame(this.frameId);
    },
    reset: function reset() {
      cancelAnimationFrame(this.frameId);
      this.pos = 0;
      this.$refs.container.style.transform = '';
    },
    showTooltip: function showTooltip(evt) {
      var _this5 = this;

      itemHoverEl = evt.currentTarget;
      itemHoverRect = itemHoverEl.getBoundingClientRect();
      itemHoverEl.addEventListener('mousemove', this.posTooltip);
      tooltipTimerId = setTimeout(function () {
        tooltipEl = itemHoverEl.querySelector('.marquee__tooltip');
        document.body.append(tooltipEl);
        tooltipEl.classList.remove('is-hidden');
        tooltipRect = tooltipEl.getBoundingClientRect();
        tooltipCoords.prevX = tooltipCoords.prevX || scrollX + itemHoverRect.left + itemHoverRect.width / 2;
        tooltipCoords.prevY = tooltipCoords.prevY || scrollY + itemHoverRect.top;

        _this5.updateTooltipPos();
      }, 100);
    },
    updateTooltipPos: function updateTooltipPos() {
      var _this6 = this;

      var deltaX = tooltipCoords.x - tooltipCoords.prevX;
      var deltaY = tooltipCoords.y - tooltipCoords.prevY;

      if (Math.abs(deltaX) > 0.1 || Math.abs(deltaY) > 0.1) {
        tooltipCoords.prevX += deltaX * 0.1;
        tooltipCoords.prevY += deltaY * 0.1;
      } else {
        tooltipCoords.prevX = tooltipCoords.x;
        tooltipCoords.prevY = tooltipCoords.y;
      }

      tooltipEl.style.transform = "translate(\n\t\t\t".concat(tooltipCoords.prevX - tooltipRect.width / 2, "px,\n\t\t\t").concat(tooltipCoords.prevY - tooltipRect.height, "px\n\t\t)");
      tooltipFrameId = requestAnimationFrame(function () {
        return _this6.updateTooltipPos();
      });
    },
    posTooltip: function posTooltip(evt) {
      tooltipCoords.x = scrollX + evt.clientX;
      tooltipCoords.y = scrollY + itemHoverRect.top;
    },
    hideTooltip: function hideTooltip(evt) {
      clearTimeout(tooltipTimerId);
      cancelAnimationFrame(tooltipFrameId);
      itemHoverEl.removeEventListener('mousemove', this.posTooltip);

      if (tooltipEl) {
        tooltipEl.classList.add('is-hidden');
        evt.currentTarget.append(tooltipEl);
        tooltipEl = null;
      }
    }
  };
});
;// CONCATENATED MODULE: ./components/directions/directions.js



module_esm/* default.data */.Z.data('directions', function () {
  for (var _len = arguments.length, marqueeOptionsList = new Array(_len), _key = 0; _key < _len; _key++) {
    marqueeOptionsList[_key] = arguments[_key];
  }

  return {
    get marqueeOptionsList() {
      return this.$store.isDesktop ? marqueeOptionsList : [undefined];
    }

  };
});
// EXTERNAL MODULE: ./components/section/section.js + 1 modules
var section = __webpack_require__(6836);
;// CONCATENATED MODULE: ./pages/home/home.js









/***/ }),

/***/ 154:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _js_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7390);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(601);




/***/ }),

/***/ 9735:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _js_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7390);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(601);
/* harmony import */ var _components_article_nav_article_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2247);
/* harmony import */ var _components_gallery_slider_gallery_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6890);
/* harmony import */ var _components_cards_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9479);
/* harmony import */ var _components_section_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6836);












/***/ }),

/***/ 9418:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _js_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7390);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(601);
/* harmony import */ var _components_events_slider_events_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7032);
/* harmony import */ var _components_filters_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7997);
/* harmony import */ var _components_cards_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9479);
/* harmony import */ var _components_section_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6836);











/***/ }),

/***/ 3177:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _js_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7390);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(601);
/* harmony import */ var _components_events_slider_events_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7032);
/* harmony import */ var _components_filters_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7997);
/* harmony import */ var _components_cards_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9479);
/* harmony import */ var _components_section_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6836);










/***/ }),

/***/ 3076:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _js_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7390);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(601);
/* harmony import */ var _components_events_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1701);
/* harmony import */ var _components_section_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6836);









/***/ }),

/***/ 5054:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _js_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7390);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(601);
/* harmony import */ var _components_article_nav_article_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2247);
/* harmony import */ var _components_infographic_infographic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8067);
/* harmony import */ var _components_gallery_slider_gallery_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6890);
/* harmony import */ var _components_docs_docs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9950);
/* harmony import */ var _components_gallery_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7525);
/* harmony import */ var _components_reviews_reviews__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4318);
/* harmony import */ var _components_contacts_contacts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9346);

















/***/ }),

/***/ 2092:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _js_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7390);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(601);
/* harmony import */ var _components_filters_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7997);
/* harmony import */ var _components_cards_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9479);
/* harmony import */ var _components_section_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6836);











/***/ }),

/***/ 2610:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _js_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7390);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(601);
/* harmony import */ var _components_article_nav_article_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2247);
/* harmony import */ var _components_gallery_slider_gallery_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6890);
/* harmony import */ var _components_gallery_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7525);
/* harmony import */ var _components_section_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6836);











/***/ }),

/***/ 9384:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _js_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7390);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(601);
/* harmony import */ var _components_filters_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7997);
/* harmony import */ var _components_cards_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9479);
/* harmony import */ var _components_section_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6836);










/***/ }),

/***/ 6698:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _js_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7390);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(601);
/* harmony import */ var _components_article_nav_article_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2247);
/* harmony import */ var _components_gallery_slider_gallery_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6890);
/* harmony import */ var _components_gallery_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7525);
/* harmony import */ var _components_section_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6836);











/***/ }),

/***/ 3735:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _js_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7390);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(601);
/* harmony import */ var _components_filters_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7997);
/* harmony import */ var _components_cards_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9479);
/* harmony import */ var _components_section_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6836);










/***/ }),

/***/ 3365:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _js_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7390);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(601);
/* harmony import */ var _components_article_nav_article_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2247);
/* harmony import */ var _components_gallery_slider_gallery_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6890);
/* harmony import */ var _components_gallery_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7525);
/* harmony import */ var _components_section_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6836);











/***/ }),

/***/ 9039:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _js_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7390);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(601);
/* harmony import */ var _components_filters_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7997);
/* harmony import */ var _components_cards_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9479);
/* harmony import */ var _components_section_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6836);










/***/ }),

/***/ 5630:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./arrow-down.svg": 8348,
	"./arrow-left.svg": 3773,
	"./arrow-right.svg": 4863,
	"./check.svg": 1527,
	"./doc.svg": 7743,
	"./facebook.svg": 3784,
	"./instagram.svg": 2611,
	"./logo-sticky.svg": 8212,
	"./pdf.svg": 740,
	"./plus.svg": 8161,
	"./renaissance.svg": 9941,
	"./share.svg": 6455,
	"./twitter.svg": 9023,
	"./visually.svg": 641,
	"./vk.svg": 1168,
	"./xls.svg": 1444
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 5630;

/***/ }),

/***/ 8348:
/***/ (function(module) {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 27 26\"><path stroke=\"currentColor\" d=\"M13.566 0v24.6M26 10.28 13.315 25M1 10.28 13.685 25\"/></svg>";

/***/ }),

/***/ 3773:
/***/ (function(module) {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 27\"><defs><marker id=\"id-1a\" markerHeight=\"27\" markerWidth=\"17\" orient=\"0\" refX=\"1\" refY=\"13.5\"><path stroke=\"currentColor\" d=\"M15.72 1 1 13.685M15.72 26 1 13.315\"/></marker></defs><line x1=\"0\" x2=\"100%\" y1=\"13.5\" y2=\"13.5\" stroke=\"currentColor\" marker-start=\"url(#id-1a)\"/></svg>";

/***/ }),

/***/ 4863:
/***/ (function(module) {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 27\"><defs><marker id=\"id-1a\" markerHeight=\"27\" markerWidth=\"17\" orient=\"0\" refX=\"16\" refY=\"13.5\"><path stroke=\"currentColor\" d=\"M1.28 1 16 13.685M1.28 26 16 13.315\"/></marker></defs><line x1=\"0\" x2=\"100%\" y1=\"13.5\" y2=\"13.5\" stroke=\"currentColor\" marker-end=\"url(#id-1a)\"/></svg>";

/***/ }),

/***/ 1527:
/***/ (function(module) {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 15 12\"><path fill=\"currentColor\" d=\"M5.192 8.4 1.731 4.8 0 6.6l3.462 3.6 1.73 1.8 1.731-1.8L15 1.8 13.27 0 5.191 8.4Z\"/></svg>";

/***/ }),

/***/ 7743:
/***/ (function(module) {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 65 80\"><path fill=\"currentColor\" d=\"M0 0h65v80H0z\"/><path fill=\"#fff\" d=\"M9.54 20.6h5.742c2.244 0 4.114.74 5.61 2.222 1.51 1.467 2.266 3.293 2.266 5.478 0 2.185-.755 4.019-2.266 5.5-1.496 1.467-3.366 2.2-5.61 2.2H9.54V20.6Zm3.74 3.564v8.272h2.002c1.217 0 2.207-.381 2.97-1.144.777-.763 1.166-1.76 1.166-2.992s-.389-2.23-1.166-2.992c-.763-.763-1.753-1.144-2.97-1.144H13.28Zm13.277-1.54c1.555-1.54 3.469-2.31 5.742-2.31 2.274 0 4.18.77 5.72 2.31 1.555 1.525 2.332 3.417 2.332 5.676 0 2.259-.777 4.158-2.332 5.698-1.54 1.525-3.446 2.288-5.72 2.288-2.273 0-4.187-.763-5.742-2.288-1.54-1.54-2.31-3.44-2.31-5.698 0-2.259.77-4.15 2.31-5.676Zm8.8 2.508c-.806-.836-1.826-1.254-3.058-1.254-1.232 0-2.251.418-3.058 1.254-.806.821-1.21 1.877-1.21 3.168 0 1.29.404 2.354 1.21 3.19.807.821 1.826 1.232 3.058 1.232 1.232 0 2.252-.41 3.058-1.232.807-.836 1.21-1.9 1.21-3.19s-.403-2.347-1.21-3.168Zm14.136-4.818c1.95 0 3.637.572 5.06 1.716 1.437 1.144 2.347 2.625 2.728 4.444h-3.938a3.85 3.85 0 0 0-1.474-1.892c-.675-.47-1.467-.704-2.376-.704-1.232 0-2.252.418-3.058 1.254-.807.836-1.21 1.892-1.21 3.168 0 1.29.403 2.354 1.21 3.19.806.821 1.826 1.232 3.058 1.232.601 0 1.158-.103 1.672-.308.513-.22.953-.52 1.32-.902a3.91 3.91 0 0 0 .858-1.364h3.938c-.381 1.804-1.29 3.278-2.728 4.422-1.423 1.144-3.11 1.716-5.06 1.716a8.238 8.238 0 0 1-3.168-.616 7.966 7.966 0 0 1-2.574-1.672 8.062 8.062 0 0 1-1.694-2.53 8.238 8.238 0 0 1-.616-3.168c0-2.259.77-4.15 2.31-5.676 1.555-1.54 3.468-2.31 5.742-2.31Z\"/><path stroke=\"#fff\" d=\"M10 69.5h46m-23.5.5V50\"/></svg>";

/***/ }),

/***/ 3784:
/***/ (function(module) {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 8 15\"><path fill=\"currentColor\" d=\"M0 4.96h1.715V3.452c0-.663.02-1.689.552-2.324C2.83.456 3.6 0 4.927 0 7.09 0 8 .279 8 .279l-.429 2.297S6.857 2.39 6.19 2.39s-1.263.216-1.263.82v1.75h2.734l-.19 2.243H4.926V15H1.715V7.204H0V4.96Z\"/></svg>";

/***/ }),

/***/ 2611:
/***/ (function(module) {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M11.669 0H4.33A4.336 4.336 0 0 0 0 4.331v7.338A4.336 4.336 0 0 0 4.331 16h7.338A4.336 4.336 0 0 0 16 11.67V4.33A4.336 4.336 0 0 0 11.669 0ZM8 12.375A4.38 4.38 0 0 1 3.625 8 4.38 4.38 0 0 1 8 3.625 4.38 4.38 0 0 1 12.375 8 4.38 4.38 0 0 1 8 12.375Zm4.48-7.718a1.294 1.294 0 0 1 0-2.586 1.294 1.294 0 0 1-.001 2.586Z\"/><path fill=\"currentColor\" d=\"M8 4.563A3.44 3.44 0 0 0 4.561 8 3.44 3.44 0 0 0 8 11.437 3.44 3.44 0 0 0 11.436 8 3.44 3.44 0 0 0 8 4.563Zm4.48-1.553a.355.355 0 1 0 0 .71.355.355 0 0 0 0-.71Z\"/></svg>";

/***/ }),

/***/ 8212:
/***/ (function(module) {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 36 35\"><path fill=\"url(#id-2a)\" d=\"m.002 0 17.582 17.418L35.002 35h-35V0Z\"/><path fill=\"url(#id-3b)\" d=\"M35 0 17.418 17.418 0 35h35V0Z\"/><defs><linearGradient id=\"id-2a\" x1=\"10.078\" x2=\"26.517\" y1=\"6.629\" y2=\"33.674\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#373CB2\"/><stop offset=\"1\" stop-color=\"#646AF4\"/></linearGradient><linearGradient id=\"id-3b\" x1=\"17.5\" x2=\"17.5\" y1=\"0\" y2=\"35\" gradientUnits=\"userSpaceOnUse\"><stop offset=\".229\" stop-color=\"#4147D2\"/><stop offset=\"1\" stop-color=\"#7277F5\"/></linearGradient></defs></svg>";

/***/ }),

/***/ 740:
/***/ (function(module) {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 65 80\"><path fill=\"currentColor\" d=\"M0 0h65v80H0z\"/><path fill=\"#fff\" d=\"M24.354 31.16H16.28V36h-3.74V20.6h11.814v10.56Zm-8.074-6.996v3.432h4.334v-3.432H16.28ZM27.321 20.6h5.742c2.244 0 4.114.74 5.61 2.222 1.51 1.467 2.266 3.293 2.266 5.478 0 2.185-.755 4.019-2.266 5.5-1.496 1.467-3.366 2.2-5.61 2.2h-5.742V20.6Zm3.74 3.564v8.272h2.002c1.218 0 2.208-.381 2.97-1.144.778-.763 1.166-1.76 1.166-2.992s-.388-2.23-1.166-2.992c-.762-.763-1.752-1.144-2.97-1.144h-2.002Zm22.892 0h-6.864v2.442h6.358v3.564h-6.358V36h-3.74V20.6h10.604v3.564Z\"/><path stroke=\"#fff\" d=\"M10 69.5h46m-23.5.5V50\"/></svg>";

/***/ }),

/***/ 8161:
/***/ (function(module) {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 45 45\"><path stroke=\"currentColor\" d=\"M0 21.654h45M21.654 45V0\"/></svg>";

/***/ }),

/***/ 9941:
/***/ (function(module) {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 49 30\"><path fill=\"currentColor\" d=\"M48.546 21.866c-.228-.105-.65-.21-1.032.14-1.448 1.352-4.972 3.862-9.974 4.032-10.854.351-20.752-7.284-21.303-8.104 4.797-.977 7.06-3.428 7.664-6.43.657-3.253-.75-6.424-3.348-8.238C19.32 2.412 16.36.358 10.045.02 7.998-.086 5.037.26 3.648.886.264 2.412-.54 5.296.317 7.549c.434 1.14 1.501 1.755 2.422 1.755.733 0 .832-.439.832-.439-.95-.462-2.017-1.187-1.724-2.656.405-2.071 4.38-2.475 7.312-2.475 3.401 0 6.34.533 8.72 1.867 1.853 1.041 3.096 2.17 3.395 3.914.856 4.938-4.075 6.974-5.864 7.021 0 0 2.645-5.798 2.451-7.998-.094-1.094-1.313-1.685-2.656-1.685-.487 3.259-3.4 12.035-6.673 16.804 0 0 .446.66 1.788.257 2.276-.679 4.152-5.318 4.152-5.318 5.946 5.85 14.548 10.11 17.427 10.812 2.428.597 6.157.966 8.907-.012 4.04-1.433 7.623-5.382 8.157-6.763.164-.45-.258-.69-.417-.767Z\"/></svg>";

/***/ }),

/***/ 6455:
/***/ (function(module) {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 25 25\"><path fill=\"currentColor\" d=\"M5.477 17.979A5.485 5.485 0 0 1 0 12.499a5.483 5.483 0 0 1 5.477-5.475 5.483 5.483 0 0 1 5.479 5.476 5.485 5.485 0 0 1-5.479 5.479Zm0-8.487A3.012 3.012 0 0 0 2.47 12.5a3.012 3.012 0 0 0 3.008 3.008c1.658 0 3.01-1.35 3.01-3.008a3.013 3.013 0 0 0-3.01-3.008Zm14.044 1.464a5.484 5.484 0 0 1-5.478-5.479A5.482 5.482 0 0 1 19.522 0 5.485 5.485 0 0 1 25 5.477a5.487 5.487 0 0 1-5.479 5.479Zm0-8.487a3.015 3.015 0 0 0-3.01 3.008 3.016 3.016 0 0 0 3.01 3.01 3.013 3.013 0 0 0 3.008-3.01 3.012 3.012 0 0 0-3.008-3.008Zm0 22.528a5.483 5.483 0 0 1-5.478-5.476 5.484 5.484 0 0 1 5.479-5.479A5.486 5.486 0 0 1 25 19.521a5.485 5.485 0 0 1-5.479 5.476Zm0-8.484a3.014 3.014 0 0 0-3.01 3.008 3.015 3.015 0 0 0 3.01 3.008 3.012 3.012 0 0 0 3.008-3.008 3.011 3.011 0 0 0-3.008-3.008Z\"/><path fill=\"currentColor\" d=\"M15.728 18.86a1.26 1.26 0 0 1-.55-.128L8.718 15.5a1.235 1.235 0 0 1 1.104-2.211l6.462 3.23a1.235 1.235 0 0 1-.556 2.34ZM9.27 11.838a1.23 1.23 0 0 1-1.103-.684A1.23 1.23 0 0 1 8.719 9.5l6.458-3.232a1.235 1.235 0 1 1 1.102 2.21l-6.457 3.229a1.186 1.186 0 0 1-.551.13Z\"/></svg>";

/***/ }),

/***/ 9023:
/***/ (function(module) {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" style=\"enable-background:new 0 0 512 512\" version=\"1.1\" viewBox=\"0 0 512 512\" xml:space=\"preserve\"><path fill=\"currentColor\" d=\"M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z\"/></svg>";

/***/ }),

/***/ 641:
/***/ (function(module) {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 42 21\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M31.265 14.488a4.067 4.067 0 1 0 0-8.134 4.067 4.067 0 0 0 0 8.134Zm0 6.354c5.755 0 10.42-4.666 10.42-10.42C41.686 4.665 37.02 0 31.266 0 25.51 0 20.845 4.666 20.845 10.421c0 5.755 4.665 10.421 10.42 10.421Z\" clip-rule=\"evenodd\"/><circle cx=\"10.421\" cy=\"10.421\" r=\"10.421\" fill=\"currentColor\"/></svg>";

/***/ }),

/***/ 1168:
/***/ (function(module) {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 18 10\"><path fill=\"currentColor\" d=\"M17.43 9.029a.932.932 0 0 0-.06-.114c-.305-.547-.886-1.219-1.743-2.016l-.018-.02-.01-.007-.009-.01h-.008c-.39-.371-.637-.62-.74-.748-.189-.243-.232-.49-.128-.74.072-.188.347-.585.822-1.194.25-.322.447-.58.593-.776 1.052-1.398 1.508-2.293 1.368-2.682L17.443.63c-.036-.055-.131-.105-.283-.15a1.426 1.426 0 0 0-.583-.023l-2.628.018a.34.34 0 0 0-.182.004l-.118.028-.047.023-.036.028a.394.394 0 0 0-.1.095.618.618 0 0 0-.09.16c-.287.736-.613 1.42-.977 2.052a19.09 19.09 0 0 1-.622.98 4.698 4.698 0 0 1-.474.612c-.128.13-.243.237-.346.314-.105.08-.183.113-.238.101a5.689 5.689 0 0 1-.153-.037.603.603 0 0 1-.206-.223.986.986 0 0 1-.105-.356 3.807 3.807 0 0 1-.032-.37 8.572 8.572 0 0 1 .005-.437c.005-.189.01-.317.01-.383 0-.231.003-.482.013-.753l.022-.643c.005-.158.01-.325.01-.501S10.27.856 10.25.755a1.468 1.468 0 0 0-.096-.292.496.496 0 0 0-.19-.22A1.052 1.052 0 0 0 9.662.12C9.338.047 8.928.008 8.43.001 7.298-.01 6.57.063 6.249.221a1.265 1.265 0 0 0-.347.274c-.108.134-.124.207-.045.219.365.054.623.185.776.392l.055.11c.042.078.085.218.127.418.043.202.07.423.082.667.03.444.03.824 0 1.14-.03.316-.059.563-.087.739a1.46 1.46 0 0 1-.232.63.182.182 0 0 1-.045.046.674.674 0 0 1-.247.045c-.085 0-.188-.042-.31-.128a2.187 2.187 0 0 1-.378-.35 4.586 4.586 0 0 1-.443-.626 10.564 10.564 0 0 1-.511-.949l-.147-.264c-.09-.17-.215-.418-.373-.744-.158-.325-.299-.64-.42-.945a.592.592 0 0 0-.22-.29L3.44.575A.948.948 0 0 0 3.083.44L.584.458c-.256 0-.43.057-.52.172L.027.686A.308.308 0 0 0 0 .832c0 .067.019.15.055.247a30.39 30.39 0 0 0 1.19 2.481c.43.797.8 1.44 1.117 1.925.317.488.639.946.967 1.377.33.432.546.71.652.831.107.123.191.213.252.275l.227.218c.147.147.361.322.644.525.283.203.597.405.94.602.343.197.744.359 1.2.484a4.12 4.12 0 0 0 1.332.15h1.05c.214-.017.374-.085.484-.2l.035-.044a.638.638 0 0 0 .069-.17.953.953 0 0 0 .031-.251 2.99 2.99 0 0 1 .06-.706 1.93 1.93 0 0 1 .154-.475c.059-.106.123-.196.197-.27a.86.86 0 0 1 .154-.133c.03-.014.055-.023.072-.03.147-.05.318-.002.517.142.197.143.381.319.556.53.173.209.382.445.623.706.245.263.457.456.64.585l.182.108c.122.072.28.14.475.201.194.061.365.075.51.045l2.335-.036c.233 0 .411-.039.54-.115.127-.076.201-.159.227-.25a.727.727 0 0 0 .005-.31 1.107 1.107 0 0 0-.062-.245Z\"/></svg>";

/***/ }),

/***/ 1444:
/***/ (function(module) {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 65 80\"><path fill=\"currentColor\" d=\"M0 0h65v80H0z\"/><path fill=\"#fff\" d=\"M22.098 28.278 27.004 36H22.56l-2.838-4.796L16.994 36H12.55l4.928-8.008-4.686-7.392h4.444l2.596 4.444 2.596-4.444h4.444l-4.774 7.678Zm10.715 4.158h6.358V36H29.073V20.6h3.74v11.836Zm19.42-8.272h-7.216v2.2h7.216V36H41.277v-3.564h7.216v-2.508h-7.216V20.6h10.956v3.564Z\"/><path stroke=\"#fff\" d=\"M10 69.5h46m-23.5.5V50\"/></svg>";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [216], function() { return __webpack_exec__(78), __webpack_exec__(5164), __webpack_exec__(8735), __webpack_exec__(3529), __webpack_exec__(7040), __webpack_exec__(296), __webpack_exec__(9312), __webpack_exec__(4443), __webpack_exec__(2595), __webpack_exec__(4103), __webpack_exec__(1340), __webpack_exec__(9453), __webpack_exec__(154), __webpack_exec__(9735), __webpack_exec__(9418), __webpack_exec__(3177), __webpack_exec__(3076), __webpack_exec__(5054), __webpack_exec__(2092), __webpack_exec__(2610), __webpack_exec__(9384), __webpack_exec__(6698), __webpack_exec__(3735), __webpack_exec__(3365), __webpack_exec__(9039), __webpack_exec__(1616); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);