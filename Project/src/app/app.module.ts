import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BrandsComponent } from './brands/brands.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactusComponent } from './contactus/contactus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactService } from './contact.service';
import { AuthService } from './auth.service';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    PopUpComponent,
    ProductsComponent,
    LoginComponent,
    NavBarComponent,
    HomeComponent,
    CategoriesComponent,
    CarouselComponent,
    BrandsComponent,
    FooterComponent,
    ContactusComponent,
    PageNotFoundComponent,
    SignUpComponent,
  ],
  
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [ContactService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
