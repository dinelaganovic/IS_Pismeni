import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form:FormGroup;
constructor( private fb:FormBuilder, private api:ApiService, private router:Router){
this.form=this.fb.group({
Email:[],
Password:[]
})
}
OnSubmit(){
this.api.login(this.form.value).subscribe({
  next:res=>{
console.log(this.form.value)
let email= this.form.get('Email')?.value;
    this.router.navigate(['/dash',email]);
  },
  error:err=>{
    console.log("Nesto nije uredu");
  }
})
}
}
