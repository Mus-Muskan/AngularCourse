import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactService } from './contact.service';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes:Routes=[
  {path:'login' , component:LoginComponent},
  {path:'signup' , component:SignUpComponent},
  {path:'home' , component:HomeComponent},
  {path:'contact-us' , component:ContactusComponent , canActivate:[ContactService]},
  {path:'' , redirectTo:'/login' , pathMatch:'full'},
  {path:'**' , component:PageNotFoundComponent}

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
