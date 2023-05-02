import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  image = "/assets/picture.jpg";
  username="";
  Users =['Adam', 'Steve']
  notify()
  {
    console.log("You have been successfully Registered!");
    if(this.username=="")
    return true
    else
    return false
  }
  add()
  {
    this.Users.push(this.username);
  }
}