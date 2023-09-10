import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';
interface Dete{
  FirstName:string;
  LastName:string;
  Age :string;
  VId:number;
}
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  childForm: FormGroup;
  ucit: any=[];
  dete:Dete;
  constructor(private formBuilder: FormBuilder, private ser:ServiceService) {
    this.childForm = this.formBuilder.group({
      uciteljice:[],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(2), Validators.max(5)]],
    });
  }

  ngOnInit() {
    this.ser.getUciteljice().subscribe(
      res=>{
        this.ucit=res;
      }
    )

  }
  onSubmit() {
    
    if (this.childForm.valid) {
      this.dete={
        FirstName:this.childForm.get('firstName')?.value ,
        LastName:this.childForm.get('lastName')?.value,
        Age :this.childForm.get('age')?.value,
        VId:this.childForm.get('uciteljice')?.value
     }
     this.ser.saveDete(this.dete).subscribe({
    next:(res)=>{
      console.log(this.dete)
      },
    error:(err)=>{

    }}
     )
    }
  }
}
