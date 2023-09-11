import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Radnik } from '../model/radnik';
import { RadnikService } from '../services/radnik.service';

@Component({
  selector: 'app-dodaj-radnika',
  templateUrl: './dodaj-radnika.component.html',
  styleUrls: ['./dodaj-radnika.component.css']
})
export class DodajRadnikaComponent implements OnInit {

  forma!: FormGroup;

  constructor(public fb: FormBuilder,
              public radnuiikService: RadnikService) { }

  ngOnInit() {
    this.forma = this.fb.group({
      ime: ['', Validators.required],
      prezime: ['', Validators.required],
      telefon: ['', Validators.required],
      datum: ['', Validators.required],
      plata: ['', Validators.required]
    });
  }

  //gett metpode
  get ime(){
    return this.forma.controls?.['ime'] as FormControl;
  }
  get prezime(){
    return this.forma.controls?.['prezime'] as FormControl;
  }
  get telefon(){
    return this.forma.controls?.['telefon'] as FormControl;
  }
  get datum(){
    return this.forma.controls?.['datum'] as FormControl;
  }
  get plata(){
    return this.forma.controls?.['plata'] as FormControl;
  }

  radnik: Radnik = {
    ime: '',
    prezime: '',
    telefon: '',
    datum: '',
    plata: 0
  }

  noviRadnik(): Radnik {
    return this.radnik = {
      ime: this.ime.value,
      prezime: this.prezime.value,
      telefon: this.telefon.value,
      datum: this.datum.value,
      plata: this.plata.value
    }
  }

  onSubmit(){
    if(this.forma.valid)
    {
      this.radnuiikService.dodajRadnika(this.noviRadnik()).subscribe(
        (res)=> {
          alert("Uspesno ste dodali novog radnika!");
          this.forma.reset();
        }

      )
    };
  }

}
