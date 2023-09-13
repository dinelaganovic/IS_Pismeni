import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-opisliste',
  templateUrl: './opisliste.component.html',
  styleUrls: ['./opisliste.component.css']
})
export class OpislisteComponent implements OnInit {
  id:any;
  detaljiliste:any;
  ngOnInit(): void {
    this.api.getSveListe().subscribe(
      res=>{
        this.detaljiliste=res;
        console.log(res)
      }
    )
  }
  constructor(private param:ActivatedRoute,private api:ApiService){
    this.id=this.param.snapshot.paramMap.get('id');
  }

}
