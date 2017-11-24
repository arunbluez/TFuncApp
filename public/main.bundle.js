webpackJsonp(["main"],{

/***/ "../../../../../guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nebular_auth_services_auth_service__ = __webpack_require__("../../../../@nebular/auth/services/auth.service.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__nebular_auth_services_auth_service__["b" /* NbAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__nebular_auth_services_auth_service__["b" /* NbAuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./charts/charts.module": [
		"../../../../../src/app/pages/charts/charts.module.ts",
		"charts.module",
		"common"
	],
	"./components/components.module": [
		"../../../../../src/app/pages/components/components.module.ts",
		"components.module",
		"common"
	],
	"./editors/editors.module": [
		"../../../../../src/app/pages/editors/editors.module.ts",
		"editors.module"
	],
	"./forms/forms.module": [
		"../../../../../src/app/pages/forms/forms.module.ts",
		"forms.module"
	],
	"./maps/maps.module": [
		"../../../../../src/app/pages/maps/maps.module.ts",
		"maps.module",
		"common"
	],
	"./tables/tables.module": [
		"../../../../../src/app/pages/tables/tables.module.ts",
		"tables.module",
		"common"
	],
	"./ui-features/ui-features.module": [
		"../../../../../src/app/pages/ui-features/ui-features.module.ts",
		"ui-features.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/@core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nebular_auth__ = __webpack_require__("../../../../@nebular/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_import_guard__ = __webpack_require__("../../../../../src/app/@core/module-import-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_data_module__ = __webpack_require__("../../../../../src/app/@core/data/data.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_analytics_service__ = __webpack_require__("../../../../../src/app/@core/utils/analytics.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var NB_CORE_PROVIDERS = __WEBPACK_IMPORTED_MODULE_4__data_data_module__["a" /* DataModule */].forRoot().providers.concat(__WEBPACK_IMPORTED_MODULE_2__nebular_auth__["d" /* NbAuthModule */].forRoot({
    providers: {
        email: {
            service: __WEBPACK_IMPORTED_MODULE_2__nebular_auth__["e" /* NbEmailPassAuthProvider */],
            config: {
                delay: 3000,
                login: {
                    rememberMe: true,
                },
            },
        },
    },
}).providers, [
    __WEBPACK_IMPORTED_MODULE_5__utils_analytics_service__["a" /* AnalyticsService */],
]);
var CoreModule = CoreModule_1 = (function () {
    function CoreModule(parentModule) {
        Object(__WEBPACK_IMPORTED_MODULE_3__module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'CoreModule');
    }
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: NB_CORE_PROVIDERS.slice(),
        };
    };
    return CoreModule;
}());
CoreModule = CoreModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__nebular_auth__["d" /* NbAuthModule */],
        ],
        declarations: [],
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);

var CoreModule_1;
//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/@core/data/data.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_service__ = __webpack_require__("../../../../../src/app/@core/data/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__electricity_service__ = __webpack_require__("../../../../../src/app/@core/data/electricity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state_service__ = __webpack_require__("../../../../../src/app/@core/data/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__smart_table_service__ = __webpack_require__("../../../../../src/app/@core/data/smart-table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__player_service__ = __webpack_require__("../../../../../src/app/@core/data/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SERVICES = [
    __WEBPACK_IMPORTED_MODULE_2__users_service__["a" /* UserService */],
    __WEBPACK_IMPORTED_MODULE_3__electricity_service__["a" /* ElectricityService */],
    __WEBPACK_IMPORTED_MODULE_4__state_service__["a" /* StateService */],
    __WEBPACK_IMPORTED_MODULE_5__smart_table_service__["a" /* SmartTableService */],
    __WEBPACK_IMPORTED_MODULE_6__player_service__["a" /* PlayerService */],
];
var DataModule = DataModule_1 = (function () {
    function DataModule() {
    }
    DataModule.forRoot = function () {
        return {
            ngModule: DataModule_1,
            providers: SERVICES.slice(),
        };
    };
    return DataModule;
}());
DataModule = DataModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
        ],
        providers: SERVICES.slice(),
    })
], DataModule);

var DataModule_1;
//# sourceMappingURL=data.module.js.map

/***/ }),

/***/ "../../../../../src/app/@core/data/electricity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElectricityService = (function () {
    function ElectricityService() {
        this.data = [
            {
                title: '2015',
                months: [
                    { month: 'Jan', delta: '0.97', down: true, kWatts: '816', cost: '97' },
                    { month: 'Feb', delta: '1.83', down: true, kWatts: '806', cost: '95' },
                    { month: 'Mar', delta: '0.64', down: true, kWatts: '803', cost: '94' },
                    { month: 'Apr', delta: '2.17', down: false, kWatts: '818', cost: '98' },
                    { month: 'May', delta: '1.32', down: true, kWatts: '809', cost: '96' },
                    { month: 'Jun', delta: '0.05', down: true, kWatts: '808', cost: '96' },
                    { month: 'Jul', delta: '1.39', down: false, kWatts: '815', cost: '97' },
                    { month: 'Aug', delta: '0.73', down: true, kWatts: '807', cost: '95' },
                    { month: 'Sept', delta: '2.61', down: true, kWatts: '792', cost: '92' },
                    { month: 'Oct', delta: '0.16', down: true, kWatts: '791', cost: '92' },
                    { month: 'Nov', delta: '1.71', down: true, kWatts: '786', cost: '89' },
                    { month: 'Dec', delta: '0.37', down: false, kWatts: '789', cost: '91' },
                ],
            },
            {
                title: '2016',
                active: true,
                months: [
                    { month: 'Jan', delta: '1.56', down: true, kWatts: '789', cost: '91' },
                    { month: 'Feb', delta: '0.33', down: false, kWatts: '791', cost: '92' },
                    { month: 'Mar', delta: '0.62', down: true, kWatts: '790', cost: '92' },
                    { month: 'Apr', delta: '1.93', down: true, kWatts: '783', cost: '87' },
                    { month: 'May', delta: '2.52', down: true, kWatts: '771', cost: '83' },
                    { month: 'Jun', delta: '0.39', down: false, kWatts: '774', cost: '85' },
                    { month: 'Jul', delta: '1.61', down: true, kWatts: '767', cost: '81' },
                    { month: 'Aug', delta: '1.41', down: true, kWatts: '759', cost: '76' },
                    { month: 'Sept', delta: '1.03', down: true, kWatts: '752', cost: '74' },
                    { month: 'Oct', delta: '2.94', down: false, kWatts: '769', cost: '82' },
                    { month: 'Nov', delta: '0.26', down: true, kWatts: '767', cost: '81' },
                    { month: 'Dec', delta: '1.62', down: true, kWatts: '760', cost: '76' },
                ],
            },
            {
                title: '2017',
                months: [
                    { month: 'Jan', delta: '1.34', down: false, kWatts: '789', cost: '91' },
                    { month: 'Feb', delta: '0.95', down: false, kWatts: '793', cost: '93' },
                    { month: 'Mar', delta: '0.25', down: true, kWatts: '791', cost: '92' },
                    { month: 'Apr', delta: '1.72', down: false, kWatts: '797', cost: '95' },
                    { month: 'May', delta: '2.62', down: true, kWatts: '786', cost: '90' },
                    { month: 'Jun', delta: '0.72', down: false, kWatts: '789', cost: '91' },
                    { month: 'Jul', delta: '0.78', down: true, kWatts: '784', cost: '89' },
                    { month: 'Aug', delta: '0.36', down: true, kWatts: '782', cost: '88' },
                    { month: 'Sept', delta: '0.55', down: false, kWatts: '787', cost: '90' },
                    { month: 'Oct', delta: '1.81', down: true, kWatts: '779', cost: '86' },
                    { month: 'Nov', delta: '1.12', down: true, kWatts: '774', cost: '84' },
                    { month: 'Dec', delta: '0.52', down: false, kWatts: '776', cost: '95' },
                ],
            },
        ];
    }
    // TODO: observables
    ElectricityService.prototype.getData = function () {
        return this.data;
    };
    return ElectricityService;
}());
ElectricityService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ElectricityService);

//# sourceMappingURL=electricity.service.js.map

/***/ }),

/***/ "../../../../../src/app/@core/data/player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Track */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Track = (function () {
    function Track() {
    }
    return Track;
}());

var PlayerService = (function () {
    function PlayerService() {
        this.playlist = [
            {
                name: 'Don\'t Wanna Fight',
                artist: 'Alabama Shakes',
                url: 'https://p.scdn.co/mp3-preview/6156cdbca425a894972c02fca9d76c0b70e001af',
                cover: 'assets/images/cover1.jpg',
            },
            {
                name: 'Harder',
                artist: 'Daft Punk',
                url: 'https://p.scdn.co/mp3-preview/92a04c7c0e96bf93a1b1b1cae7dfff1921969a7b',
                cover: 'assets/images/cover2.jpg',
            },
            {
                name: 'Come Together',
                artist: 'Beatles',
                url: 'https://p.scdn.co/mp3-preview/83090a4db6899eaca689ae35f69126dbe65d94c9',
                cover: 'assets/images/cover3.jpg',
            },
        ];
    }
    PlayerService.prototype.random = function () {
        this.current = Math.floor(Math.random() * this.playlist.length);
        return this.playlist[this.current];
    };
    PlayerService.prototype.next = function () {
        return this.getNextTrack();
    };
    PlayerService.prototype.prev = function () {
        return this.getPrevTrack();
    };
    PlayerService.prototype.getNextTrack = function () {
        if (this.current === this.playlist.length - 1) {
            this.current = 0;
        }
        else {
            this.current++;
        }
        return this.playlist[this.current];
    };
    PlayerService.prototype.getPrevTrack = function () {
        if (this.current === 0) {
            this.current = this.playlist.length - 1;
        }
        else {
            this.current--;
        }
        return this.playlist[this.current];
    };
    return PlayerService;
}());
PlayerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], PlayerService);

//# sourceMappingURL=player.service.js.map

/***/ }),

/***/ "../../../../../src/app/@core/data/smart-table.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartTableService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SmartTableService = (function () {
    function SmartTableService() {
        this.data = [{
                id: 1,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28',
            }, {
                id: 2,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45',
            }, {
                id: 3,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18',
            }, {
                id: 4,
                firstName: 'John',
                lastName: 'Snow',
                username: '@snow',
                email: 'snow@gmail.com',
                age: '20',
            }, {
                id: 5,
                firstName: 'Jack',
                lastName: 'Sparrow',
                username: '@jack',
                email: 'jack@yandex.ru',
                age: '30',
            }, {
                id: 6,
                firstName: 'Ann',
                lastName: 'Smith',
                username: '@ann',
                email: 'ann@gmail.com',
                age: '21',
            }, {
                id: 7,
                firstName: 'Barbara',
                lastName: 'Black',
                username: '@barbara',
                email: 'barbara@yandex.ru',
                age: '43',
            }, {
                id: 8,
                firstName: 'Sevan',
                lastName: 'Bagrat',
                username: '@sevan',
                email: 'sevan@outlook.com',
                age: '13',
            }, {
                id: 9,
                firstName: 'Ruben',
                lastName: 'Vardan',
                username: '@ruben',
                email: 'ruben@gmail.com',
                age: '22',
            }, {
                id: 10,
                firstName: 'Karen',
                lastName: 'Sevan',
                username: '@karen',
                email: 'karen@yandex.ru',
                age: '33',
            }, {
                id: 11,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mark',
                email: 'mark@gmail.com',
                age: '38',
            }, {
                id: 12,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@jacob',
                email: 'jacob@yandex.ru',
                age: '48',
            }, {
                id: 13,
                firstName: 'Haik',
                lastName: 'Hakob',
                username: '@haik',
                email: 'haik@outlook.com',
                age: '48',
            }, {
                id: 14,
                firstName: 'Garegin',
                lastName: 'Jirair',
                username: '@garegin',
                email: 'garegin@gmail.com',
                age: '40',
            }, {
                id: 15,
                firstName: 'Krikor',
                lastName: 'Bedros',
                username: '@krikor',
                email: 'krikor@yandex.ru',
                age: '32',
            }, {
                'id': 16,
                'firstName': 'Francisca',
                'lastName': 'Brady',
                'username': '@Gibson',
                'email': 'franciscagibson@comtours.com',
                'age': 11,
            }, {
                'id': 17,
                'firstName': 'Tillman',
                'lastName': 'Figueroa',
                'username': '@Snow',
                'email': 'tillmansnow@comtours.com',
                'age': 34,
            }, {
                'id': 18,
                'firstName': 'Jimenez',
                'lastName': 'Morris',
                'username': '@Bryant',
                'email': 'jimenezbryant@comtours.com',
                'age': 45,
            }, {
                'id': 19,
                'firstName': 'Sandoval',
                'lastName': 'Jacobson',
                'username': '@Mcbride',
                'email': 'sandovalmcbride@comtours.com',
                'age': 32,
            }, {
                'id': 20,
                'firstName': 'Griffin',
                'lastName': 'Torres',
                'username': '@Charles',
                'email': 'griffincharles@comtours.com',
                'age': 19,
            }, {
                'id': 21,
                'firstName': 'Cora',
                'lastName': 'Parker',
                'username': '@Caldwell',
                'email': 'coracaldwell@comtours.com',
                'age': 27,
            }, {
                'id': 22,
                'firstName': 'Cindy',
                'lastName': 'Bond',
                'username': '@Velez',
                'email': 'cindyvelez@comtours.com',
                'age': 24,
            }, {
                'id': 23,
                'firstName': 'Frieda',
                'lastName': 'Tyson',
                'username': '@Craig',
                'email': 'friedacraig@comtours.com',
                'age': 45,
            }, {
                'id': 24,
                'firstName': 'Cote',
                'lastName': 'Holcomb',
                'username': '@Rowe',
                'email': 'coterowe@comtours.com',
                'age': 20,
            }, {
                'id': 25,
                'firstName': 'Trujillo',
                'lastName': 'Mejia',
                'username': '@Valenzuela',
                'email': 'trujillovalenzuela@comtours.com',
                'age': 16,
            }, {
                'id': 26,
                'firstName': 'Pruitt',
                'lastName': 'Shepard',
                'username': '@Sloan',
                'email': 'pruittsloan@comtours.com',
                'age': 44,
            }, {
                'id': 27,
                'firstName': 'Sutton',
                'lastName': 'Ortega',
                'username': '@Black',
                'email': 'suttonblack@comtours.com',
                'age': 42,
            }, {
                'id': 28,
                'firstName': 'Marion',
                'lastName': 'Heath',
                'username': '@Espinoza',
                'email': 'marionespinoza@comtours.com',
                'age': 47,
            }, {
                'id': 29,
                'firstName': 'Newman',
                'lastName': 'Hicks',
                'username': '@Keith',
                'email': 'newmankeith@comtours.com',
                'age': 15,
            }, {
                'id': 30,
                'firstName': 'Boyle',
                'lastName': 'Larson',
                'username': '@Summers',
                'email': 'boylesummers@comtours.com',
                'age': 32,
            }, {
                'id': 31,
                'firstName': 'Haynes',
                'lastName': 'Vinson',
                'username': '@Mckenzie',
                'email': 'haynesmckenzie@comtours.com',
                'age': 15,
            }, {
                'id': 32,
                'firstName': 'Miller',
                'lastName': 'Acosta',
                'username': '@Young',
                'email': 'milleryoung@comtours.com',
                'age': 55,
            }, {
                'id': 33,
                'firstName': 'Johnston',
                'lastName': 'Brown',
                'username': '@Knight',
                'email': 'johnstonknight@comtours.com',
                'age': 29,
            }, {
                'id': 34,
                'firstName': 'Lena',
                'lastName': 'Pitts',
                'username': '@Forbes',
                'email': 'lenaforbes@comtours.com',
                'age': 25,
            }, {
                'id': 35,
                'firstName': 'Terrie',
                'lastName': 'Kennedy',
                'username': '@Branch',
                'email': 'terriebranch@comtours.com',
                'age': 37,
            }, {
                'id': 36,
                'firstName': 'Louise',
                'lastName': 'Aguirre',
                'username': '@Kirby',
                'email': 'louisekirby@comtours.com',
                'age': 44,
            }, {
                'id': 37,
                'firstName': 'David',
                'lastName': 'Patton',
                'username': '@Sanders',
                'email': 'davidsanders@comtours.com',
                'age': 26,
            }, {
                'id': 38,
                'firstName': 'Holden',
                'lastName': 'Barlow',
                'username': '@Mckinney',
                'email': 'holdenmckinney@comtours.com',
                'age': 11,
            }, {
                'id': 39,
                'firstName': 'Baker',
                'lastName': 'Rivera',
                'username': '@Montoya',
                'email': 'bakermontoya@comtours.com',
                'age': 47,
            }, {
                'id': 40,
                'firstName': 'Belinda',
                'lastName': 'Lloyd',
                'username': '@Calderon',
                'email': 'belindacalderon@comtours.com',
                'age': 21,
            }, {
                'id': 41,
                'firstName': 'Pearson',
                'lastName': 'Patrick',
                'username': '@Clements',
                'email': 'pearsonclements@comtours.com',
                'age': 42,
            }, {
                'id': 42,
                'firstName': 'Alyce',
                'lastName': 'Mckee',
                'username': '@Daugherty',
                'email': 'alycedaugherty@comtours.com',
                'age': 55,
            }, {
                'id': 43,
                'firstName': 'Valencia',
                'lastName': 'Spence',
                'username': '@Olsen',
                'email': 'valenciaolsen@comtours.com',
                'age': 20,
            }, {
                'id': 44,
                'firstName': 'Leach',
                'lastName': 'Holcomb',
                'username': '@Humphrey',
                'email': 'leachhumphrey@comtours.com',
                'age': 28,
            }, {
                'id': 45,
                'firstName': 'Moss',
                'lastName': 'Baxter',
                'username': '@Fitzpatrick',
                'email': 'mossfitzpatrick@comtours.com',
                'age': 51,
            }, {
                'id': 46,
                'firstName': 'Jeanne',
                'lastName': 'Cooke',
                'username': '@Ward',
                'email': 'jeanneward@comtours.com',
                'age': 59,
            }, {
                'id': 47,
                'firstName': 'Wilma',
                'lastName': 'Briggs',
                'username': '@Kidd',
                'email': 'wilmakidd@comtours.com',
                'age': 53,
            }, {
                'id': 48,
                'firstName': 'Beatrice',
                'lastName': 'Perry',
                'username': '@Gilbert',
                'email': 'beatricegilbert@comtours.com',
                'age': 39,
            }, {
                'id': 49,
                'firstName': 'Whitaker',
                'lastName': 'Hyde',
                'username': '@Mcdonald',
                'email': 'whitakermcdonald@comtours.com',
                'age': 35,
            }, {
                'id': 50,
                'firstName': 'Rebekah',
                'lastName': 'Duran',
                'username': '@Gross',
                'email': 'rebekahgross@comtours.com',
                'age': 40,
            }, {
                'id': 51,
                'firstName': 'Earline',
                'lastName': 'Mayer',
                'username': '@Woodward',
                'email': 'earlinewoodward@comtours.com',
                'age': 52,
            }, {
                'id': 52,
                'firstName': 'Moran',
                'lastName': 'Baxter',
                'username': '@Johns',
                'email': 'moranjohns@comtours.com',
                'age': 20,
            }, {
                'id': 53,
                'firstName': 'Nanette',
                'lastName': 'Hubbard',
                'username': '@Cooke',
                'email': 'nanettecooke@comtours.com',
                'age': 55,
            }, {
                'id': 54,
                'firstName': 'Dalton',
                'lastName': 'Walker',
                'username': '@Hendricks',
                'email': 'daltonhendricks@comtours.com',
                'age': 25,
            }, {
                'id': 55,
                'firstName': 'Bennett',
                'lastName': 'Blake',
                'username': '@Pena',
                'email': 'bennettpena@comtours.com',
                'age': 13,
            }, {
                'id': 56,
                'firstName': 'Kellie',
                'lastName': 'Horton',
                'username': '@Weiss',
                'email': 'kellieweiss@comtours.com',
                'age': 48,
            }, {
                'id': 57,
                'firstName': 'Hobbs',
                'lastName': 'Talley',
                'username': '@Sanford',
                'email': 'hobbssanford@comtours.com',
                'age': 28,
            }, {
                'id': 58,
                'firstName': 'Mcguire',
                'lastName': 'Donaldson',
                'username': '@Roman',
                'email': 'mcguireroman@comtours.com',
                'age': 38,
            }, {
                'id': 59,
                'firstName': 'Rodriquez',
                'lastName': 'Saunders',
                'username': '@Harper',
                'email': 'rodriquezharper@comtours.com',
                'age': 20,
            }, {
                'id': 60,
                'firstName': 'Lou',
                'lastName': 'Conner',
                'username': '@Sanchez',
                'email': 'lousanchez@comtours.com',
                'age': 16,
            }];
    }
    SmartTableService.prototype.getData = function () {
        return this.data;
    };
    return SmartTableService;
}());
SmartTableService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SmartTableService);

//# sourceMappingURL=smart-table.service.js.map

/***/ }),

/***/ "../../../../../src/app/@core/data/state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StateService = (function () {
    function StateService() {
        this.layouts = [
            {
                name: 'One Column',
                icon: 'nb-layout-default',
                id: 'one-column',
                selected: true,
            },
            {
                name: 'Two Column',
                icon: 'nb-layout-two-column',
                id: 'two-column',
            },
            {
                name: 'Center Column',
                icon: 'nb-layout-centre',
                id: 'center-column',
            },
        ];
        this.sidebars = [
            {
                name: 'Left Sidebar',
                icon: 'nb-layout-sidebar-left',
                id: 'left',
                selected: true,
            },
            {
                name: 'Right Sidebar',
                icon: 'nb-layout-sidebar-right',
                id: 'right',
            },
        ];
        this.layoutState$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.layouts[0]);
        this.sidebarState$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.sidebars[0]);
    }
    StateService.prototype.setLayoutState = function (state) {
        this.layoutState$.next(state);
    };
    StateService.prototype.getLayoutStates = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.layouts);
    };
    StateService.prototype.onLayoutState = function () {
        return this.layoutState$.asObservable();
    };
    StateService.prototype.setSidebarState = function (state) {
        this.sidebarState$.next(state);
    };
    StateService.prototype.getSidebarStates = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.sidebars);
    };
    StateService.prototype.onSidebarState = function () {
        return this.sidebarState$.asObservable();
    };
    return StateService;
}());
StateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], StateService);

//# sourceMappingURL=state.service.js.map

/***/ }),

/***/ "../../../../../src/app/@core/data/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService() {
        this.users = {
            nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
            eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
            jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
            lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
            alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
            kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
        };
        // this.userArray = Object.values(this.users);
    }
    UserService.prototype.getUsers = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.users);
    };
    UserService.prototype.getUserArray = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.userArray);
    };
    UserService.prototype.getUser = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(JSON.parse(localStorage.getItem('user')));
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/app/@core/module-import-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}
//# sourceMappingURL=module-import-guard.js.map

/***/ }),

/***/ "../../../../../src/app/@core/utils/analytics.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AnalyticsService = (function () {
    function AnalyticsService(location, router) {
        this.location = location;
        this.router = router;
        this.enabled = false;
    }
    AnalyticsService.prototype.trackPageViews = function () {
        var _this = this;
        if (this.enabled) {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_filter__["a" /* filter */].call(this.router.events, function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
                .subscribe(function () {
                ga('send', { hitType: 'pageview', page: _this.location.path() });
            });
        }
    };
    AnalyticsService.prototype.trackEvent = function (eventName) {
        if (this.enabled) {
            ga('send', 'event', eventName);
        }
    };
    return AnalyticsService;
}());
AnalyticsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AnalyticsService);

var _a, _b;
//# sourceMappingURL=analytics.service.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  :host-context(.nb-theme-default) .socials {\n    font-size: 2rem; }\n    :host-context(.nb-theme-default) .socials a {\n      padding: 0.4rem;\n      color: #a4abb3;\n      transition: color ease-out 0.1s; }\n      :host-context(.nb-theme-default) .socials a:hover {\n        color: #2a2a2a; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-default) .socials {\n      font-size: 1.5rem; } }\n\n:host-context(.nb-theme-cosmic) {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  :host-context(.nb-theme-cosmic) .socials {\n    font-size: 2rem; }\n    :host-context(.nb-theme-cosmic) .socials a {\n      padding: 0.4rem;\n      color: #a1a1e5;\n      transition: color ease-out 0.1s; }\n      :host-context(.nb-theme-cosmic) .socials a:hover {\n        color: #ffffff; }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-cosmic) .socials {\n      font-size: 1.5rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-footer',
        styles: [__webpack_require__("../../../../../src/app/@theme/components/footer/footer.component.scss")],
        template: "\n    <span class=\"created-by\">Developed with \u2665 by <b><a href=\"http://graphicmonkey.org\" target=\"_blank\">GraphicMonkey</a></b> 2017</span>\n    <div class=\"socials\">\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-github\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-facebook\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-twitter\"></a>\n      <a href=\"#\" target=\"_blank\" class=\"ion ion-social-linkedin\"></a>\n    </div>\n  ",
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\"\n     [class.left]=\"position === 'normal'\"\n     [class.right]=\"position === 'inverse'\">\n  <div class=\"logo-containter\">\n    <a *ngIf=\"isLoggedIn()\" (click)=\"toggleSidebar()\" href=\"#\" class=\"navigation\"><i class=\"nb-menu\"></i></a>\n    <div class=\"logo\" (click)=\"goToHome()\">TFunc</div>\n  </div>\n  <ngx-theme-switcher></ngx-theme-switcher>\n</div>\n\n<nb-actions\n  size=\"medium\"\n  class=\"header-container\"\n  [class.right]=\"position === 'normal'\"\n  [class.left]=\"position === 'inverse'\">\n  <nb-action *ngIf=\"isLoggedIn()\" icon=\"nb-grid-b\" class=\"toggle-layout\" (click)=\"toggleSettings()\"></nb-action>\n  <nb-action *ngIf=\"isLoggedIn()\">\n    <nb-user [menu]=\"userMenu\" [name]=\"user?.fullName\" [picture]=\"user?.picture\"></nb-user>\n  </nb-action>\n  <nb-action *ngIf=\"isLoggedIn()\" class=\"control-item\" disabled icon=\"nb-notifications\"></nb-action>\n  <nb-action class=\"control-item\">\n    <nb-search type=\"rotate-layout\" (click)=\"startSearch()\"></nb-search>\n  </nb-action>\n</nb-actions>\n<nb-actions size=\"medium\" [class.right]=\"position === 'normal'\"\n[class.left]=\"position === 'inverse'\" *ngIf=\"!isLoggedIn()\">\n  <nb-action class=\"HomeNav\" (click)=\"loginClick()\">\n    <div><i class=\"ion-log-in\"></i></div><div><span>Login</span></div>\n  </nb-action>\n  <nb-action class=\"HomeNav\" (click)=\"registerClick()\">\n    <div><i class=\"ion-person-add\"></i></div><div><span>Register</span></div>\n  </nb-action>\n</nb-actions>\n"

/***/ }),

