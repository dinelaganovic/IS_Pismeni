import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltriranjeComponent } from './filtriranje.component';

describe('FiltriranjeComponent', () => {
  let component: FiltriranjeComponent;
  let fixture: ComponentFixture<FiltriranjeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltriranjeComponent]
    });
    fixture = TestBed.createComponent(FiltriranjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
