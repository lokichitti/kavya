import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPhonePage } from './r-phone.page';

describe('RPhonePage', () => {
  let component: RPhonePage;
  let fixture: ComponentFixture<RPhonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPhonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
