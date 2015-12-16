var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var browser_1 = require('angular2/platform/browser');
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var router_1 = require('angular2/router');
var SubItem1 = (function () {
    function SubItem1() {
    }
    SubItem1 = __decorate([
        core_1.Component({ selector: 'subItem1', template: "SubItem1" }), 
        __metadata('design:paramtypes', [])
    ], SubItem1);
    return SubItem1;
})();
exports.SubItem1 = SubItem1;
var SubItem2 = (function () {
    function SubItem2() {
    }
    SubItem2 = __decorate([
        core_1.Component({ selector: 'subItem2', template: "SubItem2" }), 
        __metadata('design:paramtypes', [])
    ], SubItem2);
    return SubItem2;
})();
exports.SubItem2 = SubItem2;
var SubItem3 = (function () {
    function SubItem3() {
    }
    SubItem3 = __decorate([
        core_1.Component({ selector: 'subItem3', template: "SubItem3" }), 
        __metadata('design:paramtypes', [])
    ], SubItem3);
    return SubItem3;
})();
exports.SubItem3 = SubItem3;
var ChildItem = (function () {
    function ChildItem() {
    }
    ChildItem = __decorate([
        core_1.Component({
            selector: 'childItem',
            template: "<h2>Child Item</h2>\n    <a [routerLink]=\"['/SubItem1']\">SubItem1</a>\n    <a [routerLink]=\"['/SubItem2']\">SubItem2</a>\n    <a [routerLink]=\"['/SubItem3']\">SubItem3</a>\n    "
        }),
        router_1.RouteConfig([
            { path: '/', redirectTo: ['/1'] },
            { path: '/1/', component: SubItem1, as: 'SubItem1' },
            { path: '/2/', component: SubItem2, as: 'SubItem2' },
            { path: '/3/', component: SubItem3, as: 'SubItem3' }
        ]), 
        __metadata('design:paramtypes', [])
    ], ChildItem);
    return ChildItem;
})();
exports.ChildItem = ChildItem;
var Home = (function () {
    function Home() {
    }
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            directives: [common_1.COMMON_DIRECTIVES, common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, router_1.RouterLink],
            template: "<h2>Home page</h2>\n    <a [routerLink]=\"['/ChildItem']\">Child Item</a>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Home);
    return Home;
})();
exports.Home = Home;
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Routing Test</h1>\n  <router-outlet></router-outlet>",
            directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterLink, router_1.RouterOutlet]
        }),
        router_1.RouteConfig([
            { path: '/', component: Home, as: 'Home' },
            { path: '/child/...', component: ChildItem, as: 'ChildItem' }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
browser_1.bootstrap(AppComponent, [router_1.ROUTER_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
//# sourceMappingURL=app.js.map