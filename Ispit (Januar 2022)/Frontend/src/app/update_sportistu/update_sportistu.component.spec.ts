/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Update_sportistuComponent } from './update_sportistu.component';

describe('Update_sportistuComponent', () => {
  let component: Update_sportistuComponent;
  let fixture: ComponentFixture<Update_sportistuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Update_sportistuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Update_sportistuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
