import { Component, OnInit } from '@angular/core';
import {AddtocartService} from '../addtocart.service'
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  count?;
  productIds:any;
  constructor( private _cartService:AddtocartService) { 

    this._cartService.getCartCount().subscribe(value=>{
      this.productIds=value;
      this.count=this.productIds.length;
    })


  }

  ngOnInit() {
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/