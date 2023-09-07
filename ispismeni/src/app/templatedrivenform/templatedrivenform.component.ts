import { Component } from '@angular/core';
import {NgForm, FormControl} from '@angular/forms'
@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent {
  OnSubmit(f:NgForm){
  console.log(f.value)
  }
  getValue(f:FormControl){
    console.log(f)
  }
  getValueE(f:FormControl){
    console.log(f)
  }
  getValueP(f:FormControl){
    console.log(f)
  }
}
