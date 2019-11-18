import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import libphonenumber from 'google-libphonenumber';
import { CountryPhone } from '../models/country-phone.model';
import { Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

export class UsernameValidator {

    static validUsername(fc: FormControl){
  
      if(fc.value.toLowerCase() === "abc123" || fc.value.toLowerCase() === "123abc"){
        return {
          validUsername: true
        };
      } else {
        return null;
      }
    }
  }
  export class PhoneValidator {
    // Inspired on: https://github.com/yuyang041060120/ng2-validation/blob/master/src/equal-to/validator.ts
    static validCountryPhone = (countryControl: AbstractControl): ValidatorFn => {
      let subscribe: boolean = false;
  
      return (phoneControl: AbstractControl): {[key: string]: boolean} => {
        if (!subscribe) {
          subscribe = true;
          countryControl.valueChanges.subscribe(() => {
            phoneControl.updateValueAndValidity();
          });
        }
  
        if(phoneControl.value !== ""){
          try{
            const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
            let phoneNumber = "" + phoneControl.value + "",
                region = countryControl.value.iso,
                number = phoneUtil.parse(phoneNumber, region),
                isValidNumber = phoneUtil.isValidNumber(number);
  
            if(isValidNumber){
              return null;
            }
          }catch(e){
            // console.log(e);
            return {
              validCountryPhone: true
            };
          }
  
          return {
            validCountryPhone: true
          };
        }
        else{
          return null;
        }
      };
    };
  }
  
  export class PasswordValidator {
  
    // Inspired on: http://plnkr.co/edit/Zcbg2T3tOxYmhxs7vaAm?p=preview
    static areEqual(formGroup: FormGroup) {
      let val;
      let valid = true;
  
      for (let key in formGroup.controls) {
        if (formGroup.controls.hasOwnProperty(key)) {
          let control: FormControl = <FormControl>formGroup.controls[key];
  
          if (val === undefined) {
            val = control.value
          } else {
            if (val !== control.value) {
              valid = false;
              break;
            }
          }
        }
      }
  
      if (valid) {
        return null;
      }
  
      return {
        areEqual: true
      };
    }
  }