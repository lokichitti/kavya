(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js ***!
  \************************************************************************/
/*! exports provided: P, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTimeGivenProgression; });
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
/**
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return NaN.
 */
var getTimeGivenProgression = function (p0, p1, p2, p3, progression) {
    var tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
    return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
};
/**
 * Solve a cubic equation in one dimension (time)
 */
var solveCubicParametricEquation = function (p0, p1, p2, p3, t) {
    var partA = (3 * p1) * Math.pow(t - 1, 2);
    var partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
    var partC = p0 * Math.pow(t - 1, 3);
    return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
var solveCubicBezier = function (p0, p1, p2, p3, refPoint) {
    p0 -= refPoint;
    p1 -= refPoint;
    p2 -= refPoint;
    p3 -= refPoint;
    var roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
    return roots.filter(function (root) { return root >= 0 && root <= 1; });
};
var solveQuadraticEquation = function (a, b, c) {
    var discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return [];
    }
    else {
        return [
            (-b + Math.sqrt(discriminant)) / (2 * a),
            (-b - Math.sqrt(discriminant)) / (2 * a)
        ];
    }
};
var solveCubicEquation = function (a, b, c, d) {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }
    b /= a;
    c /= a;
    d /= a;
    var p = (3 * c - b * b) / 3;
    var q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
    if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
    }
    else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
    }
    var discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
    }
    else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
    }
    var r = Math.sqrt(Math.pow(-(p / 3), 3));
    var phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
    var s = 2 * Math.pow(r, 1 / 3);
    return [
        s * Math.cos(phi / 3) - b / 3,
        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
    ];
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js ***!
  \******************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
var hapticSelectionStart = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
var hapticSelectionChanged = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
var hapticSelectionEnd = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js ***!
  \*****************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
var sanitizeDOMString = function (untrustedString) {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        var documentFragment_1 = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment_1.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                var element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment_1.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        var dfChildren = getElementChildren(documentFragment_1);
        /* tslint:disable-next-line */
        for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment_1);
        // First child is always the div we did our work in
        var getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
var sanitizeElement = function (element) {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes.item(i);
        var attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        var attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    var childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (var i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
var getElementChildren = function (el) {
    return (el.children != null) ? el.children : el.childNodes;
};
var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var router;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
            router = document.querySelector('ion-router');
            if (router) {
                if (ev != null) {
                    ev.preventDefault();
                }
                return [2 /*return*/, router.push(url, direction)];
            }
        }
        return [2 /*return*/, false];
    });
}); };



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js ***!
  \*************************************************************************/
/*! exports provided: f, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findCheckedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return watchForOptions; });
var watchForOptions = function (containerEl, tagName, onChange) {
    var mutation = new MutationObserver(function (mutationList) {
        onChange(getSelectedOption(mutationList, tagName));
    });
    mutation.observe(containerEl, {
        childList: true,
        subtree: true
    });
    return mutation;
};
var getSelectedOption = function (mutationList, tagName) {
    var newOption;
    mutationList.forEach(function (mut) {
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
    });
    return newOption;
};
var findCheckedOption = function (el, tagName) {
    if (el.nodeType !== 1) {
        return undefined;
    }
    var options = (el.tagName === tagName.toUpperCase())
        ? [el]
        : Array.from(el.querySelectorAll(tagName));
    return options.find(function (o) { return o.checked === true; });
};



/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/auth-form/auth-form.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/auth-form/auth-form.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"authForm\">\n  <ion-item>\n    <ion-label position=\"stacked\">Email</ion-label>\n    <ion-input\n      formControlName=\"email\"\n      type=\"email\"\n      placeholder=\"Your email address\"\n      [class.invalid]=\"!authForm.controls['email'].valid &&\n authForm.controls['email'].touched\"\n    >\n    </ion-input>\n  </ion-item>\n  <ion-item\n    class=\"error-message\"\n    *ngIf=\"!authForm.controls['email'].valid &&\n authForm.controls['email'].touched\"\n  >\n    <ion-label>Please enter a valid email address.</ion-label>\n  </ion-item>\n\n  <ion-item *ngIf=\"!isPasswordResetPage\">\n    <ion-label position=\"stacked\">Password</ion-label>\n    <ion-input\n      formControlName=\"password\"\n      type=\"password\"\n      placeholder=\"Your password\"\n      [class.invalid]=\"!authForm.controls['password'].valid&& authForm.controls['password'].touched\"\n    >\n    </ion-input>\n  </ion-item>\n  <ion-item\n    class=\"error-message\"\n    *ngIf=\"!authForm.controls['password'].valid\n && authForm.controls['password'].touched && !isPasswordResetPage\"\n  >\n    <ion-label>Your password needs more than 6 characters.</ion-label>\n  </ion-item>\n\n  <ion-button\n    (click)=\"submitCredentials(authForm)\"\n    expand=\"block\"\n    [disabled]=\"!authForm.valid\"\n  >\n    {{ actionButtonText }}\n  </ion-button>\n</form>"

/***/ }),

