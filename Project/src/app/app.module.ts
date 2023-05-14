import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
<<<<<<< HEAD
=======
import { ConnectService } from './connect.service';
>>>>>>> 3194f3e2c2276b1c3cde61f5715280d28ef27b37
import { ContactusComponent } from './contactus/contactus.component';

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
  ],
  
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [ConnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
