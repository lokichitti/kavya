import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MyshopPage } from './myshop.page';
const routes = [
    {
        path: '',
        component: MyshopPage
    }
];
let MyshopPageModule = class MyshopPageModule {
};
MyshopPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [MyshopPage]
    })
], MyshopPageModule);
export { MyshopPageModule };
//# sourceMappingURL=myshop.module.js.map