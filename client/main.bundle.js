webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <app-search></app-search>\r\n    </div>\r\n    <div class=\"col-md-9\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'action';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__carousel_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stars_stars_component__ = __webpack_require__("../../../../../src/app/stars/stars.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_product_service__ = __webpack_require__("../../../../../src/app/shared/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipe_filter_pipe__ = __webpack_require__("../../../../../src/app/pipe/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routeConfig = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */] },
    { path: 'product/:productId', component: __WEBPACK_IMPORTED_MODULE_9__product_detail_product_detail_component__["a" /* ProductDetailComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_5__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_6__carousel_carousel_component__["a" /* CarouselComponent */],
            __WEBPACK_IMPORTED_MODULE_7__product_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_8__stars_stars_component__["a" /* StarsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__product_detail_product_detail_component__["a" /* ProductDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pipe_filter_pipe__["a" /* FilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_router__["a" /* RouterModule */].forRoot(routeConfig),
            __WEBPACK_IMPORTED_MODULE_13__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__shared_product_service__["a" /* ProductService */],
            { provide: __WEBPACK_IMPORTED_MODULE_16__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_16__angular_common__["b" /* HashLocationStrategy */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slide-image{\r\n  width: 100%\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel slide\" data-ride=\"carousel\">\r\n  <ol class=\"carousel-indicators\">\r\n    <li class=\"active\"></li>\r\n    <li></li>\r\n    <li></li>\r\n  </ol>\r\n  <div class=\"carousel-inner\">\r\n    <div class=\"item active\">\r\n      <img class=\"slide-image\" src=\"http://placehold.it/800x300\" alt=\"\">\r\n    </div>\r\n    <div class=\"item\">\r\n      <img class=\"slide-image\" src=\"http://placehold.it/800x300\" alt=\"\">\r\n    </div>\r\n    <div class=\"item\">\r\n      <img class=\"slide-image\" src=\"http://placehold.it/800x300\" alt=\"\">\r\n    </div>\r\n  </div>\r\n  <a class=\"left carousel-control\" href=\"javascript:$('.carousel').carousel('prev')\">\r\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n  </a>\r\n  <a class=\"right carousel-control\" href=\"javascript:$('.carousel').carousel('next')\">\r\n    <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    return CarouselComponent;
}());
CarouselComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-carousel',
        template: __webpack_require__("../../../../../src/app/carousel/carousel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/carousel/carousel.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CarouselComponent);

//# sourceMappingURL=carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <hr>\r\n  <footer>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <p>Copy right: Carrot</p>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel-container{\r\n  margin-bottom: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row carousel-container\">\n  <app-carousel></app-carousel>\n</div>\n<div class=\"row\">\n  <app-product></app-product>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">Online Auction</a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li><a href=\"#\">About Us</a> </li>\r\n        <li><a href=\"#\">Contact Us</a> </li>\r\n        <li><a href=\"#\">Site Map</a> </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipe/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (list, filterField, keyword) {
        if (!filterField || !keyword) {
            return list;
        }
        return list.filter(function (item) {
            var fieldValue = item[filterField].toLowerCase();
            return fieldValue.indexOf(keyword.toLowerCase()) >= 0; // 判断fieldValue中是否包含keyword，包含就返回true，这个item就可以取出来
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"thumbnail\">\r\n  <img src=\"http://placehold.it/820x230\">\r\n  <div>\r\n    <h4 class=\"pull-right\">$ {{product?.price}}</h4>\r\n    <h4>{{product?.title}}</h4>\r\n    <p>{{product?.desc}}</p>\r\n  </div>\r\n  <div>\r\n    <p class=\"pull-right\">{{comments?.length}} comments</p>\r\n    <p>\r\n      <app-stars [rating]=\"product?.rating\"></app-stars>\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"well\">\r\n  <div>\r\n    <button class=\"btn btn-success\" (click)=\"isCommentHidden = !isCommentHidden\">Comment</button>\r\n  </div>\r\n  <div [hidden]=\"isCommentHidden\">\r\n    <div><app-stars [(rating)]=\"newRating\" [readonly]=\"false\"></app-stars></div>\r\n    <div>\r\n      <textarea [(ngModel)]=\"newComment\"></textarea>\r\n    </div>\r\n    <div>\r\n      <button class=\"btn\" (click)=\"addComment()\">Submit</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngFor=\"let comment of comments\">\r\n    <hr>\r\n    <div class=\"col-md-12\">\r\n      <app-stars [rating]=\"comment.rating\"></app-stars>\r\n      <span>{{comment.user}}</span>\r\n      <span class=\"pull-right\">{{comment.timestamp}}</span>\r\n      <p></p>\r\n      <span>{{comment.content}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_product_service__ = __webpack_require__("../../../../../src/app/shared/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDetailComponent = (function () {
    function ProductDetailComponent(routeInfo, productService) {
        this.routeInfo = routeInfo;
        this.productService = productService;
        this.newRating = 5;
        this.newComment = "";
        this.isCommentHidden = true;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var productId = this.routeInfo.snapshot.params["productId"];
        // this.product = this.productService.getProduct(productId);
        // 这里采取手工订阅流的方式。没有采用async自动订阅的原因是，模板中绑定product的地方特别多，如果用自动订阅，
        // 每个绑定product的地方都要加async，太麻烦。所以在控制器里手动订阅，把值传给本地product，模板不用更改
        this.productService.getProduct(productId).subscribe(function (product) { return _this.product = product; });
        // comments数组在模板中只绑定了一次，所以可以async自动订阅，但是由于下面addComment方法中用到unshift，reduce这些数组特有的方法，
        // 对comments自动订阅的话，就必须把它声明为流格式，就无法使用这些数组方法。所以也要手工订阅。
        // this.comments = this.productService.getCommentsForProductId(productId);
        this.productService.getCommentsForProductId(productId).subscribe(function (comments) { return _this.comments = comments; });
    };
    ProductDetailComponent.prototype.addComment = function () {
        var comment = new __WEBPACK_IMPORTED_MODULE_2__shared_product_service__["b" /* Comment */](0, this.product.id, new Date().toISOString(), "someone", this.newRating, this.newComment);
        this.comments.unshift(comment);
        // 重新计算平均评分
        // reduce方法接收一个函数作为累加器，reduce遍历comments中的每个comment，有两个参数，第一个是匿名函数，第二个是初始值。
        // 这里sum初始值是0，comment是遍历comments的每个元素。匿名函数的结果就作为下一次遍历的sum值，最后得到所有评价的评分总和
        var sum = this.comments.reduce(function (sum, comment) { return sum + comment.rating; }, 0); //
        this.product.rating = sum / this.comments.length;
        // 发表评论后清空评论区
        this.newComment = null;
        this.newRating = 5;
        this.isCommentHidden = true;
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-product-detail',
        template: __webpack_require__("../../../../../src/app/product-detail/product-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product-detail/product-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_product_service__["a" /* ProductService */]) === "function" && _b || Object])
], ProductDetailComponent);

var _a, _b;
//# sourceMappingURL=product-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"row\">-->\r\n  <!--<div class=\"col-sm-12\">-->\r\n    <!--<div class=\"form-group\">-->\r\n      <!--<input class=\"form-control\" placeholder=\"Please enter product title\" [formControl]=\"titleFilter\">-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n<!--<div *ngFor=\"let product of products | filter:'title':keyword\" class=\"col-md-4 col-sm-4 col-lg-4\">-->\r\n<div *ngFor=\"let product of products | async\" class=\"col-md-4 col-sm-4 col-lg-4\">\r\n  <div class=\"thumbnail\">\r\n    <img [src]=\"imgUrl\">\r\n    <div class=\"caption\">\r\n      <h4 class=\"pull-right\">${{product.price}}</h4>\r\n      <h4><a [routerLink]=\"['/product', product.id]\">{{product.title}}</a></h4>\r\n      <p>{{product.desc}}</p>\r\n    </div>\r\n    <div>\r\n      <app-stars [rating]=\"product.rating\"></app-stars>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_service__ = __webpack_require__("../../../../../src/app/shared/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductComponent = (function () {
    // private keyword: string
    // private titleFilter: FormControl = new FormControl();
    function ProductComponent(productService) {
        this.productService = productService;
        this.imgUrl = 'http://placehold.it/320x150';
        // this.titleFilter.valueChanges // 这就是流
        //   .debounceTime(500) // 当用户持续输入时不发射当前input的值，只有停止输入半秒以上时才发射到观察者函数中，提高用户体验。需要import 'rxjs/Rx'才起作用
        //   .subscribe(
        //     value => this.keyword = value // 将值保存到本地属性上
        //   );
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products = this.productService.getProducts();
        // 订阅service中的搜索事件流，即当流里面有搜索事件时，得到的数据是查询参数params（这个参数数据由search组件发射的searchEvent事件携带），
        // 然后用这个参数调用service的search方法，将方法返回的流给到本地products属性，模板上的async管道会自动订阅products流
        this.productService.searchEvent.subscribe(function (params) { return _this.products = _this.productService.search(params); });
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-product',
        template: __webpack_require__("../../../../../src/app/product/product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], ProductComponent);

var _a;
//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<form name=\"searchForm\" role=\"form\">-->\r\n  <!--<div class=\"form-group\">-->\r\n    <!--<label for=\"productTitle\">Product Title: </label>-->\r\n    <!--<input type=\"text\" id=\"productTitle\" placeholder=\"Product Title\">-->\r\n  <!--</div>-->\r\n  <!--<div class=\"form-group\">-->\r\n    <!--<label for=\"productPrice\">Product Price: </label>-->\r\n    <!--<input type=\"number\" id=\"productPrice\" placeholder=\"Product Price\">-->\r\n  <!--</div>-->\r\n  <!--<div class=\"form-group\">-->\r\n    <!--<label for=\"productCategory\">Product Category: </label>-->\r\n    <!--<select id=\"productCategory\" class=\"form-control\"></select>-->\r\n  <!--</div>-->\r\n  <!--<div class=\"form-group\">-->\r\n    <!--<button type=\"submit\" class=\"btn btn-primary btn-block\">Search</button>-->\r\n  <!--</div>-->\r\n<!--</form>-->\r\n\r\n<form [formGroup]=\"formModel\" (ngSubmit)=\"onSearch()\" novalidate>\r\n  <div class=\"form-group\" [class.has-error]=\"formModel.hasError('minlength', 'title')\">\r\n    <label for=\"productTitle\">Product Title: </label>\r\n    <input formControlName=\"title\" type=\"text\" id=\"productTitle\" placeholder=\"Product Title\">\r\n    <span class=\"help-block\" [class.hidden]=\"!formModel.hasError('minlength', 'title')\">\r\n      Please enter at least 3 letters.\r\n    </span>\r\n  </div>\r\n  <div class=\"form-group\" [class.has-error]=\"formModel.hasError('positiveNumber','price')\">\r\n    <label for=\"productPrice\">Product Price: </label>\r\n    <input formControlName=\"price\" type=\"number\" id=\"productPrice\" placeholder=\"Product Price\">\r\n    <span class=\"help-block\" [class.hidden]=\"!formModel.hasError('positiveNumber','price')\">\r\n      Please enter positive number.\r\n    </span>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"productCategory\">Product Category: </label>\r\n    <select formControlName=\"category\" id=\"productCategory\" class=\"form-control\">\r\n      <option value=\"-1\">All categories</option>\r\n      <option *ngFor=\"let category of categories\" [value]=\"category\">{{category}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <button type=\"submit\" class=\"btn btn-primary btn-block\">Search</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_product_service__ = __webpack_require__("../../../../../src/app/shared/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(productService) {
        this.productService = productService;
        var fb = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]();
        this.formModel = fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(3)],
            price: [null, this.positiveNumberValidator],
            category: ['-1']
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.categories = this.productService.getAllCategories();
    };
    SearchComponent.prototype.positiveNumberValidator = function (control) {
        if (!control.value) {
            return null;
        }
        var price = parseInt(control.value);
        if (price > 0) {
            return null;
        }
        else {
            return { positiveNumber: true };
        }
    };
    SearchComponent.prototype.onSearch = function () {
        if (this.formModel.valid) {
            console.log(this.formModel.value);
            // 提交按钮被点击时发射service中定义的searchEvent事件，携带的数据是符合ProductSearchParams类定义的对象。
            // 表单里的值正好符合这个类定义，所以可以直接将表单值发射出去
            this.productService.searchEvent.emit(this.formModel.value);
        }
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], SearchComponent);

var _a;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* unused harmony export Product */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Comment; });
/* unused harmony export ProductSearchParams */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    // 改造代码，从http服务器获取数据
    function ProductService(http) {
        this.http = http;
        // 定义搜索事件流，search组件的点击提交按钮会发射这个事件流
        this.searchEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
    }
    // // 假设这里是从数据库获取到的数据
    // private products: Product[] = [
    //   new Product(1, "First Product", 1.99, 3.5, "This is the first product.", ["Electronic", "Hardware"]),
    //   new Product(2, "Second Product", 2.99, 2.5, "This is the second product.", ["Game", "Software"]),
    //   new Product(3, "Third Product", 3.99, 4.0, "This is the third product.", ["Electronic", "Hardware"]),
    //   new Product(4, "Fourth Product", 4.99, 1.5, "This is the fourth product.", ["Music", "Software"]),
    //   new Product(5, "Fifth Product", 5.99, 3.5, "This is the fifth product.", ["Electronic", "Hardware"]),
    //   new Product(6, "Sixth Product", 6.99, 2.5, "This is the sixth product.", ["Movie", "Software"])
    // ];
    // private comments: Comment[] = [
    //   new Comment(1, 1, "2017-02-02 22:22:22", "Dong", 3, "Not bad"),
    //   new Comment(2, 1, "2017-02-02 22:22:22", "Jiarun", 4, "Good"),
    //   new Comment(3, 1, "2017-02-02 22:22:22", "Ryan", 2, "Not like"),
    //   new Comment(4, 2, "2017-02-02 22:22:22", "Elva", 3, "OK")
    // ];
    // this.products.push(new Product(7, "Seventh Product", 7.99, 3.5, "This is the seventh product.", ["Electronic", "Hardware"]));
    // constructor() { }
    // getProducts(): Product[] {
    //   return this.products;
    // }
    // getProduct(id: number): Product {
    //   return this.products.find((p) => p.id == id);
    // }
    // getCommentsForProductId(id:number): Comment[] {
    //   // 过滤每个评论，当发现这个评论的productId和传入的参数Id相等，则取出
    //   return this.comments.filter((c: Comment) => c.productId == id);
    // }
    ProductService.prototype.getAllCategories = function () {
        return ["Electronic", "Hardware", "Game", "Software", "Movie"];
    };
    ProductService.prototype.getProducts = function () {
        return this.http.get("/api/products").map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProduct = function (id) {
        return this.http.get("/api/product/" + id).map(function (res) { return res.json(); });
    };
    ProductService.prototype.getCommentsForProductId = function (id) {
        return this.http.get("/api/product/" + id + "/comments").map(function (res) { return res.json(); });
    };
    // 以本服务为中间人，负责搜索组件和商品列表组件间通讯
    // get方法第二个参数options类型是RequestOptionsArgs，这个类型的search属性值类型是URLSearchParams，所以写个方法encodeParams将传入的参数变成URLSearchParams类型
    ProductService.prototype.search = function (params) {
        // console.log("search: "+this.encodeParams(params).toString());
        // return this.http.get("/api/products", {search: this.encodeParams(params)}).map(res => res.json());
        // 我这里必须把参数toString才能正确获得结果，但是教程中并没有toString，而且看这里的用法应该也确实不需要toString。原因未知。。。
        return this.http.get("/api/products", { search: this.encodeParams(params).toString() }).map(function (res) { return res.json(); });
    };
    ProductService.prototype.encodeParams = function (params) {
        var result;
        result = Object.keys(params) // Object.key方法将对象params的所有属性变成一个集合
            .filter(function (key) { return params[key]; }) // 保留有值的属性，去除没有值的属性
            .reduce(function (sum, key) {
            sum.append(key, params[key]); // append是URLSearchParams类的方法，作用是将参数自动按key1=value1&key2=value2这种方式附加到一起，组成queryString。用set方法得到的效果好像一样
            return sum;
        }, new URLSearchParams());
        return result;
    };
    return ProductService;
}());
ProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProductService);

var Product = (function () {
    function Product(id, title, price, rating, desc, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Product;
}());

var Comment = (function () {
    function Comment(id, productId, timestamp, user, rating, content) {
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.content = content;
    }
    return Comment;
}());

var ProductSearchParams = (function () {
    function ProductSearchParams(title, price, category) {
        this.title = title;
        this.price = price;
        this.category = category;
    }
    return ProductSearchParams;
}());

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/stars/stars.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stars/stars.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  <span *ngFor=\"let star of stars; let i = index\" class=\"glyphicon glyphicon-star\"\r\n        [class.glyphicon-star-empty]=\"star\" (click)=\"clickStar(i)\"></span>\r\n  <span>{{rating | number: '1.0-2'}} stars</span>\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/stars/stars.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarsComponent = (function () {
    function StarsComponent() {
        this.rating = 0;
        this.ratingChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.readonly = true;
    }
    StarsComponent.prototype.ngOnInit = function () {
        // this.stars = [false,true,true,true,true];
        // 更新stars数组，更新星星显示的任务放到ngOnChanges里了，因为在运行ngOnInit前，ngOnChanges是会先运行一次的
        // this.stars = [];
        // for(let i = 1; i <= 5; i++){
        //   this.stars.push(i > this.rating);
        // }
    };
    // 当rating接到newRating的值时，显示的星星数量没有变化，这是因为stars数组没有更新。所以要用到ngOnChanges钩子，在rating值变化时，更新stars数组并更新星星显示
    StarsComponent.prototype.ngOnChanges = function (changes) {
        this.stars = [];
        for (var i = 1; i <= 5; i++) {
            this.stars.push(i > this.rating);
        }
    };
    StarsComponent.prototype.clickStar = function (index) {
        if (!this.readonly) {
            this.rating = index + 1;
            // this.ngOnInit();// 根据新得到的rating值，确定显示多少个实心星星，多少个空心星星 //更新星星的任务放到ngOnChange中了，这里就不用在运行ngOnInit了，因为rating值变化后，会自动运行ngOnChanges
            this.ratingChange.emit(this.rating);
        }
    };
    return StarsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], StarsComponent.prototype, "rating", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]) === "function" && _a || Object)
], StarsComponent.prototype, "ratingChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], StarsComponent.prototype, "readonly", void 0);
StarsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-stars',
        template: __webpack_require__("../../../../../src/app/stars/stars.component.html"),
        styles: [__webpack_require__("../../../../../src/app/stars/stars.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StarsComponent);

var _a;
//# sourceMappingURL=stars.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map