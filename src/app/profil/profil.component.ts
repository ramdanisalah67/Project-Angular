import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit{
name=""
nationalite=""
branche=""
constructor(private myRoute:ActivatedRoute){
this.myRoute.queryParams.subscribe(data=>{
  console.log(data['name'])
  console.log(data['nationalite'])
  console.log(data['branche'])
  //recuperer les parametre et efficher dans component html
  this.name=data['name']
  this.nationalite=data['nationalite']
  this.branche=data['branche']
})
}
ngOnInit(): void {
    
}
}
