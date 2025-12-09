import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatButtonComponent } from './mat-button.component';

describe('MatButtonComponent', () => {
  let component: MatButtonComponent;
  let fixture: ComponentFixture<MatButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatButtonComponent]
    });
    fixture = TestBed.createComponent(MatButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
