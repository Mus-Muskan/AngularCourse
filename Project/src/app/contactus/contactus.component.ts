import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  name='';
  email='';
  phoneno='';
  message='';

  updateDetails(fm:any){
    
  }

}
