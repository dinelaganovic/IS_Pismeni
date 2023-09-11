import { Component, OnInit } from '@angular/core';
import { Aktivnost } from '../model/Aktivnost';
import { AktivnostService } from '../services/Aktivnost.service';

@Component({
  selector: 'app-lista-aktivnosti',
  templateUrl: './lista-aktivnosti.component.html',
  styleUrls: ['./lista-aktivnosti.component.css'],
})
export class ListaAktivnostiComponent implements OnInit {

  aktivnosti: Aktivnost [] = [];

  constructor(private aktivnostiService: AktivnostService) { }

  ngOnInit() {
    this.aktivnostiService.getAktivnosti().subscribe(
      (res) => {this.aktivnosti = res; console.log(this.aktivnosti)}
    )
  }

  updateOpis(id: number, datum: string){

    const danas = new Date();
    const datumAktivnosti = new Date(datum);

    console.log("Danas" + danas + "Aktivnost" + datumAktivnosti)

    if(danas.getDate() == datumAktivnosti.getDate() || danas.getDate() < datumAktivnosti.getDate())
    {
      this.aktivnostiService.updateOpis(id, 'Zavrsena').subscribe(
        (res) =>
        {
          this.aktivnosti = res;
          alert("Opis aktivnosti je izmenjen.");
          location.reload();
        }
      )
    }
    else
    {
      alert('Aktivnost je vec zavrsena')
    }
  }

  updateOpisRekreacije(id: number, datum: string){
    const danas = new Date();
    const datumAktivnosti = new Date(datum);

    if(danas.getDate() > datumAktivnosti.getDate())
    {
      alert("Aktivnost je vec zavrsena")
    }
    else if(danas.getDate() < datumAktivnosti.getDate())
    {
      alert("Aktivnost jos nije prosla nije je moguce zavrsiti!")
    }
    else
    {
      this.aktivnostiService.updateOpis(id, 'Zavrsena').subscribe(
        (res) =>
        {
          this.aktivnosti = res;
          alert("Opis aktivnosti je izmenjen.");
          location.reload();
        }
      )
    }
  }

}
