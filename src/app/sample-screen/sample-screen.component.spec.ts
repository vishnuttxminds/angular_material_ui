import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleScreenComponent } from './sample-screen.component';

describe('SampleScreenComponent', () => {
  let component: SampleScreenComponent;
  let fixture: ComponentFixture<SampleScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleScreenComponent]
    });
    fixture = TestBed.createComponent(SampleScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
