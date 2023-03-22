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
my_style_div="mydiv"
style1="red"
style2="30px"
style3="underline"
etudiant={name:'salah-eddine',age:'25'}

//read json object
employee={
 "Id":1,
  "Name":"salah-eddine"
}
  constructor() {
  }
  ngOnInit(): void {

  }

}
