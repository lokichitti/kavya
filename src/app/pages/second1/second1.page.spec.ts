import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Second1Page } from './second1.page';

describe('Second1Page', () => {
  let component: Second1Page;
  let fixture: ComponentFixture<Second1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Second1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Second1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
