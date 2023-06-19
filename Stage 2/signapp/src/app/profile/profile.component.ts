import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  firstName="vamshidhar";
  lastName="bodhankar";
  email="vamshi@gmail.com";
  password="123456asd";
  phone="12341234";
  dob="02/06/1768";
  constructor() { }

  ngOnInit() {
  }

}
