webpackJsonp([1,4],{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)(false);
// imports


// module
exports.push([module.i, ".out{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height:100%;\n    width:100%\n}\n.toolbar{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 60px;\n    background:#ffffff;\n        padding: 0 20px 0 10px;\n}\n.toolbar button{\n    background: none;\n    padding-left:10px;\n\n}\ndiv.container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 100vh;\n}\n.sb{\n    width:60px;\n    height:100%;\n    background:#0f0f0f;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    \n}\n.sb button{background:none;color:white}\n.pane{\n    background:#0f0f0f;\n    top: 0;\n    bottom: 0;\n    width: 300px;\n    height: 100%;\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    color: white\n}\n\n.content{\n    width: 100%;\n    height: 100%;\n    overflow-y:scroll;\n    \n}\n.cover{\n    display: none;\n\n}\n\n.tweets{\n    margin:45px;\n    list-style: none;\n\n}\n\n.tweets li:nth-child(even) {-webkit-box-pack: end;-ms-flex-pack: end;justify-content: flex-end}\n.tweets li:nth-child(odd) {-webkit-box-pack: start;-ms-flex-pack: start;justify-content: flex-start}\n.tweets li > div{\n    margin: 10px;\n      box-shadow: 0 3px 1px grey;;\n    border-radius:4px;\n    max-width: 600px;\n    min-width: 300px\n}\n.tweets li{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    max-width: 100%;\n    min-width: 100%\n}\n.twbody,.twinfo{\n    padding: 10px;\n}\n.twbody{\n  background: white;\n}\n.twinfo{\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-radius: 4px 4px  0 0 ;\n    background: #00bcd4;\n}\n\n\n\n.twinfo > *{\n    margin-top: 15px;\n}\n.tw_dp{\n    border-radius: 100px;\n}\n\n.pane{\n    padding: 4px;\n    \n}\n\n.userpane{\n    padding: 7px;\n    border-radius: 3px;\n    overflow: hidden;\n    margin: 4px;\n}\n.ico{\n    font-size:60px\n}\n.toolbar{\n    color:#00bcd4;\n}\n\n\n\n@media (max-width:700px){\n\n       .container .drawer{\n           position: absolute;\n           z-index: 5;\n           width: 100%;\n        \n       }\n       .content{\n           width:100vw;\n       }\n     .container .cover{\n         display: block;\n         height: 100%;\n         width: 100%;\n         background: rgba(0,0,0,.5)\n     }\n     .tweets{\n    margin:5px;\n    list-style: none;\n\n}\n\n.tweets li:nth-child(even) {-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center}\n.tweets li:nth-child(odd) {-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center}\n\n.userpane{\n    overflow: scroll;\n}\n.ico{\n    font-size: 50px;\n}\n\n.pane{\n    width:250px\n}\n\n.toolbar{\n    margin: 0;\n    color: #607d8b;\n}\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

module.exports = "\n<router-outlet>\n  <div class=\"container\">\n    <div class=\"container drawer\" [style.display]=\"show\">\n      <div class=\"container\">\n        <div class=\"sb\">\n          <div style=\"display:flex;height:100%;flex-direction:column;padding-top:30px;align-items: center;\"><img style=\"border-radius:50px;width:30px;height:30px;\" title=\"{{name}}\" src=\"{{img}}\">\n            <button class=\"icon\" [routerLink]=\"['/help']\" title=\"About\"><i class=\"material-icons\">info</i></button><a class=\"icon\" (click)=\"sd()\" style=\"color:white;cursor:pointer;\" title=\"log out\" href=\"/logout\"><i class=\"material-icons\">exit_to_app</i></a>\n          </div>\n          <div style=\"display:flex;height:100px;align-items: center;flex-direction: column;\">\n            <button class=\"icon\" (click)=\"sd()\" *ngIf=\"!dl\"><i class=\"material-icons\">close</i></button>\n          </div>\n        </div>\n        <div class=\"pane\">\n          <div class=\"userpane\" style=\"margin-top:10px;\" *ngIf=\"topSharer\">\n            <div class=\"userpane\"> \n              <div style=\"padding:15px;\">Max links Shared by</div>\n              <div style=\"margin-top:20px;display:flex;flex-direction:row;justify-content:center;margin:5px;\">\n                <div class=\"user\"><img style=\"border-radius:50px;\" src=\"{{topSharer.dp}}\"></div>\n                <div style=\"margin-left:10px;\">\n                  <p>{{topSharer.name}}</p>\n                  <p>@{{topSharer.user}}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"userpane\" style=\"margin-top:10px;\" *ngIf=\"topSharer\">Links\n            <div class=\"userpane\" *ngFor=\"let dom of domains\"><a href=\"{{dom.name}}\">{{dom.name}}</a></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"cover\" (click)=\"sd()\"></div>\n    </div>\n    <div class=\"out\">\n      <div class=\"toolbar\">\n        <div style=\"display:flex;height:100%;\">\n          <button class=\"icon\" *ngIf=\"!dl\" (click)=\"sd()\"><i class=\"material-icons\">menu</i></button>\n          <div><i class=\"material-icons ico\">cloud</i></div>\n        </div>\n        <div style=\"display:flex;width:100%;height:100%;flex-direction:row;align-items:center;justify-content:flex-end;\">\n          <h1 style=\";font-weight:lighter;\">Twitter Bot</h1>\n        </div>\n      </div>\n      <div class=\"content\">\n        <ul class=\"tweets\">\n          <li *ngFor=\"let tweet of tweets\">\n            <div class=\"tweet\" style=\"width:100%;\">\n              <div class=\"twinfo\"><img class=\"tw_dp\" src=\"{{tweet.dp}}\" alt=\"/user.png\">\n                <p style=\"margin-left:4px;\"> {{tweet.name}}</p>\n              </div>\n              <div class=\"twbody\">\n                <p [innerHTML]=\"tweet.text\"></p>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</router-outlet>"

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(72);


/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpComponent = (function () {
    function HelpComponent(_loc) {
        this._loc = _loc;
    }
    HelpComponent.prototype.goback = function () {
        this._loc.back();
    };
    HelpComponent.prototype.ngOnInit = function () {
    };
    return HelpComponent;
}());
HelpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-help',
        template: __webpack_require__(184),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* Location */]) === "function" && _a || Object])
], HelpComponent);

