webpackJsonp([1,4],{

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(528),
            styles: [__webpack_require__(521)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Idea; });
var Idea = (function () {
    function Idea() {
    }
    Idea.prototype.mongoId = function () {
        return this._id.$oid;
    };
    return Idea;
}());
//# sourceMappingURL=idea.js.map

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 336;


/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(466);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(527),
            styles: [__webpack_require__(520)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ideas_idea_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ideas_ideaList_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ideas_ideaList_resolver_service__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_module__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ideas_idea_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ideas_idea_resolver_service__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ideas_create_idea_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ideas_idea_edit_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ideas_confirm_idea_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ideas_view_idea_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ideas_modify_idea_component__ = __webpack_require__(464);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */] },
    { path: '', redirectTo: '/ideas', pathMatch: 'full' },
    {
        path: 'ideas', component: __WEBPACK_IMPORTED_MODULE_7__ideas_ideaList_component__["a" /* IdeaListComponent */],
        resolve: {
            ideas: __WEBPACK_IMPORTED_MODULE_8__ideas_ideaList_resolver_service__["a" /* IdeaListResolver */]
        }
    },
    { path: 'idea/view/:id', component: __WEBPACK_IMPORTED_MODULE_11__ideas_idea_component__["a" /* IdeaComponent */],
        resolve: {
            idea: __WEBPACK_IMPORTED_MODULE_12__ideas_idea_resolver_service__["a" /* IdeaResolver */]
        }
    },
    { path: 'idea/create', component: __WEBPACK_IMPORTED_MODULE_13__ideas_create_idea_component__["a" /* CreateIdeaComponent */]
    },
    { path: 'idea/modify/:id', component: __WEBPACK_IMPORTED_MODULE_17__ideas_modify_idea_component__["a" /* ModifyIdeaComponent */],
        resolve: {
            idea: __WEBPACK_IMPORTED_MODULE_12__ideas_idea_resolver_service__["a" /* IdeaResolver */]
        }
    },
    { path: 'idea/confirm', component: __WEBPACK_IMPORTED_MODULE_15__ideas_confirm_idea_component__["a" /* ConfirmIdeaComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__ideas_ideaList_component__["a" /* IdeaListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__ideas_idea_component__["a" /* IdeaComponent */],
                __WEBPACK_IMPORTED_MODULE_13__ideas_create_idea_component__["a" /* CreateIdeaComponent */],
                __WEBPACK_IMPORTED_MODULE_14__ideas_idea_edit_component__["a" /* IdeaEditComponent */],
                __WEBPACK_IMPORTED_MODULE_15__ideas_confirm_idea_component__["a" /* ConfirmIdeaComponent */],
                __WEBPACK_IMPORTED_MODULE_16__ideas_view_idea_component__["a" /* ViewIdeaComponent */],
                __WEBPACK_IMPORTED_MODULE_17__ideas_modify_idea_component__["a" /* ModifyIdeaComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_10__home_home_module__["a" /* HomeModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__ideas_idea_service__["a" /* IdeaService */], __WEBPACK_IMPORTED_MODULE_12__ideas_idea_resolver_service__["a" /* IdeaResolver */], __WEBPACK_IMPORTED_MODULE_8__ideas_ideaList_resolver_service__["a" /* IdeaListResolver */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__(306);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idea_service__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmIdeaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmIdeaComponent = (function () {
    function ConfirmIdeaComponent(ideaService, router) {
        this.ideaService = ideaService;
        this.router = router;
    }
    ConfirmIdeaComponent.prototype.ngOnInit = function () {
        this.idea = this.ideaService.getIdeaFromCache();
    };
    ConfirmIdeaComponent.prototype.create = function () {
        var _this = this;
        this.ideaService.createIdea(this.idea).subscribe(function (res) {
            _this.idea = res;
            _this.ideaService.setIdea(_this.idea);
            _this.router.navigate(['/idea/view', _this.idea._id.$oid], { queryParams: { type: 'create' } });
        });
    };
    ConfirmIdeaComponent.prototype.cancel = function () {
        this.router.navigate(['/ideas']);
    };
    ConfirmIdeaComponent.prototype.modify = function () {
        var _this = this;
        this.ideaService.modifyIdea(this.idea).subscribe(function (res) {
            _this.idea = res;
            _this.ideaService.setIdea(_this.idea);
            _this.router.navigate(['/idea/view', _this.idea._id.$oid], { queryParams: { type: 'modify' } });
        });
    };
    ConfirmIdeaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-confirm-idea',
            template: __webpack_require__(529),
            styles: [__webpack_require__(522)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__idea_service__["a" /* IdeaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__idea_service__["a" /* IdeaService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ConfirmIdeaComponent);
    return ConfirmIdeaComponent;
    var _a, _b;
}());
//# sourceMappingURL=confirm-idea.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__idea__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__idea_service__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateIdeaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateIdeaComponent = (function () {
    function CreateIdeaComponent(ideaService, router) {
        this.ideaService = ideaService;
        this.router = router;
    }
    CreateIdeaComponent.prototype.ngOnInit = function () {
        this.idea = this.ideaService.getIdeaFromCache();
        if (this.idea == null || this.idea._id != null) {
            this.idea = new __WEBPACK_IMPORTED_MODULE_1__idea__["a" /* Idea */]();
        }
    };
    CreateIdeaComponent.prototype.confirm = function () {
        this.ideaService.setIdea(this.idea);
        this.router.navigate(['/idea/confirm']);
    };
    CreateIdeaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-create-idea',
            template: __webpack_require__(530),
            styles: [__webpack_require__(523)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__idea_service__["a" /* IdeaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__idea_service__["a" /* IdeaService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], CreateIdeaComponent);
    return CreateIdeaComponent;
    var _a, _b;
}());
//# sourceMappingURL=create-idea.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__idea__ = __webpack_require__(307);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeaEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IdeaEditComponent = (function () {
    function IdeaEditComponent() {
    }
    IdeaEditComponent.prototype.ngOnInit = function () {
        this.tags = [{ id: 'Technology', name: 'Technology', selected: false },
            { id: 'Health Care', name: 'Healthcare', selected: false },
            { id: 'Artificial Intelligence', name: 'Artificial Intelligence', selected: false },
            { id: 'Marketing', name: 'Marketing', selected: false },
            { id: 'CRM', name: 'CRM', selected: false },
            { id: 'Data Analytics', name: 'Data Analytics', selected: false },
            { id: 'Robotics', name: 'Robotics', selected: false }];
        if (this != null && this.idea != null && this.idea.tags != null && this.idea.tags.length > 0) {
            var i = 0, j = 0;
            for (i = 0; i < this.tags.length; i++) {
                for (j = 0; j < this.idea.tags.length; j++) {
                    if (this.tags[i].name === this.idea.tags[j]) {
                        this.tags[i].selected = true;
                    }
                }
            }
        }
    };
    IdeaEditComponent.prototype.setSelected = function (selectElement) {
        for (var i = 0; i < selectElement.options.length; i++) {
            var optionElement = selectElement.options[i];
            var optionModel = this.tags[i];
            if (optionElement.selected == true) {
                optionModel.selected = true;
            }
            else {
                optionModel.selected = false;
            }
        }
        var selectedItems = this.tags.filter(function (item) { return item.selected === true; });
        if (selectedItems.length > 0) {
            this.idea.tags = selectedItems.map(function (item) { return item.name; });
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__idea__["a" /* Idea */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__idea__["a" /* Idea */]) === 'function' && _a) || Object)
    ], IdeaEditComponent.prototype, "idea", void 0);
    IdeaEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'edit-idea',
            template: __webpack_require__(531),
            styles: [__webpack_require__(208)]
        }), 
        __metadata('design:paramtypes', [])
    ], IdeaEditComponent);
    return IdeaEditComponent;
    var _a;
}());
//# sourceMappingURL=idea-edit.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idea_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeaResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IdeaResolver = (function () {
    function IdeaResolver(ideaService, router) {
        this.ideaService = ideaService;
        this.router = router;
    }
    IdeaResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.params['id'];
        return this.ideaService.getIdea(id).map(function (data) {
            if (data) {
                return data;
            }
            else {
                _this.router.navigate(['/ideas']);
                return null;
            }
        }).first();
    };
    IdeaResolver = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__idea_service__["a" /* IdeaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__idea_service__["a" /* IdeaService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], IdeaResolver);
    return IdeaResolver;
    var _a, _b;
}());
//# sourceMappingURL=idea-resolver.service.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idea_service__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IdeaComponent = (function () {
    function IdeaComponent(route, router, ideaService) {
        this.route = route;
        this.router = router;
        this.ideaService = ideaService;
    }
    IdeaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.idea = data.idea;
            if (_this.idea == null || _this.idea._id == null) {
                _this.router.navigate(['/ideas']);
            }
        });
        this.route.queryParams.subscribe(function (params) {
            var type = params['type'];
            if (type === 'create') {
                _this.actionTitle = 'Idea Created';
            }
            else if (type === 'modify') {
                _this.actionTitle = 'Idea Modified';
            }
        });
    };
    IdeaComponent.prototype.modify = function () {
        this.router.navigate(['/idea/modify', this.idea._id.$oid]);
    };
    IdeaComponent.prototype.delete = function () {
        var _this = this;
        if (window.confirm('Are you sure you want to permanently delete this item?')) {
            this.ideaService.deleteIdea(this.idea).subscribe(function (res) {
                _this.actionTitle = 'Idea Deleted';
            });
        }
    };
    IdeaComponent.prototype.cancel = function () {
        this.router.navigate(['/ideas']);
    };
    IdeaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-idea',
            template: __webpack_require__(532),
            styles: [__webpack_require__(208)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__idea_service__["a" /* IdeaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__idea_service__["a" /* IdeaService */]) === 'function' && _c) || Object])
    ], IdeaComponent);
    return IdeaComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=idea.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idea_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeaListResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IdeaListResolver = (function () {
    function IdeaListResolver(ideaService, router) {
        this.ideaService = ideaService;
        this.router = router;
    }
    IdeaListResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.ideaService.getIdeas().map(function (data) {
            if (data) {
                return data;
            }
            else {
                _this.router.navigate(['/home']);
                return null;
            }
        }).first();
    };
    IdeaListResolver = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__idea_service__["a" /* IdeaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__idea_service__["a" /* IdeaService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], IdeaListResolver);
    return IdeaListResolver;
    var _a, _b;
}());
//# sourceMappingURL=ideaList-resolver.service.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeaListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IdeaListComponent = (function () {
    function IdeaListComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    IdeaListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.ideas = data.ideas;
        });
    };
    IdeaListComponent.prototype.onSelect = function (idea) {
        // Navigate with relative link
        this.router.navigate(['/idea]', idea._id]);
    };
    IdeaListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-ideas',
            template: __webpack_require__(533),
            styles: [__webpack_require__(208)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], IdeaListComponent);
    return IdeaListComponent;
    var _a, _b;
}());
//# sourceMappingURL=ideaList.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idea_service__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifyIdeaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModifyIdeaComponent = (function () {
    function ModifyIdeaComponent(route, ideaService, router) {
        this.route = route;
        this.ideaService = ideaService;
        this.router = router;
    }
    ModifyIdeaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.idea = data.idea;
        });
    };
    ModifyIdeaComponent.prototype.confirm = function () {
        this.ideaService.setIdea(this.idea);
        this.router.navigate(['/idea/confirm']);
    };
    ModifyIdeaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-modify-idea',
            template: __webpack_require__(534),
            styles: [__webpack_require__(524)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__idea_service__["a" /* IdeaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__idea_service__["a" /* IdeaService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], ModifyIdeaComponent);
    return ModifyIdeaComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=modify-idea.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewIdeaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewIdeaComponent = (function () {
    function ViewIdeaComponent() {
    }
    ViewIdeaComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], ViewIdeaComponent.prototype, "idea", void 0);
    ViewIdeaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-view-idea',
            template: __webpack_require__(535),
            styles: [__webpack_require__(525)]
        }), 
        __metadata('design:paramtypes', [])
    ], ViewIdeaComponent);
    return ViewIdeaComponent;
}());
//# sourceMappingURL=view-idea.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IdeaService = (function () {
    function IdeaService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    IdeaService.prototype.getIdeas = function () {
        return this.http.get('https://4kyyxbcj0m.execute-api.us-east-1.amazonaws.com/Dev').map(function (res) { return res.json(); });
    };
    ;
    IdeaService.prototype.getIdea = function (id) {
        return this.http.get('https://4kyyxbcj0m.execute-api.us-east-1.amazonaws.com/Dev/' + id).map(function (res) { return res.json(); });
    };
    ;
    IdeaService.prototype.createIdea = function (idea) {
        return this.http.post('https://4kyyxbcj0m.execute-api.us-east-1.amazonaws.com/Dev/', idea, this.options).map(function (res) { return res.json(); });
        //  let createIdea = idea;
        //  idea._id = '568b28faff8de80e00d27263';
        //  return Observable.of(idea);
    };
    ;
    IdeaService.prototype.modifyIdea = function (idea) {
        return this.http.put('https://4kyyxbcj0m.execute-api.us-east-1.amazonaws.com/Dev/' + idea._id.$oid, idea, this.options)
            .map(function (res) { return res.json(); });
        // return Observable.of(idea);
    };
    ;
    IdeaService.prototype.deleteIdea = function (idea) {
        return this.http.delete('https://4kyyxbcj0m.execute-api.us-east-1.amazonaws.com/Dev/' + idea._id.$oid).map(function (res) { return res.json(); });
        //  return Observable.of(idea);
    };
    ;
    //SETTING SO THAT IT WILL BE AVAIABLE BETWEEN PAGES.
    IdeaService.prototype.setIdea = function (idea) {
        this.idea = idea;
    };
    IdeaService.prototype.getIdeaFromCache = function () {
        return this.idea;
    };
    IdeaService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], IdeaService);
    return IdeaService;
    var _a;
}());
//# sourceMappingURL=idea.service.js.map

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 527:
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default .navbar-fixed-top\">\n  <div class=\"container-fluid\">\n  <div class=\"navbar-header\">\n    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\n            data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </button>\n    <a class=\"navbar-brand\" href=\"#\">HowToImplementit</a>\n  </div>\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li [routerLink]=\"['/ideas']\" [routerLinkActive]=\"['active']\">\n          <a>Ideas</a></li>\n        <li [routerLink]=\"['/idea/create']\" [routerLinkActive]=\"['active']\">\n          <a>Create a New Idea</a></li>\n      </ul>\n\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n<div class=\"well\">\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 528:
/***/ (function(module, exports) {

module.exports = "<img src=\"../../assets/images/Homepage.png\">\n"

/***/ }),

/***/ 529:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">Confirm Idea</div>\n  <div class=\"panel-body\">\n\n<form>\n<app-view-idea [idea]=\"idea\"></app-view-idea>\n<br/>\n  <div class=\"form-group\">\n\n  <button (click)=\"create()\"  class=\"btn btn-primary\" *ngIf=\"!idea._id\">Create</button>\n  <button (click)=\"modify()\"  class=\"btn btn-primary\" *ngIf=\"idea._id\">Modify</button>\n  <button (click)=\"cancel()\" class=\"btn btn-default\">Cancel</button>\n    </div>\n</form>\n  </div>\n</div>\n"

/***/ }),