/***/ "./src/app/components/auth-form/auth-form.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/auth-form/auth-form.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  padding: 12px;\n  margin-bottom: 32px;\n}\nform ion-button {\n  margin-top: 30px;\n}\np {\n  font-size: 0.8em;\n  color: #d2d2d2;\n}\nion-label {\n  margin-left: 5px;\n}\nion-input {\n  padding: 5px;\n}\n.invalid {\n  border-bottom: 1px solid #ff6153;\n}\n.error-message {\n  min-height: 2.2rem;\n}\n.error-message ion-label {\n  margin: 2px 0;\n  font-size: 60%;\n  color: #ff6153;\n}\n.error-message .item-inner {\n  border-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xva2VzaC9pb25pYy1kb250LWRlbGV0ZS9rYXZ5YW1tYS9sb2thcHBhL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoLWZvcm0vYXV0aC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2F1dGgtZm9ybS9hdXRoLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREFJO0VBQ0UsZ0JBQUE7QUNFTjtBREVFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7QURFRTtFQUNFLGdCQUFBO0FDQ0o7QURFRTtFQUNFLFlBQUE7QUNDSjtBREVFO0VBQ0UsZ0NBQUE7QUNDSjtBREVFO0VBQ0Usa0JBQUE7QUNDSjtBREFJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRU47QURBSTtFQUNFLGdCQUFBO0FDRU4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F1dGgtZm9ybS9hdXRoLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbiAgfVxuICBcbiAgcCB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBjb2xvcjogI2QyZDJkMjtcbiAgfVxuICBcbiAgaW9uLWxhYmVsIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG4gIFxuICBpb24taW5wdXQge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICBcbiAgLmludmFsaWQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmY2MTUzO1xuICB9XG4gIFxuICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgbWluLWhlaWdodDogMi4ycmVtO1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICBtYXJnaW46IDJweCAwO1xuICAgICAgZm9udC1zaXplOiA2MCU7XG4gICAgICBjb2xvcjogI2ZmNjE1MztcbiAgICB9XG4gICAgLml0ZW0taW5uZXIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICB9XG4gIH0iLCJmb3JtIHtcbiAgcGFkZGluZzogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cbmZvcm0gaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbnAge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogI2QyZDJkMjtcbn1cblxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uaW52YWxpZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmY2MTUzO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIG1pbi1oZWlnaHQ6IDIuMnJlbTtcbn1cbi5lcnJvci1tZXNzYWdlIGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMnB4IDA7XG4gIGZvbnQtc2l6ZTogNjAlO1xuICBjb2xvcjogI2ZmNjE1Mztcbn1cbi5lcnJvci1tZXNzYWdlIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/auth-form/auth-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/auth-form/auth-form.component.ts ***!
  \*************************************************************/
/*! exports provided: AuthFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFormComponent", function() { return AuthFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var AuthFormComponent = /** @class */ (function () {
    function AuthFormComponent(formBuilder, loadingCtrl, alertCtrl) {
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.isPasswordResetPage = false;
        this.formSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.authForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]
        });
    }
    AuthFormComponent.prototype.ngOnInit = function () { };
    AuthFormComponent.prototype.showLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthFormComponent.prototype.hideLoading = function () {
        return this.loading.dismiss();
    };
    AuthFormComponent.prototype.handleError = function (error) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: error.message,
                            buttons: [{ text: 'Ok', role: 'cancel' }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthFormComponent.prototype.submitCredentials = function (authForm) {
        if (!authForm.valid) {
            console.log('Form is not valid yet, current value:', authForm.value);
        }
        else {
            this.showLoading();
            var credentials = {
                email: authForm.value.email,
                password: authForm.value.password
            };
            this.formSubmitted.emit(credentials);
        }
    };
    AuthFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AuthFormComponent.prototype, "actionButtonText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthFormComponent.prototype, "isPasswordResetPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthFormComponent.prototype, "formSubmitted", void 0);
    AuthFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-form',
            template: __webpack_require__(/*! raw-loader!./auth-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/auth-form/auth-form.component.html"),
            styles: [__webpack_require__(/*! ./auth-form.component.scss */ "./src/app/components/auth-form/auth-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], AuthFormComponent);
    return AuthFormComponent;
}());



/***/ }),

/***/ "./src/app/models/country-phone.model.ts":
/*!***********************************************!*\
  !*** ./src/app/models/country-phone.model.ts ***!
  \***********************************************/
