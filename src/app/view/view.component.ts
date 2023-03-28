import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  myName=""
constructor(private myroute:ActivatedRoute){
  this.myroute.params.subscribe(data=>{
  this.myName=data['name']
  })
}



}
