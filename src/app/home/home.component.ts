import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  response=true
  a=2
  b=3
info_users=['omar','salah-eddine','yahya']
num=0 ;

  constructor() {
  }
  ngOnInit(): void {

  }

}
