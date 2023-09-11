import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RadnikService } from '../services/radnik.service';

@Component({
  selector: 'app-update_sportistu',
  templateUrl: './update_sportistu.component.html',
  styleUrls: ['./update_sportistu.component.css']
})
export class Update_sportistuComponent implements OnInit {


  form!: FormGroup;
  sportista:any;
  constructor(public route: ActivatedRoute,
              public sportistaService: RadnikService,
              public fb:FormBuilder)
              {
                this.form = this.fb.group({
                  ime: [''],
                  prezime: [''],
                  br_tel: [''],
                  god_rodj: [''],
                  grad: [''],
                  plata: ['']
                });
               }

  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id');

    this.sportistaService.getSportisteById(+id!).subscribe((res)=>
      {
        this.sportista = res;

        this.form.patchValue({
          ime:this.sportista.ime,
          prezime:this.sportista.prezime,
          br_tel: this.sportista.br_tel,
          god_rodj:this.sportista.god_rodj,
          grad:this.sportista.grad,
          plata:this.sportista.plata
         });


      }
    )
  }


  //get
  get ime(){
    return this.form.controls?.['ime'] as FormControl;
  }
  get prezime(){
    return this.form.controls?.['prezime'] as FormControl;
  }
  get br_tel(){
    return this.form.controls?.['br_tel'] as FormControl;
  }
  get god_rodj(){
    return this.form.controls?.['god_rodj'] as FormControl;
  }
  get grad(){
    return this.form.controls?.['grad'] as FormControl;
  }
  get plata(){
    return this.form.controls?.['plata'] as FormControl;
  }



  onSubmit(){
    this.sportista.ime = this.ime.value;
    this.sportista.prezime = this.prezime.value;
    this.sportista.br_tel = this.br_tel.value;
    this.sportista.god_rodj = this.god_rodj.value;
    this.sportista.grad = this.grad.value;
    this.sportista.plata = this.plata.value;
    
    this.sportistaService.Update(this.sportista).subscribe((res)=>
    {
      alert("Uspesno ste azurirali")
    }
    )
  }

}
