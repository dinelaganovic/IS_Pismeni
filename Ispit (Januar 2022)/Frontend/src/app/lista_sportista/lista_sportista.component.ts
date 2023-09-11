import { Component, OnInit } from '@angular/core';
import { Radnik } from '../model/radnik';
import { RadnikService } from '../services/radnik.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista_sportista',
  templateUrl: './lista_sportista.component.html',
  styleUrls: ['./lista_sportista.component.css']
})
export class Lista_sportistaComponent implements OnInit {

  sportiste: Radnik [] = [];

  constructor(public sportistaService: RadnikService) { }

  ngOnInit() {
    this.sportistaService.getSportiste().subscribe((res) => {
      this.sportiste = res;

      // this.sportiste.forEach((sportista) => {
      //   this.sportistaService.getKlub(sportista.id!).subscribe(
      //     (klub) => {
      //       sportista.klub = klub;
      //     },
      //     (error) => {
      //       console.error(error);
      //     }
      //   );
      // });
    });
  }

}