/***/ 530:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">Create Idea</div>\n  <div class=\"panel-body\">\n    <form (ngSubmit)=\"confirm()\">\n      <edit-idea [idea]=\"idea\"></edit-idea>\n      <br/>\n\n      <div class=\"form-group\">\n\n        <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\n\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 531:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"input-group\">\n    <label class=\"control-label\">Title</label>\n    <div >\n      <input class=\"form-control\" [(ngModel)]=\"idea.title\" placeholder=\"Title of Idea\" size=\"100\"\n             id=\"ideaTitle\" required minlength=\"4\" maxlength=\"100\" name=\"ideaTitle\" #ideaTitle=\"ngModel\"/>\n      <div *ngIf=\"ideaTitle.errors && (ideaTitle.dirty || ideaTitle.touched)\"\n           class=\"alert alert-danger\">\n        <div [hidden]=\"!ideaTitle.errors.required\">\n          Title is required\n        </div>\n        <div [hidden]=\"!ideaTitle.errors.minlength\">\n          Title must be at least 4 characters long.\n        </div>\n        <div [hidden]=\"!ideaTitle.errors.maxlength\">\n          Title cannot be more than 24 characters long.\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"input-group\">\n    <label class=\"control-label\">Description</label>\n    <div >\n      <textarea class=\"form-control\" [(ngModel)]=\"idea.description\" rows=\"5\" cols=\"100\" required\n      placeholder=\"Idea Description\" name=\"ideaDescription\" #ideaDescription=\"ngModel\"></textarea>\n      <div *ngIf=\"ideaDescription.errors && (ideaDescription.dirty || ideaDescription.touched)\"\n           class=\"alert alert-danger\">\n        <div [hidden]=\"!ideaDescription.errors.required\">\n          Description is required\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"input-group\">\n    <label class=\"control-label\">Tags</label>\n    <div >\n      <select  class=\"form-control\" multiple (change)=\"setSelected($event.target)\">\n        <option *ngFor=\"let item of tags\" [value]=\"item.value\" [attr.selected]=\"item.selected ? true: null\">\n          {{item.name}}\n        </option>\n      </select>\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ 532:
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"actionTitle\">{{actionTitle}}</div>\n\n<br>\n\n<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">Idea Details</div>\n  <div class=\"panel-body\">\n\n    <form>\n      <app-view-idea [idea]=\"idea\"></app-view-idea>\n      <br/>\n      <div class=\"form-group\">\n\n        <button (click)=\"modify()\" class=\"btn btn-primary\" *ngIf=\"actionTitle != 'Idea Deleted'\">Modify</button>\n        <button (click)=\"delete()\" class=\"btn btn-danger\" *ngIf=\"actionTitle != 'Idea Deleted'\">Delete</button>\n        <button (click)=\"cancel()\" class=\"btn btn-default\" *ngIf=\"actionTitle != 'Idea Deleted'\">Cancel</button>\n        <button (click)=\"cancel()\" class=\"btn btn-default\" *ngIf=\"actionTitle == 'Idea Deleted'\">Go To Ideas</button>\n\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 533:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">Ideas</div>\n  <div class=\"panel-body\">\n<li *ngFor=\"let idea of ideas\" >\n  <a [routerLink] =\"['/idea/view', idea._id.$oid]\">{{idea.title}}</a>\n</li>\n    </div>\n</div>\n"

/***/ }),

/***/ 534:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">Modify Idea</div>\n  <div class=\"panel-body\">\n    <form (ngSubmit)=\"confirm()\">\n      <edit-idea [idea]=\"idea\"></edit-idea>\n      <br/>\n\n      <div class=\"form-group\">\n\n        <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\n\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports = "<div class=\"control-group\">\n  <label class=\"control-label\">Title</label>\n  <div class=\"controls\">\n    <h4>{{idea.title}}</h4>\n  </div>\n</div>\n<div class=\"control-group\">\n  <label class=\"control-label\">Description</label>\n  <div class=\"controls\">\n    <h4>{{idea.description}}</h4>\n  </div>\n</div>\n<div class=\"control-group\">\n  <label class=\"control-label\">Tags</label>\n    <ul  class=\"list-group\">\n    <li *ngFor = \"let tag of idea.tags\" class=\"list-group-item\">\n      {{tag}}\n    </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(337);


/***/ })

},[555]);
//# sourceMappingURL=main.bundle.js.map