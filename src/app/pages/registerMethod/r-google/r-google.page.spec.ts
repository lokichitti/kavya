import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RGooglePage } from './r-google.page';

describe('RGooglePage', () => {
  let component: RGooglePage;
  let fixture: ComponentFixture<RGooglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RGooglePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RGooglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
