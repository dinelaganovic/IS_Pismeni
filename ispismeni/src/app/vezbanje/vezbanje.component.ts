import { Component } from '@angular/core';

@Component({
  selector: 'app-vezbanje',
  templateUrl: './vezbanje.component.html',
  styleUrls: ['./vezbanje.component.css']
})
export class VezbanjeComponent {
  title = 'Template driven forms';
 
  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
}
 
export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}
