import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicShopPage } from './public-shop.page';

describe('PublicShopPage', () => {
  let component: PublicShopPage;
  let fixture: ComponentFixture<PublicShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicShopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
