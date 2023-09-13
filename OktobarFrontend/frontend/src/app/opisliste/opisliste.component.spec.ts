import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpislisteComponent } from './opisliste.component';

describe('OpislisteComponent', () => {
  let component: OpislisteComponent;
  let fixture: ComponentFixture<OpislisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpislisteComponent]
    });
    fixture = TestBed.createComponent(OpislisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
