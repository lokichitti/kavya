import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RFacebookPage } from './r-facebook.page';

describe('RFacebookPage', () => {
  let component: RFacebookPage;
  let fixture: ComponentFixture<RFacebookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RFacebookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RFacebookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
