import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyshopPage } from './myshop.page';

describe('MyshopPage', () => {
  let component: MyshopPage;
  let fixture: ComponentFixture<MyshopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyshopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyshopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