/***/ "../../../../../src/app/@theme/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%; }\n  :host-context(.nb-theme-default) .left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  :host-context(.nb-theme-default) .right {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n  :host-context(.nb-theme-default) .logo-containter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  :host-context(.nb-theme-default) .control-item {\n    display: block; }\n    :host-context(.nb-theme-default) .control-item span {\n      display: block; }\n  :host-context(.nb-theme-default) .HomeNav {\n    margin-right: 2rem;\n    text-align: center; }\n    :host-context(.nb-theme-default) .HomeNav div {\n      width: 50%;\n      display: inline-block;\n      cursor: pointer; }\n    :host-context(.nb-theme-default) .HomeNav i {\n      color: #a4abb3;\n      font-size: 2rem; }\n    :host-context(.nb-theme-default) .HomeNav span {\n      font-family: Exo;\n      font-weight: 600;\n      color: #2a2a2a;\n      text-transform: uppercase;\n      font-size: 1.2rem;\n      margin-left: 0.4rem; }\n  :host-context(.nb-theme-default) .header-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%; }\n    :host-context(.nb-theme-default) .header-container .navigation {\n      padding-right: 1.25rem;\n      font-size: 2.5rem;\n      text-decoration: none; }\n      :host-context(.nb-theme-default) .header-container .navigation i {\n        display: block; }\n    :host-context(.nb-theme-default) .header-container .logo {\n      padding: 0 1.25rem;\n      font-size: 2.5rem;\n      font-weight: 500;\n      border-left: 1px solid #ebeef2;\n      white-space: nowrap; }\n      :host-context(.nb-theme-default) .header-container .logo span {\n        font-weight: 400; }\n  :host-context(.nb-theme-default) .toggle-layout /deep/ a {\n    display: block;\n    text-decoration: none;\n    line-height: 1; }\n    :host-context(.nb-theme-default) .toggle-layout /deep/ a i {\n      color: #40dc7e;\n      font-size: 2.25rem; }\n  @media (max-width: 991px) {\n    :host-context(.nb-theme-default) nb-action:not(.toggle-layout) {\n      border: none; }\n    :host-context(.nb-theme-default) .control-item {\n      display: none; }\n    :host-context(.nb-theme-default) .toggle-layout {\n      padding: 0; } }\n  @media (max-width: 767px) {\n    :host-context(.nb-theme-default) nb-user /deep/ .user-name {\n      display: none; } }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-default) .header-container .logo {\n      font-size: 1.25rem; }\n    :host-context(.nb-theme-default) .toggle-layout {\n      display: none; }\n    :host-context(.nb-theme-default) nb-action:not(.toggle-layout) {\n      padding: 0; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-default) .right /deep/ {\n      display: none; } }\n\n:host-context(.nb-theme-cosmic) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%; }\n  :host-context(.nb-theme-cosmic) .left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  :host-context(.nb-theme-cosmic) .right {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n  :host-context(.nb-theme-cosmic) .logo-containter {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  :host-context(.nb-theme-cosmic) .control-item {\n    display: block; }\n    :host-context(.nb-theme-cosmic) .control-item span {\n      display: block; }\n  :host-context(.nb-theme-cosmic) .HomeNav {\n    margin-right: 2rem;\n    text-align: center; }\n    :host-context(.nb-theme-cosmic) .HomeNav div {\n      width: 50%;\n      display: inline-block;\n      cursor: pointer; }\n    :host-context(.nb-theme-cosmic) .HomeNav i {\n      color: #a1a1e5;\n      font-size: 2rem; }\n    :host-context(.nb-theme-cosmic) .HomeNav span {\n      font-family: Exo;\n      font-weight: 600;\n      color: #ffffff;\n      text-transform: uppercase;\n      font-size: 1.2rem;\n      margin-left: 0.4rem; }\n  :host-context(.nb-theme-cosmic) .header-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%; }\n    :host-context(.nb-theme-cosmic) .header-container .navigation {\n      padding-right: 1.25rem;\n      font-size: 2.5rem;\n      text-decoration: none; }\n      :host-context(.nb-theme-cosmic) .header-container .navigation i {\n        display: block; }\n    :host-context(.nb-theme-cosmic) .header-container .logo {\n      padding: 0 1.25rem;\n      font-size: 2.5rem;\n      font-weight: 500;\n      border-left: 1px solid #342e73;\n      white-space: nowrap; }\n      :host-context(.nb-theme-cosmic) .header-container .logo span {\n        font-weight: 400; }\n  :host-context(.nb-theme-cosmic) .toggle-layout /deep/ a {\n    display: block;\n    text-decoration: none;\n    line-height: 1; }\n    :host-context(.nb-theme-cosmic) .toggle-layout /deep/ a i {\n      color: #00f9a6;\n      font-size: 2.25rem; }\n  @media (max-width: 991px) {\n    :host-context(.nb-theme-cosmic) nb-action:not(.toggle-layout) {\n      border: none; }\n    :host-context(.nb-theme-cosmic) .control-item {\n      display: none; }\n    :host-context(.nb-theme-cosmic) .toggle-layout {\n      padding: 0; } }\n  @media (max-width: 767px) {\n    :host-context(.nb-theme-cosmic) nb-user /deep/ .user-name {\n      display: none; } }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-cosmic) .header-container .logo {\n      font-size: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .toggle-layout {\n      display: none; }\n    :host-context(.nb-theme-cosmic) nb-action:not(.toggle-layout) {\n      padding: 0; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) .right /deep/ {\n      display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_data_users_service__ = __webpack_require__("../../../../../src/app/@core/data/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_utils_analytics_service__ = __webpack_require__("../../../../../src/app/@core/utils/analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nebular_auth_services_auth_service__ = __webpack_require__("../../../../@nebular/auth/services/auth.service.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = (function () {
    function HeaderComponent(sidebarService, menuService, userService, nbAuthService, router, analyticsService) {
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.userService = userService;
        this.nbAuthService = nbAuthService;
        this.router = router;
        this.analyticsService = analyticsService;
        this.position = 'normal';
        this.userMenu = [{ title: 'Profile', url: '#/users/profile' }, { title: 'Log out', url: '#/users/logout' }];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser()
            .subscribe(function (users) { return _this.user = users; });
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        this.sidebarService.toggle(true, 'menu-sidebar');
        return false;
    };
    HeaderComponent.prototype.toggleSettings = function () {
        this.sidebarService.toggle(false, 'settings-sidebar');
        return false;
    };
    HeaderComponent.prototype.loginClick = function () {
        this.router.navigate(['users']);
    };
    HeaderComponent.prototype.registerClick = function () {
        this.router.navigate(['users/register']);
    };
    HeaderComponent.prototype.isLoggedIn = function () {
        return this.nbAuthService.loggedIn();
    };
    HeaderComponent.prototype.goToHome = function () {
        this.menuService.navigateHome();
    };
    HeaderComponent.prototype.startSearch = function () {
        this.analyticsService.trackEvent('startSearch');
    };
    return HeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "position", void 0);
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-header',
        styles: [__webpack_require__("../../../../../src/app/@theme/components/header/header.component.scss")],
        template: __webpack_require__("../../../../../src/app/@theme/components/header/header.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__nebular_theme__["l" /* NbSidebarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__nebular_theme__["l" /* NbSidebarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__nebular_theme__["h" /* NbMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__nebular_theme__["h" /* NbMenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_data_users_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_data_users_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__nebular_auth_services_auth_service__["b" /* NbAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__nebular_auth_services_auth_service__["b" /* NbAuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__core_utils_analytics_service__["a" /* AnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_utils_analytics_service__["a" /* AnalyticsService */]) === "function" && _f || Object])
], HeaderComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_component__ = __webpack_require__("../../../../../src/app/@theme/components/header/header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__header_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_footer_component__ = __webpack_require__("../../../../../src/app/@theme/components/footer/footer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__footer_footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_input_search_input_component__ = __webpack_require__("../../../../../src/app/@theme/components/search-input/search-input.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__search_input_search_input_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tiny_mce_tiny_mce_component__ = __webpack_require__("../../../../../src/app/@theme/components/tiny-mce/tiny-mce.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__tiny_mce_tiny_mce_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_settings_theme_settings_component__ = __webpack_require__("../../../../../src/app/@theme/components/theme-settings/theme-settings.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__theme_settings_theme_settings_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_switcher_theme_switcher_component__ = __webpack_require__("../../../../../src/app/@theme/components/theme-switcher/theme-switcher.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__theme_switcher_theme_switcher_component__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/components/search-input/search-input.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  :host i.control-icon::before {\n    font-size: 2.3rem; }\n  :host i.control-icon:hover {\n    cursor: pointer; }\n  :host input {\n    border: none;\n    outline: none;\n    margin-left: 1rem;\n    width: 15rem;\n    transition: width 0.2s ease; }\n    :host input.hidden {\n      width: 0;\n      margin: 0; }\n  :host /deep/ search-input input {\n    background: transparent; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/components/search-input/search-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchInputComponent = (function () {
    function SearchInputComponent() {
        this.search = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isInputShown = false;
    }
    SearchInputComponent.prototype.showInput = function () {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    };
    SearchInputComponent.prototype.hideInput = function () {
        this.isInputShown = false;
    };
    SearchInputComponent.prototype.onInput = function (val) {
        this.search.emit(val);
    };
    return SearchInputComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], SearchInputComponent.prototype, "input", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], SearchInputComponent.prototype, "search", void 0);
SearchInputComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-search-input',
        styles: [__webpack_require__("../../../../../src/app/@theme/components/search-input/search-input.component.scss")],
        template: "\n    <i class=\"control-icon ion ion-ios-search\"\n       (click)=\"showInput()\"></i>\n    <input placeholder=\"Type your search request here...\"\n           #input\n           [class.hidden]=\"!isInputShown\"\n           (blur)=\"hideInput()\"\n           (input)=\"onInput($event)\">\n  ",
    })
], SearchInputComponent);

var _a, _b;
//# sourceMappingURL=search-input.component.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/components/theme-settings/theme-settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) h6 {\n  margin-bottom: 0.5rem; }\n\n:host-context(.nb-theme-default) .settings-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 90%;\n  margin: 0 0 1rem; }\n  :host-context(.nb-theme-default) .settings-row a {\n    text-decoration: none;\n    font-size: 2.25rem;\n    color: #a4abb3; }\n    :host-context(.nb-theme-default) .settings-row a.selected {\n      color: #40dc7e; }\n\n:host-context(.nb-theme-cosmic) h6 {\n  margin-bottom: 0.5rem; }\n\n:host-context(.nb-theme-cosmic) .settings-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 90%;\n  margin: 0 0 1rem; }\n  :host-context(.nb-theme-cosmic) .settings-row a {\n    text-decoration: none;\n    font-size: 2.25rem;\n    color: #a1a1e5; }\n    :host-context(.nb-theme-cosmic) .settings-row a.selected {\n      color: #00d977; }\n    :host-context(.nb-theme-cosmic) .settings-row a.selected {\n      color: #00f9a6; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/components/theme-settings/theme-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_state_service__ = __webpack_require__("../../../../../src/app/@core/data/state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemeSettingsComponent = (function () {
    function ThemeSettingsComponent(stateService) {
        var _this = this;
        this.stateService = stateService;
        this.layouts = [];
        this.sidebars = [];
        this.stateService.getLayoutStates()
            .subscribe(function (layouts) { return _this.layouts = layouts; });
        this.stateService.getSidebarStates()
            .subscribe(function (sidebars) { return _this.sidebars = sidebars; });
    }
    ThemeSettingsComponent.prototype.layoutSelect = function (layout) {
        this.layouts = this.layouts.map(function (l) {
            l.selected = false;
            return l;
        });
        layout.selected = true;
        this.stateService.setLayoutState(layout);
        return false;
    };
    ThemeSettingsComponent.prototype.sidebarSelect = function (sidebars) {
        this.sidebars = this.sidebars.map(function (s) {
            s.selected = false;
            return s;
        });
        sidebars.selected = true;
        this.stateService.setSidebarState(sidebars);
        return false;
    };
    return ThemeSettingsComponent;
}());
ThemeSettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-theme-settings',
        styles: [__webpack_require__("../../../../../src/app/@theme/components/theme-settings/theme-settings.component.scss")],
        template: "\n    <h6>LAYOUTS</h6>\n    <div class=\"settings-row\">\n      <a *ngFor=\"let layout of layouts\"\n         href=\"#\"\n         [class.selected]=\"layout.selected\"\n         [attr.title]=\"layout.name\"\n         (click)=\"layoutSelect(layout)\">\n        <i [attr.class]=\"layout.icon\"></i>\n      </a>\n    </div>\n    <h6>SIDEBAR</h6>\n    <div class=\"settings-row\">\n      <a *ngFor=\"let sidebar of sidebars\"\n         href=\"#\"\n         [class.selected]=\"sidebar.selected\"\n         [attr.title]=\"sidebar.name\"\n         (click)=\"sidebarSelect(sidebar)\">\n        <i [attr.class]=\"sidebar.icon\"></i>\n      </a>\n    </div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_data_state_service__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_data_state_service__["a" /* StateService */]) === "function" && _a || Object])
], ThemeSettingsComponent);

var _a;
//# sourceMappingURL=theme-settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/components/theme-switcher/theme-switcher.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n  :host-context(.nb-theme-default) .theme-switch {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    cursor: pointer;\n    margin: 0; }\n    :host-context(.nb-theme-default) .theme-switch > span {\n      font-size: 1.125rem;\n      font-weight: 600;\n      transition: opacity 0.3s ease; }\n      :host-context(.nb-theme-default) .theme-switch > span.light {\n        color: #4b4b4b;\n        padding-right: 10px; }\n      :host-context(.nb-theme-default) .theme-switch > span.cosmic {\n        color: #a4abb3;\n        padding-left: 10px; }\n      :host-context(.nb-theme-default) .theme-switch > span:active {\n        opacity: 0.78; }\n  :host-context(.nb-theme-default) .switch {\n    position: relative;\n    display: inline-block;\n    width: 4rem;\n    height: 1.75rem;\n    margin: 0; }\n    :host-context(.nb-theme-default) .switch input {\n      display: none; }\n      :host-context(.nb-theme-default) .switch input:checked + .slider::before {\n        -webkit-transform: translateX(2.25rem);\n                transform: translateX(2.25rem); }\n    :host-context(.nb-theme-default) .switch .slider {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      border-radius: 1.75rem;\n      background-color: #ebeff5; }\n    :host-context(.nb-theme-default) .switch .slider::before {\n      position: absolute;\n      content: '';\n      height: 1.75rem;\n      width: 1.75rem;\n      border-radius: 50%;\n      background-color: #40dc7e;\n      transition: 0.2s;\n      box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-default) .light, :host-context(.nb-theme-default) .cosmic {\n      display: none; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-default) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; } }\n\n:host-context(.nb-theme-cosmic) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n  :host-context(.nb-theme-cosmic) .theme-switch {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    cursor: pointer;\n    margin: 0; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span {\n      font-size: 1.125rem;\n      font-weight: 600;\n      transition: opacity 0.3s ease; }\n      :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n        color: #d1d1ff;\n        padding-right: 10px; }\n      :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n        color: #a1a1e5;\n        padding-left: 10px; }\n      :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n        color: #a1a1e5; }\n      :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n        color: #ffffff; }\n      :host-context(.nb-theme-cosmic) .theme-switch > span:active {\n        opacity: 0.78; }\n  :host-context(.nb-theme-cosmic) .switch {\n    position: relative;\n    display: inline-block;\n    width: 4rem;\n    height: 1.75rem;\n    margin: 0; }\n    :host-context(.nb-theme-cosmic) .switch input {\n      display: none; }\n      :host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n        -webkit-transform: translateX(2.25rem);\n                transform: translateX(2.25rem); }\n    :host-context(.nb-theme-cosmic) .switch .slider {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      border-radius: 1.75rem;\n      background-color: #2f296b; }\n    :host-context(.nb-theme-cosmic) .switch .slider::before {\n      position: absolute;\n      content: '';\n      height: 1.75rem;\n      width: 1.75rem;\n      border-radius: 50%;\n      background-color: #00d977;\n      transition: 0.2s;\n      box-shadow: 0 0 0.25rem 0 rgba(161, 161, 229, 0.4);\n      background-image: linear-gradient(to right, #ad59ff, #7659ff); }\n  @media (max-width: 575px) {\n    :host-context(.nb-theme-cosmic) .light, :host-context(.nb-theme-cosmic) .cosmic {\n      display: none; } }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/components/theme-switcher/theme-switcher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeSwitcherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_utils_analytics_service__ = __webpack_require__("../../../../../src/app/@core/utils/analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nebular_auth_services_auth_service__ = __webpack_require__("../../../../@nebular/auth/services/auth.service.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThemeSwitcherComponent = (function () {
    function ThemeSwitcherComponent(themeService, nbAuthService, analyticsService) {
        this.themeService = themeService;
        this.nbAuthService = nbAuthService;
        this.analyticsService = analyticsService;
    }
    ThemeSwitcherComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.nbAuthService.loggedIn()) {
            this.toggleTheme(false);
        }
        else {
            this.toggleTheme(true);
        }
        this.themeService.getJsTheme()
            .subscribe(function (theme) { return _this.theme = theme; });
    };
    ThemeSwitcherComponent.prototype.toggleTheme = function (theme) {
        var boolTheme = this.boolToTheme(theme);
        this.themeService.changeTheme(boolTheme);
        this.analyticsService.trackEvent('switchTheme');
    };
    ThemeSwitcherComponent.prototype.currentBoolTheme = function () {
        return this.themeToBool(this.theme);
    };
    ThemeSwitcherComponent.prototype.isLoggedIn = function () {
        return this.nbAuthService.loggedIn();
    };
    ThemeSwitcherComponent.prototype.themeToBool = function (theme) {
        return theme.name === 'cosmic';
    };
    ThemeSwitcherComponent.prototype.boolToTheme = function (theme) {
        return theme ? 'cosmic' : 'default';
    };
    return ThemeSwitcherComponent;
}());
ThemeSwitcherComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-theme-switcher',
        styles: [__webpack_require__("../../../../../src/app/@theme/components/theme-switcher/theme-switcher.component.scss")],
        template: "\n    <label class=\"theme-switch\"  *ngIf=\"isLoggedIn()\">\n      <span class=\"light\">Light</span>\n      <div class=\"switch\">\n        <input type=\"checkbox\" [checked]=\"currentBoolTheme()\" (change)=\"toggleTheme(theme.checked)\" #theme>\n        <span class=\"slider\"></span>\n      </div>\n      <span class=\"cosmic\">Cosmic</span>\n    </label>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__nebular_auth_services_auth_service__["b" /* NbAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__nebular_auth_services_auth_service__["b" /* NbAuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__core_utils_analytics_service__["a" /* AnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_utils_analytics_service__["a" /* AnalyticsService */]) === "function" && _c || Object])
], ThemeSwitcherComponent);

var _a, _b, _c;
//# sourceMappingURL=theme-switcher.component.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/components/tiny-mce/tiny-mce.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TinyMCEComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TinyMCEComponent = (function () {
    function TinyMCEComponent(host) {
        this.host = host;
        this.editorKeyup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TinyMCEComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tinymce.init({
            target: this.host.nativeElement,
            plugins: ['link', 'paste', 'table'],
            skin_url: 'assets/skins/lightgray',
            setup: function (editor) {
                _this.editor = editor;
                editor.on('keyup', function () {
                    _this.editorKeyup.emit(editor.getContent());
                });
            },
            height: '320',
        });
    };
    TinyMCEComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    return TinyMCEComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TinyMCEComponent.prototype, "editorKeyup", void 0);
TinyMCEComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-tiny-mce',
        template: '',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], TinyMCEComponent);

var _a;
//# sourceMappingURL=tiny-mce.component.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/layouts/backend/backend.layout.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar {\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n  :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n  :host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n    :host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.375rem; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    transition: none; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .main-content {\n    padding: 0.75rem !important; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-default) .main-btn {\n    display: none; } }\n\n:host-context(.nb-theme-cosmic) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar {\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.5rem; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    transition: none; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) .main-content {\n    padding: 0.75rem !important; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-cosmic) .main-btn {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/layouts/backend/backend.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_state_service__ = __webpack_require__("../../../../../src/app/@core/data/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_withLatestFrom__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// TODO: move layouts into the framework
var BackendLayoutComponent = (function () {
    function BackendLayoutComponent(stateService, menuService, themeService, bpService, sidebarService) {
        var _this = this;
        this.stateService = stateService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.bpService = bpService;
        this.sidebarService = sidebarService;
        this.subMenu = [
            {
                title: 'PAGE LEVEL MENU',
                group: true,
            },
            {
                title: 'Buttons',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/buttons',
            },
            {
                title: 'Grid',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/grid',
            },
            {
                title: 'Icons',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/icons',
            },
            {
                title: 'Modals',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/modals',
            },
            {
                title: 'Typography',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/typography',
            },
            {
                title: 'Animated Searches',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/search-fields',
            },
            {
                title: 'Tabs',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/tabs',
            },
        ];
        this.layout = {};
        this.sidebar = {};
        this.layoutState$ = this.stateService.onLayoutState()
            .subscribe(function (layout) { return _this.layout = layout; });
        this.sidebarState$ = this.stateService.onSidebarState()
            .subscribe(function (sidebar) {
            _this.sidebar = sidebar;
        });
        var isBp = this.bpService.getByName('is');
        this.menuClick$ = this.menuService.onItemSelect()
            .withLatestFrom(this.themeService.onMediaQueryChange())
            .delay(20)
            .subscribe(function (_a) {
            var item = _a[0], _b = _a[1], bpFrom = _b[0], bpTo = _b[1];
            if (bpTo.width <= isBp.width) {
                _this.sidebarService.collapse('menu-sidebar');
            }
        });
    }
    BackendLayoutComponent.prototype.ngOnDestroy = function () {
        this.layoutState$.unsubscribe();
        this.sidebarState$.unsubscribe();
        this.menuClick$.unsubscribe();
    };
    return BackendLayoutComponent;
}());
BackendLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-backend-layout',
        styles: [__webpack_require__("../../../../../src/app/@theme/layouts/backend/backend.layout.scss")],
        template: "\n    <nb-layout [center]=\"layout.id === 'center-column'\" windowMode>\n      <nb-layout-header fixed>\n        <ngx-header [position]=\"sidebar.id === 'left' ? 'normal': 'inverse'\"></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\"\n                   tag=\"menu-sidebar\"\n                   responsive\n                   [right]=\"sidebar.id === 'right'\">\n        <nb-sidebar-header>\n          <a href=\"#\" class=\"btn btn-hero-success main-btn\">\n            <i class=\"ion ion-happy-outline\"></i> <span>Live Support</span>\n          </a>\n        </nb-sidebar-header>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"main-content\">\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-column left class=\"small\" *ngIf=\"layout.id === 'two-column' || layout.id === 'three-column'\">\n        <nb-menu [items]=\"subMenu\"></nb-menu>\n      </nb-layout-column>\n\n      <nb-layout-column right class=\"small\" *ngIf=\"layout.id === 'three-column'\">\n        <nb-menu [items]=\"subMenu\"></nb-menu>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n\n      <nb-sidebar class=\"settings-sidebar\"\n                   tag=\"settings-sidebar\"\n                   state=\"collapsed\"\n                   fixed\n                   [right]=\"sidebar.id !== 'right'\">\n        <ngx-theme-settings></ngx-theme-settings>\n      </nb-sidebar>\n    </nb-layout>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_data_state_service__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_data_state_service__["a" /* StateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["h" /* NbMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["h" /* NbMenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["f" /* NbMediaBreakpointsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["f" /* NbMediaBreakpointsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["l" /* NbSidebarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["l" /* NbSidebarService */]) === "function" && _e || Object])
], BackendLayoutComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=backend.layout.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/layouts/frontend/frontend.layout.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar {\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n  :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n  :host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n    :host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.375rem; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    transition: none; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .main-content {\n    padding: 0.75rem !important; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-default) .main-btn {\n    display: none; } }\n\n:host-context(.nb-theme-cosmic) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar {\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.5rem; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    transition: none; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) .main-content {\n    padding: 0.75rem !important; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-cosmic) .main-btn {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/layouts/frontend/frontend.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontendLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_state_service__ = __webpack_require__("../../../../../src/app/@core/data/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_withLatestFrom__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/withLatestFrom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// TODO: move layouts into the framework
var FrontendLayoutComponent = (function () {
    function FrontendLayoutComponent(stateService, menuService, themeService, bpService, sidebarService) {
        var _this = this;
        this.stateService = stateService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.bpService = bpService;
        this.sidebarService = sidebarService;
        this.subMenu = [
            {
                title: 'PAGE LEVEL MENU',
                group: true,
            },
            {
                title: 'Buttons',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/buttons',
            },
            {
                title: 'Grid',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/grid',
            },
            {
                title: 'Icons',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/icons',
            },
            {
                title: 'Modals',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/modals',
            },
            {
                title: 'Typography',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/typography',
            },
            {
                title: 'Animated Searches',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/search-fields',
            },
            {
                title: 'Tabs',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/tabs',
            },
        ];
        this.layout = {};
        this.sidebar = {};
        this.layoutState$ = this.stateService.onLayoutState()
            .subscribe(function (layout) { return _this.layout = layout; });
        this.sidebarState$ = this.stateService.onSidebarState()
            .subscribe(function (sidebar) {
            _this.sidebar = sidebar;
        });
        var isBp = this.bpService.getByName('is');
        this.menuClick$ = this.menuService.onItemSelect()
            .withLatestFrom(this.themeService.onMediaQueryChange())
            .delay(20)
            .subscribe(function (_a) {
            var item = _a[0], _b = _a[1], bpFrom = _b[0], bpTo = _b[1];
            if (bpTo.width <= isBp.width) {
                _this.sidebarService.collapse('menu-sidebar');
            }
        });
    }
    FrontendLayoutComponent.prototype.ngOnDestroy = function () {
        this.layoutState$.unsubscribe();
        this.sidebarState$.unsubscribe();
        this.menuClick$.unsubscribe();
    };
    return FrontendLayoutComponent;
}());
FrontendLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-frontend-layout',
        styles: [__webpack_require__("../../../../../src/app/@theme/layouts/frontend/frontend.layout.scss")],
        template: "\n    <nb-layout [center]=\"layout.id === 'center-column'\" windowMode>\n      <nb-layout-header fixed>\n        <ngx-header [position]=\"sidebar.id === 'left' ? 'normal': 'inverse'\"></ngx-header>\n      </nb-layout-header>\n\n      <nb-layout-column class=\"main-content\">\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-column left class=\"small\" *ngIf=\"layout.id === 'two-column' || layout.id === 'three-column'\">\n        <nb-menu [items]=\"subMenu\"></nb-menu>\n      </nb-layout-column>\n\n      <nb-layout-column right class=\"small\" *ngIf=\"layout.id === 'three-column'\">\n        <nb-menu [items]=\"subMenu\"></nb-menu>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n\n      <nb-sidebar class=\"settings-sidebar\"\n                   tag=\"settings-sidebar\"\n                   state=\"collapsed\"\n                   fixed\n                   [right]=\"sidebar.id !== 'right'\">\n        <ngx-theme-settings></ngx-theme-settings>\n      </nb-sidebar>\n    </nb-layout>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_data_state_service__["a" /* StateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_data_state_service__["a" /* StateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["h" /* NbMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["h" /* NbMenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["f" /* NbMediaBreakpointsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["f" /* NbMediaBreakpointsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["l" /* NbSidebarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["l" /* NbSidebarService */]) === "function" && _e || Object])
], FrontendLayoutComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=frontend.layout.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/layouts/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__one_column_one_column_layout__ = __webpack_require__("../../../../../src/app/@theme/layouts/one-column/one-column.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__one_column_one_column_layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__two_columns_two_columns_layout__ = __webpack_require__("../../../../../src/app/@theme/layouts/two-columns/two-columns.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__two_columns_two_columns_layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__three_columns_three_columns_layout__ = __webpack_require__("../../../../../src/app/@theme/layouts/three-columns/three-columns.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__three_columns_three_columns_layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backend_backend_layout__ = __webpack_require__("../../../../../src/app/@theme/layouts/backend/backend.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__backend_backend_layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__frontend_frontend_layout__ = __webpack_require__("../../../../../src/app/@theme/layouts/frontend/frontend.layout.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__frontend_frontend_layout__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/layouts/one-column/one-column.layout.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar {\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n  :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n  :host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n    :host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.375rem; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    transition: none; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .main-content {\n    padding: 0.75rem !important; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-default) .main-btn {\n    display: none; } }\n\n:host-context(.nb-theme-cosmic) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar {\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.5rem; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    transition: none; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) .main-content {\n    padding: 0.75rem !important; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-cosmic) .main-btn {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/layouts/one-column/one-column.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneColumnLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// TODO: move layouts into the framework
var OneColumnLayoutComponent = (function () {
    function OneColumnLayoutComponent() {
    }
    return OneColumnLayoutComponent;
}());
OneColumnLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-one-column-layout',
        styles: [__webpack_require__("../../../../../src/app/@theme/layouts/one-column/one-column.layout.scss")],
        template: "\n    <nb-layout>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive>\n        <nb-sidebar-header>\n          <a href=\"#\" class=\"btn btn-hero-success main-btn\">\n            <i class=\"ion ion-social-github\"></i> <span>Support Us</span>\n          </a>\n        </nb-sidebar-header>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ",
    })
], OneColumnLayoutComponent);

