import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[DataService]
})
export class ProductsComponent {

  item = "";

  Men :string[]=[];
  Women :string[]=[];
  Kids :string[]=[];

  getMenProducts(){
    this.Men=this.dservice.getCategory1();
  }
  getWomenProducts(){
    this.Women=this.dservice.getCategory2();
  }
  getKidsProducts(){
    this.Kids=this.dservice.getCategory3();
  }
  constructor(private dservice:DataService){}

  ngOnInit(): void{
  }

  updateItem(frm: any)
  {
    this.dservice.addItem(frm.value.newitem);
  }

}
