import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
getEmail:any;

constructor(private param: ActivatedRoute) {
  //  this.getBookId=this.param.snapshot.paramMap.get('id');
this.getEmail=this.param.snapshot.paramMap.get('email');
}
}
