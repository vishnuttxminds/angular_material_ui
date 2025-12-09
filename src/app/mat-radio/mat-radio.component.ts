import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mat-radio',
  templateUrl: './mat-radio.component.html',
  styleUrls: ['./mat-radio.component.css'],
})
export class MatRadioComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      gender: ['', Validators.required],
    });
  }
}
