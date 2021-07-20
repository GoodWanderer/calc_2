/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/popup.js":
/*!*************************!*\
  !*** ./src/js/popup.js ***!
  \*************************/
/***/ (function() {

const colorsImg = document.querySelectorAll('.colors-preview__img'),
      trowellingImg = document.querySelectorAll('.item-order__img'),
      mPopup = document.querySelector('.popup-zoom'),
      body = document.querySelector('body');
      
trowellingImg.forEach(trowelling => {
  trowelling.addEventListener('click', () => {
    mPopup.querySelector('img').src = trowelling.querySelector('img').src;
    mPopup.classList.remove('off');
    body.classList.add('_lock');
  })
});

colorsImg.forEach(color => {
  color.addEventListener('click', () => {
    mPopup.querySelector('img').src = color.querySelector('img').src;
    mPopup.classList.remove('off');
    body.classList.add('_lock');
  })
});

mPopup.querySelector('.popup-zoom__body').addEventListener('click', (e) => {
  if (!e.target.closest('.popup-zoom__img')) {
    mPopup.classList.add('off');
    body.classList.remove('_lock');
  }
})

mPopup.querySelector('.popup-zoom__close').addEventListener('click', () => {
  mPopup.classList.add('off');
  body.classList.remove('_lock');
})



/***/ }),

/***/ "./src/js/preview.js":
/*!***************************!*\
  !*** ./src/js/preview.js ***!
  \***************************/
/***/ (function() {





/***/ }),

/***/ "./src/js/trowelling.js":
/*!******************************!*\
  !*** ./src/js/trowelling.js ***!
  \******************************/
