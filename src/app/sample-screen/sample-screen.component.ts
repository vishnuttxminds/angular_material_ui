import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample-screen',
  templateUrl: './sample-screen.component.html',
  styleUrls: ['./sample-screen.component.css']
})
export class SampleScreenComponent {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      dob: [''],
      terms: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log("Form Submitted:", this.registerForm.value);
      alert("Registered Successfully!");
    }
  }

}
