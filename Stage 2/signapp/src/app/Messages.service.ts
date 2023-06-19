import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
 message: String="";
constructor() { }
setMessage(data: String){
  this.message=data;
}
getMessage(){
  this.message
}

}
