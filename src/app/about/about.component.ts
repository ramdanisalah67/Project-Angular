import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
nom=""
constructor(private myroute:Router){


}
toHome(){
this.myroute.navigate([''])
}

toView(){
  this.myroute.navigate(['/profil/view/'+this.nom])
}
toDetails(){
  this.myroute.navigate(['/profil/details'])
}
}
