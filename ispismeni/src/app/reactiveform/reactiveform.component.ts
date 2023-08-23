import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
form1:any;
form:any;
constructor(fb: FormBuilder){
  this.form= fb.group({
    email:['',[Validators.required, Validators.minLength(5)]],
    fullName:['',[Validators.required, Validators.minLength(5)]],
    password:['',[Validators.required, Validators.minLength(5)]],

  })
this.form1=new FormGroup({
  fullName:new FormControl('',[Validators.required, Validators.minLength(5)]),
  email:new FormControl('',[Validators.required, Validators.minLength(15)]),
  password:new FormControl('',[Validators.required, Validators.minLength(8)])
})
}
get fullName(){
  return this.form.get('fullName')
  }
get email(){
    return this.form.get('email')
    }
get password(){
      return this.form.get('password')
      }
OnSubmit(){
  console.log()
      }
}

