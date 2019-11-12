import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SignInPage } from './sign-in.page';
import { ReactiveFormsModule } from '@angular/forms';
const routes = [
    {
        path: '',
        component: SignInPage
    }
];
let SignInPageModule = class SignInPageModule {
};
SignInPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ReactiveFormsModule,
            RouterModule.forChild(routes)
        ],
        declarations: [SignInPage]
    })
], SignInPageModule);
export { SignInPageModule };
//# sourceMappingURL=sign-in.module.js.map