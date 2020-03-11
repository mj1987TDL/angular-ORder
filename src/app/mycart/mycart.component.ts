import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AddtocartService} from '../addtocart.service';
import { products } from '../products';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
 count?;
 products = products;
 cartItems:any;
 productids:any[];
 test:any[];
 grandTotal:number=0;
 previousValue:any;
  constructor( private _cartService:AddtocartService) { 

   this._cartService.getCartCount().subscribe(value=>{
       this.productids=value;

   });
   this.grandTotal = this.productids.reduce(function(prev, cur) {
    return prev + cur.price;
  },0);
  
  }

  ngOnInit() {

  //   if (sessionStorage.getItem("cartitems")) {
  //     alert("dfas;jd")
  //     this.productids = sessionStorage.getItem('cartitems');
  //     console.log(this.productids)
  // }
  }
  
  calculateTotal(e,prod)
  {
    this.grandTotal=0;
    let sum = e.target.value*prod.price;
    let newProduct = Object.assign({},this.productids);

    if(e.target.value==0)
    {
      let filteredValue=this.productids.filter((item) => item.id !== prod.id);
      console.log(filteredValue)
      this.grandTotal = filteredValue.reduce(function(prev, cur) {
        return prev + cur.price;
      },0);
    }else{
      this.grandTotal = this.productids.reduce(function(prev, cur) {
        return prev + cur.price;
      },0);
      let sum = e.target.value*prod.price;
      this.grandTotal += sum;
    }

  }
  removeItem(e)
  {
   this.productids = this.productids.filter((item) => item.id !== e.id);
   this.grandTotal = this.productids.reduce(function(prev, cur) {
    return prev + cur.price;
  },0);
  }
} 