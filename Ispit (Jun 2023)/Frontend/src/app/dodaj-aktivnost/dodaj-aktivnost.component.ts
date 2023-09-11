import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AktivnostService } from '../services/Aktivnost.service';
import { Aktivnost } from '../model/Aktivnost';

@Component({
  selector: 'app-dodaj-aktivnost',
  templateUrl: './dodaj-aktivnost.component.html',
  styleUrls: ['./dodaj-aktivnost.component.css']
})
export class DodajAktivnostComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder,
              private aktivnostiService: AktivnostService) { }

  ngOnInit() {
    this.form = this.fb.group({
      tip: ['', Validators.required],
      opis: ['', Validators.required],
      prioritet:['', Validators.required],
      datum: ['', Validators.required],
      vreme: ['', Validators.required]
    });
  }


  //get metode
  get tip(){
    return this.form.controls?.['tip'] as FormControl;
  }
  get opis(){
    return this.form.controls?.['opis'] as FormControl;
  }
  get prioritet(){
    return this.form.controls?.['prioritet'] as FormControl;
  }
  get datum(){
    return this.form.controls?.['datum'] as FormControl;
  }
  get vreme(){
    return this.form.controls?.['vreme'] as FormControl;
  }


  aktivnost: Aktivnost = {
    tip: '',
    opis: '',
    prioritet: 0,
    datum: '',
    vreme: ''
  }

  postaviPodatke(): Aktivnost{
    return this.aktivnost = {
      tip: this.tip.value,
      opis: this.opis.value,
      prioritet: this.prioritet.value,
      datum: this.datum.value,
      vreme: this.vreme.value
    }
  }


  onSubmit(){
    //console.log(this.postaviPodatke());
    if(this.form.valid)
    {
      this.aktivnostiService.dodajAktivnost(this.postaviPodatke()).subscribe(
        (res) =>
        {
          alert('Uspesno ste dodali aktivnost');
          this.form.reset();
        }
      )
    };
  }


}
