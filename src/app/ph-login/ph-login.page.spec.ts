import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhLoginPage } from './ph-login.page';

describe('PhLoginPage', () => {
  let component: PhLoginPage;
  let fixture: ComponentFixture<PhLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