/*! exports provided: CountryPhone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryPhone", function() { return CountryPhone; });
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-libphonenumber */ "./node_modules/google-libphonenumber/dist/libphonenumber.js");
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_libphonenumber__WEBPACK_IMPORTED_MODULE_0__);

var CountryPhone = /** @class */ (function () {
    function CountryPhone(iso, name) {
        this.iso = iso;
        this.name = name;
        var phoneUtil = google_libphonenumber__WEBPACK_IMPORTED_MODULE_0___default.a.PhoneNumberUtil.getInstance(), PNF = google_libphonenumber__WEBPACK_IMPORTED_MODULE_0___default.a.PhoneNumberFormat, PNT = google_libphonenumber__WEBPACK_IMPORTED_MODULE_0___default.a.PhoneNumberType, country_example_number = phoneUtil.getExampleNumberForType(this.iso, PNT.MOBILE), 
        // We need to define what kind of country phone number type we are going to use as a mask.
        // You can choose between many types including:
        //    - FIXED_LINE
        //    - MOBILE
        //    - For more types please refer to google libphonenumber repo (https://github.com/googlei18n/libphonenumber/blob/f9e9424769964ce1970c6ed2bd60b25b976dfe6f/javascript/i18n/phonenumbers/phonenumberutil.js#L913)
        example_number_formatted = phoneUtil.format(country_example_number, PNF.NATIONAL);
        // We need to define how are we going to format the phone number
        // You can choose between many formats including:
        //    - NATIONAL
        //    - INTERNATIONAL
        //    - E164
        //    - RFC3966
        this.sample_phone = example_number_formatted;
        this.code = "+" + country_example_number.getCountryCode();
    }
    CountryPhone.ctorParameters = function () { return [
        { type: String },
        { type: String }
    ]; };
    return CountryPhone;
}());



/***/ }),

/***/ "./src/app/models/validators.ts":
/*!**************************************!*\
  !*** ./src/app/models/validators.ts ***!
  \**************************************/
/*! exports provided: UsernameValidator, PhoneValidator, PasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsernameValidator", function() { return UsernameValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneValidator", function() { return PhoneValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidator", function() { return PasswordValidator; });
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-libphonenumber */ "./node_modules/google-libphonenumber/dist/libphonenumber.js");
/* harmony import */ var google_libphonenumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_libphonenumber__WEBPACK_IMPORTED_MODULE_0__);

var UsernameValidator = /** @class */ (function () {
    function UsernameValidator() {
    }
    UsernameValidator.validUsername = function (fc) {
        if (fc.value.toLowerCase() === "abc123" || fc.value.toLowerCase() === "123abc") {
            return {
                validUsername: true
            };
        }
        else {
            return null;
        }
    };
    return UsernameValidator;
}());

var PhoneValidator = /** @class */ (function () {
    function PhoneValidator() {
    }
    // Inspired on: https://github.com/yuyang041060120/ng2-validation/blob/master/src/equal-to/validator.ts
    PhoneValidator.validCountryPhone = function (countryControl) {
        var subscribe = false;
        return function (phoneControl) {
            if (!subscribe) {
                subscribe = true;
                countryControl.valueChanges.subscribe(function () {
                    phoneControl.updateValueAndValidity();
                });
            }
            if (phoneControl.value !== "") {
                try {
                    var phoneUtil = google_libphonenumber__WEBPACK_IMPORTED_MODULE_0___default.a.PhoneNumberUtil.getInstance();
                    var phoneNumber = "" + phoneControl.value + "", region = countryControl.value.iso, number = phoneUtil.parse(phoneNumber, region), isValidNumber = phoneUtil.isValidNumber(number);
                    if (isValidNumber) {
                        return null;
                    }
                }
                catch (e) {
                    // console.log(e);
                    return {
                        validCountryPhone: true
                    };
                }
                return {
                    validCountryPhone: true
                };
            }
            else {
                return null;
            }
        };
    };
    return PhoneValidator;
}());

var PasswordValidator = /** @class */ (function () {
    function PasswordValidator() {
    }
    // Inspired on: http://plnkr.co/edit/Zcbg2T3tOxYmhxs7vaAm?p=preview
    PasswordValidator.areEqual = function (formGroup) {
        var val;
        var valid = true;
        for (var key in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(key)) {
                var control = formGroup.controls[key];
                if (val === undefined) {
                    val = control.value;
                }
                else {
                    if (val !== control.value) {
                        valid = false;
                        break;
                    }
                }
            }
        }
        if (valid) {
            return null;
        }
        return {
            areEqual: true
        };
    };
    return PasswordValidator;
}());



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map