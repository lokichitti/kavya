import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { First1Page } from './first1.page';

describe('First1Page', () => {
  let component: First1Page;
  let fixture: ComponentFixture<First1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ First1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(First1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
