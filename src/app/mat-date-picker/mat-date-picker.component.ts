import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mat-date-picker',
  templateUrl: './mat-date-picker.component.html',
  styleUrls: ['./mat-date-picker.component.css']
})
export class MatDatePickerComponent {


   form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      dob: ['']
    });
  }

}
