import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PrivateShopPage } from './private-shop.page';
const routes = [
    {
        path: '',
        component: PrivateShopPage
    }
];
let PrivateShopPageModule = class PrivateShopPageModule {
};
PrivateShopPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [PrivateShopPage]
    })
], PrivateShopPageModule);
export { PrivateShopPageModule };
//# sourceMappingURL=private-shop.module.js.map