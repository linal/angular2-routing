import {bootstrap} from 'angular2/platform/browser';
import {Component, provide} from 'angular2/core';
import {COMMON_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES, NgFor, NgIf} from 'angular2/common';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouterLink, RouterOutlet, Route, LocationStrategy, HashLocationStrategy} from 'angular2/router';


@Component({selector: 'subItem1',template: `SubItem1`})export class SubItem1{}
@Component({selector: 'subItem2',template: `SubItem2`})export class SubItem2{}
@Component({selector: 'subItem3',template: `SubItem3`})export class SubItem3{}

@Component({
    selector: 'childItem',
    directives: [COMMON_DIRECTIVES, CORE_DIRECTIVES, ROUTER_DIRECTIVES, RouterLink],
    template: `<h2>Child Item</h2>
    <ul>
    <li><a [routerLink]="['/ChildItem/SubItem1']">SubItem1</a></li>
    <li><a [routerLink]="['/ChildItem/SubItem2']">SubItem2</a></li>
    <li><a [routerLink]="['/ChildItem/SubItem3']">SubItem3</a></li>
    </ul>
    <router-outlet></router-outlet>
    `
})

@RouteConfig([
        { path: '/1', component: SubItem1, name: 'SubItem1', useAsDefault: true },
        { path: '/2/', component: SubItem2, name: 'SubItem2' },
        { path: '/3/', component: SubItem3, name: 'SubItem3' }
])
export class ChildItem{}


@Component({
    selector: 'home',
    directives: [COMMON_DIRECTIVES, CORE_DIRECTIVES, ROUTER_DIRECTIVES, RouterLink],
    template: `<h2>Home page</h2>
    <a [routerLink]="['/ChildItem']">Click Me</a>`
})
export class Home{}


@Component({
  selector: 'my-app',
  template: `<h1>Routing Test</h1>
  <router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES, RouterLink, RouterOutlet]
})
@RouteConfig([
        { path: '/', component: Home, name: 'Home' },
        { path: '/child/...', component: ChildItem, name: 'ChildItem' }/*,
        { path: '/child', component: ChildItem, name: 'ChildItem' },
        { path: '/child/1/', component: SubItem1, name: 'SubItem1' },
        { path: '/child/2/', component: SubItem2, name: 'SubItem2' },
        { path: '/child/3/', component: SubItem3, name: 'SubItem3' }*/
])
export class AppComponent {}

bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })])