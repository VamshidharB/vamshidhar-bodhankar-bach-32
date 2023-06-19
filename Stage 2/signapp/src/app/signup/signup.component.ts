import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../Messages.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstName="";
  lastName="";
  email="";
  password="";
  phone="";
  dob="";

  constructor(private shared:MessagesService ) { }
  ngOnInit() {
  }
  

}