//# sourceMappingURL=one-column.layout.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/layouts/three-columns/three-columns.layout.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar {\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n  :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n  :host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n    :host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.375rem; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    transition: none; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .main-content {\n    padding: 0.75rem !important; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-default) .main-btn {\n    display: none; } }\n\n:host-context(.nb-theme-cosmic) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar {\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.5rem; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    transition: none; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) .main-content {\n    padding: 0.75rem !important; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-cosmic) .main-btn {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/layouts/three-columns/three-columns.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreeColumnsLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// TODO: move layouts into the framework
var ThreeColumnsLayoutComponent = (function () {
    function ThreeColumnsLayoutComponent() {
    }
    return ThreeColumnsLayoutComponent;
}());
ThreeColumnsLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-three-columns-layout',
        styles: [__webpack_require__("../../../../../src/app/@theme/layouts/three-columns/three-columns.layout.scss")],
        template: "\n    <nb-layout>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive >\n        <nb-sidebar-header>\n          <a href=\"#\" class=\"btn btn-hero-success main-btn\">\n            <i class=\"ion ion-social-github\"></i> <span>Support Us</span>\n          </a>\n        </nb-sidebar-header>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-column right>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n    </nb-layout>\n  ",
    })
], ThreeColumnsLayoutComponent);

//# sourceMappingURL=three-columns.layout.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/layouts/two-columns/two-columns.layout.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n\n:host-context(.nb-theme-default) nb-sidebar.settings-sidebar {\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n  :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n  :host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #ffffff;\n    transition: width 0.3s ease;\n    overflow: hidden; }\n    :host-context(.nb-theme-default) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n\n:host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.375rem; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-default) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    transition: none; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .main-content {\n    padding: 0.75rem !important; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-default) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-default) .main-btn {\n    display: none; } }\n\n:host-context(.nb-theme-cosmic) nb-layout-column.small {\n  -webkit-box-flex: 0.15 !important;\n      -ms-flex: 0.15 !important;\n          flex: 0.15 !important; }\n\n:host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar {\n  transition: width 0.3s ease;\n  width: 7.5rem;\n  overflow: hidden; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed {\n    width: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container {\n      width: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar.collapsed /deep/ .main-container .scrollable {\n        width: 7.5rem;\n        padding: 1.25rem; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container {\n    width: 7.5rem;\n    background: #3d3780;\n    transition: width 0.3s ease;\n    overflow: hidden;\n    background: #2f296b; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.settings-sidebar /deep/ .main-container .scrollable {\n      width: 7.5rem; }\n\n:host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n  margin-top: 2rem;\n  background: transparent; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n    height: calc(100vh - 4.75rem - 2rem) !important;\n    border-top-right-radius: 0.5rem; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ nb-sidebar-header {\n    padding-bottom: 0.5rem;\n    text-align: center; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn {\n    padding: 0.75rem 2.5rem;\n    margin-top: -2rem;\n    font-weight: bold;\n    transition: padding 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.48); }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i {\n      font-size: 2rem;\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      padding-left: 0.25rem; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn i, :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar .main-btn span {\n      vertical-align: middle; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted /deep/ nb-sidebar-header {\n    padding-left: 0;\n    padding-right: 0; }\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn {\n    width: 46px;\n    height: 44px;\n    padding: 0.375rem;\n    border-radius: 5px;\n    transition: none; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar.compacted .main-btn span {\n      display: none; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) .main-content {\n    padding: 0.75rem !important; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar {\n    margin-top: 0; }\n    :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container {\n      height: calc(100vh - 4.75rem) !important;\n      border-top-right-radius: 0; }\n      :host-context(.nb-theme-cosmic) nb-sidebar.menu-sidebar /deep/ .main-container .scrollable {\n        padding-top: 0; }\n  :host-context(.nb-theme-cosmic) .main-btn {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/@theme/layouts/two-columns/two-columns.layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwoColumnsLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// TODO: move layouts into the framework
var TwoColumnsLayoutComponent = (function () {
    function TwoColumnsLayoutComponent() {
    }
    return TwoColumnsLayoutComponent;
}());
TwoColumnsLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-two-columns-layout',
        styles: [__webpack_require__("../../../../../src/app/@theme/layouts/two-columns/two-columns.layout.scss")],
        template: "\n    <nb-layout>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive >\n        <nb-sidebar-header>\n          <a href=\"#\" class=\"btn btn-hero-success main-btn\">\n            <i class=\"ion ion-social-github\"></i> <span>Support Us</span>\n          </a>\n        </nb-sidebar-header>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-column right>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n\n    </nb-layout>\n  ",
    })
], TwoColumnsLayoutComponent);

//# sourceMappingURL=two-columns.layout.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/pipes/capitalize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (input) {
        return input && input.length
            ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase())
            : input;
    };
    return CapitalizePipe;
}());
CapitalizePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'ngxCapitalize' })
], CapitalizePipe);

//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/pipes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__capitalize_pipe__ = __webpack_require__("../../../../../src/app/@theme/pipes/capitalize.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__capitalize_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plural_pipe__ = __webpack_require__("../../../../../src/app/@theme/pipes/plural.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__plural_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__round_pipe__ = __webpack_require__("../../../../../src/app/@theme/pipes/round.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__round_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__timing_pipe__ = __webpack_require__("../../../../../src/app/@theme/pipes/timing.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__timing_pipe__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/pipes/plural.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluralPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PluralPipe = (function () {
    function PluralPipe() {
    }
    PluralPipe.prototype.transform = function (input, label, pluralLabel) {
        if (pluralLabel === void 0) { pluralLabel = ''; }
        input = input || 0;
        return input === 1
            ? input + " " + label
            : pluralLabel
                ? input + " " + pluralLabel
                : input + " " + label + "s";
    };
    return PluralPipe;
}());
PluralPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'ngxPlural' })
], PluralPipe);

//# sourceMappingURL=plural.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/pipes/round.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoundPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoundPipe = (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (input) {
        return Math.round(input);
    };
    return RoundPipe;
}());
RoundPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'ngxRound' })
], RoundPipe);

//# sourceMappingURL=round.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/pipes/timing.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimingPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimingPipe = (function () {
    function TimingPipe() {
    }
    TimingPipe.prototype.transform = function (time) {
        if (time) {
            var minutes = Math.floor(time / 60);
            var seconds = Math.floor(time % 60);
            return "" + this.initZero(minutes) + minutes + ":" + this.initZero(seconds) + seconds;
        }
        return '00:00';
    };
    TimingPipe.prototype.initZero = function (time) {
        return time < 10 ? '0' : '';
    };
    return TimingPipe;
}());
TimingPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'timing' })
], TimingPipe);

//# sourceMappingURL=timing.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/styles/theme.cosmic.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COSMIC_THEME; });
var COSMIC_THEME = {
    name: 'cosmic',
    base: 'default',
    variables: {
        temperature: [
            '#2ec7fe',
            '#31ffad',
            '#7bff24',
            '#fff024',
            '#f7bd59',
        ],
        solar: {
            gradientLeft: '#7bff24',
            gradientRight: '#2ec7fe',
            shadowColor: '#19977E',
            radius: ['70%', '90%'],
        },
        traffic: {
            colorBlack: '#000000',
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            lineBg: '#d1d1ff',
            lineShadowBlur: '14',
            itemColor: '#BEBBFF',
            itemBorderColor: '#ffffff',
            itemEmphasisBorderColor: '#ffffff',
            shadowLineDarkBg: '#655ABD',
            shadowLineShadow: 'rgba(33, 7, 77, 0.5)',
            gradFrom: 'rgba(118, 89, 255, 0.4)',
            gradTo: 'rgba(164, 84, 255, 0.5)',
        },
        electricity: {
            tooltipBg: 'rgba(0, 255, 170, 0.35)',
            tooltipLineColor: 'rgba(255, 255, 255, 0.1)',
            tooltipLineWidth: '1',
            tooltipBorderColor: '#00d977',
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#ffffff',
            tooltipFontWeight: 'normal',
            axisLineColor: 'rgba(161, 161 ,229, 0.3)',
            xAxisTextColor: '#a1a1e5',
            yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',
            itemBorderColor: '#ffffff',
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#00ffaa',
            lineGradTo: '#fff835',
            lineShadow: 'rgba(14, 16, 48, 0.4)',
            areaGradFrom: 'rgba(188, 92, 255, 0.5)',
            areaGradTo: 'rgba(188, 92, 255, 0)',
            shadowLineDarkBg: '#a695ff',
        },
        bubbleMap: {
            titleColor: '#ffffff',
            areaColor: '#2c2961',
            areaHoverColor: '#a1a1e5',
            areaBorderColor: '#654ddb',
        },
        echarts: {
            bg: '#3d3780',
            textColor: '#ffffff',
            axisLineColor: '#a1a1e5',
            splitLineColor: '#342e73',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#6a7985',
            areaOpacity: '1',
        },
        chartjs: {
            axisLineColor: '#a1a1e5',
            textColor: '#ffffff',
        },
    },
};
//# sourceMappingURL=theme.cosmic.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/styles/theme.default.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_THEME; });
var DEFAULT_THEME = {
    name: 'default',
    base: null,
    variables: {
        // Safari fix
        temperature: [
            '#42db7d',
            '#42db7d',
            '#42db7d',
            '#42db7d',
            '#42db7d',
        ],
        solar: {
            gradientLeft: '#42db7d',
            gradientRight: '#42db7d',
            shadowColor: 'rgba(0, 0, 0, 0)',
            radius: ['80%', '90%'],
        },
        traffic: {
            colorBlack: '#000000',
            tooltipBg: '#ffffff',
            tooltipBorderColor: '#c0c8d1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            lineBg: '#c0c8d1',
            lineShadowBlur: '1',
            itemColor: '#bcc3cc',
            itemBorderColor: '#bcc3cc',
            itemEmphasisBorderColor: '#42db7d',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: '#ebeef2',
            gradTo: '#ebeef2',
        },
        electricity: {
            tooltipBg: '#ffffff',
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: '#ebeef2',
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: '#2a2a2a',
            tooltipFontWeight: 'bolder',
            axisLineColor: 'rgba(0, 0, 0, 0)',
            xAxisTextColor: '#2a2a2a',
            yAxisSplitLine: '#ebeef2',
            itemBorderColor: '#42db7d',
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: '#42db7d',
            lineGradTo: '#42db7d',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: 'rgba(235, 238, 242, 0.5)',
            areaGradTo: 'rgba(235, 238, 242, 0.5)',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: '#484848',
            areaColor: '#dddddd',
            areaHoverColor: '#cccccc',
            areaBorderColor: '#ebeef2',
        },
        echarts: {
            bg: '#ffffff',
            textColor: '#484848',
            axisLineColor: '#bbbbbb',
            splitLineColor: '#ebeef2',
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: '#6a7985',
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: '#cccccc',
            textColor: '#484848',
        },
    },
};
//# sourceMappingURL=theme.default.js.map

/***/ }),

/***/ "../../../../../src/app/@theme/theme.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__("../../../../../src/app/@theme/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes__ = __webpack_require__("../../../../../src/app/@theme/pipes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layouts__ = __webpack_require__("../../../../../src/app/@theme/layouts/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_theme_default__ = __webpack_require__("../../../../../src/app/@theme/styles/theme.default.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_theme_cosmic__ = __webpack_require__("../../../../../src/app/@theme/styles/theme.cosmic.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var BASE_MODULES = [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"]];
var NB_MODULES = [
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["b" /* NbCardModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["e" /* NbLayoutModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["m" /* NbTabsetModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["i" /* NbRouteTabsetModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["g" /* NbMenuModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["p" /* NbUserModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["a" /* NbActionsModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["j" /* NbSearchModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["k" /* NbSidebarModule */],
    __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["c" /* NbCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */],
];
var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_5__components__["e" /* ThemeSwitcherComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["b" /* HeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["a" /* FooterComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["c" /* SearchInputComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["d" /* ThemeSettingsComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components__["f" /* TinyMCEComponent */],
    __WEBPACK_IMPORTED_MODULE_7__layouts__["c" /* OneColumnLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_7__layouts__["a" /* BackendLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_7__layouts__["b" /* FrontendLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_7__layouts__["d" /* ThreeColumnsLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_7__layouts__["e" /* TwoColumnsLayoutComponent */],
];
var PIPES = [
    __WEBPACK_IMPORTED_MODULE_6__pipes__["a" /* CapitalizePipe */],
    __WEBPACK_IMPORTED_MODULE_6__pipes__["b" /* PluralPipe */],
    __WEBPACK_IMPORTED_MODULE_6__pipes__["c" /* RoundPipe */],
    __WEBPACK_IMPORTED_MODULE_6__pipes__["d" /* TimingPipe */],
];
var NB_THEME_PROVIDERS = __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["n" /* NbThemeModule */].forRoot({
    name: 'cosmic',
}, [__WEBPACK_IMPORTED_MODULE_8__styles_theme_default__["a" /* DEFAULT_THEME */], __WEBPACK_IMPORTED_MODULE_9__styles_theme_cosmic__["a" /* COSMIC_THEME */]]).providers.concat(__WEBPACK_IMPORTED_MODULE_4__nebular_theme__["k" /* NbSidebarModule */].forRoot().providers, __WEBPACK_IMPORTED_MODULE_4__nebular_theme__["g" /* NbMenuModule */].forRoot().providers);
var ThemeModule = ThemeModule_1 = (function () {
    function ThemeModule() {
    }
    ThemeModule.forRoot = function () {
        return {
            ngModule: ThemeModule_1,
            providers: NB_THEME_PROVIDERS.slice(),
        };
    };
    return ThemeModule;
}());
ThemeModule = ThemeModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: BASE_MODULES.concat(NB_MODULES),
        exports: BASE_MODULES.concat(NB_MODULES, COMPONENTS, PIPES),
        declarations: COMPONENTS.concat(PIPES),
    })
], ThemeModule);

var ThemeModule_1;
//# sourceMappingURL=theme.module.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__ = __webpack_require__("../../../../../guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nebular_auth__ = __webpack_require__("../../../../@nebular/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'pages', component: __WEBPACK_IMPORTED_MODULE_5__pages_pages_component__["a" /* PagesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]],
        children: [{
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
            }, {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            }],
    },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
    {
        path: 'users',
        component: __WEBPACK_IMPORTED_MODULE_3__nebular_auth__["b" /* NbAuthComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_3__nebular_auth__["f" /* NbLoginComponent */],
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_3__nebular_auth__["f" /* NbLoginComponent */],
            },
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_3__nebular_auth__["h" /* NbRegisterComponent */],
            },
            {
                path: 'logout',
                component: __WEBPACK_IMPORTED_MODULE_3__nebular_auth__["g" /* NbLogoutComponent */],
            },
        ],
    },
    //  { path: '/', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages' },
];
var config = {
    useHash: true,
};
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(routes, config)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]],
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_analytics_service__ = __webpack_require__("../../../../../src/app/@core/utils/analytics.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */


var AppComponent = (function () {
    function AppComponent(analytics) {
        this.analytics = analytics;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.analytics.trackPageViews();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-app',
        template: '<router-outlet></router-outlet>',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_utils_analytics_service__["a" /* AnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_utils_analytics_service__["a" /* AnalyticsService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("../../../../../src/app/@core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__ = __webpack_require__("../../../../../guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pages_module__ = __webpack_require__("../../../../../src/app/pages/pages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__redisAPI_redisApi_service__ = __webpack_require__("../../../../../src/app/redisAPI/redisApi.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_12__pages_pages_module__["a" /* PagesModule */],
            __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__theme_theme_module__["a" /* ThemeModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */].forRoot(),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_common__["APP_BASE_HREF"], useValue: '/' },
            __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_13__redisAPI_redisApi_service__["a" /* RedisApiService */],
        ],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */],
    }];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]],
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-frontend-layout>\n  <router-outlet>\n    <p>\n      home works!\n    </p>\n\n  </router-outlet>\n</ngx-frontend-layout>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_routing_module__ = __webpack_require__("../../../../../src/app/home/home-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HOME_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */],
];
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__home_routing_module__["a" /* HomeRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__theme_theme_module__["a" /* ThemeModule */],
        ],
        declarations: HOME_COMPONENTS.slice(),
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card [size]=\"breakpoint.width >= breakpoints.xxxl || breakpoint.width < breakpoints.md ? 'large' : 'xlarge'\">\n  <nb-tabset fullWidth>\n    <nb-tab tabTitle=\"Contacts\">\n      <div class=\"contact\" *ngFor=\"let c of contacts\">\n        <nb-user [picture]=\"c.user.picture\" [name]=\"c.user.name\" [title]=\"c.type\" size=\"large\"></nb-user>\n        <i class=\"i-contact nb-phone\"></i>\n      </div>\n    </nb-tab>\n    <nb-tab tabTitle=\"Recent\">\n      <div class=\"contact\" *ngFor=\"let c of recent\">\n        <nb-user [picture]=\"c.user.picture\" [name]=\"c.user.name\" [title]=\"c.type\" size=\"large\"></nb-user>\n        <span class=\"time\">{{ c.time }}</span>\n      </div>\n    </nb-tab>\n  </nb-tabset>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/contacts/contacts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-tabset {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n:host-context(.nb-theme-default) nb-tab {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n  padding: 0; }\n\n:host-context(.nb-theme-default) .contact {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  color: #a4abb3;\n  padding: 1rem; }\n  :host-context(.nb-theme-default) .contact:not(:last-child) {\n    border-bottom: 1px solid #ebeef2; }\n\n:host-context(.nb-theme-default) .i-contact {\n  font-size: 2rem;\n  cursor: pointer; }\n\n:host-context(.nb-theme-default) .time {\n  font-size: 0.875rem;\n  font-weight: 300;\n  text-transform: uppercase; }\n\n:host-context(.nb-theme-default) nb-user /deep/ .info-container {\n  margin-left: 0.875rem; }\n\n:host-context(.nb-theme-default) nb-user /deep/ .user-name {\n  font-damily: Exo;\n  font-weight: 600;\n  color: #2a2a2a;\n  font-size: 1.25rem; }\n\n:host-context(.nb-theme-default) nb-user /deep/ .user-title {\n  font-size: 0.875rem;\n  font-weight: 300;\n  text-transform: uppercase; }\n\n:host-context(.nb-theme-cosmic) nb-tabset {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n:host-context(.nb-theme-cosmic) nb-tab {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n  padding: 0; }\n\n:host-context(.nb-theme-cosmic) .contact {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  color: #a1a1e5;\n  padding: 1rem; }\n  :host-context(.nb-theme-cosmic) .contact:not(:last-child) {\n    border-bottom: 1px solid #342e73; }\n\n:host-context(.nb-theme-cosmic) .i-contact {\n  font-size: 2rem;\n  cursor: pointer; }\n\n:host-context(.nb-theme-cosmic) .time {\n  font-size: 0.875rem;\n  font-weight: 300;\n  text-transform: uppercase; }\n\n:host-context(.nb-theme-cosmic) nb-user /deep/ .info-container {\n  margin-left: 0.875rem; }\n\n:host-context(.nb-theme-cosmic) nb-user /deep/ .user-name {\n  font-damily: Exo;\n  font-weight: 600;\n  color: #ffffff;\n  font-size: 1.25rem;\n  font-weight: 500; }\n\n:host-context(.nb-theme-cosmic) nb-user /deep/ .user-title {\n  font-size: 0.875rem;\n  font-weight: 300;\n  text-transform: uppercase; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_users_service__ = __webpack_require__("../../../../../src/app/@core/data/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactsComponent = (function () {
    function ContactsComponent(userService, themeService, breakpointService) {
        var _this = this;
        this.userService = userService;
        this.themeService = themeService;
        this.breakpointService = breakpointService;
        this.breakpoints = breakpointService.getBreakpointsMap();
        this.themeSubscription = themeService.onMediaQueryChange()
            .subscribe(function (_a) {
            var oldValue = _a[0], newValue = _a[1];
            _this.breakpoint = newValue;
        });
    }
    ContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.contacts = [
                { user: users.nick, type: 'mobile' },
                { user: users.eva, type: 'home' },
                { user: users.jack, type: 'mobile' },
                { user: users.lee, type: 'mobile' },
                { user: users.alan, type: 'home' },
                { user: users.kate, type: 'work' },
            ];
            _this.recent = [
                { user: users.alan, type: 'home', time: '9:12 pm' },
                { user: users.eva, type: 'home', time: '7:45 pm' },
                { user: users.nick, type: 'mobile', time: '5:29 pm' },
                { user: users.lee, type: 'mobile', time: '11:24 am' },
                { user: users.jack, type: 'mobile', time: '10:45 am' },
                { user: users.kate, type: 'work', time: '9:42 am' },
                { user: users.kate, type: 'work', time: '9:31 am' },
                { user: users.jack, type: 'mobile', time: '8:01 am' },
            ];
        });
    };
    ContactsComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-contacts',
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/contacts/contacts.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/dashboard/contacts/contacts.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_data_users_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_data_users_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["f" /* NbMediaBreakpointsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["f" /* NbMediaBreakpointsService */]) === "function" && _c || Object])
], ContactsComponent);

var _a, _b, _c;
//# sourceMappingURL=contacts.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xxxl-3 col-md-6\">\n    <ngx-status-card title=\"Light 1\" type=\"primary\">\n      <i class=\"nb-lightbulb\"></i>\n    </ngx-status-card>\n  </div>\n\n  <div class=\"col-xxxl-3 col-md-6\">\n    <ngx-status-card title=\"Light 2\" type=\"primary\">\n      <i class=\"nb-lightbulb\"></i>\n    </ngx-status-card>\n  </div>\n\n  <div class=\"col-xxxl-3 col-md-6\">\n    <ngx-status-card title=\"Hall Curtain\" type=\"primary\">\n      <i class=\"nb-roller-shades\"></i>\n    </ngx-status-card>\n  </div>\n<!--\n  <div class=\"col-xxxl-3 col-md-6\">\n    <ngx-status-card title=\"Coffee Maker\" type=\"warning\">\n      <i class=\"nb-coffee-maker\"></i>\n    </ngx-status-card>\n  </div>\n-->\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xxxl-3 col-xxl-4 col-lg-5 col-md-6\">\n    <ngx-temperature></ngx-temperature>\n  </div>\n  <div class=\"col-xxxl-3 col-xxl-4 col-lg-5 col-md-6\">\n    <ngx-temperature></ngx-temperature>\n  </div>\n  <div class=\"col-xxxl-3 col-xxl-4 col-md-5\">\n      <ngx-status-card title=\"Wireless Speaker\" type=\"warning\">\n        <i class=\"nb-audio\"></i>\n      </ngx-status-card>\n    <ngx-weather></ngx-weather>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xxxl-9 col-xl-12\">\n    <ngx-rooms></ngx-rooms>\n  </div>\n<!--\n  <div class=\"col-xxxl-3 col-xxl-4 col-lg-7 col-md-6\">\n    <ngx-contacts></ngx-contacts>\n  </div>\n-->\n</div>\n\n<div class=\"row\">\n  <!--\n<div class=\"col-xxxl-9 col-xxl-8 col-lg-7 col-md-6\">\n  <ngx-electricity></ngx-electricity>\n</div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-xxxl-3 col-xxl-4 col-lg-5 col-md-6\">\n    <ngx-solar [chartValue]=\"72\"></ngx-solar>\n\n    <ngx-kitten></ngx-kitten>\n  </div>\n\n  <div class=\"col-xxxl-3 col-xxl-4 col-md-5\">\n    <ngx-traffic></ngx-traffic>\n    <ngx-weather></ngx-weather>\n  </div>\n-->\n  <div class=\"col-xxxl-6 col-xxl-12 col-md-7\">\n    <ngx-security-cameras></ngx-security-cameras>\n  </div>\n\n  <div class=\"col-xxxl-3 col-xxl-4 col-lg-7 col-md-6\">\n    <ngx-status-card title=\"Cameras\" type=\"primary\">\n      <i class=\"ion-videocamera\"></i>\n    </ngx-status-card>\n    <ngx-contacts></ngx-contacts>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .solar-card nb-card-header {\n  border: none;\n  padding-bottom: 0; }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) ngx-traffic {\n    display: none; } }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) /deep/ nb-card.large-card {\n    height: 456px; } }\n\n:host-context(.nb-theme-cosmic) .solar-card nb-card-header {\n  border: none;\n  padding-bottom: 0; }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) ngx-traffic {\n    display: none; } }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) /deep/ nb-card.large-card {\n    height: 456px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-dashboard',
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.html"),
    })
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__status_card_status_card_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/status-card/status-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contacts_contacts_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rooms_rooms_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/rooms/rooms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rooms_room_selector_room_selector_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/rooms/room-selector/room-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__temperature_temperature_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/temperature/temperature.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__temperature_temperature_dragger_temperature_dragger_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__team_team_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__kitten_kitten_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/kitten/kitten.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__security_cameras_security_cameras_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/security-cameras/security-cameras.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__electricity_electricity_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/electricity/electricity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__electricity_electricity_chart_electricity_chart_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/electricity/electricity-chart/electricity-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__weather_weather_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/weather/weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__solar_solar_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/solar/solar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__rooms_player_player_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/rooms/player/player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__traffic_traffic_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/traffic/traffic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__traffic_traffic_chart_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/traffic/traffic-chart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__["a" /* AngularEchartsModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_4__status_card_status_card_component__["a" /* StatusCardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__temperature_temperature_dragger_temperature_dragger_component__["a" /* TemperatureDraggerComponent */],
            __WEBPACK_IMPORTED_MODULE_5__contacts_contacts_component__["a" /* ContactsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__rooms_room_selector_room_selector_component__["a" /* RoomSelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_8__temperature_temperature_component__["a" /* TemperatureComponent */],
            __WEBPACK_IMPORTED_MODULE_6__rooms_rooms_component__["a" /* RoomsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__team_team_component__["a" /* TeamComponent */],
            __WEBPACK_IMPORTED_MODULE_11__kitten_kitten_component__["a" /* KittenComponent */],
            __WEBPACK_IMPORTED_MODULE_12__security_cameras_security_cameras_component__["a" /* SecurityCamerasComponent */],
            __WEBPACK_IMPORTED_MODULE_13__electricity_electricity_component__["a" /* ElectricityComponent */],
            __WEBPACK_IMPORTED_MODULE_14__electricity_electricity_chart_electricity_chart_component__["a" /* ElectricityChartComponent */],
            __WEBPACK_IMPORTED_MODULE_15__weather_weather_component__["a" /* WeatherComponent */],
            __WEBPACK_IMPORTED_MODULE_17__rooms_player_player_component__["a" /* PlayerComponent */],
            __WEBPACK_IMPORTED_MODULE_16__solar_solar_component__["a" /* SolarComponent */],
            __WEBPACK_IMPORTED_MODULE_18__traffic_traffic_component__["a" /* TrafficComponent */],
            __WEBPACK_IMPORTED_MODULE_19__traffic_traffic_chart_component__["a" /* TrafficChartComponent */],
        ],
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/electricity/electricity-chart/electricity-chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) {\n  display: block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: relative; }\n  :host-context(.nb-theme-default) .echart {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n\n:host-context(.nb-theme-cosmic) {\n  display: block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: relative; }\n  :host-context(.nb-theme-cosmic) .echart {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/electricity/electricity-chart/electricity-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricityChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ElectricityChartComponent = (function () {
    function ElectricityChartComponent(theme) {
        this.theme = theme;
        var points = [490, 490, 495, 500, 505, 510, 520, 530, 550, 580, 630,
            720, 800, 840, 860, 870, 870, 860, 840, 800, 720, 200, 145, 130, 130,
            145, 200, 570, 635, 660, 670, 670, 660, 630, 580, 460, 380, 350, 340,
            340, 340, 340, 340, 340, 340, 340, 340];
        // const points = [];
        // let pointsCount = 100;
        // let min = -3;
        // let max = 3;
        // let xStep = (max - min) / pointsCount;
        //
        // for(let x = -3; x <= 3; x += xStep) {
        //   let res = x**3 - 5*x + 17;
        //   points.push(Math.round(res * 25));
        // }
        this.data = points.map(function (p, index) { return ({
            label: (index % 5 === 3) ? "" + Math.round(index / 5) : '',
            value: p,
        }); });
    }
    ElectricityChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().delay(1).subscribe(function (config) {
            var eTheme = config.variables.electricity;
            _this.option = {
                grid: {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 80,
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line',
                        lineStyle: {
                            color: eTheme.tooltipLineColor,
                            width: eTheme.tooltipLineWidth,
                        },
                    },
                    textStyle: {
                        color: eTheme.tooltipTextColor,
                        fontSize: 20,
                        fontWeight: eTheme.tooltipFontWeight,
                    },
                    position: 'top',
                    backgroundColor: eTheme.tooltipBg,
                    borderColor: eTheme.tooltipBorderColor,
                    borderWidth: 3,
                    formatter: '{c0} kWh',
                    extraCssText: eTheme.tooltipExtraCss,
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    offset: 25,
                    data: _this.data.map(function (i) { return i.label; }),
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        textStyle: {
                            color: eTheme.xAxisTextColor,
                            fontSize: 18,
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: eTheme.axisLineColor,
                            width: '2',
                        },
                    },
                },
                yAxis: {
                    boundaryGap: [0, '5%'],
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: eTheme.yAxisSplitLine,
                            width: '1',
                        },
                    },
                },
                series: [
                    {
                        type: 'line',
                        smooth: true,
                        symbolSize: 20,
                        itemStyle: {
                            normal: {
                                opacity: 0,
                            },
                            emphasis: {
                                color: '#ffffff',
                                borderColor: eTheme.itemBorderColor,
                                borderWidth: 2,
                                opacity: 1,
                            },
                        },
                        lineStyle: {
                            normal: {
                                width: eTheme.lineWidth,
                                type: eTheme.lineStyle,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: eTheme.lineGradFrom,
                                    }, {
                                        offset: 1,
                                        color: eTheme.lineGradTo,
                                    }]),
                                shadowColor: eTheme.lineShadow,
                                shadowBlur: 6,
                                shadowOffsetY: 12,
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: eTheme.areaGradFrom,
                                    }, {
                                        offset: 1,
                                        color: eTheme.areaGradTo,
                                    }]),
                            },
                        },
                        data: _this.data.map(function (i) { return i.value; }),
                    },
                    {
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        lineStyle: {
                            normal: {
                                width: eTheme.lineWidth,
                                type: eTheme.lineStyle,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: eTheme.lineGradFrom,
                                    }, {
                                        offset: 1,
                                        color: eTheme.lineGradTo,
                                    }]),
                                shadowColor: eTheme.shadowLineDarkBg,
                                shadowBlur: 14,
                                opacity: 1,
                            },
                        },
                        data: _this.data.map(function (i) { return i.value; }),
                    },
                ],
            };
        });
    };
    ElectricityChartComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return ElectricityChartComponent;
}());
ElectricityChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-electricity-chart',
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/electricity/electricity-chart/electricity-chart.component.scss")],
        template: "\n    <div echarts [options]=\"option\" class=\"echart\"></div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], ElectricityChartComponent);

