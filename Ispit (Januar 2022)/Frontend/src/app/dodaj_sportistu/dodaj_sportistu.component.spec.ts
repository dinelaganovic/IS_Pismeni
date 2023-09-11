/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dodaj_sportistuComponent } from './dodaj_sportistu.component';

describe('Dodaj_sportistuComponent', () => {
  let component: Dodaj_sportistuComponent;
  let fixture: ComponentFixture<Dodaj_sportistuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dodaj_sportistuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dodaj_sportistuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
