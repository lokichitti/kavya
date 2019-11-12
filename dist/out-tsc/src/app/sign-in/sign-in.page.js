import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountryPhone } from '../register/country-phone.model';
import { UsernameValidator, PhoneValidator } from '../register/register.page';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
let SignInPage = class SignInPage {
    constructor(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.validation_messages = {
            'username': [
                { type: 'required', message: 'Username is required.' },
                { type: 'minlength', message: 'Username must be at least 5 characters long.' },
                { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
                { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
                { type: 'validUsername', message: 'Your username has already been taken.' }
            ],
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Please wnter a valid email.' }
            ],
            'phone': [
                { type: 'required', message: 'Phone is required.' },
                { type: 'validCountryPhone', message: 'The phone is incorrect for the selected country.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' },
                { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
            ],
        };
    }
    ngOnInit() {
        //  We just use a few random countries, however, you can use the countries you need by just adding them to this list.
        // also you can use a library to get all the countries from the world.
        this.countries = [
            new CountryPhone('IN', 'India'),
            new CountryPhone('US', 'United States'),
            new CountryPhone('BR', 'Brasil')
        ];
        let country = new FormControl(this.countries[0], Validators.required);
        let phone = new FormControl('', Validators.compose([
            Validators.required,
            PhoneValidator.validCountryPhone(country)
        ]));
        this.country_phone_group = new FormGroup({
            country: country,
            phone: phone
        });
        this.validations_form = this.formBuilder.group({
            username: new FormControl('', Validators.compose([
                UsernameValidator.validUsername,
                Validators.maxLength(25),
                Validators.minLength(5),
                Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
                Validators.required
            ])),
            password: new FormControl('', Validators.compose([
                Validators.minLength(5),
                Validators.required,
                Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ])),
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            country_phone: this.country_phone_group,
        });
    }
};
SignInPage = tslib_1.__decorate([
    Component({
        selector: 'app-sign-in',
        templateUrl: './sign-in.page.html',
        styleUrls: ['./sign-in.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder,
        Router])
], SignInPage);
export { SignInPage };
//# sourceMappingURL=sign-in.page.js.map