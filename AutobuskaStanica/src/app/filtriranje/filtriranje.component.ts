import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtriranje',
  templateUrl: './filtriranje.component.html',
  styleUrls: ['./filtriranje.component.css']
})
export class FiltriranjeComponent implements OnInit {
niz:any;
niz1:any;
form:FormGroup;
isDivVisible: boolean = true;
constructor(private service:ApiService, fb:FormBuilder) {
  this.form=fb.group({
    prevoznik:[],
    grad_polazak:[],
    grad_odrediste:[]
  })
}
ngOnInit(): void {
  this.service.svipolasci().subscribe(
    res=>{
     this.niz=res 
    }
  )
}

pretrazi(){
 const p=this.form.get('prevoznik')?.value ;
 const p1=this.form.get('grad_polazak')?.value;
 const p2=this.form.get('grad_odrediste')?.value;
 this.isDivVisible = !this.isDivVisible;
  this.service.pretrazi(p,p1,p2).subscribe({
    next:(res)=>{
      this.niz1=res 
     },
     error(err) {
       
     }   
 })
  }

}