var _a;
//# sourceMappingURL=help.component.js.map

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)(false);
// imports


// module
exports.push([module.i, "div.container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100vh;\n    width: 100%;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n\n}\ndiv.info{\n    width: 50vw;\n    background: #607D8B;\n    padding: 50px;\n    color: white;\n    border-radius: 4px;\n    box-shadow: 0 10px 16px grey;\n}\n\ndiv.info h1 {\n        color: #00BCD4;\n}\n.ico{\n        background: #ffffff;\n    height: 50px;\n    width: 50px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-radius: 50px;\n    margin-bottom: 25px;\n    box-shadow: 0 4px 5px black;\n    cursor:pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"info\"> \n    <h1>\n      <div class=\"ico\" (click)=\"goback()\"><i class=\"material-icons\" style=\"font-size:50px;color:#607D8B;\">keyboard_backspace</i></div>\n    </h1>\n    <h1>Nothing big here!</h1>\n    <h2>A MEAN stack kickstarter for twitter api</h2>\n  </div>\n</div>"

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RootComponent = (function () {
    function RootComponent() {
    }
    RootComponent.prototype.ngOnInit = function () {
    };
    return RootComponent;
}());
RootComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(187),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [])
], RootComponent);

//# sourceMappingURL=root.component.js.map

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileService = (function () {
    function ProfileService(_http) {
        this._http = _http;
    }
    ProfileService.prototype.getProfile = function () {
        return this._http.get("/api/profile");
    };
    ProfileService.prototype.getContent = function () {
        return this._http.get("/api/getdomains");
    };
    ProfileService.prototype.getTweets = function () {
        return this._http.get("/api/gettweets");
    };
    return ProfileService;
}());
ProfileService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProfileService);

