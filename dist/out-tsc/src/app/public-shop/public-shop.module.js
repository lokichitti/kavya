import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PublicShopPage } from './public-shop.page';
const routes = [
    {
        path: '',
        component: PublicShopPage
    }
];
let PublicShopPageModule = class PublicShopPageModule {
};
PublicShopPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [PublicShopPage]
    })
], PublicShopPageModule);
export { PublicShopPageModule };
//# sourceMappingURL=public-shop.module.js.map