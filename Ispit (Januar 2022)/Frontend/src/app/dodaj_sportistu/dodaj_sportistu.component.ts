import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { Radnik } from '../model/radnik';
import { RadnikService } from '../services/radnik.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dodaj_sportistu',
  templateUrl: './dodaj_sportistu.component.html',
  styleUrls: ['./dodaj_sportistu.component.css']
})
export class Dodaj_sportistuComponent implements OnInit {

  forma!: FormGroup;

  constructor(public fb: FormBuilder,
              public sportistaService: RadnikService,
              public route: Router) { }

  ngOnInit() {
      this.forma = this.fb.group({
        ime: ['', Validators.required],
        prezime: ['',Validators.required],
        telefon: ['', Validators.required],
        godina: ['', Validators.required],
        grad: ['', Validators.required],
        plata: ['', Validators.required]
    })
  }

  //get metode
  get ime(){
    return this.forma.controls?.['ime'] as FormControl;
  }
  get prezime(){
    return this.forma.controls?.['prezime'] as FormControl;
  }
  get telefon(){
    return this.forma.controls?.['telefon'] as FormControl;
  }
  get godina(){
    return this.forma.controls?.['godina'] as FormControl;
  }
  get grad(){
    return this.forma.controls?.['grad'] as FormControl;
  }
  get plata(){
    return this.forma.controls?.['plata'] as FormControl;
  }


  radnik: Radnik = {
    ime: '',
    prezime: '',
    br_tel: '',
    god_rodj:'',
    grad:'',
    plata:''
  }

  noviRadnik():Radnik {
    return this.radnik = {
      ime: this.ime.value,
      prezime:this.prezime.value,
      br_tel: this.telefon.value,
      god_rodj: this.godina.value,
      grad: this.grad.value,
      plata: this.plata.value
    }
  }
  onSubmit(){
      if(this.forma.valid)
      {
        // console.log(this.forma.value)
        this.sportistaService.dodajSportistu(this.noviRadnik()).subscribe((res)=>
        {
          alert("Dodali ste sportistu");
          this.forma.reset();
          this.route.navigate(['/']);
        }
        )

      }
      else{
        alert("Forma nije validna")
      }
  }

}
