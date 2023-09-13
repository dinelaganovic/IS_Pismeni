import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import {FormGroup, FormBuilder} from '@angular/forms';
import {OnInit} from '@angular/core';
interface Aktivnost{
  tip: string,
  opis: string,
  prioritet: string,
  datum: string,
  vreme: string,
  userI: string
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
getEmail:any
nizAktivnosti:any;
form:FormGroup;
tip:any=['studiranje','rekreacija'];
opis:any=['zavrsena','nijezavrsena'];
priorit:any=[1,2,3,4,5];
aktivnost:Aktivnost;
  constructor(private param:ActivatedRoute, private api:ApiService, private fb:FormBuilder, private route:Router) {
    this.getEmail=this.param.snapshot.paramMap.get('email');
    this.form=this.fb.group({
      Tip:[],
      Opis:[],
      Prioritet:[],
      Datum:[],
      Vreme:[]
    });
  }

  ngOnInit(): void {
    
  this.api.getSveListe().subscribe(
    res=>{
      this.nizAktivnosti=res;
      console.log(res)
    }
  )
  }
  Sacuvaj(){
    this.aktivnost={
      tip: this.form.get('Tip')?.value,
      opis: this.form.get('Opis')?.value,
      prioritet: this.form.get('Prioritet')?.value,
      datum: this.form.get('Datum')?.value,
      vreme: this.form.get('Vreme')?.value,
      userI: this.getEmail
    }
    this.api.sacuvajlistu(this.aktivnost).subscribe(
      {
        next:res=>{
          console.log(this.aktivnost)
            },
            error:err=>{
              console.log("Nesto nije uredu");
            }
      }
    )

  }
  Vidi(id:number){
    this.route.navigate(['/vise',id]);
  }
}
