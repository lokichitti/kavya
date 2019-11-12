import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MainPagePage } from './main-page.page';
const routes = [
    {
        path: '',
        component: MainPagePage
    }
];
let MainPagePageModule = class MainPagePageModule {
};
MainPagePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [MainPagePage]
    })
], MainPagePageModule);
export { MainPagePageModule };
//# sourceMappingURL=main-page.module.js.map