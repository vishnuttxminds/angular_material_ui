import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatRadioComponent } from './mat-radio.component';

describe('MatRadioComponent', () => {
  let component: MatRadioComponent;
  let fixture: ComponentFixture<MatRadioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatRadioComponent]
    });
    fixture = TestBed.createComponent(MatRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
