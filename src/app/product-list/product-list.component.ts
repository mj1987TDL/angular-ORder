import { Component, HostListener } from '@angular/core';

import { products } from '../products';
import {AddtocartService} from '../addtocart.service'
import { Subscription } from 'rxjs';
// import {SliderModule} from 'primeng/slider';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  count?;
  val1: number; 
  rangeValues: number[] = [20,80];
  productIds:any=[];
  message:string;
  evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';
  subscription: Subscription;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    sessionStorage.setItem("cartitems", JSON.stringify(this.productIds));
  }
  constructor( private _cartService:AddtocartService) { 

    this._cartService.cartCount.subscribe(value=>{
      this.count=value;
    });
    this.subscription=this._cartService.getMessage().subscribe(data=>{


    });

  }

  share() {
    window.alert('The product has been shared!');
  }

  addtocart(id)
  {
  
   this.productIds.push(id);
   this._cartService.addToCart(this.productIds)
   //alert(JSON.stringify(this.productIds));
  }
  calculateTotal(e)
    {
      this._cartService.cartCount.next(e.target.value);
    }
    sorting()
    {
      this.products.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
    } 
    sortingHigh()
    {
      this.products.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0))
    }
    filterProducts(e){
      this.products = this.products.filter(product => {
        return product.price >= e.target.min
            && product.price <= e.target.value
      });
    }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/