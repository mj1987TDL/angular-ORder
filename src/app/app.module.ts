import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MycartComponent } from './mycart/mycart.component';
import { HttpClientModule } from '@angular/common/http';
import { CountclicksDirective } from './countclicks.directive'; 
// import {AddtocartService} from './addtocart.service'
import {SliderModule} from 'primeng/slider';
import { LoginComponent } from './login/login.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { OrderManagementComponent } from './order-management/order-management.component';
import {CheckloginGuard} from './checklogin.guard';
import { MdmComponent } from './mdm/mdm.component';
import {TableModule} from 'primeng/table';
import { NumberDirective } from './numbers-only.directive';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    SliderModule,
    FormsModule,
    AngularFontAwesomeModule,
    TableModule,

    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'mdm', component: MdmComponent },
      { path: 'order', component: OrderManagementComponent,canActivate:[CheckloginGuard] },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    MycartComponent,
    CountclicksDirective,
    LoginComponent,
    OrderManagementComponent,
    MdmComponent,
    NumberDirective
  ],
  bootstrap: [ AppComponent ],
  providers:[]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/