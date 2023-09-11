import { Component, OnInit } from '@angular/core';
import { Radnik } from '../model/radnik';
import { RadnikService } from '../services/radnik.service';

@Component({
  selector: 'app-lista-zaposlenih',
  templateUrl: './lista-zaposlenih.component.html',
  styleUrls: ['./lista-zaposlenih.component.css']
})
export class ListaZaposlenihComponent implements OnInit {

  radnici: Radnik[] = [];
  selectedRadnoMesto: string = '';

  constructor(public radnikservice: RadnikService) { }

  ngOnInit() {
    this.radnikservice.getRadnoMesto().subscribe(
      (res) => {
        this.radnici = res;
      }
    )
  }

  onChange() {
    this.radnikservice.Filtriraj(this.selectedRadnoMesto).subscribe((res)=>
    { 
      this.radnici = res
    })
  }

  onReset(){
    this.selectedRadnoMesto = ''; // Poništava odabrano radno mjesto
    this.radnikservice.getRadnoMesto().subscribe(
      (res) => {
        this.radnici = res;
      }
    );

  }


}
