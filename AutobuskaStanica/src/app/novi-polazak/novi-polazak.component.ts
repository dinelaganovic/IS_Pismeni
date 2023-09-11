import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-novi-polazak',
  templateUrl: './novi-polazak.component.html',
  styleUrls: ['./novi-polazak.component.css']
})
export class NoviPolazakComponent implements OnInit {
form:FormGroup;
ngOnInit(): void {
  // Initialization logic here
}
constructor( private formbuilder: FormBuilder, private service: ApiService) {
  //u konstrukrtoru je validacija
  this.form=formbuilder.group({
 grad_polazak:['',[Validators.required]],
grad_odrediste :['',[Validators.required]],
 datum :['',[Validators.required]],
 prevoznik :['',[Validators.required]],
kilometraza:['',[Validators.required]]
  })
  
}
sacuvaj(){
  this.service.sacuvaj(this.form.value).subscribe({
    next:res=>{
      console.log("Uspesno prijavljivanje",res)
    },
    error:err=>{
      console.log("Nešto nije u redu", err)
    }
  })
}
get grad_polazak(): FormControl {
  return this.form.get('grad_polazak') as FormControl;
}
}
