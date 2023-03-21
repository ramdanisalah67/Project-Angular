import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  //==Interpolation==
  firstName= "ramdani"
  lastName="salah-eddine"
  WebSite = "www.winopapa.com"
  country="tunisia"
  //declare object
  Stage={
    Libelle:"developper un site web par Spring et Angular",
    type:"en ligne"

  }
  //==Property Binding==
  //read image
  link ="../assets/images/Capture.PNG"
  div_style="color:red;font-weight:bold;text-transform:uppercase;"


//==Evennt Binding==
number = 1 ;

 increment(){
  this.number ++
 }

 decrement(){
this.number-- ;
 }
apply="block"
 show(){
  this.apply="block"
 }

hide(){
  this.apply="none"
}
  constructor() { }
  ngOnInit(): void {

  }

}