var _a;
//# sourceMappingURL=electricity-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/electricity/electricity.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"large\">\n  <div class=\"consumption-table\">\n    <div class=\"table-header\">\n      <div>Electricity</div>\n      <div class=\"subtitle\">Consumption</div>\n    </div>\n\n    <nb-tabset fullWidth>\n      <nb-tab *ngFor=\"let year of data\" [tabTitle]=\"year.title\" [active]=\"year.active\">\n        <div class=\"stats-month\" *ngFor=\"let month of year.months\">\n          <div>\n            <span class=\"month\">{{ month.month }}</span>\n            <span class=\"delta\" [ngClass]=\"{ 'down': month.down }\">{{ month.delta }}</span>\n          </div>\n          <div class=\"results\">\n            <b>{{ month.kWatts }}</b> kWh / <b>{{ month.cost }}</b> USD\n          </div>\n        </div>\n      </nb-tab>\n    </nb-tabset>\n  </div>\n\n  <div class=\"chart-container\">\n    <div class=\"chart-header\">\n      <div class=\"header-stats\">\n        <div class=\"stats-block\">\n          <div class=\"subtitle\">Consumed</div>\n          <div>\n            <span class=\"value\">816</span>\n            <span class=\"unit\">kWh</span>\n          </div>\n        </div>\n\n        <div class=\"stats-block\">\n          <div class=\"subtitle\">Spent</div>\n          <div>\n            <span class=\"value\">291</span>\n            <span class=\"unit\">USD</span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"dropdown\" ngbDropdown>\n        <button type=\"button\" ngbDropdownToggle class=\"btn\"\n                [ngClass]=\"{ 'btn-outline-success': currentTheme == 'default', 'btn-primary': currentTheme != 'default'}\">\n          {{ type }}\n        </button>\n        <ul class=\"dropdown-menu\" ngbDropdownMenu>\n          <li class=\"dropdown-item\" *ngFor=\"let t of types\" (click)=\"type = t\">{{ t }}</li>\n        </ul>\n      </div>\n\n    </div>\n    <ngx-electricity-chart></ngx-electricity-chart>\n  </div>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/electricity/electricity.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: hidden; }\n\n:host-context(.nb-theme-default) .consumption-table {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 20rem;\n  height: 100%;\n  z-index: 2;\n  box-shadow: 0 2px 12px 0 #dfe3eb; }\n\n:host-context(.nb-theme-default) .table-header {\n  padding: 1.25rem;\n  border-bottom: 1px solid #ebeef2;\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n  color: #2a2a2a;\n  font-family: Exo;\n  font-size: 1.125rem;\n  font-weight: 600;\n  font-size: 1.25rem; }\n  :host-context(.nb-theme-default) .table-header h1 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .table-header h2 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .table-header h3 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .table-header h4 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .table-header h5 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .table-header h6 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .table-header .subtitle {\n    color: #a4abb3;\n    font-family: Roboto;\n    font-size: 1rem;\n    font-weight: 300; }\n\n:host-context(.nb-theme-default) nb-tabset /deep/ {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  :host-context(.nb-theme-default) nb-tabset /deep/ ul {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 1rem; }\n  :host-context(.nb-theme-default) nb-tabset /deep/ ul li a {\n    font-weight: 500;\n    padding: 0.75rem 1rem; }\n  :host-context(.nb-theme-default) nb-tabset /deep/ ul li.active {\n    position: relative;\n    background-color: #ebeff5;\n    border-radius: 0.375rem 0.375rem 0 0; }\n    :host-context(.nb-theme-default) nb-tabset /deep/ ul li.active::before {\n      position: absolute;\n      content: '';\n      width: 100%;\n      height: 5px;\n      border-radius: 2.5px;\n      bottom: 0;\n      left: 0;\n      background: #40dc7e; }\n    :host-context(.nb-theme-default) nb-tabset /deep/ ul li.active a {\n      font-size: 1.5rem; }\n    :host-context(.nb-theme-default) nb-tabset /deep/ ul li.active a::before {\n      display: none; }\n  :host-context(.nb-theme-default) nb-tabset /deep/ nb-tab {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow-y: auto; }\n\n:host-context(.nb-theme-default) .stats-month {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1.25rem;\n  color: #a4abb3; }\n  :host-context(.nb-theme-default) .stats-month:not(:first-child) {\n    border-top: 1px solid #ebeef2; }\n  :host-context(.nb-theme-default) .stats-month .month {\n    display: inline-block;\n    width: 2.75rem;\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 500;\n    color: #2a2a2a; }\n  :host-context(.nb-theme-default) .stats-month .delta {\n    position: relative;\n    display: inline-block;\n    padding-left: 1rem;\n    font-size: 0.75rem;\n    color: #ff6780; }\n    :host-context(.nb-theme-default) .stats-month .delta::before {\n      position: absolute;\n      content: '';\n      bottom: 3px;\n      left: 2px;\n      border-left: 5px solid transparent;\n      border-right: 5px solid transparent;\n      border-bottom: 8px solid #ff6780; }\n    :host-context(.nb-theme-default) .stats-month .delta.down {\n      color: #5de191; }\n      :host-context(.nb-theme-default) .stats-month .delta.down::before {\n        top: 3px;\n        border-top: 8px solid #5de191;\n        border-bottom: none; }\n  :host-context(.nb-theme-default) .stats-month .results {\n    font-size: 0.875rem;\n    font-weight: 300; }\n    :host-context(.nb-theme-default) .stats-month .results b {\n      font-family: Exo;\n      font-size: 1rem;\n      font-weight: 500;\n      color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .chart-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 100%;\n  background-image: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: hidden; }\n\n:host-context(.nb-theme-default) .chart-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1rem 1.75rem 1rem 1rem; }\n\n:host-context(.nb-theme-default) .header-stats {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n:host-context(.nb-theme-default) .stats-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #a4abb3;\n  padding: 0 1.5rem;\n  border-right: 1px solid #ebeef2; }\n  :host-context(.nb-theme-default) .stats-block .subtitle {\n    font-size: 1rem;\n    font-weight: 300; }\n  :host-context(.nb-theme-default) .stats-block .value {\n    font-family: Exo;\n    font-size: 1.5rem;\n    font-weight: 600;\n    color: #2a2a2a; }\n  :host-context(.nb-theme-default) .stats-block .unit {\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 300; }\n\n:host-context(.nb-theme-default) .dropdown {\n  min-width: 130px; }\n\n@media (max-width: 1599px) {\n  :host-context(.nb-theme-default) .stats-block {\n    border: none;\n    padding: 0 1rem; } }\n\n@media (min-width: 768px) and (max-width: 1399px) {\n  :host-context(.nb-theme-default) .consumption-table {\n    display: none; } }\n\n@media (max-width: 991px) {\n  :host-context(.nb-theme-default) .chart-header {\n    padding: 1rem; }\n  :host-context(.nb-theme-default) .dropdown {\n    min-width: 100px; }\n    :host-context(.nb-theme-default) .dropdown button {\n      padding-left: 0.75rem;\n      padding-right: 0.75rem; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-default) .consumption-table {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .stats-block {\n    padding: 0; }\n    :host-context(.nb-theme-default) .stats-block:first-child {\n      padding: 0 0.5rem; }\n    :host-context(.nb-theme-default) .stats-block .subtitle {\n      font-size: 1rem; }\n    :host-context(.nb-theme-default) .stats-block .value {\n      font-size: 1.5rem; }\n    :host-context(.nb-theme-default) .stats-block .unit {\n      display: none; } }\n\n:host-context(.nb-theme-cosmic) nb-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  overflow: hidden; }\n\n:host-context(.nb-theme-cosmic) .consumption-table {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 20rem;\n  height: 100%;\n  z-index: 2;\n  box-shadow: 0 8px 20px 0 rgba(40, 37, 89, 0.6); }\n\n:host-context(.nb-theme-cosmic) .table-header {\n  padding: 1.25rem;\n  border-bottom: 1px solid #342e73;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  color: #ffffff;\n  font-family: Exo;\n  font-size: 1.125rem;\n  font-weight: 500;\n  font-size: 1.25rem; }\n  :host-context(.nb-theme-cosmic) .table-header h1 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .table-header h2 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .table-header h3 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .table-header h4 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .table-header h5 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .table-header h6 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .table-header .subtitle {\n    color: #a1a1e5;\n    font-family: Roboto;\n    font-size: 1rem;\n    font-weight: 300; }\n\n:host-context(.nb-theme-cosmic) nb-tabset /deep/ {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 1rem; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li a {\n    font-weight: 500;\n    padding: 0.75rem 1rem; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li.active {\n    position: relative;\n    background-color: #2f296b;\n    border-radius: 0.5rem 0.5rem 0 0; }\n    :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li.active::before {\n      position: absolute;\n      content: '';\n      width: 100%;\n      height: 5px;\n      border-radius: 2.5px;\n      bottom: 0;\n      left: 0;\n      background: #00d977; }\n    :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li.active a {\n      font-size: 1.5rem; }\n    :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li.active a::before {\n      display: none; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ nb-tab {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow-y: auto; }\n\n:host-context(.nb-theme-cosmic) .stats-month {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1.25rem;\n  color: #a1a1e5; }\n  :host-context(.nb-theme-cosmic) .stats-month:not(:first-child) {\n    border-top: 1px solid #342e73; }\n  :host-context(.nb-theme-cosmic) .stats-month .month {\n    display: inline-block;\n    width: 2.75rem;\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 500;\n    color: #ffffff; }\n  :host-context(.nb-theme-cosmic) .stats-month .delta {\n    position: relative;\n    display: inline-block;\n    padding-left: 1rem;\n    font-size: 0.75rem;\n    color: #ff5680; }\n    :host-context(.nb-theme-cosmic) .stats-month .delta::before {\n      position: absolute;\n      content: '';\n      bottom: 3px;\n      left: 2px;\n      border-left: 5px solid transparent;\n      border-right: 5px solid transparent;\n      border-bottom: 8px solid #ff5680; }\n    :host-context(.nb-theme-cosmic) .stats-month .delta.down {\n      color: #26df8b; }\n      :host-context(.nb-theme-cosmic) .stats-month .delta.down::before {\n        top: 3px;\n        border-top: 8px solid #26df8b;\n        border-bottom: none; }\n  :host-context(.nb-theme-cosmic) .stats-month .results {\n    font-size: 0.875rem;\n    font-weight: 300; }\n    :host-context(.nb-theme-cosmic) .stats-month .results b {\n      font-family: Exo;\n      font-size: 1rem;\n      font-weight: 500;\n      color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .chart-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 100%;\n  background-image: radial-gradient(circle at 50% 50%, #423f8c, #302c6e);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: hidden; }\n\n:host-context(.nb-theme-cosmic) .chart-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1rem 1.75rem 1rem 1rem; }\n\n:host-context(.nb-theme-cosmic) .header-stats {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n:host-context(.nb-theme-cosmic) .stats-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #a1a1e5;\n  padding: 0 1.5rem;\n  border-right: 1px solid #342e73; }\n  :host-context(.nb-theme-cosmic) .stats-block .subtitle {\n    font-size: 1rem;\n    font-weight: 300; }\n  :host-context(.nb-theme-cosmic) .stats-block .value {\n    font-family: Exo;\n    font-size: 1.5rem;\n    font-weight: 600;\n    color: #ffffff; }\n  :host-context(.nb-theme-cosmic) .stats-block .unit {\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 300; }\n\n:host-context(.nb-theme-cosmic) .dropdown {\n  min-width: 130px; }\n\n:host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li.active {\n  background-color: #7659ff;\n  border-radius: 0.5rem; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul li.active::before {\n    display: none; }\n\n:host-context(.nb-theme-cosmic) .stats-block .value {\n  font-weight: 500; }\n\n@media (max-width: 1599px) {\n  :host-context(.nb-theme-cosmic) .stats-block {\n    border: none;\n    padding: 0 1rem; } }\n\n@media (min-width: 768px) and (max-width: 1399px) {\n  :host-context(.nb-theme-cosmic) .consumption-table {\n    display: none; } }\n\n@media (max-width: 991px) {\n  :host-context(.nb-theme-cosmic) .chart-header {\n    padding: 1rem; }\n  :host-context(.nb-theme-cosmic) .dropdown {\n    min-width: 100px; }\n    :host-context(.nb-theme-cosmic) .dropdown button {\n      padding-left: 0.75rem;\n      padding-right: 0.75rem; } }\n\n@media (max-width: 767px) {\n  :host-context(.nb-theme-cosmic) .consumption-table {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) .stats-block {\n    padding: 0; }\n    :host-context(.nb-theme-cosmic) .stats-block:first-child {\n      padding: 0 0.5rem; }\n    :host-context(.nb-theme-cosmic) .stats-block .subtitle {\n      font-size: 1rem; }\n    :host-context(.nb-theme-cosmic) .stats-block .value {\n      font-size: 1.5rem; }\n    :host-context(.nb-theme-cosmic) .stats-block .unit {\n      display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/electricity/electricity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectricityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_data_electricity_service__ = __webpack_require__("../../../../../src/app/@core/data/electricity.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ElectricityComponent = (function () {
    function ElectricityComponent(eService, themeService) {
        var _this = this;
        this.eService = eService;
        this.themeService = themeService;
        this.type = 'week';
        this.types = ['week', 'month', 'year'];
        this.data = eService.getData();
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    ElectricityComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return ElectricityComponent;
}());
ElectricityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-electricity',
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/electricity/electricity.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/dashboard/electricity/electricity.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_data_electricity_service__["a" /* ElectricityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_data_electricity_service__["a" /* ElectricityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _b || Object])
], ElectricityComponent);

var _a, _b;
//# sourceMappingURL=electricity.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/kitten/kitten.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"medium\">\n  <nb-card-body>\n    <div class=\"picture\" style.background-image=\"url('assets/images/kitten-{{currentTheme}}.png')\"></div>\n\n    <div class=\"details\">\n      <div class=\"title\">\n        React Native UI Kitten\n      </div>\n      <div class=\"description\">\n        React Native UI Kitten is a framework that contains a set of commonly used UI components styled in a similar way. The most awesome thing: you can change themes on the fly by just passing a different set of variables. 100% native. Give our kitten a try!\n      </div>\n    </div>\n  </nb-card-body>\n\n\n  <nb-card-footer>\n    <a href=\"https://akveo.github.io/react-native-ui-kitten\" target=\"_blank\">\n      <i class=\"ion-ios-world\"></i>\n    </a>\n    <a href=\"https://itunes.apple.com/us/app/kitten-tricks/id1246143230\" target=\"_blank\">\n      <i class=\"ion-social-apple\"></i>\n    </a>\n    <a href=\"https://play.google.com/store/apps/details?id=com.akveo.kittenTricks\" target=\"_blank\">\n      <i class=\"ion-social-android\"></i>\n    </a>\n    <a href=\"https://github.com/akveo/react-native-ui-kitten\" target=\"_blank\">\n      <i class=\"ion-social-github\"></i>\n    </a>\n  </nb-card-footer>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/kitten/kitten.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 0; }\n\n:host-context(.nb-theme-default) .picture {\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n:host-context(.nb-theme-default) .details {\n  padding: 1.25rem 1.25rem 0; }\n  :host-context(.nb-theme-default) .details .title {\n    font-family: Exo;\n    font-weight: 600;\n    color: #2a2a2a;\n    font-size: 1.5rem;\n    margin-bottom: 1rem; }\n  :host-context(.nb-theme-default) .details .description {\n    text-align: justify;\n    color: #4b4b4b;\n    font-weight: 300;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-height: calc(1rem * 8 * 1.25); }\n\n:host-context(.nb-theme-default) nb-card-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 0.75rem 0;\n  border: none; }\n  :host-context(.nb-theme-default) nb-card-footer a {\n    text-decoration: none;\n    color: #a4abb3; }\n    :host-context(.nb-theme-default) nb-card-footer a:hover {\n      color: #2a2a2a; }\n    :host-context(.nb-theme-default) nb-card-footer a i {\n      font-size: 1.75rem; }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 0; }\n\n:host-context(.nb-theme-cosmic) .picture {\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n:host-context(.nb-theme-cosmic) .details {\n  padding: 1.25rem 1.25rem 0; }\n  :host-context(.nb-theme-cosmic) .details .title {\n    font-family: Exo;\n    font-weight: 600;\n    color: #ffffff;\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    font-weight: 500; }\n  :host-context(.nb-theme-cosmic) .details .description {\n    text-align: justify;\n    color: #d1d1ff;\n    font-weight: 300;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-height: calc(1rem * 8 * 1.25); }\n\n:host-context(.nb-theme-cosmic) nb-card-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 0.75rem 0;\n  border: none; }\n  :host-context(.nb-theme-cosmic) nb-card-footer a {\n    text-decoration: none;\n    color: #a1a1e5; }\n    :host-context(.nb-theme-cosmic) nb-card-footer a:hover {\n      color: #ffffff; }\n    :host-context(.nb-theme-cosmic) nb-card-footer a i {\n      font-size: 1.75rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/kitten/kitten.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KittenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KittenComponent = (function () {
    function KittenComponent(themeService) {
        var _this = this;
        this.themeService = themeService;
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    KittenComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return KittenComponent;
}());
KittenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-kitten',
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/kitten/kitten.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/dashboard/kitten/kitten.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], KittenComponent);

var _a;
//# sourceMappingURL=kitten.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/rooms/player/player.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">My Playlist</div>\n\n<div class=\"body\">\n\n  <div class=\"track-info\">\n    <div class=\"cover\" style.background-image=\"url('{{track.cover}}')\"></div>\n    <div class=\"details\">\n      <h4>{{ track.name }}</h4>\n      <span>{{ track.artist }}</span>\n    </div>\n  </div>\n\n  <div class=\"progress-wrap\">\n    <input type=\"range\" class=\"progress\" [value]=\"getProgress()\" min=\"0\" max=\"100\" step=\"0.01\"\n           (input)=\"setProgress(duration.value)\" #duration>\n    <div class=\"progress-foreground\" [style.width.%]=\"getProgress()\"></div>\n  </div>\n\n  <div class=\"timing\">\n    <small class=\"current\">{{ player.currentTime | timing }}</small>\n    <small class=\"remaining\">- {{ player.duration - player.currentTime | timing }}</small>\n  </div>\n\n  <div class=\"controls\">\n    <i class=\"nb-shuffle shuffle\" [class.active]=\"shuffle\" (click)=\"toggleShuffle()\"></i>\n    <i class=\"nb-skip-backward prev\" (click)=\"prev()\"></i>\n    <i class=\"play\" [class.nb-play]=\"player.paused\" [class.nb-pause]=\"!player.paused\" (click)=\"playPause()\"></i>\n    <i class=\"nb-skip-forward next\" (click)=\"next()\"></i>\n    <i class=\"nb-loop loop\" [class.active]=\"player.loop\" (click)=\"toggleLoop()\"></i>\n  </div>\n\n</div>\n\n<div class=\"footer\">\n\n  <div class=\"volume\">\n    <i class=\"nb-volume-mute\"></i>\n    <div class=\"progress-wrap\">\n      <input type=\"range\" class=\"progress\" [value]=\"getVolume()\" max=\"100\"\n             (input)=\"setVolume(volume.value)\" #volume>\n      <div class=\"progress-foreground\" [style.width.%]=\"getVolume()\"></div>\n    </div>\n    <i class=\"nb-volume-high\"></i>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/rooms/player/player.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 100%; }\n  :host-context(.nb-theme-default) .header {\n    padding: 1.25rem;\n    border-bottom: 1px solid #ebeef2;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    color: #2a2a2a;\n    font-family: Exo;\n    font-size: 1.125rem;\n    font-weight: 600; }\n    :host-context(.nb-theme-default) .header h1 {\n      margin: 0; }\n    :host-context(.nb-theme-default) .header h2 {\n      margin: 0; }\n    :host-context(.nb-theme-default) .header h3 {\n      margin: 0; }\n    :host-context(.nb-theme-default) .header h4 {\n      margin: 0; }\n    :host-context(.nb-theme-default) .header h5 {\n      margin: 0; }\n    :host-context(.nb-theme-default) .header h6 {\n      margin: 0; }\n  :host-context(.nb-theme-default) .body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  :host-context(.nb-theme-default) .footer {\n    padding: 1.25rem;\n    border-top: 1px solid #ebeef2; }\n  :host-context(.nb-theme-default) .track-info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 1.25rem; }\n    :host-context(.nb-theme-default) .track-info .cover {\n      border-radius: 0.1875rem;\n      background-size: cover;\n      background-position: center;\n      background-repeat: no-repeat;\n      width: 10rem;\n      height: 10rem; }\n    :host-context(.nb-theme-default) .track-info .details {\n      text-align: center;\n      padding-top: 1.5rem; }\n      :host-context(.nb-theme-default) .track-info .details span {\n        color: #a4abb3; }\n  :host-context(.nb-theme-default) .progress-wrap {\n    position: relative;\n    height: 1rem; }\n    :host-context(.nb-theme-default) .progress-wrap .progress-foreground {\n      background-color: #40dc7e;\n      height: 2px;\n      position: absolute;\n      margin-top: calc(0.75rem - 1px);\n      width: 100px; }\n    :host-context(.nb-theme-default) .progress-wrap .progress {\n      -webkit-appearance: none;\n      width: 100%;\n      background: transparent;\n      height: 1.5rem;\n      outline: none;\n      position: absolute; }\n      :host-context(.nb-theme-default) .progress-wrap .progress::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #40dc7e;\n        cursor: pointer;\n        margin-top: calc(-0.5rem + 1px);\n        border: none; }\n      :host-context(.nb-theme-default) .progress-wrap .progress::-moz-range-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #40dc7e;\n        cursor: pointer;\n        margin-top: calc(-0.5rem + 1px);\n        border: none; }\n      :host-context(.nb-theme-default) .progress-wrap .progress::-ms-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #40dc7e;\n        cursor: pointer;\n        margin-top: calc(-0.5rem + 1px);\n        border: none; }\n      :host-context(.nb-theme-default) .progress-wrap .progress::-webkit-slider-runnable-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n        background: #ebeef2; }\n      :host-context(.nb-theme-default) .progress-wrap .progress::-moz-range-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n        background: #ebeef2; }\n      :host-context(.nb-theme-default) .progress-wrap .progress::-ms-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n        background: #ebeef2; }\n  :host-context(.nb-theme-default) .timing {\n    padding-top: 0.5rem;\n    margin: 0 0.5rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    color: #a4abb3; }\n  :host-context(.nb-theme-default) .controls {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 0.25rem 2rem 1rem;\n    max-width: 400px;\n    width: 100%;\n    margin: 0 auto; }\n    :host-context(.nb-theme-default) .controls i {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      cursor: pointer; }\n    :host-context(.nb-theme-default) .controls .shuffle, :host-context(.nb-theme-default) .controls .loop {\n      font-size: 1.5rem;\n      color: #a4abb3; }\n      :host-context(.nb-theme-default) .controls .shuffle.active, :host-context(.nb-theme-default) .controls .loop.active {\n        color: #40dc7e; }\n    :host-context(.nb-theme-default) .controls .prev, :host-context(.nb-theme-default) .controls .next {\n      width: 3.5rem;\n      height: 3.5rem;\n      border: 2px solid #ebeef2;\n      border-radius: 50%;\n      font-size: 1.75rem; }\n    :host-context(.nb-theme-default) .controls .play {\n      font-size: 2rem; }\n  :host-context(.nb-theme-default) .volume {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin: 0 auto;\n    position: relative;\n    max-width: 400px; }\n    :host-context(.nb-theme-default) .volume i {\n      font-size: 1.5rem;\n      margin: 0.25rem;\n      color: #a4abb3; }\n    :host-context(.nb-theme-default) .volume .progress-wrap {\n      height: 2.25rem;\n      margin: 0;\n      width: 80%; }\n      :host-context(.nb-theme-default) .volume .progress-wrap .progress-foreground {\n        margin-top: calc(1rem + 1px);\n        z-index: 0; }\n      :host-context(.nb-theme-default) .volume .progress-wrap .progress {\n        height: 2.25rem; }\n        :host-context(.nb-theme-default) .volume .progress-wrap .progress::-webkit-slider-thumb {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          width: 1.5rem;\n          height: 1.5rem;\n          background-color: #ffffff;\n          box-shadow: 0 0.125rem 0.5rem 0 rgba(164, 171, 179, 0.4);\n          border: solid 1px rgba(164, 171, 179, 0.4);\n          margin-top: calc(-0.875rem + 1px);\n          position: relative;\n          z-index: 10; }\n        :host-context(.nb-theme-default) .volume .progress-wrap .progress::-moz-range-thumb {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          width: 1.5rem;\n          height: 1.5rem;\n          background-color: #ffffff;\n          box-shadow: 0 0.125rem 0.5rem 0 rgba(164, 171, 179, 0.4);\n          border: solid 1px rgba(164, 171, 179, 0.4);\n          margin-top: calc(-0.875rem + 1px);\n          position: relative;\n          z-index: 10; }\n        :host-context(.nb-theme-default) .volume .progress-wrap .progress::-ms-thumb {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          width: 1.5rem;\n          height: 1.5rem;\n          background-color: #ffffff;\n          box-shadow: 0 0.125rem 0.5rem 0 rgba(164, 171, 179, 0.4);\n          border: solid 1px rgba(164, 171, 179, 0.4);\n          margin-top: calc(-0.875rem + 1px);\n          position: relative;\n          z-index: 10; }\n  :host-context(.nb-theme-default).collapsed {\n    border: none;\n    height: 4.5rem; }\n    :host-context(.nb-theme-default).collapsed .header {\n      display: none; }\n    :host-context(.nb-theme-default).collapsed .body {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding: 0; }\n    :host-context(.nb-theme-default).collapsed .footer {\n      display: none; }\n    :host-context(.nb-theme-default).collapsed .track-info {\n      height: 4.5rem;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      padding: 0;\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none; }\n      :host-context(.nb-theme-default).collapsed .track-info .cover {\n        height: 4.5rem;\n        width: 4.5rem;\n        border-radius: 0 0 0 0.375rem;\n        -webkit-box-flex: 0;\n            -ms-flex: none;\n                flex: none; }\n      :host-context(.nb-theme-default).collapsed .track-info .details {\n        margin-left: 0.875rem;\n        text-align: left;\n        padding: 0; }\n        :host-context(.nb-theme-default).collapsed .track-info .details h4 {\n          margin-bottom: 0.125rem; }\n    :host-context(.nb-theme-default).collapsed .progress-wrap {\n      width: calc(100% - 6rem);\n      -ms-flex-item-align: start;\n          align-self: flex-start;\n      position: absolute;\n      left: 0;\n      margin-top: calc(-0.75rem + 1px);\n      margin-left: calc(4.5rem + 0.75rem); }\n    :host-context(.nb-theme-default).collapsed .timing {\n      display: none; }\n    :host-context(.nb-theme-default).collapsed .controls {\n      padding: 0 1rem 0 0;\n      max-width: inherit;\n      width: inherit;\n      margin: 0; }\n      :host-context(.nb-theme-default).collapsed .controls i {\n        width: inherit;\n        height: inherit; }\n      :host-context(.nb-theme-default).collapsed .controls .prev, :host-context(.nb-theme-default).collapsed .controls .shuffle, :host-context(.nb-theme-default).collapsed .controls .loop {\n        display: none; }\n      :host-context(.nb-theme-default).collapsed .controls .play, :host-context(.nb-theme-default).collapsed .controls .next {\n        font-size: 2rem;\n        border: none; }\n    :host-context(.nb-theme-default).collapsed .volume {\n      display: none; }\n    @media (max-width: 767px) {\n      :host-context(.nb-theme-default).collapsed .track-info .details h4 {\n        font-size: 1.25rem; }\n      :host-context(.nb-theme-default).collapsed .track-info .details span {\n        font-size: 0.875rem; } }\n    @media (max-width: 575px) {\n      :host-context(.nb-theme-default).collapsed .track-info .details h4 {\n        font-size: 1rem; }\n      :host-context(.nb-theme-default).collapsed .track-info .details span {\n        font-size: 0.75rem;\n        display: inline-block;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-height: calc(0.75rem * 1.25); } }\n\n:host-context(.nb-theme-cosmic) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 100%; }\n  :host-context(.nb-theme-cosmic) .header {\n    padding: 1.25rem;\n    border-bottom: 1px solid #342e73;\n    border-top-left-radius: 0.5rem;\n    border-top-right-radius: 0.5rem;\n    color: #ffffff;\n    font-family: Exo;\n    font-size: 1.125rem;\n    font-weight: 500; }\n    :host-context(.nb-theme-cosmic) .header h1 {\n      margin: 0; }\n    :host-context(.nb-theme-cosmic) .header h2 {\n      margin: 0; }\n    :host-context(.nb-theme-cosmic) .header h3 {\n      margin: 0; }\n    :host-context(.nb-theme-cosmic) .header h4 {\n      margin: 0; }\n    :host-context(.nb-theme-cosmic) .header h5 {\n      margin: 0; }\n    :host-context(.nb-theme-cosmic) .header h6 {\n      margin: 0; }\n  :host-context(.nb-theme-cosmic) .body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  :host-context(.nb-theme-cosmic) .footer {\n    padding: 1.25rem;\n    border-top: 1px solid #342e73; }\n  :host-context(.nb-theme-cosmic) .track-info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .track-info .cover {\n      border-radius: 0.25rem;\n      background-size: cover;\n      background-position: center;\n      background-repeat: no-repeat;\n      width: 10rem;\n      height: 10rem; }\n    :host-context(.nb-theme-cosmic) .track-info .details {\n      text-align: center;\n      padding-top: 1.5rem; }\n      :host-context(.nb-theme-cosmic) .track-info .details span {\n        color: #a1a1e5; }\n  :host-context(.nb-theme-cosmic) .progress-wrap {\n    position: relative;\n    height: 1rem; }\n    :host-context(.nb-theme-cosmic) .progress-wrap .progress-foreground {\n      background-color: #00d977;\n      height: 2px;\n      position: absolute;\n      margin-top: calc(0.75rem - 1px);\n      width: 100px;\n      background-color: #00f9a6; }\n    :host-context(.nb-theme-cosmic) .progress-wrap .progress {\n      -webkit-appearance: none;\n      width: 100%;\n      background: transparent;\n      height: 1.5rem;\n      outline: none;\n      position: absolute; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #00d977;\n        cursor: pointer;\n        margin-top: calc(-0.5rem + 1px);\n        border: none; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-moz-range-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #00d977;\n        cursor: pointer;\n        margin-top: calc(-0.5rem + 1px);\n        border: none; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-ms-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #00d977;\n        cursor: pointer;\n        margin-top: calc(-0.5rem + 1px);\n        border: none; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-webkit-slider-runnable-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n        background: #342e73; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-moz-range-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n        background: #342e73; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-ms-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n        background: #342e73; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        background: #00f9a6; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-moz-range-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        background: #00f9a6; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-ms-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        background: #00f9a6; }\n  :host-context(.nb-theme-cosmic) .timing {\n    padding-top: 0.5rem;\n    margin: 0 0.5rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    color: #a1a1e5; }\n  :host-context(.nb-theme-cosmic) .controls {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 0.25rem 2rem 1rem;\n    max-width: 400px;\n    width: 100%;\n    margin: 0 auto; }\n    :host-context(.nb-theme-cosmic) .controls i {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      cursor: pointer; }\n    :host-context(.nb-theme-cosmic) .controls .shuffle, :host-context(.nb-theme-cosmic) .controls .loop {\n      font-size: 1.5rem;\n      color: #a1a1e5; }\n      :host-context(.nb-theme-cosmic) .controls .shuffle.active, :host-context(.nb-theme-cosmic) .controls .loop.active {\n        color: #00d977;\n        color: #00f9a6; }\n    :host-context(.nb-theme-cosmic) .controls .prev, :host-context(.nb-theme-cosmic) .controls .next {\n      width: 3.5rem;\n      height: 3.5rem;\n      border: 2px solid #342e73;\n      border-radius: 50%;\n      font-size: 1.75rem; }\n    :host-context(.nb-theme-cosmic) .controls .play {\n      font-size: 2rem; }\n  :host-context(.nb-theme-cosmic) .volume {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin: 0 auto;\n    position: relative;\n    max-width: 400px; }\n    :host-context(.nb-theme-cosmic) .volume i {\n      font-size: 1.5rem;\n      margin: 0.25rem;\n      color: #a1a1e5; }\n    :host-context(.nb-theme-cosmic) .volume .progress-wrap {\n      height: 2.25rem;\n      margin: 0;\n      width: 80%; }\n      :host-context(.nb-theme-cosmic) .volume .progress-wrap .progress-foreground {\n        margin-top: calc(1rem + 1px);\n        z-index: 0; }\n      :host-context(.nb-theme-cosmic) .volume .progress-wrap .progress {\n        height: 2.25rem; }\n        :host-context(.nb-theme-cosmic) .volume .progress-wrap .progress::-webkit-slider-thumb {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          width: 1.5rem;\n          height: 1.5rem;\n          background-color: #ffffff;\n          box-shadow: 0 0.125rem 0.5rem 0 rgba(161, 161, 229, 0.4);\n          border: solid 1px rgba(161, 161, 229, 0.4);\n          margin-top: calc(-0.875rem + 1px);\n          position: relative;\n          z-index: 10; }\n        :host-context(.nb-theme-cosmic) .volume .progress-wrap .progress::-moz-range-thumb {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          width: 1.5rem;\n          height: 1.5rem;\n          background-color: #ffffff;\n          box-shadow: 0 0.125rem 0.5rem 0 rgba(161, 161, 229, 0.4);\n          border: solid 1px rgba(161, 161, 229, 0.4);\n          margin-top: calc(-0.875rem + 1px);\n          position: relative;\n          z-index: 10; }\n        :host-context(.nb-theme-cosmic) .volume .progress-wrap .progress::-ms-thumb {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          width: 1.5rem;\n          height: 1.5rem;\n          background-color: #ffffff;\n          box-shadow: 0 0.125rem 0.5rem 0 rgba(161, 161, 229, 0.4);\n          border: solid 1px rgba(161, 161, 229, 0.4);\n          margin-top: calc(-0.875rem + 1px);\n          position: relative;\n          z-index: 10; }\n  :host-context(.nb-theme-cosmic).collapsed {\n    border: none;\n    height: 4.5rem; }\n    :host-context(.nb-theme-cosmic).collapsed .header {\n      display: none; }\n    :host-context(.nb-theme-cosmic).collapsed .body {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding: 0; }\n    :host-context(.nb-theme-cosmic).collapsed .footer {\n      display: none; }\n    :host-context(.nb-theme-cosmic).collapsed .track-info {\n      height: 4.5rem;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      padding: 0;\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none; }\n      :host-context(.nb-theme-cosmic).collapsed .track-info .cover {\n        height: 4.5rem;\n        width: 4.5rem;\n        border-radius: 0 0 0 0.5rem;\n        -webkit-box-flex: 0;\n            -ms-flex: none;\n                flex: none; }\n      :host-context(.nb-theme-cosmic).collapsed .track-info .details {\n        margin-left: 0.875rem;\n        text-align: left;\n        padding: 0; }\n        :host-context(.nb-theme-cosmic).collapsed .track-info .details h4 {\n          margin-bottom: 0.125rem; }\n    :host-context(.nb-theme-cosmic).collapsed .progress-wrap {\n      width: calc(100% - 6rem);\n      -ms-flex-item-align: start;\n          align-self: flex-start;\n      position: absolute;\n      left: 0;\n      margin-top: calc(-0.75rem + 1px);\n      margin-left: calc(4.5rem + 0.75rem); }\n    :host-context(.nb-theme-cosmic).collapsed .timing {\n      display: none; }\n    :host-context(.nb-theme-cosmic).collapsed .controls {\n      padding: 0 1rem 0 0;\n      max-width: inherit;\n      width: inherit;\n      margin: 0; }\n      :host-context(.nb-theme-cosmic).collapsed .controls i {\n        width: inherit;\n        height: inherit; }\n      :host-context(.nb-theme-cosmic).collapsed .controls .prev, :host-context(.nb-theme-cosmic).collapsed .controls .shuffle, :host-context(.nb-theme-cosmic).collapsed .controls .loop {\n        display: none; }\n      :host-context(.nb-theme-cosmic).collapsed .controls .play, :host-context(.nb-theme-cosmic).collapsed .controls .next {\n        font-size: 2rem;\n        border: none; }\n    :host-context(.nb-theme-cosmic).collapsed .volume {\n      display: none; }\n    @media (max-width: 767px) {\n      :host-context(.nb-theme-cosmic).collapsed .track-info .details h4 {\n        font-size: 1.25rem; }\n      :host-context(.nb-theme-cosmic).collapsed .track-info .details span {\n        font-size: 0.875rem; } }\n    @media (max-width: 575px) {\n      :host-context(.nb-theme-cosmic).collapsed .track-info .details h4 {\n        font-size: 1rem; }\n      :host-context(.nb-theme-cosmic).collapsed .track-info .details span {\n        font-size: 0.75rem;\n        display: inline-block;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-height: calc(0.75rem * 1.25); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/rooms/player/player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_player_service__ = __webpack_require__("../../../../../src/app/@core/data/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerComponent = (function () {
    function PlayerComponent(playerService) {
        this.playerService = playerService;
        this.track = this.playerService.random();
        this.createPlayer();
    }
    PlayerComponent.prototype.ngOnDestroy = function () {
        this.player.pause();
        this.player.src = '';
        this.player.load();
    };
    PlayerComponent.prototype.prev = function () {
        if (!this.player.loop) {
            if (this.shuffle) {
                this.track = this.playerService.random();
            }
            else {
                this.track = this.playerService.prev();
            }
        }
        this.reload();
    };
    PlayerComponent.prototype.next = function () {
        if (!this.player.loop) {
            if (this.shuffle) {
                this.track = this.playerService.random();
            }
            else {
                this.track = this.playerService.next();
            }
        }
        this.reload();
    };
    PlayerComponent.prototype.playPause = function () {
        if (this.player.paused) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    };
    PlayerComponent.prototype.toggleShuffle = function () {
        this.shuffle = !this.shuffle;
    };
    PlayerComponent.prototype.toggleLoop = function () {
        this.player.loop = !this.player.loop;
    };
    PlayerComponent.prototype.setVolume = function (volume) {
        this.player.volume = volume / 100;
    };
    PlayerComponent.prototype.getVolume = function () {
        return this.player.volume * 100;
    };
    PlayerComponent.prototype.setProgress = function (duration) {
        this.player.currentTime = this.player.duration * duration / 100;
    };
    PlayerComponent.prototype.getProgress = function () {
        return this.player.currentTime / this.player.duration * 100 || 0;
    };
    PlayerComponent.prototype.createPlayer = function () {
        var _this = this;
        this.player = new Audio();
        this.player.onended = function () { return _this.next(); };
        this.setTrack();
    };
    PlayerComponent.prototype.reload = function () {
        this.setTrack();
        this.player.play();
    };
    PlayerComponent.prototype.setTrack = function () {
        this.player.src = this.track.url;
        this.player.load();
    };
    return PlayerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.collapsed'),
    __metadata("design:type", Boolean)
], PlayerComponent.prototype, "collapsed", void 0);
PlayerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-player',
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/rooms/player/player.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/dashboard/rooms/player/player.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_data_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_data_player_service__["a" /* PlayerService */]) === "function" && _a || Object])
], PlayerComponent);