/***/ (function() {

const backConstValue = {
  s: 990,
  angle: {
    // exp: 14,
    s: 14,
    price: 95
  },
  packaging: {
    s: 0.57,
    angle: 1
  },
  trowelling: {
    1: {
      exp: 2.4,
      s: 7,
      price: 690,
    },
    2: {
      exp: 2.4,
      s: 7,
      price: 690,
    },
    3: {
      exp: 2.4,
      s: 7,
      price: 690,
    },
  },
  glue: {
    exp: 5,
    s: 25,
    price: 900,
  },
}

//! Выбор расчветки
const colors = document.querySelectorAll('.colors-preview__border'),
      titlePage = document.querySelector('.preview__title'),
      titleOrder = document.querySelector('.order__title'),
      img = document.querySelector('.order__img'),
      itemColors = document.querySelectorAll('.colors-preview__img');

let srcColor = itemColors[0].querySelector('img').src, 
    IndexColor = 1,
    titleBuy = titlePage.textContent;
try {
  colors.forEach((color, i) => {
    color.addEventListener('click', () => {
      colors.forEach(color => {
        color.classList.remove('_active');
      });
      color.classList.add('_active');
      IndexColor = i + 1;
      srcColor = itemColors[i].querySelector('img').src;
      titleOrder.innerHTML = `${titleBuy} | №${IndexColor}`;
      img.querySelector('img').src = srcColor;
    })
  });
} catch (e) {
  console.log(`Ошибка в блоке Preview:\n${e}`);
}

//! Активация выбора Ушлов
const angularCheck = document.querySelector('.angular-settings-order__checkbox span'),
      angularInput = document.querySelector('.angular-settings-order__input');

angularCheck.addEventListener('click', () => {
  angularInput.classList.toggle('_active');
})

//! Активация выбора затирок
const trowelling = document.querySelector('.trowelling-settings-order__checkbox span'),
      trowellingRow = document.querySelector('.trowelling-settings-order__row');

trowelling.addEventListener('click', () => {
  trowellingRow.classList.toggle('_active');
})

//! Добавить клей
const glue = document.querySelector('.glue-settings-order__checkbox span');

glue.addEventListener('click', () => {
  glue.classList.toggle('_active');
})

//! Выбор затирки
const trowellingBorders = document.querySelectorAll('.item-order__border');
let trowellingIndex = 1
try {
  trowellingBorders.forEach((border, i) => {
    border.addEventListener('click', () => {
      trowellingBorders.forEach(brdr => {
        brdr.classList.remove('_active');
      });
      border.classList.add('_active');
      trowellingIndex = i + 1;
    })
  });
} catch (e) {
  console.log(`Ошибка в блоке Preview:\n${e}`);
}

//! Пупап формы 
const fPopup = document.querySelector('.popup-form'),
      close = document.querySelector('.popup-form__close'),
      // btnSend = document.querySelector('.popup-form__btn-send');

      body = document.querySelector('body'),

      btnAdd = document.querySelector('.settings-order__buy-btn');

const title = document.querySelector('.details-popup-form-head span'),
      num = document.querySelector('.details-popup-form-body__article .details-popup-form-body__num'),

      sizeQ = document.querySelector('.details-popup-form-body__quantity .details-popup-form-body__q'),
      sizePrice = document.querySelector('.details-popup-form-body__quantity .details-popup-form-body__price'),

      angleBody = document.querySelector('.details-popup-form-body__angle'),
      angleQ = angleBody.querySelector('.details-popup-form-body__q'),
      anglePrice = angleBody.querySelector('.details-popup-form-body__price'),

      trowellingBody = document.querySelector('.details-popup-form-body__trowelling'),
      trowellingNum = trowellingBody.querySelector('.details-popup-form-body__num'),
      trowellingQ = trowellingBody.querySelector('.details-popup-form-body__q'),
      trowellingPrice = trowellingBody.querySelector('.details-popup-form-body__price'),

      glueBody = document.querySelector('.details-popup-form-body__glue'),
      glueQ = glueBody.querySelector('.details-popup-form-body__q'),
      gluePrice = glueBody.querySelector('.details-popup-form-body__price'),

      // impregnationBody = document.querySelector('.details-popup-form-body__impregnation')
      // impregnationQ = impregnationBody.querySelector('.details-popup-form-body__q')
      // impregnationPrice = impregnationBody.querySelector('.details-popup-form-body__price')

      numTotal = document.querySelector('.details-popup-form-footer .details-popup-form-footer__total'),
      popupImg = document.querySelector('.details-popup-form-body__img img');

btnAdd.addEventListener('click', () => {

  let hight = document.querySelector('.size-settings-order__hight input'),
      width = document.querySelector('.size-settings-order__width input'),
      angular = document.querySelector('.angular-settings-order__input input');

  let check = 0;
  if (hight.value <= 0 || hight.value == '' || isNaN(hight.value)) {
    hight.style.border = '1px solid red';
    check = 1;
  } else {
    hight.style.border = '1px solid #cacaca';
  }

  if (width.value <= 0 || width.value == '' || isNaN(width.value)) {
    width.style.border = '1px solid red';
    check = 1;
  } else {
    width.style.border = '1px solid #cacaca';
  }

  if (document.querySelector('.angular-settings-order__input').classList.contains('_active') && (angular.value <= 0 || angular.value == '' || isNaN(angular.value))) {
    angular.style.border = '1px solid red';
    check = 1;
  } else {
    angular.style.border = '1px solid #cacaca';
  }

  if (check == 0) {

    let sizeSum = 0;
    let angularSum = 0;
    if (document.querySelector('.angular-settings-order__input').classList.contains('_active')) {
      angleBody.style.display = 'block';
      angularSum = Math.ceil(Math.ceil(angular.value * backConstValue.angle.s) / backConstValue.angle.s) * backConstValue.angle.s;
      sizeSum = Math.ceil((width.value * hight.value / 10000 - angular.value * 0.2) * 1.1 / backConstValue.packaging.s) * backConstValue.packaging.s;
    } else {
      angleBody.style.display = 'none';
      sizeSum = Math.ceil(width.value * hight.value / 10000 * 1.1 / backConstValue.packaging.s) * backConstValue.packaging.s;
    }

    let trowellingSum = 0;
    if (trowellingRow.classList.contains('_active')) {
      trowellingBody.style.display = 'block';

      trowellingNum.textContent = trowellingIndex;
      trowellingSum = Math.ceil(width.value * hight.value / 10000 * backConstValue.trowelling[trowellingIndex].exp / backConstValue.trowelling[trowellingIndex].s);
      trowellingQ.textContent = (trowellingSum).toLocaleString();
      trowellingPrice.textContent = (trowellingSum * backConstValue.trowelling[trowellingIndex].price).toLocaleString();
    } else {
      trowellingBody.style.display = 'none';
    }

    let glueSum = 0;
    if (glue.classList.contains('_active')) {
      glueBody.style.display = 'block';

      glueSum = Math.ceil(width.value * hight.value / 10000 * backConstValue.glue.exp / backConstValue.glue.s);
      glueQ.textContent = (glueSum).toLocaleString();
      gluePrice.textContent = (glueSum * backConstValue.glue.price).toLocaleString();
    } else {
      glueBody.style.display = 'none';
    }

    fPopup.classList.remove('off');
    body.classList.add('_lock');
  
    title.textContent = titleBuy;
    popupImg.src = srcColor;
    num.textContent = IndexColor;

    sizeQ.textContent = (sizeSum).toLocaleString();
    sizePrice.textContent = (backConstValue.s * sizeSum).toLocaleString();

    angleQ.textContent = (angularSum).toLocaleString();
    anglePrice.textContent = (angularSum * backConstValue.angle.price).toLocaleString();

    numTotal.textContent = (backConstValue.s * sizeSum + backConstValue.trowelling[trowellingIndex].price * trowellingSum + glueSum * backConstValue.glue.price).toLocaleString();
  }

  // const rowPopup = document.querySelector('.popup-form__row');
  // const correct = document.querySelector('.popup-form__correction')
  // const chekbox = document.querySelector('.right-order__checkbox input[type=checkbox]');

  // if (chekbox.checked) {
  //   correct.style.display = '';
  //   rowPopup.classList.add('expand')
  //   cheked = true;
  // } else {
  //   cheked = false;
  //   correct.style.display = 'none';
  //   rowPopup.classList.remove('expand')
  // }

  // title.textContent = titlePage.textContent;
  // popupImg.src = imgSrc;
  // num.textContent = index;
  // size.innerHTML = `${width.value} см x ${height.value} см = ${(width.value * height.value / 10000).toFixed(1)} м<sup>2</sup>`;
  // invoice.textContent = invoiceActive;
  // priceOne.textContent = `${groupNums((price * width.value * height.value / 10000).toFixed(1))} ₽`;
  // numTotal.textContent = `${groupNums((quantityInput.value * price * width.value * height.value / 10000).toFixed(1))} ₽`;
})

// quantityInput.addEventListener('input', () => {
//   if (quantityInput.value < 1) {
//     quantityInput.value = 1;
//   }
//   numTotal.textContent = `${groupNums((quantityInput.value * price * width.value * height.value / 10000).toFixed(1))} ₽`;
// }) 

close.addEventListener('click', () =>{
  document.forms["mail"].reset()
  fPopup.classList.add('off');
  body.classList.remove('_lock');
})

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview */ "./src/js/preview.js");
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_preview__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _trowelling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trowelling */ "./src/js/trowelling.js");
/* harmony import */ var _trowelling__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_trowelling__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup */ "./src/js/popup.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_popup__WEBPACK_IMPORTED_MODULE_3__);






}();
/******/ })()
;
//# sourceMappingURL=script.js.map