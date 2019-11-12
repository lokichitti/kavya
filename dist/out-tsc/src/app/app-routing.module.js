import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
    { path: 'myshop', loadChildren: './myshop/myshop.module#MyshopPageModule' },
    { path: 'public-shop', loadChildren: './public-shop/public-shop.module#PublicShopPageModule' },
    { path: 'private-shop', loadChildren: './private-shop/private-shop.module#PrivateShopPageModule' },
    { path: 'main-page', loadChildren: './main-page/main-page.module#MainPagePageModule' },
    { path: 'map', loadChildren: './map/map.module#MapPageModule' },
    { path: 'info', loadChildren: './info/info.module#InfoPageModule' },
    { path: 'sign-in', loadChildren: './sign-in/sign-in.module#SignInPageModule' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map