var _a;
//# sourceMappingURL=player.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/rooms/room-selector/room-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">Room Management</div>\n<div class=\"room-selector\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n       [attr.viewBox]=\"viewBox\" preserveAspectRatio=\"xMidYMid\">\n    <defs>\n\n      <filter id=\"f2\" x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\">\n        <feGaussianBlur result=\"blurOut\" in=\"StrokePaint\" stdDeviation=\"3\"/>\n      </filter>\n\n      <pattern id=\"New_Pattern_Swatch_1\" data-name=\"New Pattern Swatch 1\" width=\"60\" height=\"60\"\n               patternUnits=\"userSpaceOnUse\" viewBox=\"0 0 60 60\">\n        <line class=\"stroke-pattern\" x1=\"-113.26\" y1=\"123.26\" x2=\"3.26\" y2=\"6.74\"/>\n        <line class=\"stroke-pattern\" x1=\"-103.26\" y1=\"133.26\" x2=\"13.26\" y2=\"16.74\"/>\n        <line class=\"stroke-pattern\" x1=\"-93.26\" y1=\"143.26\" x2=\"23.26\" y2=\"26.74\"/>\n        <line class=\"stroke-pattern\" x1=\"-83.26\" y1=\"153.26\" x2=\"33.26\" y2=\"36.74\"/>\n        <line class=\"stroke-pattern\" x1=\"-73.26\" y1=\"163.26\" x2=\"43.26\" y2=\"46.74\"/>\n        <line class=\"stroke-pattern\" x1=\"-63.26\" y1=\"173.26\" x2=\"53.26\" y2=\"56.74\"/>\n        <line class=\"stroke-pattern\" x1=\"-53.26\" y1=\"123.26\" x2=\"63.26\" y2=\"6.74\"/>\n        <line class=\"stroke-pattern\" x1=\"-43.26\" y1=\"133.26\" x2=\"73.26\" y2=\"16.74\"/>\n        <line class=\"stroke-pattern\" x1=\"-33.26\" y1=\"143.26\" x2=\"83.26\" y2=\"26.74\"/>\n        <line class=\"stroke-pattern\" x1=\"-23.26\" y1=\"153.26\" x2=\"93.26\" y2=\"36.74\"/>\n        <line class=\"stroke-pattern\" x1=\"-13.26\" y1=\"163.26\" x2=\"103.26\" y2=\"46.74\"/>\n        <line class=\"stroke-pattern\" x1=\"-3.26\" y1=\"173.26\" x2=\"113.26\" y2=\"56.74\"/>\n        <line class=\"stroke-pattern\" x1=\"6.74\" y1=\"123.26\" x2=\"123.26\" y2=\"6.74\"/>\n        <line class=\"stroke-pattern\" x1=\"16.74\" y1=\"133.26\" x2=\"133.26\" y2=\"16.74\"/>\n        <line class=\"stroke-pattern\" x1=\"26.74\" y1=\"143.26\" x2=\"143.26\" y2=\"26.74\"/>\n        <line class=\"stroke-pattern\" x1=\"36.74\" y1=\"153.26\" x2=\"153.26\" y2=\"36.74\"/>\n        <line class=\"stroke-pattern\" x1=\"46.74\" y1=\"163.26\" x2=\"163.26\" y2=\"46.74\"/>\n        <line class=\"stroke-pattern\" x1=\"56.74\" y1=\"173.26\" x2=\"173.26\" y2=\"56.74\"/>\n        <line class=\"stroke-pattern\" x1=\"-113.26\" y1=\"63.26\" x2=\"3.26\" y2=\"-53.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-103.26\" y1=\"73.26\" x2=\"13.26\" y2=\"-43.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-93.26\" y1=\"83.26\" x2=\"23.26\" y2=\"-33.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-83.26\" y1=\"93.26\" x2=\"33.26\" y2=\"-23.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-73.26\" y1=\"103.26\" x2=\"43.26\" y2=\"-13.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-63.26\" y1=\"113.26\" x2=\"53.26\" y2=\"-3.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-53.26\" y1=\"63.26\" x2=\"63.26\" y2=\"-53.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-43.26\" y1=\"73.26\" x2=\"73.26\" y2=\"-43.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-33.26\" y1=\"83.26\" x2=\"83.26\" y2=\"-33.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-23.26\" y1=\"93.26\" x2=\"93.26\" y2=\"-23.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-13.26\" y1=\"103.26\" x2=\"103.26\" y2=\"-13.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-3.26\" y1=\"113.26\" x2=\"113.26\" y2=\"-3.26\"/>\n        <line class=\"stroke-pattern\" x1=\"6.74\" y1=\"63.26\" x2=\"123.26\" y2=\"-53.26\"/>\n        <line class=\"stroke-pattern\" x1=\"16.74\" y1=\"73.26\" x2=\"133.26\" y2=\"-43.26\"/>\n        <line class=\"stroke-pattern\" x1=\"26.74\" y1=\"83.26\" x2=\"143.26\" y2=\"-33.26\"/>\n        <line class=\"stroke-pattern\" x1=\"36.74\" y1=\"93.26\" x2=\"153.26\" y2=\"-23.26\"/>\n        <line class=\"stroke-pattern\" x1=\"46.74\" y1=\"103.26\" x2=\"163.26\" y2=\"-13.26\"/>\n        <line class=\"stroke-pattern\" x1=\"56.74\" y1=\"113.26\" x2=\"173.26\" y2=\"-3.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-113.26\" y1=\"3.26\" x2=\"3.26\" y2=\"-113.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-103.26\" y1=\"13.26\" x2=\"13.26\" y2=\"-103.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-93.26\" y1=\"23.26\" x2=\"23.26\" y2=\"-93.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-83.26\" y1=\"33.26\" x2=\"33.26\" y2=\"-83.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-73.26\" y1=\"43.26\" x2=\"43.26\" y2=\"-73.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-63.26\" y1=\"53.26\" x2=\"53.26\" y2=\"-63.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-53.26\" y1=\"3.26\" x2=\"63.26\" y2=\"-113.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-43.26\" y1=\"13.26\" x2=\"73.26\" y2=\"-103.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-33.26\" y1=\"23.26\" x2=\"83.26\" y2=\"-93.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-23.26\" y1=\"33.26\" x2=\"93.26\" y2=\"-83.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-13.26\" y1=\"43.26\" x2=\"103.26\" y2=\"-73.26\"/>\n        <line class=\"stroke-pattern\" x1=\"-3.26\" y1=\"53.26\" x2=\"113.26\" y2=\"-63.26\"/>\n        <line class=\"stroke-pattern\" x1=\"6.74\" y1=\"3.26\" x2=\"123.26\" y2=\"-113.26\"/>\n        <line class=\"stroke-pattern\" x1=\"16.74\" y1=\"13.26\" x2=\"133.26\" y2=\"-103.26\"/>\n        <line class=\"stroke-pattern\" x1=\"26.74\" y1=\"23.26\" x2=\"143.26\" y2=\"-93.26\"/>\n        <line class=\"stroke-pattern\" x1=\"36.74\" y1=\"33.26\" x2=\"153.26\" y2=\"-83.26\"/>\n        <line class=\"stroke-pattern\" x1=\"46.74\" y1=\"43.26\" x2=\"163.26\" y2=\"-73.26\"/>\n        <line class=\"stroke-pattern\" x1=\"56.74\" y1=\"53.26\" x2=\"173.26\" y2=\"-63.26\"/>\n      </pattern>\n    </defs>\n\n    <g>\n      <path class=\"room-border\" [attr.d]=\"border.d\" *ngFor=\"let border of roomSvg.borders\" />\n    </g>\n\n    <g>\n      <path class=\"stroked-element\" [attr.d]=\"strokedArea.d\" *ngFor=\"let strokedArea of roomSvg.stokedAreas\"/>\n    </g>\n\n    <g [attr.id]=\"room.id\" [class.selected-room]=\"selectedRoom == room.id\" *ngFor=\"let room of sortedRooms\">\n      <path class=\"room-bg\" (click)=\"selectRoom(room.id)\" [attr.d]=\"room.area.d\" [style.filter]=\"isIE || isFirefox ? 'inherit': ''\" />\n      <path class=\"room-border\" [attr.d]=\"room.border.d\" />\n      <path class=\"room-border room-border-glow\" [attr.d]=\"room.border.d\" [style.filter]=\"isIE || isFirefox ? 'inherit': ''\" />\n      <text class=\"room-text\" (click)=\"selectRoom(room.id)\" text-anchor=\"middle\"\n            [attr.x]=\"room.name.x\" [attr.y]=\"room.name.y\">{{room.name.text}}</text>\n    </g>\n  </svg>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/rooms/room-selector/room-selector.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) svg {\n  width: 100%; }\n\n:host-context(.nb-theme-default) .stroke-pattern {\n  fill: none;\n  stroke: #bdc4cd;\n  stroke-miterlimit: 10;\n  opacity: 0.1;\n  stroke-width: 1px; }\n\n:host-context(.nb-theme-default) .stroked-element {\n  stroke-width: 4px;\n  stroke: #bdc4cd;\n  stroke-miterlimit: 10;\n  fill: url(\"#New_Pattern_Swatch_1\"); }\n\n:host-context(.nb-theme-default) .room-border {\n  stroke-width: 4px;\n  stroke: #bdc4cd;\n  stroke-miterlimit: 10;\n  fill: none; }\n\n:host-context(.nb-theme-default) .room-bg {\n  fill: #ffffff;\n  stroke: transparent;\n  cursor: pointer;\n  stroke-width: 4px; }\n\n:host-context(.nb-theme-default) .room-bg-border-grad {\n  fill: none;\n  stroke: none;\n  stroke-width: 4px; }\n\n:host-context(.nb-theme-default) .room-text {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n  fill: #a4abb3; }\n\n:host-context(.nb-theme-default) .selected-room {\n  z-index: 40; }\n  :host-context(.nb-theme-default) .selected-room .room-text {\n    fill: #2a2a2a;\n    font-weight: 500; }\n  :host-context(.nb-theme-default) .selected-room .room-border {\n    stroke: #40dc7e; }\n\n:host-context(.nb-theme-default) .header {\n  padding: 1.25rem;\n  border-bottom: 1px solid #ebeef2;\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n  color: #2a2a2a;\n  font-family: Exo;\n  font-size: 1.125rem;\n  font-weight: 600;\n  border-bottom: none;\n  padding-bottom: 0; }\n  :host-context(.nb-theme-default) .header h1 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h2 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h3 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h4 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h5 {\n    margin: 0; }\n  :host-context(.nb-theme-default) .header h6 {\n    margin: 0; }\n\n:host-context(.nb-theme-cosmic) svg {\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) .stroke-pattern {\n  fill: none;\n  stroke: #bdc4cd;\n  stroke-miterlimit: 10;\n  opacity: 0.1;\n  stroke-width: 1px; }\n\n:host-context(.nb-theme-cosmic) .stroked-element {\n  stroke-width: 4px;\n  stroke: #bdc4cd;\n  stroke-miterlimit: 10;\n  fill: url(\"#New_Pattern_Swatch_1\"); }\n\n:host-context(.nb-theme-cosmic) .room-border {\n  stroke-width: 4px;\n  stroke: #bdc4cd;\n  stroke-miterlimit: 10;\n  fill: none; }\n\n:host-context(.nb-theme-cosmic) .room-bg {\n  fill: #3d3780;\n  stroke: transparent;\n  cursor: pointer;\n  stroke-width: 4px; }\n\n:host-context(.nb-theme-cosmic) .room-bg-border-grad {\n  fill: none;\n  stroke: none;\n  stroke-width: 4px; }\n\n:host-context(.nb-theme-cosmic) .room-text {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n  fill: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) .selected-room {\n  z-index: 40; }\n  :host-context(.nb-theme-cosmic) .selected-room .room-text {\n    fill: #ffffff;\n    font-weight: 500; }\n  :host-context(.nb-theme-cosmic) .selected-room .room-border {\n    stroke: #00d977; }\n\n:host-context(.nb-theme-cosmic) .header {\n  padding: 1.25rem;\n  border-bottom: 1px solid #342e73;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  color: #ffffff;\n  font-family: Exo;\n  font-size: 1.125rem;\n  font-weight: 500;\n  border-bottom: none;\n  padding-bottom: 0; }\n  :host-context(.nb-theme-cosmic) .header h1 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h2 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h3 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h4 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h5 {\n    margin: 0; }\n  :host-context(.nb-theme-cosmic) .header h6 {\n    margin: 0; }\n\n:host-context(.nb-theme-cosmic) .stroke-pattern, :host-context(.nb-theme-cosmic) .stroked-element, :host-context(.nb-theme-cosmic) .room-border {\n  stroke: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) .room-text {\n  fill: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .selected-room .room-text {\n  font-weight: 400; }\n\n:host-context(.nb-theme-cosmic) .selected-room .room-bg {\n  fill: rgba(0, 255, 170, 0.2);\n  -webkit-filter: url(\"#f2\");\n          filter: url(\"#f2\"); }\n\n:host-context(.nb-theme-cosmic) .selected-room .room-border {\n  stroke: #00f9a6; }\n\n:host-context(.nb-theme-cosmic) .selected-room .room-border-glow {\n  -webkit-filter: url(\"#f2\");\n          filter: url(\"#f2\"); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/rooms/room-selector/room-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoomSelectorComponent = (function () {
    function RoomSelectorComponent() {
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.sortedRooms = [];
        this.viewBox = '-20 -20 618.88 407.99';
        this.isIE = !!(navigator.userAgent.match(/Trident/)
            || navigator.userAgent.match(/MSIE/)
            || navigator.userAgent.match(/Edge/));
        this.isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') >= 0;
        this.roomSvg = {
            borders: [{
                    d: 'M186.21,130.05H216.37V160H186.21Z',
                }],
            stokedAreas: [
                { d: 'M562.71,225V354h-290V319H418.37a6.09,6.09,0,0,0,6.09-6.09V225Z' },
                { d: 'M8.09,130V347.91A6.09,6.09,0,0,0,14.18,354h54V130Z' },
                { d: 'M216.37,49.82H358.8V92.5H216.37Z' },
            ],
            rooms: [
                {
                    id: '0',
                    name: { text: 'Kitchen', x: 142, y: 240.8 },
                    area: { d: 'M68.18,130V359.9A6.09,6.09,0,0,0,74.27,366h136a6.09,6.09,0,0,0,6.09-6.09V160H186.21V130Z' },
                    border: { d: 'M96,130H68.18V359.9A6.09,6.09,0,0,0,74.27,366h136a6.09,6.09,0,0,0,6.09-6.09V225 M152.71,' +
                            '130H186.21V160H218.5' },
                },
                {
                    id: '1',
                    name: { text: 'Bedroom', x: 109, y: 66 },
                    area: { d: 'M152.71,130h63.66V8.09A6.09,6.09,0,0,0,210.27,2H8.09A6.09,6.09,0,0,0,2,8.09V123.95A6.09,' +
                            '6.09,0,0,0,8.09,130H96Z' },
                    border: { d: 'M152.71,130h63.66V8.09A6.09,6.09,0,0,0,210.27,2H8.09A6.09,6.09,0,0,0,2,8.09V123.95A6.09' +
                            ',6.09,0,0,0,8.09,130H96' },
                },
                {
                    id: '2',
                    name: { text: 'Living Room', x: 468, y: 134 },
                    area: { d: 'M358.8,160V49.82a6.09,6.09,0,0,1,6.09-6.09H570.78a6.09,6.09,0,0,1,6.09,6.09V218.9a6.09' +
                            ',6.09,0,0,1-6.09,6.09h-212Z' },
                    border: { d: 'M358.8,160V49.82a6.09,6.09,0,0,1,6.09-6.09H570.78a6.09,6.09,0,0,1,6.09,6.09V218.9a6.09' +
                            ',6.09,0,0,1-6.09,6.09h-212' },
                },
                {
                    id: '3',
                    name: { text: 'Hallway', x: 320, y: 273 },
                    area: { d: 'M216.37,354V92.5H358.8V225H424.39V319H272.71V354Z' },
                    border: { d: 'M216.37,225V356 M216.21,162V92.5H358.8V160 M358.8,225H424.39V312.91a6.09,' +
                            '6.09,0,0,1,-6.09,6.09H272.71V356' },
                },
            ],
        };
        this.selectRoom('2');
    }
    RoomSelectorComponent.prototype.sortRooms = function () {
        var _this = this;
        this.sortedRooms = this.roomSvg.rooms.slice(0).sort(function (a, b) {
            if (a.id === _this.selectedRoom) {
                return 1;
            }
            if (b.id === _this.selectedRoom) {
                return -1;
            }
            return 0;
        });
    };
    RoomSelectorComponent.prototype.selectRoom = function (roomNumber) {
        this.select.emit(roomNumber);
        this.selectedRoom = roomNumber;
        this.sortRooms();
    };
    return RoomSelectorComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], RoomSelectorComponent.prototype, "select", void 0);
RoomSelectorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-room-selector',
        template: __webpack_require__("../../../../../src/app/pages/dashboard/rooms/room-selector/room-selector.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/rooms/room-selector/room-selector.component.scss")],
    }),
    __metadata("design:paramtypes", [])
], RoomSelectorComponent);

var _a;
//# sourceMappingURL=room-selector.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/rooms/rooms.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) ngx-room-selector {\n  width: 70%;\n  border-right: 2px solid #ebeef2;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/square_pattern.svg") + ") repeat;\n  background-size: 75px; }\n\n:host-context(.nb-theme-default) ngx-player {\n  width: 30%; }\n\n:host-context(.nb-theme-default) nb-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n:host-context(.nb-theme-default) ngx-room-selector {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  :host-context(.nb-theme-default) ngx-room-selector /deep/ .room-selector {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-grid-column-align: center;\n        justify-items: center;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    margin: 0 auto;\n    width: 90%;\n    max-width: 650px;\n    padding-bottom: 1rem; }\n\n@media (max-width: 991px) {\n  :host-context(.nb-theme-default).expanded ngx-room-selector {\n    display: none; }\n  :host-context(.nb-theme-default) ngx-room-selector, :host-context(.nb-theme-default) ngx-player {\n    width: 100%;\n    border: none; }\n  :host-context(.nb-theme-default) nb-card {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    :host-context(.nb-theme-default) nb-card .collapse {\n      display: inline-block;\n      position: absolute;\n      top: 0.5rem;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n      font-size: 3rem;\n      color: #a4abb3; }\n      :host-context(.nb-theme-default) nb-card .collapse:focus {\n        outline: none; } }\n\n:host-context(.nb-theme-cosmic) ngx-room-selector {\n  width: 70%;\n  border-right: 2px solid #342e73;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/square_pattern.svg") + ") repeat;\n  background-size: 75px;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/square_pattern_cosmic.svg") + "); }\n\n:host-context(.nb-theme-cosmic) ngx-player {\n  width: 30%; }\n\n:host-context(.nb-theme-cosmic) nb-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n:host-context(.nb-theme-cosmic) ngx-room-selector {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  :host-context(.nb-theme-cosmic) ngx-room-selector /deep/ .room-selector {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-grid-column-align: center;\n        justify-items: center;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    margin: 0 auto;\n    width: 90%;\n    max-width: 650px;\n    padding-bottom: 1rem; }\n\n@media (max-width: 991px) {\n  :host-context(.nb-theme-cosmic).expanded ngx-room-selector {\n    display: none; }\n  :host-context(.nb-theme-cosmic) ngx-room-selector, :host-context(.nb-theme-cosmic) ngx-player {\n    width: 100%;\n    border: none; }\n  :host-context(.nb-theme-cosmic) nb-card {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    :host-context(.nb-theme-cosmic) nb-card .collapse {\n      display: inline-block;\n      position: absolute;\n      top: 0.5rem;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n      font-size: 3rem;\n      color: #a1a1e5; }\n      :host-context(.nb-theme-cosmic) nb-card .collapse:focus {\n        outline: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/rooms/rooms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoomsComponent = (function () {
    function RoomsComponent(themeService, breakpointService) {
        var _this = this;
        this.themeService = themeService;
        this.breakpointService = breakpointService;
        this.breakpoints = breakpointService.getBreakpointsMap();
        this.themeSubscription = themeService.onMediaQueryChange()
            .subscribe(function (_a) {
            var oldValue = _a[0], newValue = _a[1];
            _this.breakpoint = newValue;
        });
    }
    RoomsComponent.prototype.select = function (roomNumber) {
        if (this.isSelected(roomNumber)) {
            this.expand();
        }
        else {
            this.collapse();
        }
        this.selected = roomNumber;
    };
    RoomsComponent.prototype.expand = function () {
        this.expanded = true;
    };
    RoomsComponent.prototype.collapse = function () {
        this.expanded = false;
    };
    RoomsComponent.prototype.isCollapsed = function () {
        return !this.expanded;
    };
    RoomsComponent.prototype.isSelected = function (roomNumber) {
        return this.selected === roomNumber;
    };
    RoomsComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return RoomsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.expanded'),
    __metadata("design:type", Boolean)
], RoomsComponent.prototype, "expanded", void 0);
RoomsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-rooms',
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/rooms/rooms.component.scss")],
        template: "\n    <nb-card [size]=\"breakpoint.width >= breakpoints.sm ? 'large' : 'medium'\">\n      <i (click)=\"collapse()\" class=\"nb-arrow-down collapse\" [hidden]=\"isCollapsed()\"></i>\n      <ngx-room-selector (select)=\"select($event)\"></ngx-room-selector>\n      <ngx-player [collapsed]=\"isCollapsed() && breakpoint.width <= breakpoints.md\"></ngx-player>\n    </nb-card>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["f" /* NbMediaBreakpointsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["f" /* NbMediaBreakpointsService */]) === "function" && _b || Object])
], RoomsComponent);

var _a, _b;
//# sourceMappingURL=rooms.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/security-cameras/security-cameras.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"xlarge\">\n  <nb-card-header>\n    <div class=\"cameras-card-header\">\n      <span class=\"cameras-card-title\">Security Cameras</span>\n      <span class=\"cameras-filter\">\n        <a [class.active]=\"isSingleView\" (click)=\"isSingleView = true\">\n          <i class=\"nb-square\"></i>\n        </a>\n        <a [class.active]=\"!isSingleView\" (click)=\"isSingleView = false\">\n          <i class=\"nb-grid-a\"></i>\n        </a>\n      </span>\n    </div>\n  </nb-card-header>\n  <nb-card-body>\n    <div class=\"cameras single-view\" *ngIf=\"isSingleView\">\n      <div class=\"camera\" [style.background-image]=\"'url(' + selectedCamera.source + ')'\">\n        <span>{{ selectedCamera.title }}</span>\n      </div>\n    </div>\n    <div class=\"cameras\" *ngIf=\"!isSingleView\">\n      <div class=\"camera col-sm-6\" *ngFor=\"let camera of cameras\" [style.background-image]=\"'url(' + camera.source + ')'\"\n           (click)=\"selectCamera(camera)\">\n        <span>{{ camera.title }}</span>\n      </div>\n    </div>\n  </nb-card-body>\n  <nb-card-footer>\n    <nb-actions size=\"medium\" fullWidth>\n      <nb-action>\n        <i class=\"nb-pause-outline\"></i><span>Pause</span>\n      </nb-action>\n      <nb-action>\n        <i class=\"nb-list\"></i><span>Logs</span>\n      </nb-action>\n      <nb-action>\n        <i class=\"nb-search\"></i><span>Search</span>\n      </nb-action>\n      <nb-action>\n        <i class=\"nb-gear\"></i><span>Setup</span>\n      </nb-action>\n    </nb-actions>\n  </nb-card-footer>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/security-cameras/security-cameras.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-header {\n  padding: 0;\n  border: none; }\n\n:host-context(.nb-theme-default) nb-card-body {\n  padding: 0;\n  position: relative; }\n\n:host-context(.nb-theme-default) nb-card-footer {\n  padding: 1rem 0;\n  border: none; }\n\n:host-context(.nb-theme-default) .cameras-card-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host-context(.nb-theme-default) .cameras-card-header .cameras-card-title {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 1.25rem; }\n\n:host-context(.nb-theme-default) .cameras-filter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host-context(.nb-theme-default) .cameras-filter a {\n    font-size: 2.5rem;\n    padding: 0 0.75rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    color: #a4abb3; }\n  :host-context(.nb-theme-default) .cameras-filter a:first-child {\n    border-left: 1px solid #ebeef2; }\n  :host-context(.nb-theme-default) .cameras-filter a:last-child {\n    border-top-right-radius: 0.375rem; }\n  :host-context(.nb-theme-default) .cameras-filter a.active {\n    background-color: #e9edf2;\n    color: #2a2a2a;\n    border: none; }\n\n:host-context(.nb-theme-default) .cameras {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%;\n  height: 100%; }\n\n:host-context(.nb-theme-default) .cameras.single-view .camera {\n  height: 100%;\n  width: 100%; }\n  :host-context(.nb-theme-default) .cameras.single-view .camera::before {\n    height: 100%; }\n\n:host-context(.nb-theme-default) .camera {\n  position: relative;\n  background-position: center;\n  background-size: cover;\n  height: 50%;\n  padding: 0; }\n  :host-context(.nb-theme-default) .camera span {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    color: white;\n    background: rgba(0, 0, 0, 0.4);\n    font-family: Exo;\n    font-weight: 500;\n    font-size: 1.25rem;\n    padding: 0.5rem 1rem; }\n  :host-context(.nb-theme-default) .camera::before {\n    background-color: rgba(255, 255, 255, 0.1);\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    opacity: 1; }\n  :host-context(.nb-theme-default) .camera:hover::before {\n    opacity: 0; }\n\n:host-context(.nb-theme-default) nb-action {\n  padding: 0 0.5rem 0 0; }\n  :host-context(.nb-theme-default) nb-action i {\n    color: #a4abb3;\n    font-size: 3rem;\n    margin-right: 0.5rem; }\n  :host-context(.nb-theme-default) nb-action span {\n    font-family: Exo;\n    font-weight: 600;\n    color: #2a2a2a;\n    text-transform: uppercase; }\n\n@media (max-width: 1199px) {\n  :host-context(.nb-theme-default) nb-action {\n    padding: 0; }\n    :host-context(.nb-theme-default) nb-action i {\n      margin: 0; }\n    :host-context(.nb-theme-default) nb-action span {\n      display: none; } }\n\n:host-context(.nb-theme-cosmic) nb-card-header {\n  padding: 0;\n  border: none; }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  padding: 0;\n  position: relative; }\n\n:host-context(.nb-theme-cosmic) nb-card-footer {\n  padding: 1rem 0;\n  border: none; }\n\n:host-context(.nb-theme-cosmic) .cameras-card-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host-context(.nb-theme-cosmic) .cameras-card-header .cameras-card-title {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 1.25rem; }\n\n:host-context(.nb-theme-cosmic) .cameras-filter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host-context(.nb-theme-cosmic) .cameras-filter a {\n    font-size: 2.5rem;\n    padding: 0 0.75rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    color: #a1a1e5; }\n  :host-context(.nb-theme-cosmic) .cameras-filter a:first-child {\n    border-left: 1px solid #342e73; }\n  :host-context(.nb-theme-cosmic) .cameras-filter a:last-child {\n    border-top-right-radius: 0.5rem; }\n  :host-context(.nb-theme-cosmic) .cameras-filter a.active {\n    background-color: #494299;\n    color: #ffffff;\n    border: none; }\n\n:host-context(.nb-theme-cosmic) .cameras {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%;\n  height: 100%; }\n\n:host-context(.nb-theme-cosmic) .cameras.single-view .camera {\n  height: 100%;\n  width: 100%; }\n  :host-context(.nb-theme-cosmic) .cameras.single-view .camera::before {\n    height: 100%; }\n\n:host-context(.nb-theme-cosmic) .camera {\n  position: relative;\n  background-position: center;\n  background-size: cover;\n  height: 50%;\n  padding: 0; }\n  :host-context(.nb-theme-cosmic) .camera span {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    color: white;\n    background: rgba(0, 0, 0, 0.4);\n    font-family: Exo;\n    font-weight: 500;\n    font-size: 1.25rem;\n    padding: 0.5rem 1rem; }\n  :host-context(.nb-theme-cosmic) .camera::before {\n    background-color: rgba(255, 255, 255, 0.1);\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    opacity: 1; }\n  :host-context(.nb-theme-cosmic) .camera:hover::before {\n    opacity: 0; }\n\n:host-context(.nb-theme-cosmic) nb-action {\n  padding: 0 0.5rem 0 0; }\n  :host-context(.nb-theme-cosmic) nb-action i {\n    color: #a1a1e5;\n    font-size: 3rem;\n    margin-right: 0.5rem; }\n  :host-context(.nb-theme-cosmic) nb-action span {\n    font-family: Exo;\n    font-weight: 600;\n    color: #ffffff;\n    text-transform: uppercase; }\n\n:host-context(.nb-theme-cosmic) .cameras-filter a.active {\n  color: #00f9a6; }\n\n:host-context(.nb-theme-cosmic) .camera span {\n  background: rgba(88, 73, 184, 0.5); }\n\n:host-context(.nb-theme-cosmic) .camera::before {\n  background-color: rgba(0, 0, 0, 0.2); }\n\n:host-context(.nb-theme-cosmic) nb-action span {\n  font-weight: 500; }\n\n@media (max-width: 1199px) {\n  :host-context(.nb-theme-cosmic) nb-action {\n    padding: 0; }\n    :host-context(.nb-theme-cosmic) nb-action i {\n      margin: 0; }\n    :host-context(.nb-theme-cosmic) nb-action span {\n      display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/security-cameras/security-cameras.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityCamerasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SecurityCamerasComponent = (function () {
    function SecurityCamerasComponent() {
        this.cameras = [{
                title: 'Camera #1',
                source: 'assets/images/camera1.jpg',
            }, {
                title: 'Camera #2',
                source: 'assets/images/camera2.jpg',
            }, {
                title: 'Camera #3',
                source: 'assets/images/camera3.jpg',
            }, {
                title: 'Camera #4',
                source: 'assets/images/camera4.jpg',
            }];
        this.selectedCamera = this.cameras[0];
        this.userMenu = [{
                title: 'Profile',
            }, {
                title: 'Log out',
            }];
        this.isSingleView = false;
    }
    SecurityCamerasComponent.prototype.selectCamera = function (camera) {
        this.selectedCamera = camera;
        this.isSingleView = true;
    };
    return SecurityCamerasComponent;
}());
SecurityCamerasComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-security-cameras',
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/security-cameras/security-cameras.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/dashboard/security-cameras/security-cameras.component.html"),
    })
], SecurityCamerasComponent);

//# sourceMappingURL=security-cameras.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/solar/solar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: hidden;\n  padding: 1rem; }\n\n:host-context(.nb-theme-default) .echart {\n  position: absolute;\n  height: calc(100% - 2 * 1rem);\n  width: 40%; }\n\n:host-context(.nb-theme-default) .info {\n  margin-left: 45%;\n  padding-top: 1.5rem;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .value {\n  font-family: Exo;\n  font-size: 2rem;\n  font-weight: 600;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .details {\n  font-size: 1.25rem;\n  font-weight: 500;\n  line-height: 1; }\n  :host-context(.nb-theme-default) .details span {\n    font-size: 1rem;\n    font-weight: 300; }\n\n:host-context(.nb-theme-default) .text-hint {\n  font-size: 1rem; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .value {\n    font-size: 1.75rem; } }\n\n:host-context(.nb-theme-cosmic) {\n  color: #ffffff; }\n  :host-context(.nb-theme-cosmic) nb-card-body {\n    overflow: hidden;\n    padding: 1rem; }\n  :host-context(.nb-theme-cosmic) .echart {\n    position: absolute;\n    height: calc(100% - 2 * 1rem);\n    width: 40%; }\n  :host-context(.nb-theme-cosmic) .info {\n    margin-left: 45%;\n    padding-top: 1.5rem;\n    color: #a1a1e5; }\n  :host-context(.nb-theme-cosmic) .value {\n    font-family: Exo;\n    font-size: 2rem;\n    font-weight: 600;\n    color: #ffffff; }\n  :host-context(.nb-theme-cosmic) .details {\n    font-size: 1.25rem;\n    font-weight: 500;\n    line-height: 1; }\n    :host-context(.nb-theme-cosmic) .details span {\n      font-size: 1rem;\n      font-weight: 300; }\n  :host-context(.nb-theme-cosmic) .text-hint {\n    font-size: 1rem; }\n  :host-context(.nb-theme-cosmic) .value {\n    color: #00f9a6; }\n  :host-context(.nb-theme-cosmic) .details span {\n    color: #a1a1e5; }\n  @media (max-width: 399px) {\n    :host-context(.nb-theme-cosmic) .value {\n      font-size: 1.75rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/solar/solar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SolarComponent = (function () {
    function SolarComponent(theme) {
        this.theme = theme;
        this.value = 0;
        this.option = {};
    }
    Object.defineProperty(SolarComponent.prototype, "chartValue", {
        set: function (value) {
            this.value = value;
            if (this.option.series) {
                this.option.series[0].data[0].value = value;
                this.option.series[0].data[1].value = 100 - value;
                this.option.series[1].data[0].value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    SolarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().delay(1).subscribe(function (config) {
            var solarTheme = config.variables.solar;
            _this.option = Object.assign({}, {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                series: [
                    {
                        name: ' ',
                        clockWise: true,
                        hoverAnimation: false,
                        type: 'pie',
                        center: ['45%', '50%'],
                        radius: solarTheme.radius,
                        data: [
                            {
                                value: _this.value,
                                name: ' ',
                                label: {
                                    normal: {
                                        position: 'center',
                                        formatter: '{d}%',
                                        textStyle: {
                                            fontSize: '22',
                                            fontFamily: config.variables.fontSecondary,
                                            fontWeight: '600',
                                            color: config.variables.fgHeading,
                                        },
                                    },
                                },
                                tooltip: {
                                    show: false,
                                },
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            {
                                                offset: 0,
                                                color: solarTheme.gradientLeft,
                                            },
                                            {
                                                offset: 1,
                                                color: solarTheme.gradientRight,
                                            },
                                        ]),
                                        shadowColor: solarTheme.shadowColor,
                                        shadowBlur: 0,
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 3,
                                    },
                                },
                                hoverAnimation: false,
                            },
                            {
                                value: 100 - _this.value,
                                name: ' ',
                                tooltip: {
                                    show: false,
                                },
                                label: {
                                    normal: {
                                        position: 'inner',
                                    },
                                },
                                itemStyle: {
                                    normal: {
                                        color: config.variables.layoutBg,
                                    },
                                },
                            },
                        ],
                    },
                    {
                        name: ' ',
                        clockWise: true,
                        hoverAnimation: false,
                        type: 'pie',
                        center: ['45%', '50%'],
                        radius: solarTheme.radius,
                        data: [
                            {
                                value: _this.value,
                                name: ' ',
                                label: {
                                    normal: {
                                        position: 'inner',
                                        show: false,
                                    },
                                },
                                tooltip: {
                                    show: false,
                                },
                                itemStyle: {
                                    normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            {
                                                offset: 0,
                                                color: solarTheme.gradientLeft,
                                            },
                                            {
                                                offset: 1,
                                                color: solarTheme.gradientRight,
                                            },
                                        ]),
                                        shadowColor: solarTheme.shadowColor,
                                        shadowBlur: 7,
                                    },
                                },
                                hoverAnimation: false,
                            },
                            {
                                value: 28,
                                name: ' ',
                                tooltip: {
                                    show: false,
                                },
                                label: {
                                    normal: {
                                        position: 'inner',
                                    },
                                },
                                itemStyle: {
                                    normal: {
                                        color: 'none',
                                    },
                                },
                            },
                        ],
                    },
                ],
            });
        });
    };
    SolarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return SolarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartValue'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], SolarComponent.prototype, "chartValue", null);
SolarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-solar',
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/solar/solar.component.scss")],
        template: "\n    <nb-card size=\"xsmall\" class=\"solar-card\">\n      <nb-card-header>Solar Energy Consumption</nb-card-header>\n      <nb-card-body>\n        <div echarts [options]=\"option\" class=\"echart\">\n        </div>\n        <div class=\"info\">\n          <div class=\"value\">6. 421 kWh</div>\n          <div class=\"details\"><span>out of</span> 8.421 kWh</div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], SolarComponent);

var _a;
//# sourceMappingURL=solar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/status-card/status-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 6rem;\n  overflow: visible;\n  box-shadow: 0 0 0 0 #dbdbdb, none; }\n  :host-context(.nb-theme-default) nb-card .icon-container {\n    height: 100%;\n    padding: 0.625rem; }\n  :host-context(.nb-theme-default) nb-card .icon {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 5.75rem;\n    height: 4.75rem;\n    font-size: 3.75rem;\n    border-radius: 0.375rem;\n    transition: width 0.4s ease;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-transform-style: preserve-3d;\n    -webkit-backface-visibility: hidden;\n    color: #ffffff; }\n    :host-context(.nb-theme-default) nb-card .icon.primary {\n      background-image: linear-gradient(to right, #b57fff, #8a7fff);\n      box-shadow: 0 0 0 0 #896ddb, 0 0 0 0 #9f7fff; }\n    :host-context(.nb-theme-default) nb-card .icon.success {\n      background-image: linear-gradient(to right, #40dcb2, #40dc7e);\n      box-shadow: 0 0 0 0 #37bd83, 0 0 0 0 #40dc98; }\n    :host-context(.nb-theme-default) nb-card .icon.info {\n      background-image: linear-gradient(to right, #4cc4ff, #4ca6ff);\n      box-shadow: 0 0 0 0 #419cdb, 0 0 0 0 #4cb5ff; }\n    :host-context(.nb-theme-default) nb-card .icon.warning {\n      background-image: linear-gradient(to right, #ffcc00, #ffa100);\n      box-shadow: 0 0 0 0 #db9d00, 0 0 0 0 #ffb600; }\n  :host-context(.nb-theme-default) nb-card:hover {\n    background: white; }\n    :host-context(.nb-theme-default) nb-card:hover .icon.primary {\n      background-image: linear-gradient(to right, #bf91ff, #9a91ff); }\n    :host-context(.nb-theme-default) nb-card:hover .icon.success {\n      background-image: linear-gradient(to right, #5be1bd, #5be190); }\n    :host-context(.nb-theme-default) nb-card:hover .icon.info {\n      background-image: linear-gradient(to right, #65ccff, #65b2ff); }\n    :host-context(.nb-theme-default) nb-card:hover .icon.warning {\n      background-image: linear-gradient(to right, #ffd324, #ffae24); }\n  :host-context(.nb-theme-default) nb-card.off {\n    color: #a4abb3; }\n    :host-context(.nb-theme-default) nb-card.off .icon {\n      color: #a4abb3; }\n      :host-context(.nb-theme-default) nb-card.off .icon.primary, :host-context(.nb-theme-default) nb-card.off .icon.success, :host-context(.nb-theme-default) nb-card.off .icon.info, :host-context(.nb-theme-default) nb-card.off .icon.warning {\n        box-shadow: none;\n        background-image: linear-gradient(to right, transparent, transparent); }\n    :host-context(.nb-theme-default) nb-card.off .title {\n      color: #a4abb3; }\n  :host-context(.nb-theme-default) nb-card .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 100%;\n    padding: 0 0.5rem 0 0.75rem;\n    border-left: 1px solid transparent; }\n  :host-context(.nb-theme-default) nb-card .title {\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 600;\n    color: #2a2a2a; }\n  :host-context(.nb-theme-default) nb-card .status {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a4abb3; }\n\n:host-context(.nb-theme-cosmic) nb-card {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 6rem;\n  overflow: visible;\n  box-shadow: 0 3px 0 0 #342f6e, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n  :host-context(.nb-theme-cosmic) nb-card .icon-container {\n    height: 100%;\n    padding: 0.625rem; }\n  :host-context(.nb-theme-cosmic) nb-card .icon {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 5.75rem;\n    height: 4.75rem;\n    font-size: 3.75rem;\n    border-radius: 0.5rem;\n    transition: width 0.4s ease;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-transform-style: preserve-3d;\n    -webkit-backface-visibility: hidden;\n    color: #ffffff; }\n    :host-context(.nb-theme-cosmic) nb-card .icon.primary {\n      background-image: linear-gradient(to right, #ad59ff, #7659ff);\n      box-shadow: 0 3px 0 0 #7e4ddb, 0 2px 8px 0 #9259ff, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n    :host-context(.nb-theme-cosmic) nb-card .icon.success {\n      background-image: linear-gradient(to right, #00d9bf, #00d977);\n      box-shadow: 0 3px 0 0 #00bb85, 0 2px 8px 0 #00d99b, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n    :host-context(.nb-theme-cosmic) nb-card .icon.info {\n      background-image: linear-gradient(to right, #00b3ff, #0088ff);\n      box-shadow: 0 3px 0 0 #0087db, 0 2px 8px 0 #009dff, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n    :host-context(.nb-theme-cosmic) nb-card .icon.warning {\n      background-image: linear-gradient(to right, #ffcc00, #ffa100);\n      box-shadow: 0 3px 0 0 #db9d00, 0 2px 8px 0 #ffb600, 0 4px 10px 0 rgba(33, 7, 77, 0.5); }\n  :host-context(.nb-theme-cosmic) nb-card:hover {\n    background: #463f92; }\n    :host-context(.nb-theme-cosmic) nb-card:hover .icon.primary {\n      background-image: linear-gradient(to right, #b970ff, #8970ff); }\n    :host-context(.nb-theme-cosmic) nb-card:hover .icon.success {\n      background-image: linear-gradient(to right, #24dec8, #24de8a); }\n    :host-context(.nb-theme-cosmic) nb-card:hover .icon.info {\n      background-image: linear-gradient(to right, #24bdff, #2499ff); }\n    :host-context(.nb-theme-cosmic) nb-card:hover .icon.warning {\n      background-image: linear-gradient(to right, #ffd324, #ffae24); }\n  :host-context(.nb-theme-cosmic) nb-card.off {\n    color: #a1a1e5; }\n    :host-context(.nb-theme-cosmic) nb-card.off .icon {\n      color: #a1a1e5; }\n      :host-context(.nb-theme-cosmic) nb-card.off .icon.primary, :host-context(.nb-theme-cosmic) nb-card.off .icon.success, :host-context(.nb-theme-cosmic) nb-card.off .icon.info, :host-context(.nb-theme-cosmic) nb-card.off .icon.warning {\n        box-shadow: none;\n        background-image: linear-gradient(to right, transparent, transparent); }\n    :host-context(.nb-theme-cosmic) nb-card.off .title {\n      color: #a1a1e5; }\n  :host-context(.nb-theme-cosmic) nb-card .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 100%;\n    padding: 0 0.5rem 0 0.75rem;\n    border-left: 1px solid transparent; }\n  :host-context(.nb-theme-cosmic) nb-card .title {\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 600;\n    color: #ffffff; }\n  :host-context(.nb-theme-cosmic) nb-card .status {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) nb-card.off .icon-container {\n  border-right: 1px solid #342e73; }\n\n:host-context(.nb-theme-cosmic) nb-card .icon-container {\n  padding: 0; }\n\n:host-context(.nb-theme-cosmic) nb-card .details {\n  padding-left: 1.25rem; }\n\n:host-context(.nb-theme-cosmic) nb-card .icon {\n  width: 7rem;\n  height: 100%;\n  font-size: 4.5rem;\n  border-radius: 0.5rem 0 0 0.5rem; }\n\n:host-context(.nb-theme-cosmic) nb-card .title {\n  font-weight: 500; }\n\n:host-context(.nb-theme-cosmic) nb-card .status {\n  font-weight: 300; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/status-card/status-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__redisAPI_redisApi_service__ = __webpack_require__("../../../../../src/app/redisAPI/redisApi.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatusCardComponent = (function () {
    function StatusCardComponent(redisApiService) {
        this.redisApiService = redisApiService;
        this.on = true;
    }
    StatusCardComponent.prototype.onClickDashBtn1 = function (value) {
        this.stateBtn1 = value;
        this.redisApiService.dashBtnClick(this.stateBtn1);
    };
    return StatusCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatusCardComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatusCardComponent.prototype, "type", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StatusCardComponent.prototype, "on", void 0);
StatusCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-status-card',
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/status-card/status-card.component.scss")],
        template: "\n    <nb-card (click)=\"on = !on\" (click)=\"onClickDashBtn1(on)\" [ngClass]=\"{'off': !on}\">\n      <div class=\"icon-container\">\n        <div class=\"icon {{ type }}\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n\n      <div class=\"details\">\n        <div class=\"title\">{{ title }}</div>\n        <div class=\"status\">{{ on ? 'ON' : 'OFF' }}</div>\n      </div>\n    </nb-card>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__redisAPI_redisApi_service__["a" /* RedisApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__redisAPI_redisApi_service__["a" /* RedisApiService */]) === "function" && _a || Object])
], StatusCardComponent);

var _a;
//# sourceMappingURL=status-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"medium\">\n  <div class=\"team-photo\">\n    <a href=\"mailto:contact@akveo.com\">\n      <button type=\"button\" class=\"btn btn-success btn-icon team-link\">\n        <i class=\"ion-paper-airplane\"></i>\n      </button>\n    </a>\n  </div>\n\n  <div class=\"team-info\">\n    <div class=\"team-title\">\n      <h2>Akveo Team</h2>\n    </div>\n    <div class=\"team-subtitle\">Design & Development</div>\n    <div class=\"team-bio\">\n      We're small team of fullstack software experts. We're crazy about creation of modern and secure software. We help to make\n      your product amazing.\n    </div>\n  </div>\n\n  <div class=\"links\">\n    <a href=\"https://www.akveo.com\" target=\"_blank\">\n      <i class=\"ion-ios-world-outline\"></i>\n    </a>\n    <a href=\"https://www.facebook.com/akveo\" target=\"_blank\">\n      <i class=\"ion-social-facebook\"></i>\n    </a>\n    <a href=\"https://twitter.com/akveo_inc\" target=\"_blank\">\n      <i class=\"ion-social-twitter\"></i>\n    </a>\n    <a href=\"https://github.com/akveo\" target=\"_blank\">\n      <i class=\"ion-social-github\"></i>\n    </a>\n  </div>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/team/team.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) .team-photo {\n  background-image: url(\"/assets/images/team.png\");\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  max-height: 50%; }\n  :host-context(.nb-theme-default) .team-photo .team-link {\n    position: absolute;\n    height: 4rem;\n    width: 4rem;\n    bottom: -2rem;\n    right: 1rem;\n    border-radius: 50%;\n    box-shadow: 0 4px 10px 0 rgba(235, 239, 245, 0.4), 0 0 12px 0 rgba(64, 220, 126, 0.2); }\n\n:host-context(.nb-theme-default) .team-info {\n  padding: 1.5rem 1.5rem 0; }\n  :host-context(.nb-theme-default) .team-info .team-title {\n    color: #2a2a2a;\n    font-family: Exo; }\n    :host-context(.nb-theme-default) .team-info .team-title h2 {\n      margin: 0; }\n  :host-context(.nb-theme-default) .team-info .team-subtitle {\n    margin-bottom: 1rem;\n    color: #a4abb3;\n    font-weight: 300; }\n  :host-context(.nb-theme-default) .team-info .team-bio {\n    text-align: justify;\n    color: #4b4b4b;\n    font-weight: 300; }\n\n:host-context(.nb-theme-default) .links {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 1rem 0; }\n  :host-context(.nb-theme-default) .links a {\n    text-decoration: none;\n    color: #a4abb3; }\n    :host-context(.nb-theme-default) .links a i {\n      font-size: 1.75rem; }\n\n:host-context(.nb-theme-cosmic) .team-photo {\n  background-image: url(\"/assets/images/team.png\");\n  background-position: center;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  max-height: 50%; }\n  :host-context(.nb-theme-cosmic) .team-photo .team-link {\n    position: absolute;\n    height: 4rem;\n    width: 4rem;\n    bottom: -2rem;\n    right: 1rem;\n    border-radius: 50%;\n    box-shadow: 0 4px 10px 0 rgba(47, 41, 107, 0.4), 0 0 12px 0 rgba(0, 249, 166, 0.2); }\n\n:host-context(.nb-theme-cosmic) .team-info {\n  padding: 1.5rem 1.5rem 0; }\n  :host-context(.nb-theme-cosmic) .team-info .team-title {\n    color: #ffffff;\n    font-family: Exo; }\n    :host-context(.nb-theme-cosmic) .team-info .team-title h2 {\n      margin: 0; }\n  :host-context(.nb-theme-cosmic) .team-info .team-subtitle {\n    margin-bottom: 1rem;\n    color: #a1a1e5;\n    font-weight: 300; }\n  :host-context(.nb-theme-cosmic) .team-info .team-bio {\n    text-align: justify;\n    color: #d1d1ff;\n    font-weight: 300; }\n\n:host-context(.nb-theme-cosmic) .links {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 1rem 0; }\n  :host-context(.nb-theme-cosmic) .links a {\n    text-decoration: none;\n    color: #a1a1e5; }\n    :host-context(.nb-theme-cosmic) .links a i {\n      font-size: 1.75rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TeamComponent = (function () {
    function TeamComponent() {
    }
    return TeamComponent;
}());
TeamComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-team',
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/team/team.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/dashboard/team/team.component.html"),
    })
], TeamComponent);

//# sourceMappingURL=team.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACJJREFUaN7twTEBAAAAwiD7pzbFPmAAAAAAAAAAAAAAAGQOLbQAAU3zwM4AAAAASUVORK5CYII=\">\n\n<div class=\"svg-container\">\n  <svg #svgRoot xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\n       [attr.viewBox]=\"styles.viewBox\" preserveAspectRatio=\"xMinYMin meet\" (mousedown)=\"mouseDown($event)\">\n    <defs>\n\n      <filter [attr.id]=\"'blurFilter' + svgControlId\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\">\n        <feGaussianBlur in=\"SourceGraphic\" [attr.stdDeviation]=\"styles.blurRadius\" />\n        <feComponentTransfer>\n          <feFuncA type=\"discrete\" tableValues=\"1 1\"/>\n        </feComponentTransfer>\n      </filter>\n\n      <clipPath [attr.id]=\"'sliderClip' + svgControlId\">\n        <path [attr.d]=\"styles.clipPathStr\" stroke=\"black\"></path>\n      </clipPath>\n\n    </defs>\n    <g [attr.transform]=\"styles.arcTranslateStr\">\n\n      <g class=\"toClip\" [attr.clip-path]=\"'url(#sliderClip' + svgControlId +')'\">\n        <g class=\"toFilter\" [attr.filter]=\"'url(#blurFilter' + svgControlId +')'\">\n          <path [attr.d]=\"arc.d\" [attr.fill]=\"arc.color\" *ngFor=\"let arc of styles.gradArcs\"></path>\n        </g>\n        <!-- ngFor is a quirk fix for webkit rendering issues -->\n        <path [attr.d]=\"styles.nonSelectedArc.d\" [attr.fill]=\"styles.nonSelectedArc.color\" *ngFor=\"let number of [0,1,2,3,4,5]\"></path>\n      </g>\n\n      <circle [attr.cx]=\"styles.thumbPosition.x\" [attr.cy]=\"styles.thumbPosition.y\" [attr.r]=\"pinRadius\"\n              [attr.stroke-width]=\"thumbBorder / scaleFactor\" class=\"circle\"></circle>\n    </g>\n  </svg>\n</div>\n\n<div class=\"temperature-bg\">\n  <ng-content></ng-content>\n</div>\n\n<div class=\"power-bg\" [ngClass]=\"{'off': off}\" (click)=\"switchPower()\">\n  <i class=\"nb-power-circled\"></i>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) {\n  position: relative; }\n  :host-context(.nb-theme-default) img {\n    width: 100%;\n    height: auto;\n    visibility: hidden; }\n  :host-context(.nb-theme-default) .svg-container {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2; }\n  :host-context(.nb-theme-default) .circle {\n    fill: #ffffff;\n    stroke: #40dc7e; }\n  :host-context(.nb-theme-default) .temperature-bg {\n    position: absolute;\n    width: 88%;\n    height: 88%;\n    top: 13%;\n    left: 6%;\n    border-radius: 50%;\n    z-index: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    border: 2px solid #ebeef2; }\n  :host-context(.nb-theme-default) .power-bg {\n    position: absolute;\n    width: 5.25rem;\n    height: 5.25rem;\n    background-color: #ffffff;\n    border-radius: 50%;\n    bottom: 2%;\n    left: 50%;\n    -webkit-transform: translate(-50%, 50%);\n            transform: translate(-50%, 50%);\n    z-index: 2;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    cursor: pointer;\n    font-size: 3rem;\n    color: #2a2a2a;\n    border: 2px solid #ebeef2; }\n    :host-context(.nb-theme-default) .power-bg:hover {\n      background-color: white; }\n    :host-context(.nb-theme-default) .power-bg:active {\n      background-color: #f2f2f2;\n      box-shadow: none; }\n    :host-context(.nb-theme-default) .power-bg.off {\n      color: #a4abb3;\n      text-shadow: none; }\n\n:host-context(.nb-theme-cosmic) {\n  position: relative; }\n  :host-context(.nb-theme-cosmic) img {\n    width: 100%;\n    height: auto;\n    visibility: hidden; }\n  :host-context(.nb-theme-cosmic) .svg-container {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2; }\n  :host-context(.nb-theme-cosmic) .circle {\n    fill: #3d3780;\n    stroke: #00d977; }\n  :host-context(.nb-theme-cosmic) .temperature-bg {\n    position: absolute;\n    width: 88%;\n    height: 88%;\n    top: 13%;\n    left: 6%;\n    border-radius: 50%;\n    z-index: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    border: 2px solid #342e73;\n    background-color: #322c72;\n    border: none; }\n  :host-context(.nb-theme-cosmic) .power-bg {\n    position: absolute;\n    width: 5.25rem;\n    height: 5.25rem;\n    background-color: #3d3780;\n    border-radius: 50%;\n    bottom: 2%;\n    left: 50%;\n    -webkit-transform: translate(-50%, 50%);\n            transform: translate(-50%, 50%);\n    z-index: 2;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    cursor: pointer;\n    font-size: 3rem;\n    color: #ffffff;\n    border: 2px solid #342e73; }\n    :host-context(.nb-theme-cosmic) .power-bg:hover {\n      background-color: #463f92; }\n    :host-context(.nb-theme-cosmic) .power-bg:active {\n      background-color: #352f6e;\n      box-shadow: none; }\n    :host-context(.nb-theme-cosmic) .power-bg.off {\n      color: #a1a1e5;\n      text-shadow: none; }\n  :host-context(.nb-theme-cosmic) .circle {\n    fill: #ffffff;\n    stroke: #ffffff; }\n  :host-context(.nb-theme-cosmic) .power-bg {\n    border: none;\n    box-shadow: 0 8px 20px 0 rgba(40, 37, 89, 0.6);\n    text-shadow: 0 0 6px rgba(255, 255, 255, 0.5); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemperatureDraggerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VIEW_BOX_SIZE = 300;
var TemperatureDraggerComponent = TemperatureDraggerComponent_1 = (function () {
    function TemperatureDraggerComponent() {
        this.fillColors = '#2ec6ff';
        this.disableArcColor = '#999999';
        this.bottomAngle = 90;
        this.arcThickness = 18; // CSS pixels
        this.thumbRadius = 16; // CSS pixels
        this.thumbBorder = 3;
        this.maxLeap = 0.4;
        this.value = 50;
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.min = 0; // min output value
        this.max = 100; // max output value
        this.step = 0.1;
        this.power = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.off = false;
        this.svgControlId = new Date().getTime();
        this.scaleFactor = 1;
        this.bottomAngleRad = 0;
        this.radius = 100;
        this.translateXValue = 0;
        this.translateYValue = 0;
        this.thickness = 6;
        this.pinRadius = 10;
        this.colors = [];
        this.styles = {
            viewBox: '0 0 300 300',
            arcTranslateStr: 'translate(0, 0)',
            clipPathStr: '',
            gradArcs: [],
            nonSelectedArc: {},
            thumbPosition: { x: 0, y: 0 },
            blurRadius: 15,
        };
        this.isMouseDown = false;
        this.init = false;
        this.oldValue = this.value;
    }
    Object.defineProperty(TemperatureDraggerComponent.prototype, "setValue", {
        set: function (value) {
            this.value = value;
        },
        enumerable: true,
        configurable: true
    });
    TemperatureDraggerComponent.prototype.onMouseUp = function (event) {
        this.recalculateValue(event);
        this.isMouseDown = false;
    };
    TemperatureDraggerComponent.prototype.onMouseMove = function (event) {
        this.recalculateValue(event);
    };
    TemperatureDraggerComponent.prototype.onResize = function (event) {
        this.invalidate();
    };
    TemperatureDraggerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // IE fix
        setTimeout(function () {
            _this.invalidate();
            _this.init = true;
        });
    };
    TemperatureDraggerComponent.prototype.ngOnChanges = function () {
        if (this.init) {
            this.invalidate();
        }
    };
    TemperatureDraggerComponent.prototype.mouseDown = function (event) {
        this.isMouseDown = true;
        if (!this.off) {
            this.recalculateValue(event, true);
        }
    };
    TemperatureDraggerComponent.prototype.switchPower = function () {
        this.off = !this.off;
        this.power.emit(!this.off);
        if (this.off) {
            this.oldValue = this.value;
            this.value = this.min;
        }
        else {
            this.value = this.oldValue;
        }
        this.invalidatePinPosition();
    };
    TemperatureDraggerComponent.prototype.invalidate = function () {
        this.bottomAngleRad = TemperatureDraggerComponent_1.toRad(this.bottomAngle);
        this.calculateVars();
        this.invalidateClipPathStr();
        this.invalidateGradientArcs();
        this.invalidatePinPosition();
    };
    TemperatureDraggerComponent.prototype.calculateVars = function () {
        this.bottomAngleRad = TemperatureDraggerComponent_1.toRad(this.bottomAngle);
        this.colors = (typeof this.fillColors === 'string') ? [this.fillColors] : this.fillColors;
        var baseRadius = VIEW_BOX_SIZE / 2;
        var halfAngle = this.bottomAngleRad / 2;
        var svgBoundingRect = this.svgRoot.nativeElement.getBoundingClientRect();
        var svgAreaFactor = svgBoundingRect.height && svgBoundingRect.width / svgBoundingRect.height || 1;
        var svgHeight = VIEW_BOX_SIZE / svgAreaFactor;
        var thumbMaxRadius = this.thumbRadius + this.thumbBorder;
        var thumbMargin = 2 * thumbMaxRadius > this.arcThickness
            ? (thumbMaxRadius - this.arcThickness / 2) / this.scaleFactor
            : 0;
        this.scaleFactor = svgBoundingRect.width / VIEW_BOX_SIZE || 1;
        this.styles.viewBox = "0 0 " + VIEW_BOX_SIZE + " " + svgHeight;
        var circleFactor = this.bottomAngleRad <= Math.PI
            ? (2 / (1 + Math.cos(halfAngle)))
            : (2 * Math.sin(halfAngle) / (1 + Math.cos(halfAngle)));
        if (circleFactor > svgAreaFactor) {
            if (this.bottomAngleRad > Math.PI) {
                this.radius = (VIEW_BOX_SIZE - 2 * thumbMargin) / (2 * Math.sin(halfAngle));
            }
            else {
                this.radius = VIEW_BOX_SIZE / 2 - thumbMargin;
            }
        }
        else {
            this.radius = (svgHeight - 2 * thumbMargin) / (1 + Math.cos(halfAngle));
        }
        this.translateXValue = VIEW_BOX_SIZE / 2 - this.radius;
        this.translateYValue = (svgHeight) / 2 - this.radius * (1 + Math.cos(halfAngle)) / 2;
        this.styles.arcTranslateStr = "translate(" + this.translateXValue + ", " + this.translateYValue + ")";
        this.thickness = this.arcThickness / this.scaleFactor;
        this.pinRadius = this.thumbRadius / this.scaleFactor;
    };
    TemperatureDraggerComponent.prototype.calculateClipPathSettings = function () {
        var halfAngle = this.bottomAngleRad / 2;
        var innerRadius = this.radius - this.thickness;
        var xStartMultiplier = 1 - Math.sin(halfAngle);
        var yMultiplier = 1 + Math.cos(halfAngle);
        var xEndMultiplier = 1 + Math.sin(halfAngle);
        return {
            outer: {
                start: {
                    x: xStartMultiplier * this.radius,
                    y: yMultiplier * this.radius,
                },
                end: {
                    x: xEndMultiplier * this.radius,
                    y: yMultiplier * this.radius,
                },
                radius: this.radius,
            },
            inner: {
                start: {
                    x: xStartMultiplier * innerRadius + this.thickness,
                    y: yMultiplier * innerRadius + this.thickness,
                },
                end: {
                    x: xEndMultiplier * innerRadius + this.thickness,
                    y: yMultiplier * innerRadius + this.thickness,
                },
                radius: innerRadius,
            },
            thickness: this.thickness,
            big: this.bottomAngleRad < Math.PI ? '1' : '0',
        };
    };
    TemperatureDraggerComponent.prototype.invalidateClipPathStr = function () {
        var s = this.calculateClipPathSettings();
        var path = "M " + s.outer.start.x + "," + s.outer.start.y; // Start at startangle top
        // Outer arc
        // Draw an arc of radius 'radius'
        // Arc details...
        path += " A " + s.outer.radius + "," + s.outer.radius + "\n       0 " + s.big + " 1\n       " + s.outer.end.x + "," + s.outer.end.y; // Arc goes to top end angle coordinate
        // Outer to inner connector
        path += " A " + s.thickness / 2 + "," + s.thickness / 2 + "\n       0 1 1\n       " + s.inner.end.x + "," + s.inner.end.y;
        // Inner arc
        path += " A " + s.inner.radius + "," + s.inner.radius + "\n       1 " + s.big + " 0\n       " + s.inner.start.x + "," + s.inner.start.y;
        // Outer to inner connector
        path += " A " + s.thickness / 2 + "," + s.thickness / 2 + "\n       0 1 1\n       " + s.outer.start.x + "," + s.outer.start.y;
        // Close path
        path += ' Z';
        this.styles.clipPathStr = path;
    };
    TemperatureDraggerComponent.prototype.calculateGradientConePaths = function (angleStep) {
        var radius = this.radius;
        function calcX(angle) {
            return radius * (1 - 2 * Math.sin(angle));
        }
        function calcY(angle) {
            return radius * (1 + 2 * Math.cos(angle));
        }
        var gradArray = [];
        for (var i = 0, currentAngle = this.bottomAngleRad / 2; i < this.colors.length; i++, currentAngle += angleStep) {
            gradArray.push({
                start: { x: calcX(currentAngle), y: calcY(currentAngle) },
                end: { x: calcX(currentAngle + angleStep), y: calcY(currentAngle + angleStep) },
                big: Math.PI <= angleStep ? 1 : 0,
            });
        }
        return gradArray;
    };
    TemperatureDraggerComponent.prototype.invalidateGradientArcs = function () {
        var radius = this.radius;
        function getArc(des) {
            return "M " + radius + "," + radius + "\n         L " + des.start.x + "," + des.start.y + "\n         A " + 2 * radius + "," + 2 * radius + "\n         0 " + des.big + " 1\n         " + des.end.x + "," + des.end.y + "\n         Z";
        }
        var angleStep = (2 * Math.PI - this.bottomAngleRad) / this.colors.length;
        var s = this.calculateGradientConePaths(angleStep);
        this.styles.gradArcs = [];
        for (var i = 0; i < s.length; i++) {
            var si = s[i];
            var arcValue = getArc(si);
            this.styles.gradArcs.push({
                color: this.colors[i],
                d: arcValue,
            });
        }
        this.styles.blurRadius = 2 * radius * Math.sin(angleStep / 6);
    };
    TemperatureDraggerComponent.prototype.invalidateNonSelectedArc = function () {
        var angle = this.bottomAngleRad / 2 + (1 - this.getValuePercentage()) * (2 * Math.PI - this.bottomAngleRad);
        this.styles.nonSelectedArc = {
            color: this.disableArcColor,
            d: "M " + this.radius + "," + this.radius + "\n       L " + this.radius + "," + 3 * this.radius + "\n       A " + 2 * this.radius + "," + 2 * this.radius + "\n       1 " + (angle > Math.PI ? '1' : '0') + " 0\n       " + (this.radius + this.radius * 2 * Math.sin(angle)) + "," + (this.radius + this.radius * 2 * Math.cos(angle)) + "\n       Z",
        };
    };
    TemperatureDraggerComponent.prototype.invalidatePinPosition = function () {
        var radiusOffset = this.thickness / 2;
        var curveRadius = this.radius - radiusOffset;
        var actualAngle = (2 * Math.PI - this.bottomAngleRad) * this.getValuePercentage() + this.bottomAngleRad / 2;
        this.styles.thumbPosition = {
            x: curveRadius * (1 - Math.sin(actualAngle)) + radiusOffset,
            y: curveRadius * (1 + Math.cos(actualAngle)) + radiusOffset,
        };
        this.invalidateNonSelectedArc();
    };
    TemperatureDraggerComponent.prototype.recalculateValue = function (event, allowJumping) {
        if (allowJumping === void 0) { allowJumping = false; }
        if (this.isMouseDown && !this.off) {
            var rect = this.svgRoot.nativeElement.getBoundingClientRect();
            var center = {
                x: rect.left + VIEW_BOX_SIZE * this.scaleFactor / 2,
                y: rect.top + (this.translateYValue + this.radius) * this.scaleFactor,
            };
            var actualAngle = Math.atan2(center.x - event.clientX, event.clientY - center.y);
            if (actualAngle < 0) {
                actualAngle = actualAngle + 2 * Math.PI;
            }
            var previousRelativeValue = this.getValuePercentage();
            var relativeValue = 0;
            if (actualAngle < this.bottomAngleRad / 2) {
                relativeValue = 0;
            }
            else if (actualAngle > 2 * Math.PI - this.bottomAngleRad / 2) {
                relativeValue = 1;
            }
            else {
                relativeValue = (actualAngle - this.bottomAngleRad / 2) / (2 * Math.PI - this.bottomAngleRad);
            }
            var value = this.toValueNumber(relativeValue);
            if (this.value !== value && (allowJumping || Math.abs(relativeValue - previousRelativeValue) < this.maxLeap)) {
                this.value = value;
                this.valueChange.emit(this.value);
                this.invalidatePinPosition();
            }
        }
    };
    TemperatureDraggerComponent.prototype.getValuePercentage = function () {
        return (this.value - this.min) / (this.max - this.min);
    };
    TemperatureDraggerComponent.prototype.toValueNumber = function (factor) {
        return Math.round(factor * (this.max - this.min) / this.step) * this.step + this.min;
    };
    TemperatureDraggerComponent.toRad = function (angle) {
        return Math.PI * angle / 180;
    };
    return TemperatureDraggerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('svgRoot'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], TemperatureDraggerComponent.prototype, "svgRoot", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TemperatureDraggerComponent.prototype, "fillColors", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TemperatureDraggerComponent.prototype, "disableArcColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TemperatureDraggerComponent.prototype, "bottomAngle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TemperatureDraggerComponent.prototype, "arcThickness", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TemperatureDraggerComponent.prototype, "thumbRadius", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TemperatureDraggerComponent.prototype, "thumbBorder", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TemperatureDraggerComponent.prototype, "maxLeap", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('valueChange'),
    __metadata("design:type", Object)
], TemperatureDraggerComponent.prototype, "valueChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('value'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], TemperatureDraggerComponent.prototype, "setValue", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TemperatureDraggerComponent.prototype, "min", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TemperatureDraggerComponent.prototype, "max", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TemperatureDraggerComponent.prototype, "step", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemperatureDraggerComponent.prototype, "power", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:mouseup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TemperatureDraggerComponent.prototype, "onMouseUp", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:mousemove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TemperatureDraggerComponent.prototype, "onMouseMove", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TemperatureDraggerComponent.prototype, "onResize", null);
TemperatureDraggerComponent = TemperatureDraggerComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-temperature-dragger',
        template: __webpack_require__("../../../../../src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.scss")],
    }),
    __metadata("design:paramtypes", [])
], TemperatureDraggerComponent);

