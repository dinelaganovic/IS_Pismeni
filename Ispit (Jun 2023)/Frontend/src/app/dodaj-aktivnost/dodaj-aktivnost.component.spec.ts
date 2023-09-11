/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DodajAktivnostComponent } from './dodaj-aktivnost.component';

describe('DodajAktivnostComponent', () => {
  let component: DodajAktivnostComponent;
  let fixture: ComponentFixture<DodajAktivnostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajAktivnostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajAktivnostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
