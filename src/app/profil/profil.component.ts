import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit{
name=""
age=""
constructor(private myRoute:ActivatedRoute){
this.myRoute.params.subscribe(data=>{
  console.log(data['name'])
  console.log(data['age'])
  //recuperer les parametre et efficher dans component html
  this.name=data['name']
  this.age=data['age']
})
}
ngOnInit(): void {
    
}
}
