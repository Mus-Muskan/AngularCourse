import { Injectable } from '@angular/core';
import { PictureService } from './picture.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  category1:string[]=['Shirts', 'T-shirts', 'Suits'];
  category2:string[]=['Dress', 'Top', 'Jeans'];
  category3:string[]=['Onesie', 'Cap', 'Socks'];

  getCategory1(){
    return this.category1;
  }
  getCategory2(){
    return this.category2;
  }
  getCategory3(){
    return this.category3;
  }

  addItem(item: string){
    this.category1.push(item);
    this.category2.push(item);
    this.category3.push(item);
  }

  constructor(private pic : PictureService){}
}
