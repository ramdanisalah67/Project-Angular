import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  firstName= "ramdani"
  lastName="salah-eddine"
  WebSite = "www.winopapa.com"
  country="tunisia"
  //declare object
  Stage={
    Libelle:"developper un site web par Spring et Angular",
    type:"en ligne"

  }
  constructor() { }
  ngOnInit(): void {

  }

}
