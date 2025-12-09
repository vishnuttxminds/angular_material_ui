import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDatePickerComponent } from './mat-date-picker.component';

describe('MatDatePickerComponent', () => {
  let component: MatDatePickerComponent;
  let fixture: ComponentFixture<MatDatePickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatDatePickerComponent]
    });
    fixture = TestBed.createComponent(MatDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
