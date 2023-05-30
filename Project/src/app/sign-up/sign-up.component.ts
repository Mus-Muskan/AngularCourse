import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    this.getUsers();
  }

  isValid(user:{name:string , email:string , UserId:string , password:string}){
    console.log("Form has been Submitted!" , user);
    const headers = new HttpHeaders({'CustomHeader':'Example'});
    this.http.post('https://angular-project-a3726-default-rtdb.firebaseio.com/user.json', user , {headers:headers} )
    .subscribe((response) =>{
      console.log(response);
    });
  }

  getUsers(){
    this.http.get('https://angular-project-a3726-default-rtdb.firebaseio.com/user.json')
    .subscribe((request) => {
      console.log(request);
    });
  }
}
