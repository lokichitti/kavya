import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
let LoginPage = class LoginPage {
    constructor(
    //private authService: AuthService,
    formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.errorMessage = '';
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is optional you can leave it blank.' },
                { type: 'pattern', message: 'Please enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' }
            ],
            'phone': [
                { type: 'required', message: 'Phone number is required.' },
                { type: 'pattern', message: 'Please enter only digits.' },
                { type: 'minLength', message: 'Phone number should be 10 digits' },
                { type: 'maxLength', message: 'Phone number should be 10 digits' }
            ],
            'country': [
                { type: 'required', message: 'Country is required.' },
                { type: 'pattern', message: 'Please enter a valid email.' }
            ]
        };
    }
    ngOnInit() {
        this.validations_form = this.formBuilder.group({
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new FormControl('', Validators.compose([
                Validators.minLength(5),
                Validators.required
            ])),
            phone: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(10),
                Validators.minLength(10),
                Validators.pattern('0-9'),
            ])),
            country: new FormControl('', Validators.compose([
                Validators.pattern('a-zA-Z'),
                Validators.required
            ]))
        });
    }
    tryLogin(value) {
        this.router.navigate(["/home"]);
    }
    goRegisterPage() {
        this.router.navigate(["/sign-up"]);
    }
};
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder,
        Router])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map