var TemperatureDraggerComponent_1, _a;
//# sourceMappingURL=temperature-dragger.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/temperature/temperature.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"large\">\n  <nb-tabset fullWidth>\n\n    <nb-tab tabTitle=\"Air Conditoner\">\n\n      <div class=\"slider-container\">\n        <ngx-temperature-dragger [(value)]=\"temperature\" (power)=\"temperatureOff = !$event\"\n                                 [min]=\"12\" [max]=\"35\" [disableArcColor]=\"colors.layoutBg\"\n                                 [fillColors]=\"colors.temperature\">\n\n          <div class=\"slider-value-container\"  [ngClass]=\"{ 'off': temperatureOff }\">\n            <div class=\"value temperature\">\n              {{ temperatureOff ? '--' : (temperature | ngxRound) }}\n            </div>\n            <div class=\"desc\">\n              Celsius\n            </div>\n          </div>\n        </ngx-temperature-dragger>\n      </div>\n\n      <div [(ngModel)]=\"temperatureMode\" ngbRadioGroup data-toggle=\"buttons\"\n           class=\"btn-group btn-divided-group btn-outline-divided-group btn-group-full-width\">\n        <label class=\"btn btn-icon\">\n          <input type=\"radio\" value=\"cool\"/><i class=\"nb-snowy-circled\"></i>\n        </label>\n        <label class=\"btn btn-icon\">\n          <input type=\"radio\" value=\"warm\"/><i class=\"nb-sunny-circled\"></i>\n        </label>\n        <label class=\"btn btn-icon\">\n          <input type=\"radio\" value=\"heat\"/><i class=\"nb-flame-circled\"></i>\n        </label>\n        <label class=\"btn btn-icon\">\n          <input type=\"radio\" value=\"fan\"/><i class=\"nb-loop-circled\"></i>\n        </label>\n      </div>\n    </nb-tab>\n\n    <nb-tab tabTitle=\"Hall Fan 1\">\n\n      <div class=\"slider-container\">\n        <ngx-temperature-dragger [(value)]=\"humidity\" (power)=\"humidityOff = !$event\"\n                                 [min]=\"0\" [max]=\"100\" [disableArcColor]=\"colors.layoutBg\"\n                                 [fillColors]=\"colors.temperature\">\n\n          <div class=\"slider-value-container\"  [ngClass]=\"{ 'off': humidityOff }\">\n            <div class=\"value humidity\">\n              {{ humidityOff ? '--' : (humidity | ngxRound) }}\n            </div>\n          </div>\n        </ngx-temperature-dragger>\n      </div>\n\n      <div [(ngModel)]=\"humidityMode\" ngbRadioGroup data-toggle=\"buttons\"\n           class=\"btn-group btn-divided-group btn-outline-divided-group btn-group-full-width\">\n        <label class=\"btn btn-icon\">\n          <input type=\"radio\" value=\"cool\"/><i class=\"nb-snowy-circled\"></i>\n        </label>\n        <label class=\"btn btn-icon\">\n          <input type=\"radio\" value=\"warm\"/><i class=\"nb-sunny-circled\"></i>\n        </label>\n        <label class=\"btn btn-icon\">\n          <input type=\"radio\" value=\"heat\"/><i class=\"nb-flame-circled\"></i>\n        </label>\n        <label class=\"btn btn-icon\">\n          <input type=\"radio\" value=\"fan\"/><i class=\"nb-loop-circled\"></i>\n        </label>\n      </div>\n    </nb-tab>\n  </nb-tabset>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/temperature/temperature.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-tabset {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%; }\n  :host-context(.nb-theme-default) nb-tabset /deep/ ul {\n    border: none; }\n\n:host-context(.nb-theme-default) nb-tab.content-active {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: relative;\n  height: 100%; }\n\n:host-context(.nb-theme-default) .slider-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -ms-flex: 1 1 auto;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n:host-context(.nb-theme-default) ngx-temperature-dragger {\n  margin-top: -1.5rem;\n  width: 80%;\n  max-width: 300px; }\n\n:host-context(.nb-theme-default) .slider-value-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  :host-context(.nb-theme-default) .slider-value-container .value {\n    position: relative;\n    color: #2a2a2a;\n    font-family: Exo;\n    font-size: 4rem;\n    font-weight: 500; }\n    :host-context(.nb-theme-default) .slider-value-container .value.temperature::before {\n      position: absolute;\n      content: '\\B0';\n      top: 0;\n      right: -1.25rem; }\n    :host-context(.nb-theme-default) .slider-value-container .value.humidity::before {\n      position: absolute;\n      content: '%';\n      bottom: 0.5rem;\n      right: -2.5rem;\n      color: #a4abb3;\n      font-size: 2.5rem;\n      font-weight: 300; }\n  :host-context(.nb-theme-default) .slider-value-container .desc {\n    color: #a4abb3;\n    font-weight: 300; }\n  :host-context(.nb-theme-default) .slider-value-container.off .value {\n    color: #a4abb3;\n    letter-spacing: 0.25rem;\n    padding-left: 0.5rem; }\n    :host-context(.nb-theme-default) .slider-value-container.off .value::before {\n      display: none; }\n  :host-context(.nb-theme-default) .slider-value-container.off .desc {\n    display: none; }\n\n:host-context(.nb-theme-default) .btn-group {\n  padding: 1.25rem;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n:host-context(.nb-theme-default) .btn-icon {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 4.5rem;\n  height: 4.5rem;\n  padding: 0;\n  margin-bottom: 0;\n  color: #a4abb3; }\n  :host-context(.nb-theme-default) .btn-icon.active {\n    border-color: #40dc7e;\n    color: #40dc7e; }\n  :host-context(.nb-theme-default) .btn-icon i {\n    font-size: 2.25rem;\n    line-height: 1; }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) ngx-temperature-dragger {\n    max-width: 250px; }\n    :host-context(.nb-theme-default) ngx-temperature-dragger /deep/ .power-bg {\n      width: 4rem;\n      height: 4rem;\n      font-size: 3rem; }\n  :host-context(.nb-theme-default) .slider-value-container .value {\n    font-size: 3rem; }\n    :host-context(.nb-theme-default) .slider-value-container .value.humidity::before {\n      right: -2rem;\n      font-size: 2rem; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) .btn-icon {\n    width: 3.25rem;\n    height: 3.25rem; }\n    :host-context(.nb-theme-default) .btn-icon i {\n      font-size: 1.75rem; }\n  :host-context(.nb-theme-default) nb-tabset /deep/ ul {\n    padding: 0 0.5rem; }\n    :host-context(.nb-theme-default) nb-tabset /deep/ ul a {\n      padding: 1.25rem 1rem; } }\n\n:host-context(.nb-theme-cosmic) nb-tabset {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul {\n    border: none; }\n\n:host-context(.nb-theme-cosmic) nb-tab.content-active {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: relative;\n  height: 100%; }\n\n:host-context(.nb-theme-cosmic) .slider-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -ms-flex: 1 1 auto;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n:host-context(.nb-theme-cosmic) ngx-temperature-dragger {\n  margin-top: -1.5rem;\n  width: 80%;\n  max-width: 300px; }\n\n:host-context(.nb-theme-cosmic) .slider-value-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  :host-context(.nb-theme-cosmic) .slider-value-container .value {\n    position: relative;\n    color: #ffffff;\n    font-family: Exo;\n    font-size: 4rem;\n    font-weight: 500; }\n    :host-context(.nb-theme-cosmic) .slider-value-container .value.temperature::before {\n      position: absolute;\n      content: '\\B0';\n      top: 0;\n      right: -1.25rem; }\n    :host-context(.nb-theme-cosmic) .slider-value-container .value.humidity::before {\n      position: absolute;\n      content: '%';\n      bottom: 0.5rem;\n      right: -2.5rem;\n      color: #a1a1e5;\n      font-size: 2.5rem;\n      font-weight: 300; }\n  :host-context(.nb-theme-cosmic) .slider-value-container .desc {\n    color: #a1a1e5;\n    font-weight: 300; }\n  :host-context(.nb-theme-cosmic) .slider-value-container.off .value {\n    color: #a1a1e5;\n    letter-spacing: 0.25rem;\n    padding-left: 0.5rem; }\n    :host-context(.nb-theme-cosmic) .slider-value-container.off .value::before {\n      display: none; }\n  :host-context(.nb-theme-cosmic) .slider-value-container.off .desc {\n    display: none; }\n\n:host-context(.nb-theme-cosmic) .btn-group {\n  padding: 1.25rem;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n:host-context(.nb-theme-cosmic) .btn-icon {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 4.5rem;\n  height: 4.5rem;\n  padding: 0;\n  margin-bottom: 0;\n  color: #a1a1e5; }\n  :host-context(.nb-theme-cosmic) .btn-icon.active {\n    border-color: #00f9a6;\n    color: #00f9a6; }\n  :host-context(.nb-theme-cosmic) .btn-icon i {\n    font-size: 2.25rem;\n    line-height: 1; }\n\n:host-context(.nb-theme-cosmic) .btn-icon.active {\n  color: #ffffff;\n  border-color: #00f9a6;\n  box-shadow: 0 2px 12px 0 rgba(0, 249, 166, 0.25);\n  background-color: rgba(0, 249, 166, 0.25); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) ngx-temperature-dragger {\n    max-width: 250px; }\n    :host-context(.nb-theme-cosmic) ngx-temperature-dragger /deep/ .power-bg {\n      width: 4rem;\n      height: 4rem;\n      font-size: 3rem; }\n  :host-context(.nb-theme-cosmic) .slider-value-container .value {\n    font-size: 3rem; }\n    :host-context(.nb-theme-cosmic) .slider-value-container .value.humidity::before {\n      right: -2rem;\n      font-size: 2rem; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) .btn-icon {\n    width: 3.25rem;\n    height: 3.25rem; }\n    :host-context(.nb-theme-cosmic) .btn-icon i {\n      font-size: 1.75rem; }\n  :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul {\n    padding: 0 0.5rem; }\n    :host-context(.nb-theme-cosmic) nb-tabset /deep/ ul a {\n      padding: 1.25rem 1rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/temperature/temperature.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemperatureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TemperatureComponent = (function () {
    function TemperatureComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.temperature = 24;
        this.temperatureOff = false;
        this.temperatureMode = 'cool';
        this.humidity = 87;
        this.humidityOff = false;
        this.humidityMode = 'heat';
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            _this.colors = config.variables;
        });
    }
    TemperatureComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return TemperatureComponent;
}());
TemperatureComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-temperature',
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/temperature/temperature.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/dashboard/temperature/temperature.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], TemperatureComponent);

var _a;
//# sourceMappingURL=temperature.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/traffic/traffic-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrafficChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var points = [300, 520, 435, 530, 730, 620, 660, 860];
var TrafficChartComponent = (function () {
    function TrafficChartComponent(theme) {
        this.theme = theme;
        this.type = 'month';
        this.types = ['week', 'month', 'year'];
        this.option = {};
    }
    TrafficChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().delay(1).subscribe(function (config) {
            var trafficTheme = config.variables.traffic;
            _this.option = Object.assign({}, {
                grid: {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: points,
                },
                yAxis: {
                    boundaryGap: [0, '5%'],
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: trafficTheme.colorBlack,
                            opacity: 0.06,
                            width: '1',
                        },
                    },
                },
                tooltip: {
                    axisPointer: {
                        type: 'shadow',
                    },
                    textStyle: {
                        color: trafficTheme.tooltipTextColor,
                        fontWeight: trafficTheme.tooltipFontWeight,
                        fontSize: 16,
                    },
                    position: 'top',
                    backgroundColor: trafficTheme.tooltipBg,
                    borderColor: trafficTheme.tooltipBorderColor,
                    borderWidth: 3,
                    formatter: '{c0} MB',
                    extraCssText: trafficTheme.tooltipExtraCss,
                },
                series: [
                    {
                        type: 'line',
                        symbol: 'circle',
                        symbolSize: 8,
                        sampling: 'average',
                        silent: true,
                        itemStyle: {
                            normal: {
                                color: trafficTheme.shadowLineDarkBg,
                            },
                            emphasis: {
                                color: 'rgba(0,0,0,0)',
                                borderColor: 'rgba(0,0,0,0)',
                                borderWidth: 0,
                            },
                        },
                        lineStyle: {
                            normal: {
                                width: 2,
                                color: trafficTheme.shadowLineDarkBg,
                            },
                        },
                        data: points.map(function (p) { return p - 15; }),
                    },
                    {
                        type: 'line',
                        symbol: 'circle',
                        symbolSize: 6,
                        sampling: 'average',
                        itemStyle: {
                            normal: {
                                color: trafficTheme.itemColor,
                                borderColor: trafficTheme.itemBorderColor,
                                borderWidth: 2,
                            },
                            emphasis: {
                                color: 'white',
                                borderColor: trafficTheme.itemEmphasisBorderColor,
                                borderWidth: 2,
                            },
                        },
                        lineStyle: {
                            normal: {
                                width: 2,
                                color: trafficTheme.lineBg,
                                shadowColor: trafficTheme.lineBg,
                                shadowBlur: trafficTheme.lineShadowBlur,
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: trafficTheme.gradFrom,
                                    }, {
                                        offset: 1,
                                        color: trafficTheme.gradTo,
                                    }]),
                                opacity: 1,
                            },
                        },
                        data: points,
                    },
                ],
            });
        });
    };
    TrafficChartComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return TrafficChartComponent;
}());
TrafficChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-traffic-chart',
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/traffic/traffic.component.scss")],
        template: "\n    <div echarts [options]=\"option\" class=\"echart\"></div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], TrafficChartComponent);

var _a;
//# sourceMappingURL=traffic-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/traffic/traffic.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) nb-card-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0.675rem 0.5rem 0.5rem 1.25rem;\n  border: none; }\n\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: hidden;\n  position: relative; }\n\n:host-context(.nb-theme-default) /deep/ canvas {\n  border-bottom-left-radius: 0.375rem;\n  border-bottom-right-radius: 0.375rem; }\n\n:host-context(.nb-theme-default) .echart {\n  position: absolute;\n  height: 100%;\n  width: 100%; }\n\n:host-context(.nb-theme-default) .dropdown {\n  min-width: 120px; }\n\n:host-context(.nb-theme-cosmic) nb-card-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0.675rem 0.5rem 0.5rem 1.25rem;\n  border: none; }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  overflow: hidden;\n  position: relative; }\n\n:host-context(.nb-theme-cosmic) /deep/ canvas {\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem; }\n\n:host-context(.nb-theme-cosmic) .echart {\n  position: absolute;\n  height: 100%;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) .dropdown {\n  min-width: 120px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/traffic/traffic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrafficComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrafficComponent = (function () {
    function TrafficComponent(themeService) {
        var _this = this;
        this.themeService = themeService;
        this.type = 'month';
        this.types = ['week', 'month', 'year'];
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    TrafficComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return TrafficComponent;
}());
TrafficComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-traffic',
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/traffic/traffic.component.scss")],
        template: "\n    <nb-card size=\"xsmall\">\n      <nb-card-header>\n        <span>Traffic Consumption</span>\n        <div class=\"dropdown ghost-dropdown\" ngbDropdown>\n          <button type=\"button\" class=\"btn btn-sm\" ngbDropdownToggle\n                  [ngClass]=\"{ 'btn-success': currentTheme == 'default', 'btn-primary': currentTheme != 'default'}\">\n            {{ type }}\n          </button>\n          <ul ngbDropdown class=\"dropdown-menu\">\n            <li class=\"dropdown-item\" *ngFor=\"let t of types\" (click)=\"type = t\">{{ t }}</li>\n          </ul>\n        </div>\n      </nb-card-header>\n      <nb-card-body class=\"p-0\">\n        <ngx-traffic-chart></ngx-traffic-chart>\n      </nb-card-body>\n    </nb-card>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], TrafficComponent);

var _a;
//# sourceMappingURL=traffic.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/weather/weather.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"medium\">\n  <nb-card-body>\n    <div class=\"location\">\n      <span>New York</span>\n    </div>\n    <div class=\"date\">\n      <span>Mon 29 May</span>\n    </div>\n    <div class=\"daily-forecast\">\n      <div class=\"info\">\n        <div class=\"temperature\">\n          <span>20&deg;</span>\n        </div>\n        <div class=\"icon\">\n          <i class=\"ion-ios-sunny-outline\"></i>\n        </div>\n      </div>\n      <div class=\"details\">\n        <div class=\"parameter\">\n          <span class=\"parameter-name\">max</span>\n          <span class=\"parameter-value\">23&deg;</span>\n        </div>\n        <div class=\"parameter\">\n          <span class=\"parameter-name\">min</span>\n          <span class=\"parameter-value\">19&deg;</span>\n        </div>\n        <div class=\"parameter\">\n          <span class=\"parameter-name\">wind</span>\n          <span class=\"parameter-value\">4 km/h</span>\n        </div>\n        <div class=\"parameter\">\n          <span class=\"parameter-name\">hum</span>\n          <span class=\"parameter-value\">87%</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"weekly-forecast\">\n      <div class=\"day\">\n        <span class=\"caption\">Sun</span>\n        <i class=\"ion-ios-cloudy-outline\"></i>\n        <span class=\"temperature\">17&deg;</span>\n      </div>\n      <div class=\"day\">\n        <span class=\"caption\">Mon</span>\n        <i class=\"ion-ios-sunny-outline\"></i>\n        <span class=\"temperature\">19&deg;</span>\n      </div>\n      <div class=\"day\">\n        <span class=\"caption\">Tue</span>\n        <i class=\"ion-ios-rainy-outline\"></i>\n        <span class=\"temperature\">22&deg;</span>\n      </div>\n      <div class=\"day\">\n        <span class=\"caption\">Wed</span>\n        <i class=\"ion-ios-partlysunny-outline\"></i>\n        <span class=\"temperature\">21&deg;</span>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/weather/weather.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card {\n  background-image: none; }\n\n:host-context(.nb-theme-default) nb-card-body {\n  height: 100%;\n  padding: 2rem;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .location {\n  font-family: Exo;\n  font-size: 2.5rem;\n  font-weight: 400;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .date {\n  font-family: Roboto;\n  font-size: 1.25rem;\n  line-height: 1.25rem;\n  font-weight: 300; }\n\n:host-context(.nb-theme-default) .daily-forecast {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-top: -1.5rem; }\n  :host-context(.nb-theme-default) .daily-forecast .info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n    :host-context(.nb-theme-default) .daily-forecast .info .temperature {\n      font-size: 5rem;\n      font-weight: 500;\n      font-family: Exo;\n      color: #2a2a2a;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      margin-top: 2rem; }\n    :host-context(.nb-theme-default) .daily-forecast .info .icon {\n      font-size: 10rem;\n      line-height: 10rem;\n      color: #40dc7e; }\n  :host-context(.nb-theme-default) .daily-forecast .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n    :host-context(.nb-theme-default) .daily-forecast .details .parameter {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      text-align: center; }\n      :host-context(.nb-theme-default) .daily-forecast .details .parameter .parameter-name {\n        font-family: Roboto;\n        font-size: 1.25rem;\n        font-weight: 300;\n        line-height: 2rem; }\n      :host-context(.nb-theme-default) .daily-forecast .details .parameter .parameter-value {\n        font-family: Exo;\n        color: #2a2a2a;\n        font-weight: 500; }\n\n:host-context(.nb-theme-default) .weekly-forecast {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin-top: 2rem; }\n  :host-context(.nb-theme-default) .weekly-forecast .day {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    text-align: center; }\n    :host-context(.nb-theme-default) .weekly-forecast .day .caption {\n      text-transform: uppercase;\n      font-family: Exo;\n      color: #2a2a2a;\n      font-weight: 600;\n      font-size: 1.25rem; }\n    :host-context(.nb-theme-default) .weekly-forecast .day i {\n      font-size: 2.5rem;\n      line-height: 2.5rem; }\n    :host-context(.nb-theme-default) .weekly-forecast .day .temperature {\n      color: #2a2a2a;\n      font-family: Exo;\n      font-weight: 600;\n      font-size: 1.25rem; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) nb-card-body {\n    padding-left: 1rem;\n    padding-right: 1rem; } }\n\n:host-context(.nb-theme-cosmic) nb-card {\n  background-image: radial-gradient(circle at 50% 50%, #423f8c, #302c6e); }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  height: 100%;\n  padding: 2rem;\n  color: #a1a1e5; }\n\n:host-context(.nb-theme-cosmic) .location {\n  font-family: Exo;\n  font-size: 2.5rem;\n  font-weight: 400;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .date {\n  font-family: Roboto;\n  font-size: 1.25rem;\n  line-height: 1.25rem;\n  font-weight: 300; }\n\n:host-context(.nb-theme-cosmic) .daily-forecast {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-top: -1.5rem; }\n  :host-context(.nb-theme-cosmic) .daily-forecast .info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n    :host-context(.nb-theme-cosmic) .daily-forecast .info .temperature {\n      font-size: 5rem;\n      font-weight: 500;\n      font-family: Exo;\n      color: #ffffff;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      margin-top: 2rem; }\n    :host-context(.nb-theme-cosmic) .daily-forecast .info .icon {\n      font-size: 10rem;\n      line-height: 10rem;\n      color: #00d977;\n      color: #a1a1e5;\n      text-shadow: 0 3px 0 #665ebd, 0 4px 10px rgba(33, 7, 77, 0.5), 0 2px 10px #928dff; }\n  :host-context(.nb-theme-cosmic) .daily-forecast .details {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n    :host-context(.nb-theme-cosmic) .daily-forecast .details .parameter {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      text-align: center; }\n      :host-context(.nb-theme-cosmic) .daily-forecast .details .parameter .parameter-name {\n        font-family: Roboto;\n        font-size: 1.25rem;\n        font-weight: 300;\n        line-height: 2rem; }\n      :host-context(.nb-theme-cosmic) .daily-forecast .details .parameter .parameter-value {\n        font-family: Exo;\n        color: #ffffff;\n        font-weight: 500; }\n\n:host-context(.nb-theme-cosmic) .weekly-forecast {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin-top: 2rem; }\n  :host-context(.nb-theme-cosmic) .weekly-forecast .day {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    text-align: center; }\n    :host-context(.nb-theme-cosmic) .weekly-forecast .day .caption {\n      text-transform: uppercase;\n      font-family: Exo;\n      color: #ffffff;\n      font-weight: 600;\n      font-size: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .weekly-forecast .day i {\n      font-size: 2.5rem;\n      line-height: 2.5rem; }\n    :host-context(.nb-theme-cosmic) .weekly-forecast .day .temperature {\n      color: #ffffff;\n      font-family: Exo;\n      font-weight: 600;\n      font-size: 1.25rem; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) nb-card-body {\n    padding-left: 1rem;\n    padding-right: 1rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/weather/weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WeatherComponent = (function () {
    function WeatherComponent() {
    }
    return WeatherComponent;
}());
WeatherComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-weather',
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/weather/weather.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/dashboard/weather/weather.component.html"),
    })
], WeatherComponent);

//# sourceMappingURL=weather.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages-menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU_ITEMS; });
var MENU_ITEMS = [
    {
        title: 'Dashboard',
        icon: 'ion-home',
        link: '/pages/dashboard',
        home: true,
    },
    {
        title: 'Control at your tips',
        group: true,
    },
    {
        title: 'Rooms',
        icon: 'ion-grid',
        link: '/pages/rooms',
        children: [
            {
                title: 'Living Room',
                link: '/pages/rooms/room1',
            },
            {
                title: 'Hallway',
                link: '/pages/rooms/room2',
            },
            {
                title: 'Bedroom',
                link: '/pages/rooms/room3',
            },
            {
                title: 'Kitchen',
                link: '/pages/rooms/room4',
            },
        ],
    },
    {
        title: 'Smart Energy Module',
        icon: 'ion-flash',
        children: [
            {
                title: 'Readings',
                link: '/pages/energy/reading',
            },
            {
                title: 'Settings',
                link: '/pages/energy/settings',
            },
        ],
    },
    {
        title: 'Smart Camera Module',
        icon: 'ion-videocamera',
        children: [
            {
                title: 'Live View',
                link: '/pages/camera/view',
            }, {
                title: 'Settings',
                link: '/pages/camera/settings',
            },
        ],
    },
    {
        title: 'General Settings',
        icon: 'ion-gear-b',
        link: '/pages/settings',
        children: [
            {
                title: 'Module Settings',
                link: '/pages/settings/module',
            },
            {
                title: 'App Settings',
                link: '/pages/settings/app',
            },
            {
                title: 'Profile Settings',
                link: '/pages/settings/profile',
            },
        ],
    },
    {
        title: 'Serive Technicians',
        icon: 'ion-settings',
        children: [
            {
                title: 'Generate Auth Code',
                link: '/pages/service/authCode',
            },
            {
                title: 'Import Modules',
                link: '/pages/service/import',
            },
            {
                title: 'User management',
                link: '/pages/service/users',
            },
        ],
    },
    {
        title: 'Admin',
        icon: 'ion-paper-airplane',
        children: [
            {
                title: 'Server Settings',
                link: '/pages/admin/server/settings',
            },
            {
                title: 'Server management',
                link: '/pages/admin/server/management',
            },
            {
                title: 'User management',
                link: '/pages/admin/users/management',
            },
            {
                title: 'Servic management',
                link: '/pages/admin/service/management',
            },
        ],
    },
];
//# sourceMappingURL=pages-menu.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_component__["a" /* PagesComponent */],
        children: [{
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
            }, {
                path: 'ui-features',
                loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
            }, {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule',
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule',
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule',
            }, {
                path: 'editors',
                loadChildren: './editors/editors.module#EditorsModule',
            }, {
                path: 'forms',
                loadChildren: './forms/forms.module#FormsModule',
            }, {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule',
            }, {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            }],
    }];
var PagesRoutingModule = (function () {
    function PagesRoutingModule() {
    }
    return PagesRoutingModule;
}());
PagesRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]],
    })
], PagesRoutingModule);

//# sourceMappingURL=pages-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_menu__ = __webpack_require__("../../../../../src/app/pages/pages-menu.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PagesComponent = (function () {
    function PagesComponent() {
        this.menu = __WEBPACK_IMPORTED_MODULE_1__pages_menu__["a" /* MENU_ITEMS */];
    }
    return PagesComponent;
}());
PagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-pages',
        template: "\n    <ngx-backend-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet></router-outlet>\n    </ngx-backend-layout>\n  ",
    })
], PagesComponent);

//# sourceMappingURL=pages.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_module__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_routing_module__ = __webpack_require__("../../../../../src/app/pages/pages-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PAGES_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_1__pages_component__["a" /* PagesComponent */],
];
var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__pages_routing_module__["a" /* PagesRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_module__["a" /* DashboardModule */],
        ],
        declarations: PAGES_COMPONENTS.slice(),
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/redisAPI/redisApi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedisApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_data_users_service__ = __webpack_require__("../../../../../src/app/@core/data/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RedisApiService = (function () {
    function RedisApiService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.isDev = false;
    }
    RedisApiService.prototype.dashBtnClick = function (state) {
        this.loadToken();
        this.user = this.userService.getUser();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('control/dashboard/', state, this.user);
        return this.http.get(ep, { headers: headers })
            .subscribe(function (res) { return res.json(); });
    };
    RedisApiService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    RedisApiService.prototype.prepEndpoint = function (ep, state, user) {
        if (this.isDev) {
            return ep;
        }
        else {
            return ep + 'dashBtn1/' + state + '/' + user.value.id;
        }
    };
    return RedisApiService;
}());
RedisApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core_data_users_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_data_users_service__["a" /* UserService */]) === "function" && _b || Object])
], RedisApiService);

var _a, _b;
//# sourceMappingURL=redisApi.service.js.map

/***/ }),

/***/ "../../../../../src/assets/images/square_pattern.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "square_pattern.b7c0827326f8d621b1ed.svg";

/***/ }),

/***/ "../../../../../src/assets/images/square_pattern_cosmic.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "square_pattern_cosmic.b8dd34d94d07e430fdc6.svg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */ var environment = {
    production: false,
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
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.info(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map