var _a;
//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 71;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(80);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//update domains
//here we query trending domains
//
function updateDomain(tweets, callback) {
    tweets = tweets.json();
    var data = [];
    function DomainListItem(user, name, dp) {
        this.count = 0;
        this.user = user;
        this.name = name;
        this.dp = dp;
        this.domains = [];
    }
    var rex = /https?:\/\/[\[\w\-\.]*\.[\w]*/i;
    for (var i = 0; i < tweets.length; i++) {
        data[tweets[i].user] = data[tweets[i].user] || new DomainListItem(tweets[i].user, tweets[i].name, tweets[i].dp);
        for (var j = 0; j < tweets[i].urls.length; j++) {
            data[tweets[i].user].count++;
            var tmp = rex.exec(tweets[i].urls[j].expanded_url)[0];
            data[tweets[i].user].domains[tmp] = data[tweets[i].user].domains[tmp] || 0;
            data[tweets[i].user].domains[tmp]++;
        }
    }
    return callback(null, data);
}
var AppComponent = (function () {
    function AppComponent(_prof) {
        var _this = this;
        this._prof = _prof;
        this.content = "";
        this.tweets = [];
        this.domains = [];
        this._prof.getProfile().subscribe(function (e) {
            _this.img = e.json().photos[0].value ? e.json().photos[0].value : "/user.png";
            _this.name = e.json().displayName;
            _this.username = e.json().username;
            console.log(e.json());
        });
        this._prof.getContent().subscribe(function (e) {
            console.log("domain", e.json());
        });
        this.doit();
        this.resize();
    }
    AppComponent.prototype.doit = function () {
        var _this = this;
        this._prof.getTweets().subscribe(function (e) {
            if (e.text.toString() == "") {
                console.log("try again");
                setTimeout(_this.doit, 3000);
            }
            else {
                console.log("start replace");
                _this.tweets = e.json();
                var domains = [];
                var rex = /https?:\/\/[\[\w\-\.]*\.[\w]*/i;
                for (var i = 0; i < _this.tweets.length; i++) {
                    for (var j = 0; j < _this.tweets[i].urls.length; j++) {
                        _this.tweets[i].text = _this.tweets[i].text.
                            replace(_this.tweets[i].urls[j].url, "<a href=\"" + _this.tweets[i].urls[j].expanded_url + "\">" + _this.tweets[i].urls[j].display_url + "</a>");
                        var res = rex.exec(_this.tweets[i].urls[j].expanded_url);
                        if (domains[res[0]]) {
                            domains[res[0]]++;
                        }
                        else {
                            domains[res[0]] = 1;
                        }
                    }
                }
                var dt = [];
                for (var i in domains) {
                    dt.push({ name: i, value: domains[i] });
                }
                dt.sort(function (a, b) { return b.value - a.value; });
                var len = dt.length < 10 ? dt.length : 10;
                for (var i = 0; i < len; i++) {
                    _this.domains.push(dt[i]);
                }
                console.log(dt);
                updateDomain(e, function (e, data) {
                    var count = 0;
                    var user = null;
                    for (var i in data) {
                        if (count < data[i].count) {
                            count = data[i].count;
                            user = data[i];
                        }
                    }
                    _this.topSharer = user;
                    console.log(user);
                });
            }
        });
    };
    AppComponent.prototype.log = function () {
    };
    AppComponent.prototype.resize = function () {
        if (window.innerWidth > 700) {
            this.dl = true;
            this.show = "flex";
        }
        else {
            this.dl = false;
            this.show = "none";
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.resize();
    };
    AppComponent.prototype.sd = function () {
        this.show = this.show == "none" ? "flex" : "none";
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* HostListener */])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "resize", null);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(135),
        styles: [__webpack_require__(134)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__help_help_component__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__root_root_component__ = __webpack_require__(185);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */] },
    { path: 'help', component: __WEBPACK_IMPORTED_MODULE_7__help_help_component__["a" /* HelpComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__help_help_component__["a" /* HelpComponent */],
            __WEBPACK_IMPORTED_MODULE_8__root_root_component__["a" /* RootComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__profile_service__["a" /* ProfileService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__root_root_component__["a" /* RootComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 80:
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

/***/ })

},[160]);
//# sourceMappingURL=main.bundle.js.map