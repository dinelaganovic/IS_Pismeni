import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  childForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.childForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(2), Validators.max(5)]],
      vaspitacice: this.formBuilder.array([], Validators.required),
    });
  }

  ngOnInit() {
    // Inicijalizacija forme
  }
  onSubmit() {
    if (this.childForm.valid) {
      // Slanje podataka na server ili dalja obrada
      const formData = this.childForm.value;
      console.log(formData); // Možete poslati ove podatke na server ili izvršiti željenu akciju
    }
  }
}
