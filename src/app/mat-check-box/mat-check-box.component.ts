import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mat-check-box',
  templateUrl: './mat-check-box.component.html',
  styleUrls: ['./mat-check-box.component.css']
})
export class MatCheckBoxComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

}
