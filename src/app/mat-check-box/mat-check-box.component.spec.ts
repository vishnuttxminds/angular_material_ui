import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCheckBoxComponent } from './mat-check-box.component';

describe('MatCheckBoxComponent', () => {
  let component: MatCheckBoxComponent;
  let fixture: ComponentFixture<MatCheckBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatCheckBoxComponent]
    });
    fixture = TestBed.createComponent(MatCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
