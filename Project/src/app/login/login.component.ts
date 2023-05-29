import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  image = "/assets/picture.jpg";
  username="";
  Users =['Adam', 'Steve']

  notify()
  {
    console.log("You have been successfully registered!!");
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
