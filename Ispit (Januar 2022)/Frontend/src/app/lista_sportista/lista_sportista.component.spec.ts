/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lista_sportistaComponent } from './lista_sportista.component';

describe('Lista_sportistaComponent', () => {
  let component: Lista_sportistaComponent;
  let fixture: ComponentFixture<Lista_sportistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lista_sportistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lista_sportistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
