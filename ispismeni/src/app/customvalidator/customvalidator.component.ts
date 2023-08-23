import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { noSpace } from '../validator/mojvalidator.validators';
@Component({
  selector: 'app-customvalidator',
  templateUrl: './customvalidator.component.html',
  styleUrls: ['./customvalidator.component.css']
})
export class CustomvalidatorComponent {
  form:any;
constructor(fb:FormBuilder){
this.form=fb.group({
fullName:[
  '',
  [Validators.required,
  noSpace.noSpaceValidations]
]
})
}
get fc(){
  return this.form.controls
}
}
