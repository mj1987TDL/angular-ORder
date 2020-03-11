import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
class userDetails{
  constructor(
    public userName: string="Mallappa",
    public company: string="Thakralone Solutions Pvt",
    public plant:string="Plant"
  ){}

}
const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  userDetails:userDetails;


  constructor(private _http:HttpClient) { }

  checkUser(senddata): Observable<any>{
   // console.log(senddata);
    return this._http.post('http://localhost:3000/order/validateUser', 
    senddata,
   httpOptions
      );
  } 
  getOrderList():Observable<any>{
    return this._http.get('http://localhost:3000/order').pipe(
      retry(1),
      catchError(this.handleError)
    );

  }
  submitOrder(senddata):Observable<any>{
    console.log(senddata);
    return this._http.post('http://localhost:3000/order/createOrder', 
    senddata,
    httpOptions
      );

  }
  updateOrder(senddata):Observable<any>{
    console.log(senddata);
    return this._http.post('http://localhost:3000/order/updateOrder', 
    senddata,
    httpOptions
      );

  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
