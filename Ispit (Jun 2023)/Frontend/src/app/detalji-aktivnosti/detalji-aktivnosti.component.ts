import { Component, OnInit } from '@angular/core';
import { Aktivnost } from '../model/Aktivnost';
import { ActivatedRoute } from '@angular/router';
import { AktivnostService } from '../services/Aktivnost.service';

@Component({
  selector: 'app-detalji-aktivnosti',
  templateUrl: './detalji-aktivnosti.component.html',
  styleUrls: ['./detalji-aktivnosti.component.css']
})
export class DetaljiAktivnostiComponent implements OnInit {

  aktivnost!: Aktivnost;

  constructor(private route:ActivatedRoute,
              private aktivnostiService: AktivnostService) { }

  ngOnInit() {

    const idAktivnosti = this.route.snapshot.paramMap.get('id');

    this.aktivnostiService.getAktivnostById(+idAktivnosti!).subscribe(
      (res) => this.aktivnost = res
    )
  }

}
