import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import {OrderService} from '../order.service'
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  companys: SelectItem[];
  plants: SelectItem[];
  orderList:any;
  userDetails:any;
  userName:string="";
  password:string="";
  
  constructor(private _orderService:OrderService,private _router:Router)
  {

  }

  ngOnInit() {

    this.companys = [
      { label: '1', value: 'Company1' },
      { label: '2', value: 'Company2' },
      { label: '3', value: 'Company3' },
      { label: '4', value: 'Company4' }
    ];
    this.plants = [
      { label: '1', value: 'plants1' },
      { label: '2', value: 'plants2' },
      { label: '3', value: 'plants3' },
      { label: '4', value: 'plants4' }
    ];
  }


  validateLogin(){
    if((this.userName) && (this.password))
    {
      let sendingData= <any>{};;
      sendingData.userName=this.userName;
      sendingData.password=this.password;

      this._orderService.checkUser(sendingData).subscribe(data=>{
        this.userDetails=data;
        if(this.userDetails.length==0)
        {
          this.userName="";
          this.password="";
          alert("Please check username and password");
        }else{
          sessionStorage.setItem('userInfo',JSON.stringify(sendingData));
          alert("You have successfully logged in");
          this._router.navigateByUrl('/order');
        }
      });
    //  
    }else{

      alert("Kindly fill username and password");
      this.userName="";
      this.password="";
      //this._router.navigateByUrl('/');
      this.ngOnInit();
      //eturn;
    }

  } 


}
