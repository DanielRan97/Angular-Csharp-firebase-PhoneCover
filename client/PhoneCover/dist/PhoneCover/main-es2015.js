(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-modules-home-home-module */ "src-app-modules-home-home-module").then(__webpack_require__.bind(null, /*! src/app/modules/home/home.module */ "./src/app/modules/home/home.module.ts")).then(m => m.HomeModule)
    },
    {
        path: 'home/order/:id',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! src/app/modules/order/order.module */ "./src/app/modules/order/order.module.ts")).then(m => m.OrderModule)
    },
    {
        path: 'home/home/order/:id',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! src/app/modules/order/order.module */ "./src/app/modules/order/order.module.ts")).then(m => m.OrderModule)
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-modules-auth-auth-module */ "src-app-modules-auth-auth-module").then(__webpack_require__.bind(null, /*! src/app/modules/auth/auth.module */ "./src/app/modules/auth/auth.module.ts")).then(m => m.AuthModule)
    },
    {
        path: 'admin',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! src/app/modules/admin/admin.module */ "./src/app/modules/admin/admin.module.ts")).then(m => m.AdminModule)
    },
    {
        path: 'showProduct',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! src/app/modules/showProduct/show-modules.module */ "./src/app/modules/showProduct/show-modules.module.ts")).then(m => m.ShowModulesModule)
    },
    {
        path: 'showProduct/:category/:type',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! src/app/modules/showProduct/show-modules.module */ "./src/app/modules/showProduct/show-modules.module.ts")).then(m => m.ShowModulesModule)
    },
    {
        path: 'cart',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! src/app/modules/cart/cart.module */ "./src/app/modules/cart/cart.module.ts")).then(m => m.CartModule)
    },
    {
        path: 'showProduct/:category/:type/order/:id',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! src/app/modules/order/order.module */ "./src/app/modules/order/order.module.ts")).then(m => m.OrderModule)
    },
    {
        path: 'cart/order/:id/:quantity',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! src/app/modules/order/order.module */ "./src/app/modules/order/order.module.ts")).then(m => m.OrderModule)
    },
    {
        path: 'history',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! src/app/modules/history/history.module */ "./src/app/modules/history/history.module.ts")).then(m => m.HistoryModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _modules_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/main/main.component */ "./src/app/modules/main/main.component.ts");




class AppComponent {
    constructor() {
        this.title = 'Phone Cover';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"], _modules_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/main/main.component */ "./src/app/modules/main/main.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _nebular_nebular_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nebular/nebular.module */ "./src/app/nebular/nebular.module.ts");
/* harmony import */ var _modules_admin_admin_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/admin/admin.module */ "./src/app/modules/admin/admin.module.ts");
/* harmony import */ var _modules_showProduct_show_modules_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/showProduct/show-modules.module */ "./src/app/modules/showProduct/show-modules.module.ts");
/* harmony import */ var _modules_cart_cart_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/cart/cart.module */ "./src/app/modules/cart/cart.module.ts");
/* harmony import */ var _modules_order_order_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/order/order.module */ "./src/app/modules/order/order.module.ts");
/* harmony import */ var _modules_history_history_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/history/history.module */ "./src/app/modules/history/history.module.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/__ivy_ngcc__/fesm2015/index.js");

























firebase__WEBPACK_IMPORTED_MODULE_9__["initializeApp"](_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebase);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_12__["CoreModule"],
            _nebular_nebular_module__WEBPACK_IMPORTED_MODULE_14__["NebularModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _modules_admin_admin_module__WEBPACK_IMPORTED_MODULE_15__["AdminModule"],
            _modules_showProduct_show_modules_module__WEBPACK_IMPORTED_MODULE_16__["ShowModulesModule"],
            _modules_cart_cart_module__WEBPACK_IMPORTED_MODULE_17__["CartModule"],
            _modules_order_order_module__WEBPACK_IMPORTED_MODULE_18__["OrderModule"],
            _modules_history_history_module__WEBPACK_IMPORTED_MODULE_19__["HistoryModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_20__["NbThemeModule"].forRoot({ name: 'default' }),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_20__["NbLayoutModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_21__["NbEvaIconsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _modules_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_12__["CoreModule"],
        _nebular_nebular_module__WEBPACK_IMPORTED_MODULE_14__["NebularModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        _modules_admin_admin_module__WEBPACK_IMPORTED_MODULE_15__["AdminModule"],
        _modules_showProduct_show_modules_module__WEBPACK_IMPORTED_MODULE_16__["ShowModulesModule"],
        _modules_cart_cart_module__WEBPACK_IMPORTED_MODULE_17__["CartModule"],
        _modules_order_order_module__WEBPACK_IMPORTED_MODULE_18__["OrderModule"],
        _modules_history_history_module__WEBPACK_IMPORTED_MODULE_19__["HistoryModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_20__["NbThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_20__["NbLayoutModule"],
        _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_21__["NbEvaIconsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _modules_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebase),
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_12__["CoreModule"],
                    _nebular_nebular_module__WEBPACK_IMPORTED_MODULE_14__["NebularModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                    _modules_admin_admin_module__WEBPACK_IMPORTED_MODULE_15__["AdminModule"],
                    _modules_showProduct_show_modules_module__WEBPACK_IMPORTED_MODULE_16__["ShowModulesModule"],
                    _modules_cart_cart_module__WEBPACK_IMPORTED_MODULE_17__["CartModule"],
                    _modules_order_order_module__WEBPACK_IMPORTED_MODULE_18__["OrderModule"],
                    _modules_history_history_module__WEBPACK_IMPORTED_MODULE_19__["HistoryModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_20__["NbThemeModule"].forRoot({ name: 'default' }),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_20__["NbLayoutModule"],
                    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_21__["NbEvaIconsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_user_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user.resolver */ "./src/app/core/services/user.resolver.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/user.service */ "./src/app/core/services/user.service.ts");







class CoreModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12)); }, providers: [_services_user_resolver__WEBPACK_IMPORTED_MODULE_3__["UserResolver"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
                ],
                providers: [_services_user_resolver__WEBPACK_IMPORTED_MODULE_3__["UserResolver"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]],
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/guard/auth.guard.ts":
/*!******************************************!*\
  !*** ./src/app/core/guard/auth.guard.ts ***!
  \******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/core/services/user.service.ts");





class AuthGuard {
    constructor(AuthService, router, UserService) {
        this.AuthService = AuthService;
        this.router = router;
        this.UserService = UserService;
    }
    canActivate(next, state) {
        return new Promise((resolve, reject) => {
            this.UserService.getCurrentUser().then(user => {
                if (user) {
                    return resolve(true);
                }
                else {
                    this.router.navigate(['']);
                    return resolve(false);
                }
            });
        });
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/models/user.ts":
/*!*************************************!*\
  !*** ./src/app/core/models/user.ts ***!
  \*************************************/
/*! exports provided: User, UserWithRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserWithRole", function() { return UserWithRole; });
class User {
    constructor() {
        this.image = "";
        this.name = "";
        this.provider = "";
    }
}
class UserWithRole {
}


/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");





class AuthService {
    constructor(fbAuth) {
        this.fbAuth = fbAuth;
    }
    facebookLogin() {
        return new Promise((resolve, reject) => {
            let provider = new firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].FacebookAuthProvider();
            this.fbAuth.signInWithPopup(provider)
                .then(res => {
                resolve(res);
            }, err => {
                console.log(err);
                reject(err);
            });
        });
    }
    googleLogin() {
        return new Promise((resolve, reject) => {
            let provider = new firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            this.fbAuth.signInWithPopup(provider).then(data => {
                resolve(data);
            }, err => {
                reject(err);
            });
        });
    }
    register(value) {
        return new Promise((resolve, reject) => {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().createUserWithEmailAndPassword(value.email, value.password)
                .then(res => {
                return res.user.updateProfile({
                    displayName: value.displayName,
                }).then(res => {
                    this.SendVerificationMail(value.email);
                    resolve(res);
                });
            }, err => reject(err));
        });
    }
    SendVerificationMail(email) {
        let actionCodeSettings = {
            // URL you want to redirect back to. The domain (www.example.com) for this
            // URL must be whitelisted in the Firebase Console.
            url: 'https://www.edenik.com/firebase/user',
            handleCodeInApp: true
        };
        return this.fbAuth.sendSignInLinkToEmail(email, actionCodeSettings)
            .then(() => {
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    login(value) {
        return new Promise((resolve, reject) => {
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithEmailAndPassword(value.email, value.password)
                .then(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    logout() {
        return new Promise((resolve, reject) => {
            if (firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser) {
                this.fbAuth.signOut();
                resolve(true);
            }
            else {
                reject('user not found');
            }
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/categoriesapi.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/categoriesapi.service.ts ***!
  \********************************************************/
/*! exports provided: CategoriesapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesapiService", function() { return CategoriesapiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class CategoriesapiService {
    constructor(http) {
        this.http = http;
    }
    getById(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].categoryApi}/${id}`);
    }
    getAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].categoryApi);
    }
    addCategory(category) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].categoryApi, category);
    }
    editCategory(newParams, id) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].categoryApi}${id}`, newParams);
    }
    deleteCategory(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].categoryApi}` + id);
    }
}
CategoriesapiService.ɵfac = function CategoriesapiService_Factory(t) { return new (t || CategoriesapiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CategoriesapiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoriesapiService, factory: CategoriesapiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesapiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/editvalues.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/services/editvalues.service.ts ***!
  \*****************************************************/
/*! exports provided: EditvaluesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditvaluesService", function() { return EditvaluesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EditvaluesService {
    constructor() {
        this.productValues = [];
        this.ordersValues = [];
    }
    passValues1(id, name, email, phone, city, address, shipping, price, shippingStatus, remark, date) {
        this.ordersValues = [];
        this.ordersValues.push({ id: id, name: name, email: email, phone: phone, city: city, address: address, shipping: shipping, price: price, shippingStatus: shippingStatus, remark: remark, date: date });
    }
    passValues(id, name, description, category, type, price, photoUrl) {
        this.productValues = [];
        this.productValues.push({ id: id, name: name, description: description, category: category, type: type, price: price, photoUrl: photoUrl });
    }
}
EditvaluesService.ɵfac = function EditvaluesService_Factory(t) { return new (t || EditvaluesService)(); };
EditvaluesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EditvaluesService, factory: EditvaluesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditvaluesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/services/local.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/local.service.ts ***!
  \************************************************/
/*! exports provided: LocalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalService", function() { return LocalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LocalService {
    constructor() { }
    saveObjToStorage(obj) {
        localStorage.setItem('coverPhoneProjectThemeDark', JSON.stringify(obj));
    }
    saveCoverToStorage(obj1) {
        localStorage.setItem('coverPhoneProjectCoverToCart', JSON.stringify(obj1));
    }
    saveHistoryToStorage(obj2) {
        localStorage.setItem('coverPhoneProjectToHistory', JSON.stringify(obj2));
    }
    getObjFromStorage() {
        return JSON.parse(localStorage.getItem('coverPhoneProjectThemeDark'));
    }
    getCoverFromStorage() {
        return JSON.parse(localStorage.getItem('coverPhoneProjectCoverToCart'));
    }
    getHistoryFromStorage() {
        return JSON.parse(localStorage.getItem('coverPhoneProjectToHistory'));
    }
    removeObjFromStorage() {
        localStorage.removeItem('coverPhoneProjectThemeDark');
    }
    removeCoverFromStorage() {
        localStorage.removeItem('coverPhoneProjectCoverToCart');
    }
    removeHistoryFromStorage() {
        localStorage.removeItem('coverPhoneProjectToHistory');
    }
}
LocalService.ɵfac = function LocalService_Factory(t) { return new (t || LocalService)(); };
LocalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalService, factory: LocalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/services/newsapi.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/newsapi.service.ts ***!
  \**************************************************/
/*! exports provided: NewsapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsapiService", function() { return NewsapiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class NewsapiService {
    constructor(http) {
        this.http = http;
    }
    getById(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].newsApi}/${id}`);
    }
    getAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].newsApi);
    }
    addNews(News) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].newsApi, News);
    }
    editNews(newParams, id) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].newsApi}${id}`, newParams);
    }
    deleteNews(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].newsApi}` + id);
    }
}
NewsapiService.ɵfac = function NewsapiService_Factory(t) { return new (t || NewsapiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
NewsapiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NewsapiService, factory: NewsapiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsapiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/orderapi.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/orderapi.service.ts ***!
  \***************************************************/
/*! exports provided: OrderapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderapiService", function() { return OrderapiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class OrderapiService {
    constructor(http) {
        this.http = http;
    }
    getById(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].orderApi}/${id}`);
    }
    getAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].orderApi);
    }
    addOrder(Order) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].orderApi, Order);
    }
    editOrder(newParams, id) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].orderApi}${id}`, newParams);
    }
    deleteOrder(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].orderApi}` + id);
    }
}
OrderapiService.ɵfac = function OrderapiService_Factory(t) { return new (t || OrderapiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
OrderapiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderapiService, factory: OrderapiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderapiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/orderitem.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/orderitem.service.ts ***!
  \****************************************************/
/*! exports provided: OrderitemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderitemService", function() { return OrderitemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class OrderitemService {
    constructor(http) {
        this.http = http;
    }
    getById(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].OrderItemApi}/${id}`);
    }
    getAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].OrderItemApi);
    }
    getAllOrderItemsByOrderId(orderId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].OrderItemApi + '?orderId=' + orderId);
    }
    addOrderItem(OrderItem) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].OrderItemApi, OrderItem);
    }
    addOrderItems(OrderItem) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].OrderItemApi, OrderItem).toPromise();
    }
    editOrderItem(newParams, id) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].OrderItemApi}${id}`, newParams);
    }
    deleteOrderItem(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].OrderItemApi}` + id);
    }
    deleteOrderItems(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].OrderItemApi}` + id).toPromise();
    }
}
OrderitemService.ɵfac = function OrderitemService_Factory(t) { return new (t || OrderitemService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
OrderitemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderitemService, factory: OrderitemService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderitemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/productapi.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/services/productapi.service.ts ***!
  \*****************************************************/
/*! exports provided: ProductapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductapiService", function() { return ProductapiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ProductapiService {
    constructor(http) {
        this.http = http;
    }
    getById(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].productsApi}/${id}`);
    }
    getAll() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].productsApi);
    }
    addProduct(Product) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].productsApi, Product);
    }
    editProduct(newParams, id) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].productsApi}${id}`, newParams);
    }
    deleteProduct(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].productsApi}` + id);
    }
}
ProductapiService.ɵfac = function ProductapiService_Factory(t) { return new (t || ProductapiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProductapiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductapiService, factory: ProductapiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductapiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/user.resolver.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/user.resolver.ts ***!
  \************************************************/
/*! exports provided: UserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolver", function() { return UserResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user */ "./src/app/core/models/user.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class UserResolver {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    resolve(route) {
        let user = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        return new Promise((resolve, reject) => {
            this.userService.getCurrentUser()
                .then(res => {
                if (res == null) {
                    this.router.navigate(['/auth/login']);
                    return reject();
                }
                else if (res.providerData[0].providerId == 'password') {
                    console.error(res);
                    if (res.providerData[0].photoURL != null) {
                        user.image = res.providerData[0].photoURL;
                    }
                    else {
                        user.image = 'https://via.placeholder.com/400x300';
                    }
                    user.name = res.displayName;
                    user.provider = res.providerData[0].providerId;
                    return resolve(user);
                }
                else {
                    user.image = res.photoURL;
                    user.name = res.displayName;
                    user.provider = res.providerData[0].providerId;
                    return resolve(user);
                }
            }, err => {
                this.router.navigate(['/login']);
                return reject(err);
            });
        });
    }
}
UserResolver.ɵfac = function UserResolver_Factory(t) { return new (t || UserResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
UserResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserResolver, factory: UserResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class UserService {
    constructor(db, fbAuth, afs, router) {
        this.db = db;
        this.fbAuth = fbAuth;
        this.afs = afs;
        this.router = router;
    }
    checkIfUserHasRole(user) {
        this.getUser(user.uid).then(res => {
            if (res) {
                if (res.role === "admin" || res.role === "manager") {
                    this.router.navigate(['admin/mainAdmin']);
                }
                else {
                    this.router.navigate(['admin/noPremission']);
                }
            }
            else {
                let newUser = { uid: user.uid, role: "user", displayName: user.displayName, provider: user.providerData[0].providerId };
                this.afs.doc(`users/${user.uid}`).set(newUser, { merge: true }).then(res => {
                    this.router.navigate(['admin/noPremission']);
                });
            }
        });
    }
    enterToManagerZone(user) {
        this.getUser(user.uid).then(res => {
            if (res) {
                if (res.role === "manager") {
                    this.router.navigate(['admin/manager']);
                }
                else {
                    this.router.navigate(['admin/mainAdmin']);
                }
            }
        });
    }
    getUser(uid) {
        return new Promise((resolve, reject) => {
            this.afs.collection('users').doc(uid).valueChanges().subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            });
        });
    }
    getCurrentUser() {
        return new Promise((resolve, reject) => {
            const user = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged((user) => {
                user ? resolve(user) : resolve(null);
            });
        });
    }
    resetPassword(email) {
        return new Promise((resolve, reject) => {
            let auth = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]();
            auth.sendPasswordResetEmail(email).then(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    updateCurrentUser(value) {
        return new Promise((resolve, reject) => {
            var user = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser;
            console.error(value);
            user.updateProfile({
                displayName: value.name,
                photoURL: value.photoURL
            }).then(res => {
                resolve(res);
                console.error(res);
            }, err => reject(err));
        });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuthModule"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuthModule"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/admin/addProduct/addproduct.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/admin/addProduct/addproduct.component.ts ***!
  \******************************************************************/
/*! exports provided: AddproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddproductComponent", function() { return AddproductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_productapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/productapi.service */ "./src/app/core/services/productapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_categoriesapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/categoriesapi.service */ "./src/app/core/services/categoriesapi.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function AddproductComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddproductComponent_nb_option_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddproductComponent_nb_option_10_Template_nb_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.checkTypes(_r9.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", c_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r8);
} }
function AddproductComponent_nb_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", t_r12.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r12.type);
} }
function AddproductComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Price is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddproductComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.onlyImage);
} }
function AddproductComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " URL photo is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/mainAdmin"]; };
class AddproductComponent {
    constructor(formBuilder, productService, router, categoryApi) {
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.router = router;
        this.categoryApi = categoryApi;
        this.products = [];
        this.categories = [];
        this.onlyCategory = [];
    }
    checkImage(img, f) {
        var str = img;
        var res = str.substring(0, 8);
        res == "https://" ? this.add(f) : this.onlyImage = "Only image link";
    }
    add(f) {
        this.product = {
            name: f.form.value.name,
            description: f.form.value.description,
            category: f.form.value.category,
            type: f.form.value.type,
            price: f.form.value.price,
            photoUrl: f.form.value.photoUrl
        };
        this.productService.addProduct(this.product).subscribe(ele => {
            this.router.navigate(['mainAdmin']);
        });
    }
    getCategories() {
        this.categoryApi.getAll().subscribe(ele => {
            ele.forEach(element => {
                this.onlyCategory.push(element.category);
                this.onlyCategory = this.onlyCategory.filter((el, i, a) => i === a.indexOf(el));
            });
        });
    }
    checkTypes(category) {
        this.categories = [];
        this.categoryApi.getAll().subscribe(ele => {
            ele.forEach(element => {
                this.categories.push(element);
                this.categories = this.categories.filter(ele => ele.category == category);
            });
        });
    }
    ngOnInit() {
        this.addProductForms = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [''],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            photoUrl: ['']
        });
        this.productService.getAll().subscribe(ele => {
            this.products = ele;
            this.getCategories();
        });
    }
}
AddproductComponent.ɵfac = function AddproductComponent_Factory(t) { return new (t || AddproductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_productapi_service__WEBPACK_IMPORTED_MODULE_2__["ProductapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_categoriesapi_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesapiService"])); };
AddproductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddproductComponent, selectors: [["app-addproduct"]], decls: 25, vars: 10, consts: [["id", "add"], [3, "formGroup"], ["f", "ngForm"], ["type", "text", "formControlName", "name", "nbInput", "", "placeholder", "Name*", "required", "", "maxlength", "20"], ["class", "errorText", 4, "ngIf"], ["formControlName", "category", "placeholder", "Category*", "required", ""], [3, "value", "click", 4, "ngFor", "ngForOf"], ["formControlName", "type", "placeholder", "type*", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "formControlName", "price", "nbInput", "", "placeholder", "Price*", "required", ""], ["nbInput", "", "formControlName", "description", "placeholder", "Description(0-100)", "maxlength", "100", 2, "margin-top", "30px"], ["type", "text", "formControlName", "photoUrl", "nbInput", "", "placeholder", "URL photo*", "required", ""], ["img", ""], ["nbButton", "", "status", "success", 2, "margin-top", "10px", "margin-right", "10px", 3, "disabled", "click"], [1, "fas", "fa-plus"], ["nbButton", "", 2, "margin-top", "10px", 3, "routerLink"], [1, "errorText"], [3, "value", "click"], ["category", ""], [3, "value"]], template: function AddproductComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddproductComponent_p_8_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddproductComponent_nb_option_10_Template, 3, 2, "nb-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddproductComponent_nb_option_12_Template, 2, 2, "nb-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddproductComponent_p_14_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddproductComponent_p_18_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddproductComponent_p_19_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddproductComponent_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.checkImage(_r5.value, _r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Add product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addProductForms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.addProductForms.controls.name.valid && ctx.addProductForms.controls.name.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.onlyCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.addProductForms.controls.price.valid && ctx.addProductForms.controls.price.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.onlyImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.addProductForms.controls.photoUrl.valid && ctx.addProductForms.controls.photoUrl.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutColumnComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbOptionComponent"]], styles: ["#add[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ninput[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 30px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nnb-select[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.errorText[_ngcontent-%COMP%] {\n  margin-top: -22px;\n  margin-left: 92px;\n  font-size: 13px;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hZGRQcm9kdWN0L0M6XFxVc2Vyc1xcZGFuaWVcXERlc2t0b3BcXEZ1bGwgU3RhY2tcXFBob25lIENvdmVyXFxjbGllbnRcXFBob25lQ292ZXIvc3JjXFxhcHBcXG1vZHVsZXNcXGFkbWluXFxhZGRQcm9kdWN0XFxhZGRwcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL2FkZFByb2R1Y3QvYWRkcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FER0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtBQ0FKOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL2FkZFByb2R1Y3QvYWRkcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhZGR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiBcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxubmItc2VsZWN0e1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgXHJcbn1cclxuXHJcbi5lcnJvclRleHR7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA5MnB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6IHJlZDtcclxufSIsIiNhZGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbm5iLXNlbGVjdCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5lcnJvclRleHQge1xuICBtYXJnaW4tdG9wOiAtMjJweDtcbiAgbWFyZ2luLWxlZnQ6IDkycHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddproductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-addproduct',
                templateUrl: './addproduct.component.html',
                styleUrls: ['./addproduct.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_core_services_productapi_service__WEBPACK_IMPORTED_MODULE_2__["ProductapiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_core_services_categoriesapi_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesapiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/admin/admin-routing-module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/admin/admin-routing-module.ts ***!
  \*******************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component */ "./src/app/modules/admin/admin.component.ts");
/* harmony import */ var src_app_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guard/auth.guard */ "./src/app/core/guard/auth.guard.ts");
/* harmony import */ var _addProduct_addproduct_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addProduct/addproduct.component */ "./src/app/modules/admin/addProduct/addproduct.component.ts");
/* harmony import */ var _editProducr_editproduct_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editProducr/editproduct.component */ "./src/app/modules/admin/editProducr/editproduct.component.ts");
/* harmony import */ var _mainadmin_mainadmin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mainadmin/mainadmin.component */ "./src/app/modules/admin/mainadmin/mainadmin.component.ts");
/* harmony import */ var _adminorder_adminorder_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adminorder/adminorder.component */ "./src/app/modules/admin/adminorder/adminorder.component.ts");
/* harmony import */ var _adminorder_editorder_editorder_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./adminorder/editorder/editorder.component */ "./src/app/modules/admin/adminorder/editorder/editorder.component.ts");
/* harmony import */ var _no_premissions_no_premissions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./no-premissions/no-premissions.component */ "./src/app/modules/admin/no-premissions/no-premissions.component.ts");
/* harmony import */ var _manager_zone_manager_manager_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./manager-zone/manager/manager.component */ "./src/app/modules/admin/manager-zone/manager/manager.component.ts");













const routes = [
    { path: '', component: _admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"], pathMatch: 'full', canActivate: [src_app_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'admin', component: _admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"], pathMatch: 'full', canActivate: [src_app_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'productEdit', component: _editProducr_editproduct_component__WEBPACK_IMPORTED_MODULE_5__["EditproductComponent"], pathMatch: 'full', canActivate: [src_app_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'add', component: _addProduct_addproduct_component__WEBPACK_IMPORTED_MODULE_4__["AddproductComponent"], pathMatch: 'full', canActivate: [src_app_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'editOrder', component: _adminorder_editorder_editorder_component__WEBPACK_IMPORTED_MODULE_8__["EditorderComponent"], pathMatch: 'full', canActivate: [src_app_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'mainAdmin', component: _mainadmin_mainadmin_component__WEBPACK_IMPORTED_MODULE_6__["MainadminComponent"], pathMatch: 'full', canActivate: [src_app_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'mainOrder', component: _adminorder_adminorder_component__WEBPACK_IMPORTED_MODULE_7__["AdminorderComponent"], pathMatch: 'full', canActivate: [src_app_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'manager', component: _manager_zone_manager_manager_component__WEBPACK_IMPORTED_MODULE_10__["ManagerComponent"], pathMatch: 'full', canActivate: [src_app_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'noPremission', component: _no_premissions_no_premissions_component__WEBPACK_IMPORTED_MODULE_9__["NoPremissionsComponent"], pathMatch: 'full' }
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/admin/admin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/admin/admin.component.ts ***!
  \**************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_core_services_productapi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/productapi.service */ "./src/app/core/services/productapi.service.ts");
/* harmony import */ var src_app_core_services_editvalues_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/editvalues.service */ "./src/app/core/services/editvalues.service.ts");
/* harmony import */ var src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/local.service */ "./src/app/core/services/local.service.ts");
/* harmony import */ var src_app_core_services_categoriesapi_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/categoriesapi.service */ "./src/app/core/services/categoriesapi.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");













function AdminComponent_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Category is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminComponent_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Type is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_tr_38_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const c_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.deleteCategory(c_r11.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r11.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r11.type);
} }
function AdminComponent_nb_option_63_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_nb_option_63_Template_nb_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const c_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.categoryFilter(c_r14.category); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", c_r14.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r14.category);
} }
function AdminComponent_nb_option_69_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_nb_option_69_Template_nb_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const t_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.TypeFilter(t_r17.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", t_r17.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", t_r17.type, " ");
} }
function AdminComponent_tbody_91_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_tbody_91_tr_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const product_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.openEdit(product_r21.id, product_r21.name, product_r21.description, product_r21.category, product_r21.type, product_r21.price, product_r21.photoUrl); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_tbody_91_tr_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const product_r21 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.delete(product_r21.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r21.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r21.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r21.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r21.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r21.price, ".00$");
} }
function AdminComponent_tbody_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminComponent_tbody_91_tr_1_Template, 17, 5, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.products);
} }
function AdminComponent_tbody_92_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_tbody_92_tr_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const product_r26 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.openEdit(product_r26.id, product_r26.name, product_r26.description, product_r26.category, product_r26.type, product_r26.price, product_r26.photoUrl); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_tbody_92_tr_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const product_r26 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.delete(product_r26.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r26.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r26.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r26.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r26.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r26.price, ".00$");
} }
function AdminComponent_tbody_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminComponent_tbody_92_tr_1_Template, 17, 5, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.searchProducts);
} }
const _c0 = function () { return ["/add"]; };
const _c1 = function (a0) { return { "dialogThemeClass": a0 }; };
class AdminComponent {
    constructor(userService, authService, route, location, fb, productApi, editService, router, local, categoryApi) {
        this.userService = userService;
        this.authService = authService;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.productApi = productApi;
        this.editService = editService;
        this.router = router;
        this.local = local;
        this.categoryApi = categoryApi;
        this.all = [];
        this.products = [];
        this.searchProducts = [];
        this.showsearch = false;
        this.categories = [];
        this.types = [];
        this.allTypes = [];
        this.sortedTypes = [];
    }
    openEdit(id, name, description, type, category, price, photoUrl) {
        this.editService.passValues(id, name, description, type, category, price, photoUrl);
        this.router.navigate(['productEdit']);
    }
    delete(id) {
        this.productApi.deleteProduct(id).subscribe(ele => {
            this.products = this.products.filter(ele => ele.id != id);
            this.searchProducts = this.products.filter(ele => ele.id != id);
        });
    }
    searchProduct(name) {
        this.searchProducts = [];
        if (name == "") {
            this.showsearch = false;
            this.searchProducts = [];
        }
        else {
            this.showsearch = true;
            let filter = name.toUpperCase();
            for (let i = 0; i < this.products.length; i++) {
                let temp = this.products[i].name;
                if (temp.toUpperCase().indexOf(filter) > -1) {
                    this.searchProducts.push(this.products[i]);
                }
            }
        }
    }
    sortById() {
        this.products.sort(function (a, b) {
            return (a.id - b.id);
        }).sort(function (a, b) {
            return (a.id - b.id);
        });
        this.searchProducts.sort(function (a, b) {
            return (a.id - b.id);
        }).sort(function (a, b) {
            return (a.id - b.id);
        });
    }
    sortByName() {
        this.products.forEach(element => {
            element.name = element.name.replace(/\s+/g, '');
        });
        this.products.sort((a, b) => a.name.localeCompare(b.name));
        this.searchProducts.forEach(element => {
            element.name = element.name.replace(/\s+/g, '');
        });
        this.searchProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    sortByCategory() {
        this.products.forEach(element => {
            element.category = element.category.replace(/\s+/g, '');
        });
        this.searchProducts.forEach(element => {
            element.category = element.category.replace(/\s+/g, '');
        });
        this.products.sort((a, b) => a.category.localeCompare(b.category));
        this.searchProducts.sort((a, b) => a.category.localeCompare(b.category));
    }
    sortByType() {
        this.products.sort((a, b) => a.type.localeCompare(b.type));
        this.searchProducts.sort((a, b) => a.type.localeCompare(b.type));
    }
    priceToHigh() {
        this.products.sort(function (a, b) {
            return (a.price - b.price);
        }).sort(function (a, b) {
            return (a.price - b.price);
        });
        this.searchProducts.sort(function (a, b) {
            return (a.price - b.price);
        }).sort(function (a, b) {
            return (a.price - b.price);
        });
    }
    priceToLow() {
        this.products.sort(function (a, b) {
            return (b.price - a.price);
        }).sort(function (a, b) {
            return (b.price - a.price);
        });
        this.searchProducts.sort(function (a, b) {
            return (b.price - a.price);
        }).sort(function (a, b) {
            return (b.price - a.price);
        });
    }
    showAll() {
        this.products = this.all;
    }
    categoryFilter(c) {
        this.showAll();
        this.products = this.products.filter(i => c.includes(i.category));
        this.sortedTypes = this.types.filter(type => type.category == c);
    }
    TypeFilter(t) {
        console.log(t);
        this.showAll();
        this.products = this.products.filter(i => t.includes(i.type));
    }
    reduiceCategory() {
        this.categories = this.products.reduce((acc, current) => {
            const x = acc.find(item => item.category === current.category);
            if (!x) {
                return acc.concat([current]);
            }
            else {
                return acc;
            }
        }, []);
    }
    reduiceType() {
        this.types = this.products.reduce((acc, current) => {
            const x = acc.find(item => item.type === current.type);
            if (!x) {
                return acc.concat([current]);
            }
            else {
                return acc;
            }
        }, []);
        this.allTypes = this.products.reduce((acc, current) => {
            const x = acc.find(item => item.type === current.type);
            if (!x) {
                return acc.concat([current]);
            }
            else {
                return acc;
            }
        }, []);
    }
    checkDialogTheme() {
        if (this.local.dialogTheme == true) {
            this.dialogTheme2 = true;
        }
        else {
            this.dialogTheme2 = false;
        }
    }
    addCategory1(f) {
        this.category = {
            category: f.form.value.category,
            type: f.form.value.type
        };
        this.categoryApi.addCategory(this.category).subscribe(ele => {
            this.categoryApi.getAll().subscribe(ele => {
                ele.forEach(element => {
                    this.categories.push(element);
                });
            });
        });
    }
    getCategories() {
        this.categoryApi.getAll().subscribe(ele => {
            ele.forEach(element => {
                this.categories.push(element);
                this.allTypes.push(element);
            });
            this.reduiceCategory();
        });
    }
    deleteCategory(id) {
        this.categoryApi.deleteCategory(id).subscribe((ele) => {
            this.categories = this.categories.filter(ele => ele.id != id);
        });
    }
    ngOnInit() {
        this.categoryForms = this.fb.group({
            category: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.productApi.getAll().subscribe(ele => {
            this.products = ele;
            this.all = ele;
            this.sortById();
            this.reduiceType();
            this.getCategories();
        });
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_productapi_service__WEBPACK_IMPORTED_MODULE_6__["ProductapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_editvalues_service__WEBPACK_IMPORTED_MODULE_7__["EditvaluesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_8__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_categoriesapi_service__WEBPACK_IMPORTED_MODULE_9__["CategoriesapiService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 93, vars: 20, consts: [["id", "adminPage", 2, "text-align", "left"], ["nbButton", "", "status", "success", 2, "display", "inline-block", "margin-bottom", "5px", 3, "routerLink"], [1, "fas", "fa-plus"], ["type", "button", "data-toggle", "modal", "data-target", "#adminCategoriesModel", 1, "btn", "btn-primary", 2, "height", "40px", "margin-bottom", "5px", "margin-left", "5px", 3, "click"], [1, "fas", "fa-list"], ["id", "adminCategoriesModel", "tabindex", "-1", "aria-labelledby", "adminCategoriesModelLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", 3, "ngClass"], ["id", "adminCategoriesModelLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", 3, "ngClass"], ["id", "Cform"], [3, "formGroup"], ["f", "ngForm"], ["nbInput", "", "type", "text", "placeholder", "Category", "formControlName", "category"], ["class", "errorText", 4, "ngIf"], ["nbInput", "", "type", "text", "placeholder", "Type", "formControlName", "type"], ["id", "tableDiv"], ["id", "tableDive", 1, "table", "table-striped", "table-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "modal-footer", 3, "ngClass"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["id", "tableSort"], ["placeholder", "Sort By"], ["value", "id", 3, "click"], ["value", "name", 3, "click"], ["value", "category", 3, "click"], ["value", "type", 3, "click"], ["value", "priceToHigh", 3, "click"], ["value", "priceToLow", 3, "click"], ["id", "tableFilter"], ["placeholder", "Categories"], ["filterSelect", ""], ["value", "showAll", 3, "click"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["id", "typeFilter"], ["placeholder", "Type"], ["id", "serchInput"], ["type", "search", "nbInput", "", "placeholder", "Search by name", 3, "keyup"], ["searchbyname", ""], [1, "fas", "fa-search", 2, "margin-left", "5px"], [1, "table", "table-dark"], [4, "ngIf"], [1, "errorText"], ["scope", "row"], ["nbButton", "", "shape", "round", "size", "small", "status", "danger", 3, "click"], [3, "value", "click"], ["nbButton", "", "shape", "round", "size", "small", "status", "primary", 3, "click"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_4_listener() { return ctx.checkDialogTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Add Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AdminComponent_p_23_Template, 2, 0, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AdminComponent_p_25_Template, 2, 0, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AdminComponent_tr_38_Template, 10, 3, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21); return ctx.addCategory1(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Add Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "nb-select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "nb-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_nb_option_click_46_listener() { return ctx.sortById(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "By id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "nb-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_nb_option_click_48_listener() { return ctx.sortByName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "By name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "nb-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_nb_option_click_50_listener() { return ctx.sortByCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "By category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "nb-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_nb_option_click_52_listener() { return ctx.sortByType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "By type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "nb-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_nb_option_click_54_listener() { return ctx.priceToHigh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "By price low to high");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "nb-option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_nb_option_click_56_listener() { return ctx.priceToLow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "By price high to Low");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "nb-select", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "nb-option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_nb_option_click_61_listener() { return ctx.showAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Show all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, AdminComponent_nb_option_63_Template, 2, 2, "nb-option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "nb-select", 40, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "nb-option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_nb_option_click_67_listener() { return ctx.showAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Show all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, AdminComponent_nb_option_69_Template, 2, 2, "nb-option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AdminComponent_Template_input_keyup_71_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](72); return ctx.searchProduct(_r8.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "table", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, AdminComponent_tbody_91_Template, 2, 1, "tbody", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, AdminComponent_tbody_92_Template, 2, 1, "tbody", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, ctx.dialogTheme2 == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, ctx.dialogTheme2 == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.categoryForms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.categoryForms.controls.category.valid && ctx.categoryForms.controls.category.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.categoryForms.controls.type.valid && ctx.categoryForms.controls.type.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, ctx.dialogTheme2 == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sortedTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showsearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showsearch);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbOptionComponent"]], styles: ["#tableSort[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  display: inline-block;\n}\n\n#tableFilter[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  display: inline-block;\n}\n\n#typeFilter[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  display: inline-block;\n}\n\n#serchInput[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  display: inline-block;\n}\n\n#tableDiv[_ngcontent-%COMP%] {\n  max-height: 500px;\n  overflow: auto;\n}\n\n#tableDiv[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #454d55;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\n.dialogThemeClass[_ngcontent-%COMP%] {\n  background-color: #0f121e;\n  color: lightgray;\n}\n\n#Cform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 4px;\n}\n\n.errorText[_ngcontent-%COMP%] {\n  margin-top: -22px;\n  margin-left: 92px;\n  font-size: 13px;\n  color: red;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL3NyY1xcYXBwXFxtb2R1bGVzXFxhZG1pblxcYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNBLFdBQUE7QUNBQTs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREdBO0VBQ0ksV0FBQTtBQ0FKOztBREdFLFVBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQ0FKOztBREdFLFdBQUE7O0FBQ0E7RUFDRSxnQkFBQTtBQ0FKOztBREdFLG9CQUFBOztBQUNBO0VBQ0UsZ0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI3RhYmxlU29ydHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuI3RhYmxlRmlsdGVye1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4jdHlwZUZpbHRlcntcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuI3NlcmNoSW5wdXR7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4jdGFibGVEaXZ7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4jdGFibGVEaXYgdGhlYWQgdGgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICAjNDU0ZDU1O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4uZGlhbG9nVGhlbWVDbGFzc3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxMjFlO1xyXG4gIGNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbiNDZm9ybSBpbnB1dHtcclxubWFyZ2luOjRweDtcclxufVxyXG5cclxuLmVycm9yVGV4dHtcclxuICBtYXJnaW4tdG9wOiAtMjJweDtcclxuICBtYXJnaW4tbGVmdDogOTJweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogVHJhY2sgKi9cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7IFxyXG4gIH1cclxuICAgXHJcbiAgLyogSGFuZGxlICovXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODg4OyBcclxuICB9XHJcbiAgXHJcbiAgLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTU1OyBcclxuICB9XHJcblxyXG4iLCIjdGFibGVTb3J0IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jdGFibGVGaWx0ZXIge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiN0eXBlRmlsdGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jc2VyY2hJbnB1dCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuI3RhYmxlRGl2IHtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4jdGFibGVEaXYgdGhlYWQgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0ZDU1O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG59XG5cbi5kaWFsb2dUaGVtZUNsYXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTIxZTtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuI0Nmb3JtIGlucHV0IHtcbiAgbWFyZ2luOiA0cHg7XG59XG5cbi5lcnJvclRleHQge1xuICBtYXJnaW4tdG9wOiAtMjJweDtcbiAgbWFyZ2luLWxlZnQ6IDkycHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHJlZDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM1NTU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_core_services_productapi_service__WEBPACK_IMPORTED_MODULE_6__["ProductapiService"] }, { type: src_app_core_services_editvalues_service__WEBPACK_IMPORTED_MODULE_7__["EditvaluesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_8__["LocalService"] }, { type: src_app_core_services_categoriesapi_service__WEBPACK_IMPORTED_MODULE_9__["CategoriesapiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/admin/admin.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/admin/admin.module.ts ***!
  \***********************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component */ "./src/app/modules/admin/admin.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-routing-module */ "./src/app/modules/admin/admin-routing-module.ts");
/* harmony import */ var src_app_nebular_nebular_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/nebular/nebular.module */ "./src/app/nebular/nebular.module.ts");
/* harmony import */ var _addProduct_addproduct_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addProduct/addproduct.component */ "./src/app/modules/admin/addProduct/addproduct.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _editProducr_editproduct_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editProducr/editproduct.component */ "./src/app/modules/admin/editProducr/editproduct.component.ts");
/* harmony import */ var _mainadmin_mainadmin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mainadmin/mainadmin.component */ "./src/app/modules/admin/mainadmin/mainadmin.component.ts");
/* harmony import */ var _adminorder_adminorder_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./adminorder/adminorder.component */ "./src/app/modules/admin/adminorder/adminorder.component.ts");
/* harmony import */ var _adminorder_editorder_editorder_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./adminorder/editorder/editorder.component */ "./src/app/modules/admin/adminorder/editorder/editorder.component.ts");
/* harmony import */ var _adminNewsLetter_adminnews_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./adminNewsLetter/adminnews.component */ "./src/app/modules/admin/adminNewsLetter/adminnews.component.ts");
/* harmony import */ var _no_premissions_no_premissions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./no-premissions/no-premissions.component */ "./src/app/modules/admin/no-premissions/no-premissions.component.ts");
/* harmony import */ var _manager_zone_manager_manager_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./manager-zone/manager/manager.component */ "./src/app/modules/admin/manager-zone/manager/manager.component.ts");















class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, providers: [_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"], src_app_nebular_nebular_module__WEBPACK_IMPORTED_MODULE_4__["NebularModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"], _addProduct_addproduct_component__WEBPACK_IMPORTED_MODULE_5__["AddproductComponent"], _editProducr_editproduct_component__WEBPACK_IMPORTED_MODULE_7__["EditproductComponent"], _mainadmin_mainadmin_component__WEBPACK_IMPORTED_MODULE_8__["MainadminComponent"], _adminorder_adminorder_component__WEBPACK_IMPORTED_MODULE_9__["AdminorderComponent"], _adminorder_editorder_editorder_component__WEBPACK_IMPORTED_MODULE_10__["EditorderComponent"], _adminNewsLetter_adminnews_component__WEBPACK_IMPORTED_MODULE_11__["AdminnewsComponent"], _no_premissions_no_premissions_component__WEBPACK_IMPORTED_MODULE_12__["NoPremissionsComponent"], _manager_zone_manager_manager_component__WEBPACK_IMPORTED_MODULE_13__["ManagerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"], src_app_nebular_nebular_module__WEBPACK_IMPORTED_MODULE_4__["NebularModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"], _addProduct_addproduct_component__WEBPACK_IMPORTED_MODULE_5__["AddproductComponent"], _editProducr_editproduct_component__WEBPACK_IMPORTED_MODULE_7__["EditproductComponent"], _mainadmin_mainadmin_component__WEBPACK_IMPORTED_MODULE_8__["MainadminComponent"], _adminorder_adminorder_component__WEBPACK_IMPORTED_MODULE_9__["AdminorderComponent"], _adminorder_editorder_editorder_component__WEBPACK_IMPORTED_MODULE_10__["EditorderComponent"], _adminNewsLetter_adminnews_component__WEBPACK_IMPORTED_MODULE_11__["AdminnewsComponent"], _no_premissions_no_premissions_component__WEBPACK_IMPORTED_MODULE_12__["NoPremissionsComponent"], _manager_zone_manager_manager_component__WEBPACK_IMPORTED_MODULE_13__["ManagerComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"], src_app_nebular_nebular_module__WEBPACK_IMPORTED_MODULE_4__["NebularModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
                providers: [_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/admin/adminNewsLetter/adminnews.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/admin/adminNewsLetter/adminnews.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminnewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminnewsComponent", function() { return AdminnewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_newsapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/newsapi.service */ "./src/app/core/services/newsapi.service.ts");
/* harmony import */ var src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/local.service */ "./src/app/core/services/local.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function AdminnewsComponent_tbody_26_tr_1_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminnewsComponent_tbody_26_tr_1_p_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminnewsComponent_tbody_26_tr_1_p_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r9.editDone, " ");
} }
const _c0 = function (a0) { return { "dialogThemeClass": a0 }; };
function AdminnewsComponent_tbody_26_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminnewsComponent_tbody_26_tr_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const user_r5 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.getValues(user_r5.name, user_r5.email); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " EDIT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Edit User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AdminnewsComponent_tbody_26_tr_1_p_25_Template, 2, 0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AdminnewsComponent_tbody_26_tr_1_p_27_Template, 2, 0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AdminnewsComponent_tbody_26_tr_1_p_29_Template, 3, 1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminnewsComponent_tbody_26_tr_1_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const user_r5 = ctx.$implicit; const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.editUser(_r6, user_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Save changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminnewsComponent_tbody_26_tr_1_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const user_r5 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.removeUser(user_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx_r4.dialogTheme2 == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx_r4.dialogTheme2 == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.UsersForms);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.UsersForms.controls.name.valid && ctx_r4.UsersForms.controls.name.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.UsersForms.controls.email.valid && ctx_r4.UsersForms.controls.email.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx_r4.dialogTheme2 == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.editDone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r6.valid);
} }
function AdminnewsComponent_tbody_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminnewsComponent_tbody_26_tr_1_Template, 37, 17, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.users);
} }
function AdminnewsComponent_tbody_27_tr_1_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminnewsComponent_tbody_27_tr_1_p_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminnewsComponent_tbody_27_tr_1_p_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r19.editDone, " ");
} }
function AdminnewsComponent_tbody_27_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminnewsComponent_tbody_27_tr_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const user_r15 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.getValues(user_r15.name, user_r15.email); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " EDIT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Edit User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AdminnewsComponent_tbody_27_tr_1_p_25_Template, 2, 0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AdminnewsComponent_tbody_27_tr_1_p_27_Template, 2, 0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AdminnewsComponent_tbody_27_tr_1_p_29_Template, 3, 1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminnewsComponent_tbody_27_tr_1_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const user_r15 = ctx.$implicit; const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.editUser(_r16, user_r15.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Save changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminnewsComponent_tbody_27_tr_1_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const user_r15 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.removeUser(user_r15.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r15 = ctx.$implicit;
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r15.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r14.UsersForms);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r14.UsersForms.controls.name.valid && ctx_r14.UsersForms.controls.name.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r14.UsersForms.controls.email.valid && ctx_r14.UsersForms.controls.email.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.editDone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r16.valid);
} }
function AdminnewsComponent_tbody_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminnewsComponent_tbody_27_tr_1_Template, 37, 8, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.searchUser);
} }
class AdminnewsComponent {
    constructor(newsApi, formBuilder, local) {
        this.newsApi = newsApi;
        this.formBuilder = formBuilder;
        this.local = local;
        this.users = [];
        this.emails = [];
        this.searchUser = [];
        this.showsearch = false;
    }
    removeUser(id) {
        this.newsApi.deleteNews(id).subscribe(ele => {
            this.users = this.users.filter(ele => ele.id != id);
        });
    }
    searchUsers(name) {
        this.searchUser = [];
        if (name == "") {
            this.showsearch = false;
            this.searchUser = [];
        }
        else {
            this.showsearch = true;
            let filter = name.toUpperCase();
            for (let i = 0; i < this.users.length; i++) {
                let temp = this.users[i].name;
                if (temp.toUpperCase().indexOf(filter) > -1) {
                    this.searchUser.push(this.users[i]);
                }
            }
        }
    }
    searchUsersByEmail(email) {
        this.searchUser = [];
        if (email == "") {
            this.showsearch = false;
            this.searchUser = [];
        }
        else {
            this.showsearch = true;
            let filter = email.toUpperCase();
            for (let i = 0; i < this.users.length; i++) {
                let temp = this.users[i].email;
                if (temp.toUpperCase().indexOf(filter) > -1) {
                    this.searchUser.push(this.users[i]);
                }
            }
        }
    }
    sortById() {
        this.users.sort(function (a, b) {
            return (a.id - b.id);
        }).sort(function (a, b) {
            return (a.id - b.id);
        });
        this.searchUser.sort(function (a, b) {
            return (a.id - b.id);
        }).sort(function (a, b) {
            return (a.id - b.id);
        });
    }
    sortByName() {
        this.users.forEach(element => {
            element.name = element.name.replace(/\s+/g, '');
        });
        this.users.sort((a, b) => a.name.localeCompare(b.name));
        this.searchUser.forEach(element => {
            element.name = element.name.replace(/\s+/g, '');
        });
        this.searchUser.sort((a, b) => a.name.localeCompare(b.name));
    }
    sortByEmail() {
        this.users.forEach(element => {
            element.email = element.email.replace(/\s+/g, '');
        });
        this.users.sort((a, b) => a.email.localeCompare(b.email.toString()));
        this.searchUser.forEach(element => {
            element.email = element.email.replace(/\s+/g, '');
        });
        this.searchUser.sort((a, b) => a.email.localeCompare(b.email.toString()));
    }
    editUser(f, id) {
        this.news = {
            id: id,
            name: f.form.value.name,
            email: f.form.value.email
        };
        this.newsApi.editNews(this.news, id).subscribe(ele => {
            this.users.forEach(element => {
                if (element.id == id) {
                    element.name = f.form.value.name;
                }
                this.editDone = "The changes have been saved";
            });
        });
    }
    getValues(name, email) {
        this.UsersForms = this.formBuilder.group({
            name: [name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [email],
        });
        this.checkDialogTheme();
        console.log(this.dialogTheme2);
    }
    checkDialogTheme() {
        if (this.local.dialogTheme == true) {
            this.dialogTheme2 = true;
        }
        else {
            this.dialogTheme2 = false;
        }
    }
    ngOnInit() {
        this.UsersForms = this.formBuilder.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [""],
        });
        this.newsApi.getAll().subscribe(ele => {
            this.users = ele;
        });
    }
}
AdminnewsComponent.ɵfac = function AdminnewsComponent_Factory(t) { return new (t || AdminnewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_newsapi_service__WEBPACK_IMPORTED_MODULE_2__["NewsapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_3__["LocalService"])); };
AdminnewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminnewsComponent, selectors: [["app-adminnews"]], decls: 28, vars: 2, consts: [["id", "newsLetter"], [2, "text-align", "left"], ["id", "searchInput", "type", "text", "nbInput", "", "placeholder", "Search by name", 3, "keyup"], ["searchbyname", ""], ["id", "searchInput", "type", "text", "nbInput", "", "placeholder", "Search by email", 3, "keyup"], ["searchbyEmail", ""], ["id", "searchInput", "placeholder", "Sort By"], ["value", "id", 3, "click"], ["value", "1name", 3, "click"], ["value", "2", 3, "click"], ["id", "tableDiv"], [1, "table", "table-dark"], ["scope", "col"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["scope", "row"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal2", 1, "btn", "btn-primary", "btn-sm", 2, "border-radius", "73px", "width", "60px", 3, "click"], ["id", "exampleModal2", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModal2Label", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", 3, "ngClass"], ["id", "exampleModal2Label", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true", 2, "color", "red"], [1, "modal-body", 3, "ngClass"], [3, "formGroup"], ["f", "ngForm"], [1, "col"], ["type", "text", "formControlName", "name", "placeholder", "Name", "required", "", "maxlength", "20", 1, "form-control", 2, "width", "50%", "margin-left", "auto", "margin-right", "auto", "margin-top", "10px"], ["class", "errorText", 4, "ngIf"], ["type", "email", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$", "formControlName", "email", "placeholder", "Email", "required", "", 1, "form-control", 2, "width", "50%", "margin-left", "auto", "margin-right", "auto", "margin-top", "10px"], [1, "modal-footer", 3, "ngClass"], ["style", "color: green;", 4, "ngIf"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["nbButton", "", "shape", "round", "size", "small", "status", "danger", 3, "click"], [1, "errorText"], [2, "color", "green"], [1, "fas", "fa-check", 2, "margin-left", "4px"], [1, "modal-header"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"]], template: function AdminnewsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AdminnewsComponent_Template_input_keyup_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.searchUsers(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AdminnewsComponent_Template_input_keyup_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.searchUsersByEmail(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminnewsComponent_Template_nb_option_click_7_listener() { return ctx.sortById(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminnewsComponent_Template_nb_option_click_9_listener() { return ctx.sortByName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminnewsComponent_Template_nb_option_click_11_listener() { return ctx.sortByEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AdminnewsComponent_tbody_26_Template, 2, 1, "tbody", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AdminnewsComponent_tbody_27_Template, 2, 1, "tbody", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showsearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showsearch);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"]], styles: [".errorText[_ngcontent-%COMP%] {\n  margin-top: -22px;\n  margin-left: 92px;\n  font-size: 13px;\n  color: red;\n}\n\n#tableDiv[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #454d55;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\n#tableDiv[_ngcontent-%COMP%] {\n  max-height: 500px;\n  overflow: auto;\n  margin-top: 10px;\n}\n\n#searchInput[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.dialogThemeClass[_ngcontent-%COMP%] {\n  background-color: #0f121e;\n  color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hZG1pbk5ld3NMZXR0ZXIvQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9zcmNcXGFwcFxcbW9kdWxlc1xcYWRtaW5cXGFkbWluTmV3c0xldHRlclxcYWRtaW5uZXdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL2FkbWluTmV3c0xldHRlci9hZG1pbm5ld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FESUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL2FkbWluTmV3c0xldHRlci9hZG1pbm5ld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3JUZXh0e1xyXG4gICAgbWFyZ2luLXRvcDogLTIycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbiN0YWJsZURpdiB0aGVhZCB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzQ1NGQ1NTtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG5cclxuI3RhYmxlRGl2e1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNzZWFyY2hJbnB1dHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgXHJcbiAgIFxyXG59XHJcblxyXG4uZGlhbG9nVGhlbWVDbGFzc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjEyMWU7XHJcbiAgICBjb2xvcjogbGlnaHRncmF5O1xyXG59IiwiLmVycm9yVGV4dCB7XG4gIG1hcmdpbi10b3A6IC0yMnB4O1xuICBtYXJnaW4tbGVmdDogOTJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogcmVkO1xufVxuXG4jdGFibGVEaXYgdGhlYWQgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0ZDU1O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG59XG5cbiN0YWJsZURpdiB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuI3NlYXJjaElucHV0IHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5kaWFsb2dUaGVtZUNsYXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTIxZTtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminnewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-adminnews',
                templateUrl: './adminnews.component.html',
                styleUrls: ['./adminnews.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_newsapi_service__WEBPACK_IMPORTED_MODULE_2__["NewsapiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_3__["LocalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/admin/adminorder/adminorder.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/admin/adminorder/adminorder.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminorderComponent", function() { return AdminorderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_orderapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/orderapi.service */ "./src/app/core/services/orderapi.service.ts");
/* harmony import */ var src_app_core_services_editvalues_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/editvalues.service */ "./src/app/core/services/editvalues.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_orderitem_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/orderitem.service */ "./src/app/core/services/orderitem.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function AdminorderComponent_tbody_48_tr_1_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ID:", i_r7.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Order ID:", i_r7.orderId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Product ID:", i_r7.productId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" quantity :", i_r7.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" price :", i_r7.productPrice, "$ ");
} }
function AdminorderComponent_tbody_48_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminorderComponent_tbody_48_tr_1_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const order_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.getOrder(order_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Order Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, AdminorderComponent_tbody_48_tr_1_div_37_Template, 13, 5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminorderComponent_tbody_48_tr_1_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const order_r5 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.edit(order_r5.id, order_r5.name, order_r5.email, order_r5.phone, order_r5.city, order_r5.address, order_r5.shipping, order_r5.price, order_r5.shippingStatus, order_r5.remark, order_r5.date); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminorderComponent_tbody_48_tr_1_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const order_r5 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.delete(order_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r5.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r5.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r5.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r5.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r5.shipping);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", order_r5.price, ".00$");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r5.shippingStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](21, 12, order_r5.date, "MM/dd/yyyy"), " , ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 15, order_r5.date, "HH:mm"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.orderItemsFilter);
} }
function AdminorderComponent_tbody_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminorderComponent_tbody_48_tr_1_Template, 47, 18, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.orders);
} }
function AdminorderComponent_tbody_49_tr_1_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ID:", i_r15.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Order ID:", i_r15.orderId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Product ID:", i_r15.productId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" quantity :", i_r15.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" price :", i_r15.productPrice, "$");
} }
function AdminorderComponent_tbody_49_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminorderComponent_tbody_49_tr_1_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const order_r13 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.getOrder(order_r13.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Order Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, AdminorderComponent_tbody_49_tr_1_div_37_Template, 13, 5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminorderComponent_tbody_49_tr_1_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const order_r13 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.edit(order_r13.id, order_r13.name, order_r13.email, order_r13.phone, order_r13.city, order_r13.address, order_r13.shipping, order_r13.price, order_r13.shippingStatus, order_r13.remark, order_r13.date); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminorderComponent_tbody_49_tr_1_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const order_r13 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r19.delete(order_r13.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r13.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r13.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r13.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r13.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r13.shipping);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", order_r13.price, ".00$");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r13.shippingStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](21, 12, order_r13.date, "mm/dd/yyyy"), " , ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 15, order_r13.date, "HH:mm"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.orderItemsFilter);
} }
function AdminorderComponent_tbody_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminorderComponent_tbody_49_tr_1_Template, 47, 18, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.searchOrder);
} }
class AdminorderComponent {
    constructor(orderApi, editService, router, orderItemsApi) {
        this.orderApi = orderApi;
        this.editService = editService;
        this.router = router;
        this.orderItemsApi = orderItemsApi;
        this.orders = [];
        this.orderItems = [];
        this.orderItemsFilter = [];
        this.searchOrder = [];
        this.showsearch = false;
    }
    delete(id) {
        this.orderApi.deleteOrder(id).subscribe((ele) => {
            this.deleteOrderItems(ele).then(data => {
                this.orders = this.orders.filter(ele => ele.id != id);
            });
        });
    }
    searchOrders(name) {
        this.searchOrder = [];
        if (name == "") {
            this.showsearch = false;
            this.searchOrder = [];
        }
        else {
            this.showsearch = true;
            let filter = name.toUpperCase();
            for (let i = 0; i < this.orders.length; i++) {
                let temp = this.orders[i].name;
                if (temp.toUpperCase().indexOf(filter) > -1) {
                    this.searchOrder.push(this.orders[i]);
                }
            }
        }
    }
    searchOrdersByEmail(email) {
        this.searchOrder = [];
        if (email == "") {
            this.showsearch = false;
            this.searchOrder = [];
        }
        else {
            this.showsearch = true;
            let filter = email.toUpperCase();
            for (let i = 0; i < this.orders.length; i++) {
                let temp = this.orders[i].email;
                if (temp.toUpperCase().indexOf(filter) > -1) {
                    this.searchOrder.push(this.orders[i]);
                }
            }
        }
    }
    getOrder(id) {
        this.orderItemsFilter = [];
        this.orderItems.forEach(element => {
            if (element.orderId == id) {
                this.orderItemsFilter.push(element);
            }
        });
    }
    deleteOrderItems(order) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let orderItemsToDelete = this.orderItems.filter(ele => ele.orderId == order.id);
            let res = [];
            for (let index = 0; index < orderItemsToDelete.length; index++) {
                const element = orderItemsToDelete[index];
                res[index] = yield this.orderItemsApi.deleteOrderItems(element.id);
            }
            return 'finish';
        });
    }
    edit(id, name, email, phone, city, address, shipping, price, shippingStatus, remark, date) {
        this.editService.passValues1(id, name, email, phone, city, address, shipping, price, shippingStatus, remark, date);
        this.router.navigate(['/editOrder']);
    }
    sortById() {
        this.orders.sort(function (a, b) {
            return (a.id - b.id);
        }).sort(function (a, b) {
            return (a.id - b.id);
        });
        this.searchOrder.sort(function (a, b) {
            return (a.id - b.id);
        }).sort(function (a, b) {
            return (a.id - b.id);
        });
    }
    sortByName() {
        this.orders.forEach(element => {
            element.name = element.name.replace(/\s+/g, '');
        });
        this.orders.sort((a, b) => a.name.localeCompare(b.name));
        this.searchOrder.forEach(element => {
            element.name = element.name.replace(/\s+/g, '');
        });
        this.searchOrder.sort((a, b) => a.name.localeCompare(b.name));
    }
    sortByEmail() {
        this.orders.forEach(element => {
            element.email = element.email.replace(/\s+/g, '');
        });
        this.orders.sort((a, b) => a.email.localeCompare(b.email.toString()));
        this.searchOrder.forEach(element => {
            element.email = element.email.replace(/\s+/g, '');
        });
        this.searchOrder.sort((a, b) => a.email.localeCompare(b.email.toString()));
    }
    sortByCity() {
        this.orders.forEach(element => {
            element.city = element.city.replace(/\s+/g, '');
        });
        this.orders.sort((a, b) => a.city.localeCompare(b.city));
        this.searchOrder.forEach(element => {
            element.city = element.city.replace(/\s+/g, '');
        });
        this.searchOrder.sort((a, b) => a.city.localeCompare(b.city));
    }
    priceToHigh() {
        this.orders.sort(function (a, b) {
            return (a.price - b.price);
        }).sort(function (a, b) {
            return (a.price - b.price);
        });
        this.searchOrder.sort(function (a, b) {
            return (a.price - b.price);
        }).sort(function (a, b) {
            return (a.price - b.price);
        });
    }
    priceToLow() {
        this.orders.sort(function (a, b) {
            return (b.price - a.price);
        }).sort(function (a, b) {
            return (b.price - a.price);
        });
        this.searchOrder.sort(function (a, b) {
            return (b.price - a.price);
        }).sort(function (a, b) {
            return (b.price - a.price);
        });
    }
    ngOnInit() {
        this.orders.forEach(element => {
            this.orderItemsApi.getAllOrderItemsByOrderId(element.id).subscribe(res => {
            });
        });
        this.orderApi.getAll().subscribe(ele => {
            this.orders = ele;
        });
        this.orderItemsApi.getAll().subscribe(ele => {
            this.orderItems = ele;
        });
    }
}
AdminorderComponent.ɵfac = function AdminorderComponent_Factory(t) { return new (t || AdminorderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_orderapi_service__WEBPACK_IMPORTED_MODULE_2__["OrderapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_editvalues_service__WEBPACK_IMPORTED_MODULE_3__["EditvaluesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_orderitem_service__WEBPACK_IMPORTED_MODULE_5__["OrderitemService"])); };
AdminorderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminorderComponent, selectors: [["app-adminorder"]], decls: 50, vars: 2, consts: [["id", "adminOrder", 2, "text-align", "center", "margin-top", "10px"], [2, "text-align", "left"], ["id", "searchInput", "type", "text", "nbInput", "", "placeholder", "Search by name", 3, "keyup"], ["searchbyname", ""], ["id", "searchInput", "type", "text", "nbInput", "", "placeholder", "Search by email", 3, "keyup"], ["searchbyEmail", ""], ["id", "searchInput", "placeholder", "Sort By"], ["value", "id", 3, "click"], ["value", "name", 3, "click"], ["value", "email", 3, "click"], ["value", "city", 3, "click"], ["value", "Price low-high", 3, "click"], ["value", "Price high-low", 3, "click"], ["id", "tableDiv"], [1, "table", "table-dark"], ["scope", "col"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["scope", "row"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal", 1, "btn", "btn-warning", "btn-sm", 2, "border-radius", "100px", "margin-top", "2px", "color", "white !important", 3, "click"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["style", "float: left;", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["nbButton", "", "shape", "round", "size", "small", "status", "primary", 3, "click"], ["nbButton", "", "shape", "round", "size", "small", "status", "danger", 3, "click"], [2, "float", "left"], [2, "display", "inline-block", "margin-left", "10px", "color", "black !important"]], template: function AdminorderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AdminorderComponent_Template_input_keyup_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); return ctx.searchOrders(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function AdminorderComponent_Template_input_keyup_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return ctx.searchOrdersByEmail(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nb-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nb-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminorderComponent_Template_nb_option_click_7_listener() { return ctx.sortById(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nb-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminorderComponent_Template_nb_option_click_9_listener() { return ctx.sortByName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nb-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminorderComponent_Template_nb_option_click_11_listener() { return ctx.sortByEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nb-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminorderComponent_Template_nb_option_click_13_listener() { return ctx.sortByCity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "city");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nb-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminorderComponent_Template_nb_option_click_15_listener() { return ctx.priceToHigh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Price low-high");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "nb-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminorderComponent_Template_nb_option_click_17_listener() { return ctx.priceToLow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Price high-low");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "ShippingStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, AdminorderComponent_tbody_48_Template, 2, 1, "tbody", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, AdminorderComponent_tbody_49_Template, 2, 1, "tbody", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showsearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showsearch);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["#tableDiv[_ngcontent-%COMP%] {\n  max-height: 500px;\n  overflow: auto;\n}\n\n#tableDiv[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #454d55;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\n#searchInput[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hZG1pbm9yZGVyL0M6XFxVc2Vyc1xcZGFuaWVcXERlc2t0b3BcXEZ1bGwgU3RhY2tcXFBob25lIENvdmVyXFxjbGllbnRcXFBob25lQ292ZXIvc3JjXFxhcHBcXG1vZHVsZXNcXGFkbWluXFxhZG1pbm9yZGVyXFxhZG1pbm9yZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL2FkbWlub3JkZXIvYWRtaW5vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBRENFLFVBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQ0VKOztBRENFLFdBQUE7O0FBQ0E7RUFDRSxnQkFBQTtBQ0VKOztBRENFLG9CQUFBOztBQUNBO0VBQ0UsZ0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYWRtaW5vcmRlci9hZG1pbm9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RhYmxlRGl2e1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuI3RhYmxlRGl2IHRoZWFkIHRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzQ1NGQ1NTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuI3NlYXJjaElucHV0e1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRyYWNrICovXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyBcclxuICB9XHJcbiAgIFxyXG4gIC8qIEhhbmRsZSAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzg4ODsgXHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzU1NTsgXHJcbiAgfVxyXG4iLCIjdGFibGVEaXYge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbiN0YWJsZURpdiB0aGVhZCB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTRkNTU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbn1cblxuI3NlYXJjaElucHV0IHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTBweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminorderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-adminorder',
                templateUrl: './adminorder.component.html',
                styleUrls: ['./adminorder.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_orderapi_service__WEBPACK_IMPORTED_MODULE_2__["OrderapiService"] }, { type: src_app_core_services_editvalues_service__WEBPACK_IMPORTED_MODULE_3__["EditvaluesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_core_services_orderitem_service__WEBPACK_IMPORTED_MODULE_5__["OrderitemService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/admin/adminorder/editorder/editorder.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/admin/adminorder/editorder/editorder.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorderComponent", function() { return EditorderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_editvalues_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/editvalues.service */ "./src/app/core/services/editvalues.service.ts");
/* harmony import */ var src_app_core_services_orderapi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/orderapi.service */ "./src/app/core/services/orderapi.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");









function EditorderComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditorderComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditorderComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditorderComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " City is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditorderComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditorderComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Shipping status is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/mainAdmin"]; };
class EditorderComponent {
    constructor(location, router, orderValues, formBuilder, orderService) {
        this.location = location;
        this.router = router;
        this.orderValues = orderValues;
        this.formBuilder = formBuilder;
        this.orderService = orderService;
        this.orders = [];
    }
    getValues() {
        this.orders = [];
        this.orders = this.orderValues.ordersValues;
        if (this.orders[0] == undefined) {
            this.back();
        }
    }
    back() {
        this.location.back();
    }
    save(f) {
        this.orders.forEach(element => {
            this.order = {
                id: element.id,
                name: f.form.value.name,
                email: f.form.value.email,
                phone: f.form.value.phone,
                city: f.form.value.city,
                address: f.form.value.address,
                shipping: element.shipping,
                price: element.price,
                shippingStatus: f.form.value.shippingStatus,
                remark: f.form.value.remark,
                date: element.date
            };
            this.orderService.editOrder(this.order, element.id).subscribe(ele => {
                this.back();
            });
        });
    }
    ngOnInit() {
        this.getValues();
        this.orders.forEach(element => {
            this.OrdersForms = this.formBuilder.group({
                name: [element.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                email: [element.email],
                phone: [element.phone],
                city: [element.city, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                address: [element.address, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                shippingStatus: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                remark: [element.remark],
            });
        });
    }
}
EditorderComponent.ɵfac = function EditorderComponent_Factory(t) { return new (t || EditorderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_editvalues_service__WEBPACK_IMPORTED_MODULE_4__["EditvaluesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_orderapi_service__WEBPACK_IMPORTED_MODULE_5__["OrderapiService"])); };
EditorderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditorderComponent, selectors: [["app-editorder"]], decls: 26, vars: 10, consts: [[3, "formGroup"], ["f", "ngForm"], ["type", "text", "formControlName", "name", "nbInput", "", "placeholder", "Name*", "required", ""], ["class", "errorText", 4, "ngIf"], ["type", "email", "nbInput", "", "formControlName", "email", "placeholder", "Email*", "pattern", "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,63}$", "required", ""], ["type", "text", "nbInput", "", "formControlName", "phone", "placeholder", "Phone*", "pattern", "^\\+?(972|0)(\\-)?0?(([23489]{1}\\d{7})|[5]{1}\\d{8})$", "required", ""], ["type", "text", "formControlName", "city", "nbInput", "", "placeholder", "City*", "required", ""], ["type", "text", "formControlName", "address", "nbInput", "", "placeholder", "Address*", "required", ""], ["placeholder", "Shipping status*", "formControlName", "shippingStatus", "required", ""], ["value", "Sent"], ["value", "Not Sent"], ["type", "text", "formControlName", "remark", "nbInput", "", "placeholder", "Remark (Optional)"], [2, "text-align", "center"], ["nbButton", "", "status", "success", 2, "margin-left", "auto", "margin-right", "auto", "display", "inline-block", 3, "disabled", "click"], ["nbButton", "", 2, "margin-left", "auto", "margin-right", "auto", "display", "inline-block", 3, "routerLink"], [1, "errorText"]], template: function EditorderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditorderComponent_p_5_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EditorderComponent_p_7_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditorderComponent_p_9_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditorderComponent_p_11_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditorderComponent_p_13_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nb-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nb-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nb-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Not Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EditorderComponent_p_19_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditorderComponent_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.save(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.OrdersForms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.OrdersForms.controls.name.valid && ctx.OrdersForms.controls.name.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.OrdersForms.controls.email.valid && ctx.OrdersForms.controls.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.OrdersForms.controls.phone.valid && ctx.OrdersForms.controls.phone.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.OrdersForms.controls.city.valid && ctx.OrdersForms.controls.city.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.OrdersForms.controls.address.valid && ctx.OrdersForms.controls.address.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.OrdersForms.controls.shippingStatus.valid && ctx.OrdersForms.controls.shippingStatus.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbLayoutColumnComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbOptionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["input[_ngcontent-%COMP%], nb-select[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hZG1pbm9yZGVyL2VkaXRvcmRlci9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL3NyY1xcYXBwXFxtb2R1bGVzXFxhZG1pblxcYWRtaW5vcmRlclxcZWRpdG9yZGVyXFxlZGl0b3JkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYWRtaW5vcmRlci9lZGl0b3JkZXIvZWRpdG9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hZG1pbm9yZGVyL2VkaXRvcmRlci9lZGl0b3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCAsIG5iLXNlbGVjdCAsIGJ1dHRvbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4iLCJpbnB1dCwgbmItc2VsZWN0LCBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-editorder',
                templateUrl: './editorder.component.html',
                styleUrls: ['./editorder.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_core_services_editvalues_service__WEBPACK_IMPORTED_MODULE_4__["EditvaluesService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_core_services_orderapi_service__WEBPACK_IMPORTED_MODULE_5__["OrderapiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/admin/editProducr/editproduct.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/admin/editProducr/editproduct.component.ts ***!
  \********************************************************************/
/*! exports provided: EditproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditproductComponent", function() { return EditproductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_productapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/productapi.service */ "./src/app/core/services/productapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_editvalues_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/editvalues.service */ "./src/app/core/services/editvalues.service.ts");
/* harmony import */ var src_app_core_services_categoriesapi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/categoriesapi.service */ "./src/app/core/services/categoriesapi.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function EditproductComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditproductComponent_nb_option_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditproductComponent_nb_option_8_Template_nb_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.checkTypes(_r8.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", c_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r7);
} }
function EditproductComponent_nb_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", t_r11.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r11.type);
} }
function EditproductComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Price is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditproductComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.onlyImage);
} }
const _c0 = function () { return ["/mainAdmin"]; };
class EditproductComponent {
    constructor(formBuilder, productService, router, editService, categoryApi) {
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.router = router;
        this.editService = editService;
        this.categoryApi = categoryApi;
        this.categories = [];
        this.onlyCategory = [];
        this.products = [];
    }
    checkImage(img, f) {
        var str = img;
        var res = str.substring(0, 8);
        res == "https://" ? this.add(f) : this.onlyImage = "Only image link";
    }
    getValues() {
        this.productValues = [];
        this.productValues = this.editService.productValues;
        if (this.productValues[0] == undefined) {
            this.router.navigate(['admin']);
        }
    }
    add(f) {
        this.productValues.forEach(element => {
            this.product = {
                id: element.id,
                name: f.form.value.name,
                description: f.form.value.description,
                category: f.form.value.category,
                type: f.form.value.type,
                price: f.form.value.price,
                photoUrl: f.form.value.photoUrl
            };
            this.productService.editProduct(this.product, element.id).subscribe(ele => {
                this.router.navigate(['mainAdmin']);
            });
        });
    }
    getCategories() {
        this.categoryApi.getAll().subscribe(ele => {
            ele.forEach(element => {
                this.onlyCategory.push(element.category);
                this.onlyCategory = this.onlyCategory.filter((el, i, a) => i === a.indexOf(el));
            });
        });
    }
    checkTypes(category) {
        this.categories = [];
        this.categoryApi.getAll().subscribe(ele => {
            ele.forEach(element => {
                this.categories.push(element);
                this.categories = this.categories.filter(ele => ele.category == category);
            });
        });
    }
    ngOnInit() {
        this.getValues();
        this.productValues.forEach(ele => {
            this.addProductForms = this.formBuilder.group({
                name: [ele.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                category: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                description: [ele.description],
                price: [ele.price, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                photoUrl: [ele.photoUrl]
            });
        });
        this.productService.getAll().subscribe(ele => {
            this.products = ele;
            this.getCategories();
        });
    }
}
EditproductComponent.ɵfac = function EditproductComponent_Factory(t) { return new (t || EditproductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_productapi_service__WEBPACK_IMPORTED_MODULE_2__["ProductapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_editvalues_service__WEBPACK_IMPORTED_MODULE_4__["EditvaluesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_categoriesapi_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesapiService"])); };
EditproductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditproductComponent, selectors: [["app-editproduct"]], decls: 21, vars: 9, consts: [["id", "add"], [3, "formGroup"], ["f", "ngForm"], ["type", "text", "formControlName", "name", "nbInput", "", "placeholder", "Name*", "required", "", "maxlength", "20"], ["class", "errorText", 4, "ngIf"], ["formControlName", "category", "placeholder", "Category*", "required", ""], [3, "value", "click", 4, "ngFor", "ngForOf"], ["formControlName", "type", "placeholder", "type*", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "formControlName", "price", "nbInput", "", "placeholder", "Price*", "required", ""], ["nbInput", "", "formControlName", "description", "placeholder", "Description(0-100)", "maxlength", "100", 2, "margin-top", "30px"], ["type", "text", "formControlName", "photoUrl", "nbInput", "", "placeholder", "URL photo*", "required", ""], ["img", ""], ["nbButton", "", "status", "primary", 2, "margin-top", "10px", "margin-right", "10px", 3, "disabled", "click"], ["nbButton", "", 2, "margin-top", "10px", 3, "routerLink"], [1, "errorText"], [3, "value", "click"], ["category", ""], [3, "value"]], template: function EditproductComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditproductComponent_p_6_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditproductComponent_nb_option_8_Template, 3, 2, "nb-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EditproductComponent_nb_option_10_Template, 2, 2, "nb-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditproductComponent_p_12_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EditproductComponent_p_16_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditproductComponent_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.checkImage(_r5.value, _r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Save Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addProductForms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.addProductForms.controls.name.valid && ctx.addProductForms.controls.name.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.onlyCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.addProductForms.controls.price.valid && ctx.addProductForms.controls.price.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.onlyImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbOptionComponent"]], styles: ["#add[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ninput[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 30px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.errorText[_ngcontent-%COMP%] {\n  margin-top: -22px;\n  margin-left: 92px;\n  font-size: 13px;\n  color: red;\n}\n\nnb-select[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9lZGl0UHJvZHVjci9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL3NyY1xcYXBwXFxtb2R1bGVzXFxhZG1pblxcZWRpdFByb2R1Y3JcXGVkaXRwcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL2VkaXRQcm9kdWNyL2VkaXRwcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0FKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vZWRpdFByb2R1Y3IvZWRpdHByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWRke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gXHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5lcnJvclRleHR7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA5MnB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5uYi1zZWxlY3R7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICBcclxufVxyXG4iLCIjYWRkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uZXJyb3JUZXh0IHtcbiAgbWFyZ2luLXRvcDogLTIycHg7XG4gIG1hcmdpbi1sZWZ0OiA5MnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cbm5iLXNlbGVjdCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditproductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-editproduct',
                templateUrl: './editproduct.component.html',
                styleUrls: ['./editproduct.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_core_services_productapi_service__WEBPACK_IMPORTED_MODULE_2__["ProductapiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_core_services_editvalues_service__WEBPACK_IMPORTED_MODULE_4__["EditvaluesService"] }, { type: src_app_core_services_categoriesapi_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesapiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/admin/mainadmin/mainadmin.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/admin/mainadmin/mainadmin.component.ts ***!
  \****************************************************************/
/*! exports provided: MainadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainadminComponent", function() { return MainadminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin.component */ "./src/app/modules/admin/admin.component.ts");
/* harmony import */ var _adminorder_adminorder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../adminorder/adminorder.component */ "./src/app/modules/admin/adminorder/adminorder.component.ts");
/* harmony import */ var _adminNewsLetter_adminnews_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../adminNewsLetter/adminnews.component */ "./src/app/modules/admin/adminNewsLetter/adminnews.component.ts");









function MainadminComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainadminComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.enterManagerZone(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Manager zone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainadminComponent_h6_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello,", ctx_r1.adminName, "");
} }
function MainadminComponent_h6_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello,Manager ", ctx_r2.adminName, "");
} }
class MainadminComponent {
    constructor(location, authService, userService) {
        this.location = location;
        this.authService = authService;
        this.userService = userService;
    }
    logout() {
        this.authService.logout()
            .then((res) => {
            this.location.back();
        }, (error) => {
            console.log("Logout error", error);
        });
    }
    getUser() {
        new Promise((resolve, reject) => {
            this.userService.getCurrentUser().then(user => {
                if (user) {
                    this.userArr = { displayName: user.displayName, email: user.email, uid: user.uid };
                    this.userService.getUser(user.uid).then(res => {
                        this.role = res.role;
                    });
                    if (this.userArr.displayName != null) {
                        this.adminName = this.userArr.displayName;
                    }
                    else {
                        this.adminName = this.userArr.email.substring(0, this.userArr.email.lastIndexOf("@"));
                    }
                }
            });
        });
    }
    enterManagerZone() {
        this.userService.getCurrentUser().then(user => {
            if (user) {
                this.userService.enterToManagerZone(user);
            }
        });
    }
    ngOnInit() {
        this.getUser();
    }
}
MainadminComponent.ɵfac = function MainadminComponent_Factory(t) { return new (t || MainadminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
MainadminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainadminComponent, selectors: [["app-mainadmin"]], decls: 19, vars: 3, consts: [["nbButton", "", "status", "danger", 3, "click"], [1, "fas", "fa-sign-out-alt", 2, "margin-left", "5px", "display", "block"], ["nbButton", "", "status", "primary", "style", "display: block;margin-top: 3px;", 3, "click", 4, "ngIf"], [4, "ngIf"], [2, "text-align", "center", "margin-top", "1px"], [2, "text-align", "center"], ["fullWidth", ""], ["tabTitle", "Products"], ["tabTitle", "Orders"], ["tabTitle", "News Letter"], ["nbButton", "", "status", "primary", 2, "display", "block", "margin-top", "3px", 3, "click"], [1, "fas", "fa-lock"]], template: function MainadminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainadminComponent_Template_button_click_3_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MainadminComponent_button_6_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MainadminComponent_h6_7_Template, 2, 1, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MainadminComponent_h6_8_Template, 2, 1, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Welcom to Admin zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-tabset", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nb-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nb-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-adminorder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nb-tab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-adminnews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.role == "manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.role == "admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.role == "manager");
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutColumnComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTabsetComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTabComponent"], _admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], _adminorder_adminorder_component__WEBPACK_IMPORTED_MODULE_6__["AdminorderComponent"], _adminNewsLetter_adminnews_component__WEBPACK_IMPORTED_MODULE_7__["AdminnewsComponent"]], styles: [".cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n.cdk-overlay-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n@media screen and (-ms-high-contrast: active) {\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n    opacity: 0.6;\n  }\n}\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.32);\n}\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%], .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n\n.nb-global-scrollblock[_ngcontent-%COMP%] {\n  position: static;\n  width: auto;\n  overflow: hidden;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nhtml[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: inherit;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\nhtml[_ngcontent-%COMP%] {\n  line-height: 1.15;\n  \n  -webkit-text-size-adjust: 100%;\n  \n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\nhr[_ngcontent-%COMP%] {\n  box-sizing: content-box;\n  \n  height: 0;\n  \n  overflow: visible;\n  \n}\n\npre[_ngcontent-%COMP%] {\n  font-family: monospace, monospace;\n  \n  font-size: 1em;\n  \n}\n\na[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\nabbr[title][_ngcontent-%COMP%] {\n  border-bottom: none;\n  \n  text-decoration: underline;\n  \n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  \n}\n\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%] {\n  font-family: monospace, monospace;\n  \n  font-size: 1em;\n  \n}\n\nsmall[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub[_ngcontent-%COMP%] {\n  bottom: -0.25em;\n}\nsup[_ngcontent-%COMP%] {\n  top: -0.5em;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-style: none;\n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit;\n  \n  font-size: 100%;\n  \n  line-height: 1.15;\n  \n  margin: 0;\n  \n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  \n  overflow: visible;\n}\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  \n  text-transform: none;\n}\n\nbutton[_ngcontent-%COMP%], [type=button][_ngcontent-%COMP%], [type=reset][_ngcontent-%COMP%], [type=submit][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n}\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, [type=button][_ngcontent-%COMP%]::-moz-focus-inner, [type=reset][_ngcontent-%COMP%]::-moz-focus-inner, [type=submit][_ngcontent-%COMP%]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\nbutton[_ngcontent-%COMP%]:-moz-focusring, [type=button][_ngcontent-%COMP%]:-moz-focusring, [type=reset][_ngcontent-%COMP%]:-moz-focusring, [type=submit][_ngcontent-%COMP%]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  padding: 0.35em 0.75em 0.625em;\n}\n\nlegend[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  \n  color: inherit;\n  \n  display: table;\n  \n  max-width: 100%;\n  \n  padding: 0;\n  \n  white-space: normal;\n  \n}\n\nprogress[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n[type=checkbox][_ngcontent-%COMP%], [type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  \n  padding: 0;\n  \n}\n\n[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type=search][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield;\n  \n  outline-offset: -2px;\n  \n}\n\n[type=search][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  \n  font: inherit;\n  \n}\n\ndetails[_ngcontent-%COMP%] {\n  display: block;\n}\n\nsummary[_ngcontent-%COMP%] {\n  display: list-item;\n}\n\ntemplate[_ngcontent-%COMP%] {\n  display: none;\n}\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n\n.visually-hidden[_ngcontent-%COMP%] {\n  \n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px 1px 1px 1px);\n  \n  clip: rect(1px, 1px, 1px, 1px);\n}\n.adminMenu[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 100x;\n  border: silver 3px solid;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 40px;\n  text-align: center;\n}\n.adminMenu[_ngcontent-%COMP%]:hover {\n  width: 300px;\n  height: 100x;\n  border: black 3px solid;\n  color: silver;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 40px;\n  text-align: center;\n}\n.adminB[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border: none;\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxfZ2xvYmFscy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL21haW5hZG1pbi9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXGdsb2JhbFxcX2NvbXBvbmVudHMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcY29tcG9uZW50c1xcbGF5b3V0XFxfbGF5b3V0LmNvbXBvbmVudC50aGVtZS5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL21haW5hZG1pbi9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxjb21wb25lbnRzXFxzaWRlYmFyXFxfc2lkZWJhci5jb21wb25lbnQudGhlbWUuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcY29tcG9uZW50c1xcY2FsZW5kYXIta2l0XFxfY2FsZW5kYXIta2l0LnRoZW1lLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWFpbmFkbWluL0M6XFxVc2Vyc1xcZGFuaWVcXERlc2t0b3BcXEZ1bGwgU3RhY2tcXFBob25lIENvdmVyXFxjbGllbnRcXFBob25lQ292ZXIvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXGNvbXBvbmVudHNcXGNhbGVuZGFyLWtpdFxcY29tcG9uZW50c1xcY2FsZW5kYXItbmF2aWdhdGlvblxcX2NhbGVuZGFyLW5hdmlnYXRpb24udGhlbWUuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcY29tcG9uZW50c1xcY2FsZW5kYXIta2l0XFxjb21wb25lbnRzXFxjYWxlbmRhci1waWNrZXJcXF9jYWxlbmRhci1waWNrZXIuY29tcG9uZW50LnRoZW1lLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWFpbmFkbWluL0M6XFxVc2Vyc1xcZGFuaWVcXERlc2t0b3BcXEZ1bGwgU3RhY2tcXFBob25lIENvdmVyXFxjbGllbnRcXFBob25lQ292ZXIvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXGNvbXBvbmVudHNcXGNhbGVuZGFyLWtpdFxcY29tcG9uZW50c1xcY2FsZW5kYXItZGF5cy1uYW1lc1xcX2NhbGVuZGFyLWRheXMtbmFtZXMuY29tcG9uZW50LnRoZW1lLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWFpbmFkbWluL0M6XFxVc2Vyc1xcZGFuaWVcXERlc2t0b3BcXEZ1bGwgU3RhY2tcXFBob25lIENvdmVyXFxjbGllbnRcXFBob25lQ292ZXIvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXGNvbXBvbmVudHNcXGNhbGVuZGFyLWtpdFxcY29tcG9uZW50c1xcY2FsZW5kYXItd2Vlay1udW1iZXJcXF9jYWxlbmRhci13ZWVrLW51bWJlci5jb21wb25lbnQudGhlbWUuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcY29tcG9uZW50c1xcY2FsZW5kYXIta2l0XFxjb21wb25lbnRzXFxjYWxlbmRhci1kYXktcGlja2VyXFxfY2FsZW5kYXItZGF5LXBpY2tlci5jb21wb25lbnQudGhlbWUuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcY29tcG9uZW50c1xcY2FsZW5kYXIta2l0XFxjb21wb25lbnRzXFxfY2FsZW5kYXItY2VsbC50aGVtZS5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL21haW5hZG1pbi9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxjb21wb25lbnRzXFxjYWxlbmRhclxcX2NhbGVuZGFyLmNvbXBvbmVudC50aGVtZS5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL21haW5hZG1pbi9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxjb21wb25lbnRzXFxjYXJkXFxfY2FyZC5jb21wb25lbnQudGhlbWUuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcY29tcG9uZW50c1xcdGFic2V0XFxfdGFic2V0LmNvbXBvbmVudC50aGVtZS5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL21haW5hZG1pbi9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxjb21wb25lbnRzXFxyb3V0ZS10YWJzZXRcXF9yb3V0ZS10YWJzZXQuY29tcG9uZW50LnRoZW1lLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWFpbmFkbWluL0M6XFxVc2Vyc1xcZGFuaWVcXERlc2t0b3BcXEZ1bGwgU3RhY2tcXFBob25lIENvdmVyXFxjbGllbnRcXFBob25lQ292ZXIvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXGNvbXBvbmVudHNcXG1lbnVcXF9tZW51LmNvbXBvbmVudC50aGVtZS5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL21haW5hZG1pbi9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxjb21wb25lbnRzXFx1c2VyXFxfdXNlci5jb21wb25lbnQudGhlbWUuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcY29tcG9uZW50c1xcYWN0aW9uc1xcX2FjdGlvbnMuY29tcG9uZW50LnRoZW1lLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWFpbmFkbWluL0M6XFxVc2Vyc1xcZGFuaWVcXERlc2t0b3BcXEZ1bGwgU3RhY2tcXFBob25lIENvdmVyXFxjbGllbnRcXFBob25lQ292ZXIvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXGNvbXBvbmVudHNcXHNlYXJjaFxcX3NlYXJjaC5jb21wb25lbnQudGhlbWUuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcY29tcG9uZW50c1xcY2hlY2tib3hcXF9jaGVja2JveC5jb21wb25lbnQudGhlbWUuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxjb3JlXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWFpbmFkbWluL0M6XFxVc2Vyc1xcZGFuaWVcXERlc2t0b3BcXEZ1bGwgU3RhY2tcXFBob25lIENvdmVyXFxjbGllbnRcXFBob25lQ292ZXIvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXGNvbXBvbmVudHNcXHRvZ2dsZVxcX3RvZ2dsZS5jb21wb25lbnQudGhlbWUuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcY29tcG9uZW50c1xccHJvZ3Jlc3MtYmFyXFxfcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50aGVtZS5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL21haW5hZG1pbi9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxjb21wb25lbnRzXFxiYWRnZVxcX2JhZGdlLmNvbXBvbmVudC50aGVtZS5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL21haW5hZG1pbi9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxjb21wb25lbnRzXFxhbGVydFxcX2FsZXJ0LmNvbXBvbmVudC50aGVtZS5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL21haW5hZG1pbi9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxjb21wb25lbnRzXFxjaGF0XFxfY2hhdC5jb21wb25lbnQudGhlbWUuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcY29tcG9uZW50c1xcc3Bpbm5lclxcX3NwaW5uZXIuY29tcG9uZW50LnRoZW1lLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWFpbmFkbWluL0M6XFxVc2Vyc1xcZGFuaWVcXERlc2t0b3BcXEZ1bGwgU3RhY2tcXFBob25lIENvdmVyXFxjbGllbnRcXFBob25lQ292ZXIvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXGNvbXBvbmVudHNcXHN0ZXBwZXJcXF9zdGVwcGVyLmNvbXBvbmVudC50aGVtZS5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL21haW5hZG1pbi9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxjb21wb25lbnRzXFxhY2NvcmRpb25cXF9hY2NvcmRpb24uY29tcG9uZW50LnRoZW1lLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWFpbmFkbWluL0M6XFxVc2Vyc1xcZGFuaWVcXERlc2t0b3BcXEZ1bGwgU3RhY2tcXFBob25lIENvdmVyXFxjbGllbnRcXFBob25lQ292ZXIvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXGNvbXBvbmVudHNcXGJ1dHRvblxcX2J1dHRvbi5jb21wb25lbnQudGhlbWUuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcY29tcG9uZW50c1xcYnV0dG9uXFxfYnV0dG9uLWZpbGxlZC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL21haW5hZG1pbi9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxjb21wb25lbnRzXFxidXR0b25cXF9idXR0b24tb3V0bGluZS5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL21haW5hZG1pbi9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxjb21wb25lbnRzXFxidXR0b25cXF9idXR0b24tZ2hvc3Quc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcY29tcG9uZW50c1xcYnV0dG9uXFxfYnV0dG9uLWhlcm8uc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcY29tcG9uZW50c1xcaW5wdXRcXF9pbnB1dC5kaXJlY3RpdmUudGhlbWUuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcY29tcG9uZW50c1xcaW5wdXRcXF9pbnB1dC1zdGF0dXNlcy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL21haW5hZG1pbi9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxjb21wb25lbnRzXFxpbnB1dFxcX2lucHV0LXNpemVzLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWFpbmFkbWluL0M6XFxVc2Vyc1xcZGFuaWVcXERlc2t0b3BcXEZ1bGwgU3RhY2tcXFBob25lIENvdmVyXFxjbGllbnRcXFBob25lQ292ZXIvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXGNvbXBvbmVudHNcXGlucHV0XFxfaW5wdXQtc2hhcGVzLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWFpbmFkbWluL0M6XFxVc2Vyc1xcZGFuaWVcXERlc2t0b3BcXEZ1bGwgU3RhY2tcXFBob25lIENvdmVyXFxjbGllbnRcXFBob25lQ292ZXIvbm9kZV9tb2R1bGVzXFxAYW5ndWxhclxcY2RrXFxvdmVybGF5LXByZWJ1aWx0LmNzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vbWFpbmFkbWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL21haW5hZG1pbi9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxjb21wb25lbnRzXFxjZGtcXG92ZXJsYXlcXF9vdmVybGF5LnRoZW1lLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWFpbmFkbWluL0M6XFxVc2Vyc1xcZGFuaWVcXERlc2t0b3BcXEZ1bGwgU3RhY2tcXFBob25lIENvdmVyXFxjbGllbnRcXFBob25lQ292ZXIvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXGNvbXBvbmVudHNcXHBvcG92ZXJcXF9wb3BvdmVyLmNvbXBvbmVudC50aGVtZS5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL21haW5hZG1pbi9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxjb21wb25lbnRzXFxjb250ZXh0LW1lbnVcXF9jb250ZXh0LW1lbnUuY29tcG9uZW50LnRoZW1lLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWFpbmFkbWluL0M6XFxVc2Vyc1xcZGFuaWVcXERlc2t0b3BcXEZ1bGwgU3RhY2tcXFBob25lIENvdmVyXFxjbGllbnRcXFBob25lQ292ZXIvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXGNvbXBvbmVudHNcXHNlbGVjdFxcX3NlbGVjdC5jb21wb25lbnQudGhlbWUuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcY29tcG9uZW50c1xcZm9ybS1maWVsZFxcX2Zvcm0tZmllbGQuY29tcG9uZW50LnRoZW1lLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWFpbmFkbWluL0M6XFxVc2Vyc1xcZGFuaWVcXERlc2t0b3BcXEZ1bGwgU3RhY2tcXFBob25lIENvdmVyXFxjbGllbnRcXFBob25lQ292ZXIvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXGNvbXBvbmVudHNcXG9wdGlvblxcX29wdGlvbi1saXN0LmNvbXBvbmVudC50aGVtZS5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL21haW5hZG1pbi9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxjb21wb25lbnRzXFx0b2FzdHJcXF90b2FzdC5jb21wb25lbnQudGhlbWUuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcY29tcG9uZW50c1xcdG9vbHRpcFxcX3Rvb2x0aXAuY29tcG9uZW50LnRoZW1lLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWFpbmFkbWluL0M6XFxVc2Vyc1xcZGFuaWVcXERlc2t0b3BcXEZ1bGwgU3RhY2tcXFBob25lIENvdmVyXFxjbGllbnRcXFBob25lQ292ZXIvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXGNvbXBvbmVudHNcXGRhdGVwaWNrZXJcXF9kYXRlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQudGhlbWUuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcY29tcG9uZW50c1xccmFkaW9cXF9yYWRpby5jb21wb25lbnQudGhlbWUuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcY29tcG9uZW50c1xcdHJlZS1ncmlkXFxfdHJlZS1ncmlkLmNvbXBvbmVudC50aGVtZS5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL21haW5hZG1pbi9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxjb21wb25lbnRzXFx0cmVlLWdyaWRcXF90cmVlLWdyaWQtc29ydC5jb21wb25lbnQudGhlbWUuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcY29tcG9uZW50c1xcaWNvblxcX2ljb24uY29tcG9uZW50LnRoZW1lLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWFpbmFkbWluL0M6XFxVc2Vyc1xcZGFuaWVcXERlc2t0b3BcXEZ1bGwgU3RhY2tcXFBob25lIENvdmVyXFxjbGllbnRcXFBob25lQ292ZXIvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcZ2xvYmFsXFxfb3ZlcnJpZGVzLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWFpbmFkbWluL0M6XFxVc2Vyc1xcZGFuaWVcXERlc2t0b3BcXEZ1bGwgU3RhY2tcXFBob25lIENvdmVyXFxjbGllbnRcXFBob25lQ292ZXIvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcZ2xvYmFsXFxfbm9ybWFsaXplLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWFpbmFkbWluL0M6XFxVc2Vyc1xcZGFuaWVcXERlc2t0b3BcXEZ1bGwgU3RhY2tcXFBob25lIENvdmVyXFxjbGllbnRcXFBob25lQ292ZXIvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcZ2xvYmFsXFxjb21wb25lbnRzXFxfdHJlZS50aGVtZS5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL21haW5hZG1pbi9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXGdsb2JhbFxcbWFwc1xcX2xlYWZsZXQudGhlbWUuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxnbG9iYWxcXHRhYmxlc1xcX3NtYXJ0LXRhYmxlLnRoZW1lLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWFpbmFkbWluL0M6XFxVc2Vyc1xcZGFuaWVcXERlc2t0b3BcXEZ1bGwgU3RhY2tcXFBob25lIENvdmVyXFxjbGllbnRcXFBob25lQ292ZXIvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcZ2xvYmFsXFxfYnJlYWtwb2ludHMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxnbG9iYWxcXF9zdHlsZXMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYWluYWRtaW4vQzpcXFVzZXJzXFxkYW5pZVxcRGVza3RvcFxcRnVsbCBTdGFja1xcUGhvbmUgQ292ZXJcXGNsaWVudFxcUGhvbmVDb3Zlci9zcmNcXGFwcFxcbW9kdWxlc1xcYWRtaW5cXG1haW5hZG1pblxcbWFpbmFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQXdLQTs7OztFQUFBO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QUNsTUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBYkFBOzs7O0VBQUE7QUF3S0E7Ozs7RUFBQTtBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FjbE1BOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTtFQUFtRCxvQkFBQTtFQUFvQixNQUFBO0VBQU0sT0FBQTtFQUFPLFlBQUE7RUFBWSxXQUFBO0FDMmJoRztBRDNiMkc7RUFBdUIsZUFBQTtFQUFlLGFBQUE7QUNnY2pKO0FEaGM4SjtFQUE2QixhQUFBO0FDb2MzTDtBRHBjd007RUFBNEIsYUFBQTtFQUFhLGtCQUFBO0VBQWtCLGFBQUE7QUMwY25RO0FEMWNnUjtFQUFrQixrQkFBQTtFQUFrQixvQkFBQTtFQUFvQixzQkFBQTtFQUFzQixhQUFBO0VBQWEsYUFBQTtFQUFhLGVBQUE7RUFBZSxnQkFBQTtBQ29kdlk7QURwZHVaO0VBQXNCLGtCQUFBO0VBQWtCLE1BQUE7RUFBTSxTQUFBO0VBQVMsT0FBQTtFQUFPLFFBQUE7RUFBUSxhQUFBO0VBQWEsb0JBQUE7RUFBb0Isd0NBQUE7RUFBd0MsMERBQUE7RUFBMEQsVUFBQTtBQ2llaG1CO0FEamUwbUI7RUFBbUQsVUFBQTtBQ3FlN3BCO0FEcmV1cUI7RUFBOEM7SUFBbUQsWUFBQTtFQzBldHdCO0FBQ0Y7QUQzZW94QjtFQUEyQiwrQkFBQTtBQzhlL3lCO0FEOWUwMEI7RUFBaUcsVUFBQTtBQ2tmMzZCO0FEbGZxN0I7RUFBNkMsa0JBQUE7RUFBa0IsYUFBQTtFQUFhLGFBQUE7RUFBYSxzQkFBQTtFQUFzQixjQUFBO0VBQWMsZUFBQTtBQzJmbGpDO0FEM2Zpa0M7RUFBd0IsZUFBQTtFQUFlLFdBQUE7RUFBVyxrQkFBQTtBQ2lnQm5uQztBQ3JmQTs7OztFQUFBO0FBS0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRHdmRjtBRTVnQkE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QXRCQUE7Ozs7RUFBQTtBQXdLQTs7OztFQUFBO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QXVCbE1BOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FBQUE7Ozs7RUFBQTtBQUFBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBUkFBOzs7O0VBQUE7QVNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQU1BOzs7OztFQUFBO0FBT0E7RUFDRSxzQkFBQTtBZjJ0QkY7QWV4dEJBO0VBQ0UsbUJBQUE7QWYydEJGO0FleHRCQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FmMnRCRjtBZXh0QkE7OztFQUFBO0FBS0E7RUFDRSxpQkFBQTtFQUFtQixNQUFBO0VBQ25CLDhCQUFBO0VBQWdDLE1BQUE7QWY0dEJsQztBZXp0QkE7O0VBQUE7QUFJQTtFQUNFLFNBQUE7QWYydEJGO0FleHRCQTs7O0VBQUE7QUFLQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBZjB0QkY7QWV2dEJBOzs7RUFBQTtBQUtBO0VBQ0UsdUJBQUE7RUFBeUIsTUFBQTtFQUN6QixTQUFBO0VBQVcsTUFBQTtFQUNYLGlCQUFBO0VBQW1CLE1BQUE7QWY0dEJyQjtBZXp0QkE7OztFQUFBO0FBS0E7RUFDRSxpQ0FBQTtFQUFtQyxNQUFBO0VBQ25DLGNBQUE7RUFBZ0IsTUFBQTtBZjZ0QmxCO0FlMXRCQTs7RUFBQTtBQUlBO0VBQ0UsNkJBQUE7QWY0dEJGO0FlenRCQTs7O0VBQUE7QUFLQTtFQUNFLG1CQUFBO0VBQXFCLE1BQUE7RUFDckIsMEJBQUE7RUFBNEIsTUFBQTtFQUM1Qix5Q0FBQTtVQUFBLGlDQUFBO0VBQW1DLE1BQUE7QWY4dEJyQztBZTN0QkE7O0VBQUE7QUFJQTs7RUFFRSxtQkFBQTtBZjZ0QkY7QWUxdEJBOzs7RUFBQTtBQUtBOzs7RUFHRSxpQ0FBQTtFQUFtQyxNQUFBO0VBQ25DLGNBQUE7RUFBZ0IsTUFBQTtBZjh0QmxCO0FlM3RCQTs7RUFBQTtBQUlBO0VBQ0UsY0FBQTtBZjZ0QkY7QWUxdEJBOzs7RUFBQTtBQUtBOztFQUVFLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBZjR0QkY7QWV6dEJBO0VBQ0UsZUFBQTtBZjR0QkY7QWV6dEJBO0VBQ0UsV0FBQTtBZjR0QkY7QWV6dEJBOztFQUFBO0FBSUE7RUFDRSxrQkFBQTtBZjJ0QkY7QWV4dEJBOzs7RUFBQTtBQUtBOzs7OztFQUtFLG9CQUFBO0VBQXNCLE1BQUE7RUFDdEIsZUFBQTtFQUFpQixNQUFBO0VBQ2pCLGlCQUFBO0VBQW1CLE1BQUE7RUFDbkIsU0FBQTtFQUFXLE1BQUE7QWY4dEJiO0FlM3RCQTs7O0VBQUE7QUFLQTs7RUFDUSxNQUFBO0VBQ04saUJBQUE7QWY4dEJGO0FlM3RCQTs7O0VBQUE7QUFLQTs7RUFDUyxNQUFBO0VBQ1Asb0JBQUE7QWY4dEJGO0FlM3RCQTs7RUFBQTtBQUlBOzs7O0VBSUUsMEJBQUE7QWY2dEJGO0FlMXRCQTs7RUFBQTtBQUlBOzs7O0VBSUUsa0JBQUE7RUFDQSxVQUFBO0FmNHRCRjtBZXp0QkE7O0VBQUE7QUFJQTs7OztFQUlFLDhCQUFBO0FmMnRCRjtBZXh0QkE7O0VBQUE7QUFJQTtFQUNFLDhCQUFBO0FmMHRCRjtBZXZ0QkE7Ozs7O0VBQUE7QUFPQTtFQUNFLHNCQUFBO0VBQXdCLE1BQUE7RUFDeEIsY0FBQTtFQUFnQixNQUFBO0VBQ2hCLGNBQUE7RUFBZ0IsTUFBQTtFQUNoQixlQUFBO0VBQWlCLE1BQUE7RUFDakIsVUFBQTtFQUFZLE1BQUE7RUFDWixtQkFBQTtFQUFxQixNQUFBO0FmK3RCdkI7QWU1dEJBOztFQUFBO0FBSUE7RUFDRSx3QkFBQTtBZjh0QkY7QWUzdEJBOztFQUFBO0FBSUE7RUFDRSxjQUFBO0FmNnRCRjtBZTF0QkE7OztFQUFBO0FBS0E7O0VBRUUsc0JBQUE7RUFBd0IsTUFBQTtFQUN4QixVQUFBO0VBQVksTUFBQTtBZjh0QmQ7QWUzdEJBOztFQUFBO0FBSUE7O0VBRUUsWUFBQTtBZjZ0QkY7QWUxdEJBOzs7RUFBQTtBQUtBO0VBQ0UsNkJBQUE7RUFBK0IsTUFBQTtFQUMvQixvQkFBQTtFQUFzQixNQUFBO0FmOHRCeEI7QWUzdEJBOztFQUFBO0FBSUE7RUFDRSx3QkFBQTtBZjZ0QkY7QWUxdEJBOzs7RUFBQTtBQUtBO0VBQ0UsMEJBQUE7RUFBNEIsTUFBQTtFQUM1QixhQUFBO0VBQWUsTUFBQTtBZjh0QmpCO0FlM3RCQTs7RUFBQTtBQUlBO0VBQ0UsY0FBQTtBZjZ0QkY7QWUxdEJBOztFQUFBO0FBSUE7RUFDRSxrQkFBQTtBZjR0QkY7QWV6dEJBOztFQUFBO0FBSUE7RUFDRSxhQUFBO0FmMnRCRjtBZXh0QkE7O0VBQUE7QUFJQTtFQUNFLGFBQUE7QWYwdEJGO0FnQjdpQ0E7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQ0FBO0VBQW1CLDRFQUFBO0VBQ2pCLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQTZCLGFBQUE7RUFDN0IsOEJBQUE7QXBCc2tDRjtBcUIxa0NBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FyQjZrQ0o7QXFCMWtDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QXJCNmtDSjtBcUIxa0NBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QXJCNmtDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWFpbmFkbWluL21haW5hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnZ2xvYmFsL2NvbXBvbmVudHMnO1xuQGltcG9ydCAnZ2xvYmFsL292ZXJyaWRlcyc7XG5AaW1wb3J0ICdnbG9iYWwvYnJlYWtwb2ludHMnO1xuQGltcG9ydCAnZ2xvYmFsL3N0eWxlcyc7XG5cbkBtaXhpbiBuYi10aGVtZS1nbG9iYWwoKSB7XG4gIEBpbmNsdWRlIG5iLXRoZW1lLWNvbXBvbmVudHMoKTtcbiAgQGluY2x1ZGUgbmItdGhlbWUtb3ZlcnJpZGVzKCk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQudGhlbWUnO1xuQGltcG9ydCAnLi4vLi4vY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnRoZW1lJztcbkBpbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvY2FsZW5kYXIta2l0L2NhbGVuZGFyLWtpdC50aGVtZSc7XG5AaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC50aGVtZSc7XG5AaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQudGhlbWUnO1xuQGltcG9ydCAnLi4vLi4vY29tcG9uZW50cy9jYXJkL2ZsaXAtY2FyZC9mbGlwLWNhcmQuY29tcG9uZW50LnRoZW1lJztcbkBpbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvY2FyZC9yZXZlYWwtY2FyZC9yZXZlYWwtY2FyZC5jb21wb25lbnQudGhlbWUnO1xuQGltcG9ydCAnLi4vLi4vY29tcG9uZW50cy90YWJzZXQvdGFic2V0LmNvbXBvbmVudC50aGVtZSc7XG5AaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3JvdXRlLXRhYnNldC9yb3V0ZS10YWJzZXQuY29tcG9uZW50LnRoZW1lJztcbkBpbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC50aGVtZSc7XG5AaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3VzZXIvdXNlci5jb21wb25lbnQudGhlbWUnO1xuQGltcG9ydCAnLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL2FjdGlvbnMuY29tcG9uZW50LnRoZW1lJztcbkBpbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQudGhlbWUnO1xuQGltcG9ydCAnLi4vLi4vY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudGhlbWUnO1xuQGltcG9ydCAnLi4vLi4vY29tcG9uZW50cy90b2dnbGUvdG9nZ2xlLmNvbXBvbmVudC50aGVtZSc7XG5AaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnRoZW1lJztcbkBpbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvYmFkZ2UvYmFkZ2UuY29tcG9uZW50LnRoZW1lJztcbkBpbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRoZW1lJztcbkBpbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvY2hhdC9jaGF0LmNvbXBvbmVudC50aGVtZSc7XG5AaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQudGhlbWUnO1xuQGltcG9ydCAnLi4vLi4vY29tcG9uZW50cy9zdGVwcGVyL3N0ZXBwZXIuY29tcG9uZW50LnRoZW1lJztcbkBpbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQudGhlbWUnO1xuQGltcG9ydCAnLi4vLi4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50aGVtZSc7XG5AaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQudGhlbWUnO1xuQGltcG9ydCAnLi4vLi4vY29tcG9uZW50cy9pbnB1dC9pbnB1dC5kaXJlY3RpdmUudGhlbWUnO1xuQGltcG9ydCAnLi4vLi4vY29tcG9uZW50cy9jZGsvb3ZlcmxheS9vdmVybGF5LnRoZW1lJztcbkBpbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC50aGVtZSc7XG5AaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL2NvbnRleHQtbWVudS9jb250ZXh0LW1lbnUuY29tcG9uZW50LnRoZW1lJztcbkBpbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudGhlbWUnO1xuQGltcG9ydCAnLi4vLi4vY29tcG9uZW50cy9vcHRpb24vb3B0aW9uLWxpc3QuY29tcG9uZW50LnRoZW1lJztcbkBpbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvdG9hc3RyL3RvYXN0LmNvbXBvbmVudC50aGVtZSc7XG5AaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQudGhlbWUnO1xuQGltcG9ydCAnLi4vLi4vY29tcG9uZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudC50aGVtZSc7XG5AaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3JhZGlvL3JhZGlvLmNvbXBvbmVudC50aGVtZSc7XG5AaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3RyZWUtZ3JpZC90cmVlLWdyaWQuY29tcG9uZW50LnRoZW1lJztcbkBpbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC50aGVtZSc7XG5AaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL2Zvcm0tZmllbGQvZm9ybS1maWVsZC5jb21wb25lbnQudGhlbWUnO1xuXG5AbWl4aW4gbmItdGhlbWUtY29tcG9uZW50cygpIHtcblxuICBAaW5jbHVkZSBuYi1sYXlvdXQtdGhlbWUoKTtcbiAgQGluY2x1ZGUgbmItc2lkZWJhci10aGVtZSgpO1xuICBAaW5jbHVkZSBuYi1jYWxlbmRhci1raXQtdGhlbWUoKTtcbiAgQGluY2x1ZGUgbmItY2FsZW5kYXItdGhlbWUoKTtcbiAgQGluY2x1ZGUgbmItY2FyZC10aGVtZSgpO1xuICBAaW5jbHVkZSBuZC1yZXZlYWwtY2FyZC10aGVtZSgpO1xuICBAaW5jbHVkZSBuZC1mbGlwLWNhcmQtdGhlbWUoKTtcbiAgQGluY2x1ZGUgbmItdGFic2V0LXRoZW1lKCk7XG4gIEBpbmNsdWRlIG5iLXJvdXRlLXRhYnNldC10aGVtZSgpO1xuICBAaW5jbHVkZSBuYi1tZW51LXRoZW1lKCk7XG4gIEBpbmNsdWRlIG5iLXVzZXItdGhlbWUoKTtcbiAgQGluY2x1ZGUgbmItYWN0aW9ucy10aGVtZSgpO1xuICBAaW5jbHVkZSBuYi1zZWFyY2gtdGhlbWUoKTtcbiAgQGluY2x1ZGUgbmItc3Bpbm5lci10aGVtZSgpO1xuICBAaW5jbHVkZSBuYi1jaGVja2JveC10aGVtZSgpO1xuICBAaW5jbHVkZSBuYi10b2dnbGUtdGhlbWUoKTtcbiAgQGluY2x1ZGUgbmItcHJvZ3Jlc3MtYmFyLXRoZW1lKCk7XG4gIEBpbmNsdWRlIG5iLWJhZGdlLXRoZW1lKCk7XG4gIEBpbmNsdWRlIG5iLXN0ZXBwZXItdGhlbWUoKTtcbiAgQGluY2x1ZGUgbmItYWxlcnQtdGhlbWUoKTtcbiAgQGluY2x1ZGUgbmItY2hhdC10aGVtZSgpO1xuICBAaW5jbHVkZSBuYi1hY2NvcmRpb24tdGhlbWUoKTtcbiAgQGluY2x1ZGUgbmItYnV0dG9ucy10aGVtZSgpO1xuICBAaW5jbHVkZSBuYi1saXN0LXRoZW1lKCk7XG4gIEBpbmNsdWRlIG5iLWlucHV0LXRoZW1lKCk7XG4gIEBpbmNsdWRlIG5iLW92ZXJsYXktdGhlbWUoKTtcbiAgQGluY2x1ZGUgbmItcG9wb3Zlci10aGVtZSgpO1xuICBAaW5jbHVkZSBuYi1jb250ZXh0LW1lbnUtdGhlbWUoKTtcbiAgQGluY2x1ZGUgbmItc2VsZWN0LXRoZW1lKCk7XG4gIEBpbmNsdWRlIG5iLW9wdGlvbi1saXN0LXRoZW1lKCk7XG4gIEBpbmNsdWRlIG5iLXRvYXN0LXRoZW1lKCk7XG4gIEBpbmNsdWRlIG5iLXRvb2x0aXAtdGhlbWUoKTtcbiAgQGluY2x1ZGUgbmItZGF0ZXBpY2tlci10aGVtZSgpO1xuICBAaW5jbHVkZSBuYi1yYWRpby10aGVtZSgpO1xuICBAaW5jbHVkZSBuYi10cmVlLWdyaWQtdGhlbWUoKTtcbiAgQGluY2x1ZGUgbmItaWNvbi10aGVtZSgpO1xuICBAaW5jbHVkZSBuYi1mb3JtLWZpZWxkLXRoZW1lKCk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiB3aW5kb3ctbW9kZSgkcGFkZGluZy10b3ApIHtcbiAgcGFkZGluZy10b3A6ICRwYWRkaW5nLXRvcDtcblxuICBuYi1sYXlvdXQtaGVhZGVyLmZpeGVkIHtcbiAgICB0b3A6ICRwYWRkaW5nLXRvcDtcbiAgfVxuXG4gIG5iLWxheW91dC1oZWFkZXIuZml4ZWQgfiAubGF5b3V0LWNvbnRhaW5lciBuYi1zaWRlYmFyIC5tYWluLWNvbnRhaW5lci1maXhlZCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skcGFkZGluZy10b3B9IC0gI3tuYi10aGVtZShoZWFkZXItaGVpZ2h0KX0pO1xuICAgIHRvcDogY2FsYygjeyRwYWRkaW5nLXRvcH0gKyAje25iLXRoZW1lKGhlYWRlci1oZWlnaHQpfSk7XG4gIH1cblxuICBuYi1zaWRlYmFyLmZpeGVkIHtcbiAgICBsZWZ0OiBjYWxjKCgxMDB2dyAtICN7bmItdGhlbWUobGF5b3V0LXdpbmRvdy1tb2RlLW1heC13aWR0aCl9KSAvIDIpO1xuICB9XG5cbiAgLmxheW91dCAubGF5b3V0LWNvbnRhaW5lciB7XG4gICAgbmItc2lkZWJhci5maXhlZC5yaWdodCB7XG4gICAgICByaWdodDogY2FsYygoMTAwdncgLSAje25iLXRoZW1lKGxheW91dC13aW5kb3ctbW9kZS1tYXgtd2lkdGgpfSkgLyAyKTtcbiAgICB9XG5cbiAgICBuYi1zaWRlYmFyLmZpeGVkIHtcbiAgICAgIHRvcDogY2FsYygje25iLXRoZW1lKGhlYWRlci1oZWlnaHQpfSArICN7JHBhZGRpbmctdG9wfSk7XG4gICAgfVxuICB9XG5cbiAgLnNjcm9sbGFibGUtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRwYWRkaW5nLXRvcH0pO1xuICAgIGJveC1zaGFkb3c6IG5iLXRoZW1lKGxheW91dC13aW5kb3ctc2hhZG93KTtcbiAgfVxufVxuXG5AbWl4aW4gbmItbGF5b3V0LXRoZW1lKCkge1xuXG4gIG5iLWxheW91dCAuc2Nyb2xsYWJsZS1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIG5iLXNjcm9sbGJhcnMoXG4gICAgICAgIG5iLXRoZW1lKGxheW91dC1zY3JvbGxiYXItY29sb3IpLFxuICAgICAgICBuYi10aGVtZShsYXlvdXQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IpLFxuICAgICAgICBuYi10aGVtZShsYXlvdXQtc2Nyb2xsYmFyLXdpZHRoKSk7XG4gIH1cblxuXG4gIG5iLWxheW91dC53aXRoLXNjcm9sbCAuc2Nyb2xsYWJsZS1jb250YWluZXIge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oc20pIHtcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICB9XG4gIH1cblxuICAubGF5b3V0IHtcbiAgICBtaW4td2lkdGg6IG5iLXRoZW1lKGxheW91dC13aW5kb3ctbW9kZS1taW4td2lkdGgpO1xuICB9XG5cbiAgbmItbGF5b3V0LndpbmRvdy1tb2RlIHtcblxuICAgIGJhY2tncm91bmQ6IG5iLXRoZW1lKGxheW91dC13aW5kb3ctbW9kZS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgIC5zY3JvbGxhYmxlLWNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IG5iLXRoZW1lKGxheW91dC13aW5kb3ctbW9kZS1tYXgtd2lkdGgpO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG4gICAgLmxheW91dCBuYi1sYXlvdXQtaGVhZGVyIHtcbiAgICAgIG1heC13aWR0aDogbmItdGhlbWUobGF5b3V0LXdpbmRvdy1tb2RlLW1heC13aWR0aCk7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICBuYXYge1xuICAgICAgICBtYXgtd2lkdGg6IG5iLXRoZW1lKGxheW91dC13aW5kb3ctbW9kZS1tYXgtd2lkdGgpO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBuYi10aGVtZShsYXlvdXQtd2luZG93LW1vZGUtbWF4LXdpZHRoKSArIDIwcHgpIHtcbiAgICAgICRwYWRkaW5nLXRvcDogbmItdGhlbWUobGF5b3V0LXdpbmRvdy1tb2RlLXBhZGRpbmctdG9wKSAvIDQ7XG5cbiAgICAgIEBpbmNsdWRlIHdpbmRvdy1tb2RlKCRwYWRkaW5nLXRvcCk7XG5cbiAgICAgIG5iLWxheW91dC53aXRoLXNjcm9sbCB7XG4gICAgICAgIC5zY3JvbGxhYmxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skcGFkZGluZy10b3B9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG5iLXRoZW1lKGxheW91dC13aW5kb3ctbW9kZS1tYXgtd2lkdGgpICsgMTUwcHgpIHtcbiAgICAgICRwYWRkaW5nLXRvcDogbmItdGhlbWUobGF5b3V0LXdpbmRvdy1tb2RlLXBhZGRpbmctdG9wKSAvIDI7XG5cbiAgICAgIEBpbmNsdWRlIHdpbmRvdy1tb2RlKCRwYWRkaW5nLXRvcCk7XG5cbiAgICAgIG5iLWxheW91dC53aXRoLXNjcm9sbCB7XG4gICAgICAgIC5zY3JvbGxhYmxlLWNvbnRhaW5lciB7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skcGFkZGluZy10b3B9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG5iLXRoZW1lKGxheW91dC13aW5kb3ctbW9kZS1tYXgtd2lkdGgpICsgMzAwcHgpIHtcbiAgICAgICRwYWRkaW5nLXRvcDogbmItdGhlbWUobGF5b3V0LXdpbmRvdy1tb2RlLXBhZGRpbmctdG9wKTtcblxuICAgICAgQGluY2x1ZGUgd2luZG93LW1vZGUoJHBhZGRpbmctdG9wKTtcblxuICAgICAgbmItbGF5b3V0LndpdGgtc2Nyb2xsIHtcbiAgICAgICAgLnNjcm9sbGFibGUtY29udGFpbmVyIHtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRwYWRkaW5nLXRvcH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmItbGF5b3V0IC5sYXlvdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGxheW91dC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBjb2xvcjogbmItdGhlbWUobGF5b3V0LXRleHQtY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiBuYi10aGVtZShsYXlvdXQtdGV4dC1mb250LWZhbWlseSk7XG4gICAgZm9udC1zaXplOiBuYi10aGVtZShsYXlvdXQtdGV4dC1mb250LXNpemUpO1xuICAgIGZvbnQtd2VpZ2h0OiBuYi10aGVtZShsYXlvdXQtdGV4dC1mb250LXdlaWdodCk7XG4gICAgbGluZS1oZWlnaHQ6IG5iLXRoZW1lKGxheW91dC10ZXh0LWxpbmUtaGVpZ2h0KTtcbiAgICBtaW4taGVpZ2h0OiBuYi10aGVtZShsYXlvdXQtbWluLWhlaWdodCk7XG5cbiAgICAubGF5b3V0LWNvbnRhaW5lciB7XG5cbiAgICAgIG5iLXNpZGViYXIge1xuICAgICAgICAmLmZpeGVkLFxuICAgICAgICAubWFpbi1jb250YWluZXItZml4ZWQge1xuICAgICAgICAgIHRvcDogbmItdGhlbWUoaGVhZGVyLWhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNvbnRlbnQge1xuXG4gICAgICAgIG5iLWxheW91dC1mb290ZXIge1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5iLXRoZW1lKGZvb3Rlci1zaGFkb3cpO1xuXG4gICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGZvb3Rlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IG5iLXRoZW1lKGZvb3Rlci1kaXZpZGVyLXdpZHRoKSBuYi10aGVtZShmb290ZXItZGl2aWRlci1zdHlsZSkgbmItdGhlbWUoZm9vdGVyLWRpdmlkZXItY29sb3IpO1xuICAgICAgICAgICAgY29sb3I6IG5iLXRoZW1lKGZvb3Rlci10ZXh0LWNvbG9yKTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBuYi10aGVtZShmb290ZXItdGV4dC1mb250LWZhbWlseSk7XG4gICAgICAgICAgICBmb250LXNpemU6IG5iLXRoZW1lKGZvb3Rlci10ZXh0LWZvbnQtc2l6ZSk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbmItdGhlbWUoZm9vdGVyLXRleHQtZm9udC13ZWlnaHQpO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5iLXRoZW1lKGZvb3Rlci10ZXh0LWxpbmUtaGVpZ2h0KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IG5iLXRoZW1lKGZvb3Rlci1wYWRkaW5nKTtcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiBuYi10aGVtZShmb290ZXItdGV4dC1oaWdobGlnaHQtY29sb3IpO1xuXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGhvdmVyLWZvY3VzLWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IG5iLXRoZW1lKGZvb3Rlci10ZXh0LWhpZ2hsaWdodC1jb2xvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmNlbnRlciB7XG4gICAgICAgICAgd2lkdGg6IG5iLXRoZW1lKGxheW91dC1jb250ZW50LXdpZHRoKTtcbiAgICAgICAgICBmbGV4OiAwIDEwMCBuYi10aGVtZShsYXlvdXQtY29udGVudC13aWR0aCkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb2x1bW5zIG5iLWxheW91dC1jb2x1bW4ge1xuICAgICAgICAgIHBhZGRpbmc6IG5iLXRoZW1lKGxheW91dC1wYWRkaW5nKTtcblxuICAgICAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xuICAgICAgICAgICAgcGFkZGluZzogbmItdGhlbWUobGF5b3V0LW1lZGl1bS1wYWRkaW5nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oc20pIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IG5iLXRoZW1lKGxheW91dC1zbWFsbC1wYWRkaW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuYi1sYXlvdXQtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShoZWFkZXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgY29sb3I6IG5iLXRoZW1lKGhlYWRlci10ZXh0LWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogbmItdGhlbWUoaGVhZGVyLXRleHQtZm9udC1mYW1pbHkpO1xuICAgIGZvbnQtc2l6ZTogbmItdGhlbWUoaGVhZGVyLXRleHQtZm9udC1zaXplKTtcbiAgICBmb250LXdlaWdodDogbmItdGhlbWUoaGVhZGVyLXRleHQtZm9udC13ZWlnaHQpO1xuICAgIGxpbmUtaGVpZ2h0OiBuYi10aGVtZShoZWFkZXItdGV4dC1saW5lLWhlaWdodCk7XG5cbiAgICBuYXYge1xuICAgICAgY29sb3I6IG5iLXRoZW1lKGhlYWRlci10ZXh0LWNvbG9yKTtcbiAgICAgIGJveC1zaGFkb3c6IG5iLXRoZW1lKGhlYWRlci1zaGFkb3cpO1xuICAgICAgaGVpZ2h0OiBuYi10aGVtZShoZWFkZXItaGVpZ2h0KTtcbiAgICAgIHBhZGRpbmc6IG5iLXRoZW1lKGhlYWRlci1wYWRkaW5nKTtcblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiBuYi10aGVtZShoZWFkZXItdGV4dC1jb2xvcik7XG5cbiAgICAgICAgQGluY2x1ZGUgaG92ZXItZm9jdXMtYWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogbmItdGhlbWUoaGVhZGVyLXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJiB+IC5sYXlvdXQtY29udGFpbmVyIHtcbiAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoI3tuYi10aGVtZShsYXlvdXQtbWluLWhlaWdodCl9IC0gI3tuYi10aGVtZShoZWFkZXItaGVpZ2h0KX0pO1xuICAgIH1cblxuICAgICYuZml4ZWQgfiAubGF5b3V0LWNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nLXRvcDogbmItdGhlbWUoaGVhZGVyLWhlaWdodCk7XG4gICAgICBtaW4taGVpZ2h0OiBuYi10aGVtZShsYXlvdXQtbWluLWhlaWdodCk7XG4gICAgfVxuXG4gICAgJi5maXhlZCB+IC5sYXlvdXQtY29udGFpbmVyIG5iLXNpZGViYXIgLm1haW4tY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogY2FsYygje25iLXRoZW1lKHNpZGViYXItaGVpZ2h0KX0gLSAje25iLXRoZW1lKGhlYWRlci1oZWlnaHQpfSk7XG4gICAgfVxuICB9XG5cbiAgbmItbGF5b3V0LndpdGgtc3ViaGVhZGVyIHtcbiAgICBuYi1zaWRlYmFyIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICBib3gtc2hhZG93OiBub25lOyAvLyBzbyB0aGF0IHdlIGRvbid0IGhhdmUgYSBzaGFkb3cgb3ZlciB0aGUgaGVhZGVyIGluIHRoaXMgbW9kZVxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AbWl4aW4gbmItc2lkZWJhci10aGVtZSgpIHtcblxuICBuYi1zaWRlYmFyIHtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKHNpZGViYXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgYm94LXNoYWRvdzogbmItdGhlbWUoc2lkZWJhci1zaGFkb3cpO1xuICAgIGNvbG9yOiBuYi10aGVtZShzaWRlYmFyLXRleHQtY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiBuYi10aGVtZShzaWRlYmFyLXRleHQtZm9udC1mYW1pbHkpO1xuICAgIGZvbnQtc2l6ZTogbmItdGhlbWUoc2lkZWJhci10ZXh0LWZvbnQtc2l6ZSk7XG4gICAgZm9udC13ZWlnaHQ6IG5iLXRoZW1lKHNpZGViYXItdGV4dC1mb250LXdlaWdodCk7XG4gICAgbGluZS1oZWlnaHQ6IG5iLXRoZW1lKHNpZGViYXItdGV4dC1saW5lLWhlaWdodCk7XG4gICAgd2lkdGg6IG5iLXRoZW1lKHNpZGViYXItd2lkdGgpO1xuXG4gICAgLm1haW4tY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogbmItdGhlbWUoc2lkZWJhci1oZWlnaHQpO1xuICAgICAgd2lkdGg6IG5iLXRoZW1lKHNpZGViYXItd2lkdGgpO1xuICAgIH1cblxuICAgIC5zY3JvbGxhYmxlIHtcbiAgICAgIHBhZGRpbmc6IG5iLXRoZW1lKHNpZGViYXItcGFkZGluZyk7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgLy8gaW9zIG9wdGltaXNhdGlvblxuICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBuYi1zY3JvbGxiYXJzKFxuICAgICAgICAgIG5iLXRoZW1lKHNpZGViYXItc2Nyb2xsYmFyLWNvbG9yKSxcbiAgICAgICAgICBuYi10aGVtZShzaWRlYmFyLXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yKSxcbiAgICAgICAgICBuYi10aGVtZShzaWRlYmFyLXNjcm9sbGJhci13aWR0aCkpO1xuICAgIH1cblxuICAgIC8vIFRPRE86IHdpZHRoIHVzZWQgdG8gdXNlIHRyYW5zaXRpb24gb24gd2lkdGhcbiAgICAmLmNvbGxhcHNlZCB7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAubWFpbi1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cbiAgICAgIC5zY3JvbGxhYmxlIHtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIG5iLXNpZGViYXItaGVhZGVyLCAgbmItc2lkZWJhci1mb290ZXIge1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmNvbXBhY3RlZCB7XG4gICAgICB3aWR0aDogbmItdGhlbWUoc2lkZWJhci13aWR0aC1jb21wYWN0KTtcbiAgICAgIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiBuYi10aGVtZShzaWRlYmFyLXdpZHRoLWNvbXBhY3QpO1xuICAgICAgfVxuXG4gICAgICBuYi1tZW51IHtcbiAgICAgICAgd2lkdGg6IG5iLXRoZW1lKHNpZGViYXItd2lkdGgtY29tcGFjdCk7XG5cbiAgICAgICAgLm1lbnUtaXRlbSBhLmFjdGl2ZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgQGluY2x1ZGUgbmItbHRyKGxlZnQsIDApO1xuICAgICAgICAgICAgQGluY2x1ZGUgbmItcnRsKHJpZ2h0LCAwKTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBuYi10aGVtZShzaWRlYmFyLW1lbnUtaXRlbS1oaWdobGlnaHQtY29sb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgID4gLm1lbnUtaXRlbXMgPiAubWVudS1pdGVtID4gYSB7XG4gICAgICAgICAgc3BhbiwgLmV4cGFuZC1zdGF0ZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51LWl0ZW1zID4gLm1lbnUtaXRlbSB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDFzIGVhc2U7XG5cbiAgICAgICAgICAmLm1lbnUtZ3JvdXAge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJiA+IC5leHBhbmRlZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICAvLyB3ZSBuZWVkIHRvIHB1bGwgdGhlIGNvbnRlbnRcbiAgICAgICYubGVmdC5maXhlZCB+IC5jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IG5iLXRoZW1lKHNpZGViYXItd2lkdGgtY29tcGFjdCk7XG4gICAgICB9XG5cbiAgICAgICYuZml4ZWQucmlnaHQgfiAuY29udGVudCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IG5iLXRoZW1lKHNpZGViYXItd2lkdGgtY29tcGFjdCk7XG4gICAgICB9XG5cbiAgICAgICYubGVmdC5maXhlZCB+IC5jb250ZW50LmNlbnRlciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogbmItdGhlbWUoc2lkZWJhci13aWR0aC1jb21wYWN0KTtcbiAgICAgIH1cblxuICAgICAgJi5maXhlZC5yaWdodCB+IC5jb250ZW50LmNlbnRlciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogbmItdGhlbWUoc2lkZWJhci13aWR0aC1jb21wYWN0KTtcbiAgICAgIH1cblxuICAgICAgJi5zdGFydC5maXhlZCB+IC5jb250ZW50IHtcbiAgICAgICAgQGluY2x1ZGUgbmItbHRyKG1hcmdpbi1sZWZ0LCBuYi10aGVtZShzaWRlYmFyLXdpZHRoLWNvbXBhY3QpKTtcbiAgICAgICAgQGluY2x1ZGUgbmItcnRsKG1hcmdpbi1yaWdodCwgbmItdGhlbWUoc2lkZWJhci13aWR0aC1jb21wYWN0KSk7XG4gICAgICB9XG5cbiAgICAgICYuZml4ZWQuZW5kIH4gLmNvbnRlbnQge1xuICAgICAgICBAaW5jbHVkZSBuYi1sdHIobWFyZ2luLXJpZ2h0LG5iLXRoZW1lKHNpZGViYXItd2lkdGgtY29tcGFjdCkpO1xuICAgICAgICBAaW5jbHVkZSBuYi1ydGwobWFyZ2luLWxlZnQsIG5iLXRoZW1lKHNpZGViYXItd2lkdGgtY29tcGFjdCkpO1xuICAgICAgfVxuXG4gICAgICAmLnN0YXJ0LmZpeGVkIH4gLmNvbnRlbnQuY2VudGVyIHtcbiAgICAgICAgQGluY2x1ZGUgbmItbHRyKHBhZGRpbmctbGVmdCwgbmItdGhlbWUoc2lkZWJhci13aWR0aC1jb21wYWN0KSk7XG4gICAgICAgIEBpbmNsdWRlIG5iLXJ0bChwYWRkaW5nLXJpZ2h0LCBuYi10aGVtZShzaWRlYmFyLXdpZHRoLWNvbXBhY3QpKTtcbiAgICAgIH1cblxuICAgICAgJi5maXhlZC5lbmQgfiAuY29udGVudC5jZW50ZXIge1xuICAgICAgICBAaW5jbHVkZSBuYi1sdHIocGFkZGluZy1yaWdodCwgbmItdGhlbWUoc2lkZWJhci13aWR0aC1jb21wYWN0KSk7XG4gICAgICAgIEBpbmNsdWRlIG5iLXJ0bChwYWRkaW5nLWxlZnQsIG5iLXRoZW1lKHNpZGViYXItd2lkdGgtY29tcGFjdCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuZml4ZWQubGVmdC5jb2xsYXBzZWQgKyAuY29udGVudCxcbiAgICAmLmZpeGVkLnN0YXJ0LmNvbGxhcHNlZCArIC5jb250ZW50IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgICYuZml4ZWQucmlnaHQuY29sbGFwc2VkICsgLmNvbnRlbnQsXG4gICAgJi5maXhlZC5lbmQuY29sbGFwc2VkICsgLmNvbnRlbnQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cblxuICAgICYuZXhwYW5kZWQge1xuICAgICAgd2lkdGg6IG5iLXRoZW1lKHNpZGViYXItd2lkdGgpO1xuICAgICAgPiAuc2Nyb2xsYWJsZSB7XG4gICAgICAgIHdpZHRoOiBuYi10aGVtZShzaWRlYmFyLXdpZHRoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuYi1zaWRlYmFyLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiBuYi10aGVtZShzaWRlYmFyLXBhZGRpbmcpO1xuICAgICAgaGVpZ2h0OiBuYi10aGVtZShzaWRlYmFyLWhlYWRlci1oZWlnaHQpO1xuICAgIH1cblxuICAgIG5iLXNpZGViYXItZm9vdGVyIHtcbiAgICAgIHBhZGRpbmc6IG5iLXRoZW1lKHNpZGViYXItcGFkZGluZyk7XG4gICAgICBoZWlnaHQ6IG5iLXRoZW1lKHNpZGViYXItZm9vdGVyLWhlaWdodCk7XG4gICAgfVxuXG4gICAgbmItbWVudSB7XG4gICAgICBtYXJnaW46IDAgLSN7bmItdGhlbWUoc2lkZWJhci1wYWRkaW5nKX0gLSN7bmItdGhlbWUoc2lkZWJhci1wYWRkaW5nKX07XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4vY29tcG9uZW50cy9jYWxlbmRhci1uYXZpZ2F0aW9uL2NhbGVuZGFyLW5hdmlnYXRpb24udGhlbWUnO1xuQGltcG9ydCAnLi9jb21wb25lbnRzL2NhbGVuZGFyLXBpY2tlci9jYWxlbmRhci1waWNrZXIuY29tcG9uZW50LnRoZW1lJztcbkBpbXBvcnQgJy4vY29tcG9uZW50cy9jYWxlbmRhci1kYXlzLW5hbWVzL2NhbGVuZGFyLWRheXMtbmFtZXMuY29tcG9uZW50LnRoZW1lJztcbkBpbXBvcnQgJy4vY29tcG9uZW50cy9jYWxlbmRhci13ZWVrLW51bWJlci9jYWxlbmRhci13ZWVrLW51bWJlci5jb21wb25lbnQudGhlbWUnO1xuQGltcG9ydCAnLi9jb21wb25lbnRzL2NhbGVuZGFyLWRheS1waWNrZXIvY2FsZW5kYXItZGF5LXBpY2tlci5jb21wb25lbnQudGhlbWUnO1xuQGltcG9ydCAnLi9jb21wb25lbnRzL2NhbGVuZGFyLWNlbGwudGhlbWUnO1xuXG5AbWl4aW4gbmItY2FsZW5kYXIta2l0LXRoZW1lKCkge1xuICBAaW5jbHVkZSBuYi1jYWxlbmRhci1uYXZpZ2F0aW9uLXRoZW1lKCk7XG4gIEBpbmNsdWRlIG5iLWNhbGVuZGFyLXBpY2tlci10aGVtZSgpO1xuICBAaW5jbHVkZSBuYi1jYWxlbmRhci1kYXlzLW5hbWVzLXRoZW1lKCk7XG4gIEBpbmNsdWRlIG5iLWNhbGVuZGFyLXdlZWstbnVtYmVycy10aGVtZSgpO1xuICBAaW5jbHVkZSBuYi1jYWxlbmRhci1kYXktcGlja2VyLXRoZW1lKCk7XG4gIEBpbmNsdWRlIG5iLWNhbGVuZGFyLWNlbGwtdGhlbWUoKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLWNhbGVuZGFyLW5hdmlnYXRpb24tdGhlbWUoKSB7XG4gIG5iLWNhbGVuZGFyLXZpZXctbW9kZSxcbiAgbmItY2FsZW5kYXItcGFnZWFibGUtbmF2aWdhdGlvbiB7XG4gICAgW25iQnV0dG9uXS5hcHBlYXJhbmNlLWdob3N0LnN0YXR1cy1iYXNpYyB7XG4gICAgICAmLFxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMsXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiBuYi10aGVtZShjYWxlbmRhci1uYXZpZ2F0aW9uLXRleHQtY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogbmItdGhlbWUoY2FsZW5kYXItbmF2aWdhdGlvbi10ZXh0LWZvbnQtZmFtaWx5KTtcbiAgICAgICAgZm9udC1zaXplOiBuYi10aGVtZShjYWxlbmRhci1uYXZpZ2F0aW9uLXRpdGxlLXRleHQtZm9udC1zaXplKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5iLXRoZW1lKGNhbGVuZGFyLW5hdmlnYXRpb24tdGl0bGUtdGV4dC1mb250LXdlaWdodCk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBuYi10aGVtZShjYWxlbmRhci1uYXZpZ2F0aW9uLXRpdGxlLXRleHQtbGluZS1oZWlnaHQpO1xuICAgICAgfVxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgICYsXG4gICAgICAgICY6bm90KDpob3Zlcik6bm90KDphY3RpdmUpIHtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmItY2FsZW5kYXItcGFnZWFibGUtbmF2aWdhdGlvbiB7XG4gICAgQGluY2x1ZGUgbmItbHRyKG1hcmdpbi1sZWZ0LCBhdXRvKTtcbiAgICBAaW5jbHVkZSBuYi1ydGwobWFyZ2luLXJpZ2h0LCBhdXRvKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AbWl4aW4gbmItY2FsZW5kYXItcGlja2VyLXRoZW1lKCkge1xuICBuYi1jYWxlbmRhci1waWNrZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmctdG9wOiBuYi10aGVtZShjYWxlbmRhci1waWNrZXItcGFkZGluZy10b3ApO1xuICAgIHBhZGRpbmctYm90dG9tOiBuYi10aGVtZShjYWxlbmRhci1waWNrZXItcGFkZGluZy1ib3R0b20pO1xuXG4gICAgQGluY2x1ZGUgbmItbHRyKCkge1xuICAgICAgcGFkZGluZy1yaWdodDogbmItdGhlbWUoY2FsZW5kYXItcGlja2VyLXBhZGRpbmctZW5kKTtcbiAgICAgIHBhZGRpbmctbGVmdDogbmItdGhlbWUoY2FsZW5kYXItcGlja2VyLXBhZGRpbmctc3RhcnQpO1xuICAgIH07XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgcGFkZGluZy1yaWdodDogbmItdGhlbWUoY2FsZW5kYXItcGlja2VyLXBhZGRpbmctc3RhcnQpO1xuICAgICAgcGFkZGluZy1sZWZ0OiBuYi10aGVtZShjYWxlbmRhci1waWNrZXItcGFkZGluZy1lbmQpO1xuICAgIH07XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLWNhbGVuZGFyLWRheXMtbmFtZXMtdGhlbWUoKSB7XG4gIG5iLWNhbGVuZGFyLWRheXMtbmFtZXMge1xuICAgIGJhY2tncm91bmQ6IG5iLXRoZW1lKGNhbGVuZGFyLXdlZWtkYXktYmFja2dyb3VuZCk7XG4gICAgJGJvcmRlcjogbmItdGhlbWUoY2FsZW5kYXItd2Vla2RheS1kaXZpZGVyLXdpZHRoKSBzb2xpZCBuYi10aGVtZShjYWxlbmRhci13ZWVrZGF5LWRpdmlkZXItY29sb3IpO1xuICAgIGJvcmRlci10b3A6ICRib3JkZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogJGJvcmRlcjtcblxuICAgIEBpbmNsdWRlIG5iLWx0cigpIHtcbiAgICAgIHBhZGRpbmctbGVmdDogbmItdGhlbWUoY2FsZW5kYXItcGlja2VyLXBhZGRpbmctc3RhcnQpO1xuICAgICAgcGFkZGluZy1yaWdodDogbmItdGhlbWUoY2FsZW5kYXItcGlja2VyLXBhZGRpbmctZW5kKTtcbiAgICB9O1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIHBhZGRpbmctbGVmdDogbmItdGhlbWUoY2FsZW5kYXItcGlja2VyLXBhZGRpbmctZW5kKTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IG5iLXRoZW1lKGNhbGVuZGFyLXBpY2tlci1wYWRkaW5nLXN0YXJ0KTtcbiAgICB9O1xuXG4gICAgLmRheSB7XG4gICAgICB3aWR0aDogbmItdGhlbWUoY2FsZW5kYXItd2Vla2RheS13aWR0aCk7XG4gICAgICBoZWlnaHQ6IG5iLXRoZW1lKGNhbGVuZGFyLXdlZWtkYXktaGVpZ2h0KTtcbiAgICAgIGNvbG9yOiBuYi10aGVtZShjYWxlbmRhci13ZWVrZGF5LXRleHQtY29sb3IpO1xuICAgICAgZm9udC1zaXplOiBuYi10aGVtZShjYWxlbmRhci13ZWVrZGF5LXRleHQtZm9udC1zaXplKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBuYi10aGVtZShjYWxlbmRhci13ZWVrZGF5LXRleHQtZm9udC13ZWlnaHQpO1xuICAgICAgbGluZS1oZWlnaHQ6IG5iLXRoZW1lKGNhbGVuZGFyLXdlZWtkYXktdGV4dC1saW5lLWhlaWdodCk7XG5cbiAgICAgICYuaG9saWRheSB7XG4gICAgICAgIGNvbG9yOiBuYi10aGVtZShjYWxlbmRhci13ZWVrZGF5LWhvbGlkYXktdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5zaXplLWxhcmdlIC5kYXkge1xuICAgICAgd2lkdGg6IG5iLXRoZW1lKGNhbGVuZGFyLXdlZWtkYXktbGFyZ2Utd2lkdGgpO1xuICAgICAgaGVpZ2h0OiBuYi10aGVtZShjYWxlbmRhci13ZWVrZGF5LWxhcmdlLWhlaWdodCk7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi1jYWxlbmRhci13ZWVrLW51bWJlcnMtdGhlbWUoKSB7XG4gIG5iLWNhbGVuZGFyLXdlZWstbnVtYmVycyB7XG4gICAgYmFja2dyb3VuZDogbmItdGhlbWUoY2FsZW5kYXItd2Vla251bWJlci1iYWNrZ3JvdW5kKTtcbiAgICBmb250LXNpemU6IG5iLXRoZW1lKGNhbGVuZGFyLXdlZWtudW1iZXItdGV4dC1mb250LXNpemUpO1xuICAgIGZvbnQtd2VpZ2h0OiBuYi10aGVtZShjYWxlbmRhci13ZWVrbnVtYmVyLXRleHQtZm9udC13ZWlnaHQpO1xuICAgIGxpbmUtaGVpZ2h0OiBuYi10aGVtZShjYWxlbmRhci13ZWVrbnVtYmVyLXRleHQtbGluZS1oZWlnaHQpO1xuICAgIGNvbG9yOiBuYi10aGVtZShjYWxlbmRhci13ZWVrbnVtYmVyLXRleHQtY29sb3IpO1xuICAgIHBhZGRpbmctYm90dG9tOiBuYi10aGVtZShjYWxlbmRhci1waWNrZXItcGFkZGluZy1ib3R0b20pO1xuXG4gICAgLnNpZ24tY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgJGJvcmRlcjogbmItdGhlbWUoY2FsZW5kYXItd2Vla251bWJlci1kaXZpZGVyLXdpZHRoKSBzb2xpZCBuYi10aGVtZShjYWxlbmRhci13ZWVrbnVtYmVyLWRpdmlkZXItY29sb3IpO1xuICAgICAgYm9yZGVyLXRvcDogJGJvcmRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206ICRib3JkZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiBuYi10aGVtZShjYWxlbmRhci1waWNrZXItcGFkZGluZy10b3ApO1xuICAgIH1cblxuICAgIC5zaWduLFxuICAgIC53ZWVrLW51bWJlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgaGVpZ2h0OiBuYi10aGVtZShjYWxlbmRhci13ZWVrbnVtYmVyLWhlaWdodCk7XG4gICAgICB3aWR0aDogbmItdGhlbWUoY2FsZW5kYXItd2Vla251bWJlci13aWR0aCk7XG4gICAgfVxuXG4gICAgJi5zaXplLWxhcmdlIHtcbiAgICAgIC5zaWduLFxuICAgICAgLndlZWstbnVtYmVyIHtcbiAgICAgICAgaGVpZ2h0OiBuYi10aGVtZShjYWxlbmRhci13ZWVrbnVtYmVyLWxhcmdlLWhlaWdodCk7XG4gICAgICAgIHdpZHRoOiBuYi10aGVtZShjYWxlbmRhci13ZWVrbnVtYmVyLWxhcmdlLXdpZHRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLWNhbGVuZGFyLWRheS1waWNrZXItdGhlbWUge1xuICBuYi1jYWxlbmRhci1kYXktcGlja2VyIG5iLWNhbGVuZGFyLXdlZWstbnVtYmVycyB7XG4gICAgJGJvcmRlcjogbmItdGhlbWUoY2FsZW5kYXItd2Vla251bWJlci1kaXZpZGVyLXdpZHRoKSBzb2xpZCBuYi10aGVtZShjYWxlbmRhci13ZWVrbnVtYmVyLWRpdmlkZXItY29sb3IpO1xuICAgIEBpbmNsdWRlIG5iLWx0cihib3JkZXItcmlnaHQsICRib3JkZXIpO1xuICAgIEBpbmNsdWRlIG5iLXJ0bChib3JkZXItbGVmdCwgJGJvcmRlcik7XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLWNhbGVuZGFyLWNlbGwtdGhlbWUoKSB7XG4gIG5iLWNhbGVuZGFyLXBpY2tlciB7XG4gICAgLmRheS1jZWxsIHtcbiAgICAgIHdpZHRoOiBuYi10aGVtZShjYWxlbmRhci1kYXktY2VsbC13aWR0aCk7XG4gICAgICBoZWlnaHQ6IG5iLXRoZW1lKGNhbGVuZGFyLWRheS1jZWxsLWhlaWdodCk7XG5cbiAgICAgICYuc2l6ZS1sYXJnZSB7XG4gICAgICAgIHdpZHRoOiBuYi10aGVtZShjYWxlbmRhci1kYXktY2VsbC1sYXJnZS13aWR0aCk7XG4gICAgICAgIGhlaWdodDogbmItdGhlbWUoY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2UtaGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubW9udGgtY2VsbCB7XG4gICAgICB3aWR0aDogbmItdGhlbWUoY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aCk7XG4gICAgICBoZWlnaHQ6IG5iLXRoZW1lKGNhbGVuZGFyLW1vbnRoLWNlbGwtaGVpZ2h0KTtcblxuICAgICAgJi5zaXplLWxhcmdlIHtcbiAgICAgICAgd2lkdGg6IG5iLXRoZW1lKGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2Utd2lkdGgpO1xuICAgICAgICBoZWlnaHQ6IG5iLXRoZW1lKGNhbGVuZGFyLW1vbnRoLWNlbGwtbGFyZ2UtaGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAueWVhci1jZWxsIHtcbiAgICAgIHdpZHRoOiBuYi10aGVtZShjYWxlbmRhci15ZWFyLWNlbGwtd2lkdGgpO1xuICAgICAgaGVpZ2h0OiBuYi10aGVtZShjYWxlbmRhci15ZWFyLWNlbGwtaGVpZ2h0KTtcblxuICAgICAgJi5zaXplLWxhcmdlIHtcbiAgICAgICAgd2lkdGg6IG5iLXRoZW1lKGNhbGVuZGFyLXllYXItY2VsbC1sYXJnZS13aWR0aCk7XG4gICAgICAgIGhlaWdodDogbmItdGhlbWUoY2FsZW5kYXIteWVhci1jZWxsLWxhcmdlLWhlaWdodCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNlbGwtY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIGJvcmRlci1yYWRpdXM6IG5iLXRoZW1lKGNhbGVuZGFyLWJvcmRlci1yYWRpdXMpO1xuICAgIH1cblxuICAgIC5kYXktY2VsbCxcbiAgICAubW9udGgtY2VsbCxcbiAgICAueWVhci1jZWxsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgZm9udC1mYW1pbHk6IG5iLXRoZW1lKGNhbGVuZGFyLXRleHQtZm9udC1mYW1pbHkpO1xuICAgICAgZm9udC1zaXplOiBuYi10aGVtZShjYWxlbmRhci10ZXh0LWZvbnQtc2l6ZSk7XG4gICAgICBmb250LXdlaWdodDogbmItdGhlbWUoY2FsZW5kYXItdGV4dC1mb250LXdlaWdodCk7XG4gICAgICBsaW5lLWhlaWdodDogbmItdGhlbWUoY2FsZW5kYXItdGV4dC1saW5lLWhlaWdodCk7XG4gICAgICBjb2xvcjogbmItdGhlbWUoY2FsZW5kYXItdGV4dC1jb2xvcik7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICYsXG4gICAgICAmIC5jZWxsLWNvbnRlbnQge1xuICAgICAgICBAaW5jbHVkZSBuYi1jb21wb25lbnQtYW5pbWF0aW9uKGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAmLmVtcHR5LFxuICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIH1cblxuICAgICAgJi5ib3VuZGluZy1tb250aCB7XG4gICAgICAgIGNvbG9yOiBuYi10aGVtZShjYWxlbmRhci1jZWxsLWluYWN0aXZlLXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAmOm5vdCguZGlzYWJsZWQpOm5vdCguZW1wdHkpIHtcbiAgICAgICAgJjpob3ZlciAuY2VsbC1jb250ZW50IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShjYWxlbmRhci1jZWxsLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUoY2FsZW5kYXItY2VsbC1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgICAgICAgIGNvbG9yOiBuYi10aGVtZShjYWxlbmRhci1jZWxsLWhvdmVyLXRleHQtY29sb3IpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogbmItdGhlbWUoY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWZvbnQtc2l6ZSk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5iLXRoZW1lKGNhbGVuZGFyLWNlbGwtaG92ZXItdGV4dC1mb250LXdlaWdodCk7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IG5iLXRoZW1lKGNhbGVuZGFyLWNlbGwtaG92ZXItdGV4dC1saW5lLWhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFjdGl2ZSAuY2VsbC1jb250ZW50IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShjYWxlbmRhci1jZWxsLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IG5iLXRoZW1lKGNhbGVuZGFyLWNlbGwtYWN0aXZlLWJvcmRlci1jb2xvcik7XG4gICAgICAgICAgY29sb3I6IG5iLXRoZW1lKGNhbGVuZGFyLWNlbGwtYWN0aXZlLXRleHQtY29sb3IpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogbmItdGhlbWUoY2FsZW5kYXItY2VsbC1hY3RpdmUtdGV4dC1mb250LXNpemUpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBuYi10aGVtZShjYWxlbmRhci1jZWxsLWFjdGl2ZS10ZXh0LWZvbnQtd2VpZ2h0KTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogbmItdGhlbWUoY2FsZW5kYXItY2VsbC1hY3RpdmUtdGV4dC1saW5lLWhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLnRvZGF5IC5jZWxsLWNvbnRlbnQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGNhbGVuZGFyLWNlbGwtdG9kYXktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbmItdGhlbWUoY2FsZW5kYXItY2VsbC10b2RheS1ib3JkZXItY29sb3IpO1xuICAgICAgICAgIGNvbG9yOiBuYi10aGVtZShjYWxlbmRhci1jZWxsLXRvZGF5LXRleHQtY29sb3IpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogbmItdGhlbWUoY2FsZW5kYXItY2VsbC10b2RheS10ZXh0LWZvbnQtc2l6ZSk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5iLXRoZW1lKGNhbGVuZGFyLWNlbGwtdG9kYXktdGV4dC1mb250LXdlaWdodCk7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IG5iLXRoZW1lKGNhbGVuZGFyLWNlbGwtdG9kYXktdGV4dC1saW5lLWhlaWdodCk7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGNhbGVuZGFyLWNlbGwtdG9kYXktaG92ZXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IG5iLXRoZW1lKGNhbGVuZGFyLWNlbGwtdG9kYXktaG92ZXItYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShjYWxlbmRhci1jZWxsLXRvZGF5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUoY2FsZW5kYXItY2VsbC10b2RheS1hY3RpdmUtYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLnNlbGVjdGVkIC5jZWxsLWNvbnRlbnQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWJvcmRlci1jb2xvcik7XG4gICAgICAgICAgY29sb3I6IG5iLXRoZW1lKGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtdGV4dC1jb2xvcik7XG4gICAgICAgICAgZm9udC1zaXplOiBuYi10aGVtZShjYWxlbmRhci1jZWxsLXNlbGVjdGVkLXRleHQtZm9udC1zaXplKTtcbiAgICAgICAgICBmb250LXdlaWdodDogbmItdGhlbWUoY2FsZW5kYXItY2VsbC1zZWxlY3RlZC10ZXh0LWZvbnQtd2VpZ2h0KTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogbmItdGhlbWUoY2FsZW5kYXItY2VsbC1zZWxlY3RlZC10ZXh0LWxpbmUtaGVpZ2h0KTtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUoY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUoY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWFjdGl2ZS1ib3JkZXItY29sb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYudG9kYXkuc2VsZWN0ZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogbmItdGhlbWUoY2FsZW5kYXItYm9yZGVyLXJhZGl1cyk7XG5cbiAgICAgICAgICAuY2VsbC1jb250ZW50IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IG5iLXRoZW1lKGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgICAgIGNvbG9yOiBuYi10aGVtZShjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLXRleHQtY29sb3IpO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUoY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLWhvdmVyLWJvcmRlci1jb2xvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLWFjdGl2ZS1ib3JkZXItY29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgY29sb3I6IG5iLXRoZW1lKGNhbGVuZGFyLWNlbGwtZGlzYWJsZWQtdGV4dC1jb2xvcik7XG5cbiAgICAgICAgJi50b2RheSAuY2VsbC1jb250ZW50IHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBuYi10aGVtZShjYWxlbmRhci1jZWxsLXRvZGF5LWRpc2FibGVkLWJvcmRlci1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmFuZ2UtY2VsbC5pbi1yYW5nZS5zZWxlY3RlZDpub3QoLmRpc2FibGVkKTpub3QoLmVtcHR5KSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcblxuICAgICAgJi5zdGFydCB7XG4gICAgICAgIEBpbmNsdWRlIG5iLWx0cigpIHtcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBuYi10aGVtZShjYWxlbmRhci1ib3JkZXItcmFkaXVzKTtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiBuYi10aGVtZShjYWxlbmRhci1ib3JkZXItcmFkaXVzKTtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IG5iLXRoZW1lKGNhbGVuZGFyLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiBuYi10aGVtZShjYWxlbmRhci1ib3JkZXItcmFkaXVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmVuZCB7XG4gICAgICAgIEBpbmNsdWRlIG5iLWx0cigpIHtcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogbmItdGhlbWUoY2FsZW5kYXItYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IG5iLXRoZW1lKGNhbGVuZGFyLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBuYi10aGVtZShjYWxlbmRhci1ib3JkZXItcmFkaXVzKTtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiBuYi10aGVtZShjYWxlbmRhci1ib3JkZXItcmFkaXVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AbWl4aW4gbmItY2FsZW5kYXItdGhlbWUoKSB7XG5cbiAgbmItYmFzZS1jYWxlbmRhciB7XG4gICAgbmItY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShjYWxlbmRhci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIGJvcmRlcjogbmItdGhlbWUoY2FsZW5kYXItYm9yZGVyLXdpZHRoKSBuYi10aGVtZShjYWxlbmRhci1ib3JkZXItc3R5bGUpIG5iLXRoZW1lKGNhbGVuZGFyLWJvcmRlci1jb2xvcik7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgd2lkdGg6IG5iLXRoZW1lKGNhbGVuZGFyLXdpZHRoKTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgbmItY2FyZC1ib2R5IHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLmNhbGVuZGFyLW5hdmlnYXRpb24ge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgcGFkZGluZzogbmItdGhlbWUoY2FsZW5kYXItbmF2aWdhdGlvbi1wYWRkaW5nKTtcbiAgICAgIGNvbG9yOiBuYi10aGVtZShjYWxlbmRhci1uYXZpZ2F0aW9uLXRleHQtY29sb3IpO1xuICAgICAgZm9udC1mYW1pbHk6IG5iLXRoZW1lKGNhbGVuZGFyLW5hdmlnYXRpb24tdGV4dC1mb250LWZhbWlseSk7XG4gICAgICBmb250LXNpemU6IG5iLXRoZW1lKGNhbGVuZGFyLW5hdmlnYXRpb24tdGl0bGUtdGV4dC1mb250LXNpemUpO1xuICAgICAgZm9udC13ZWlnaHQ6IG5iLXRoZW1lKGNhbGVuZGFyLW5hdmlnYXRpb24tdGl0bGUtdGV4dC1mb250LXdlaWdodCk7XG4gICAgICBsaW5lLWhlaWdodDogbmItdGhlbWUoY2FsZW5kYXItbmF2aWdhdGlvbi10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0KTtcbiAgICB9XG5cbiAgICAmOm5vdCguaGFzLW5hdmlnYXRpb24pIHtcbiAgICAgIG5iLWNhbGVuZGFyLXdlZWstbnVtYmVycyAuc2lnbi1jb250YWluZXIsXG4gICAgICBuYi1jYWxlbmRhci1kYXlzLW5hbWVzIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmhhcy13ZWVrLW51bWJlciB7XG4gICAgICBuYi1jYXJkIHtcbiAgICAgICAgJGNhbGVuZGFyLXdpZHRoOiBuYi10aGVtZShjYWxlbmRhci13aWR0aCk7XG4gICAgICAgICR3ZWVrLWNvbC13aWR0aDogbmItdGhlbWUoY2FsZW5kYXItd2Vla251bWJlci13aWR0aCk7XG4gICAgICAgICRkaXZpZGVyLXdpZHRoOiBuYi10aGVtZShjYWxlbmRhci13ZWVrbnVtYmVyLWRpdmlkZXItd2lkdGgpO1xuICAgICAgICB3aWR0aDogY2FsYygjeyRjYWxlbmRhci13aWR0aH0gKyAjeyR3ZWVrLWNvbC13aWR0aH0gKyAjeyRkaXZpZGVyLXdpZHRofSk7XG4gICAgICB9XG5cbiAgICAgIC5tb250aC1jZWxsLFxuICAgICAgLnllYXItY2VsbCB7XG4gICAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuc2l6ZS1sYXJnZSB7XG4gICAgICBuYi1jYXJkIHtcbiAgICAgICAgd2lkdGg6IG5iLXRoZW1lKGNhbGVuZGFyLWxhcmdlLXdpZHRoKTtcbiAgICAgIH1cblxuICAgICAgJi5oYXMtd2Vlay1udW1iZXIgbmItY2FyZCB7XG4gICAgICAgICR3ZWVrLWNvbHVtbi13aWR0aDogbmItdGhlbWUoY2FsZW5kYXItd2Vla251bWJlci1sYXJnZS13aWR0aCk7XG4gICAgICAgICRkaXZpZGVyLXdpZHRoOiBuYi10aGVtZShjYWxlbmRhci13ZWVrbnVtYmVyLWRpdmlkZXItd2lkdGgpO1xuICAgICAgICAkbGFyZ2UtY2FsLXdpZHRoOiBuYi10aGVtZShjYWxlbmRhci1sYXJnZS13aWR0aCk7XG4gICAgICAgIHdpZHRoOiBjYWxjKCN7JGxhcmdlLWNhbC13aWR0aH0gKyAjeyR3ZWVrLWNvbHVtbi13aWR0aH0gKyAjeyRkaXZpZGVyLXdpZHRofSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi1jYXJkLWhlYWRlcigpIHtcbiAgcGFkZGluZzogbmItdGhlbWUoY2FyZC1wYWRkaW5nKTtcbiAgYm9yZGVyLWJvdHRvbTogbmItdGhlbWUoY2FyZC1kaXZpZGVyLXdpZHRoKSBuYi10aGVtZShjYXJkLWRpdmlkZXItc3R5bGUpIG5iLXRoZW1lKGNhcmQtZGl2aWRlci1jb2xvcik7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IG5iLXRoZW1lKGNhcmQtYm9yZGVyLXJhZGl1cyk7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBuYi10aGVtZShjYXJkLWJvcmRlci1yYWRpdXMpO1xuXG4gIGNvbG9yOiBuYi10aGVtZShjYXJkLWhlYWRlci10ZXh0LWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IG5iLXRoZW1lKGNhcmQtaGVhZGVyLXRleHQtZm9udC1mYW1pbHkpO1xuICBmb250LXNpemU6IG5iLXRoZW1lKGNhcmQtaGVhZGVyLXRleHQtZm9udC1zaXplKTtcbiAgZm9udC13ZWlnaHQ6IG5iLXRoZW1lKGNhcmQtaGVhZGVyLXRleHQtZm9udC13ZWlnaHQpO1xuICBsaW5lLWhlaWdodDogbmItdGhlbWUoY2FyZC1oZWFkZXItdGV4dC1saW5lLWhlaWdodCk7XG5cbiAgQGluY2x1ZGUgbmItaGVhZGluZ3MoKTtcbn1cblxuQG1peGluIG5iLWNhcmQtdGhlbWUoKSB7XG4gIG5iLWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGNhcmQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgYm9yZGVyOiBuYi10aGVtZShjYXJkLWJvcmRlci13aWR0aCkgbmItdGhlbWUoY2FyZC1ib3JkZXItc3R5bGUpIG5iLXRoZW1lKGNhcmQtYm9yZGVyLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiBuYi10aGVtZShjYXJkLWJvcmRlci1yYWRpdXMpO1xuICAgIGJveC1zaGFkb3c6IG5iLXRoZW1lKGNhcmQtc2hhZG93KTtcblxuICAgIGNvbG9yOiBuYi10aGVtZShjYXJkLXRleHQtY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiBuYi10aGVtZShjYXJkLXRleHQtZm9udC1mYW1pbHkpO1xuICAgIGZvbnQtc2l6ZTogbmItdGhlbWUoY2FyZC10ZXh0LWZvbnQtc2l6ZSk7XG4gICAgZm9udC13ZWlnaHQ6IG5iLXRoZW1lKGNhcmQtdGV4dC1mb250LXdlaWdodCk7XG4gICAgbGluZS1oZWlnaHQ6IG5iLXRoZW1lKGNhcmQtdGV4dC1saW5lLWhlaWdodCk7XG5cbiAgICAvLyBUT0RPOiBtb3ZlIGNhcmQgbWFyZ2luIHN0eWxlIHRvIGxheW91dFxuICAgIG1hcmdpbi1ib3R0b206IG5iLXRoZW1lKGNhcmQtbWFyZ2luLWJvdHRvbSk7XG5cbiAgICBAaW5jbHVkZSBuYi1zY3JvbGxiYXJzKFxuICAgICAgICBuYi10aGVtZShjYXJkLXNjcm9sbGJhci1jb2xvciksXG4gICAgICAgIG5iLXRoZW1lKGNhcmQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IpLFxuICAgICAgICBuYi10aGVtZShjYXJkLXNjcm9sbGJhci13aWR0aCkpO1xuXG4gICAgQGVhY2ggJHNpemUgaW4gbmItZ2V0LXNpemVzKCkge1xuICAgICAgJi5zaXplLSN7JHNpemV9IHtcbiAgICAgICAgaGVpZ2h0OiBuYi10aGVtZShjYXJkLWhlaWdodC0jeyRzaXplfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGVhY2ggJHN0YXR1cyBpbiBuYi1nZXQtc3RhdHVzZXMoKSB7XG4gICAgICAmLnN0YXR1cy0jeyRzdGF0dXN9IHtcbiAgICAgICAgbmItY2FyZC1oZWFkZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGNhcmQtaGVhZGVyLSN7JHN0YXR1c30tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiBuYi10aGVtZShjYXJkLWhlYWRlci0jeyRzdGF0dXN9LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgIGNvbG9yOiBuYi10aGVtZShjYXJkLWhlYWRlci0jeyRzdGF0dXN9LXRleHQtY29sb3IpO1xuXG4gICAgICAgICAgYSxcbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiBuYi10aGVtZShjYXJkLWhlYWRlci0jeyRzdGF0dXN9LXRleHQtY29sb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmFjY2VudC0jeyRzdGF0dXN9IHtcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogbmItdGhlbWUoY2FyZC1oZWFkZXItI3skc3RhdHVzfS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFjY2VudCB7XG4gICAgICBib3JkZXItdG9wLXN0eWxlOiBuYi10aGVtZShjYXJkLWJvcmRlci1zdHlsZSk7XG4gICAgICBib3JkZXItdG9wLXdpZHRoOiBuYi10aGVtZShjYXJkLWJvcmRlci1yYWRpdXMpO1xuXG4gICAgICAmIG5iLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuYi1jYXJkLWJvZHkge1xuICAgIGZsZXg6IDE7XG4gICAgLW1zLWZsZXg6IDEgMSBhdXRvO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmc6IG5iLXRoZW1lKGNhcmQtcGFkZGluZyk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIEBpbmNsdWRlIG5iLXNjcm9sbGJhcnMoXG4gICAgICAgIG5iLXRoZW1lKGNhcmQtc2Nyb2xsYmFyLWNvbG9yKSxcbiAgICAgICAgbmItdGhlbWUoY2FyZC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvciksXG4gICAgICAgIG5iLXRoZW1lKGNhcmQtc2Nyb2xsYmFyLXdpZHRoKSk7XG4gIH1cblxuICBuYi1jYXJkLWZvb3RlciB7XG4gICAgcGFkZGluZzogbmItdGhlbWUoY2FyZC1wYWRkaW5nKTtcbiAgICBib3JkZXItdG9wOiBuYi10aGVtZShjYXJkLWRpdmlkZXItd2lkdGgpIG5iLXRoZW1lKGNhcmQtZGl2aWRlci1zdHlsZSkgbmItdGhlbWUoY2FyZC1kaXZpZGVyLWNvbG9yKTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiBuYi10aGVtZShjYXJkLWJvcmRlci1yYWRpdXMpO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiBuYi10aGVtZShjYXJkLWJvcmRlci1yYWRpdXMpO1xuICB9XG5cbiAgbmItY2FyZC1oZWFkZXIge1xuICAgIEBpbmNsdWRlIG5iLWNhcmQtaGVhZGVyKCk7XG4gIH1cbn1cblxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AbWl4aW4gbmItdGFic2V0LXRoZW1lKCkge1xuXG4gIG5iLXRhYnNldCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUodGFic2V0LWJhY2tncm91bmQtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IG5iLXRoZW1lKHRhYnNldC1ib3JkZXItcmFkaXVzKTtcbiAgICBib3gtc2hhZG93OiBuYi10aGVtZSh0YWJzZXQtc2hhZG93KTtcblxuICAgIC50YWJzZXQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogbmItdGhlbWUodGFic2V0LWRpdmlkZXItd2lkdGgpIG5iLXRoZW1lKHRhYnNldC1kaXZpZGVyLXN0eWxlKSBuYi10aGVtZSh0YWJzZXQtZGl2aWRlci1jb2xvcik7XG4gICAgfVxuXG4gICAgLnRhYi1saW5rIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKHRhYnNldC10YWItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwYWRkaW5nOiBuYi10aGVtZSh0YWJzZXQtdGFiLXBhZGRpbmcpO1xuICAgICAgY29sb3I6IG5iLXRoZW1lKHRhYnNldC10YWItdGV4dC1jb2xvcik7XG4gICAgICBmb250LWZhbWlseTogbmItdGhlbWUodGFic2V0LXRhYi10ZXh0LWZvbnQtZmFtaWx5KTtcbiAgICAgIGZvbnQtc2l6ZTogbmItdGhlbWUodGFic2V0LXRhYi10ZXh0LWZvbnQtc2l6ZSk7XG4gICAgICBmb250LXdlaWdodDogbmItdGhlbWUodGFic2V0LXRhYi10ZXh0LWZvbnQtd2VpZ2h0KTtcbiAgICAgIGxpbmUtaGVpZ2h0OiBuYi10aGVtZSh0YWJzZXQtdGFiLXRleHQtbGluZS1oZWlnaHQpO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IG5iLXRoZW1lKHRhYnNldC10YWItdGV4dC10cmFuc2Zvcm0pO1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZSh0YWJzZXQtdGFiLXVuZGVybGluZS1jb2xvcik7XG4gICAgICAgIGhlaWdodDogbmItdGhlbWUodGFic2V0LXRhYi11bmRlcmxpbmUtd2lkdGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50YWIuYWN0aXZlIHtcbiAgICAgIC50YWItbGluayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKHRhYnNldC10YWItYWN0aXZlLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBjb2xvcjogbmItdGhlbWUodGFic2V0LXRhYi1hY3RpdmUtdGV4dC1jb2xvcik7XG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUodGFic2V0LXRhYi1hY3RpdmUtdW5kZXJsaW5lLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC50YWI6Zm9jdXMge1xuICAgICAgLnRhYi1saW5rIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUodGFic2V0LXRhYi1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgY29sb3I6IG5iLXRoZW1lKHRhYnNldC10YWItZm9jdXMtdGV4dC1jb2xvcik7XG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUodGFic2V0LXRhYi1mb2N1cy11bmRlcmxpbmUtY29sb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRhYjpob3ZlciB7XG4gICAgICAudGFiLWxpbmsge1xuICAgICAgICBjb2xvcjogbmItdGhlbWUodGFic2V0LXRhYi1ob3Zlci10ZXh0LWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUodGFic2V0LXRhYi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZSh0YWJzZXQtdGFiLWhvdmVyLXVuZGVybGluZS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGFiLmRpc2FibGVkIHtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgICAudGFiLWxpbmsge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZSh0YWJzZXQtdGFiLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBjb2xvcjogbmItdGhlbWUodGFic2V0LXRhYi1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZSh0YWJzZXQtdGFiLWRpc2FibGVkLXVuZGVybGluZS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGFiLnJlc3BvbnNpdmUge1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogbmItdGhlbWUodGFic2V0LXRhYi10ZXh0LWhpZGUtYnJlYWtwb2ludCkpIHtcbiAgICAgICAgLnRhYi10ZXh0IHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmItdGFiIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKHRhYnNldC1jb250ZW50LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgY29sb3I6IG5iLXRoZW1lKHRhYnNldC1jb250ZW50LXRleHQtY29sb3IpO1xuICAgICAgZm9udC1mYW1pbHk6IG5iLXRoZW1lKHRhYnNldC1jb250ZW50LXRleHQtZm9udC1mYW1pbHkpO1xuICAgICAgZm9udC1zaXplOiBuYi10aGVtZSh0YWJzZXQtY29udGVudC10ZXh0LWZvbnQtc2l6ZSk7XG4gICAgICBmb250LXdlaWdodDogbmItdGhlbWUodGFic2V0LWNvbnRlbnQtdGV4dC1mb250LXdlaWdodCk7XG4gICAgICBsaW5lLWhlaWdodDogbmItdGhlbWUodGFic2V0LWNvbnRlbnQtdGV4dC1saW5lLWhlaWdodCk7XG4gICAgICBwYWRkaW5nOiBuYi10aGVtZSh0YWJzZXQtY29udGVudC1wYWRkaW5nKTtcblxuICAgICAgQGluY2x1ZGUgbmItc2Nyb2xsYmFycyhcbiAgICAgICAgICBuYi10aGVtZSh0YWJzZXQtc2Nyb2xsYmFyLWNvbG9yKSxcbiAgICAgICAgICBuYi10aGVtZSh0YWJzZXQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IpLFxuICAgICAgICAgIG5iLXRoZW1lKHRhYnNldC1zY3JvbGxiYXItd2lkdGgpKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLXJvdXRlLXRhYnNldC10aGVtZSgpIHtcblxuICBuYi1yb3V0ZS10YWJzZXQge1xuICAgIEBpbmNsdWRlIG5iLXNjcm9sbGJhcnMoXG4gICAgICAgIG5iLXRoZW1lKHJvdXRlLXRhYnNldC1zY3JvbGxiYXItY29sb3IpLFxuICAgICAgICBuYi10aGVtZShyb3V0ZS10YWJzZXQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IpLFxuICAgICAgICBuYi10aGVtZShyb3V0ZS10YWJzZXQtc2Nyb2xsYmFyLXdpZHRoKSk7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShyb3V0ZS10YWJzZXQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogbmItdGhlbWUocm91dGUtdGFic2V0LWJvcmRlci1yYWRpdXMpO1xuICAgIGJveC1zaGFkb3c6IG5iLXRoZW1lKHJvdXRlLXRhYnNldC1zaGFkb3cpO1xuXG4gICAgLnJvdXRlLXRhYnNldCB7XG4gICAgICBib3JkZXItYm90dG9tOlxuICAgICAgICBuYi10aGVtZShyb3V0ZS10YWJzZXQtZGl2aWRlci13aWR0aClcbiAgICAgICAgbmItdGhlbWUocm91dGUtdGFic2V0LWRpdmlkZXItc3R5bGUpXG4gICAgICAgIG5iLXRoZW1lKHJvdXRlLXRhYnNldC1kaXZpZGVyLWNvbG9yKTtcbiAgICB9XG5cbiAgICAudGFiLWxpbmsge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUocm91dGUtdGFic2V0LXRhYi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBhZGRpbmc6IG5iLXRoZW1lKHJvdXRlLXRhYnNldC10YWItcGFkZGluZyk7XG4gICAgICBjb2xvcjogbmItdGhlbWUocm91dGUtdGFic2V0LXRhYi10ZXh0LWNvbG9yKTtcbiAgICAgIGZvbnQtZmFtaWx5OiBuYi10aGVtZShyb3V0ZS10YWJzZXQtdGFiLXRleHQtZm9udC1mYW1pbHkpO1xuICAgICAgZm9udC1zaXplOiBuYi10aGVtZShyb3V0ZS10YWJzZXQtdGFiLXRleHQtZm9udC1zaXplKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBuYi10aGVtZShyb3V0ZS10YWJzZXQtdGFiLXRleHQtZm9udC13ZWlnaHQpO1xuICAgICAgbGluZS1oZWlnaHQ6IG5iLXRoZW1lKHJvdXRlLXRhYnNldC10YWItdGV4dC1saW5lLWhlaWdodCk7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbmItdGhlbWUocm91dGUtdGFic2V0LXRhYi10ZXh0LXRyYW5zZm9ybSk7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKHJvdXRlLXRhYnNldC10YWItdW5kZXJsaW5lLWNvbG9yKTtcbiAgICAgICAgaGVpZ2h0OiBuYi10aGVtZShyb3V0ZS10YWJzZXQtdGFiLXVuZGVybGluZS13aWR0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJvdXRlLXRhYi5hY3RpdmUge1xuICAgICAgLnRhYi1saW5rIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUodGFic2V0LXRhYi1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGNvbG9yOiBuYi10aGVtZSh0YWJzZXQtdGFiLWFjdGl2ZS10ZXh0LWNvbG9yKTtcbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZSh0YWJzZXQtdGFiLWFjdGl2ZS11bmRlcmxpbmUtY29sb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJvdXRlLXRhYjpmb2N1cyB7XG4gICAgICAudGFiLWxpbmsge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShyb3V0ZS10YWJzZXQtdGFiLWZvY3VzLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBjb2xvcjogbmItdGhlbWUocm91dGUtdGFic2V0LXRhYi1mb2N1cy10ZXh0LWNvbG9yKTtcbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShyb3V0ZS10YWJzZXQtdGFiLWZvY3VzLXVuZGVybGluZS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucm91dGUtdGFiOmhvdmVyIHtcbiAgICAgIC50YWItbGluayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKHJvdXRlLXRhYnNldC10YWItaG92ZXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGNvbG9yOiBuYi10aGVtZShyb3V0ZS10YWJzZXQtdGFiLWhvdmVyLXRleHQtY29sb3IpO1xuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKHJvdXRlLXRhYnNldC10YWItaG92ZXItdW5kZXJsaW5lLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5yb3V0ZS10YWIuZGlzYWJsZWQge1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAgIC50YWItbGluayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKHJvdXRlLXRhYnNldC10YWItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGNvbG9yOiBuYi10aGVtZShyb3V0ZS10YWJzZXQtdGFiLWRpc2FibGVkLXRleHQtY29sb3IpO1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKHJvdXRlLXRhYnNldC10YWItZGlzYWJsZWQtdW5kZXJsaW5lLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5yb3V0ZS10YWIucmVzcG9uc2l2ZSB7XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBuYi10aGVtZShyb3V0ZS10YWJzZXQtdGFiLXRleHQtaGlkZS1icmVha3BvaW50KSkge1xuICAgICAgICAudGFiLXRleHQge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLW1lbnUtdGhlbWUoKSB7XG4gIG5iLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKG1lbnUtYmFja2dyb3VuZC1jb2xvcik7XG5cbiAgICB1bC5tZW51LWl0ZW1zIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLm1lbnUtZ3JvdXAsXG4gICAgLm1lbnUtaXRlbSBhIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBuYi10aGVtZShtZW51LXRleHQtZm9udC1mYW1pbHkpO1xuICAgICAgZm9udC1zaXplOiBuYi10aGVtZShtZW51LXRleHQtZm9udC1zaXplKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBuYi10aGVtZShtZW51LXRleHQtZm9udC13ZWlnaHQpO1xuICAgICAgbGluZS1oZWlnaHQ6IG5iLXRoZW1lKG1lbnUtdGV4dC1saW5lLWhlaWdodCk7XG4gICAgICBwYWRkaW5nOiBuYi10aGVtZShtZW51LWl0ZW0tcGFkZGluZyk7XG4gICAgfVxuXG4gICAgLm1lbnUtZ3JvdXAsXG4gICAgLm1lbnUtZ3JvdXAgbmItaWNvbi5tZW51LWljb24ge1xuICAgICAgY29sb3I6IG5iLXRoZW1lKG1lbnUtZ3JvdXAtdGV4dC1jb2xvcik7XG4gICAgfVxuXG4gICAgLm1lbnUtaXRlbSB7XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IG5iLXRoZW1lKG1lbnUtdGV4dC1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IG5iLXRoZW1lKG1lbnUtaXRlbS1ib3JkZXItcmFkaXVzKTtcbiAgICAgIH1cblxuICAgICAgYS5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShtZW51LWl0ZW0tYWN0aXZlLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBjb2xvcjogbmItdGhlbWUobWVudS1pdGVtLWFjdGl2ZS10ZXh0LWNvbG9yKTtcblxuICAgICAgICAubWVudS1pY29uIHtcbiAgICAgICAgICBjb2xvcjogbmItdGhlbWUobWVudS1pdGVtLWljb24tYWN0aXZlLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUobWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBjb2xvcjogbmItdGhlbWUobWVudS1pdGVtLWhvdmVyLXRleHQtY29sb3IpO1xuICAgICAgICBjdXJzb3I6IG5iLXRoZW1lKG1lbnUtaXRlbS1ob3Zlci1jdXJzb3IpO1xuXG4gICAgICAgIC5tZW51LWljb24ge1xuICAgICAgICAgIGNvbG9yOiBuYi10aGVtZShtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLm1lbnUtaWNvbiB7XG4gICAgICAgIGNvbG9yOiBuYi10aGVtZShtZW51LWl0ZW0taWNvbi1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogbmItdGhlbWUobWVudS1pdGVtLWljb24td2lkdGgpO1xuICAgICAgICBtYXJnaW46IG5iLXRoZW1lKG1lbnUtaXRlbS1pY29uLW1hcmdpbik7XG4gICAgICAgIHdpZHRoOiAxZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmV4cGFuZC1zdGF0ZSB7XG4gICAgICAgIGNvbG9yOiBuYi10aGVtZShtZW51LWl0ZW0taWNvbi1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJGRpdmlkZXI6IG5iLXRoZW1lKG1lbnUtaXRlbS1kaXZpZGVyLXdpZHRoKSBuYi10aGVtZShtZW51LWl0ZW0tZGl2aWRlci1zdHlsZSkgbmItdGhlbWUobWVudS1pdGVtLWRpdmlkZXItY29sb3IpO1xuICAgIC5tZW51LWl0ZW0ge1xuICAgICAgYm9yZGVyLWJvdHRvbTogJGRpdmlkZXI7XG5cbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgfVxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLm1lbnUtaXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3A6ICRkaXZpZGVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tZW51LWl0ZW0gPiAubWVudS1pdGVtcyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShtZW51LXN1Ym1lbnUtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICBtYXJnaW46IG5iLXRoZW1lKG1lbnUtc3VibWVudS1tYXJnaW4pO1xuICAgICAgcGFkZGluZzogbmItdGhlbWUobWVudS1zdWJtZW51LXBhZGRpbmcpO1xuICAgIH1cblxuICAgIC5tZW51LWl0ZW0gPiAubWVudS1pdGVtcyA+IC5tZW51LWl0ZW0ge1xuICAgICAgYmFja2dyb3VuZDogbmItdGhlbWUobWVudS1zdWJtZW51LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgY29sb3I6IG5iLXRoZW1lKG1lbnUtc3VibWVudS10ZXh0LWNvbG9yKTtcblxuICAgICAgYSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUobWVudS1zdWJtZW51LWl0ZW0tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBuYi10aGVtZShtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItc3R5bGUpO1xuICAgICAgICBib3JkZXItd2lkdGg6IG5iLXRoZW1lKG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci13aWR0aCk7XG4gICAgICAgIHBhZGRpbmc6IG5iLXRoZW1lKG1lbnUtc3VibWVudS1pdGVtLXBhZGRpbmcpO1xuICAgICAgfVxuXG4gICAgICBhLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgY29sb3I6IG5iLXRoZW1lKG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS10ZXh0LWNvbG9yKTtcblxuICAgICAgICAubWVudS1pY29uIHtcbiAgICAgICAgICBjb2xvcjogbmItdGhlbWUobWVudS1zdWJtZW51LWl0ZW0taWNvbi1hY3RpdmUtY29sb3IpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgICAgICBjb2xvcjogbmItdGhlbWUobWVudS1zdWJtZW51LWl0ZW0taG92ZXItdGV4dC1jb2xvcik7XG5cbiAgICAgICAgLm1lbnUtaWNvbiB7XG4gICAgICAgICAgY29sb3I6IG5iLXRoZW1lKG1lbnUtc3VibWVudS1pdGVtLWljb24taG92ZXItY29sb3IpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGEuYWN0aXZlOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUobWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBib3JkZXItY29sb3I6IG5iLXRoZW1lKG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgICAgICBjb2xvcjogbmItdGhlbWUobWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWhvdmVyLXRleHQtY29sb3IpO1xuXG4gICAgICAgIC5tZW51LWljb24ge1xuICAgICAgICAgIGNvbG9yOiBuYi10aGVtZShtZW51LXN1Ym1lbnUtaXRlbS1pY29uLWFjdGl2ZS1ob3Zlci1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWVudS1pdGVtID4gLm1lbnUtaXRlbXMgPiAubWVudS1ncm91cCB7XG4gICAgICAmLFxuICAgICAgJiBuYi1pY29uLm1lbnUtaWNvbiB7XG4gICAgICAgIGNvbG9yOiBuYi10aGVtZShtZW51LWdyb3VwLXRleHQtY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AbWl4aW4gbmItdXNlci10aGVtZSgpIHtcbiAgbmItdXNlciB7XG4gICAgLnVzZXItcGljdHVyZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZSh1c2VyLXBpY3R1cmUtYm94LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgYm9yZGVyOiBuYi10aGVtZSh1c2VyLXBpY3R1cmUtYm94LWJvcmRlci13aWR0aCkgc29saWQgbmItdGhlbWUodXNlci1waWN0dXJlLWJveC1ib3JkZXItY29sb3IpO1xuICAgIH1cblxuICAgIC5pbml0aWFscyB7XG4gICAgICBjb2xvcjogbmItdGhlbWUodXNlci1pbml0aWFscy10ZXh0LWNvbG9yKTtcbiAgICAgIGZvbnQtZmFtaWx5OiBuYi10aGVtZSh1c2VyLWluaXRpYWxzLXRleHQtZm9udC1mYW1pbHkpO1xuICAgICAgZm9udC13ZWlnaHQ6IG5iLXRoZW1lKHVzZXItaW5pdGlhbHMtdGV4dC1mb250LXdlaWdodCk7XG4gICAgfVxuXG4gICAgLnVzZXItbmFtZSB7XG4gICAgICBjb2xvcjogbmItdGhlbWUodXNlci1uYW1lLXRleHQtY29sb3IpO1xuICAgICAgZm9udC1mYW1pbHk6IG5iLXRoZW1lKHVzZXItbmFtZS10ZXh0LWZvbnQtZmFtaWx5KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBuYi10aGVtZSh1c2VyLW5hbWUtdGV4dC1mb250LXdlaWdodCk7XG4gICAgfVxuXG4gICAgLnVzZXItdGl0bGUge1xuICAgICAgY29sb3I6IG5iLXRoZW1lKHVzZXItdGl0bGUtdGV4dC1jb2xvcik7XG4gICAgICBmb250LWZhbWlseTogbmItdGhlbWUodXNlci10aXRsZS10ZXh0LWZvbnQtZmFtaWx5KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBuYi10aGVtZSh1c2VyLXRpdGxlLXRleHQtZm9udC13ZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIEBlYWNoICRzaXplIGluIG5iLWdldC1zaXplcygpIHtcbiAgICBuYi11c2VyLnNpemUtI3skc2l6ZX0ge1xuICAgICAgLnVzZXItcGljdHVyZSB7XG4gICAgICAgIGhlaWdodDogbmItdGhlbWUodXNlci0jeyRzaXplfS1oZWlnaHQpO1xuICAgICAgICB3aWR0aDogbmItdGhlbWUodXNlci0jeyRzaXplfS13aWR0aCk7XG4gICAgICB9XG4gICAgICAuaW5pdGlhbHMge1xuICAgICAgICBmb250LXNpemU6IG5iLXRoZW1lKHVzZXItI3skc2l6ZX0taW5pdGlhbHMtdGV4dC1mb250LXNpemUpO1xuICAgICAgICBsaW5lLWhlaWdodDogbmItdGhlbWUodXNlci0jeyRzaXplfS1pbml0aWFscy10ZXh0LWxpbmUtaGVpZ2h0KTtcbiAgICAgIH1cbiAgICAgIC51c2VyLW5hbWUge1xuICAgICAgICBmb250LXNpemU6IG5iLXRoZW1lKHVzZXItI3skc2l6ZX0tbmFtZS10ZXh0LWZvbnQtc2l6ZSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBuYi10aGVtZSh1c2VyLSN7JHNpemV9LW5hbWUtdGV4dC1saW5lLWhlaWdodCk7XG4gICAgICB9XG4gICAgICAudXNlci10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogbmItdGhlbWUodXNlci0jeyRzaXplfS10aXRsZS10ZXh0LWZvbnQtc2l6ZSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBuYi10aGVtZSh1c2VyLSN7JHNpemV9LXRpdGxlLXRleHQtbGluZS1oZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBlYWNoICRzaGFwZSBpbiBuYi1nZXQtc2hhcGVzKCkge1xuICAgIG5iLXVzZXIuc2hhcGUtI3skc2hhcGV9IC51c2VyLXBpY3R1cmUge1xuICAgICAgYm9yZGVyLXJhZGl1czogbmItdGhlbWUodXNlci0jeyRzaGFwZX0tYm9yZGVyLXJhZGl1cyk7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi1hY3Rpb25zLXRoZW1lKCkge1xuICBuYi1hY3Rpb25zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShhY3Rpb25zLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGNvbG9yOiBuYi10aGVtZShhY3Rpb25zLXRleHQtY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiBuYi10aGVtZShhY3Rpb25zLXRleHQtZm9udC1mYW1pbHkpO1xuICAgIGZvbnQtd2VpZ2h0OiBuYi10aGVtZShhY3Rpb25zLXRleHQtZm9udC13ZWlnaHQpO1xuICAgIGxpbmUtaGVpZ2h0OiBuYi10aGVtZShhY3Rpb25zLXRleHQtbGluZS1oZWlnaHQpO1xuICB9XG5cbiAgQGVhY2ggJHNpemUgaW4gbmItZ2V0LXNpemVzKCkge1xuICAgIG5iLWFjdGlvbnMuc2l6ZS0jeyRzaXplfSBuYi1hY3Rpb24ge1xuICAgICAgZm9udC1zaXplOiBuYi10aGVtZShhY3Rpb25zLSN7JHNpemV9LXRleHQtZm9udC1zaXplKTtcbiAgICAgIGhlaWdodDogbmItdGhlbWUoYWN0aW9ucy0jeyRzaXplfS1oZWlnaHQpO1xuICAgICAgcGFkZGluZzogbmItdGhlbWUoYWN0aW9ucy0jeyRzaXplfS1wYWRkaW5nKTtcblxuICAgICAgbmItaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogbmItdGhlbWUoYWN0aW9ucy0jeyRzaXplfS1pY29uLWhlaWdodCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmItYWN0aW9uIHtcbiAgICAkZGl2aWRlcjogbmItdGhlbWUoYWN0aW9ucy1kaXZpZGVyLXdpZHRoKSBuYi10aGVtZShhY3Rpb25zLWRpdmlkZXItc3R5bGUpIG5iLXRoZW1lKGFjdGlvbnMtZGl2aWRlci1jb2xvcik7XG4gICAgQGluY2x1ZGUgbmItbHRyKGJvcmRlci1sZWZ0LCAkZGl2aWRlcik7XG4gICAgQGluY2x1ZGUgbmItcnRsKGJvcmRlci1yaWdodCwgJGRpdmlkZXIpO1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICBAaW5jbHVkZSBuYi1sdHIoYm9yZGVyLWxlZnQsIG5vbmUhaW1wb3J0YW50KTtcbiAgICAgIEBpbmNsdWRlIG5iLXJ0bChib3JkZXItcmlnaHQsIG5vbmUhaW1wb3J0YW50KTtcbiAgICB9XG5cbiAgICBuYi1pY29uIHtcbiAgICAgIGNvbG9yOiBuYi10aGVtZShhY3Rpb25zLWljb24tY29sb3IpO1xuICAgIH1cblxuICAgICYuZGlzYWJsZWQge1xuICAgICAgY29sb3I6IG5iLXRoZW1lKGFjdGlvbnMtZGlzYWJsZWQtdGV4dC1jb2xvcik7XG5cbiAgICAgIG5iLWljb24ge1xuICAgICAgICBjb2xvcjogbmItdGhlbWUoYWN0aW9ucy1kaXNhYmxlZC1pY29uLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLXNlYXJjaC10aGVtZSgpIHtcblxuICBuYi1zZWFyY2gtZmllbGQge1xuICAgIC5jbG9zZS1idXR0b24ge1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAuc2VhcmNoIHtcbiAgICAgIGJhY2tncm91bmQ6IG5iLXRoZW1lKHNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuICAgICAgc3Bhbi5pbmZvIHtcbiAgICAgICAgY29sb3I6IG5iLXRoZW1lKHNlYXJjaC1pbmZvLXRleHQtY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogbmItdGhlbWUoc2VhcmNoLWluZm8tdGV4dC1mb250LWZhbWlseSk7XG4gICAgICAgIGZvbnQtc2l6ZTogbmItdGhlbWUoc2VhcmNoLWluZm8tdGV4dC1mb250LXNpemUpO1xuICAgICAgICBmb250LXdlaWdodDogbmItdGhlbWUoc2VhcmNoLWluZm8tdGV4dC1mb250LXdlaWdodCk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBuYi10aGVtZShzZWFyY2gtaW5mby10ZXh0LWxpbmUtaGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQge1xuICAgICAgICBib3JkZXItYm90dG9tOiBuYi10aGVtZShzZWFyY2gtZGl2aWRlci13aWR0aCkgbmItdGhlbWUoc2VhcmNoLWRpdmlkZXItc3R5bGUpIG5iLXRoZW1lKHNlYXJjaC1kaXZpZGVyLWNvbG9yKTtcbiAgICAgICAgY29sb3I6IG5iLXRoZW1lKHNlYXJjaC10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IG5iLXRoZW1lKHNlYXJjaC10ZXh0LWZvbnQtZmFtaWx5KTtcbiAgICAgICAgZm9udC1zaXplOiBuYi10aGVtZShzZWFyY2gtdGV4dC1mb250LXNpemUpO1xuICAgICAgICBmb250LXdlaWdodDogbmItdGhlbWUoc2VhcmNoLXRleHQtZm9udC13ZWlnaHQpO1xuICAgICAgICBsaW5lLWhlaWdodDogbmItdGhlbWUoc2VhcmNoLXRleHQtbGluZS1oZWlnaHQpO1xuXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBjb2xvcjogbmItdGhlbWUoc2VhcmNoLXBsYWNlaG9sZGVyLXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LW1zLWNsZWFyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5yb3RhdGUtbGF5b3V0IHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiBuYi10aGVtZShzZWFyY2gtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuXG4gICAgJi5tb2RhbC16b29taW4ge1xuICAgICAgLnNlYXJjaDo6YmVmb3JlLFxuICAgICAgLnNlYXJjaDo6YWZ0ZXIge1xuICAgICAgICBib3JkZXI6IDEuNXJlbSBzb2xpZCBuYi10aGVtZShzZWFyY2gtZXh0cmEtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAmLm1vZGFsLWhhbGYge1xuICAgICAgLmZvcm0td3JhcHBlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5iLXRoZW1lKHNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIC5zZWFyY2g6OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5iLXRoZW1lKHNlYXJjaC1leHRyYS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1vZGFsLWRyb3Age1xuICAgICAgLmZvcm0tY29udGVudDo6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBuYi10aGVtZShzZWFyY2gtZGl2aWRlci1jb2xvcik7XG4gICAgICB9XG4gICAgICAuc2VhcmNoOjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiBuYi10aGVtZShzZWFyY2gtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5jdXJ0YWluIHtcbiAgICAgIC5zZWFyY2g6OmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbmItdGhlbWUoc2VhcmNoLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgfVxuICAgICAgLnNlYXJjaCB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5iLXRoZW1lKHNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmNvbHVtbi1jdXJ0YWluIHtcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5iLXRoZW1lKHNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgICAmLnNob3c6OmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbmItdGhlbWUoc2VhcmNoLWV4dHJhLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi8uLi9zdHlsZXMvY29yZS9taXhpbnMnO1xuXG5AbWl4aW4gbmItY2hlY2tib3gtdGhlbWUoKSB7XG4gIG5iLWNoZWNrYm94IHtcbiAgICAubGFiZWwge1xuICAgICAgcGFkZGluZzogbmItdGhlbWUoY2hlY2tib3gtcGFkZGluZyk7XG4gICAgfVxuXG4gICAgLmN1c3RvbS1jaGVja2JveCB7XG4gICAgICB3aWR0aDogbmItdGhlbWUoY2hlY2tib3gtd2lkdGgpO1xuICAgICAgaGVpZ2h0OiBuYi10aGVtZShjaGVja2JveC1oZWlnaHQpO1xuICAgICAgYm9yZGVyLXN0eWxlOiBuYi10aGVtZShjaGVja2JveC1ib3JkZXItc3R5bGUpO1xuICAgICAgYm9yZGVyLXdpZHRoOiBuYi10aGVtZShjaGVja2JveC1ib3JkZXItd2lkdGgpO1xuICAgICAgYm9yZGVyLXJhZGl1czogbmItdGhlbWUoY2hlY2tib3gtYm9yZGVyLXJhZGl1cyk7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLm5hdGl2ZS1pbnB1dDpmb2N1czpub3QoOmNoZWNrZWQpICsgLmN1c3RvbS1jaGVja2JveCB7XG4gICAgICAkaW5zZXQtc2hhZG93OiBuYi10aGVtZShjaGVja2JveC1mb2N1cy1pbnNldC1zaGFkb3ctbGVuZ3RoKTtcbiAgICAgIEBpbmNsdWRlIG5iLW91dGxpbmUobmItdGhlbWUoY2hlY2tib3gtb3V0bGluZS13aWR0aCksIG5iLXRoZW1lKGNoZWNrYm94LW91dGxpbmUtY29sb3IpLCAkaW5zZXQtc2hhZG93KTtcbiAgICB9XG4gICAgLm5hdGl2ZS1pbnB1dDpmb2N1czpjaGVja2VkICsgLmN1c3RvbS1jaGVja2JveCB7XG4gICAgICBAaW5jbHVkZSBuYi1vdXRsaW5lKG5iLXRoZW1lKGNoZWNrYm94LW91dGxpbmUtd2lkdGgpLCBuYi10aGVtZShjaGVja2JveC1vdXRsaW5lLWNvbG9yKSk7XG4gICAgfVxuXG4gICAgbmItaWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICBmb250LWZhbWlseTogbmItdGhlbWUoY2hlY2tib3gtdGV4dC1mb250LWZhbWlseSk7XG4gICAgICBmb250LXNpemU6IG5iLXRoZW1lKGNoZWNrYm94LXRleHQtZm9udC1zaXplKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBuYi10aGVtZShjaGVja2JveC10ZXh0LWZvbnQtd2VpZ2h0KTtcbiAgICAgIGxpbmUtaGVpZ2h0OiBuYi10aGVtZShjaGVja2JveC10ZXh0LWxpbmUtaGVpZ2h0KTtcblxuICAgICAgJjpub3QoOmVtcHR5KSB7XG4gICAgICAgIEBpbmNsdWRlIG5iLWx0cihwYWRkaW5nLWxlZnQsIG5iLXRoZW1lKGNoZWNrYm94LXRleHQtc3BhY2UpKTtcbiAgICAgICAgQGluY2x1ZGUgbmItcnRsKHBhZGRpbmctcmlnaHQsIG5iLXRoZW1lKGNoZWNrYm94LXRleHQtc3BhY2UpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAZWFjaCAkc3RhdHVzIGluIG5iLWdldC1zdGF0dXNlcygpIHtcbiAgICBAaW5jbHVkZSBuYi1jaGVja2JveC1zdGF0dXMoJHN0YXR1cyk7XG4gIH1cbn1cblxuQG1peGluIG5iLWNoZWNrYm94LXN0YXR1cygkc3RhdHVzOiAnJykge1xuICBuYi1jaGVja2JveC5zdGF0dXMtI3skc3RhdHVzfSB7XG4gICAgLmN1c3RvbS1jaGVja2JveCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShjaGVja2JveC0jeyRzdGF0dXN9LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShjaGVja2JveC0jeyRzdGF0dXN9LWJvcmRlci1jb2xvcik7XG4gICAgfVxuXG4gICAgLnRleHQge1xuICAgICAgY29sb3I6IG5iLXRoZW1lKGNoZWNrYm94LSN7JHN0YXR1c30tdGV4dC1jb2xvcik7XG4gICAgfVxuXG4gICAgLmN1c3RvbS1jaGVja2JveC5jaGVja2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGNoZWNrYm94LSN7JHN0YXR1c30tY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUoY2hlY2tib3gtI3skc3RhdHVzfS1jaGVja2VkLWJvcmRlci1jb2xvcik7XG5cbiAgICAgIG5iLWljb24ge1xuICAgICAgICBjb2xvcjogbmItdGhlbWUoY2hlY2tib3gtI3skc3RhdHVzfS1jaGVja2VkLWNoZWNrbWFyay1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmN1c3RvbS1jaGVja2JveC5pbmRldGVybWluYXRlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGNoZWNrYm94LSN7JHN0YXR1c30taW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUoY2hlY2tib3gtI3skc3RhdHVzfS1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcik7XG5cbiAgICAgIG5iLWljb24ge1xuICAgICAgICBjb2xvcjogbmItdGhlbWUoY2hlY2tib3gtI3skc3RhdHVzfS1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5hdGl2ZS1pbnB1dDplbmFibGVkOmZvY3VzICsgLmN1c3RvbS1jaGVja2JveCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShjaGVja2JveC0jeyRzdGF0dXN9LWZvY3VzLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShjaGVja2JveC0jeyRzdGF0dXN9LWZvY3VzLWJvcmRlci1jb2xvcik7XG5cbiAgICAgICYuaW5kZXRlcm1pbmF0ZSxcbiAgICAgICYuY2hlY2tlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGNoZWNrYm94LSN7JHN0YXR1c30tZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShjaGVja2JveC0jeyRzdGF0dXN9LWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY3VzdG9tLWNoZWNrYm94OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGNoZWNrYm94LSN7JHN0YXR1c30taG92ZXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICBib3JkZXItY29sb3I6IG5iLXRoZW1lKGNoZWNrYm94LSN7JHN0YXR1c30taG92ZXItYm9yZGVyLWNvbG9yKTtcblxuICAgICAgJi5pbmRldGVybWluYXRlLFxuICAgICAgJi5jaGVja2VkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUoY2hlY2tib3gtI3skc3RhdHVzfS1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBib3JkZXItY29sb3I6IG5iLXRoZW1lKGNoZWNrYm94LSN7JHN0YXR1c30taG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5uYXRpdmUtaW5wdXQ6ZW5hYmxlZDphY3RpdmUgKyAuY3VzdG9tLWNoZWNrYm94IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGNoZWNrYm94LSN7JHN0YXR1c30tYWN0aXZlLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShjaGVja2JveC0jeyRzdGF0dXN9LWFjdGl2ZS1ib3JkZXItY29sb3IpO1xuXG4gICAgICAmLmluZGV0ZXJtaW5hdGUsXG4gICAgICAmLmNoZWNrZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShjaGVja2JveC0jeyRzdGF0dXN9LWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBib3JkZXItY29sb3I6IG5iLXRoZW1lKGNoZWNrYm94LSN7JHN0YXR1c30tYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmF0aXZlLWlucHV0OmRpc2FibGVkIHtcbiAgICAgICYgKyAuY3VzdG9tLWNoZWNrYm94IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUoY2hlY2tib3gtI3skc3RhdHVzfS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShjaGVja2JveC0jeyRzdGF0dXN9LWRpc2FibGVkLWJvcmRlci1jb2xvcik7XG5cbiAgICAgICAgbmItaWNvbiB7XG4gICAgICAgICAgY29sb3I6IG5iLXRoZW1lKGNoZWNrYm94LSN7JHN0YXR1c30tZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJiB+IC50ZXh0IHtcbiAgICAgICAgY29sb3I6IG5iLXRoZW1lKGNoZWNrYm94LSN7JHN0YXR1c30tZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgICAmOmluZGV0ZXJtaW5hdGUgKyAuY3VzdG9tLWNoZWNrYm94LFxuICAgICAgJjpjaGVja2VkICsgLmN1c3RvbS1jaGVja2JveCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGNoZWNrYm94LSN7JHN0YXR1c30tZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShjaGVja2JveC0jeyRzdGF0dXN9LWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLXNjcm9sbGJhcnMoJGZnLCAkYmcsICRzaXplLCAkYm9yZGVyLXJhZGl1czogJHNpemUgLyAyKSB7XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogJHNpemU7XG4gICAgaGVpZ2h0OiAkc2l6ZTtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAkZmc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICRiZztcbiAgfVxuXG4gIC8vIFRPRE86IHJlbW92ZVxuICAvLyBGb3IgSW50ZXJuZXQgRXhwbG9yZXJcbiAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICRmZztcbiAgc2Nyb2xsYmFyLXRyYWNrLWNvbG9yOiAkYmc7XG59XG5cbkBtaXhpbiBuYi1oZWFkaW5ncygkZnJvbTogMSwgJHRvOiA2KSB7XG4gIEBmb3IgJGkgZnJvbSAkZnJvbSB0aHJvdWdoICR0byB7XG4gICAgaCN7JGl9IHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG5iLW91dGxpbmUoJG91dGxpbmUtd2lkdGgsICRvdXRsaW5lLWNvbG9yLCAkaW5zZXQtc2hhZG93LWxlbmd0aDogMCkge1xuICAkb3V0c2V0LXNoYWRvdzogMCAwIDAgJG91dGxpbmUtd2lkdGggJG91dGxpbmUtY29sb3I7XG4gIGJveC1zaGFkb3c6ICRvdXRzZXQtc2hhZG93O1xuXG4gIEBpZiAoJGluc2V0LXNoYWRvdy1sZW5ndGggIT0gMCkge1xuICAgICY6bm90KDpob3Zlcik6bm90KDphY3RpdmUpIHtcbiAgICAgICRpbnNldC1zaGFkb3c6IGluc2V0ICRpbnNldC1zaGFkb3ctbGVuZ3RoICRvdXRsaW5lLWNvbG9yO1xuICAgICAgYm94LXNoYWRvdzogJG91dHNldC1zaGFkb3csICRpbnNldC1zaGFkb3c7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBob3Zlci1mb2N1cy1hY3RpdmUge1xuICAmOmZvY3VzLFxuICAmOmFjdGl2ZSxcbiAgJjpob3ZlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGNlbnRlci1ob3Jpem9udGFsLWFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgbGVmdDogNTAlO1xufVxuXG5AbWl4aW4gaW5zdGFsbC10aHVtYigpIHtcbiAgJHRodW1iLXNlbGVjdG9yczogKFxuICAgICc6Oi13ZWJraXQtc2xpZGVyLXRodW1iJ1xuICAgICc6Oi1tb3otcmFuZ2UtdGh1bWInXG4gICAgJzo6LW1zLXRodW1iJ1xuICApO1xuXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkdGh1bWItc2VsZWN0b3JzIHtcbiAgICAmI3skc2VsZWN0b3J9IHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaW5zdGFsbC10cmFjaygpIHtcbiAgJHRodW1iLXNlbGVjdG9yczogKFxuICAgICc6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrJ1xuICAgICc6Oi1tb3otcmFuZ2UtdHJhY2snXG4gICAgJzo6LW1zLXRyYWNrJ1xuICApO1xuXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkdGh1bWItc2VsZWN0b3JzIHtcbiAgICAmI3skc2VsZWN0b3J9IHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaW5zdGFsbC1wbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUsICRvcGFjaXR5OiAxKSB7XG4gICRwbGFjZWhvbGRlci1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyJ1xuICAgICc6Oi1tb3otcGxhY2Vob2xkZXInXG4gICAgJzotbW96LXBsYWNlaG9sZGVyJ1xuICAgICc6LW1zLWlucHV0LXBsYWNlaG9sZGVyJ1xuICApO1xuXG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBAaW5jbHVkZSBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUsICRvcGFjaXR5KTtcbiAgfVxuXG4gIEBlYWNoICRzZWxlY3RvciBpbiAkcGxhY2Vob2xkZXItc2VsZWN0b3JzIHtcbiAgICAmI3skc2VsZWN0b3J9IHtcbiAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnQtc2l6ZSwgJG9wYWNpdHkpO1xuICAgIH1cblxuICAgICY6Zm9jdXMjeyRzZWxlY3Rvcn0ge1xuICAgICAgQGluY2x1ZGUgcGxhY2Vob2xkZXItZm9jdXMoKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHBsYWNlaG9sZGVyKCRjb2xvciwgJGZvbnQtc2l6ZSwgJG9wYWNpdHkpIHtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXItZm9jdXMoKSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xufVxuXG5AbWl4aW4gbmItY29tcG9uZW50LWFuaW1hdGlvbigkcHJvcGVydGllcy4uLikge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1cztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogJHByb3BlcnRpZXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uKCRhbmltYXRlLi4uKSB7XG4gICRtYXg6IGxlbmd0aCgkYW5pbWF0ZSk7XG4gICRhbmltYXRpb25zOiAnJztcblxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRtYXgge1xuICAgICRhbmltYXRpb25zOiAjeyRhbmltYXRpb25zICsgbnRoKCRhbmltYXRlLCAkaSl9O1xuXG4gICAgQGlmICRpIDwgJG1heCB7XG4gICAgICAkYW5pbWF0aW9uczogI3skYW5pbWF0aW9ucyArICcsICd9O1xuICAgIH1cbiAgfVxuICAtd2Via2l0LWFuaW1hdGlvbjogJGFuaW1hdGlvbnM7XG4gIC1tb3otYW5pbWF0aW9uOiAgICAkYW5pbWF0aW9ucztcbiAgLW8tYW5pbWF0aW9uOiAgICAgICRhbmltYXRpb25zO1xuICBhbmltYXRpb246ICAgICAgICAgJGFuaW1hdGlvbnM7XG59XG5cbkBtaXhpbiBrZXlmcmFtZXMoJGFuaW1hdGlvbk5hbWUpIHtcbiAgQC13ZWJraXQta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW1vei1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEAtby1rZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEBrZXlmcmFtZXMgI3skYW5pbWF0aW9uTmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbkBtaXhpbiBidG4tcHVsc2UoJG5hbWUsICRjb2xvcikge1xuICAmLmJ0bi1wdWxzZSB7XG4gICAgQGluY2x1ZGUgYW5pbWF0aW9uKGJ0bi0jeyRuYW1lfS1wdWxzZSAxLjVzIGluZmluaXRlKTtcbiAgfVxuXG4gIEBpbmNsdWRlIGtleWZyYW1lcyhidG4tI3skbmFtZX0tcHVsc2UpIHtcbiAgICAwJSB7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgb3BhY2l0eTogbmItdGhlbWUoYnRuLWRpc2FibGVkLW9wYWNpdHkpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDFyZW0gMCAkY29sb3I7XG4gICAgICBvcGFjaXR5OiAwLjg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIG9wYWNpdHk6IG5iLXRoZW1lKGJ0bi1kaXNhYmxlZC1vcGFjaXR5KTtcbiAgICB9XG4gIH1cbn1cblxuLypcblxuQWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpY2F0aW9uIChodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXNjb3BpbmctMS8jaG9zdC1zZWxlY3Rvcilcbjpob3N0IGFuZCA6aG9zdC1jb250ZXh0IGFyZSBwc2V1ZG8tY2xhc3Nlcy4gU28gd2UgYXNzdW1lIHRoZXkgY291bGQgYmUgY29tYmluZWQsXG5saWtlIG90aGVyIHBzZXVkby1jbGFzc2VzLCBldmVuIHNhbWUgb25lcy5cbkZvciBleGFtcGxlOiAnOm50aC1vZi10eXBlKDJuKTpudGgtb2YtdHlwZShldmVuKScuXG5cbklkZWFsIHNvbHV0aW9uIHdvdWxkIGJlIHRvIHByZXBlbmQgYW55IHNlbGVjdG9yIHdpdGggOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLlxuVGhlbiBuZWJ1bGFyIGNvbXBvbmVudHMgd2lsbCBiZWhhdmUgYXMgYW4gaHRtbCBlbGVtZW50IGFuZCByZXNwb25kIHRvIFtkaXJdIGF0dHJpYnV0ZSBvbiBhbnkgbGV2ZWwsXG5zbyBkaXJlY3Rpb24gY291bGQgYmUgb3ZlcnJpZGRlbiBvbiBhbnkgY29tcG9uZW50IGxldmVsLlxuXG5JbXBsZW1lbnRhdGlvbiBjb2RlOlxuXG5AbWl4aW4gbmItcnRsKCkge1xuICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgQGF0LXJvb3Qge3NlbGVjdG9yLWFwcGVuZCgnOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pJywgJil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5BbmQgd2hlbiB3ZSBjYWxsIGl0IHNvbWV3aGVyZTpcblxuOmhvc3Qge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG46aG9zdC1jb250ZXh0KC4uLikge1xuICAuc29tZS1jbGFzcyB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgLi4uXG4gICAgfVxuICB9XG59XG5cblJlc3VsdCB3aWxsIGxvb2sgbGlrZTpcblxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuXG4qXG4gIFNpZGUgbm90ZTpcbiAgOmhvc3QtY29udGV4dCgpOmhvc3Qgc2VsZWN0b3IgYXJlIHZhbGlkLiBodHRwczovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMTVGZWIvMDMwNS5odG1sXG5cbiAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIHNob3VsZCBtYXRjaCBhbnkgcGVybXV0YXRpb24sXG4gIHNvIG9yZGVyIGlzIG5vdCBpbXBvcnRhbnQuXG4qXG5cblxuQ3VycmVudGx5LCB0aGVyZSdyZSB0d28gcHJvYmxlbXMgd2l0aCB0aGlzIGFwcHJvYWNoOlxuXG5GaXJzdCwgaXMgdGhhdCB3ZSBjYW4ndCBjb21iaW5lIDpob3N0LCA6aG9zdC1jb250ZXh0LiBBbmd1bGFyIGJ1Z3MgIzE0MzQ5LCAjMTkxOTkuXG5Gb3IgdGhlIG1vbWVudCBvZiB3cml0aW5nLCB0aGUgb25seSBwb3NzaWJsZSB3YXkgaXM6XG46aG9zdCB7XG4gIDpob3N0LWNvbnRleHQoLi4uKSB7XG4gICAgLi4uXG4gIH1cbn1cbkl0IGRvZXNuJ3Qgd29yayBmb3IgdXMgYmVjYXVzZSBtaXhpbiBjb3VsZCBiZSBjYWxsZWQgc29tZXdoZXJlIGRlZXBlciwgbGlrZTpcbjpob3N0IHtcbiAgcCB7XG4gICAgQGluY2x1ZGUgbmItcnRsKCkgeyAuLi4gfVxuICB9XG59XG5XZSBhcmUgbm90IGFibGUgdG8gZ28gdXAgdG8gOmhvc3QgbGV2ZWwgdG8gcGxhY2UgY29udGVudCBwYXNzZWQgdG8gbWl4aW4uXG5cblRoZSBzZWNvbmQgcHJvYmxlbSBpcyB0aGF0IHdlIG9ubHkgY2FuIGJlIHN1cmUgdGhhdCB3ZSBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIGFub3RoZXJcbjpob3N0Lzpob3N0LWNvbnRleHQgcHNldWRvLWNsYXNzIHdoZW4gY2FsbGVkIGluIHRoZW1lIGZpbGVzICgqLnRoZW1lLnNjc3MpLlxuICAqXG4gICAgU2lkZSBub3RlOlxuICAgIEN1cnJlbnRseSwgbmItaW5zdGFsbC1jb21wb25lbnQgdXNlcyBhbm90aGVyIGFwcHJvYWNoIHdoZXJlIDpob3N0IHByZXBlbmRlZCB3aXRoIHRoZSB0aGVtZSBuYW1lXG4gICAgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi81Yjk2MDc4NjI0YjBhNDc2MGYyZGJjZjZmZGYwYmQ2Mjc5MWJlNWJiL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDEpLFxuICAgIGJ1dCBpdCB3YXMgbWFkZSB0byBiZSBhYmxlIHRvIHVzZSBjdXJyZW50IHJlYWxpemF0aW9uIG9mIHJ0bCBhbmQgaXQgY2FuIGJlIHJld3JpdHRlbiBiYWNrIHRvXG4gICAgOmhvc3QtY29udGV4dCgkdGhlbWUpIG9uY2Ugd2Ugd2lsbCBiZSBhYmxlIHRvIHVzZSBtdWx0aXBsZSBzaGFkb3cgc2VsZWN0b3JzLlxuICAqXG5CdXQgd2hlbiBpdCdzIGNhbGxlZCBpbiAqLmNvbXBvbmVudC5zY3NzIHdlIGNhbid0IGJlIHN1cmUsIHRoYXQgc2VsZWN0b3Igc3RhcnRzIHdpdGggOmhvc3QvOmhvc3QtY29udGV4dCxcbmJlY2F1c2UgYW5ndWxhciBhbGxvd3Mgb21pdHRpbmcgcHNldWRvLWNsYXNzZXMgaWYgd2UgZG9uJ3QgbmVlZCB0byBzdHlsZSA6aG9zdCBjb21wb25lbnQgaXRzZWxmLlxuV2UgY2FuIGJyZWFrIHN1Y2ggc2VsZWN0b3JzLCBieSBqdXN0IGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gdGhlbS5cbiAgKioqXG4gICAgUG9zc2libGUgc29sdXRpb25cbiAgICBjaGVjayBpZiB3ZSBpbiB0aGVtZSBieSBzb21lIHRoZW1lIHZhcmlhYmxlcyBhbmQgaWYgc28gYXBwZW5kLCBvdGhlcndpc2UgbmVzdCBsaWtlXG4gICAgQGF0LXJvb3QgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHtcbiAgICAgIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gICAgICAvLyBpdCB3b3JrcyBpbiBjb21tZW50cyBhbmQgd2UgY2FuJ3QgdXNlIGl0IGhlcmVcbiAgICAgIHsmfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBXaGF0IGlmIDpob3N0IHNwZWNpZmllZD8gQ2FuIHdlIGFkZCBzcGFjZSBpbiA6aG9zdC1jb250ZXh0KC4uLikgOmhvc3Q/XG4gICAgT3IgbWF5YmUgYWRkIDpob3N0IHNlbGVjdG9yIGFueXdheT8gSWYgbXVsdGlwbGUgOmhvc3Qgc2VsZWN0b3JzIGFyZSBhbGxvd2VkXG4gICoqKlxuXG5cblByb2JsZW1zIHdpdGggdGhlIGN1cnJlbnQgYXBwcm9hY2guXG5cbjEuIERpcmVjdGlvbiBjYW4gYmUgYXBwbGllZCBvbmx5IG9uIGRvY3VtZW50IGxldmVsLCBiZWNhdXNlIG1peGluIHByZXBlbmRzIHRoZW1lIGNsYXNzLFxud2hpY2ggcGxhY2VkIG9uIHRoZSBib2R5LlxuMi4gKi5jb21wb25lbnQuc2NzcyBzdHlsZXMgc2hvdWxkIGJlIGluIDpob3N0IHNlbGVjdG9yLiBPdGhlcndpc2UgYW5ndWxhciB3aWxsIGFkZCBob3N0XG5hdHRyaWJ1dGUgdG8gW2Rpcj1ydGxdIGF0dHJpYnV0ZSBhcyB3ZWxsLlxuXG5cbkdlbmVyYWwgcHJvYmxlbXMuXG5cbkx0ciBpcyBkZWZhdWx0IGRvY3VtZW50IGRpcmVjdGlvbiwgYnV0IGZvciBwcm9wZXIgd29yayBvZiBuYi1sdHIgKG1lYW5zIGx0ciBvbmx5KSxcbltkaXI9bHRyXSBzaG91bGQgYmUgc3BlY2lmaWVkIGF0IGxlYXN0IHNvbWV3aGVyZS4gJzpub3QoW2Rpcj1ydGxdJyBub3QgYXBwbGljYWJsZSBoZXJlLFxuYmVjYXVzZSBpdCdzIHNhdGlzZnkgYW55IHBhcmVudCwgdGhhdCBkb24ndCBoYXZlIFtkaXI9cnRsXSBhdHRyaWJ1dGUuXG5QcmV2aW91cyBhcHByb2FjaCB3YXMgdG8gdXNlIHNpbmdsZSBydGwgbWl4aW4gYW5kIHJlc2V0IGx0ciBwcm9wZXJ0aWVzIHRvIGluaXRpYWwgdmFsdWUuXG5CdXQgc29tZXRpbWVzIGl0J3MgaGFyZCB0byBmaW5kLCB3aGF0IHRoZSBwcmV2aW91cyB2YWx1ZSBzaG91bGQgYmUuIEFuZCBzdWNoIG1peGluIGNhbGwgbG9va3MgdG9vIHZlcmJvc2UuXG4qL1xuXG5AbWl4aW4gX3ByZXBlbmQtd2l0aC1zZWxlY3Rvcigkc2VsZWN0b3IsICRwcm9wOiBudWxsLCAkdmFsdWU6IG51bGwpIHtcbiAgI3skc2VsZWN0b3J9ICYge1xuICAgIEBpZiAkcHJvcCAhPSBudWxsIHtcbiAgICAgICN7JHByb3B9OiAkdmFsdWU7XG4gICAgfVxuXG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLWx0cigkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gIEBpbmNsdWRlIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJ1tkaXI9bHRyXScsICRwcm9wLCAkdmFsdWUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbmItcnRsKCRwcm9wOiBudWxsLCAkdmFsdWU6IG51bGwpIHtcbiAgQGluY2x1ZGUgX3ByZXBlbmQtd2l0aC1zZWxlY3RvcignW2Rpcj1ydGxdJywgJHByb3AsICR2YWx1ZSkge1xuICAgIEBjb250ZW50O1xuICB9O1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AbWl4aW4gbmItdG9nZ2xlLXRoZW1lKCkge1xuICBuYi10b2dnbGUge1xuICAgIC50b2dnbGUge1xuICAgICAgaGVpZ2h0OiBuYi10aGVtZSh0b2dnbGUtaGVpZ2h0KTtcbiAgICAgIHdpZHRoOiBuYi10aGVtZSh0b2dnbGUtd2lkdGgpO1xuICAgICAgYm9yZGVyLXdpZHRoOiBuYi10aGVtZSh0b2dnbGUtYm9yZGVyLXdpZHRoKTtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBib3JkZXItcmFkaXVzOiBuYi10aGVtZSh0b2dnbGUtYm9yZGVyLXJhZGl1cyk7XG4gICAgICBjdXJzb3I6IG5iLXRoZW1lKHRvZ2dsZS1jdXJzb3IpO1xuXG4gICAgICAvKlxuICAgICAgICBXZSBuZWVkIHRvIHNldCBpbml0aWFsIHBvc2l0aW9ucyBhcyBBbmd1bGFyIGFuaW1hdGlvbnMgd29uJ3Qgd29yayBpbiBJRTExIGlmIHBvc2l0aW9ucyBoYXZlIG5vIGluaXRpYWwgdmFsdWUuXG4gICAgICAgIFNldHRpbmcgaXQgaW4gU0NTUyBhcyB3ZSBkb24ndCBoYXZlIGFjY2VzcyB0byB0aGVtZSB2YXJpYWJsZXMgZnJvbSBUUy5cbiAgICAgICovXG5cbiAgICAgICRzd2l0Y2hlci12ZXJ0aWNhbC1vZmZzZXQ6IChuYi10aGVtZSh0b2dnbGUtaGVpZ2h0KSAtIG5iLXRoZW1lKHRvZ2dsZS1zd2l0Y2hlci1zaXplKSkgLyAyO1xuICAgICAgQGluY2x1ZGUgbmItbHRyKCkge1xuICAgICAgICAmLmNoZWNrZWQgLnRvZ2dsZS1zd2l0Y2hlciB7XG4gICAgICAgICAgbGVmdDogY2FsYygxMDAlXG4gICAgICAgICAgICAgICAgICAgICAtICN7bmItdGhlbWUodG9nZ2xlLXN3aXRjaGVyLXNpemUpfVxuICAgICAgICAgICAgICAgICAgICAgLSAje25iLXRoZW1lKHRvZ2dsZS1ib3JkZXItd2lkdGgpfVxuICAgICAgICAgICAgICAgICAgICAgLSAjeyRzd2l0Y2hlci12ZXJ0aWNhbC1vZmZzZXR9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bm90KC5jaGVja2VkKSAudG9nZ2xlLXN3aXRjaGVyIHtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAgICYuY2hlY2tlZCAudG9nZ2xlLXN3aXRjaGVyIHtcbiAgICAgICAgICByaWdodDogY2FsYygxMDAlXG4gICAgICAgICAgICAgICAgICAgICAgLSAje25iLXRoZW1lKHRvZ2dsZS1zd2l0Y2hlci1zaXplKX1cbiAgICAgICAgICAgICAgICAgICAgICAtICN7bmItdGhlbWUodG9nZ2xlLWJvcmRlci13aWR0aCl9XG4gICAgICAgICAgICAgICAgICAgICAgLSAjeyRzd2l0Y2hlci12ZXJ0aWNhbC1vZmZzZXR9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bm90KC5jaGVja2VkKSAudG9nZ2xlLXN3aXRjaGVyIHtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5hdGl2ZS1pbnB1dDplbmFibGVkOmZvY3VzICsgLnRvZ2dsZSB7XG4gICAgICBAaW5jbHVkZSBuYi1vdXRsaW5lKG5iLXRoZW1lKHRvZ2dsZS1vdXRsaW5lLXdpZHRoKSwgbmItdGhlbWUodG9nZ2xlLW91dGxpbmUtY29sb3IpKTtcbiAgICB9XG5cbiAgICAubmF0aXZlLWlucHV0OmRpc2FibGVkICsgLnRvZ2dsZSB7XG4gICAgICBjdXJzb3I6IG5iLXRoZW1lKHRvZ2dsZS1kaXNhYmxlZC1jdXJzb3IpO1xuICAgIH1cblxuICAgIC50b2dnbGUtc3dpdGNoZXIge1xuICAgICAgd2lkdGg6IG5iLXRoZW1lKHRvZ2dsZS1zd2l0Y2hlci1zaXplKTtcbiAgICAgIGhlaWdodDogbmItdGhlbWUodG9nZ2xlLXN3aXRjaGVyLXNpemUpO1xuXG4gICAgICBuYi1pY29uIHtcbiAgICAgICAgaGVpZ2h0OiBuYi10aGVtZSh0b2dnbGUtc3dpdGNoZXItaWNvbi1zaXplKTtcbiAgICAgICAgd2lkdGg6IG5iLXRoZW1lKHRvZ2dsZS1zd2l0Y2hlci1pY29uLXNpemUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50ZXh0IHtcbiAgICAgIGZvbnQtZmFtaWx5OiBuYi10aGVtZSh0b2dnbGUtdGV4dC1mb250LWZhbWlseSk7XG4gICAgICBmb250LXNpemU6IG5iLXRoZW1lKHRvZ2dsZS10ZXh0LWZvbnQtc2l6ZSk7XG4gICAgICBmb250LXdlaWdodDogbmItdGhlbWUodG9nZ2xlLXRleHQtZm9udC13ZWlnaHQpO1xuICAgICAgbGluZS1oZWlnaHQ6IG5iLXRoZW1lKHRvZ2dsZS10ZXh0LWxpbmUtaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBAZWFjaCAkc3RhdHVzIGluIG5iLWdldC1zdGF0dXNlcygpIHtcbiAgICBAaW5jbHVkZSBuYi10b2dnbGUtc3RhdHVzKCRzdGF0dXMpO1xuICB9XG59XG5cbkBtaXhpbiBuYi10b2dnbGUtc3RhdHVzKCRzdGF0dXMpIHtcbiAgbmItdG9nZ2xlLnN0YXR1cy0jeyRzdGF0dXN9IHtcblxuICAgIC50ZXh0IHtcbiAgICAgIGNvbG9yOiBuYi10aGVtZSh0b2dnbGUtI3skc3RhdHVzfS10ZXh0LWNvbG9yKTtcbiAgICB9XG5cbiAgICAudG9nZ2xlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKHRvZ2dsZS0jeyRzdGF0dXN9LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZSh0b2dnbGUtI3skc3RhdHVzfS1ib3JkZXItY29sb3IpO1xuICAgIH1cblxuICAgIC50b2dnbGUuY2hlY2tlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZSh0b2dnbGUtI3skc3RhdHVzfS1jaGVja2VkLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZSh0b2dnbGUtI3skc3RhdHVzfS1jaGVja2VkLWJvcmRlci1jb2xvcik7XG4gICAgfVxuXG4gICAgLm5hdGl2ZS1pbnB1dDplbmFibGVkIHtcbiAgICAgICY6Zm9jdXMgKyAudG9nZ2xlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUodG9nZ2xlLSN7JHN0YXR1c30tZm9jdXMtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUodG9nZ2xlLSN7JHN0YXR1c30tZm9jdXMtYm9yZGVyLWNvbG9yKTtcblxuICAgICAgICAmLmNoZWNrZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKHRvZ2dsZS0jeyRzdGF0dXN9LWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZSh0b2dnbGUtI3skc3RhdHVzfS1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjphY3RpdmUgKyAudG9nZ2xlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUodG9nZ2xlLSN7JHN0YXR1c30tYWN0aXZlLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBib3JkZXItY29sb3I6IG5iLXRoZW1lKHRvZ2dsZS0jeyRzdGF0dXN9LWFjdGl2ZS1ib3JkZXItY29sb3IpO1xuXG4gICAgICAgICYuY2hlY2tlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUodG9nZ2xlLSN7JHN0YXR1c30tYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZSh0b2dnbGUtI3skc3RhdHVzfS1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5hdGl2ZS1pbnB1dDplbmFibGVkICsgLnRvZ2dsZTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZSh0b2dnbGUtI3skc3RhdHVzfS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUodG9nZ2xlLSN7JHN0YXR1c30taG92ZXItYm9yZGVyLWNvbG9yKTtcblxuICAgICAgJi5jaGVja2VkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUodG9nZ2xlLSN7JHN0YXR1c30taG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZSh0b2dnbGUtI3skc3RhdHVzfS1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRvZ2dsZS1zd2l0Y2hlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZSh0b2dnbGUtI3skc3RhdHVzfS1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3IpO1xuXG4gICAgICBuYi1pY29uIHtcbiAgICAgICAgY29sb3I6IG5iLXRoZW1lKHRvZ2dsZS0jeyRzdGF0dXN9LWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubmF0aXZlLWlucHV0OmRpc2FibGVkIHtcbiAgICAgICYgKyAudG9nZ2xlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUodG9nZ2xlLSN7JHN0YXR1c30tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUodG9nZ2xlLSN7JHN0YXR1c30tZGlzYWJsZWQtYm9yZGVyLWNvbG9yKTtcblxuICAgICAgICAudG9nZ2xlLXN3aXRjaGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZSh0b2dnbGUtI3skc3RhdHVzfS1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yKTtcblxuICAgICAgICAgIG5iLWljb24ge1xuICAgICAgICAgICAgY29sb3I6IG5iLXRoZW1lKHRvZ2dsZS0jeyRzdGF0dXN9LWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJiB+IC50ZXh0IHtcbiAgICAgICAgY29sb3I6IG5iLXRoZW1lKHRvZ2dsZS0jeyRzdGF0dXN9LWRpc2FibGVkLXRleHQtY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AbWl4aW4gbmItcHJvZ3Jlc3MtYmFyLXRoZW1lKCkge1xuICBuYi1wcm9ncmVzcy1iYXIge1xuICAgIC5wcm9ncmVzcy1jb250YWluZXIge1xuICAgICAgYm9yZGVyLXJhZGl1czogbmItdGhlbWUocHJvZ3Jlc3MtYmFyLWJvcmRlci1yYWRpdXMpO1xuICAgIH1cblxuICAgIC5wcm9ncmVzcy12YWx1ZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZm9udC1mYW1pbHk6IG5iLXRoZW1lKHByb2dyZXNzLWJhci10ZXh0LWZvbnQtZmFtaWx5KTtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IG5iLXRoZW1lKHByb2dyZXNzLWJhci1hbmltYXRpb24tZHVyYXRpb24pO1xuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGgsIGJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgQGVhY2ggJHNpemUgaW4gbmItZ2V0LXNpemVzKCkge1xuXG4gICAgbmItcHJvZ3Jlc3MtYmFyLnNpemUtI3skc2l6ZX0ge1xuICAgICAgLnByb2dyZXNzLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogbmItdGhlbWUocHJvZ3Jlc3MtYmFyLSN7JHNpemV9LWhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIC5wcm9ncmVzcy12YWx1ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogbmItdGhlbWUocHJvZ3Jlc3MtYmFyLSN7JHNpemV9LXRleHQtZm9udC1zaXplKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5iLXRoZW1lKHByb2dyZXNzLWJhci0jeyRzaXplfS10ZXh0LWZvbnQtd2VpZ2h0KTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5iLXRoZW1lKHByb2dyZXNzLWJhci0jeyRzaXplfS10ZXh0LWxpbmUtaGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAZWFjaCAkc3RhdHVzIGluIG5iLWdldC1zdGF0dXNlcygpIHtcblxuICAgIG5iLXByb2dyZXNzLWJhci5zdGF0dXMtI3skc3RhdHVzfSB7XG4gICAgICAucHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUocHJvZ3Jlc3MtYmFyLSN7JHN0YXR1c30tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5wcm9ncmVzcy12YWx1ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKHByb2dyZXNzLWJhci0jeyRzdGF0dXN9LWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgY29sb3I6IG5iLXRoZW1lKHByb2dyZXNzLWJhci0jeyRzdGF0dXN9LXRleHQtY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi1iYWRnZS10aGVtZSgpIHtcbiAgbmItYmFkZ2Uge1xuICAgIGJvcmRlci1yYWRpdXM6IG5iLXRoZW1lKGJhZGdlLWJvcmRlci1yYWRpdXMpO1xuICAgIGZvbnQtZmFtaWx5OiBuYi10aGVtZShiYWRnZS10ZXh0LWZvbnQtZmFtaWx5KTtcbiAgICBmb250LXNpemU6IG5iLXRoZW1lKGJhZGdlLXRleHQtZm9udC1zaXplKTtcbiAgICBmb250LXdlaWdodDogbmItdGhlbWUoYmFkZ2UtdGV4dC1mb250LXdlaWdodCk7XG4gICAgbGluZS1oZWlnaHQ6IG5iLXRoZW1lKGJhZGdlLXRleHQtbGluZS1oZWlnaHQpO1xuICAgIHBhZGRpbmc6IG5iLXRoZW1lKGJhZGdlLXBhZGRpbmcpO1xuICB9XG5cbiAgQGVhY2ggJHN0YXR1cyBpbiBuYi1nZXQtc3RhdHVzZXMoKSB7XG4gICAgbmItYmFkZ2Uuc3RhdHVzLSN7JHN0YXR1c30ge1xuICAgICAgY29sb3I6IG5iLXRoZW1lKGJhZGdlLSN7JHN0YXR1c30tdGV4dC1jb2xvcik7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShiYWRnZS0jeyRzdGF0dXN9LWJhY2tncm91bmQtY29sb3IpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AbWl4aW4gbmItYWxlcnQtdGhlbWUoKSB7XG4gIG5iLWFsZXJ0IHtcbiAgICBib3JkZXItcmFkaXVzOiBuYi10aGVtZShhbGVydC1ib3JkZXItcmFkaXVzKTtcbiAgICBib3gtc2hhZG93OiBuYi10aGVtZShhbGVydC1zaGFkb3cpO1xuICAgIGZvbnQtZmFtaWx5OiBuYi10aGVtZShhbGVydC10ZXh0LWZvbnQtZmFtaWx5KTtcbiAgICBmb250LXNpemU6IG5iLXRoZW1lKGFsZXJ0LXRleHQtZm9udC1zaXplKTtcbiAgICBmb250LXdlaWdodDogbmItdGhlbWUoYWxlcnQtdGV4dC1mb250LXdlaWdodCk7XG4gICAgbGluZS1oZWlnaHQ6IG5iLXRoZW1lKGFsZXJ0LXRleHQtbGluZS1oZWlnaHQpO1xuICAgIHBhZGRpbmc6IG5iLXRoZW1lKGFsZXJ0LXBhZGRpbmcpO1xuXG4gICAgLy8gVE9ETzogbW92ZSBhbGVydCBtYXJnaW4gc3R5bGUgdG8gbGF5b3V0XG4gICAgbWFyZ2luLWJvdHRvbTogbmItdGhlbWUoYWxlcnQtYm90dG9tLW1hcmdpbik7XG5cbiAgICBAaW5jbHVkZSBuYi1zY3JvbGxiYXJzKFxuICAgICAgICBuYi10aGVtZShhbGVydC1zY3JvbGxiYXItY29sb3IpLFxuICAgICAgICBuYi10aGVtZShhbGVydC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvciksXG4gICAgICAgIG5iLXRoZW1lKGFsZXJ0LXNjcm9sbGJhci13aWR0aCkpO1xuXG4gICAgJi5jbG9zYWJsZSB7XG4gICAgICBAaW5jbHVkZSBuYi1sdHIocGFkZGluZy1yaWdodCwgbmItdGhlbWUoYWxlcnQtY2xvc2FibGUtc3RhcnQtcGFkZGluZykpO1xuICAgICAgQGluY2x1ZGUgbmItcnRsKHBhZGRpbmctbGVmdCwgbmItdGhlbWUoYWxlcnQtY2xvc2FibGUtc3RhcnQtcGFkZGluZykpO1xuICAgIH1cblxuICAgIC5jbG9zZSB7XG4gICAgICBwYWRkaW5nOiBuYi10aGVtZShhbGVydC1wYWRkaW5nKTtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgIH1cbiAgfVxuXG4gIEBlYWNoICRzaXplIGluIG5iLWdldC1zaXplcygpIHtcbiAgICBuYi1hbGVydC5zaXplLSN7JHNpemV9IHtcbiAgICAgIGhlaWdodDogbmItdGhlbWUoYWxlcnQtI3skc2l6ZX0taGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBAZWFjaCAkc3RhdHVzIGluIG5iLWdldC1zdGF0dXNlcygpIHtcbiAgICBuYi1hbGVydCB7XG4gICAgICAmLnN0YXR1cy0jeyRzdGF0dXN9IHtcbiAgICAgICAgY29sb3I6IG5iLXRoZW1lKGFsZXJ0LSN7JHN0YXR1c30tdGV4dC1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGFsZXJ0LSN7JHN0YXR1c30tYmFja2dyb3VuZC1jb2xvcik7XG5cbiAgICAgICAgYSxcbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6IG5iLXRoZW1lKGFsZXJ0LSN7JHN0YXR1c30tdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5hY2NlbnQtI3skc3RhdHVzfSB7XG4gICAgICAgIGJvcmRlci10b3A6IG5iLXRoZW1lKGFsZXJ0LWJvcmRlci1yYWRpdXMpIHNvbGlkIG5iLXRoZW1lKGFsZXJ0LWFjY2VudC0jeyRzdGF0dXN9LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgJi5vdXRsaW5lLSN7JHN0YXR1c30ge1xuICAgICAgICBib3JkZXI6IG5iLXRoZW1lKGFsZXJ0LW91dGxpbmUtd2lkdGgpIHNvbGlkIG5iLXRoZW1lKGFsZXJ0LW91dGxpbmUtI3skc3RhdHVzfS1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLWNoYXQtdGhlbWUoKSB7XG5cbiAgbmItY2hhdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUoY2hhdC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBib3JkZXI6IG5iLXRoZW1lKGNoYXQtYm9yZGVyKTtcbiAgICBib3JkZXItcmFkaXVzOiBuYi10aGVtZShjaGF0LWJvcmRlci1yYWRpdXMpO1xuICAgIGJveC1zaGFkb3c6IG5iLXRoZW1lKGNoYXQtc2hhZG93KTtcblxuICAgIGNvbG9yOiBuYi10aGVtZShjaGF0LXRleHQtY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiBuYi10aGVtZShjaGF0LXRleHQtZm9udC1mYW1pbHkpO1xuICAgIGZvbnQtc2l6ZTogbmItdGhlbWUoY2hhdC10ZXh0LWZvbnQtc2l6ZSk7XG4gICAgZm9udC13ZWlnaHQ6IG5iLXRoZW1lKGNoYXQtdGV4dC1mb250LXdlaWdodCk7XG4gICAgbGluZS1oZWlnaHQ6IG5iLXRoZW1lKGNoYXQtdGV4dC1saW5lLWhlaWdodCk7XG5cbiAgICBuYi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IG5iLXRoZW1lKGNoYXQtZGl2aWRlci13aWR0aCkgbmItdGhlbWUoY2hhdC1kaXZpZGVyLXN0eWxlKSBuYi10aGVtZShjaGF0LWRpdmlkZXItY29sb3IpO1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogbmItdGhlbWUoY2hhdC1ib3JkZXItcmFkaXVzKTtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBuYi10aGVtZShjaGF0LWJvcmRlci1yYWRpdXMpO1xuICAgICAgcGFkZGluZzogbmItdGhlbWUoY2hhdC1wYWRkaW5nKTtcblxuICAgICAgZm9udC1mYW1pbHk6IG5iLXRoZW1lKGNoYXQtaGVhZGVyLXRleHQtZm9udC1mYW1pbHkpO1xuICAgICAgZm9udC1zaXplOiBuYi10aGVtZShjaGF0LWhlYWRlci10ZXh0LWZvbnQtc2l6ZSk7XG4gICAgICBmb250LXdlaWdodDogbmItdGhlbWUoY2hhdC1oZWFkZXItdGV4dC1mb250LXdlaWdodCk7XG4gICAgICBsaW5lLWhlaWdodDogbmItdGhlbWUoY2hhdC1oZWFkZXItdGV4dC1saW5lLWhlaWdodCk7XG4gICAgfVxuXG4gICAgLnNjcm9sbGFibGUge1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBmbGV4OiAxO1xuICAgICAgQGluY2x1ZGUgbmItc2Nyb2xsYmFycyhcbiAgICAgICAgICBuYi10aGVtZShjaGF0LXNjcm9sbGJhci1jb2xvciksXG4gICAgICAgICAgbmItdGhlbWUoY2hhdC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvciksXG4gICAgICAgICAgbmItdGhlbWUoY2hhdC1zY3JvbGxiYXItd2lkdGgpKTtcbiAgICB9XG5cbiAgICAubWVzc2FnZXMge1xuICAgICAgcGFkZGluZzogbmItdGhlbWUoY2hhdC1wYWRkaW5nKTtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5uby1tZXNzYWdlcyB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgQGVhY2ggJHNpemUgaW4gbmItZ2V0LXNpemVzKCkge1xuICAgIG5iLWNoYXQuc2l6ZS0jeyRzaXplfSB7XG4gICAgICBoZWlnaHQ6IG5iLXRoZW1lKGNoYXQtI3skc2l6ZX0taGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBAZWFjaCAkc3RhdHVzIGluIG5iLWdldC1zdGF0dXNlcygpIHtcbiAgICBuYi1jaGF0LnN0YXR1cy0jeyRzdGF0dXN9IHtcbiAgICAgIC5oZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShjaGF0LSN7JHN0YXR1c30tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGNvbG9yOiBuYi10aGVtZShjaGF0LSN7JHN0YXR1c30tdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmItY2hhdC1tZXNzYWdlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgLm1lc3NhZ2Uge1xuICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAuYXZhdGFyIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgYmFja2dyb3VuZDogbmItdGhlbWUoY2hhdC1tZXNzYWdlLWF2YXRhci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgd2lkdGg6IDIuNXJlbTtcbiAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgbmItY2hhdC1tZXNzYWdlLXRleHQge1xuXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgLnNlbmRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGNvbG9yOiBuYi10aGVtZShjaGF0LW1lc3NhZ2Utc2VuZGVyLXRleHQtY29sb3IpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cblxuICAgICAgLnRleHQge1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmItY2hhdC1tZXNzYWdlLWZpbGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogbmItdGhlbWUoY2hhdC1tZXNzYWdlLWZpbGUtdGV4dC1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQ6IG5iLXRoZW1lKGNoYXQtbWVzc2FnZS1maWxlLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbmItdGhlbWUoY2hhdC1tZXNzYWdlLWZpbGUtdGV4dC1jb2xvcik7XG4gICAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICAgICAgaGVpZ2h0OiAxMHJlbTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogbmItdGhlbWUoY2hhdC1tZXNzYWdlLWZpbGUtdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBuYi1jaGF0LW1lc3NhZ2UtdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICB9XG5cbiAgICAgIC5tZXNzYWdlLWNvbnRlbnQtZ3JvdXAge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgQGluY2x1ZGUgbmItbHRyKG1hcmdpbi1yaWdodCwgMXJlbSk7XG4gICAgICAgICAgQGluY2x1ZGUgbmItcnRsKG1hcmdpbi1sZWZ0LCAxcmVtKTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgIHdpZHRoOiA1cmVtO1xuICAgICAgICAgIGhlaWdodDogNXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG5iLWNoYXQtbWVzc2FnZS1xdW90ZSB7XG5cbiAgICAgIHAucXVvdGUge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IG5iLXRoZW1lKGNoYXQtbWVzc2FnZS1xdW90ZS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgY29sb3I6IG5iLXRoZW1lKGNoYXQtbWVzc2FnZS1xdW90ZS10ZXh0LWNvbG9yKTtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICB9XG5cbiAgICAgIC5zZW5kZXIge1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBjb2xvcjogbmItdGhlbWUoY2hhdC1tZXNzYWdlLXNlbmRlci10ZXh0LWNvbG9yKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgICYubm90LXJlcGx5IHtcbiAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgQGluY2x1ZGUgbmItbHRyKG1hcmdpbi1sZWZ0LCAwLjVyZW0pO1xuICAgICAgICBAaW5jbHVkZSBuYi1ydGwobWFyZ2luLXJpZ2h0LCAwLjVyZW0pO1xuXG4gICAgICAgIEBpbmNsdWRlIG5iLWx0cihtYXJnaW4tcmlnaHQsIDNyZW0pO1xuICAgICAgICBAaW5jbHVkZSBuYi1ydGwobWFyZ2luLWxlZnQsIDNyZW0pO1xuICAgICAgfVxuXG4gICAgICBuYi1jaGF0LW1lc3NhZ2UtdGV4dCB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICBAaW5jbHVkZSBuYi1sdHIoYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgMCk7XG4gICAgICAgICAgQGluY2x1ZGUgbmItcnRsKGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCAwKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBuYi10aGVtZShjaGF0LW1lc3NhZ2UtYmFja2dyb3VuZCk7XG4gICAgICAgICAgY29sb3I6IG5iLXRoZW1lKGNoYXQtbWVzc2FnZS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBuYi1jaGF0LW1lc3NhZ2UtZmlsZSB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuICAgIH1cblxuICAgICYucmVwbHkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuXG4gICAgICAubWVzc2FnZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuXG4gICAgICAgIEBpbmNsdWRlIG5iLWx0cihtYXJnaW4tcmlnaHQsIDAuNXJlbSk7XG4gICAgICAgIEBpbmNsdWRlIG5iLXJ0bChtYXJnaW4tbGVmdCwgMC41cmVtKTtcblxuICAgICAgICBAaW5jbHVkZSBuYi1sdHIobWFyZ2luLWxlZnQsIDNyZW0pO1xuICAgICAgICBAaW5jbHVkZSBuYi1ydGwobWFyZ2luLXJpZ2h0LCAzcmVtKTtcbiAgICAgIH1cblxuICAgICAgbmItY2hhdC1tZXNzYWdlLXRleHQge1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIC5zZW5kZXIge1xuICAgICAgICAgIEBpbmNsdWRlIG5iLWx0cih0ZXh0LWFsaWduLCByaWdodCk7XG4gICAgICAgICAgQGluY2x1ZGUgbmItcnRsKHRleHQtYWxpZ24sIGxlZnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIEBpbmNsdWRlIG5iLWx0cihib3JkZXItdG9wLXJpZ2h0LXJhZGl1cywgMCk7XG4gICAgICAgICAgQGluY2x1ZGUgbmItcnRsKGJvcmRlci10b3AtbGVmdC1yYWRpdXMsIDApO1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5iLXRoZW1lKGNoYXQtbWVzc2FnZS1yZXBseS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICBjb2xvcjogbmItdGhlbWUoY2hhdC1tZXNzYWdlLXJlcGx5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG5iLWNoYXQtbWVzc2FnZS1maWxlIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5iLWNoYXQtZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IG5iLXRoZW1lKGNoYXQtcGFkZGluZyk7XG4gICAgYm9yZGVyLXRvcDogbmItdGhlbWUoY2hhdC1kaXZpZGVyLXdpZHRoKSBuYi10aGVtZShjaGF0LWRpdmlkZXItc3R5bGUpIG5iLXRoZW1lKGNoYXQtZGl2aWRlci1jb2xvcik7XG5cbiAgICAubWVzc2FnZS1yb3cge1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgaW5wdXQge1xuICAgICAgZmxleDogMTtcblxuICAgICAgJi53aXRoLWJ1dHRvbiB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgQGluY2x1ZGUgbmItbHRyKGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzLCAwKTtcbiAgICAgICAgQGluY2x1ZGUgbmItbHRyKGJvcmRlci10b3AtcmlnaHQtcmFkaXVzLCAwKTtcbiAgICAgICAgQGluY2x1ZGUgbmItcnRsKGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMsIDApO1xuICAgICAgICBAaW5jbHVkZSBuYi1ydGwoYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cywgMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNlbmQtYnV0dG9uIHtcbiAgICAgIG5iLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIH1cblxuICAgICAgQGluY2x1ZGUgbmItbHRyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgIH1cbiAgICAgIEBpbmNsdWRlIG5iLXJ0bCB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZHJvcHBlZC1maWxlcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgZGl2IHtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgd2lkdGg6IDNyZW07XG4gICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICBAaW5jbHVkZSBuYi1sdHIobWFyZ2luLXJpZ2h0LCAwLjVyZW0pO1xuICAgICAgICBAaW5jbHVkZSBuYi1ydGwobWFyZ2luLWxlZnQsIDAuNXJlbSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5yZW1vdmUge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogLTAuNXJlbTtcbiAgICAgICAgICB0b3A6IC0wLjg3NXJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIG5iLWljb24ge1xuICAgICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLXNwaW5uZXItdGhlbWUoKSB7XG5cbiAgLm5iLXNwaW5uZXItY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICBuYi1zcGlubmVyIC5tZXNzYWdlIHtcbiAgICBjb2xvcjogbmItdGhlbWUoc3Bpbm5lci10ZXh0LWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogbmItdGhlbWUoc3Bpbm5lci10ZXh0LWZvbnQtZmFtaWx5KTtcbiAgICBmb250LXNpemU6IG5iLXRoZW1lKHNwaW5uZXItdGV4dC1mb250LXNpemUpO1xuICAgIGZvbnQtd2VpZ2h0OiBuYi10aGVtZShzcGlubmVyLXRleHQtZm9udC13ZWlnaHQpO1xuICAgIGxpbmUtaGVpZ2h0OiBuYi10aGVtZShzcGlubmVyLXRleHQtbGluZS1oZWlnaHQpO1xuICB9XG5cbiAgQGVhY2ggJHN0YXR1cyBpbiBuYi1nZXQtc3RhdHVzZXMoKSB7XG4gICAgbmItc3Bpbm5lci5zdGF0dXMtI3skc3RhdHVzfSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShzcGlubmVyLSN7JHN0YXR1c30tYmFja2dyb3VuZC1jb2xvcik7XG5cbiAgICAgIC5zcGluLWNpcmNsZSB7XG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IG5iLXRoZW1lKHNwaW5uZXItI3skc3RhdHVzfS1jaXJjbGUtZmlsbGVkLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBuYi10aGVtZShzcGlubmVyLSN7JHN0YXR1c30tY2lyY2xlLWVtcHR5LWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbmItdGhlbWUoc3Bpbm5lci0jeyRzdGF0dXN9LWNpcmNsZS1maWxsZWQtY29sb3IpO1xuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogbmItdGhlbWUoc3Bpbm5lci0jeyRzdGF0dXN9LWNpcmNsZS1maWxsZWQtY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBlYWNoICRzaXplIGluIG5iLWdldC1zaXplcygpIHtcbiAgICBuYi1zcGlubmVyLnNpemUtI3skc2l6ZX0ge1xuICAgICAgZm9udC1zaXplOiBuYi10aGVtZShzcGlubmVyLWhlaWdodC0jeyRzaXplfSk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIzMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLXN0ZXBwZXItdGhlbWUge1xuXG4gIG5iLXN0ZXBwZXIge1xuXG4gICAgJi5ob3Jpem9udGFsIHtcbiAgICAgIC5oZWFkZXIgLnN0ZXAge1xuICAgICAgICB3aWR0aDogbmItdGhlbWUoc3RlcHBlci1zdGVwLWluZGV4LXdpZHRoKTtcbiAgICAgICAgbWFyZ2luOiAwIG5iLXRoZW1lKHN0ZXBwZXItc3RlcC1pbmRleC13aWR0aCkgLyAyO1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyIC5jb25uZWN0b3Ige1xuICAgICAgICBtYXJnaW46IG5iLXRoZW1lKHN0ZXBwZXItaG9yaXpvbnRhbC1jb25uZWN0b3ItbWFyZ2luKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLnZlcnRpY2FsIHtcbiAgICAgIC5oZWFkZXIgLmNvbm5lY3RvciB7XG4gICAgICAgIG1hcmdpbjogbmItdGhlbWUoc3RlcHBlci12ZXJ0aWNhbC1jb25uZWN0b3ItbWFyZ2luKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgIC5jb25uZWN0b3Ige1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShzdGVwcGVyLWNvbm5lY3Rvci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLmNvbm5lY3Rvci1wYXN0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUoc3RlcHBlci1jb25uZWN0b3ItY29tcGxldGVkLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAubGFiZWwtaW5kZXgge1xuICAgICAgICBib3JkZXItcmFkaXVzOiBuYi10aGVtZShzdGVwcGVyLXN0ZXAtaW5kZXgtYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUoc3RlcHBlci1zdGVwLWluZGV4LWJvcmRlci1jb2xvcik7XG4gICAgICAgIGJvcmRlci1zdHlsZTogbmItdGhlbWUoc3RlcHBlci1zdGVwLWluZGV4LWJvcmRlci1zdHlsZSk7XG4gICAgICAgIGJvcmRlci13aWR0aDogbmItdGhlbWUoc3RlcHBlci1zdGVwLWluZGV4LWJvcmRlci13aWR0aCk7XG4gICAgICAgIHdpZHRoOiBuYi10aGVtZShzdGVwcGVyLXN0ZXAtaW5kZXgtd2lkdGgpO1xuICAgICAgICBoZWlnaHQ6IG5iLXRoZW1lKHN0ZXBwZXItc3RlcC1pbmRleC13aWR0aCk7XG4gICAgICB9XG5cbiAgICAgIC5zdGVwIHtcbiAgICAgICAgY29sb3I6IG5iLXRoZW1lKHN0ZXBwZXItc3RlcC10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IG5iLXRoZW1lKHN0ZXBwZXItc3RlcC10ZXh0LWZvbnQtZmFtaWx5KTtcbiAgICAgICAgZm9udC1zaXplOiBuYi10aGVtZShzdGVwcGVyLXN0ZXAtdGV4dC1mb250LXNpemUpO1xuICAgICAgICBmb250LXdlaWdodDogbmItdGhlbWUoc3RlcHBlci1zdGVwLXRleHQtZm9udC13ZWlnaHQpO1xuICAgICAgICBsaW5lLWhlaWdodDogbmItdGhlbWUoc3RlcHBlci1zdGVwLXRleHQtbGluZS1oZWlnaHQpO1xuXG4gICAgICAgICYubGFiZWwtaW5kZXgge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUoc3RlcHBlci1zdGVwLWluZGV4LWJvcmRlci1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgICBjb2xvcjogbmItdGhlbWUoc3RlcHBlci1zdGVwLWFjdGl2ZS10ZXh0LWNvbG9yKTtcblxuICAgICAgICAgIC5sYWJlbC1pbmRleCB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IG5iLXRoZW1lKHN0ZXBwZXItc3RlcC1pbmRleC1hY3RpdmUtYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmNvbXBsZXRlZCB7XG4gICAgICAgICAgY29sb3I6IG5iLXRoZW1lKHN0ZXBwZXItc3RlcC1jb21wbGV0ZWQtdGV4dC1jb2xvcik7XG5cbiAgICAgICAgICAubGFiZWwtaW5kZXgge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUoc3RlcHBlci1zdGVwLWluZGV4LWNvbXBsZXRlZC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUoc3RlcHBlci1zdGVwLWluZGV4LWNvbXBsZXRlZC1ib3JkZXItY29sb3IpO1xuICAgICAgICAgICAgY29sb3I6IG5iLXRoZW1lKHN0ZXBwZXItc3RlcC1pbmRleC1jb21wbGV0ZWQtdGV4dC1jb2xvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN0ZXAtY29udGVudCB7XG4gICAgICBwYWRkaW5nOiBuYi10aGVtZShzdGVwcGVyLXN0ZXAtY29udGVudC1wYWRkaW5nKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLWFjY29yZGlvbi1pdGVtLWhlYWRlcigpIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogbmItdGhlbWUoYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItd2lkdGgpO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBuYi10aGVtZShhY2NvcmRpb24taGVhZGVyLWJvcmRlci1zdHlsZSk7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IG5iLXRoZW1lKGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLWNvbG9yKTtcbiAgY29sb3I6IG5iLXRoZW1lKGFjY29yZGlvbi1oZWFkZXItdGV4dC1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBuYi10aGVtZShhY2NvcmRpb24taGVhZGVyLXRleHQtZm9udC1mYW1pbHkpO1xuICBmb250LXNpemU6IG5iLXRoZW1lKGFjY29yZGlvbi1oZWFkZXItdGV4dC1mb250LXNpemUpO1xuICBmb250LXdlaWdodDogbmItdGhlbWUoYWNjb3JkaW9uLWhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0KTtcbiAgbGluZS1oZWlnaHQ6IG5iLXRoZW1lKGFjY29yZGlvbi1oZWFkZXItdGV4dC1saW5lLWhlaWdodCk7XG4gIHBhZGRpbmc6IG5iLXRoZW1lKGFjY29yZGlvbi1wYWRkaW5nKTtcblxuICBAaW5jbHVkZSBuYi1oZWFkaW5ncygpO1xufVxuXG5AbWl4aW4gbmItYWNjb3JkaW9uLXRoZW1lKCkge1xuXG4gIG5iLWFjY29yZGlvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNoYWRvdzogbmItdGhlbWUoYWNjb3JkaW9uLXNoYWRvdyk7XG4gICAgYm9yZGVyLXJhZGl1czogbmItdGhlbWUoYWNjb3JkaW9uLWJvcmRlci1yYWRpdXMpO1xuXG4gICAgbmItYWNjb3JkaW9uLWl0ZW0taGVhZGVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIEBpbmNsdWRlIG5iLWFjY29yZGlvbi1pdGVtLWhlYWRlcigpO1xuXG4gICAgICAuZXhwYW5zaW9uLWluZGljYXRvciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgQGluY2x1ZGUgbmItbHRyKHJpZ2h0LCAxcmVtKTtcbiAgICAgICAgQGluY2x1ZGUgbmItcnRsKGxlZnQsIDFyZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5iLWFjY29yZGlvbi1pdGVtIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGFjY29yZGlvbi1pdGVtLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgY29sb3I6IG5iLXRoZW1lKGFjY29yZGlvbi1pdGVtLXRleHQtY29sb3IpO1xuICAgICAgZm9udC1mYW1pbHk6IG5iLXRoZW1lKGFjY29yZGlvbi1pdGVtLXRleHQtZm9udC1mYW1pbHkpO1xuICAgICAgZm9udC1zaXplOiBuYi10aGVtZShhY2NvcmRpb24taXRlbS10ZXh0LWZvbnQtc2l6ZSk7XG4gICAgICBmb250LXdlaWdodDogbmItdGhlbWUoYWNjb3JkaW9uLWl0ZW0tdGV4dC1mb250LXdlaWdodCk7XG4gICAgICBsaW5lLWhlaWdodDogbmItdGhlbWUoYWNjb3JkaW9uLWl0ZW0tdGV4dC1saW5lLWhlaWdodCk7XG5cbiAgICAgICYuZGlzYWJsZWQgbmItYWNjb3JkaW9uLWl0ZW0taGVhZGVyIHtcbiAgICAgICAgY29sb3I6IG5iLXRoZW1lKGFjY29yZGlvbi1oZWFkZXItZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIH1cblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IG5iLXRoZW1lKGFjY29yZGlvbi1ib3JkZXItcmFkaXVzKTtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IG5iLXRoZW1lKGFjY29yZGlvbi1ib3JkZXItcmFkaXVzKTtcbiAgICAgIH1cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IG5iLXRoZW1lKGFjY29yZGlvbi1ib3JkZXItcmFkaXVzKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IG5iLXRoZW1lKGFjY29yZGlvbi1ib3JkZXItcmFkaXVzKTtcblxuICAgICAgICAmLmNvbGxhcHNlZCBuYi1hY2NvcmRpb24taXRlbS1oZWFkZXIge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgbmItYWNjb3JkaW9uLWl0ZW06bm90KC5jb2xsYXBzZWQpICsgbmItYWNjb3JkaW9uLWl0ZW0gbmItYWNjb3JkaW9uLWl0ZW0taGVhZGVyIHtcbiAgICAgIGJvcmRlci10b3AtY29sb3I6IG5iLXRoZW1lKGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLWNvbG9yKTtcbiAgICAgIGJvcmRlci10b3Atc3R5bGU6IG5iLXRoZW1lKGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLXN0eWxlKTtcbiAgICAgIGJvcmRlci10b3Atd2lkdGg6IG5iLXRoZW1lKGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLXdpZHRoKTtcbiAgICB9XG5cbiAgICBuYi1hY2NvcmRpb24taXRlbS1ib2R5IC5pdGVtLWJvZHkge1xuICAgICAgZmxleDogMTtcbiAgICAgIC1tcy1mbGV4OiAxIDEgYXV0bztcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgcGFkZGluZzogbmItdGhlbWUoYWNjb3JkaW9uLXBhZGRpbmcpO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuL2J1dHRvbi1maWxsZWQnO1xuQGltcG9ydCAnLi9idXR0b24tb3V0bGluZSc7XG5AaW1wb3J0ICcuL2J1dHRvbi1naG9zdCc7XG5AaW1wb3J0ICcuL2J1dHRvbi1oZXJvJztcblxuQG1peGluIG5iLWJ1dHRvbnMtdGhlbWUoKSB7XG4gIFtuYkJ1dHRvbl0ge1xuICAgIGN1cnNvcjogbmItdGhlbWUoYnV0dG9uLWN1cnNvcik7XG4gICAgZm9udC1mYW1pbHk6IG5iLXRoZW1lKGJ1dHRvbi10ZXh0LWZvbnQtZmFtaWx5KTtcbiAgICBmb250LXdlaWdodDogbmItdGhlbWUoYnV0dG9uLXRleHQtZm9udC13ZWlnaHQpO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgQGluY2x1ZGUgbmItb3V0bGluZShuYi10aGVtZShidXR0b24tb3V0bGluZS13aWR0aCksIG5iLXRoZW1lKGJ1dHRvbi1vdXRsaW5lLWNvbG9yKSk7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgY3Vyc29yOiBuYi10aGVtZShidXR0b24tZGlzYWJsZWQtY3Vyc29yKTtcbiAgICB9XG5cbiAgICBAZWFjaCAkc2l6ZSBpbiBuYi1nZXQtc2l6ZXMoKSB7XG4gICAgICAmLnNpemUtI3skc2l6ZX0ge1xuICAgICAgICBmb250LXNpemU6IG5iLXRoZW1lKGJ1dHRvbi0jeyRzaXplfS10ZXh0LWZvbnQtc2l6ZSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBuYi10aGVtZShidXR0b24tI3skc2l6ZX0tdGV4dC1saW5lLWhlaWdodCk7XG5cbiAgICAgICAgbmItaWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiBuYi10aGVtZShidXR0b24tI3skc2l6ZX0tdGV4dC1mb250LXNpemUpO1xuICAgICAgICAgIGhlaWdodDogbmItdGhlbWUoYnV0dG9uLSN7JHNpemV9LWljb24tc2l6ZSk7XG4gICAgICAgICAgd2lkdGg6IG5iLXRoZW1lKGJ1dHRvbi0jeyRzaXplfS1pY29uLXNpemUpO1xuICAgICAgICAgIG1hcmdpbi10b3A6IG5iLXRoZW1lKGJ1dHRvbi0jeyRzaXplfS1pY29uLXZlcnRpY2FsLW1hcmdpbik7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogbmItdGhlbWUoYnV0dG9uLSN7JHNpemV9LWljb24tdmVydGljYWwtbWFyZ2luKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRpY29uLW9mZnNldDogbmItdGhlbWUoYnV0dG9uLSN7JHNpemV9LWljb24tb2Zmc2V0KTtcbiAgICAgICAgJi5pY29uLXN0YXJ0Om5vdCguaWNvbi1lbmQpIG5iLWljb24ge1xuICAgICAgICAgIEBpbmNsdWRlIG5iLWx0cihtYXJnaW4tcmlnaHQsICRpY29uLW9mZnNldCk7XG4gICAgICAgICAgQGluY2x1ZGUgbmItcnRsKG1hcmdpbi1sZWZ0LCAkaWNvbi1vZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgICYuaWNvbi1lbmQ6bm90KC5pY29uLXN0YXJ0KSBuYi1pY29uIHtcbiAgICAgICAgICBAaW5jbHVkZSBuYi1sdHIobWFyZ2luLWxlZnQsICRpY29uLW9mZnNldCk7XG4gICAgICAgICAgQGluY2x1ZGUgbmItcnRsKG1hcmdpbi1yaWdodCwgJGljb24tb2Zmc2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBlYWNoICRhcHBlYXJhbmNlIGluICgnZmlsbGVkJywgJ291dGxpbmUnLCAnZ2hvc3QnLCAnaGVybycpIHtcbiAgICAgICAgICAmLmljb24tc3RhcnQuaWNvbi1lbmQuYXBwZWFyYW5jZS0jeyRhcHBlYXJhbmNlfSB7XG4gICAgICAgICAgICBwYWRkaW5nOiBuYi10aGVtZShpY29uLWJ1dHRvbi0jeyRhcHBlYXJhbmNlfS0jeyRzaXplfS1wYWRkaW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAZWFjaCAkc2hhcGUgaW4gbmItZ2V0LXNoYXBlcygpIHtcbiAgICAgICYuc2hhcGUtI3skc2hhcGV9IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogbmItdGhlbWUoYnV0dG9uLSN7JHNoYXBlfS1ib3JkZXItcmFkaXVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhW25iQnV0dG9uXSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgQGluY2x1ZGUgYnV0dG9uLWZpbGxlZDtcbiAgQGluY2x1ZGUgYnV0dG9uLW91dGxpbmU7XG4gIEBpbmNsdWRlIGJ1dHRvbi1naG9zdDtcbiAgQGluY2x1ZGUgYnV0dG9uLWhlcm87XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBidXR0b24tZmlsbGVkKCkge1xuICBbbmJCdXR0b25dLmFwcGVhcmFuY2UtZmlsbGVkIHtcbiAgICBib3JkZXItc3R5bGU6IG5iLXRoZW1lKGJ1dHRvbi1maWxsZWQtYm9yZGVyLXN0eWxlKTtcbiAgICBib3JkZXItd2lkdGg6IG5iLXRoZW1lKGJ1dHRvbi1maWxsZWQtYm9yZGVyLXdpZHRoKTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbmItdGhlbWUoYnV0dG9uLWZpbGxlZC10ZXh0LXRyYW5zZm9ybSk7XG5cbiAgICBAZWFjaCAkc2l6ZSBpbiBuYi1nZXQtc2l6ZXMoKSB7XG4gICAgICAmLnNpemUtI3skc2l6ZX0ge1xuICAgICAgICBwYWRkaW5nOiBuYi10aGVtZShidXR0b24tZmlsbGVkLSN7JHNpemV9LXBhZGRpbmcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBlYWNoICRzdGF0dXMgaW4gbmItZ2V0LXN0YXR1c2VzKCkge1xuICAgICAgJi5zdGF0dXMtI3skc3RhdHVzfSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGJ1dHRvbi1maWxsZWQtI3skc3RhdHVzfS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShidXR0b24tZmlsbGVkLSN7JHN0YXR1c30tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgY29sb3I6IG5iLXRoZW1lKGJ1dHRvbi1maWxsZWQtI3skc3RhdHVzfS10ZXh0LWNvbG9yKTtcblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShidXR0b24tZmlsbGVkLSN7JHN0YXR1c30tZm9jdXMtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShidXR0b24tZmlsbGVkLSN7JHN0YXR1c30tZm9jdXMtYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGJ1dHRvbi1maWxsZWQtI3skc3RhdHVzfS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IG5iLXRoZW1lKGJ1dHRvbi1maWxsZWQtI3skc3RhdHVzfS1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGJ1dHRvbi1maWxsZWQtI3skc3RhdHVzfS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShidXR0b24tZmlsbGVkLSN7JHN0YXR1c30tYWN0aXZlLWJvcmRlci1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUoYnV0dG9uLWZpbGxlZC0jeyRzdGF0dXN9LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUoYnV0dG9uLWZpbGxlZC0jeyRzdGF0dXN9LWRpc2FibGVkLWJvcmRlci1jb2xvcik7XG4gICAgICAgICAgY29sb3I6IG5iLXRoZW1lKGJ1dHRvbi1maWxsZWQtI3skc3RhdHVzfS1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AbWl4aW4gYnV0dG9uLW91dGxpbmUoKSB7XG4gIFtuYkJ1dHRvbl0uYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgICBib3JkZXItc3R5bGU6IG5iLXRoZW1lKGJ1dHRvbi1vdXRsaW5lLWJvcmRlci1zdHlsZSk7XG4gICAgYm9yZGVyLXdpZHRoOiBuYi10aGVtZShidXR0b24tb3V0bGluZS1ib3JkZXItd2lkdGgpO1xuICAgIHRleHQtdHJhbnNmb3JtOiBuYi10aGVtZShidXR0b24tb3V0bGluZS10ZXh0LXRyYW5zZm9ybSk7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgICRpbnNldC1zaGFkb3c6IG5iLXRoZW1lKGJ1dHRvbi1vdXRsaW5lLWZvY3VzLWluc2V0LXNoYWRvdy1sZW5ndGgpO1xuICAgICAgQGluY2x1ZGUgbmItb3V0bGluZShuYi10aGVtZShidXR0b24tb3V0bGluZS13aWR0aCksIG5iLXRoZW1lKGJ1dHRvbi1vdXRsaW5lLWNvbG9yKSwgJGluc2V0LXNoYWRvdyk7XG4gICAgfVxuXG4gICAgQGVhY2ggJHNpemUgaW4gbmItZ2V0LXNpemVzKCkge1xuICAgICAgJi5zaXplLSN7JHNpemV9IHtcbiAgICAgICAgcGFkZGluZzogbmItdGhlbWUoYnV0dG9uLW91dGxpbmUtI3skc2l6ZX0tcGFkZGluZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGVhY2ggJHN0YXR1cyBpbiBuYi1nZXQtc3RhdHVzZXMoKSB7XG4gICAgICAmLnN0YXR1cy0jeyRzdGF0dXN9IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUoYnV0dG9uLW91dGxpbmUtI3skc3RhdHVzfS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShidXR0b24tb3V0bGluZS0jeyRzdGF0dXN9LWJvcmRlci1jb2xvcik7XG4gICAgICAgIGNvbG9yOiBuYi10aGVtZShidXR0b24tb3V0bGluZS0jeyRzdGF0dXN9LXRleHQtY29sb3IpO1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGJ1dHRvbi1vdXRsaW5lLSN7JHN0YXR1c30tZm9jdXMtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShidXR0b24tb3V0bGluZS0jeyRzdGF0dXN9LWZvY3VzLWJvcmRlci1jb2xvcik7XG4gICAgICAgICAgY29sb3I6IG5iLXRoZW1lKGJ1dHRvbi1vdXRsaW5lLSN7JHN0YXR1c30tZm9jdXMtdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShidXR0b24tb3V0bGluZS0jeyRzdGF0dXN9LWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUoYnV0dG9uLW91dGxpbmUtI3skc3RhdHVzfS1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgICAgICAgIGNvbG9yOiBuYi10aGVtZShidXR0b24tb3V0bGluZS0jeyRzdGF0dXN9LWhvdmVyLXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGJ1dHRvbi1vdXRsaW5lLSN7JHN0YXR1c30tYWN0aXZlLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUoYnV0dG9uLW91dGxpbmUtI3skc3RhdHVzfS1hY3RpdmUtYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgICBjb2xvcjogbmItdGhlbWUoYnV0dG9uLW91dGxpbmUtI3skc3RhdHVzfS1hY3RpdmUtdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUoYnV0dG9uLW91dGxpbmUtI3skc3RhdHVzfS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IG5iLXRoZW1lKGJ1dHRvbi1vdXRsaW5lLSN7JHN0YXR1c30tZGlzYWJsZWQtYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgICBjb2xvcjogbmItdGhlbWUoYnV0dG9uLW91dGxpbmUtI3skc3RhdHVzfS1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AbWl4aW4gYnV0dG9uLWdob3N0KCkge1xuICBbbmJCdXR0b25dLmFwcGVhcmFuY2UtZ2hvc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGJ1dHRvbi1naG9zdC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBib3JkZXItY29sb3I6IG5iLXRoZW1lKGJ1dHRvbi1naG9zdC1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1zdHlsZTogbmItdGhlbWUoYnV0dG9uLWdob3N0LWJvcmRlci1zdHlsZSk7XG4gICAgYm9yZGVyLXdpZHRoOiBuYi10aGVtZShidXR0b24tZ2hvc3QtYm9yZGVyLXdpZHRoKTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbmItdGhlbWUoYnV0dG9uLWdob3N0LXRleHQtdHJhbnNmb3JtKTtcblxuICAgICY6Zm9jdXMge1xuICAgICAgJGluc2V0LXNoYWRvdzogbmItdGhlbWUoYnV0dG9uLWdob3N0LWZvY3VzLWluc2V0LXNoYWRvdy1sZW5ndGgpO1xuICAgICAgQGluY2x1ZGUgbmItb3V0bGluZShuYi10aGVtZShidXR0b24tb3V0bGluZS13aWR0aCksIG5iLXRoZW1lKGJ1dHRvbi1vdXRsaW5lLWNvbG9yKSwgJGluc2V0LXNoYWRvdyk7XG4gICAgfVxuXG4gICAgQGVhY2ggJHNpemUgaW4gbmItZ2V0LXNpemVzKCkge1xuICAgICAgJi5zaXplLSN7JHNpemV9IHtcbiAgICAgICAgcGFkZGluZzogbmItdGhlbWUoYnV0dG9uLWdob3N0LSN7JHNpemV9LXBhZGRpbmcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBlYWNoICRzdGF0dXMgaW4gbmItZ2V0LXN0YXR1c2VzKCkge1xuICAgICAgJi5zdGF0dXMtI3skc3RhdHVzfSB7XG4gICAgICAgIGNvbG9yOiBuYi10aGVtZShidXR0b24tZ2hvc3QtI3skc3RhdHVzfS10ZXh0LWNvbG9yKTtcblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShidXR0b24tZ2hvc3QtI3skc3RhdHVzfS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IG5iLXRoZW1lKGJ1dHRvbi1naG9zdC0jeyRzdGF0dXN9LWZvY3VzLWJvcmRlci1jb2xvcik7XG4gICAgICAgICAgY29sb3I6IG5iLXRoZW1lKGJ1dHRvbi1naG9zdC0jeyRzdGF0dXN9LWZvY3VzLXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUoYnV0dG9uLWdob3N0LSN7JHN0YXR1c30taG92ZXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShidXR0b24tZ2hvc3QtI3skc3RhdHVzfS1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgICAgICAgIGNvbG9yOiBuYi10aGVtZShidXR0b24tZ2hvc3QtI3skc3RhdHVzfS1ob3Zlci10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShidXR0b24tZ2hvc3QtI3skc3RhdHVzfS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShidXR0b24tZ2hvc3QtI3skc3RhdHVzfS1hY3RpdmUtYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgICBjb2xvcjogbmItdGhlbWUoYnV0dG9uLWdob3N0LSN7JHN0YXR1c30tYWN0aXZlLXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgJltkaXNhYmxlZF0ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGJ1dHRvbi1naG9zdC0jeyRzdGF0dXN9LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUoYnV0dG9uLWdob3N0LSN7JHN0YXR1c30tZGlzYWJsZWQtYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgICBjb2xvcjogbmItdGhlbWUoYnV0dG9uLWdob3N0LSN7JHN0YXR1c30tZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi4vLi4vc3R5bGVzL2NvcmUvbWl4aW5zJztcblxuQG1peGluIGJ1dHRvbi1oZXJvKCkge1xuICBbbmJCdXR0b25dLmFwcGVhcmFuY2UtaGVybyB7XG4gICAgdGV4dC1zaGFkb3c6IG5iLXRoZW1lKGJ1dHRvbi1oZXJvLXRleHQtc2hhZG93KTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbmItdGhlbWUoYnV0dG9uLWhlcm8tdGV4dC10cmFuc2Zvcm0pO1xuXG4gICAgQGVhY2ggJHNpemUgaW4gbmItZ2V0LXNpemVzKCkge1xuICAgICAgJi5zaXplLSN7JHNpemV9IHtcbiAgICAgICAgcGFkZGluZzogbmItdGhlbWUoYnV0dG9uLWhlcm8tI3skc2l6ZX0tcGFkZGluZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGVhY2ggJHN0YXR1cyBpbiBuYi1nZXQtc3RhdHVzZXMoKSB7XG4gICAgICAmLnN0YXR1cy0jeyRzdGF0dXN9IHtcbiAgICAgICAgJGxlZnQtY29sb3I6IG5iLXRoZW1lKGJ1dHRvbi1oZXJvLSN7JHN0YXR1c30tbGVmdC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgJHJpZ2h0LWNvbG9yOiBuYi10aGVtZShidXR0b24taGVyby0jeyRzdGF0dXN9LXJpZ2h0LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAkYmV2ZWw6IG5iLXRoZW1lKGJ1dHRvbi1oZXJvLWJldmVsLXNpemUpIG5iLXRoZW1lKGJ1dHRvbi1oZXJvLSN7JHN0YXR1c30tYmV2ZWwtY29sb3IpO1xuICAgICAgICAkZ2xvdzogbmItdGhlbWUoYnV0dG9uLWhlcm8tZ2xvdy1zaXplKSBuYi10aGVtZShidXR0b24taGVyby0jeyRzdGF0dXN9LWdsb3ctY29sb3IpO1xuICAgICAgICAkc2hhZG93OiBuYi10aGVtZShidXR0b24taGVyby1zaGFkb3cpO1xuICAgICAgICAkaGVyby1ib3gtc2hhZG93czogJGJldmVsLCAkZ2xvdywgJHNoYWRvdztcblxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRsZWZ0LWNvbG9yLCAkcmlnaHQtY29sb3IpO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6ICRoZXJvLWJveC1zaGFkb3dzO1xuICAgICAgICBjb2xvcjogbmItdGhlbWUoYnV0dG9uLWhlcm8tI3skc3RhdHVzfS10ZXh0LWNvbG9yKTtcblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAkbGVmdC1mb2N1cy1jb2xvcjogbmItdGhlbWUoYnV0dG9uLWhlcm8tI3skc3RhdHVzfS1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICRyaWdodC1mb2N1cy1jb2xvcjogbmItdGhlbWUoYnV0dG9uLWhlcm8tI3skc3RhdHVzfS1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRsZWZ0LWZvY3VzLWNvbG9yLCAkcmlnaHQtZm9jdXMtY29sb3IpO1xuICAgICAgICAgIGJveC1zaGFkb3c6ICRoZXJvLWJveC1zaGFkb3dzLCAwIDAgMCBuYi10aGVtZShidXR0b24taGVyby1vdXRsaW5lLXdpZHRoKSBuYi10aGVtZShidXR0b24taGVyby1vdXRsaW5lLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICRsZWZ0LWhvdmVyLWNvbG9yOiBuYi10aGVtZShidXR0b24taGVyby0jeyRzdGF0dXN9LWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgJHJpZ2h0LWhvdmVyLWNvbG9yOiBuYi10aGVtZShidXR0b24taGVyby0jeyRzdGF0dXN9LWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGxlZnQtaG92ZXItY29sb3IsICRyaWdodC1ob3Zlci1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgJGxlZnQtYWN0aXZlLWNvbG9yOiBuYi10aGVtZShidXR0b24taGVyby0jeyRzdGF0dXN9LWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICRyaWdodC1hY3RpdmUtY29sb3I6IG5iLXRoZW1lKGJ1dHRvbi1oZXJvLSN7JHN0YXR1c30tYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGxlZnQtYWN0aXZlLWNvbG9yLCAkcmlnaHQtYWN0aXZlLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShidXR0b24taGVyby0jeyRzdGF0dXN9LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgICAgICAgY29sb3I6IG5iLXRoZW1lKGJ1dHRvbi1oZXJvLSN7JHN0YXR1c30tZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ1dHRvbi1wdWxzZSB7XG4gICAgICAgICAgYW5pbWF0aW9uOiBidXR0b24taGVyby0jeyRzdGF0dXN9LXB1bHNlIDAuNzVzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIGtleWZyYW1lcyhidXR0b24taGVyby0jeyRzdGF0dXN9LXB1bHNlKSB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAgJGxlZnQtY29sb3I7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4vaW5wdXQtc3RhdHVzZXMnO1xuQGltcG9ydCAnLi9pbnB1dC1zaXplcyc7XG5AaW1wb3J0ICcuL2lucHV0LXNoYXBlcyc7XG5cbkBtaXhpbiBuYi1pbnB1dC10aGVtZSgpIHtcblxuICBbbmJJbnB1dF0ge1xuICAgIGJvcmRlci1zdHlsZTogbmItdGhlbWUoaW5wdXQtYm9yZGVyLXN0eWxlKTtcbiAgICBib3JkZXItd2lkdGg6IG5iLXRoZW1lKGlucHV0LWJvcmRlci13aWR0aCk7XG4gICAgZm9udC1mYW1pbHk6IG5iLXRoZW1lKGlucHV0LXRleHQtZm9udC1mYW1pbHkpO1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgLy8gcmVtb3ZlcyBpbm5lciBzaGFkb3cgb24gaU9TXG5cbiAgICAmLm5iLXRyYW5zaXRpb24ge1xuICAgICAgQGluY2x1ZGUgbmItY29tcG9uZW50LWFuaW1hdGlvbihib3JkZXIsIGJhY2tncm91bmQtY29sb3IsIGNvbG9yLCBib3gtc2hhZG93KTtcbiAgICB9XG5cbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICBmb250LWZhbWlseTogbmItdGhlbWUoaW5wdXQtcGxhY2Vob2xkZXItdGV4dC1mb250LWZhbWlseSk7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgJi5pbnB1dC1mdWxsLXdpZHRoIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGlucHV0LXN0YXR1c2VzKCk7XG4gICAgQGluY2x1ZGUgaW5wdXQtc2l6ZXMoKTtcbiAgICBAaW5jbHVkZSBpbnB1dC1zaGFwZXMoKTtcbiAgfVxuXG4gIEBlYWNoICRzaXplIGluIG5iLWdldC1zaXplcygpIHtcbiAgICBAaW5jbHVkZSBuYi1mb3JtLWZpZWxkLXdpdGgtcHJlZml4KCdbbmJJbnB1dF0uc2l6ZS0jeyRzaXplfScsICRzaXplKTtcbiAgICBAaW5jbHVkZSBuYi1mb3JtLWZpZWxkLXdpdGgtc3VmZml4KCdbbmJJbnB1dF0uc2l6ZS0jeyRzaXplfScsICRzaXplKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AbWl4aW4gaW5wdXQtc3RhdHVzZXMoKSB7XG4gIEBlYWNoICRzdGF0dXMgaW4gbmItZ2V0LXN0YXR1c2VzKCkge1xuICAgICYuc3RhdHVzLSN7JHN0YXR1c30ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUoaW5wdXQtI3skc3RhdHVzfS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUoaW5wdXQtI3skc3RhdHVzfS1ib3JkZXItY29sb3IpO1xuICAgICAgY29sb3I6IG5iLXRoZW1lKGlucHV0LSN7JHN0YXR1c30tdGV4dC1jb2xvcik7XG5cbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IG5iLXRoZW1lKGlucHV0LSN7JHN0YXR1c30tcGxhY2Vob2xkZXItdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShpbnB1dC0jeyRzdGF0dXN9LWZvY3VzLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBib3JkZXItY29sb3I6IG5iLXRoZW1lKGlucHV0LSN7JHN0YXR1c30tZm9jdXMtYm9yZGVyLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShpbnB1dC0jeyRzdGF0dXN9LWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBib3JkZXItY29sb3I6IG5iLXRoZW1lKGlucHV0LSN7JHN0YXR1c30taG92ZXItYm9yZGVyLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKGlucHV0LSN7JHN0YXR1c30tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUoaW5wdXQtI3skc3RhdHVzfS1kaXNhYmxlZC1ib3JkZXItY29sb3IpO1xuICAgICAgICBjb2xvcjogbmItdGhlbWUoaW5wdXQtI3skc3RhdHVzfS1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcblxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgY29sb3I6IG5iLXRoZW1lKGlucHV0LSN7JHN0YXR1c30tZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIGlucHV0LXNpemVzKCkge1xuICBAZWFjaCAkc2l6ZSBpbiBuYi1nZXQtc2l6ZXMoKSB7XG4gICAgJi5zaXplLSN7JHNpemV9IHtcbiAgICAgIGZvbnQtc2l6ZTogbmItdGhlbWUoaW5wdXQtI3skc2l6ZX0tdGV4dC1mb250LXNpemUpO1xuICAgICAgZm9udC13ZWlnaHQ6IG5iLXRoZW1lKGlucHV0LSN7JHNpemV9LXRleHQtZm9udC13ZWlnaHQpO1xuICAgICAgbGluZS1oZWlnaHQ6IG5iLXRoZW1lKGlucHV0LSN7JHNpemV9LXRleHQtbGluZS1oZWlnaHQpO1xuICAgICAgcGFkZGluZzogbmItdGhlbWUoaW5wdXQtI3skc2l6ZX0tcGFkZGluZyk7XG5cbiAgICAgICY6bm90KC5pbnB1dC1mdWxsLXdpZHRoKSB7XG4gICAgICAgIG1heC13aWR0aDogbmItdGhlbWUoaW5wdXQtI3skc2l6ZX0tbWF4LXdpZHRoKTtcbiAgICAgIH1cblxuICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICBmb250LXNpemU6IG5iLXRoZW1lKGlucHV0LSN7JHNpemV9LXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5iLXRoZW1lKGlucHV0LSN7JHNpemV9LXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQpO1xuICAgICAgICAvLyBUT0RPOiB0aGlzIHNlZW1zIHRvIGJlIHVudXNlZFxuICAgICAgICBsaW5lLWhlaWdodDogbmItdGhlbWUoaW5wdXQtI3skc2l6ZX0tcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBpbnB1dC1zaGFwZXMoKSB7XG4gIEBlYWNoICRzaGFwZSBpbiBuYi1nZXQtc2hhcGVzKCkge1xuICAgICYuc2hhcGUtI3skc2hhcGV9IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IG5iLXRoZW1lKGlucHV0LSN7JHNoYXBlfS1ib3JkZXItcmFkaXVzKTtcbiAgICB9XG4gIH1cbn1cbiIsIi5jZGstb3ZlcmxheS1jb250YWluZXIsLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVye3BvaW50ZXItZXZlbnRzOm5vbmU7dG9wOjA7bGVmdDowO2hlaWdodDoxMDAlO3dpZHRoOjEwMCV9LmNkay1vdmVybGF5LWNvbnRhaW5lcntwb3NpdGlvbjpmaXhlZDt6LWluZGV4OjEwMDB9LmNkay1vdmVybGF5LWNvbnRhaW5lcjplbXB0eXtkaXNwbGF5Om5vbmV9LmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVye2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwMDB9LmNkay1vdmVybGF5LXBhbmV7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6YXV0bztib3gtc2l6aW5nOmJvcmRlci1ib3g7ei1pbmRleDoxMDAwO2Rpc3BsYXk6ZmxleDttYXgtd2lkdGg6MTAwJTttYXgtaGVpZ2h0OjEwMCV9LmNkay1vdmVybGF5LWJhY2tkcm9we3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6MTAwMDtwb2ludGVyLWV2ZW50czphdXRvOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDt0cmFuc2l0aW9uOm9wYWNpdHkgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7b3BhY2l0eTowfS5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6MX1AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSl7LmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmd7b3BhY2l0eTouNn19LmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3B7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4zMil9LmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wLC5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6MH0uY2RrLW92ZXJsYXktY29ubmVjdGVkLXBvc2l0aW9uLWJvdW5kaW5nLWJveHtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwMDA7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttaW4td2lkdGg6MXB4O21pbi1oZWlnaHQ6MXB4fS5jZGstZ2xvYmFsLXNjcm9sbGJsb2Nre3Bvc2l0aW9uOmZpeGVkO3dpZHRoOjEwMCU7b3ZlcmZsb3cteTpzY3JvbGx9XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG4vKlxuXG5BY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc2NvcGluZy0xLyNob3N0LXNlbGVjdG9yKVxuOmhvc3QgYW5kIDpob3N0LWNvbnRleHQgYXJlIHBzZXVkby1jbGFzc2VzLiBTbyB3ZSBhc3N1bWUgdGhleSBjb3VsZCBiZSBjb21iaW5lZCxcbmxpa2Ugb3RoZXIgcHNldWRvLWNsYXNzZXMsIGV2ZW4gc2FtZSBvbmVzLlxuRm9yIGV4YW1wbGU6ICc6bnRoLW9mLXR5cGUoMm4pOm50aC1vZi10eXBlKGV2ZW4pJy5cblxuSWRlYWwgc29sdXRpb24gd291bGQgYmUgdG8gcHJlcGVuZCBhbnkgc2VsZWN0b3Igd2l0aCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuXG5UaGVuIG5lYnVsYXIgY29tcG9uZW50cyB3aWxsIGJlaGF2ZSBhcyBhbiBodG1sIGVsZW1lbnQgYW5kIHJlc3BvbmQgdG8gW2Rpcl0gYXR0cmlidXRlIG9uIGFueSBsZXZlbCxcbnNvIGRpcmVjdGlvbiBjb3VsZCBiZSBvdmVycmlkZGVuIG9uIGFueSBjb21wb25lbnQgbGV2ZWwuXG5cbkltcGxlbWVudGF0aW9uIGNvZGU6XG5cbkBtaXhpbiBuYi1ydGwoKSB7XG4gIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICBAYXQtcm9vdCB7c2VsZWN0b3ItYXBwZW5kKCc6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSknLCAmKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkFuZCB3aGVuIHdlIGNhbGwgaXQgc29tZXdoZXJlOlxuXG46aG9zdCB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cbjpob3N0LWNvbnRleHQoLi4uKSB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cblxuUmVzdWx0IHdpbGwgbG9vayBsaWtlOlxuXG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG5cbipcbiAgU2lkZSBub3RlOlxuICA6aG9zdC1jb250ZXh0KCk6aG9zdCBzZWxlY3RvciBhcmUgdmFsaWQuIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAxNUZlYi8wMzA1Lmh0bWxcblxuICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgc2hvdWxkIG1hdGNoIGFueSBwZXJtdXRhdGlvbixcbiAgc28gb3JkZXIgaXMgbm90IGltcG9ydGFudC5cbipcblxuXG5DdXJyZW50bHksIHRoZXJlJ3JlIHR3byBwcm9ibGVtcyB3aXRoIHRoaXMgYXBwcm9hY2g6XG5cbkZpcnN0LCBpcyB0aGF0IHdlIGNhbid0IGNvbWJpbmUgOmhvc3QsIDpob3N0LWNvbnRleHQuIEFuZ3VsYXIgYnVncyAjMTQzNDksICMxOTE5OS5cbkZvciB0aGUgbW9tZW50IG9mIHdyaXRpbmcsIHRoZSBvbmx5IHBvc3NpYmxlIHdheSBpczpcbjpob3N0IHtcbiAgOmhvc3QtY29udGV4dCguLi4pIHtcbiAgICAuLi5cbiAgfVxufVxuSXQgZG9lc24ndCB3b3JrIGZvciB1cyBiZWNhdXNlIG1peGluIGNvdWxkIGJlIGNhbGxlZCBzb21ld2hlcmUgZGVlcGVyLCBsaWtlOlxuOmhvc3Qge1xuICBwIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7IC4uLiB9XG4gIH1cbn1cbldlIGFyZSBub3QgYWJsZSB0byBnbyB1cCB0byA6aG9zdCBsZXZlbCB0byBwbGFjZSBjb250ZW50IHBhc3NlZCB0byBtaXhpbi5cblxuVGhlIHNlY29uZCBwcm9ibGVtIGlzIHRoYXQgd2Ugb25seSBjYW4gYmUgc3VyZSB0aGF0IHdlIGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gYW5vdGhlclxuOmhvc3QvOmhvc3QtY29udGV4dCBwc2V1ZG8tY2xhc3Mgd2hlbiBjYWxsZWQgaW4gdGhlbWUgZmlsZXMgKCoudGhlbWUuc2NzcykuXG4gICpcbiAgICBTaWRlIG5vdGU6XG4gICAgQ3VycmVudGx5LCBuYi1pbnN0YWxsLWNvbXBvbmVudCB1c2VzIGFub3RoZXIgYXBwcm9hY2ggd2hlcmUgOmhvc3QgcHJlcGVuZGVkIHdpdGggdGhlIHRoZW1lIG5hbWVcbiAgICAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzViOTYwNzg2MjRiMGE0NzYwZjJkYmNmNmZkZjBiZDYyNzkxYmU1YmIvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MSksXG4gICAgYnV0IGl0IHdhcyBtYWRlIHRvIGJlIGFibGUgdG8gdXNlIGN1cnJlbnQgcmVhbGl6YXRpb24gb2YgcnRsIGFuZCBpdCBjYW4gYmUgcmV3cml0dGVuIGJhY2sgdG9cbiAgICA6aG9zdC1jb250ZXh0KCR0aGVtZSkgb25jZSB3ZSB3aWxsIGJlIGFibGUgdG8gdXNlIG11bHRpcGxlIHNoYWRvdyBzZWxlY3RvcnMuXG4gICpcbkJ1dCB3aGVuIGl0J3MgY2FsbGVkIGluICouY29tcG9uZW50LnNjc3Mgd2UgY2FuJ3QgYmUgc3VyZSwgdGhhdCBzZWxlY3RvciBzdGFydHMgd2l0aCA6aG9zdC86aG9zdC1jb250ZXh0LFxuYmVjYXVzZSBhbmd1bGFyIGFsbG93cyBvbWl0dGluZyBwc2V1ZG8tY2xhc3NlcyBpZiB3ZSBkb24ndCBuZWVkIHRvIHN0eWxlIDpob3N0IGNvbXBvbmVudCBpdHNlbGYuXG5XZSBjYW4gYnJlYWsgc3VjaCBzZWxlY3RvcnMsIGJ5IGp1c3QgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byB0aGVtLlxuICAqKipcbiAgICBQb3NzaWJsZSBzb2x1dGlvblxuICAgIGNoZWNrIGlmIHdlIGluIHRoZW1lIGJ5IHNvbWUgdGhlbWUgdmFyaWFibGVzIGFuZCBpZiBzbyBhcHBlbmQsIG90aGVyd2lzZSBuZXN0IGxpa2VcbiAgICBAYXQtcm9vdCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkge1xuICAgICAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgICAgIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICAgICAgeyZ9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFdoYXQgaWYgOmhvc3Qgc3BlY2lmaWVkPyBDYW4gd2UgYWRkIHNwYWNlIGluIDpob3N0LWNvbnRleHQoLi4uKSA6aG9zdD9cbiAgICBPciBtYXliZSBhZGQgOmhvc3Qgc2VsZWN0b3IgYW55d2F5PyBJZiBtdWx0aXBsZSA6aG9zdCBzZWxlY3RvcnMgYXJlIGFsbG93ZWRcbiAgKioqXG5cblxuUHJvYmxlbXMgd2l0aCB0aGUgY3VycmVudCBhcHByb2FjaC5cblxuMS4gRGlyZWN0aW9uIGNhbiBiZSBhcHBsaWVkIG9ubHkgb24gZG9jdW1lbnQgbGV2ZWwsIGJlY2F1c2UgbWl4aW4gcHJlcGVuZHMgdGhlbWUgY2xhc3MsXG53aGljaCBwbGFjZWQgb24gdGhlIGJvZHkuXG4yLiAqLmNvbXBvbmVudC5zY3NzIHN0eWxlcyBzaG91bGQgYmUgaW4gOmhvc3Qgc2VsZWN0b3IuIE90aGVyd2lzZSBhbmd1bGFyIHdpbGwgYWRkIGhvc3RcbmF0dHJpYnV0ZSB0byBbZGlyPXJ0bF0gYXR0cmlidXRlIGFzIHdlbGwuXG5cblxuR2VuZXJhbCBwcm9ibGVtcy5cblxuTHRyIGlzIGRlZmF1bHQgZG9jdW1lbnQgZGlyZWN0aW9uLCBidXQgZm9yIHByb3BlciB3b3JrIG9mIG5iLWx0ciAobWVhbnMgbHRyIG9ubHkpLFxuW2Rpcj1sdHJdIHNob3VsZCBiZSBzcGVjaWZpZWQgYXQgbGVhc3Qgc29tZXdoZXJlLiAnOm5vdChbZGlyPXJ0bF0nIG5vdCBhcHBsaWNhYmxlIGhlcmUsXG5iZWNhdXNlIGl0J3Mgc2F0aXNmeSBhbnkgcGFyZW50LCB0aGF0IGRvbid0IGhhdmUgW2Rpcj1ydGxdIGF0dHJpYnV0ZS5cblByZXZpb3VzIGFwcHJvYWNoIHdhcyB0byB1c2Ugc2luZ2xlIHJ0bCBtaXhpbiBhbmQgcmVzZXQgbHRyIHByb3BlcnRpZXMgdG8gaW5pdGlhbCB2YWx1ZS5cbkJ1dCBzb21ldGltZXMgaXQncyBoYXJkIHRvIGZpbmQsIHdoYXQgdGhlIHByZXZpb3VzIHZhbHVlIHNob3VsZCBiZS4gQW5kIHN1Y2ggbWl4aW4gY2FsbCBsb29rcyB0b28gdmVyYm9zZS5cbiovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG4vKlxuXG5BY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc2NvcGluZy0xLyNob3N0LXNlbGVjdG9yKVxuOmhvc3QgYW5kIDpob3N0LWNvbnRleHQgYXJlIHBzZXVkby1jbGFzc2VzLiBTbyB3ZSBhc3N1bWUgdGhleSBjb3VsZCBiZSBjb21iaW5lZCxcbmxpa2Ugb3RoZXIgcHNldWRvLWNsYXNzZXMsIGV2ZW4gc2FtZSBvbmVzLlxuRm9yIGV4YW1wbGU6ICc6bnRoLW9mLXR5cGUoMm4pOm50aC1vZi10eXBlKGV2ZW4pJy5cblxuSWRlYWwgc29sdXRpb24gd291bGQgYmUgdG8gcHJlcGVuZCBhbnkgc2VsZWN0b3Igd2l0aCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuXG5UaGVuIG5lYnVsYXIgY29tcG9uZW50cyB3aWxsIGJlaGF2ZSBhcyBhbiBodG1sIGVsZW1lbnQgYW5kIHJlc3BvbmQgdG8gW2Rpcl0gYXR0cmlidXRlIG9uIGFueSBsZXZlbCxcbnNvIGRpcmVjdGlvbiBjb3VsZCBiZSBvdmVycmlkZGVuIG9uIGFueSBjb21wb25lbnQgbGV2ZWwuXG5cbkltcGxlbWVudGF0aW9uIGNvZGU6XG5cbkBtaXhpbiBuYi1ydGwoKSB7XG4gIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICBAYXQtcm9vdCB7c2VsZWN0b3ItYXBwZW5kKCc6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSknLCAmKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkFuZCB3aGVuIHdlIGNhbGwgaXQgc29tZXdoZXJlOlxuXG46aG9zdCB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cbjpob3N0LWNvbnRleHQoLi4uKSB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cblxuUmVzdWx0IHdpbGwgbG9vayBsaWtlOlxuXG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG5cbipcbiAgU2lkZSBub3RlOlxuICA6aG9zdC1jb250ZXh0KCk6aG9zdCBzZWxlY3RvciBhcmUgdmFsaWQuIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAxNUZlYi8wMzA1Lmh0bWxcblxuICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgc2hvdWxkIG1hdGNoIGFueSBwZXJtdXRhdGlvbixcbiAgc28gb3JkZXIgaXMgbm90IGltcG9ydGFudC5cbipcblxuXG5DdXJyZW50bHksIHRoZXJlJ3JlIHR3byBwcm9ibGVtcyB3aXRoIHRoaXMgYXBwcm9hY2g6XG5cbkZpcnN0LCBpcyB0aGF0IHdlIGNhbid0IGNvbWJpbmUgOmhvc3QsIDpob3N0LWNvbnRleHQuIEFuZ3VsYXIgYnVncyAjMTQzNDksICMxOTE5OS5cbkZvciB0aGUgbW9tZW50IG9mIHdyaXRpbmcsIHRoZSBvbmx5IHBvc3NpYmxlIHdheSBpczpcbjpob3N0IHtcbiAgOmhvc3QtY29udGV4dCguLi4pIHtcbiAgICAuLi5cbiAgfVxufVxuSXQgZG9lc24ndCB3b3JrIGZvciB1cyBiZWNhdXNlIG1peGluIGNvdWxkIGJlIGNhbGxlZCBzb21ld2hlcmUgZGVlcGVyLCBsaWtlOlxuOmhvc3Qge1xuICBwIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7IC4uLiB9XG4gIH1cbn1cbldlIGFyZSBub3QgYWJsZSB0byBnbyB1cCB0byA6aG9zdCBsZXZlbCB0byBwbGFjZSBjb250ZW50IHBhc3NlZCB0byBtaXhpbi5cblxuVGhlIHNlY29uZCBwcm9ibGVtIGlzIHRoYXQgd2Ugb25seSBjYW4gYmUgc3VyZSB0aGF0IHdlIGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gYW5vdGhlclxuOmhvc3QvOmhvc3QtY29udGV4dCBwc2V1ZG8tY2xhc3Mgd2hlbiBjYWxsZWQgaW4gdGhlbWUgZmlsZXMgKCoudGhlbWUuc2NzcykuXG4gICpcbiAgICBTaWRlIG5vdGU6XG4gICAgQ3VycmVudGx5LCBuYi1pbnN0YWxsLWNvbXBvbmVudCB1c2VzIGFub3RoZXIgYXBwcm9hY2ggd2hlcmUgOmhvc3QgcHJlcGVuZGVkIHdpdGggdGhlIHRoZW1lIG5hbWVcbiAgICAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzViOTYwNzg2MjRiMGE0NzYwZjJkYmNmNmZkZjBiZDYyNzkxYmU1YmIvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MSksXG4gICAgYnV0IGl0IHdhcyBtYWRlIHRvIGJlIGFibGUgdG8gdXNlIGN1cnJlbnQgcmVhbGl6YXRpb24gb2YgcnRsIGFuZCBpdCBjYW4gYmUgcmV3cml0dGVuIGJhY2sgdG9cbiAgICA6aG9zdC1jb250ZXh0KCR0aGVtZSkgb25jZSB3ZSB3aWxsIGJlIGFibGUgdG8gdXNlIG11bHRpcGxlIHNoYWRvdyBzZWxlY3RvcnMuXG4gICpcbkJ1dCB3aGVuIGl0J3MgY2FsbGVkIGluICouY29tcG9uZW50LnNjc3Mgd2UgY2FuJ3QgYmUgc3VyZSwgdGhhdCBzZWxlY3RvciBzdGFydHMgd2l0aCA6aG9zdC86aG9zdC1jb250ZXh0LFxuYmVjYXVzZSBhbmd1bGFyIGFsbG93cyBvbWl0dGluZyBwc2V1ZG8tY2xhc3NlcyBpZiB3ZSBkb24ndCBuZWVkIHRvIHN0eWxlIDpob3N0IGNvbXBvbmVudCBpdHNlbGYuXG5XZSBjYW4gYnJlYWsgc3VjaCBzZWxlY3RvcnMsIGJ5IGp1c3QgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byB0aGVtLlxuICAqKipcbiAgICBQb3NzaWJsZSBzb2x1dGlvblxuICAgIGNoZWNrIGlmIHdlIGluIHRoZW1lIGJ5IHNvbWUgdGhlbWUgdmFyaWFibGVzIGFuZCBpZiBzbyBhcHBlbmQsIG90aGVyd2lzZSBuZXN0IGxpa2VcbiAgICBAYXQtcm9vdCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkge1xuICAgICAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgICAgIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICAgICAgeyZ9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFdoYXQgaWYgOmhvc3Qgc3BlY2lmaWVkPyBDYW4gd2UgYWRkIHNwYWNlIGluIDpob3N0LWNvbnRleHQoLi4uKSA6aG9zdD9cbiAgICBPciBtYXliZSBhZGQgOmhvc3Qgc2VsZWN0b3IgYW55d2F5PyBJZiBtdWx0aXBsZSA6aG9zdCBzZWxlY3RvcnMgYXJlIGFsbG93ZWRcbiAgKioqXG5cblxuUHJvYmxlbXMgd2l0aCB0aGUgY3VycmVudCBhcHByb2FjaC5cblxuMS4gRGlyZWN0aW9uIGNhbiBiZSBhcHBsaWVkIG9ubHkgb24gZG9jdW1lbnQgbGV2ZWwsIGJlY2F1c2UgbWl4aW4gcHJlcGVuZHMgdGhlbWUgY2xhc3MsXG53aGljaCBwbGFjZWQgb24gdGhlIGJvZHkuXG4yLiAqLmNvbXBvbmVudC5zY3NzIHN0eWxlcyBzaG91bGQgYmUgaW4gOmhvc3Qgc2VsZWN0b3IuIE90aGVyd2lzZSBhbmd1bGFyIHdpbGwgYWRkIGhvc3RcbmF0dHJpYnV0ZSB0byBbZGlyPXJ0bF0gYXR0cmlidXRlIGFzIHdlbGwuXG5cblxuR2VuZXJhbCBwcm9ibGVtcy5cblxuTHRyIGlzIGRlZmF1bHQgZG9jdW1lbnQgZGlyZWN0aW9uLCBidXQgZm9yIHByb3BlciB3b3JrIG9mIG5iLWx0ciAobWVhbnMgbHRyIG9ubHkpLFxuW2Rpcj1sdHJdIHNob3VsZCBiZSBzcGVjaWZpZWQgYXQgbGVhc3Qgc29tZXdoZXJlLiAnOm5vdChbZGlyPXJ0bF0nIG5vdCBhcHBsaWNhYmxlIGhlcmUsXG5iZWNhdXNlIGl0J3Mgc2F0aXNmeSBhbnkgcGFyZW50LCB0aGF0IGRvbid0IGhhdmUgW2Rpcj1ydGxdIGF0dHJpYnV0ZS5cblByZXZpb3VzIGFwcHJvYWNoIHdhcyB0byB1c2Ugc2luZ2xlIHJ0bCBtaXhpbiBhbmQgcmVzZXQgbHRyIHByb3BlcnRpZXMgdG8gaW5pdGlhbCB2YWx1ZS5cbkJ1dCBzb21ldGltZXMgaXQncyBoYXJkIHRvIGZpbmQsIHdoYXQgdGhlIHByZXZpb3VzIHZhbHVlIHNob3VsZCBiZS4gQW5kIHN1Y2ggbWl4aW4gY2FsbCBsb29rcyB0b28gdmVyYm9zZS5cbiovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4uY2RrLW92ZXJsYXktY29udGFpbmVyLCAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4uY2RrLW92ZXJsYXktY29udGFpbmVyOmVtcHR5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4uY2RrLW92ZXJsYXktcGFuZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLmNkay1vdmVybGF5LWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIC5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICBvcGFjaXR5OiAwLjY7XG4gIH1cbn1cbi5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMyKTtcbn1cblxuLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wLCAuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDFweDtcbiAgbWluLWhlaWdodDogMXB4O1xufVxuXG4uY2RrLWdsb2JhbC1zY3JvbGxibG9jayB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLyoqXG4gKiBJbiBjYXNlIHdoZW4gTmVidWxhciBMYXlvdXQgY3VzdG9tIHNjcm9sbCBgd2l0aFNjcm9sbGAgbW9kZSBpcyBlbmFibGVkXG4gKiB3ZSBuZWVkIHRvIGRpc2FibGUgZGVmYXVsdCBDREsgc2Nyb2xsIGJsb2NrZXIgKEBsaW5rIE5iQmxvY2tTY3JvbGxTdHJhdGVneUFkYXB0ZXIpIG9uIEhUTUwgZWxlbWVudFxuICogc28gdGhhdCBpdCB3b24ndCBhZGQgYWRkaXRpb25hbCBwb3NpdGlvbmluZy5cbiAqL1xuLm5iLWdsb2JhbC1zY3JvbGxibG9jayB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIHdpZHRoOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG4vKlxuXG5BY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3Mtc2NvcGluZy0xLyNob3N0LXNlbGVjdG9yKVxuOmhvc3QgYW5kIDpob3N0LWNvbnRleHQgYXJlIHBzZXVkby1jbGFzc2VzLiBTbyB3ZSBhc3N1bWUgdGhleSBjb3VsZCBiZSBjb21iaW5lZCxcbmxpa2Ugb3RoZXIgcHNldWRvLWNsYXNzZXMsIGV2ZW4gc2FtZSBvbmVzLlxuRm9yIGV4YW1wbGU6ICc6bnRoLW9mLXR5cGUoMm4pOm50aC1vZi10eXBlKGV2ZW4pJy5cblxuSWRlYWwgc29sdXRpb24gd291bGQgYmUgdG8gcHJlcGVuZCBhbnkgc2VsZWN0b3Igd2l0aCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkuXG5UaGVuIG5lYnVsYXIgY29tcG9uZW50cyB3aWxsIGJlaGF2ZSBhcyBhbiBodG1sIGVsZW1lbnQgYW5kIHJlc3BvbmQgdG8gW2Rpcl0gYXR0cmlidXRlIG9uIGFueSBsZXZlbCxcbnNvIGRpcmVjdGlvbiBjb3VsZCBiZSBvdmVycmlkZGVuIG9uIGFueSBjb21wb25lbnQgbGV2ZWwuXG5cbkltcGxlbWVudGF0aW9uIGNvZGU6XG5cbkBtaXhpbiBuYi1ydGwoKSB7XG4gIC8vIGFkZCAjIHRvIHNjc3MgaW50ZXJwb2xhdGlvbiBzdGF0ZW1lbnQuXG4gIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICBAYXQtcm9vdCB7c2VsZWN0b3ItYXBwZW5kKCc6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSknLCAmKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkFuZCB3aGVuIHdlIGNhbGwgaXQgc29tZXdoZXJlOlxuXG46aG9zdCB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cbjpob3N0LWNvbnRleHQoLi4uKSB7XG4gIC5zb21lLWNsYXNzIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7XG4gICAgICAuLi5cbiAgICB9XG4gIH1cbn1cblxuUmVzdWx0IHdpbGwgbG9vayBsaWtlOlxuXG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCAuc29tZS1jbGFzcyB7XG4gIC4uLlxufVxuOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QtY29udGV4dCguLi4pIC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG5cbipcbiAgU2lkZSBub3RlOlxuICA6aG9zdC1jb250ZXh0KCk6aG9zdCBzZWxlY3RvciBhcmUgdmFsaWQuIGh0dHBzOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAxNUZlYi8wMzA1Lmh0bWxcblxuICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgc2hvdWxkIG1hdGNoIGFueSBwZXJtdXRhdGlvbixcbiAgc28gb3JkZXIgaXMgbm90IGltcG9ydGFudC5cbipcblxuXG5DdXJyZW50bHksIHRoZXJlJ3JlIHR3byBwcm9ibGVtcyB3aXRoIHRoaXMgYXBwcm9hY2g6XG5cbkZpcnN0LCBpcyB0aGF0IHdlIGNhbid0IGNvbWJpbmUgOmhvc3QsIDpob3N0LWNvbnRleHQuIEFuZ3VsYXIgYnVncyAjMTQzNDksICMxOTE5OS5cbkZvciB0aGUgbW9tZW50IG9mIHdyaXRpbmcsIHRoZSBvbmx5IHBvc3NpYmxlIHdheSBpczpcbjpob3N0IHtcbiAgOmhvc3QtY29udGV4dCguLi4pIHtcbiAgICAuLi5cbiAgfVxufVxuSXQgZG9lc24ndCB3b3JrIGZvciB1cyBiZWNhdXNlIG1peGluIGNvdWxkIGJlIGNhbGxlZCBzb21ld2hlcmUgZGVlcGVyLCBsaWtlOlxuOmhvc3Qge1xuICBwIHtcbiAgICBAaW5jbHVkZSBuYi1ydGwoKSB7IC4uLiB9XG4gIH1cbn1cbldlIGFyZSBub3QgYWJsZSB0byBnbyB1cCB0byA6aG9zdCBsZXZlbCB0byBwbGFjZSBjb250ZW50IHBhc3NlZCB0byBtaXhpbi5cblxuVGhlIHNlY29uZCBwcm9ibGVtIGlzIHRoYXQgd2Ugb25seSBjYW4gYmUgc3VyZSB0aGF0IHdlIGFwcGVuZGluZyA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgdG8gYW5vdGhlclxuOmhvc3QvOmhvc3QtY29udGV4dCBwc2V1ZG8tY2xhc3Mgd2hlbiBjYWxsZWQgaW4gdGhlbWUgZmlsZXMgKCoudGhlbWUuc2NzcykuXG4gICpcbiAgICBTaWRlIG5vdGU6XG4gICAgQ3VycmVudGx5LCBuYi1pbnN0YWxsLWNvbXBvbmVudCB1c2VzIGFub3RoZXIgYXBwcm9hY2ggd2hlcmUgOmhvc3QgcHJlcGVuZGVkIHdpdGggdGhlIHRoZW1lIG5hbWVcbiAgICAoaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzViOTYwNzg2MjRiMGE0NzYwZjJkYmNmNmZkZjBiZDYyNzkxYmU1YmIvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MSksXG4gICAgYnV0IGl0IHdhcyBtYWRlIHRvIGJlIGFibGUgdG8gdXNlIGN1cnJlbnQgcmVhbGl6YXRpb24gb2YgcnRsIGFuZCBpdCBjYW4gYmUgcmV3cml0dGVuIGJhY2sgdG9cbiAgICA6aG9zdC1jb250ZXh0KCR0aGVtZSkgb25jZSB3ZSB3aWxsIGJlIGFibGUgdG8gdXNlIG11bHRpcGxlIHNoYWRvdyBzZWxlY3RvcnMuXG4gICpcbkJ1dCB3aGVuIGl0J3MgY2FsbGVkIGluICouY29tcG9uZW50LnNjc3Mgd2UgY2FuJ3QgYmUgc3VyZSwgdGhhdCBzZWxlY3RvciBzdGFydHMgd2l0aCA6aG9zdC86aG9zdC1jb250ZXh0LFxuYmVjYXVzZSBhbmd1bGFyIGFsbG93cyBvbWl0dGluZyBwc2V1ZG8tY2xhc3NlcyBpZiB3ZSBkb24ndCBuZWVkIHRvIHN0eWxlIDpob3N0IGNvbXBvbmVudCBpdHNlbGYuXG5XZSBjYW4gYnJlYWsgc3VjaCBzZWxlY3RvcnMsIGJ5IGp1c3QgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byB0aGVtLlxuICAqKipcbiAgICBQb3NzaWJsZSBzb2x1dGlvblxuICAgIGNoZWNrIGlmIHdlIGluIHRoZW1lIGJ5IHNvbWUgdGhlbWUgdmFyaWFibGVzIGFuZCBpZiBzbyBhcHBlbmQsIG90aGVyd2lzZSBuZXN0IGxpa2VcbiAgICBAYXQtcm9vdCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkge1xuICAgICAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgICAgIC8vIGl0IHdvcmtzIGluIGNvbW1lbnRzIGFuZCB3ZSBjYW4ndCB1c2UgaXQgaGVyZVxuICAgICAgeyZ9IHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIFdoYXQgaWYgOmhvc3Qgc3BlY2lmaWVkPyBDYW4gd2UgYWRkIHNwYWNlIGluIDpob3N0LWNvbnRleHQoLi4uKSA6aG9zdD9cbiAgICBPciBtYXliZSBhZGQgOmhvc3Qgc2VsZWN0b3IgYW55d2F5PyBJZiBtdWx0aXBsZSA6aG9zdCBzZWxlY3RvcnMgYXJlIGFsbG93ZWRcbiAgKioqXG5cblxuUHJvYmxlbXMgd2l0aCB0aGUgY3VycmVudCBhcHByb2FjaC5cblxuMS4gRGlyZWN0aW9uIGNhbiBiZSBhcHBsaWVkIG9ubHkgb24gZG9jdW1lbnQgbGV2ZWwsIGJlY2F1c2UgbWl4aW4gcHJlcGVuZHMgdGhlbWUgY2xhc3MsXG53aGljaCBwbGFjZWQgb24gdGhlIGJvZHkuXG4yLiAqLmNvbXBvbmVudC5zY3NzIHN0eWxlcyBzaG91bGQgYmUgaW4gOmhvc3Qgc2VsZWN0b3IuIE90aGVyd2lzZSBhbmd1bGFyIHdpbGwgYWRkIGhvc3RcbmF0dHJpYnV0ZSB0byBbZGlyPXJ0bF0gYXR0cmlidXRlIGFzIHdlbGwuXG5cblxuR2VuZXJhbCBwcm9ibGVtcy5cblxuTHRyIGlzIGRlZmF1bHQgZG9jdW1lbnQgZGlyZWN0aW9uLCBidXQgZm9yIHByb3BlciB3b3JrIG9mIG5iLWx0ciAobWVhbnMgbHRyIG9ubHkpLFxuW2Rpcj1sdHJdIHNob3VsZCBiZSBzcGVjaWZpZWQgYXQgbGVhc3Qgc29tZXdoZXJlLiAnOm5vdChbZGlyPXJ0bF0nIG5vdCBhcHBsaWNhYmxlIGhlcmUsXG5iZWNhdXNlIGl0J3Mgc2F0aXNmeSBhbnkgcGFyZW50LCB0aGF0IGRvbid0IGhhdmUgW2Rpcj1ydGxdIGF0dHJpYnV0ZS5cblByZXZpb3VzIGFwcHJvYWNoIHdhcyB0byB1c2Ugc2luZ2xlIHJ0bCBtaXhpbiBhbmQgcmVzZXQgbHRyIHByb3BlcnRpZXMgdG8gaW5pdGlhbCB2YWx1ZS5cbkJ1dCBzb21ldGltZXMgaXQncyBoYXJkIHRvIGZpbmQsIHdoYXQgdGhlIHByZXZpb3VzIHZhbHVlIHNob3VsZCBiZS4gQW5kIHN1Y2ggbWl4aW4gY2FsbCBsb29rcyB0b28gdmVyYm9zZS5cbiovXG4vKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyohXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLypcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKiFcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG4vKlxuICogTm9ybWFsaXphdGlvbiBvZiBIVE1MIGVsZW1lbnRzLCBtYW51YWxseSBmb3JrZWQgZnJvbSBOb3JtYWxpemUuY3NzIHRvIHJlbW92ZVxuICogc3R5bGVzIHRhcmdldGluZyBpcnJlbGV2YW50IGJyb3dzZXJzIHdoaWxlIGFwcGx5aW5nIG5ldyBzdHlsZXMuXG4gKlxuICogTm9ybWFsaXplIGlzIGxpY2Vuc2VkIE1JVC4gaHR0cHM6Ly9naXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzc1xuICovXG5odG1sIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmh0bWwsIGJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4gKi9cbmh0bWwge1xuICBsaW5lLWhlaWdodDogMS4xNTtcbiAgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC8qIDIgKi9cbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cbiAqL1xuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcbn1cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXG4gKi9cbmhyIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIC8qIDEgKi9cbiAgaGVpZ2h0OiAwO1xuICAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICAvKiAyICovXG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xucHJlIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtO1xuICAvKiAyICovXG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxuICovXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qKlxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXG4gKi9cbmFiYnJbdGl0bGVdIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgLyogMSAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgLyogMiAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG4gIC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuICovXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5jb2RlLFxua2JkLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcbiAgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKipcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxuICogYWxsIGJyb3dzZXJzLlxuICovXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXG4gKi9cbmltZyB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiAqL1xuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlO1xuICAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAvKiAxICovXG4gIG1hcmdpbjogMDtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cbiAqL1xuYnV0dG9uLFxuaW5wdXQge1xuICAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxuICovXG5idXR0b24sXG5zZWxlY3Qge1xuICAvKiAxICovXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKi9cbmJ1dHRvbixcblt0eXBlPWJ1dHRvbl0sXG5bdHlwZT1yZXNldF0sXG5bdHlwZT1zdWJtaXRdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9YnV0dG9uXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPXJlc2V0XTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qKlxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxuICovXG5idXR0b246LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1idXR0b25dOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9cmVzZXRdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9c3VibWl0XTotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cbmZpZWxkc2V0IHtcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cbiAqL1xubGVnZW5kIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDtcbiAgLyogMiAqL1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgLyogMSAqL1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIC8qIDEgKi9cbiAgcGFkZGluZzogMDtcbiAgLyogMyAqL1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAvKiAxICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cbiAqL1xucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXG4gKi9cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXG4gKi9cblt0eXBlPWNoZWNrYm94XSxcblt0eXBlPXJhZGlvXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8qIDEgKi9cbiAgcGFkZGluZzogMDtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cbiAqL1xuW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcblt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiAqL1xuW3R5cGU9c2VhcmNoXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xuICAvKiAyICovXG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuICovXG5bdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXG4gKi9cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgLyogMSAqL1xuICBmb250OiBpbmhlcml0O1xuICAvKiAyICovXG59XG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxuICovXG5kZXRhaWxzIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxuICovXG50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXG4gKi9cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLyohXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLnZpc3VhbGx5LWhpZGRlbiB7XG4gIC8qIGh0dHBzOi8vc25vb2suY2EvYXJjaGl2ZXMvaHRtbF9hbmRfY3NzL2hpZGluZy1jb250ZW50LWZvci1hY2Nlc3NpYmlsaXR5ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY2xpcDogcmVjdCgxcHggMXB4IDFweCAxcHgpO1xuICAvKiBJRTYsIElFNyAqL1xuICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG59XG5cbi5hZG1pbk1lbnUge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTAweDtcbiAgYm9yZGVyOiBzaWx2ZXIgM3B4IHNvbGlkO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hZG1pbk1lbnU6aG92ZXIge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTAweDtcbiAgYm9yZGVyOiBibGFjayAzcHggc29saWQ7XG4gIGNvbG9yOiBzaWx2ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFkbWluQiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn0iLCJAaW1wb3J0ICd+QGFuZ3VsYXIvY2RrL292ZXJsYXktcHJlYnVpbHQnO1xuXG5AbWl4aW4gbmItb3ZlcmxheS10aGVtZSB7XG4gIC5vdmVybGF5LWJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kOiBuYi10aGVtZShvdmVybGF5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IpO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgei1pbmRleDogMTA0MDtcbiAgfVxufVxuXG4vKipcbiAqIEluIGNhc2Ugd2hlbiBOZWJ1bGFyIExheW91dCBjdXN0b20gc2Nyb2xsIGB3aXRoU2Nyb2xsYCBtb2RlIGlzIGVuYWJsZWRcbiAqIHdlIG5lZWQgdG8gZGlzYWJsZSBkZWZhdWx0IENESyBzY3JvbGwgYmxvY2tlciAoQGxpbmsgTmJCbG9ja1Njcm9sbFN0cmF0ZWd5QWRhcHRlcikgb24gSFRNTCBlbGVtZW50XG4gKiBzbyB0aGF0IGl0IHdvbid0IGFkZCBhZGRpdGlvbmFsIHBvc2l0aW9uaW5nLlxuICovXG4ubmItZ2xvYmFsLXNjcm9sbGJsb2NrIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgd2lkdGg6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi1wb3BvdmVyLXRoZW1lIHtcbiAgbmItcG9wb3ZlciB7XG4gICAgJGFycm93LXNpemU6IG5iLXRoZW1lKHBvcG92ZXItYXJyb3ctc2l6ZSk7XG5cbiAgICBib3JkZXI6IG5iLXRoZW1lKHBvcG92ZXItYm9yZGVyLXdpZHRoKSBzb2xpZCBuYi10aGVtZShwb3BvdmVyLWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogbmItdGhlbWUocG9wb3Zlci1ib3JkZXItcmFkaXVzKTtcbiAgICBiYWNrZ3JvdW5kOiBuYi10aGVtZShwb3BvdmVyLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGJveC1zaGFkb3c6IG5iLXRoZW1lKHBvcG92ZXItc2hhZG93KTtcbiAgICBjb2xvcjogbmItdGhlbWUocG9wb3Zlci10ZXh0LWNvbG9yKTtcblxuICAgIC5wcmltaXRpdmUtb3ZlcmxheSB7XG4gICAgICBmb250LWZhbWlseTogbmItdGhlbWUocG9wb3Zlci10ZXh0LWZvbnQtZmFtaWx5KTtcbiAgICAgIGZvbnQtc2l6ZTogbmItdGhlbWUocG9wb3Zlci10ZXh0LWZvbnQtc2l6ZSk7XG4gICAgICBmb250LXdlaWdodDogbmItdGhlbWUocG9wb3Zlci10ZXh0LWZvbnQtd2VpZ2h0KTtcbiAgICAgIGxpbmUtaGVpZ2h0OiBuYi10aGVtZShwb3BvdmVyLXRleHQtbGluZS1oZWlnaHQpO1xuICAgICAgcGFkZGluZzogbmItdGhlbWUocG9wb3Zlci1wYWRkaW5nKTtcbiAgICB9XG5cbiAgICAuYXJyb3cge1xuICAgICAgYm9yZGVyLWxlZnQ6ICRhcnJvdy1zaXplIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXJpZ2h0OiAkYXJyb3ctc2l6ZSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1ib3R0b206ICRhcnJvdy1zaXplIHNvbGlkIG5iLXRoZW1lKHBvcG92ZXItYm9yZGVyLWNvbG9yKTtcblxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gI3skYXJyb3ctc2l6ZX0pO1xuICAgICAgICBib3JkZXItbGVmdDogJGFycm93LXNpemUgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yaWdodDogJGFycm93LXNpemUgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206ICRhcnJvdy1zaXplIHNvbGlkIG5iLXRoZW1lKHBvcG92ZXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGNsaXAtcGF0aDogaW5zZXQoMCAwIDJweCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5uYi1vdmVybGF5LWJvdHRvbSAuYXJyb3cge1xuICAgICAgdG9wOiBjYWxjKC0xICogI3skYXJyb3ctc2l6ZX0gKyAxcHgpO1xuICAgICAgbGVmdDogY2FsYyg1MCUgLSAjeyRhcnJvdy1zaXplfSk7XG4gICAgfVxuXG4gICAgJi5uYi1vdmVybGF5LWJvdHRvbS1zdGFydCAuYXJyb3cge1xuICAgICAgdG9wOiBjYWxjKC0xICogI3skYXJyb3ctc2l6ZX0gKyAxcHgpO1xuICAgICAgQGluY2x1ZGUgbmItbHRyKHJpZ2h0LCAkYXJyb3ctc2l6ZSk7XG4gICAgICBAaW5jbHVkZSBuYi1ydGwobGVmdCwgJGFycm93LXNpemUpO1xuICAgIH1cblxuICAgICYubmItb3ZlcmxheS1ib3R0b20tZW5kIC5hcnJvdyB7XG4gICAgICB0b3A6IGNhbGMoLTEgKiAjeyRhcnJvdy1zaXplfSArIDFweCk7XG4gICAgICBAaW5jbHVkZSBuYi1sdHIobGVmdCwgJGFycm93LXNpemUpO1xuICAgICAgQGluY2x1ZGUgbmItcnRsKHJpZ2h0LCAkYXJyb3ctc2l6ZSk7XG4gICAgfVxuXG4gICAgJi5uYi1vdmVybGF5LWxlZnQgLmFycm93IHtcbiAgICAgIHJpZ2h0OiBjYWxjKC0xICogI3skYXJyb3ctc2l6ZX0gLSAjeyRhcnJvdy1zaXplfSAvIDIgKyAycHgpO1xuICAgICAgdG9wOiBjYWxjKDUwJSAtICN7JGFycm93LXNpemUgLyAyfSk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgfVxuXG4gICAgJi5uYi1vdmVybGF5LXN0YXJ0LXRvcCAuYXJyb3cge1xuICAgICAgcmlnaHQ6IGNhbGMoLTEgKiAjeyRhcnJvdy1zaXplfSAtICN7JGFycm93LXNpemV9IC8gMiArIDJweCk7XG4gICAgICBib3R0b206ICRhcnJvdy1zaXplO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIH1cblxuICAgICYubmItb3ZlcmxheS1zdGFydC1ib3R0b20gLmFycm93IHtcbiAgICAgIHJpZ2h0OiBjYWxjKC0xICogI3skYXJyb3ctc2l6ZX0gLSAjeyRhcnJvdy1zaXplfSAvIDIgKyAycHgpO1xuICAgICAgdG9wOiAkYXJyb3ctc2l6ZTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB9XG5cbiAgICAmLm5iLW92ZXJsYXktdG9wIC5hcnJvdyB7XG4gICAgICBib3R0b206IGNhbGMoLTEgKiAjeyRhcnJvdy1zaXplfSArIDFweCk7XG4gICAgICBsZWZ0OiBjYWxjKDUwJSAtICN7JGFycm93LXNpemV9KTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgfVxuXG4gICAgJi5uYi1vdmVybGF5LXRvcC1zdGFydCAuYXJyb3cge1xuICAgICAgYm90dG9tOiBjYWxjKC0xICogI3skYXJyb3ctc2l6ZX0gKyAxcHgpO1xuICAgICAgQGluY2x1ZGUgbmItbHRyKHJpZ2h0LCAkYXJyb3ctc2l6ZSk7XG4gICAgICBAaW5jbHVkZSBuYi1ydGwobGVmdCwgJGFycm93LXNpemUpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB9XG5cbiAgICAmLm5iLW92ZXJsYXktdG9wLWVuZCAuYXJyb3cge1xuICAgICAgYm90dG9tOiBjYWxjKC0xICogI3skYXJyb3ctc2l6ZX0gKyAxcHgpO1xuICAgICAgQGluY2x1ZGUgbmItbHRyKGxlZnQsICRhcnJvdy1zaXplKTtcbiAgICAgIEBpbmNsdWRlIG5iLXJ0bChyaWdodCwgJGFycm93LXNpemUpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB9XG5cbiAgICAmLm5iLW92ZXJsYXktcmlnaHQgLmFycm93IHtcbiAgICAgIGxlZnQ6IGNhbGMoLTEgKiAjeyRhcnJvdy1zaXplfSAtICN7JGFycm93LXNpemV9IC8gMiArIDJweCk7XG4gICAgICB0b3A6IGNhbGMoNTAlIC0gI3skYXJyb3ctc2l6ZSAvIDJ9KTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gICAgfVxuXG4gICAgJi5uYi1vdmVybGF5LWVuZC10b3AgLmFycm93IHtcbiAgICAgIGxlZnQ6IGNhbGMoLTEgKiAjeyRhcnJvdy1zaXplfSAtICN7JGFycm93LXNpemV9IC8gMiArIDJweCk7XG4gICAgICBib3R0b206ICRhcnJvdy1zaXplO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgICB9XG5cbiAgICAmLm5iLW92ZXJsYXktZW5kLWJvdHRvbSAuYXJyb3cge1xuICAgICAgbGVmdDogY2FsYygtMSAqICN7JGFycm93LXNpemV9IC0gI3skYXJyb3ctc2l6ZX0gLyAyICsgMnB4KTtcbiAgICAgIHRvcDogJGFycm93LXNpemU7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuQGltcG9ydCAnLi4vLi4vc3R5bGVzL2NvcmUvbWl4aW5zJztcblxuQG1peGluIG5iLWNvbnRleHQtbWVudS10aGVtZSgpIHtcblxuICAuY29udGV4dC1tZW51LWhvc3Qge1xuICAgIC8qXG4gICAgICBGaXhlcyBjbGljayBub3QgYmVpbmcgYnViYmxlZCB0byB0aGUgYm9keSBpbiBTYWZhcmkuXG4gICAgICBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICAqL1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIG5iLWNvbnRleHQtbWVudSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUoY29udGV4dC1tZW51LWJhY2tncm91bmQtY29sb3IpO1xuICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUoY29udGV4dC1tZW51LWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXN0eWxlOiBuYi10aGVtZShjb250ZXh0LW1lbnUtYm9yZGVyLXN0eWxlKTtcbiAgICBib3JkZXItd2lkdGg6IG5iLXRoZW1lKGNvbnRleHQtbWVudS1ib3JkZXItd2lkdGgpO1xuICAgIGJvcmRlci1yYWRpdXM6IG5iLXRoZW1lKGNvbnRleHQtbWVudS1ib3JkZXItcmFkaXVzKTtcbiAgICBib3gtc2hhZG93OiBuYi10aGVtZShjb250ZXh0LW1lbnUtc2hhZG93KTtcbiAgICBtaW4td2lkdGg6IG5iLXRoZW1lKGNvbnRleHQtbWVudS1taW4td2lkdGgpO1xuICAgIG1heC13aWR0aDogbmItdGhlbWUoY29udGV4dC1tZW51LW1heC13aWR0aCk7XG5cbiAgICBuYi1tZW51IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IG5iLXRoZW1lKGNvbnRleHQtbWVudS1ib3JkZXItcmFkaXVzKTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LWFsaWduOiBuYi10aGVtZShjb250ZXh0LW1lbnUtdGV4dC1hbGlnbik7XG4gICAgfVxuICB9XG59XG4iLCIvKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi9zZWxlY3Qtb3V0bGluZSc7XG5AaW1wb3J0ICcuL3NlbGVjdC1maWxsZWQnO1xuQGltcG9ydCAnLi9zZWxlY3QtaGVybyc7XG5cbkBtaXhpbiBuYi1zZWxlY3QtdGhlbWUoKSB7XG4gIG5iLXNlbGVjdCAuc2VsZWN0LWJ1dHRvbiB7XG4gICAgbWluLXdpZHRoOiBuYi10aGVtZShzZWxlY3QtbWluLXdpZHRoKTtcbiAgICBjdXJzb3I6IG5iLXRoZW1lKHNlbGVjdC1jdXJzb3IpO1xuICAgIGZvbnQtZmFtaWx5OiBuYi10aGVtZShzZWxlY3QtdGV4dC1mb250LWZhbWlseSk7XG5cbiAgICAmLnBsYWNlaG9sZGVyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBuYi10aGVtZShzZWxlY3QtcGxhY2Vob2xkZXItdGV4dC1mb250LWZhbWlseSk7XG4gICAgfVxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgY3Vyc29yOiBuYi10aGVtZShzZWxlY3QtZGlzYWJsZWQtY3Vyc29yKTtcbiAgICB9XG4gIH1cblxuICBAZWFjaCAkc2l6ZSBpbiBuYi1nZXQtc2l6ZXMoKSB7XG4gICAgbmItc2VsZWN0LnNpemUtI3skc2l6ZX0ge1xuICAgICAgLnNlbGVjdC1idXR0b24ge1xuICAgICAgICBmb250LXNpemU6IG5iLXRoZW1lKHNlbGVjdC0jeyRzaXplfS10ZXh0LWZvbnQtc2l6ZSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBuYi10aGVtZShzZWxlY3QtI3skc2l6ZX0tdGV4dC1mb250LXdlaWdodCk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBuYi10aGVtZShzZWxlY3QtI3skc2l6ZX0tdGV4dC1saW5lLWhlaWdodCk7XG5cbiAgICAgICAgJi5wbGFjZWhvbGRlciB7XG4gICAgICAgICAgZm9udC1zaXplOiBuYi10aGVtZShzZWxlY3QtI3skc2l6ZX0tcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemUpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBuYi10aGVtZShzZWxlY3QtI3skc2l6ZX0tcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLmVtcHR5OjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBoZWlnaHQ6IG5iLXRoZW1lKHNlbGVjdC0jeyRzaXplfS10ZXh0LWxpbmUtaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmOm5vdCguZnVsbC13aWR0aCkge1xuICAgICAgICBtYXgtd2lkdGg6IG5iLXRoZW1lKHNlbGVjdC0jeyRzaXplfS1tYXgtd2lkdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBlYWNoICRzaGFwZSBpbiBuYi1nZXQtc2hhcGVzKCkge1xuICAgIG5iLXNlbGVjdC5zaGFwZS0jeyRzaGFwZX0gLnNlbGVjdC1idXR0b24ge1xuICAgICAgYm9yZGVyLXJhZGl1czogbmItdGhlbWUoc2VsZWN0LSN7JHNoYXBlfS1ib3JkZXItcmFkaXVzKTtcbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBzZWxlY3Qtb3V0bGluZSgpO1xuICBAaW5jbHVkZSBzZWxlY3QtZmlsbGVkKCk7XG4gIEBpbmNsdWRlIHNlbGVjdC1oZXJvKCk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi1mb3JtLWZpZWxkLXRoZW1lKCkge1xuICAubmItZm9ybS1jb250cm9sLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuXG4gICAgaW5wdXQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLm5iLWZvcm0tZmllbGQtYWRkb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgJi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbmItdGhlbWUoZm9ybS1maWVsZC1hZGRvbi1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcbiAgICB9XG4gIH1cblxuICBuYi1mb3JtLWZpZWxkLm5iLXRyYW5zaXRpb24gLm5iLWZvcm0tZmllbGQtYWRkb24ge1xuICAgIEBpbmNsdWRlIG5iLWNvbXBvbmVudC1hbmltYXRpb24oY29sb3IpO1xuICB9XG5cbiAgQGVhY2ggJHN0YXR1cyBpbiBuYi1nZXQtc3RhdHVzZXMoKSB7XG4gICAgLm5iLWZvcm0tZmllbGQtYWRkb24tI3skc3RhdHVzfSB7XG4gICAgICBjb2xvcjogbmItdGhlbWUoZm9ybS1maWVsZC1hZGRvbi0jeyRzdGF0dXN9LXRleHQtY29sb3IpO1xuXG4gICAgICAmLWhpZ2hsaWdodCB7XG4gICAgICAgIGNvbG9yOiBuYi10aGVtZShmb3JtLWZpZWxkLWFkZG9uLSN7JHN0YXR1c30taGlnaGxpZ2h0LXRleHQtY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBlYWNoICRzaXplIGluIG5iLWdldC1zaXplcygpIHtcbiAgICAkZm9ybS1maWVsZC1tYXgtd2lkdGg6IG5iLXRoZW1lKGZvcm0tZmllbGQtI3skc2l6ZX0tbWF4LXdpZHRoKTtcbiAgICAkYWRkb24taGVpZ2h0OiBuYi10aGVtZShmb3JtLWZpZWxkLWFkZG9uLSN7JHNpemV9LWhlaWdodCk7XG4gICAgJGFkZG9uLXdpZHRoOiBuYi10aGVtZShmb3JtLWZpZWxkLWFkZG9uLSN7JHNpemV9LXdpZHRoKTtcblxuICAgIC5uYi1mb3JtLWZpZWxkLWxpbWl0ZWQtd2lkdGgubmItZm9ybS1maWVsZC1zaXplLSN7JHNpemV9IHtcbiAgICAgIG1heC13aWR0aDogJGZvcm0tZmllbGQtbWF4LXdpZHRoO1xuICAgIH1cblxuICAgIC5uYi1mb3JtLWZpZWxkLXByZWZpeC0jeyRzaXplfSxcbiAgICAubmItZm9ybS1maWVsZC1zdWZmaXgtI3skc2l6ZX0ge1xuICAgICAgaGVpZ2h0OiAkYWRkb24taGVpZ2h0O1xuICAgICAgd2lkdGg6ICRhZGRvbi13aWR0aDtcbiAgICAgIGZvbnQtc2l6ZTogbmItdGhlbWUoZm9ybS1maWVsZC1hZGRvbi0jeyRzaXplfS1mb250LXNpemUpO1xuICAgICAgbGluZS1oZWlnaHQ6IG5iLXRoZW1lKGZvcm0tZmllbGQtYWRkb24tI3skc2l6ZX0tbGluZS1oZWlnaHQpO1xuICAgICAgZm9udC13ZWlnaHQ6IG5iLXRoZW1lKGZvcm0tZmllbGQtYWRkb24tI3skc2l6ZX0tZm9udC13ZWlnaHQpO1xuXG4gICAgICBuYi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiBuYi10aGVtZShmb3JtLWZpZWxkLWFkZG9uLSN7JHNpemV9LWljb24tc2l6ZSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBuYi10aGVtZShmb3JtLWZpZWxkLWFkZG9uLSN7JHNpemV9LWljb24tc2l6ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5iLWZvcm0tZmllbGQtcHJlZml4LSN7JHNpemV9IHtcbiAgICAgIEBpbmNsdWRlIG5iLWx0cihtYXJnaW4tcmlnaHQsIGNhbGMoI3skYWRkb24td2lkdGh9ICogLTEpKTtcbiAgICAgIEBpbmNsdWRlIG5iLXJ0bChtYXJnaW4tbGVmdCwgY2FsYygjeyRhZGRvbi13aWR0aH0gKiAtMSkpO1xuICAgIH1cblxuICAgIC5uYi1mb3JtLWZpZWxkLXN1ZmZpeC0jeyRzaXplfSB7XG4gICAgICBAaW5jbHVkZSBuYi1sdHIobWFyZ2luLWxlZnQsIGNhbGMoI3skYWRkb24td2lkdGh9ICogLTEpKTtcbiAgICAgIEBpbmNsdWRlIG5iLXJ0bChtYXJnaW4tcmlnaHQsIGNhbGMoI3skYWRkb24td2lkdGh9ICogLTEpKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG5iLWZvcm0tZmllbGQtd2l0aC1wcmVmaXgoJHNlbGVjdG9yLCAkc2l6ZSkge1xuICAkYWRkb24td2lkdGg6IG5iLXRoZW1lKGZvcm0tZmllbGQtYWRkb24tI3skc2l6ZX0td2lkdGgpO1xuXG4gIC5uYi1mb3JtLWZpZWxkLWNvbnRyb2wtd2l0aC1wcmVmaXggI3skc2VsZWN0b3J9IHtcbiAgICBAaW5jbHVkZSBuYi1sdHIocGFkZGluZy1sZWZ0LCAkYWRkb24td2lkdGgpO1xuICAgIEBpbmNsdWRlIG5iLXJ0bChwYWRkaW5nLXJpZ2h0LCAkYWRkb24td2lkdGgpO1xuICB9XG59XG5cbkBtaXhpbiBuYi1mb3JtLWZpZWxkLXdpdGgtc3VmZml4KCRzZWxlY3RvciwgJHNpemUpIHtcbiAgJGFkZG9uLXdpZHRoOiBuYi10aGVtZShmb3JtLWZpZWxkLWFkZG9uLSN7JHNpemV9LXdpZHRoKTtcblxuICAubmItZm9ybS1maWVsZC1jb250cm9sLXdpdGgtc3VmZml4ICN7JHNlbGVjdG9yfSB7XG4gICAgQGluY2x1ZGUgbmItbHRyKHBhZGRpbmctcmlnaHQsICRhZGRvbi13aWR0aCk7XG4gICAgQGluY2x1ZGUgbmItcnRsKHBhZGRpbmctbGVmdCwgJGFkZG9uLXdpZHRoKTtcbiAgfVxufVxuIiwiLypcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi1vcHRpb24tbGlzdC10aGVtZSgpIHtcbiAgbmItb3B0aW9uLWxpc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKG9wdGlvbi1saXN0LWJhY2tncm91bmQtY29sb3IpO1xuICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUob3B0aW9uLWxpc3QtYm9yZGVyLWNvbG9yKTtcbiAgICBib3JkZXItc3R5bGU6IG5iLXRoZW1lKG9wdGlvbi1saXN0LWJvcmRlci1zdHlsZSk7XG4gICAgYm9yZGVyLXdpZHRoOiBuYi10aGVtZShvcHRpb24tbGlzdC1ib3JkZXItd2lkdGgpO1xuICAgIGJvcmRlci1yYWRpdXM6IG5iLXRoZW1lKG9wdGlvbi1saXN0LWJvcmRlci1yYWRpdXMpO1xuICAgIGJveC1zaGFkb3c6IG5iLXRoZW1lKG9wdGlvbi1saXN0LXNoYWRvdyk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC5vcHRpb24tbGlzdCB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBtYXgtaGVpZ2h0OiBuYi10aGVtZShvcHRpb24tbGlzdC1tYXgtaGVpZ2h0KTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICB9XG5cbiAgICAkYWRqYWNlbnQtYm9yZGVyOiBuYi10aGVtZShvcHRpb24tbGlzdC1hZGphY2VudC1ib3JkZXItd2lkdGgpXG4gICAgICAgICAgICAgICAgICAgICAgbmItdGhlbWUob3B0aW9uLWxpc3QtYWRqYWNlbnQtYm9yZGVyLXN0eWxlKVxuICAgICAgICAgICAgICAgICAgICAgIG5iLXRoZW1lKG9wdGlvbi1saXN0LWFkamFjZW50LWJvcmRlci1jb2xvcik7XG4gICAgJi5wb3NpdGlvbi10b3Age1xuICAgICAgYm9yZGVyLWJvdHRvbTogJGFkamFjZW50LWJvcmRlcjtcbiAgICB9XG4gICAgJi5wb3NpdGlvbi1ib3R0b20ge1xuICAgICAgYm9yZGVyLXRvcDogJGFkamFjZW50LWJvcmRlcjtcbiAgICB9XG4gIH1cblxuICBuYi1vcHRpb24tZ3JvdXAge1xuICAgIGNvbG9yOiBuYi10aGVtZShvcHRpb24tZ3JvdXAtdGV4dC1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IG5iLXRoZW1lKG9wdGlvbi10ZXh0LWZvbnQtZmFtaWx5KTtcbiAgfVxuXG4gIEBlYWNoICRzaXplIGluIG5iLWdldC1zaXplcygpIHtcbiAgICBuYi1vcHRpb24tbGlzdC5zaXplLSN7JHNpemV9IG5iLW9wdGlvbi1ncm91cCB7XG4gICAgICBmb250LXNpemU6IG5iLXRoZW1lKG9wdGlvbi0jeyRzaXplfS10ZXh0LWZvbnQtc2l6ZSk7XG4gICAgICBmb250LXdlaWdodDogbmItdGhlbWUob3B0aW9uLSN7JHNpemV9LXRleHQtZm9udC13ZWlnaHQpO1xuICAgICAgbGluZS1oZWlnaHQ6IG5iLXRoZW1lKG9wdGlvbi0jeyRzaXplfS10ZXh0LWxpbmUtaGVpZ2h0KTtcblxuICAgICAgLm9wdGlvbi1ncm91cC10aXRsZSB7XG4gICAgICAgIHBhZGRpbmc6IG5iLXRoZW1lKG9wdGlvbi0jeyRzaXplfS1wYWRkaW5nKTtcbiAgICAgIH1cblxuICAgICAgbmItb3B0aW9uIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiBuYi10aGVtZShvcHRpb24tZ3JvdXAtI3skc2l6ZX0tc3RhcnQtcGFkZGluZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmItb3B0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShvcHRpb24tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgY29sb3I6IG5iLXRoZW1lKG9wdGlvbi10ZXh0LWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogbmItdGhlbWUob3B0aW9uLXRleHQtZm9udC1mYW1pbHkpO1xuXG4gICAgJi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUob3B0aW9uLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIGNvbG9yOiBuYi10aGVtZShvcHRpb24tYWN0aXZlLXRleHQtY29sb3IpO1xuICAgIH1cblxuICAgICYuc2VsZWN0ZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUob3B0aW9uLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgY29sb3I6IG5iLXRoZW1lKG9wdGlvbi1zZWxlY3RlZC10ZXh0LWNvbG9yKTtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKG9wdGlvbi1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIGNvbG9yOiBuYi10aGVtZShvcHRpb24tZm9jdXMtdGV4dC1jb2xvcik7XG4gICAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUob3B0aW9uLXNlbGVjdGVkLWZvY3VzLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBjb2xvcjogbmItdGhlbWUob3B0aW9uLXNlbGVjdGVkLWZvY3VzLXRleHQtY29sb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUob3B0aW9uLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgY29sb3I6IG5iLXRoZW1lKG9wdGlvbi1ob3Zlci10ZXh0LWNvbG9yKTtcblxuICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKG9wdGlvbi1zZWxlY3RlZC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgY29sb3I6IG5iLXRoZW1lKG9wdGlvbi1zZWxlY3RlZC1ob3Zlci10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm11bHRpcGxlIHtcbiAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShvcHRpb24tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGNvbG9yOiBuYi10aGVtZShvcHRpb24tdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShvcHRpb24tZm9jdXMtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGNvbG9yOiBuYi10aGVtZShvcHRpb24tZm9jdXMtdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGVhY2ggJHNpemUgaW4gbmItZ2V0LXNpemVzKCkge1xuICAgIG5iLW9wdGlvbi1saXN0LnNpemUtI3skc2l6ZX0gbmItb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogbmItdGhlbWUob3B0aW9uLSN7JHNpemV9LXRleHQtZm9udC1zaXplKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBuYi10aGVtZShvcHRpb24tI3skc2l6ZX0tdGV4dC1mb250LXdlaWdodCk7XG4gICAgICBsaW5lLWhlaWdodDogbmItdGhlbWUob3B0aW9uLSN7JHNpemV9LXRleHQtbGluZS1oZWlnaHQpO1xuICAgICAgcGFkZGluZzogbmItdGhlbWUob3B0aW9uLSN7JHNpemV9LXBhZGRpbmcpO1xuICAgIH1cbiAgfVxuXG4gIG5iLW9wdGlvbixcbiAgbmItb3B0aW9uLWdyb3VwIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKG9wdGlvbi1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIGNvbG9yOiBuYi10aGVtZShvcHRpb24tZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi10b2FzdC10aGVtZSgpIHtcbiAgbmItdG9hc3Qge1xuICAgIGJvcmRlci1zdHlsZTogbmItdGhlbWUodG9hc3RyLWJvcmRlci1zdHlsZSk7XG4gICAgYm9yZGVyLXdpZHRoOiBuYi10aGVtZSh0b2FzdHItYm9yZGVyLXdpZHRoKTtcbiAgICBib3JkZXItcmFkaXVzOiBuYi10aGVtZSh0b2FzdHItYm9yZGVyLXJhZGl1cyk7XG4gICAgcGFkZGluZzogbmItdGhlbWUodG9hc3RyLXBhZGRpbmcpO1xuICAgIGJveC1zaGFkb3c6IG5iLXRoZW1lKHRvYXN0ci1zaGFkb3cpO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBuYi10aGVtZSh0b2FzdHItdGl0bGUtdGV4dC1mb250LWZhbWlseSk7XG4gICAgICBmb250LXNpemU6IG5iLXRoZW1lKHRvYXN0ci10aXRsZS10ZXh0LWZvbnQtc2l6ZSk7XG4gICAgICBmb250LXdlaWdodDogbmItdGhlbWUodG9hc3RyLXRpdGxlLXRleHQtZm9udC13ZWlnaHQpO1xuICAgICAgbGluZS1oZWlnaHQ6IG5iLXRoZW1lKHRvYXN0ci10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0KTtcbiAgICB9XG5cbiAgICAubWVzc2FnZSB7XG4gICAgICBmb250LWZhbWlseTogbmItdGhlbWUodG9hc3RyLXRleHQtZm9udC1mYW1pbHkpO1xuICAgICAgZm9udC1zaXplOiBuYi10aGVtZSh0b2FzdHItdGV4dC1mb250LXNpemUpO1xuICAgICAgZm9udC13ZWlnaHQ6IG5iLXRoZW1lKHRvYXN0ci10ZXh0LWZvbnQtd2VpZ2h0KTtcbiAgICAgIGxpbmUtaGVpZ2h0OiBuYi10aGVtZSh0b2FzdHItdGV4dC1saW5lLWhlaWdodCk7XG4gICAgfVxuXG4gICAgLmljb24tY29udGFpbmVyIHtcbiAgICAgIEBpbmNsdWRlIG5iLWx0cihtYXJnaW4tcmlnaHQsIDEuMjVyZW0pO1xuICAgICAgQGluY2x1ZGUgbmItcnRsKG1hcmdpbi1sZWZ0LCAxLjI1cmVtKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IG5iLXRoZW1lKHRvYXN0ci1ib3JkZXItcmFkaXVzKTtcbiAgICAgIG1pbi13aWR0aDogMi41cmVtO1xuICAgICAgbWluLWhlaWdodDogMi41cmVtO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgbmItaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBlYWNoICRzdGF0dXMgaW4gbmItZ2V0LXN0YXR1c2VzKCkge1xuICAgIG5iLXRvYXN0LnN0YXR1cy0jeyRzdGF0dXN9IHtcbiAgICAgIGJhY2tncm91bmQ6IG5iLXRoZW1lKHRvYXN0ci0jeyRzdGF0dXN9LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZSh0b2FzdHItI3skc3RhdHVzfS1ib3JkZXItY29sb3IpO1xuICAgICAgY29sb3I6IG5iLXRoZW1lKHRvYXN0ci0jeyRzdGF0dXN9LXRleHQtY29sb3IpO1xuXG4gICAgICAudGl0bGUge1xuICAgICAgICBjb2xvcjogbmItdGhlbWUodG9hc3RyLSN7JHN0YXR1c30tdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgICYuZGVzdHJveS1ieS1jbGljazpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5iLXRoZW1lKHRvYXN0ci1kZXN0cm95YWJsZS0jeyRzdGF0dXN9LWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBib3JkZXItY29sb3I6IG5iLXRoZW1lKHRvYXN0ci1kZXN0cm95YWJsZS0jeyRzdGF0dXN9LWhvdmVyLWJvcmRlci1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5pY29uLWNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5iLXRoZW1lKHRvYXN0ci1pY29uLSN7JHN0YXR1c30tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGNvbG9yOiBuYi10aGVtZSh0b2FzdHItaWNvbi0jeyRzdGF0dXN9LWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnRvYXN0ci1vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgei1pbmRleDogMTA0MTtcbiAgfVxufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AbWl4aW4gbmItdG9vbHRpcC1zdGF0dXMoJHN0YXR1cykge1xuICAkYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUodG9vbHRpcC0jeyRzdGF0dXN9LWJhY2tncm91bmQtY29sb3IpO1xuICAkdGV4dC1jb2xvcjogbmItdGhlbWUodG9vbHRpcC0jeyRzdGF0dXN9LXRleHQtY29sb3IpO1xuXG4gICYuc3RhdHVzLSN7JHN0YXR1c30ge1xuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUodG9vbHRpcC0jeyRzdGF0dXN9LWJvcmRlci1jb2xvcik7XG5cbiAgICAuYXJyb3cge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItdG9vbHRpcC10aGVtZSB7XG4gIG5iLXRvb2x0aXAge1xuICAgICRhcnJvdy1zaXplOiA2cHg7XG4gICAgYm94LXNoYWRvdzogbmItdGhlbWUodG9vbHRpcC1zaGFkb3cpO1xuXG4gICAgYmFja2dyb3VuZDogbmItdGhlbWUodG9vbHRpcC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBib3JkZXI6IG5iLXRoZW1lKHRvb2x0aXAtYm9yZGVyLXdpZHRoKSBuYi10aGVtZSh0b29sdGlwLWJvcmRlci1zdHlsZSkgbmItdGhlbWUodG9vbHRpcC1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IG5iLXRoZW1lKHRvb2x0aXAtYm9yZGVyLXJhZGl1cyk7XG4gICAgcGFkZGluZzogbmItdGhlbWUodG9vbHRpcC1wYWRkaW5nKTtcbiAgICBtYXgtd2lkdGg6IG5iLXRoZW1lKHRvb2x0aXAtbWF4LXdpZHRoKTtcblxuICAgIG5iLWljb246b25seS1jaGlsZCB7XG4gICAgICBoZWlnaHQ6IG5iLXRoZW1lKHRvb2x0aXAtaWNvbi1oZWlnaHQpO1xuICAgICAgd2lkdGg6IG5iLXRoZW1lKHRvb2x0aXAtaWNvbi13aWR0aCk7XG4gICAgfVxuICAgIG5iLWljb246bm90KDpvbmx5LWNoaWxkKSB7XG4gICAgICBoZWlnaHQ6IG5iLXRoZW1lKHRvb2x0aXAtdGV4dC1mb250LXNpemUpO1xuICAgICAgd2lkdGg6IG5iLXRoZW1lKHRvb2x0aXAtdGV4dC1mb250LXNpemUpO1xuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgIGNvbG9yOiBuYi10aGVtZSh0b29sdGlwLXRleHQtY29sb3IpO1xuICAgICAgZm9udC1mYW1pbHk6IG5iLXRoZW1lKHRvb2x0aXAtdGV4dC1mb250LWZhbWlseSk7XG4gICAgICBmb250LXNpemU6IG5iLXRoZW1lKHRvb2x0aXAtdGV4dC1mb250LXNpemUpO1xuICAgICAgZm9udC13ZWlnaHQ6IG5iLXRoZW1lKHRvb2x0aXAtdGV4dC1mb250LXdlaWdodCk7XG4gICAgICBsaW5lLWhlaWdodDogbmItdGhlbWUodG9vbHRpcC10ZXh0LWxpbmUtaGVpZ2h0KTtcbiAgICB9XG5cbiAgICAuYXJyb3cge1xuICAgICAgYm9yZGVyLWJvdHRvbTogJGFycm93LXNpemUgbmItdGhlbWUodG9vbHRpcC1ib3JkZXItc3R5bGUpIG5iLXRoZW1lKHRvb2x0aXAtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuXG4gICAgQGVhY2ggJHN0YXR1cyBpbiBuYi1nZXQtc3RhdHVzZXMoKSB7XG4gICAgICBAaW5jbHVkZSBuYi10b29sdGlwLXN0YXR1cygkc3RhdHVzKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qIVxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLWRhdGVwaWNrZXItdGhlbWUge1xuICBuYi1kYXRlcGlja2VyLWNvbnRhaW5lciBuYi1jYXJkIHtcbiAgICBib3JkZXItY29sb3I6IG5iLXRoZW1lKGRhdGVwaWNrZXItYm9yZGVyLWNvbG9yKTtcbiAgICBib3JkZXItc3R5bGU6IG5iLXRoZW1lKGRhdGVwaWNrZXItYm9yZGVyLXN0eWxlKTtcbiAgICBib3JkZXItd2lkdGg6IG5iLXRoZW1lKGRhdGVwaWNrZXItYm9yZGVyLXdpZHRoKTtcbiAgICBib3JkZXItcmFkaXVzOiBuYi10aGVtZShkYXRlcGlja2VyLWJvcmRlci1yYWRpdXMpO1xuICAgIGJhY2tncm91bmQ6IG5iLXRoZW1lKGRhdGVwaWNrZXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgYm94LXNoYWRvdzogbmItdGhlbWUoZGF0ZXBpY2tlci1zaGFkb3cpO1xuICB9XG59XG4iLCIvKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLXJhZGlvLXRoZW1lKCkge1xuICBuYi1yYWRpbyB7XG4gICAgLm91dGVyLWNpcmNsZSxcbiAgICAuaW5uZXItY2lyY2xlIHtcbiAgICAgIGhlaWdodDogbmItdGhlbWUocmFkaW8taGVpZ2h0KTtcbiAgICAgIHdpZHRoOiBuYi10aGVtZShyYWRpby13aWR0aCk7XG4gICAgfVxuXG4gICAgLm91dGVyLWNpcmNsZSB7XG4gICAgICBib3JkZXItc3R5bGU6IG5iLXRoZW1lKHJhZGlvLWJvcmRlci1zdHlsZSk7XG4gICAgICBib3JkZXItd2lkdGg6IG5iLXRoZW1lKHJhZGlvLWJvcmRlci13aWR0aCk7XG4gICAgfVxuXG4gICAgLm5hdGl2ZS1pbnB1dDplbmFibGVkOmZvY3VzICsgLm91dGVyLWNpcmNsZSB7XG4gICAgICBAaW5jbHVkZSBuYi1vdXRsaW5lKG5iLXRoZW1lKHJhZGlvLW91dGxpbmUtd2lkdGgpLCBuYi10aGVtZShyYWRpby1vdXRsaW5lLWNvbG9yKSk7XG4gICAgfVxuXG4gICAgQGVhY2ggJHN0YXR1cyBpbiBuYi1nZXQtc3RhdHVzZXMoKSB7XG4gICAgICAmLnN0YXR1cy0jeyRzdGF0dXN9IC5uYXRpdmUtaW5wdXQ6ZW5hYmxlZCArIC5vdXRlci1jaXJjbGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShyYWRpby0jeyRzdGF0dXN9LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBib3JkZXItY29sb3I6IG5iLXRoZW1lKHJhZGlvLSN7JHN0YXR1c30tYm9yZGVyLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgJi5zdGF0dXMtI3skc3RhdHVzfSAubmF0aXZlLWlucHV0OmVuYWJsZWQ6Y2hlY2tlZCB7XG4gICAgICAgICYgKyAub3V0ZXItY2lyY2xlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShyYWRpby0jeyRzdGF0dXN9LWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShyYWRpby0jeyRzdGF0dXN9LWNoZWNrZWQtYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAmIH4gLmlubmVyLWNpcmNsZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUocmFkaW8tI3skc3RhdHVzfS1pbm5lci1jaXJjbGUtY29sb3IpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuc3RhdHVzLSN7JHN0YXR1c30gLm5hdGl2ZS1pbnB1dDplbmFibGVkOmZvY3VzICsgLm91dGVyLWNpcmNsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKHJhZGlvLSN7JHN0YXR1c30tZm9jdXMtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUocmFkaW8tI3skc3RhdHVzfS1mb2N1cy1ib3JkZXItY29sb3IpO1xuICAgICAgfVxuICAgICAgJi5zdGF0dXMtI3skc3RhdHVzfSAubmF0aXZlLWlucHV0OmVuYWJsZWQ6Y2hlY2tlZDpmb2N1cyB7XG4gICAgICAgICYgKyAub3V0ZXItY2lyY2xlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShyYWRpby0jeyRzdGF0dXN9LWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShyYWRpby0jeyRzdGF0dXN9LWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAmIH4gLmlubmVyLWNpcmNsZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUocmFkaW8tI3skc3RhdHVzfS1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3IpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuc3RhdHVzLSN7JHN0YXR1c30gbGFiZWw6aG92ZXIgLm5hdGl2ZS1pbnB1dDplbmFibGVkICsgLm91dGVyLWNpcmNsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKHJhZGlvLSN7JHN0YXR1c30taG92ZXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUocmFkaW8tI3skc3RhdHVzfS1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgICAgfVxuICAgICAgJi5zdGF0dXMtI3skc3RhdHVzfSBsYWJlbDpob3ZlciAubmF0aXZlLWlucHV0OmNoZWNrZWQ6ZW5hYmxlZCB7XG4gICAgICAgICsgLm91dGVyLWNpcmNsZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUocmFkaW8tI3skc3RhdHVzfS1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUocmFkaW8tI3skc3RhdHVzfS1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgfiAuaW5uZXItY2lyY2xlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShyYWRpby0jeyRzdGF0dXN9LWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5zdGF0dXMtI3skc3RhdHVzfSBsYWJlbCAubmF0aXZlLWlucHV0OmVuYWJsZWQ6YWN0aXZlICsgLm91dGVyLWNpcmNsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKHJhZGlvLSN7JHN0YXR1c30tYWN0aXZlLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBib3JkZXItY29sb3I6IG5iLXRoZW1lKHJhZGlvLSN7JHN0YXR1c30tYWN0aXZlLWJvcmRlci1jb2xvcik7XG4gICAgICB9XG4gICAgICAmLnN0YXR1cy0jeyRzdGF0dXN9IGxhYmVsIC5uYXRpdmUtaW5wdXQ6ZW5hYmxlZDpjaGVja2VkOmFjdGl2ZSB7XG4gICAgICAgICYgKyAub3V0ZXItY2lyY2xlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShyYWRpby0jeyRzdGF0dXN9LWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUocmFkaW8tI3skc3RhdHVzfS1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgICYgfiAuaW5uZXItY2lyY2xlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShyYWRpby0jeyRzdGF0dXN9LWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3IpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuc3RhdHVzLSN7JHN0YXR1c30gLnRleHQge1xuICAgICAgICBjb2xvcjogbmItdGhlbWUocmFkaW8tI3skc3RhdHVzfS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgJi5zdGF0dXMtI3skc3RhdHVzfSAubmF0aXZlLWlucHV0OmRpc2FibGVkIHtcbiAgICAgICAgJiArIC5vdXRlci1jaXJjbGUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKHJhZGlvLSN7JHN0YXR1c30tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShyYWRpby0jeyRzdGF0dXN9LWRpc2FibGVkLWJvcmRlci1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgJiB+IC50ZXh0IHtcbiAgICAgICAgICBjb2xvcjogbmItdGhlbWUocmFkaW8tI3skc3RhdHVzfS1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Y2hlY2tlZCB7XG4gICAgICAgICAgJiArIC5vdXRlci1jaXJjbGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbmItdGhlbWUocmFkaW8tI3skc3RhdHVzfS1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShyYWRpby0jeyRzdGF0dXN9LWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgfiAuaW5uZXItY2lyY2xlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKHJhZGlvLSN7JHN0YXR1c30tZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC50ZXh0IHtcbiAgICAgIGZvbnQtZmFtaWx5OiBuYi10aGVtZShyYWRpby10ZXh0LWZvbnQtZmFtaWx5KTtcbiAgICAgIGZvbnQtc2l6ZTogbmItdGhlbWUocmFkaW8tdGV4dC1mb250LXNpemUpO1xuICAgICAgZm9udC13ZWlnaHQ6IG5iLXRoZW1lKHJhZGlvLXRleHQtZm9udC13ZWlnaHQpO1xuICAgICAgbGluZS1oZWlnaHQ6IG5iLXRoZW1lKHJhZGlvLXRleHQtbGluZS1oZWlnaHQpO1xuICAgICAgQGluY2x1ZGUgbmItbHRyKG1hcmdpbi1sZWZ0LCBuYi10aGVtZShyYWRpby13aWR0aCkpO1xuICAgICAgQGluY2x1ZGUgbmItcnRsKG1hcmdpbi1yaWdodCwgbmItdGhlbWUocmFkaW8td2lkdGgpKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGltcG9ydCAnLi90cmVlLWdyaWQtc29ydC5jb21wb25lbnQudGhlbWUnO1xuXG5AbWl4aW4gbmItdHJlZS1ncmlkLXRoZW1lKCkge1xuICAkYm9yZGVyLXdpZHRoOiBuYi10aGVtZSh0cmVlLWdyaWQtY2VsbC1ib3JkZXItd2lkdGgpO1xuICAkYm9yZGVyLXN0eWxlOiBuYi10aGVtZSh0cmVlLWdyaWQtY2VsbC1ib3JkZXItc3R5bGUpO1xuICAkYm9yZGVyLWNvbG9yOiBuYi10aGVtZSh0cmVlLWdyaWQtY2VsbC1ib3JkZXItY29sb3IpO1xuXG4gIC5uYi10cmVlLWdyaWQtaGVhZGVyLWNlbGwsXG4gIC5uYi10cmVlLWdyaWQtY2VsbCxcbiAgLm5iLXRyZWUtZ3JpZC1mb290ZXItY2VsbCB7XG4gICAgaGVpZ2h0OiBuYi10aGVtZSh0cmVlLWdyaWQtcm93LW1pbi1oZWlnaHQpO1xuICAgIHBhZGRpbmc6IG5iLXRoZW1lKHRyZWUtZ3JpZC1jZWxsLXBhZGRpbmcpO1xuICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCAkYm9yZGVyLXN0eWxlICRib3JkZXItY29sb3I7XG4gIH1cblxuICAubmItdHJlZS1ncmlkLWhlYWRlci1yb3cge1xuICAgIGJhY2tncm91bmQ6IG5iLXRoZW1lKHRyZWUtZ3JpZC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgY29sb3I6IG5iLXRoZW1lKHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IG5iLXRoZW1lKHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LWZhbWlseSk7XG4gICAgZm9udC1zaXplOiBuYi10aGVtZSh0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC1zaXplKTtcbiAgICBmb250LXdlaWdodDogbmItdGhlbWUodHJlZS1ncmlkLWhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0KTtcbiAgICBsaW5lLWhlaWdodDogbmItdGhlbWUodHJlZS1ncmlkLWhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0KTtcbiAgfVxuXG4gIC5uYi10cmVlLWdyaWQtZm9vdGVyLXJvdyB7XG4gICAgYmFja2dyb3VuZDogbmItdGhlbWUodHJlZS1ncmlkLWZvb3Rlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBjb2xvcjogbmItdGhlbWUodHJlZS1ncmlkLWZvb3Rlci10ZXh0LWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogbmItdGhlbWUodHJlZS1ncmlkLWZvb3Rlci10ZXh0LWZvbnQtZmFtaWx5KTtcbiAgICBmb250LXNpemU6IG5iLXRoZW1lKHRyZWUtZ3JpZC1mb290ZXItdGV4dC1mb250LXNpemUpO1xuICAgIGZvbnQtd2VpZ2h0OiBuYi10aGVtZSh0cmVlLWdyaWQtZm9vdGVyLXRleHQtZm9udC13ZWlnaHQpO1xuICAgIGxpbmUtaGVpZ2h0OiBuYi10aGVtZSh0cmVlLWdyaWQtZm9vdGVyLXRleHQtbGluZS1oZWlnaHQpO1xuICB9XG5cbiAgLm5iLXRyZWUtZ3JpZC1yb3cge1xuICAgIGJhY2tncm91bmQ6IG5iLXRoZW1lKHRyZWUtZ3JpZC1yb3ctYmFja2dyb3VuZC1jb2xvcik7XG4gICAgY29sb3I6IG5iLXRoZW1lKHRyZWUtZ3JpZC1yb3ctdGV4dC1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IG5iLXRoZW1lKHRyZWUtZ3JpZC1yb3ctdGV4dC1mb250LWZhbWlseSk7XG4gICAgZm9udC1zaXplOiBuYi10aGVtZSh0cmVlLWdyaWQtcm93LXRleHQtZm9udC1zaXplKTtcbiAgICBmb250LXdlaWdodDogbmItdGhlbWUodHJlZS1ncmlkLXJvdy10ZXh0LWZvbnQtd2VpZ2h0KTtcbiAgICBsaW5lLWhlaWdodDogbmItdGhlbWUodHJlZS1ncmlkLXJvdy10ZXh0LWxpbmUtaGVpZ2h0KTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IG5iLXRoZW1lKHRyZWUtZ3JpZC1yb3ctaG92ZXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuICAgICY6bnRoLWNoaWxkKDJuKTpub3QoOmhvdmVyKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZSh0cmVlLWdyaWQtcm93LWV2ZW4tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgLm5iLXRyZWUtZ3JpZC1oZWFkZXItY2VsbCB7XG4gICAgYnV0dG9uIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuICB9XG5cbiAgbmItdHJlZS1ncmlkLXJvdy10b2dnbGUsIG5iLXNvcnQtaWNvbiB7XG4gICAgbmItaWNvbiB7XG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBuYi10cmVlLWdyaWQtc29ydC1oZWFkZXItdGhlbWUoKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQG1peGluIG5iLXRyZWUtZ3JpZC1zb3J0LWhlYWRlci10aGVtZSgpIHtcbiAgLm5iLXRyZWUtZ3JpZC1oZWFkZXItY2hhbmdlLXNvcnQtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBuYi10aGVtZSh0cmVlLWdyaWQtc29ydC1oZWFkZXItYnV0dG9uLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGJvcmRlcjogbmItdGhlbWUodHJlZS1ncmlkLXNvcnQtaGVhZGVyLWJ1dHRvbi1ib3JkZXIpO1xuICAgIHBhZGRpbmc6IG5iLXRoZW1lKHRyZWUtZ3JpZC1zb3J0LWhlYWRlci1idXR0b24tcGFkZGluZyk7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICB9XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi1pY29uLXRoZW1lKCkge1xuICBuYi1pY29uIHtcbiAgICBmb250LXNpemU6IG5iLXRoZW1lKGljb24tZm9udC1zaXplKTtcbiAgICBsaW5lLWhlaWdodDogbmItdGhlbWUoaWNvbi1saW5lLWhlaWdodCk7XG4gICAgd2lkdGg6IG5iLXRoZW1lKGljb24td2lkdGgpO1xuICAgIGhlaWdodDogbmItdGhlbWUoaWNvbi1oZWlnaHQpO1xuICB9XG5cbiAgbmItaWNvbiBzdmcge1xuICAgIHZlcnRpY2FsLWFsaWduOiBuYi10aGVtZShpY29uLXN2Zy12ZXJ0aWNhbC1hbGlnbik7XG4gIH1cblxuICBAZWFjaCAkc3RhdHVzIGluIG5iLWdldC1zdGF0dXNlcygpIHtcbiAgICBuYi1pY29uLnN0YXR1cy0jeyRzdGF0dXN9IHtcbiAgICAgIGNvbG9yOiBuYi10aGVtZShpY29uLSN7JHN0YXR1c30tY29sb3IpO1xuICAgIH1cbiAgfVxufVxuXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJ25vcm1hbGl6ZSc7XG5AaW1wb3J0ICdjb21wb25lbnRzL3RyZWUudGhlbWUnO1xuQGltcG9ydCAnbWFwcy9sZWFmbGV0LnRoZW1lJztcbkBpbXBvcnQgJ3RhYmxlcy9zbWFydC10YWJsZS50aGVtZSc7XG5cbkBpbXBvcnQgJ3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5cbkBtaXhpbiBuYi10aGVtZS1vdmVycmlkZXMoKSB7XG4gIEBpbmNsdWRlIG5iLXR5cG9ncmFwaHkoKTtcbiAgQGluY2x1ZGUgbmItY29tcG9uZW50cy10cmVlLXRoZW1lKCk7XG4gIEBpbmNsdWRlIG5iLW1hcHMtbGVhZmxldC10aGVtZSgpO1xuICBAaW5jbHVkZSBuYi10YWJsZXMtc21hcnQtdGFibGUtdGhlbWUoKTtcbn1cbiIsIi8qIVxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuLypcbiAqIE5vcm1hbGl6YXRpb24gb2YgSFRNTCBlbGVtZW50cywgbWFudWFsbHkgZm9ya2VkIGZyb20gTm9ybWFsaXplLmNzcyB0byByZW1vdmVcbiAqIHN0eWxlcyB0YXJnZXRpbmcgaXJyZWxldmFudCBicm93c2VycyB3aGlsZSBhcHBseWluZyBuZXcgc3R5bGVzLlxuICpcbiAqIE5vcm1hbGl6ZSBpcyBsaWNlbnNlZCBNSVQuIGh0dHBzOi8vZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3NcbiAqL1xuXG5odG1sIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmh0bWwsIGJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4gKi9cblxuaHRtbCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXG4gKi9cblxuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcbn1cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXG4gKi9cblxuaHIge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnByZSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qKlxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXG4gKi9cblxuYWJiclt0aXRsZV0ge1xuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4gKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5jb2RlLFxua2JkLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qKlxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXG4gKiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxuICovXG5cbmltZyB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiAqL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cbiAgbWFyZ2luOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxuICovXG5cbmJ1dHRvbixcbmlucHV0IHsgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cbiAqL1xuXG5idXR0b24sXG5zZWxlY3QgeyAvKiAxICovXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKi9cblxuYnV0dG9uLFxuW3R5cGU9J2J1dHRvbiddLFxuW3R5cGU9J3Jlc2V0J10sXG5bdHlwZT0nc3VibWl0J10ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPSdidXR0b24nXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPSdyZXNldCddOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9J3N1Ym1pdCddOjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKipcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cbiAqL1xuXG5idXR0b246LW1vei1mb2N1c3JpbmcsXG5bdHlwZT0nYnV0dG9uJ106LW1vei1mb2N1c3JpbmcsXG5bdHlwZT0ncmVzZXQnXTotbW96LWZvY3VzcmluZyxcblt0eXBlPSdzdWJtaXQnXTotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cblxuZmllbGRzZXQge1xuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmxlZ2VuZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG4gKi9cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXG4gKi9cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cbiAqL1xuXG5bdHlwZT0nY2hlY2tib3gnXSxcblt0eXBlPSdyYWRpbyddIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBwYWRkaW5nOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxuICovXG5cblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcblt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuICovXG5cblt0eXBlPSdzZWFyY2gnXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuICovXG5cblt0eXBlPSdzZWFyY2gnXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxuICovXG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBmb250OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxuICovXG5cbmRldGFpbHMge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cbiAqL1xuXG50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXG4gKi9cblxuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AbWl4aW4gbmItY29tcG9uZW50cy10cmVlLXRoZW1lKCkge1xuXG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi1tYXBzLWxlYWZsZXQtdGhlbWUoKSB7XG4gIC8vIFRPRE86IGxlYWZsZXQgc3R5bGVzXG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi10YWJsZXMtc21hcnQtdGFibGUtdGhlbWUoKSB7XG5cbiAgbmcyLXNtYXJ0LXRhYmxlIHtcbiAgICB0YWJsZSB0ciB0aCxcbiAgICB0YWJsZSB0ciB0aCBhIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBuYi10aGVtZShzbWFydC10YWJsZS1oZWFkZXItZm9udC1mYW1pbHkpO1xuICAgICAgZm9udC1zaXplOiBuYi10aGVtZShzbWFydC10YWJsZS1oZWFkZXItZm9udC1zaXplKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBuYi10aGVtZShzbWFydC10YWJsZS1oZWFkZXItZm9udC13ZWlnaHQpO1xuICAgICAgbGluZS1oZWlnaHQ6IG5iLXRoZW1lKHNtYXJ0LXRhYmxlLWhlYWRlci1saW5lLWhlaWdodCk7XG4gICAgICBjb2xvcjogbmItdGhlbWUoc21hcnQtdGFibGUtaGVhZGVyLWZnKTtcbiAgICB9XG5cbiAgICB0YWJsZSB0ciB0ZCB7XG4gICAgICBmb250LWZhbWlseTogbmItdGhlbWUoc21hcnQtdGFibGUtZm9udC1mYW1pbHkpO1xuICAgICAgZm9udC1zaXplOiBuYi10aGVtZShzbWFydC10YWJsZS1mb250LXNpemUpO1xuICAgICAgZm9udC13ZWlnaHQ6IG5iLXRoZW1lKHNtYXJ0LXRhYmxlLWZvbnQtd2VpZ2h0KTtcbiAgICAgIGxpbmUtaGVpZ2h0OiBuYi10aGVtZShzbWFydC10YWJsZS1saW5lLWhlaWdodCk7XG4gICAgICBjb2xvcjogbmItdGhlbWUoc21hcnQtdGFibGUtZmcpO1xuICAgIH1cblxuICAgIHRhYmxlIHRyIHRoLFxuICAgIHRhYmxlIHRyIHRkIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmc6IG5iLXRoZW1lKHNtYXJ0LXRhYmxlLXBhZGRpbmcpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgbmItdGhlbWUoc21hcnQtdGFibGUtc2VwYXJhdG9yKTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG4gICAgdGFibGUgdHIubmcyLXNtYXJ0LXRpdGxlcyB7XG4gICAgICB0aCB7XG4gICAgICAgIHBhZGRpbmc6IG5iLXRoZW1lKHNtYXJ0LXRhYmxlLXBhZGRpbmcpO1xuICAgICAgICBAaW5jbHVkZSBuYi1sdHIocGFkZGluZy1yaWdodCwgMS43NXJlbSk7XG4gICAgICAgIEBpbmNsdWRlIG5iLXJ0bChwYWRkaW5nLWxlZnQsIDEuNzVyZW0pO1xuICAgICAgfVxuXG4gICAgICB0aCBhIHtcbiAgICAgICAgJjpob3ZlciwgJjphY3RpdmUsICY6dmlzaXRlZCB7XG4gICAgICAgICAgY29sb3I6IG5iLXRoZW1lKHNtYXJ0LXRhYmxlLWhlYWRlci1mZyk7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgICYuc29ydC5hc2MsICYuc29ydC5kZXNjIHtcblxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBuYi10aGVtZShzbWFydC10YWJsZS1oZWFkZXItZm9udC13ZWlnaHQpO1xuXG4gICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbmItdGhlbWUoc21hcnQtdGFibGUtZmctc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMC4zNzVyZW07XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBAaW5jbHVkZSBuYi1sdHIocmlnaHQsIDAuNzVyZW0pO1xuICAgICAgICAgICAgQGluY2x1ZGUgbmItcnRsKGxlZnQsIDAuNzVyZW0pO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmRlc2M6OmFmdGVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpIHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoZWFkIHRyIHtcbiAgICAgIGJhY2tncm91bmQ6IG5iLXRoZW1lKHNtYXJ0LXRhYmxlLWhlYWRlci1iZyk7XG5cbiAgICAgICYubmcyLXNtYXJ0LWZpbHRlcnMgdGgge1xuICAgICAgICBwYWRkaW5nOiBuYi10aGVtZShzbWFydC10YWJsZS1maWx0ZXItcGFkZGluZyk7XG5cbiAgICAgICAgLm5nMi1zbWFydC1maWx0ZXIgaW5wdXQge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBuYi10aGVtZShzbWFydC10YWJsZS1saW5lLWhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0Ym9keSB0ciB7XG4gICAgICAmLnNlbGVjdGVkLCAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbmItdGhlbWUoc21hcnQtdGFibGUtYmctYWN0aXZlKSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAmOm50aC1jaGlsZCgybikge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShzbWFydC10YWJsZS1iZy1ldmVuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBY3Rpb25zXG4gICAgdGgubmcyLXNtYXJ0LWFjdGlvbnMtdGl0bGUtYWRkIHtcbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IG5iLXRoZW1lKHNtYXJ0LXRhYmxlLWZpbHRlci1wYWRkaW5nKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShzbWFydC10YWJsZS1hZGQtYnV0dG9uLWJvcmRlci1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKHNtYXJ0LXRhYmxlLWFkZC1idXR0b24tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGNvbG9yOiBuYi10aGVtZShzbWFydC10YWJsZS1hZGQtYnV0dG9uLXRleHQtY29sb3IpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6IG5iLXRoZW1lKHNtYXJ0LXRhYmxlLWFkZC1idXR0b24tZm9jdXMtYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShzbWFydC10YWJsZS1hZGQtYnV0dG9uLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUoc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKHNtYXJ0LXRhYmxlLWFkZC1idXR0b24tYWN0aXZlLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogbmItdGhlbWUoc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1hY3RpdmUtYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5uZzItc21hcnQtYWN0aW9ucyB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgLy8gZml4IGZvciAxMDAlIGhlaWdodCBjaGlsZFxuICAgICAgaGVpZ2h0OiAxcHg7XG5cbiAgICAgIG5nMi1zdC10Ym9keS1lZGl0LWRlbGV0ZSwgbmcyLXN0LXRib2R5LWNyZWF0ZS1jYW5jZWwsIG5nMi1zdC1hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICBhLm5nMi1zbWFydC1hY3Rpb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IG5iLXRoZW1lKHNtYXJ0LXRhYmxlLWZnLXNlY29uZGFyeSk7XG5cbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIG5iLXRoZW1lKHNtYXJ0LXRhYmxlLXNlcGFyYXRvcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLm5nMi1zbWFydC1hY3Rpb24tYWRkLWNyZWF0ZTpob3ZlcixcbiAgICAgIC5uZzItc21hcnQtYWN0aW9uLWVkaXQtZWRpdDpob3ZlcixcbiAgICAgIC5uZzItc21hcnQtYWN0aW9uLWVkaXQtc2F2ZTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiBuYi10aGVtZShzbWFydC10YWJsZS1hY3Rpb24tYWRkLWVkaXQtaG92ZXItdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5uZzItc21hcnQtYWN0aW9uLWFkZC1jYW5jZWw6aG92ZXIsXG4gICAgICAubmcyLXNtYXJ0LWFjdGlvbi1kZWxldGUtZGVsZXRlOmhvdmVyLFxuICAgICAgLm5nMi1zbWFydC1hY3Rpb24tZWRpdC1jYW5jZWw6aG92ZXIge1xuICAgICAgICBjb2xvcjogbmItdGhlbWUoc21hcnQtdGFibGUtYWN0aW9uLWNhbmNlbC1kZWxldGUtaG92ZXItdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVE9ETzogcmVtb3ZlIHRoaXMgaGFjaywgd2hlbiBpdCB3aWxsIGJlIHBvc3NpYmxlIHRvIGlkZW50aWZ5IHRoZSB3aG9sZSByb3cgaW4gdGhlIGVkaXQgc3RhdGVcbiAgICB0YWJsZS1jZWxsLWVkaXQtbW9kZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogLTcuNXB4IC0xMnB4O1xuICAgIH1cblxuICAgIG5nMi1zbWFydC10YWJsZS1wYWdlciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAvL1BhZ2luZ1xuICAgIG5hdi5uZzItc21hcnQtcGFnaW5hdGlvbi1uYXYge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcblxuXG4gICAgICAubmcyLXNtYXJ0LXBhZ2luYXRpb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIC5wYWdlLWl0ZW0uZGlzYWJsZWQgLnBhZ2UtbGluaywgLnBhZ2UtaXRlbS5kaXNhYmxlZCAucGFnZS1saW5rOmZvY3VzLCAucGFnZS1pdGVtLmRpc2FibGVkIC5wYWdlLWxpbms6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKHNtYXJ0LXRhYmxlLXBhZ2luZy1ob3Zlcik7XG4gICAgICAgICAgY29sb3I6IG5iLXRoZW1lKHNtYXJ0LXRhYmxlLXBhZ2luZy1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucGFnaW5hdGlvbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBuYi10aGVtZShzbWFydC10YWJsZS1wYWdpbmctZm9udC1mYW1pbHkpO1xuICAgICAgICBmb250LXNpemU6IG5iLXRoZW1lKHNtYXJ0LXRhYmxlLXBhZ2luZy1mb250LXNpemUpO1xuICAgICAgICBsaW5lLWhlaWdodDogbmItdGhlbWUoc21hcnQtdGFibGUtcGFnaW5nLWxpbmUtaGVpZ2h0KTtcbiAgICAgICAgYm9yZGVyOiBuYi10aGVtZShzbWFydC10YWJsZS1wYWdpbmctYm9yZGVyLWNvbG9yKSBzb2xpZCBuYi10aGVtZShzbWFydC10YWJsZS1wYWdpbmctYm9yZGVyLXdpZHRoKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogbmItdGhlbWUoc21hcnQtdGFibGUtYm9yZGVyLXJhZGl1cyk7XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgQGluY2x1ZGUgbmItbHRyKGJvcmRlci1yaWdodCwgMXB4IHNvbGlkIG5iLXRoZW1lKHNtYXJ0LXRhYmxlLXNlcGFyYXRvcikpO1xuICAgICAgICAgICAgQGluY2x1ZGUgbmItcnRsKGJvcmRlci1sZWZ0LCAxcHggc29saWQgbmItdGhlbWUoc21hcnQtdGFibGUtc2VwYXJhdG9yKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYS5wYWdlLWxpbmstcHJldiwgYS5wYWdlLWxpbmstbmV4dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IG5iLXRoZW1lKHNtYXJ0LXRhYmxlLXBhZ2luZy1mb250LXNpemUpO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5iLXRoZW1lKHNtYXJ0LXRhYmxlLXBhZ2luZy1saW5lLWhlaWdodCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYSwgPiBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogbmItdGhlbWUoc21hcnQtdGFibGUtcGFnaW5nLWZvbnQtc2l6ZSk7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogbmItdGhlbWUoc21hcnQtdGFibGUtcGFnaW5nLWxpbmUtaGVpZ2h0KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY29sb3I6IG5iLXRoZW1lKHNtYXJ0LXRhYmxlLXBhZ2luZy1wYWdlLXRleHQtY29sb3IpO1xuICAgICAgICAgICAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuXG4gICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBuYi10aGVtZShzbWFydC10YWJsZS1wYWdpbmctcGFnZS1mb2N1cy1ib3JkZXItY29sb3IpO1xuICAgICAgICAgICAgICBjb2xvcjogbmItdGhlbWUoc21hcnQtdGFibGUtcGFnaW5nLXBhZ2UtZm9jdXMtdGV4dC1jb2xvcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYi10aGVtZShzbWFydC10YWJsZS1wYWdpbmctaG92ZXIpO1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6IG5iLXRoZW1lKHNtYXJ0LXRhYmxlLXBhZ2luZy1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgICAgICAgICAgICBjb2xvcjogbmItdGhlbWUoc21hcnQtdGFibGUtcGFnaW5nLWhvdmVyLXRleHQtY29sb3IpO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBhLCA+IHNwYW4ge1xuICAgICAgICAgICAgICBAaW5jbHVkZSBuYi1sdHIoKSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogbmItdGhlbWUoc21hcnQtdGFibGUtYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogbmItdGhlbWUoc21hcnQtdGFibGUtYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogbmItdGhlbWUoc21hcnQtdGFibGUtYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IG5iLXRoZW1lKHNtYXJ0LXRhYmxlLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBhLCA+IHNwYW4ge1xuICAgICAgICAgICAgICBAaW5jbHVkZSBuYi1sdHIoKSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IG5iLXRoZW1lKHNtYXJ0LXRhYmxlLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiBuYi10aGVtZShzbWFydC10YWJsZS1ib3JkZXItcmFkaXVzKTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgQGluY2x1ZGUgbmItcnRsKCkge1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IG5iLXRoZW1lKHNtYXJ0LXRhYmxlLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IG5iLXRoZW1lKHNtYXJ0LXRhYmxlLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGEsIGE6aG92ZXIsIGE6Zm9jdXMsID4gc3BhbiwgPiBzcGFuOmhvdmVyLCA+IHNwYW46Zm9jdXMge1xuICAgICAgICAgICAgICBjb2xvcjogbmItdGhlbWUoc21hcnQtdGFibGUtcGFnaW5nLWZnLWFjdGl2ZSk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5iLXRoZW1lKHNtYXJ0LXRhYmxlLXBhZ2luZy1iZy1hY3RpdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLyohXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG4kZ3JpZC1jb2x1bW5zOiAxMiAhZGVmYXVsdDtcbiRncmlkLWd1dHRlci13aWR0aC1iYXNlOiAyNHB4ICFkZWZhdWx0O1xuJGdyaWQtZ3V0dGVyLXdpZHRoczogKFxuICB4czogJGdyaWQtZ3V0dGVyLXdpZHRoLWJhc2UsXG4gIHNtOiAkZ3JpZC1ndXR0ZXItd2lkdGgtYmFzZSxcbiAgbWQ6ICRncmlkLWd1dHRlci13aWR0aC1iYXNlLFxuICBsZzogJGdyaWQtZ3V0dGVyLXdpZHRoLWJhc2UsXG4gIHhsOiAkZ3JpZC1ndXR0ZXItd2lkdGgtYmFzZVxuKSAhZGVmYXVsdDtcblxuXG4kZ3JpZC1icmVha3BvaW50czogKFxuICB4czogMCxcbiAgaXM6IDQwMHB4LFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4LFxuICB4eGw6IDE0MDBweCxcbiAgeHh4bDogMTYwMHB4XG4pO1xuXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcbiAgaXM6IDM4MHB4LFxuICBzbTogNTQwcHgsXG4gIG1kOiA3MjBweCxcbiAgbGc6IDk2MHB4LFxuICB4bDogMTE0MHB4LFxuICB4eGw6IDEzMjBweCxcbiAgeHh4bDogMTUwMHB4XG4pO1xuXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIDAuMDJweCwgbnVsbCk7XG59XG5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iLCIudmlzdWFsbHktaGlkZGVuIHsgLyogaHR0cHM6Ly9zbm9vay5jYS9hcmNoaXZlcy9odG1sX2FuZF9jc3MvaGlkaW5nLWNvbnRlbnQtZm9yLWFjY2Vzc2liaWxpdHkgKi9cbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjbGlwOiByZWN0KDFweCAxcHggMXB4IDFweCk7IC8qIElFNiwgSUU3ICovXG4gIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcbn1cbiIsIkBpbXBvcnQgJ35AbmVidWxhci90aGVtZS9zdHlsZXMvZ2xvYmFscyc7XHJcblxyXG4uYWRtaW5NZW51e1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDB4O1xyXG4gICAgYm9yZGVyOiBzaWx2ZXIgM3B4IHNvbGlkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWRtaW5NZW51OmhvdmVye1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDB4O1xyXG4gICAgYm9yZGVyOiBibGFjayAzcHggc29saWQ7XHJcbiAgICBjb2xvcjogc2lsdmVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWRtaW5Ce1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainadminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mainadmin',
                templateUrl: './mainadmin.component.html',
                styleUrls: ['./mainadmin.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }, { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/admin/manager-zone/manager/manager.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin/manager-zone/manager/manager.component.ts ***!
  \*************************************************************************/
/*! exports provided: ManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerComponent", function() { return ManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ManagerComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello , Manager ", ctx_r0.userArr.displayName, "");
} }
function ManagerComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerComponent_div_11_Template_nb_option_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const user_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.changeRoleToAdmin(user_r2, "admin"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerComponent_div_11_Template_nb_option_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const user_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.changeRoleToManager(user_r2, "manager"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerComponent_div_11_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const user_r2 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.removeUser(user_r2.uid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Name :", user_r2.displayName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Provider :", user_r2.provider, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Role :", user_r2.role, "");
} }
class ManagerComponent {
    constructor(userService, afs) {
        this.userService = userService;
        this.afs = afs;
        this.admins = [];
    }
    gatAllAdmins() {
        this.afs.collection('users').valueChanges().subscribe(users => {
            users.forEach(element => {
                if (element.role == 'admin' || element.role == 'manager') {
                    this.admins.push(element);
                }
            });
        });
        this.admins = this.admins.filter((el, i, a) => i === a.indexOf(el));
    }
    getUser() {
        new Promise((resolve, reject) => {
            this.userService.getCurrentUser().then(user => {
                if (user) {
                    this.userArr = { displayName: user.displayName, email: user.email, uid: user.uid };
                    if (this.userArr.displayName != null) {
                        this.adminName = this.userArr.displayName;
                    }
                    else {
                        this.adminName = this.userArr.email.substring(0, this.userArr.email.lastIndexOf("@"));
                    }
                }
            });
        });
    }
    changeRoleToManager(user, role) {
        this.afs.collection('users').doc(user.uid).set({ displayName: user.displayName, provider: user.provider, role: role, uid: user.uid }).then(res => {
            this.admins = [];
            this.gatAllAdmins();
        });
    }
    changeRoleToAdmin(user, role) {
        this.afs.collection('users').doc(user.uid).set({ displayName: user.displayName, provider: user.provider, role: role, uid: user.uid }).then(res => {
            this.admins = [];
            this.gatAllAdmins();
        });
    }
    removeUser(uid) {
        this.afs.collection('users').doc(uid).delete().then(res => {
            this.admins = [];
            this.gatAllAdmins();
        });
    }
    ngOnInit() {
        this.gatAllAdmins();
        this.getUser();
    }
}
ManagerComponent.ɵfac = function ManagerComponent_Factory(t) { return new (t || ManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
ManagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagerComponent, selectors: [["app-manager"]], decls: 12, vars: 2, consts: [["id", "managerZone"], ["id", "adminName", 4, "ngIf"], ["id", "adminsH3"], [2, "margin-top", "120px", "text-align", "center", "padding", "2px"], ["class", "card", 4, "ngFor", "ngForOf"], ["id", "adminName"], [1, "card"], ["id", "cardBG"], ["placeholder", "Change role", 2, "display", "block", "width", "80%", "margin-left", "auto", "margin-right", "auto", "margin-top", "5px"], ["value", "admin", 3, "click"], ["value", "manager", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 2, "margin-top", "20px", 3, "click"]], template: function ManagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManagerComponent_p_3_Template, 2, 1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome to manager zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Admins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ManagerComponent_div_11_Template, 15, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.admins);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutColumnComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"]], styles: ["#managerZone[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#adminName[_ngcontent-%COMP%] {\n  margin-bottom: -20px;\n}\n\n#adminsH3[_ngcontent-%COMP%] {\n  float: left;\n  display: block;\n}\n\nhr[_ngcontent-%COMP%] {\n  float: left;\n  width: 204px;\n  margin-top: 45px;\n  margin-left: -110px;\n  display: block;\n}\n\n.card[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: black 3px solid;\n  max-width: 413px;\n  min-width: 318px;\n  height: 240px;\n  color: white;\n  margin: 5px;\n  background: repeating-linear-gradient(45deg, black, transparent 100px);\n  padding: 0px;\n  text-align: center;\n}\n\n@media (max-width: 475px) {\n  .card[_ngcontent-%COMP%] {\n    min-width: 225px;\n  }\n}\n\n.card[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 30px;\n}\n\n#cardBG[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #00000094;\n  margin-top: -30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9tYW5hZ2VyLXpvbmUvbWFuYWdlci9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL3NyY1xcYXBwXFxtb2R1bGVzXFxhZG1pblxcbWFuYWdlci16b25lXFxtYW5hZ2VyXFxtYW5hZ2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL21hbmFnZXItem9uZS9tYW5hZ2VyL21hbmFnZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNFQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7RUFDSTtJQUFPLGdCQUFBO0VDQ1Q7QUFDRjs7QURDQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL21hbmFnZXItem9uZS9tYW5hZ2VyL21hbmFnZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFuYWdlclpvbmV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNhZG1pbk5hbWV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcclxufVxyXG5cclxuI2FkbWluc0gze1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaHJ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyMDRweDtcclxuICAgIG1hcmdpbi10b3A6IDQ1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTExMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogYmxhY2sgM3B4IHNvbGlkO1xyXG4gICAgbWF4LXdpZHRoOiA0MTNweDtcclxuICAgIG1pbi13aWR0aDogMzE4cHg7XHJcbiAgICBoZWlnaHQ6IDI0MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBibGFjaywgdHJhbnNwYXJlbnQgMTAwcHgpO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG59XHJcblxyXG5AbWVkaWEoIG1heC13aWR0aDogNDc1cHgpe1xyXG4gICAgLmNhcmQge21pbi13aWR0aDogMjI1cHg7fVxyXG59XHJcblxyXG4uY2FyZCBie1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4jY2FyZEJHe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOTQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuXHJcbn0iLCIjbWFuYWdlclpvbmUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNhZG1pbk5hbWUge1xuICBtYXJnaW4tYm90dG9tOiAtMjBweDtcbn1cblxuI2FkbWluc0gzIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ociB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjA0cHg7XG4gIG1hcmdpbi10b3A6IDQ1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiBibGFjayAzcHggc29saWQ7XG4gIG1heC13aWR0aDogNDEzcHg7XG4gIG1pbi13aWR0aDogMzE4cHg7XG4gIGhlaWdodDogMjQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiA1cHg7XG4gIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoNDVkZWcsIGJsYWNrLCB0cmFuc3BhcmVudCAxMDBweCk7XG4gIHBhZGRpbmc6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDc1cHgpIHtcbiAgLmNhcmQge1xuICAgIG1pbi13aWR0aDogMjI1cHg7XG4gIH1cbn1cbi5jYXJkIGIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuI2NhcmRCRyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA5NDtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manager',
                templateUrl: './manager.component.html',
                styleUrls: ['./manager.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/admin/no-premissions/no-premissions.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/admin/no-premissions/no-premissions.component.ts ***!
  \**************************************************************************/
/*! exports provided: NoPremissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPremissionsComponent", function() { return NoPremissionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NoPremissionsComponent {
    constructor(router) {
        this.router = router;
    }
    back() {
        this.router.navigate(['home']);
    }
    ngOnInit() {
    }
}
NoPremissionsComponent.ɵfac = function NoPremissionsComponent_Factory(t) { return new (t || NoPremissionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NoPremissionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoPremissionsComponent, selectors: [["app-no-premissions"]], decls: 6, vars: 0, consts: [[2, "text-align", "center"], ["role", "alert", 1, "alert", "alert-danger", 2, "display", "inline-block", "margin-top", "90px"], [2, "color", "black"], ["type", "button", 1, "btn", "btn-light", 3, "click"]], template: function NoPremissionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " no premissions for admin!,Contact the manager for access!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoPremissionsComponent_Template_button_click_4_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Babk to HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbm8tcHJlbWlzc2lvbnMvbm8tcHJlbWlzc2lvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoPremissionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-no-premissions',
                templateUrl: './no-premissions.component.html',
                styleUrls: ['./no-premissions.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/cart/cart-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/cart/cart-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartRoutingModule", function() { return CartRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.component */ "./src/app/modules/cart/cart.component.ts");
/* harmony import */ var _orderCart_ordercart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orderCart/ordercart.component */ "./src/app/modules/cart/orderCart/ordercart.component.ts");






const routes = [
    { path: '', component: _cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"], pathMatch: 'full' },
    { path: 'cart', component: _cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"] },
    { path: 'cartOrder', component: _orderCart_ordercart_component__WEBPACK_IMPORTED_MODULE_3__["OrdercartComponent"] },
];
class CartRoutingModule {
}
CartRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CartRoutingModule });
CartRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CartRoutingModule_Factory(t) { return new (t || CartRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CartRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/cart/cart.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/cart/cart.component.ts ***!
  \************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/local.service */ "./src/app/core/services/local.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const _c0 = function () { return ["/cart/cartOrder"]; };
function CartComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Order All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function CartComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Empty Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a1, a2) { return ["/cart/order", a1, a2]; };
function CartComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_5_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const p_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.remove1(p_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Buy now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Item ID: ", p_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", p_r3.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Category: ", p_r3.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Type: ", p_r3.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Price: ", p_r3.price, "$ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c1, p_r3.id, p_r3.quantity));
} }
class CartComponent {
    constructor(local) {
        this.local = local;
        this.cart = [];
    }
    getFromStorage() {
        if (localStorage.getItem('coverPhoneProjectCoverToCart')) {
            this.cart = JSON.parse(localStorage.getItem('coverPhoneProjectCoverToCart'));
        }
    }
    remove1(id) {
        for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i].id == id) {
                this.cart.splice(i, 1);
                this.local.saveCoverToStorage(this.cart);
                break;
            }
        }
    }
    ngOnInit() {
        this.getFromStorage();
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_1__["LocalService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 6, vars: 3, consts: [[2, "text-align", "center"], ["nbButton", "", "status", "primary", "style", "display: block;margin-left: 20px;", 3, "routerLink", 4, "ngIf"], ["style", "margin-top: 100px;", 4, "ngIf"], ["style", "display: inline-block;margin-top: 20px;margin: 20px;", 4, "ngFor", "ngForOf"], ["nbButton", "", "status", "primary", 2, "display", "block", "margin-left", "20px", 3, "routerLink"], [1, "fas", "fa-clipboard-check", 2, "margin-left", "6px"], [2, "margin-top", "100px"], [2, "color", "#00000052"], [2, "display", "inline-block", "margin-top", "20px", "margin", "20px"], ["accent", "primary", "status", "warning", 1, "card", 2, "max-width", "270px"], [1, "delete", 2, "float", "right", "border", "none", "background", "none", "font-size", "25px", "position", "relative", "bottom", "40px", "left", "20px", 3, "click"], [1, "fas", "fa-times-circle"], [2, "display", "inline-block"], ["alt", "", 1, "cartImg", 3, "src"], [2, "display", "inline-block", "position", "relative", "top", "8px", "text-align", "center"], ["nbButton", "", "status", "primary", 3, "routerLink"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome to your Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartComponent_button_3_Template, 3, 2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CartComponent_div_4_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CartComponent_div_5_Template, 21, 10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cart[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cart[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cart);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"]], styles: [".cartImg[_ngcontent-%COMP%] {\n  height: 250px;\n  width: 220px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYXJ0L0M6XFxVc2Vyc1xcZGFuaWVcXERlc2t0b3BcXEZ1bGwgU3RhY2tcXFBob25lIENvdmVyXFxjbGllbnRcXFBob25lQ292ZXIvc3JjXFxhcHBcXG1vZHVsZXNcXGNhcnRcXGNhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnRJbWd7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG59IiwiLmNhcnRJbWcge1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMjIwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_1__["LocalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/cart/cart.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/cart/cart.module.ts ***!
  \*********************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.component */ "./src/app/modules/cart/cart.component.ts");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-routing.module */ "./src/app/modules/cart/cart-routing.module.ts");
/* harmony import */ var src_app_nebular_nebular_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/nebular/nebular.module */ "./src/app/nebular/nebular.module.ts");
/* harmony import */ var _orderCart_ordercart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orderCart/ordercart.component */ "./src/app/modules/cart/orderCart/ordercart.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








class CartModule {
}
CartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CartModule });
CartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CartModule_Factory(t) { return new (t || CartModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_3__["CartRoutingModule"],
            src_app_nebular_nebular_module__WEBPACK_IMPORTED_MODULE_4__["NebularModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CartModule, { declarations: [_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"], _orderCart_ordercart_component__WEBPACK_IMPORTED_MODULE_5__["OrdercartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _cart_routing_module__WEBPACK_IMPORTED_MODULE_3__["CartRoutingModule"],
        src_app_nebular_nebular_module__WEBPACK_IMPORTED_MODULE_4__["NebularModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"], _orderCart_ordercart_component__WEBPACK_IMPORTED_MODULE_5__["OrdercartComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _cart_routing_module__WEBPACK_IMPORTED_MODULE_3__["CartRoutingModule"],
                    src_app_nebular_nebular_module__WEBPACK_IMPORTED_MODULE_4__["NebularModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/cart/orderCart/ordercart.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/cart/orderCart/ordercart.component.ts ***!
  \***************************************************************/
/*! exports provided: OrdercartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdercartComponent", function() { return OrdercartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_core_services_orderitem_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/orderitem.service */ "./src/app/core/services/orderitem.service.ts");
/* harmony import */ var src_app_core_services_orderapi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/orderapi.service */ "./src/app/core/services/orderapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/local.service */ "./src/app/core/services/local.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");











function OrdercartComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrdercartComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrdercartComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Phone is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrdercartComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " City is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrdercartComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Address is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrdercartComponent_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Shipping is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrdercartComponent_h3_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r7.orderComplete, " ");
} }
class OrdercartComponent {
    constructor(_location, formBuilder, orderitemService, orderApi, router, local) {
        this._location = _location;
        this.formBuilder = formBuilder;
        this.orderitemService = orderitemService;
        this.orderApi = orderApi;
        this.router = router;
        this.local = local;
        this.date = new Date();
        this.cart = [];
        this.orderPrice = 0;
        this.history = [];
    }
    orderNow(f) {
        this.order = {
            name: f.form.value.name,
            email: f.form.value.email,
            phone: f.form.value.phone,
            city: f.form.value.city,
            address: f.form.value.address,
            shipping: f.form.value.shipping,
            price: this.orderPrice,
            shippingStatus: "Not sent",
            remark: f.form.value.remark,
            date: String(new Date())
        };
        this.orderApi.addOrder(this.order).subscribe((ele) => {
            if (ele) {
                this.sendOrderItems(ele).then((data) => {
                    this.orderComplete = "The order was completed successfully";
                    this.cart.forEach(element => {
                        this.history.push(element);
                        this.local.saveHistoryToStorage(this.history);
                    });
                    this.cart.forEach(element => {
                        this.local.removeCoverFromStorage();
                    });
                    setTimeout(() => {
                        this.router.navigate(['cart']);
                    }, 3000);
                });
            }
        });
    }
    sendOrderItems(order) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let res = [];
            for (let index = 0; index < this.cart.length; index++) {
                const element = this.cart[index];
                this.orderItem = {
                    orderId: order.id,
                    productId: element.id,
                    quantity: 1,
                    productPrice: element.price
                };
                res[index] = yield this.orderitemService.addOrderItems(this.orderItem);
            }
            return 'finish';
        });
    }
    getFromStorage() {
        if (localStorage.getItem('coverPhoneProjectCoverToCart')) {
            this.cart = JSON.parse(localStorage.getItem('coverPhoneProjectCoverToCart'));
            this.cart.forEach(ele => {
                this.orderPrice += ele.price;
            });
        }
    }
    backClicked() {
        this._location.back();
    }
    ngOnInit() {
        this.getFromStorage();
        this.OrderForms = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [''],
            phone: [''],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            shipping: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            remark: [''],
        });
        if (localStorage.getItem('coverPhoneProjectToHistory')) {
            this.history = JSON.parse(localStorage.getItem('coverPhoneProjectToHistory'));
        }
    }
}
OrdercartComponent.ɵfac = function OrdercartComponent_Factory(t) { return new (t || OrdercartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_orderitem_service__WEBPACK_IMPORTED_MODULE_4__["OrderitemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_orderapi_service__WEBPACK_IMPORTED_MODULE_5__["OrderapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_7__["LocalService"])); };
OrdercartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrdercartComponent, selectors: [["app-ordercart"]], decls: 30, vars: 9, consts: [[2, "margin-top", "-50px"], [2, "text-align", "center"], [3, "formGroup"], ["f", "ngForm"], ["type", "text", "formControlName", "name", "nbInput", "", "placeholder", "Name*", "required", ""], ["class", "errorText", 4, "ngIf"], ["type", "email", "nbInput", "", "formControlName", "email", "placeholder", "Email*", "pattern", "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,63}$", "required", ""], ["type", "text", "nbInput", "", "formControlName", "phone", "placeholder", "Phone*", "pattern", "^\\+?(972|0)(\\-)?0?(([23489]{1}\\d{7})|[5]{1}\\d{8})$", "required", ""], ["type", "text", "formControlName", "city", "nbInput", "", "placeholder", "City*", "required", ""], ["type", "text", "formControlName", "address", "nbInput", "", "placeholder", "Address*", "required", ""], ["placeholder", "Shipping", "formControlName", "shipping", "required", ""], ["value", "Yes"], ["value", "No"], ["type", "text", "formControlName", "remark", "nbInput", "", "placeholder", "Remark (Optional)"], ["nbButton", "", "status", "success", 2, "display", "inline-block", "margin-right", "10px", 3, "disabled", "click"], ["nbButton", "", 2, "display", "inline-block", 3, "click"], ["style", "text-align: center;color: green;", 4, "ngIf"], [1, "errorText"], [2, "text-align", "center", "color", "green"], [1, "fas", "fa-check"]], template: function OrdercartComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, OrdercartComponent_p_8_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, OrdercartComponent_p_10_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, OrdercartComponent_p_12_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, OrdercartComponent_p_14_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, OrdercartComponent_p_16_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "nb-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nb-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "nb-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, OrdercartComponent_p_22_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdercartComponent_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return ctx.orderNow(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Order Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdercartComponent_Template_button_click_27_listener() { return ctx.backClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, OrdercartComponent_h3_29_Template, 3, 1, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.OrderForms);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.OrderForms.controls.name.valid && ctx.OrderForms.controls.name.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.OrderForms.controls.email.valid && ctx.OrderForms.controls.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.OrderForms.controls.phone.valid && ctx.OrderForms.controls.phone.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.OrderForms.controls.city.valid && ctx.OrderForms.controls.city.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.OrderForms.controls.address.valid && ctx.OrderForms.controls.address.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.OrderForms.controls.shipping.valid && ctx.OrderForms.controls.shipping.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.orderComplete);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbLayoutColumnComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbOptionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"]], styles: ["input[_ngcontent-%COMP%], nb-select[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n}\n\n.errorText[_ngcontent-%COMP%] {\n  margin-top: -22px;\n  margin-left: 92px;\n  font-size: 13px;\n  color: red;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYXJ0L29yZGVyQ2FydC9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL3NyY1xcYXBwXFxtb2R1bGVzXFxjYXJ0XFxvcmRlckNhcnRcXG9yZGVyY2FydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jYXJ0L29yZGVyQ2FydC9vcmRlcmNhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jYXJ0L29yZGVyQ2FydC9vcmRlcmNhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCAsIG5iLXNlbGVjdCAsIGJ1dHRvbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZXJyb3JUZXh0e1xyXG4gICAgbWFyZ2luLXRvcDogLTIycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCJpbnB1dCwgbmItc2VsZWN0LCBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmVycm9yVGV4dCB7XG4gIG1hcmdpbi10b3A6IC0yMnB4O1xuICBtYXJnaW4tbGVmdDogOTJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrdercartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-ordercart',
                templateUrl: './ordercart.component.html',
                styleUrls: ['./ordercart.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_core_services_orderitem_service__WEBPACK_IMPORTED_MODULE_4__["OrderitemService"] }, { type: src_app_core_services_orderapi_service__WEBPACK_IMPORTED_MODULE_5__["OrderapiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_7__["LocalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/history/history-routing-module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/history/history-routing-module.ts ***!
  \***********************************************************/
/*! exports provided: HistoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryRoutingModule", function() { return HistoryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history.component */ "./src/app/modules/history/history.component.ts");





const routes = [
    { path: '', component: _history_component__WEBPACK_IMPORTED_MODULE_2__["HistoryComponent"], pathMatch: 'full' },
    { path: 'history', component: _history_component__WEBPACK_IMPORTED_MODULE_2__["HistoryComponent"], pathMatch: 'full' },
];
class HistoryRoutingModule {
}
HistoryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HistoryRoutingModule });
HistoryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HistoryRoutingModule_Factory(t) { return new (t || HistoryRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HistoryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/history/history.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/history/history.component.ts ***!
  \******************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/local.service */ "./src/app/core/services/local.service.ts");
/* harmony import */ var src_app_core_services_productapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/productapi.service */ "./src/app/core/services/productapi.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");






function HistoryComponent_h4_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Empty History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HistoryComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HistoryComponent_div_6_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const p_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.remove1(p_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ID: ", p_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", p_r2.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Category: ", p_r2.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Type: ", p_r2.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Price: ", p_r2.price, "$ ");
} }
class HistoryComponent {
    constructor(local, productApi) {
        this.local = local;
        this.productApi = productApi;
        this.history = [];
    }
    getAll() {
        if (localStorage.getItem('coverPhoneProjectToHistory')) {
            return this.history = JSON.parse(localStorage.getItem('coverPhoneProjectToHistory'));
        }
    }
    remove1(id) {
        for (let i = 0; i < this.history.length; i++) {
            if (this.history[i].id == id) {
                this.history.splice(i, 1);
                this.local.saveHistoryToStorage(this.history);
                break;
            }
        }
    }
    ngOnInit() {
        this.getAll();
    }
}
HistoryComponent.ɵfac = function HistoryComponent_Factory(t) { return new (t || HistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_1__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_productapi_service__WEBPACK_IMPORTED_MODULE_2__["ProductapiService"])); };
HistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HistoryComponent, selectors: [["app-history"]], decls: 7, vars: 2, consts: [["id", "history", 2, "text-align", "center"], [2, "margin-top", "100px"], ["style", "color: #00000052;", 4, "ngIf"], ["style", "display: inline-block;margin: 20px;", 4, "ngFor", "ngForOf"], [2, "color", "#00000052"], [2, "display", "inline-block", "margin", "20px"], ["accent", "info", "status", "basic", 1, "card", 2, "max-width", "300px"], [1, "delete", 2, "float", "right", "border", "none", "background", "none", "font-size", "25px", "position", "relative", "bottom", "40px", "left", "20px", 3, "click"], [1, "fas", "fa-times-circle"], [2, "display", "inline-block"], ["alt", "", 1, "historyImg", 3, "src"], [2, "display", "inline-block", "position", "relative", "top", "8px"]], template: function HistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Purchase History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HistoryComponent_h4_4_Template, 2, 0, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HistoryComponent_div_6_Template, 19, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.history[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.history);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"]], styles: [".historyImg[_ngcontent-%COMP%] {\n  height: 250px;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9oaXN0b3J5L0M6XFxVc2Vyc1xcZGFuaWVcXERlc2t0b3BcXEZ1bGwgU3RhY2tcXFBob25lIENvdmVyXFxjbGllbnRcXFBob25lQ292ZXIvc3JjXFxhcHBcXG1vZHVsZXNcXGhpc3RvcnlcXGhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpc3RvcnlJbWd7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG59IiwiLmhpc3RvcnlJbWcge1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMjUwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-history',
                templateUrl: './history.component.html',
                styleUrls: ['./history.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_1__["LocalService"] }, { type: src_app_core_services_productapi_service__WEBPACK_IMPORTED_MODULE_2__["ProductapiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/history/history.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/history/history.module.ts ***!
  \***************************************************/
/*! exports provided: HistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryModule", function() { return HistoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history.component */ "./src/app/modules/history/history.component.ts");
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history-routing-module */ "./src/app/modules/history/history-routing-module.ts");
/* harmony import */ var src_app_nebular_nebular_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/nebular/nebular.module */ "./src/app/nebular/nebular.module.ts");






class HistoryModule {
}
HistoryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HistoryModule });
HistoryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HistoryModule_Factory(t) { return new (t || HistoryModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _history_routing_module__WEBPACK_IMPORTED_MODULE_3__["HistoryRoutingModule"],
            src_app_nebular_nebular_module__WEBPACK_IMPORTED_MODULE_4__["NebularModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HistoryModule, { declarations: [_history_component__WEBPACK_IMPORTED_MODULE_2__["HistoryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _history_routing_module__WEBPACK_IMPORTED_MODULE_3__["HistoryRoutingModule"],
        src_app_nebular_nebular_module__WEBPACK_IMPORTED_MODULE_4__["NebularModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_history_component__WEBPACK_IMPORTED_MODULE_2__["HistoryComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _history_routing_module__WEBPACK_IMPORTED_MODULE_3__["HistoryRoutingModule"],
                    src_app_nebular_nebular_module__WEBPACK_IMPORTED_MODULE_4__["NebularModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/main/main.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/main/main.component.ts ***!
  \************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_newsapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/newsapi.service */ "./src/app/core/services/newsapi.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var src_app_core_services_productapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/productapi.service */ "./src/app/core/services/productapi.service.ts");
/* harmony import */ var src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/local.service */ "./src/app/core/services/local.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










const _c0 = function (a1, a2) { return ["showProduct", a1, a2]; };
function MainComponent_nb_accordion_item_32_div_5_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_nb_accordion_item_32_div_5_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.refresh(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, t_r8.category, t_r8.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r8.type);
} }
function MainComponent_nb_accordion_item_32_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_nb_accordion_item_32_div_5_button_1_Template, 2, 5, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r8 = ctx.$implicit;
    const c_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r6 == t_r8.category);
} }
function MainComponent_nb_accordion_item_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-accordion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-accordion-item-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-accordion-item-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MainComponent_nb_accordion_item_32_div_5_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", c_r6, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.phoneType);
} }
function MainComponent_p_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_p_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_p_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.emailAlredy, " ");
} }
function MainComponent_h6_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "successfully registered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["/home"]; };
const _c2 = function () { return ["/cart"]; };
const _c3 = function () { return ["/history"]; };
const _c4 = function () { return ["/auth"]; };
const _c5 = function (a0) { return { "dialogThemeClass": a0 }; };
class MainComponent {
    constructor(newsService, formBuilder, sidebarService, productApi, themeService, local, cdref) {
        this.newsService = newsService;
        this.formBuilder = formBuilder;
        this.sidebarService = sidebarService;
        this.productApi = productApi;
        this.themeService = themeService;
        this.local = local;
        this.cdref = cdref;
        this.products = [];
        this.categories = [];
        this.phoneType = [];
        this.newsLetterDone = false;
        this.newsLetter = [];
        this.emails = [];
    }
    toggle() {
        this.sidebarService.toggle();
    }
    darkTheme() {
        this.themeService.changeTheme('dark');
        this.local.saveObjToStorage("dark");
        this.local.dialogTheme = true;
        this.dialogTheme2 = true;
    }
    lightTheme() {
        this.themeService.changeTheme('default');
        this.local.removeObjFromStorage();
        this.local.dialogTheme = false;
        this.dialogTheme2 = false;
    }
    startingTheme() {
        if (this.local.getObjFromStorage()) {
            this.themeService.changeTheme('dark');
            this.dialogTheme2 = true;
            this.local.dialogTheme = true;
        }
        else {
            this.themeService.changeTheme('default');
            this.dialogTheme2 = false;
            this.local.dialogTheme = false;
        }
    }
    getNewsLetter() {
        this.newsService.getAll().subscribe(ele => {
            this.newsLetter = ele;
            this.newsLetter.forEach(element => {
                this.emails.push(element.email.toString());
            });
        });
    }
    reduiceType() {
        this.phoneType = this.products.reduce((acc, current) => {
            const x = acc.find(item => item.type === current.type);
            if (!x) {
                return acc.concat([current]);
            }
            else {
                return acc;
            }
        }, []);
    }
    refresh() {
        setTimeout(function () { window.location.reload(); }, 500);
    }
    add(f) {
        this.news = {
            name: f.form.value.name,
            email: f.form.value.email
        };
        if (this.emails.includes(f.form.value.email)) {
            this.emailAlredy = "The email alredy in use";
        }
        else {
            this.newsService.addNews(this.news).subscribe(ele => {
                this.newsLetterDone = true;
            });
        }
    }
    newsClear() {
        this.newsLetterForms = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [''],
        });
        this.emailAlredy = "";
        this.newsLetterDone = false;
    }
    ngOnInit() {
        this.newsLetterForms = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [''],
        });
        this.startingTheme();
        this.productApi.getAll().subscribe(ele => {
            ele.forEach(element => {
                this.products.push({ category: element.category, type: element.type });
            });
            ele.forEach(element => {
                element.category = element.category.replace(/\s+/g, '');
                this.categories.push(element.category);
                this.categories = this.categories.filter((el, i, a) => i === a.indexOf(el));
            });
            this.reduiceType();
            this.getNewsLetter();
        });
    }
    ngAfterViewInit() {
        this.toggle();
        this.cdref.detectChanges();
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_newsapi_service__WEBPACK_IMPORTED_MODULE_2__["NewsapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_productapi_service__WEBPACK_IMPORTED_MODULE_4__["ProductapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_5__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 60, vars: 26, consts: [["fixed", ""], ["nbButton", "", 3, "click"], [1, "fas", "fa-bars"], ["id", "mainTitle", 3, "routerLink"], [1, "fas", "fa-mobile"], ["fixed", "", "id", "menu"], [1, "MenuButton", 3, "routerLink", "click"], [1, "fas", "fa-home", 2, "float", "left"], [1, "fas", "fa-shopping-cart", 2, "float", "left"], [1, "fas", "fa-history", 2, "float", "left"], [1, "fas", "fa-user-lock", 2, "float", "left"], ["type", "button", "data-toggle", "modal", "data-target", "#newsLetterModal", 1, "newsLB", "btn", "btn-primary", 3, "click"], [1, "fas", "fa-envelope-open-text", 2, "margin-left", "3px"], ["placeholder", "Change Theme", "id", "themeSelect"], ["value", "Dark", 3, "click"], ["value", "Defult", 3, "click"], [2, "text-align", "center"], ["multi", ""], [4, "ngFor", "ngForOf"], [1, "colored-column-info"], ["id", "newsLetterModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "newsLetterModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", 3, "ngClass"], ["id", "newsLetterModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true", 2, "color", "red"], [1, "modal-body", 3, "ngClass"], [3, "formGroup"], ["f", "ngForm"], [1, "col"], ["type", "text", "formControlName", "name", "placeholder", "Name", "required", "", "maxlength", "20", 1, "form-control", 2, "width", "50%", "margin-left", "auto", "margin-right", "auto", "margin-top", "10px"], ["class", "errorText", 4, "ngIf"], ["type", "email", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$", "formControlName", "email", "placeholder", "Email", "required", "", 1, "form-control", 2, "width", "50%", "margin-left", "auto", "margin-right", "auto", "margin-top", "10px"], [1, "modal-footer", 3, "ngClass"], ["style", "color: green;margin-right: 65px;", 4, "ngIf"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "MenuButton", 3, "routerLink", "click", 4, "ngIf"], [1, "errorText"], [2, "color", "green", "margin-right", "65px"], [1, "fas", "fa-check", 2, "margin-left", "4px"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_2_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Phone Cover ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-sidebar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_8_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Home page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_11_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_14_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Purchase history");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_17_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Sing in as Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_20_listener() { return ctx.newsClear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Sign up to news lettert ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nb-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nb-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_nb_option_click_24_listener() { return ctx.darkTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Dark Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nb-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_nb_option_click_26_listener() { return ctx.lightTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Light Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Ctegories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nb-accordion", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MainComponent_nb_accordion_item_32_Template, 7, 2, "nb-accordion-item", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nb-layout-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "News Letter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "form", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, MainComponent_p_49_Template, 2, 0, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, MainComponent_p_51_Template, 2, 0, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, MainComponent_p_52_Template, 2, 1, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, MainComponent_h6_54_Template, 3, 0, "h6", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46); return ctx.add(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c5, ctx.dialogTheme2 == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c5, ctx.dialogTheme2 == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newsLetterForms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newsLetterForms.controls.name.valid && ctx.newsLetterForms.controls.name.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newsLetterForms.controls.email.valid && ctx.newsLetterForms.controls.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailAlredy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c5, ctx.dialogTheme2 == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newsLetterDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r1.valid);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSidebarComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionItemComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutColumnComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionItemHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAccordionItemBodyComponent"]], styles: ["#mainTitle[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  font-family: \"Piedra\", cursive;\n  font-size: 42px;\n}\n\n.MenuButton[_ngcontent-%COMP%] {\n  height: 43px;\n  width: 100%;\n  background-color: #ffffff66;\n  border: none;\n}\n\n.MenuButton[_ngcontent-%COMP%]:hover {\n  background-color: #000000b0;\n  color: #ffffffab;\n}\n\n#menu[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#themeSelect[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.menuTypeButton[_ngcontent-%COMP%] {\n  border: none;\n  width: 100%;\n  height: 50px;\n  background-color: #ffffff66;\n}\n\n.newsLB[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  font-size: 13px;\n  margin-bottom: -6px;\n  color: dodgerblue;\n  text-decoration: underline;\n  margin: 10px;\n}\n\n.newsLB[_ngcontent-%COMP%]:hover {\n  color: blue;\n}\n\n.errorText[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  margin-left: 120px;\n  font-size: 13px;\n  color: red;\n}\n\n.dialogThemeClass[_ngcontent-%COMP%] {\n  background-color: #0f121e;\n  color: lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL0M6XFxVc2Vyc1xcZGFuaWVcXERlc2t0b3BcXEZ1bGwgU3RhY2tcXFBob25lIENvdmVyXFxjbGllbnRcXFBob25lQ292ZXIvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG1haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLDJCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FESUE7RUFDSSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUNESjs7QURLQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0FDRko7O0FETUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0hKOztBRE1BO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpblRpdGxle1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBmb250LWZhbWlseTogJ1BpZWRyYScsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDQycHg7XHJcbn1cclxuXHJcbi5NZW51QnV0dG9ue1xyXG4gICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNjY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5NZW51QnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGIwO1xyXG4gICAgY29sb3I6I2ZmZmZmZmFiIDtcclxufVxyXG5cclxuXHJcbiNtZW51e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBcclxufVxyXG5cclxuI3RoZW1lU2VsZWN0e1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLm1lbnVUeXBlQnV0dG9ue1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNjY7XHJcblxyXG59XHJcblxyXG4ubmV3c0xCe1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC02cHg7XHJcbiAgICBjb2xvcjogZG9kZ2VyYmx1ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4ubmV3c0xCOmhvdmVye1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgXHJcbn1cclxuXHJcbi5lcnJvclRleHR7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTIwcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZGlhbG9nVGhlbWVDbGFzc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjEyMWU7XHJcbiAgICBjb2xvcjogbGlnaHRncmF5O1xyXG59XHJcbiAgXHJcblxyXG4iLCIjbWFpblRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiUGllZHJhXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogNDJweDtcbn1cblxuLk1lbnVCdXR0b24ge1xuICBoZWlnaHQ6IDQzcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNjY7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLk1lbnVCdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYjA7XG4gIGNvbG9yOiAjZmZmZmZmYWI7XG59XG5cbiNtZW51IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jdGhlbWVTZWxlY3Qge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubWVudVR5cGVCdXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY2Njtcbn1cblxuLm5ld3NMQiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tYm90dG9tOiAtNnB4O1xuICBjb2xvcjogZG9kZ2VyYmx1ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLm5ld3NMQjpob3ZlciB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4uZXJyb3JUZXh0IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogMTIwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmRpYWxvZ1RoZW1lQ2xhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxMjFlO1xuICBjb2xvcjogbGlnaHRncmF5O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_newsapi_service__WEBPACK_IMPORTED_MODULE_2__["NewsapiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSidebarService"] }, { type: src_app_core_services_productapi_service__WEBPACK_IMPORTED_MODULE_4__["ProductapiService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbThemeService"] }, { type: src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_5__["LocalService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/order/order-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/order/order-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function() { return OrderRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.component */ "./src/app/modules/order/order.component.ts");





const routes = [
    { path: '', component: _order_component__WEBPACK_IMPORTED_MODULE_2__["OrderComponent"], pathMatch: 'full' },
    { path: 'order', component: _order_component__WEBPACK_IMPORTED_MODULE_2__["OrderComponent"] },
];
class OrderRoutingModule {
}
OrderRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OrderRoutingModule });
OrderRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OrderRoutingModule_Factory(t) { return new (t || OrderRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/order/order.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/order/order.component.ts ***!
  \**************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/local.service */ "./src/app/core/services/local.service.ts");
/* harmony import */ var src_app_core_services_orderitem_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/orderitem.service */ "./src/app/core/services/orderitem.service.ts");
/* harmony import */ var src_app_core_services_orderapi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/orderapi.service */ "./src/app/core/services/orderapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_productapi_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/productapi.service */ "./src/app/core/services/productapi.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");











function OrderComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " City is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderComponent_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Shipping is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderComponent_h3_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r7.orderComplete, " ");
} }
class OrderComponent {
    constructor(_location, local, formBuilder, orderitemService, orderApi, router, productApi, activeRoute) {
        this._location = _location;
        this.local = local;
        this.formBuilder = formBuilder;
        this.orderitemService = orderitemService;
        this.orderApi = orderApi;
        this.router = router;
        this.productApi = productApi;
        this.activeRoute = activeRoute;
        this.date = new Date();
        this.Products = [];
        this.history = [];
    }
    orderNow(f) {
        this.Products.forEach(element => {
            // this.dateString = this.date.toLocaleDateString();
            this.order = {
                name: f.form.value.name,
                email: f.form.value.email,
                phone: f.form.value.phone,
                city: f.form.value.city,
                address: f.form.value.address,
                shipping: f.form.value.shipping,
                // itemId: this.TypePath,
                price: element.price,
                shippingStatus: "Not sent",
                remark: f.form.value.remark,
                date: String(new Date())
            };
            this.orderApi.addOrder(this.order).subscribe((ele) => {
                this.orderComplete = "The order was completed successfully";
                this.orderItem = {
                    orderId: ele.id,
                    productId: this.TypePath,
                    quantity: f.form.value.quantity,
                    productPrice: ele.price
                };
                this.orderitemService.addOrderItem(this.orderItem).subscribe(ele => {
                    this.history.push(element);
                    this.local.saveHistoryToStorage(this.history);
                    setTimeout(() => {
                        this.router.navigate(['/home']);
                    }, 3000);
                });
            });
        });
    }
    backClicked() {
        this._location.back();
    }
    ngOnInit() {
        this.activeRoute.params.subscribe(params => {
            this.TypePath = params.id;
        });
        this.OrderForms = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [''],
            phone: [''],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            shipping: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            remark: [''],
        });
        this.productApi.getAll().subscribe(ele => {
            ele.forEach(element => {
                if (element.id == this.TypePath) {
                    this.Products.push(element);
                }
            });
        });
        if (localStorage.getItem('coverPhoneProjectToHistory')) {
            this.history = JSON.parse(localStorage.getItem('coverPhoneProjectToHistory'));
        }
    }
}
OrderComponent.ɵfac = function OrderComponent_Factory(t) { return new (t || OrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_3__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_orderitem_service__WEBPACK_IMPORTED_MODULE_4__["OrderitemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_orderapi_service__WEBPACK_IMPORTED_MODULE_5__["OrderapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_productapi_service__WEBPACK_IMPORTED_MODULE_7__["ProductapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
OrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderComponent, selectors: [["app-order"]], decls: 31, vars: 9, consts: [[2, "margin-top", "-50px"], [2, "text-align", "center"], [3, "formGroup"], ["f", "ngForm"], ["type", "text", "formControlName", "name", "nbInput", "", "placeholder", "Name*", "required", ""], ["class", "errorText", 4, "ngIf"], ["type", "email", "nbInput", "", "formControlName", "email", "placeholder", "Email*", "pattern", "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,63}$", "required", ""], ["type", "text", "nbInput", "", "formControlName", "phone", "placeholder", "Phone*", "pattern", "^\\+?(972|0)(\\-)?0?(([23489]{1}\\d{7})|[5]{1}\\d{8})$", "required", ""], ["type", "text", "formControlName", "city", "nbInput", "", "placeholder", "City*", "required", ""], ["type", "text", "formControlName", "address", "nbInput", "", "placeholder", "Address*", "required", ""], ["placeholder", "Shipping", "formControlName", "shipping", "required", ""], ["value", "Yes"], ["value", "No"], ["type", "number", "formControlName", "quantity", "nbInput", "", "placeholder", "Quantity*", "required", "", 2, "width", "225px"], ["type", "text", "formControlName", "remark", "nbInput", "", "placeholder", "Remark (Optional)"], ["nbButton", "", "status", "success", 2, "display", "inline-block", "margin-right", "10px", 3, "disabled", "click"], ["nbButton", "", 2, "display", "inline-block", 3, "click"], ["style", "text-align: center;color: green;", 4, "ngIf"], [1, "errorText"], [2, "text-align", "center", "color", "green"], [1, "fas", "fa-check"]], template: function OrderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OrderComponent_p_8_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OrderComponent_p_10_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OrderComponent_p_12_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OrderComponent_p_14_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OrderComponent_p_16_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nb-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nb-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nb-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, OrderComponent_p_22_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.orderNow(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Order Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_Template_button_click_28_listener() { return ctx.backClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, OrderComponent_h3_30_Template, 3, 1, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.OrderForms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.OrderForms.controls.name.valid && ctx.OrderForms.controls.name.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.OrderForms.controls.email.valid && ctx.OrderForms.controls.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.OrderForms.controls.phone.valid && ctx.OrderForms.controls.phone.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.OrderForms.controls.city.valid && ctx.OrderForms.controls.city.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.OrderForms.controls.address.valid && ctx.OrderForms.controls.address.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.OrderForms.controls.shipping.valid && ctx.OrderForms.controls.shipping.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderComplete);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbLayoutColumnComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbOptionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"]], styles: ["input[_ngcontent-%COMP%], nb-select[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 20px;\n}\n\n.errorText[_ngcontent-%COMP%] {\n  margin-top: -22px;\n  margin-left: 92px;\n  font-size: 13px;\n  color: red;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcmRlci9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL3NyY1xcYXBwXFxtb2R1bGVzXFxvcmRlclxcb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvb3JkZXIvb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vcmRlci9vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0ICwgbmItc2VsZWN0ICwgYnV0dG9ue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5lcnJvclRleHR7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA5MnB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsImlucHV0LCBuYi1zZWxlY3QsIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uZXJyb3JUZXh0IHtcbiAgbWFyZ2luLXRvcDogLTIycHg7XG4gIG1hcmdpbi1sZWZ0OiA5MnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order',
                templateUrl: './order.component.html',
                styleUrls: ['./order.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_3__["LocalService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_core_services_orderitem_service__WEBPACK_IMPORTED_MODULE_4__["OrderitemService"] }, { type: src_app_core_services_orderapi_service__WEBPACK_IMPORTED_MODULE_5__["OrderapiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_core_services_productapi_service__WEBPACK_IMPORTED_MODULE_7__["ProductapiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/order/order.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/order/order.module.ts ***!
  \***********************************************/
/*! exports provided: OrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.component */ "./src/app/modules/order/order.component.ts");
/* harmony import */ var src_app_nebular_nebular_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/nebular/nebular.module */ "./src/app/nebular/nebular.module.ts");
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-routing.module */ "./src/app/modules/order/order-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class OrderModule {
}
OrderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OrderModule });
OrderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OrderModule_Factory(t) { return new (t || OrderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_nebular_nebular_module__WEBPACK_IMPORTED_MODULE_3__["NebularModule"],
            _order_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrderRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderModule, { declarations: [_order_component__WEBPACK_IMPORTED_MODULE_2__["OrderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_nebular_nebular_module__WEBPACK_IMPORTED_MODULE_3__["NebularModule"],
        _order_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrderRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_order_component__WEBPACK_IMPORTED_MODULE_2__["OrderComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_nebular_nebular_module__WEBPACK_IMPORTED_MODULE_3__["NebularModule"],
                    _order_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrderRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/showProduct/show-modules.module.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/showProduct/show-modules.module.ts ***!
  \************************************************************/
/*! exports provided: ShowModulesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowModulesModule", function() { return ShowModulesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _showproduct_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showproduct.component */ "./src/app/modules/showProduct/showproduct.component.ts");
/* harmony import */ var _showproduct_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showproduct-routing.module */ "./src/app/modules/showProduct/showproduct-routing.module.ts");
/* harmony import */ var src_app_nebular_nebular_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/nebular/nebular.module */ "./src/app/nebular/nebular.module.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");








class ShowModulesModule {
}
ShowModulesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShowModulesModule });
ShowModulesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShowModulesModule_Factory(t) { return new (t || ShowModulesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _showproduct_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShowProductRoutingModule"],
            src_app_nebular_nebular_module__WEBPACK_IMPORTED_MODULE_4__["NebularModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShowModulesModule, { declarations: [_showproduct_component__WEBPACK_IMPORTED_MODULE_2__["ShowproductComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _showproduct_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShowProductRoutingModule"],
        src_app_nebular_nebular_module__WEBPACK_IMPORTED_MODULE_4__["NebularModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowModulesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_showproduct_component__WEBPACK_IMPORTED_MODULE_2__["ShowproductComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _showproduct_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShowProductRoutingModule"],
                    src_app_nebular_nebular_module__WEBPACK_IMPORTED_MODULE_4__["NebularModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrModule"].forRoot()
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/showProduct/showproduct-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/showProduct/showproduct-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ShowProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowProductRoutingModule", function() { return ShowProductRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _showproduct_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showproduct.component */ "./src/app/modules/showProduct/showproduct.component.ts");





const routes = [
    { path: '', component: _showproduct_component__WEBPACK_IMPORTED_MODULE_2__["ShowproductComponent"], pathMatch: 'full' },
    { path: 'showProduct', component: _showproduct_component__WEBPACK_IMPORTED_MODULE_2__["ShowproductComponent"] },
];
class ShowProductRoutingModule {
}
ShowProductRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShowProductRoutingModule });
ShowProductRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShowProductRoutingModule_Factory(t) { return new (t || ShowProductRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShowProductRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowProductRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/showProduct/showproduct.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/showProduct/showproduct.component.ts ***!
  \**************************************************************/
/*! exports provided: ShowproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowproductComponent", function() { return ShowproductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_productapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/productapi.service */ "./src/app/core/services/productapi.service.ts");
/* harmony import */ var src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/local.service */ "./src/app/core/services/local.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = function (a1) { return ["order", a1]; };
function ShowproductComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function ShowproductComponent_div_8_Template_img_error_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const p_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return p_r1.photoUrl = ctx_r2.urlError; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Category: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Type: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowproductComponent_div_8_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const p_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.addToCart(p_r1.id, p_r1.name, p_r1.category, p_r1.type, p_r1.price, p_r1.photoUrl); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add to cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Buy now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", p_r1.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1.price, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, p_r1.id));
} }
class ShowproductComponent {
    constructor(activeRoute, router, productApi, local, toastrService) {
        this.activeRoute = activeRoute;
        this.router = router;
        this.productApi = productApi;
        this.local = local;
        this.toastrService = toastrService;
        this.products = [];
        this.filterProduct = [];
        this.toCart = [];
        this.index = 0;
        this.urlError = "https://static.coverscart.com/image/cache/data/Golden_Mandala_Back_Case_for_Oppo_F5-600x600.jpg";
        this.classes = 'example-items-rows';
    }
    addToCart(id, name, category, type, price, photoUrl) {
        this.toCart.push({ id: id, name: name, category: category, type: type, price: price, photoUrl: photoUrl });
        this.local.saveCoverToStorage(this.toCart);
        this.showToast('top-right', 'success', name);
    }
    showToast(position, status, name) {
        this.index += 1;
        this.toastrService.show(status || 'Success', ` ${name} Added to cart`, { position, status });
    }
    getFromStorage() {
        if (localStorage.getItem('coverPhoneProjectCoverToCart')) {
            this.toCart = JSON.parse(localStorage.getItem('coverPhoneProjectCoverToCart'));
        }
    }
    ngOnInit() {
        this.activeRoute.params.subscribe(params => {
            this.TypePath = params.type;
            this.TypePath1 = params.category;
        });
        if (!this.TypePath) {
            this.router.navigate(['home']);
        }
        this.productApi.getAll().subscribe(ele => {
            this.products = ele;
            this.products.forEach(element => {
                if (element.type == this.TypePath) {
                    this.filterProduct.push(element);
                }
            });
        });
        this.getFromStorage();
    }
}
ShowproductComponent.ɵfac = function ShowproductComponent_Factory(t) { return new (t || ShowproductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_productapi_service__WEBPACK_IMPORTED_MODULE_2__["ProductapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_3__["LocalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"])); };
ShowproductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowproductComponent, selectors: [["app-showproduct"]], hostVars: 2, hostBindings: function ShowproductComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classes);
    } }, decls: 9, vars: 3, consts: [[2, "text-align", "center"], [2, "display", "block", "text-align", "left"], [2, "text-align", "left", "display", "inline-block"], [2, "display", "inline-block", "margin-left", "3px"], [2, "width", "60%", "margin-right", "556px", "border-bottom", "#ffffff26 1px solid"], ["id", "card", 4, "ngFor", "ngForOf"], ["id", "card"], [2, "width", "300px", "height", "300px", 3, "src", "error"], [1, "p"], ["nbButton", "", "shape", "round", "size", "small", "outline", "", "status", "warning", 2, "display", "inline-block", 3, "click"], [1, "fas", "fa-cart-plus", 2, "margin-left", "3px"], ["nbButton", "", "shape", "round", "size", "small", "outline", "", "status", "primary", 2, "display", "inline-block", "margin-left", "10px", 3, "routerLink"], [1, "fas", "fa-money-check-alt", 2, "margin-left", "3px"], [2, "width", "50%"]], template: function ShowproductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-column", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ShowproductComponent_div_8_Template, 24, 8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.TypePath1, " -");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.TypePath, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filterProduct);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutColumnComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".p[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n#card[_ngcontent-%COMP%] {\n  padding: 5px;\n  display: inline-block;\n  margin: 20px;\n  text-align: center;\n}\n\n#card[_ngcontent-%COMP%]:hover {\n  background-color: #cacaca63;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaG93UHJvZHVjdC9DOlxcVXNlcnNcXGRhbmllXFxEZXNrdG9wXFxGdWxsIFN0YWNrXFxQaG9uZSBDb3ZlclxcY2xpZW50XFxQaG9uZUNvdmVyL3NyY1xcYXBwXFxtb2R1bGVzXFxzaG93UHJvZHVjdFxcc2hvd3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hvd1Byb2R1Y3Qvc2hvd3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSwyQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaG93UHJvZHVjdC9zaG93cHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5we1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4jY2FyZHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2NhcmQ6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYWNhNjM7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLnAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiNjYXJkIHtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYWNhY2E2Mztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowproductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-showproduct',
                templateUrl: './showproduct.component.html',
                styleUrls: ['./showproduct.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_core_services_productapi_service__WEBPACK_IMPORTED_MODULE_2__["ProductapiService"] }, { type: src_app_core_services_local_service__WEBPACK_IMPORTED_MODULE_3__["LocalService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"] }]; }, { classes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "./src/app/nebular/nebular.module.ts":
/*!*******************************************!*\
  !*** ./src/app/nebular/nebular.module.ts ***!
  \*******************************************/
/*! exports provided: NebularModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NebularModule", function() { return NebularModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/__ivy_ngcc__/fesm2015/index.js");






const nebular = [
    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbThemeModule"].forRoot({ name: 'default' }),
    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutModule"],
    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__["NbEvaIconsModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarModule"].forRoot(),
    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogModule"].forRoot(),
    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbAccordionModule"],
    _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"],
];
class NebularModule {
}
NebularModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NebularModule });
NebularModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NebularModule_Factory(t) { return new (t || NebularModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], nebular], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutModule"],
        _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbAccordionModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NebularModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutModule"],
        _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbAccordionModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"]], exports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutModule"],
        _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbAccordionModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTabsetModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NebularModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], nebular],
                exports: [nebular]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    productsApi: "https://localhost:44365/api/ProductDetails/",
    orderApi: "https://localhost:44365/api/OrderDetails/",
    OrderItemApi: "https://localhost:44365/api/OrderItemDetails/",
    newsApi: "https://localhost:44365/api/NewsLetterDetails/",
    categoryApi: "https://localhost:44365/api/CategoriesDetails/",
    firebase: {
        apiKey: "AIzaSyA7PV3MT0wHSRGEaEoj7jXuNn3iVxYBCL8",
        authDomain: "phone-cover.firebaseapp.com",
        databaseURL: "https://phone-cover.firebaseio.com",
        projectId: "phone-cover",
        storageBucket: "phone-cover.appspot.com",
        messagingSenderId: "291296179940",
        appId: "1:291296179940:web:44a083dc1159b7587a1ef1",
        measurementId: "G-57VEG0KK14"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\danie\Desktop\Full Stack\Phone Cover\client\PhoneCover\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map