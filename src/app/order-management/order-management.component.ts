import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service';
import { FormBuilder, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent implements OnInit {
orderList:any;
cols:any;
orderRecord: FormGroup;
createOrder:boolean=false;
submitted:boolean = false;
isupdate:boolean=false;
  constructor(private _orderService:OrderService,
    private _formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.orderRecord = this._formBuilder.group({
      ordername:['',Validators.required], 
      orderQuantity:['',Validators.required], 
      userid:[1],
      orderid:[''],
    });
    this.cols=[
      {field:"id",header:"Order #",width:"5%"},
      {field:"employee_name",header:"Order Name",width:"10%"},
      {field:"employee_salary",header:"Order Quantity",width:"10%"},
      {field:"employee_age",header:"Created By",width:"10%"},
      {field:"profile_image",header:"Created On",width:"10%"},
      
    ]

    this._orderService.getOrderList().subscribe(data=>{
      this.orderList=data;

    });

  }
  get f() { return this.orderRecord.controls; }
  onSubmit(){
    this.submitted = true;
    if (this.orderRecord.invalid) {
      alert("Kindly fill order name and order quantity")
      return;
      }

    let resource = JSON.stringify(this.orderRecord.value);
    this._orderService.submitOrder(resource).subscribe(data=>{
      alert("you have successfully created");
      this._orderService.getOrderList().subscribe(data=>{
        this.orderList=data;
  
      });
    });

  }
  onSubmitUpdate()
  {
    this.submitted = true;
    if (this.orderRecord.invalid) {
      alert("Kindly fill order name and order quantity")
      return;
      }

    let resource = JSON.stringify(this.orderRecord.value);
    this._orderService.updateOrder(resource).subscribe(data=>{
      alert("you have Updated order");
      this._orderService.getOrderList().subscribe(data=>{
        this.orderList=data;
        this.createOrder=false;
        this.isupdate=false;
      });
    });
  }
  updateorder(data)
  {
    console.log(data)
    this.isupdate=true;
    this.orderRecord.patchValue({ordername:data.ordername});
    this.orderRecord.patchValue({orderQuantity:data.orderQuantity});
    this.orderRecord.patchValue({orderid:data.orderid});


  }
  createOrders(){
   // alert("dfasd")
    this.createOrder=true;
  }
  cancel(){
    this.createOrder=false;
  }
  cancelUpdate()
  {
    //  this.createOrder=true;
    this.isupdate=false;
  }
}
