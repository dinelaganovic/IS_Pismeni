import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoviPolazakComponent } from './novi-polazak.component';

describe('NoviPolazakComponent', () => {
  let component: NoviPolazakComponent;
  let fixture: ComponentFixture<NoviPolazakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoviPolazakComponent]
    });
    fixture = TestBed.createComponent(NoviPolazakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
